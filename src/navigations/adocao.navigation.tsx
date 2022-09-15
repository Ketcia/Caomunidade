import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AdocaoStackParamList } from "../types/Screen.types";
import { AdocaoScreen, FazerPublicacaoScreen } from "../screens";

const Stack = createStackNavigator<AdocaoStackParamList>();

export default function AdocaoNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Adocao" component={AdocaoScreen} />
            <Stack.Screen name="FazerPublicacao" component={FazerPublicacaoScreen} />
        </Stack.Navigator>
    );
}