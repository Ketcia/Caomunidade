import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonComp, LoadingComp } from "../../components";
import styles from "./styles";
import { AdocaoTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";
import { apiPublicacao, apiCategoria } from "../../services/data";
import {
  ICategoriaState,
  ICategoriaServer,
} from "../../interfaces/Categoria.interface";
import MultiSelect from "react-native-multiple-select";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { IPublicacao } from "../../interfaces/Publicacao.interface";
import colors from "../../styles/colors";

export default function FazerPublicacao({ navigation }: AdocaoTypes) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  const [data, setData] = useState<IPublicacao>();
  const [isLoading, setIsLoading] = useState(true);
  const [categoria, setCategoria] = useState<ICategoriaState[]>([]);
  const [selectedCategoria, setSelectedCategoria] = useState<number[]>([]);
  const [startOver, setStartOver] = useState(true);
  const [type, setType] = useState<"back" | "front">("back");

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, []);

  const takePicture = async () => {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync({
      quality: 0.5,
      base64: true,
    });
    setData({ ...data, imagem: photo });
    setStartOver(true);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setData({ ...data, imagem: result.assets[0] });
    }
  };

  function handleChange(item: IPublicacao) {
    setData({ ...data, ...item });
  }

  async function handleSubmit() {
    try {

     /*  console.log("DATA:", data);
      console.log("CATEGORIAS SELECIONADAS:", selectedCategoria);
      setIsLoading(true); */

      if (!data?.titulo || !data.descricao || !data.imagem) {
        Alert.alert("Preencha todos os campos!");
        return;
      }

      const formData = new FormData();

      formData.append("titulo", data.titulo);
      formData.append("descricao", data.descricao);
      formData.append("imagem", data.imagem.base64);
      selectedCategoria.forEach((id) => {
        formData.append("topico[]", String(id));
      });

      
      await apiPublicacao.store(formData as any);
      navigation.navigate("Adocao");
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IResponse;
      Alert.alert(data?.message ?? "Erro ao salvar");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
  async function loadCategoria() {
    try {
      const response = await apiCategoria.index();

      const categoriaServer = response.data.data.map(
        (item: ICategoriaServer) => ({
          id: item.id,
          name: item.topico,
        })
      );

      setCategoria(categoriaServer);
    } catch (error) {
      console.log("Erro ao carregar categorias", error);
    } finally {
      setIsLoading(false);
    }
  }

  loadCategoria();
}, []);

  if (!permission?.granted) {
    return <LoadingComp />;
  }

  return isLoading ? (
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
            multiline
            numberOfLines={4}
            placeholder="Descrição"
            onChangeText={(i) => handleChange({ descricao: i })}
          />

            <MultiSelect
              items={categoria}
              uniqueKey="id"
              displayKey="name"
              selectText="Selecione as categorias"
              onSelectedItemsChange={(items) => setSelectedCategoria(items)}
              selectedItems={selectedCategoria}
              hideSubmitButton
              styleMainWrapper={{ width: "80%" }}
              styleDropdownMenuSubsection={{
                borderWidth: 1,
                borderColor: colors.marrom,
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                height: 55,
              }}
              selectedItemTextColor={colors.marromC}
              selectedItemIconColor={colors.marromC}
              itemTextColor="#000"
              submitButtonColor={colors.marromC}
            />

          <View style={styles.imagem}>

              <View style={styles.buttonCamera}>
              <TouchableOpacity
                style={styles.buttonImage}
                onPress={() => setStartOver(false)}
              >
                <FontAwesome name="camera" size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonImage}
                onPress={pickImage}
              >
                <FontAwesome name="image" size={24} />
              </TouchableOpacity>
              </View>
                            {data?.imagem && (
              <Image source={{ uri: data.imagem.uri }} style={styles.img} />
            )}

          </View>

          <ButtonComp title="Salvar" type="primary" onPress={handleSubmit} />
          <ButtonComp
            title="Voltar"
            type="secondary"
            onPress={() => navigation.goBack()}
          />
        </KeyboardAvoidingView>
      ) : (
        <CameraView
          ref={cameraRef}
          style={styles.container}
          facing={type}
        >
          <TouchableOpacity
            onPress={() =>
              setType(type === "back" ? "front" : "back")
            }
          >
            <Text>Inverter</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={takePicture}>
            <Text>📸</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setStartOver(true)}>
            <Text>X</Text>
          </TouchableOpacity>
        </CameraView>
      )}
    </View>
  );
}
