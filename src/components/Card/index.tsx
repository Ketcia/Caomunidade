import React from 'react';
import { Text, View, Image } from "react-native";
import { IPublicacaoState, IPublicacao } from "../../interfaces/Publicacao.interface";
import styles from "./styles";
import { format } from "date-fns";


export default function Card({data}: IPublicacaoState) {
  return (
    <View style={styles.card}>
      <Text>
        {data?.user.name} - {""}
        {format(new Date(data.created_at), "dd/MM/yyyy HH:mm:ss")}
      </Text>
      <View style={styles.msg}>
        <Text>Título: {data.titulo}</Text>
        <Text>Publicacao: {data.descricao}</Text>
        <Image source={{ uri: data.imagem }} style={styles.img} />
        <View style={styles.topicos}>
          {data.categorias.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.categoria}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}