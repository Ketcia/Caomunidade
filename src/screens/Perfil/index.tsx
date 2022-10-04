import React, { useState, useEffect } from "react";
import { View, Text, Image, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";
import { ButtonComp, CardSocialComp, LoadingComp } from "../../components";
import { useAuth } from "../../hook/auth";
import { IUser } from "../../interfaces/User.interface";
import { AxiosError } from "axios";

export default function Perfil() {
  const { user, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && user.profile_photo_url) {
      console.log('teste', user.profile_photo_url)
      setIsLoading(false);
    }
  }, [user]);

  async function logout() {
    try {
      await signOut();
    } catch (error) {
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
    <>
      {isLoading ? (<LoadingComp />) : (
        <View style={styles.container}>
          <Image source={{ uri: 'https://www.varginha.cefetmg.br/wp-content/uploads/sites/11/2016/12/cefet_frente.jpg', }} style={styles.img} />

          <Text style={styles.title}>{user?.name}</Text>
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
            <Button title="Sair" type="primary" onPress={logout} />
          </View>

        </View>
      )}
    </>
  );
}