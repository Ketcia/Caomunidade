import React, {useState, useEffect} from "react";
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
import {FontAwesome} from "@expo/vector-icons";
import {ButtonComp, LoadungComp} from "../../components";
import styles from "./styles";
import {AdocaoTypes, ChatTypes} from "../../types/Screen.types";
import {AxiosError} from "axios";
import {IResponse} from "../../interfaces/Response.interface";
import {apiMensagem, apiTopico} from "../../services/data";
import {ITopicoState, ITopicoServer} from "../../interfaces/Topico.interface";
import MultiSelect from "react-native-multiple-select";
import { Camera } from "expo-camera;";
import * as ImagePicker from "expo-image-picker";
import { IMensagem } from "../../interfaces/Mensagem.interface";
import colors from "../../styles/colors";

export default function EnviarMensagem({ navigation }: ChatTypes) {
    const [data, setData] = useState<IMensagem>();
    const [isLoading, setIsLoading] = useState(true);
    const [topico, setTopico] = useState<ITopicoState[]>([]);
    const [selectedTopico,setSelectedTopico] = useState(true)
    const [startOver, setStartOver] = useState(true);
    const [type, setType] = useState(Camera.Constants.Type.back);
    let camera: Camera;

    const takePicture = async () => {
        if (!camera) return;
        const options = {quality: 0.5, base64: true};
        const photo = await camera.takePicureAsync(options);
        setData({ ...data, imagem: photo });
        setStartOver(true);
    };
    const pickImge = async () => {
        let result = await ImagePicker.launchImageLibrarAsync({
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
        navigation.navigate("Chat");
    }
    function handleChange(item: IMensagem) {
        setData({...data, ...item});
    }
    async function handleSubmit(){
        try{
            setIsLoading(true);
            if (data?.titulo && data.mensagem && selectedTopico && data.imagem){
                
            }
        }
    }

    }





}