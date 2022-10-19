import React from 'react';
import { Text, View, Image,TouchableOpacity } from "react-native";
import { IPublicacaoState, IPublicacao } from "../../interfaces/Publicacao.interface";
import styles from "./styles";
import { format } from "date-fns";


export default function Card({data}: IPublicacaoState) {

  function handleadocao() {
    console.log("Perfil")
  }
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleadocao}>
      <Text style={styles.usuario}>
        {data?.user.name}
      </Text>
      </TouchableOpacity>
      
      <View>
        <Text style={styles.titulo}>{data.titulo}</Text>
        <Text>{data.descricao}</Text>
        <Image source={{ uri: data.imagem }} style={styles.img} />
        <View style={styles.topicos}>
          {data?.categoria.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.categoria}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}