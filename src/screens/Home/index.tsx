import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { CardComp, LoadingComp } from "../../components";
import styles from "./styles";
import { AdocaoTypes } from "../../types/Screen.types";
import { apiPublicacao } from "../../services/data";
import { IPublicacaoState } from "../../interfaces/Publicacao.interface";

export default function Home({ navigation }:AdocaoTypes) {
  const [isLoading, setIsLoading] = useState(true);
  const [publicacao, setPublicacao] = useState<IPublicacaoState[]>([]);



  useEffect(() => {
    async function loadPublicacao() {
      const response = await apiPublicacao.index();
      setPublicacao(response.data.data);
      setIsLoading(false);
      
    }
    navigation.addListener("focus", () => loadPublicacao());
  }, []);
  
  const renderItem = ({item}) => <CardComp data={item} />;
  return (
    <>
      
      {isLoading ? (
        <LoadingComp />
      ) : (
            
            <SafeAreaView style={styles.container}>
              {publicacao.length > 0 && (
                <FlatList
                  data={publicacao}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              )}

            </SafeAreaView>

        )}
    </>
  );
}