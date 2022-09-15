import React from "react";
import { View, Text, ImageBackground, Image, Alert } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";
import { ButtonComp, CardSocialComp } from "../../components";
import { useAuth } from "../../hook/auth";
import { IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";

export default function Perfil() {
  const {user, signOut}=useAuth();
  async function logout() {
    try {
        await signOut();
    }catch (error) {
        const err = error as AxiosError;
        const data = err.response?.data as IUser;
        let message = "";
        if (data.data) {
            for (const [key, value] of Object.entries(data.data)) {
                message = `${message} ${value}`;
            }
        }
        Alert.alert(`${data.message} ${message}`);
    }
}
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/cachorro.png")} />
        <Text style={styles.title}>{user?.name}</Text>
      <CardSocialComp>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocialComp>
      <CardSocialComp>
        <>
          <FontAwesome5 name="map-marker-alt" style={styles.icon} />
          <Text style={styles.link}>R. Maria Aparecida, 199, Centro</Text>
        </>
      </CardSocialComp>
      <View style={styles.button}>
      <Button
        title="Alterar Senha"
        type="primary"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="secondary" onPress={logout} />
      </View>
      
    </View>
  );
}