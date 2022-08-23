import React from "react";
import {Text, View, Image, SafeAreaView } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";
import img from "../../assets/lazaro.png"


export default function Card({data}: CardProps) {
    return (
        <SafeAreaView>
            <View style={styles.card}>
                <Text>Título: {data.titulo}</Text>
                <Text>Descrição: {data.descricao}</Text>
                <Image source={img}/>
            </View>
        </SafeAreaView>
    );
  }