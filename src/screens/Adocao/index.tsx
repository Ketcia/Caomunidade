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
import {apiMensagem} from "../../services/data";
import {IMensagemState} from "../../interfaces/Mensagem.interface";
import styles from "./styles";
import data from "../../services/data";


export default function Adocao({navigation}:AdocaoTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [mensagem, setMensagem] = useState<IMensagemState[]>([]);
  function handleadocao() {
    navigation.navigate("FazerPublicacao");
  }

  useEffect(() => {
    async function loadMensagem() {
      const response = await apiMensagem.index();
      setMensagem(response.data.data);
      setIsLoading(false);
    }
    navigation.addListener("focus", () => loadMensagem());
  },[]);

  const renderItem = ({ item }) => <CardComp data={item} />;
  return (
      <>
        <SafeAreaView style={styles.container}>
          {mensagem.length > 0 && (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => String(item.id)}
              style={styles.list}
            />
          )}
          <TouchableOpacity style={styles.button} onPress={handleadocao}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
  );
}