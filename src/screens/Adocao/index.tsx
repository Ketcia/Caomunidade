import React, {useEffect, useState} from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import {CardComp, LoadingComp} from "../../components";
import {AdocaoTypes} from "../../types/Screen.types";
import {apiPublicacao} from "../../services/data";
import {IPublicacaoState} from "../../interfaces/Publicacao.interface";
import styles from "./styles";
import data from "../../services/data";


export default function Adocao({navigation}:AdocaoTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [publicacao, setPublicacao] = useState<IPublicacaoState[]>([]);
  function handleadocao() {
    navigation.navigate("FazerPublicacao");
  }

  useEffect(() => {
    async function loadPublicacao() {
      const response = await apiPublicacao.index();
      setPublicacao(response.data.data);
      setIsLoading(false);
    }
    navigation.addListener("focus", () => loadPublicacao());
  },[]);

  const renderItem = ({ item }) => <CardComp data={item} />;
  return (
      <>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handleadocao}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
  );
}