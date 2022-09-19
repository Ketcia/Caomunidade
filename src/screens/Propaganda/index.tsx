import React from "react";
import {
  View, Text
} from "react-native";
import styles from "./styles";

export default function Propaganda() {
  
  return (
    <>
       <View style={styles.container}>
          <Text style={styles.text}>O Caomunidade foi criado pelas alunas do 
            Cefet-MG de Varginha. Seu intuíto é ajudar as 
            ongs e a sociedade com a adoção e doação de 
            doguinhos, para que o abandono e a morte desses 
            animaisinhos não aconteçam com frequência. 
            Caso você queria entrar para essa causa, nos 
            mande um email: freedomcefet@gmail.com</Text>
      </View>
    </>
     
  );
}