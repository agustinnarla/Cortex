import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/themes/colors";

const note = [
  {
    id: 1,
    content: "Comprar figuritas",
  },
  {
    id: 2,
    content: "Ir a la playa",
  },
];
export const NoteFastComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text style={styles.text}>Notas Rapidas</Text>
        {note.map((item) => (
          <View key={item.id}>
            <Text style={styles.textDetail}>- {item.content}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    width: "45%",
  },
  text: {
    fontFamily: "GlassRegular",
    fontSize: 22,
  },
  textDetail: {
    fontFamily: "InterRegular",
  },
});
