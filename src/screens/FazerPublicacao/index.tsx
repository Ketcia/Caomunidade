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
import { apiPublicacao, apiCategoria} from "../../services/data";
import { ICategoriaState, ICategoriaServer } from "../../interfaces/Categoria.interface";
import MultiSelect from "react-native-multiple-select";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { IPublicacao } from "../../interfaces/Publicacao.interface";
import colors from "../../styles/colors";

export default function FazerPublicacao({ navigation }: AdocaoTypes) {
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [data, setData] = useState<IPublicacao>();
    const [isLoading, setIsLoading] = useState(true);
    const [categoria, setCategoria] = useState<ICategoriaState[]>([]);
    const [selectedCategoria, setSelectedCategoria] = useState([])
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
    function handleChange(item: IPublicacao) {
        setData({ ...data, ...item });
    }
    async function handleSubmit() {
        try {
            setIsLoading(true);
            if (data?.titulo && data.descricao && selectedCategoria && data.imagem) {
                const imageName = data.imagem.uri?.split("/").pop();
                const formData = new FormData();
                formData.append("imagem", data.imagem.base64);
                if (imageName) {
                    formData.append("file", imageName);
                }
                
                formData.append("titulo", data.titulo);
                formData.append("descricao", data.descricao);
                selectedCategoria.forEach((e) => {
                    formData.append("topico[]", e);
                });
                await apiPublicacao.store(formData as IPublicacao);
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
            console.log(message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        async function loadCategoria() {
            const response = await apiCategoria.index();
            const categoriaServer = response.data.data.map((item: ICategoriaServer) => ({
                id: item.id,
                name: item.topico,
            }));
            setCategoria(categoriaServer)
        }
        loadCategoria();
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
                                onChangeText={(i) => handleChange({ descricao: i })}
                            />
                            <View style={styles.select}>
                                <MultiSelect
                                    items={categoria}
                                    uniqueKey="id"
                                    selectText="Selecione as categorias"
                                    onSelectedItemsChange={(i:any) => setSelectedCategoria(i)}
                                    selectedItems={selectedCategoria}
                                    fixedHeight={true}
                                    selectedItemTextColor={colors.marromC}
                                    tagBorderColor={colors.marrom}
                                    tagTextColor={colors.marrom}
                                    submitButtonColor={colors.marromC}
                                    styleDropdownMenu={styles.selectTopico}
                                    styleInputGroup={styles.selectTopico}
                                    hideSubmitButton={true}
                            
                                />
                            </View>
                            <View style={styles.imagem}>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={() => setStartOver(false)}
                                >
                                    <FontAwesome name="camera" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={pickImage}
                                >
                                    <FontAwesome name="image" size={24} color="black" />
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
                                type="primary"
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