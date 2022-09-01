import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, AdocaoScreen, PropagandaScreen } from "../screens";
import colors from "../styles/colors";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.cinza,
        tabBarActiveTintColor: colors.branco,
        tabBarInactiveBackgroundColor: colors.preto,
        tabBarInactiveTintColor: colors.branco,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="house" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Adocao"
        component={AdocaoScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="paw" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Propaganda"
        component={PropagandaScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="notification" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={AdocaoScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}