import React from "react";
import {
  View, Text, Image, SafeAreaView, FlatList
} from "react-native";
import styles from "./styles";
import data from "../../services/data";
import Card from "../../components/Card";


export default function Chat() {
  const renderItem = ({ item }: any) => <Card data={item} />
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          style={styles.list}
        />
      </SafeAreaView>
  );
}