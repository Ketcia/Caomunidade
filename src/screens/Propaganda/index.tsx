import React from "react";
import {
  View, Text,ImageBackground
} from "react-native";
import styles from "./styles";

export default function Propaganda() {
  
  return (
    <>
        <ImageBackground source={require("../../assets/fundo.png")}style={styles.container}>
        </ImageBackground>
    </>
     
  );
}