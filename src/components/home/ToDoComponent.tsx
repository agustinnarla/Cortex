import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/themes/colors";

const note = [
  {
    id: 1,
    content: "Comprar figuritas",
    important: "mucho",
    completed: false,
  },
  {
    id: 2,
    content: "Ir a la playa",
    important: "poco",
    completed: true,
  },
];
export const ToDoComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text style={styles.text}>ToDo</Text>
        {note.map((item) => (
          <View
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View
              style={[
                styles.itemText,
                item.important === "mucho" && styles.importantItemText,
                item.completed ? styles.completedItem : null,
              ]}
            />
            <Text
              style={
                item.completed ? styles.completedItemText : styles.textDetail
              }
            >
              {item.content}
            </Text>
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
  itemText: {
    borderRadius: 100,
    borderWidth: 1,
    width: 10,
    height: 10,
    marginRight: 10,
    borderColor: "blue",
  },
  importantItemText: {
    borderColor: "red",
  },
  completedItemText: {
    textDecorationLine: "line-through",
    color: "#64748B",
    fontFamily: "InterRegular",
  },
  completedItem: {
    backgroundColor: "grey",
    borderColor: "grey",
  },
  textDetail: {
    fontFamily: "InterRegular",
  },
});
