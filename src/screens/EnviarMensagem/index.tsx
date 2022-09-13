import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground,
    Image,
    Alert,
    TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {ButtonComp,LoadingComp} from "../../components";
import styles from "./styles";
import { AdocaoTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { apiMensagem, apiTopico} from "../../services/data";
import { ITopicoState, ITopicoServer } from "../../interfaces/Topico.interface";
import MultiSelect from "react-native-multiple-select";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import colors from "../../styles/colors";

export default function EnviarMensagem({ navigation }: AdocaoTypes) {
    const [data, setData] = useState<IMensagem>();
    const [isLoading, setIsLoading] = useState(true);
    const [topico, setTopico] = useState<ITopicoState[]>([]);
    const [selectedTopico, setSelectedTopico] = useState(true)
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const takePicture = async () => {
        if (!camera) return;
        const options = { quality: 0.5, base64: true };
        const photo = await camera.takePictureAsync(options);
        setData({ ...data, imagem: photo });
        setStartOver(true);
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [3, 3],
            quality: 0.5,
        });

        if (!result.cancelled) {
            setData({ ...data, imagem: result });
        }
    };

    function handleVoltar() {
        navigation.navigate("Adocao");
    }
    function handleChange(item: IMensagem) {
        setData({ ...data, ...item });
    }
    async function handleSubmit() {
        try {
            setIsLoading(true);
            if (data?.titulo && data.mensagem && selectedTopico && data.imagem) {
                const imageName = data.imagem.uri?.split("/").pop();
                const formData = new FormData();
                formData.append("imagem", data.imagem.base64);
                if (imageName) {
                    formData.append("file", imageName);
                }
                
                formData.append("titulo", data.titulo);
                formData.append("mensagem", data.mensagem);
                selectedTopico.forEach((e) => {
                    formData.append("topico[]", e);
                });
                await apiMensagem.store(formData as IMensagem);
                navigation.navigate("Adocao");
            } else {
                Alert.alert("Preencha todos os campos!!!");
                setIsLoading(false);
            }
        } catch (error) {
            const err = error as AxiosError;
            const data = err.response?.data as IResponse;
            let message = "";
            if (data.data) {
                for (const [key, value] of Object.entries(data.data)) {
                    message = `${message} ${value}`;
                }
            }
            Alert.alert(`${data.message} ${message}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        async function loadTopico() {
            const response = await apiTopico.index();
            const topicosServer = response.data.data.map((item: ITopicoServer) => ({
                id: item.id,
                name: item.topico,
            }));
            setTopico(topicosServer)
        }
        loadTopico();
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingComp />
            ) : (
                <View style={styles.container}>
                    {startOver ? (
                        <KeyboardAvoidingView style={styles.containerForm}>
                            <TextInput
                                style={styles.input}
                                placeholder="Título"
                                onChangeText={(i) => handleChange({ titulo: i })}
                            />
                            <TextInput
                                style={styles.input}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Descrição"
                                onChangeText={(i) => handleChange({ mensagem: i })}
                            />
                            <View style={styles.select}>
                                <MultiSelect
                                    items={topico}
                                    uniqueKey="id"
                                    selectText="Selecione o sexo"
                                    onSelectedItemsChange={(i) => setSelectedTopico(i)}
                                    selectedItems={selectedTopico}
                                    selectedItemTextColor={colors.marrom}
                                    tagBorderColor={colors.marrom}
                                    tagTextColor={colors.marrom}
                                    submitButtonColor={colors.marrom}
                                    styleDropdownMenu={styles.selectTopico}
                                    styleInputGroup={styles.selectTopico}
                                />
                            </View>
                            <View style={styles.imagem}>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={() => setStartOver(false)}
                                >
                                    <FontAwesome name="camera" size={24} color="preto" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={pickImage}
                                >
                                    <FontAwesome name="image" size={24} color="preto" />
                                </TouchableOpacity>
                                {data?.imagem && (
                                    <Image source={{ uri: data.imagem.uri }} style={styles.img} />
                                )}
                            </View>
                            <ButtonComp
                                title="Salvar"
                                    type="primary"
                                onPress={handleSubmit}
                            />
                            <ButtonComp
                                title="Voltar"
                                type="secondary"
                                onPress={handleVoltar}
                            />
                        </KeyboardAvoidingView>
                    ) : (
                        <Camera
                            style={styles.container}
                            type={type}
                            ref={(r) => {
                                if (r) camera = r;
                            }}
                        >
                            <View style={styles.buttonTop}>
                                <View style={styles.buttonTopPosition}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setStartOver(true);
                                            console.log("clicou");
                                        }}
                                    >
                                        <Text style={styles.textClose}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={styles.buttonFlip}
                                    onPress={() => {
                                        setType(
                                            type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back
                                        );
                                    }}
                                >
                                    <Text style={styles.textFlip}>Inverter</Text>
                                </TouchableOpacity>
                                <View style={styles.viewTakePicture}>
                                    <View style={styles.positionTakePicture}>
                                        <TouchableOpacity
                                            onPress={takePicture}
                                            style={styles.buttonTakePicture}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Camera>
                    )}
                </View>
                
            )}
        </>
    );

}