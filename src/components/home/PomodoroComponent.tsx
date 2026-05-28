import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "@/themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export const PomodoroComponent = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text style={styles.text}>Pomodoro</Text>
        <View style={styles.timer}>
          <Text style={styles.timerText}>25:00</Text>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="play-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="refresh-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "GlassRegular",
    fontSize: 26,
    textAlign: "center",
  },
  timer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    marginTop: 10,
  },
  timerText: {
    fontSize: 26,
    fontFamily: "InterBold",
  },
  iconButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F6F6F6",
  },
});
