import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/themes/colors";

interface WeatherTimerProps {
  location?: string;
  timer?: string;
  temp?: string;
}

export const WeatherTimerComponent = ({
  location,
  timer,
  temp,
}: WeatherTimerProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text style={styles.textDetail}>{location ?? "Córdoba, Arg"}</Text>
        <Text style={styles.text}>{timer ?? "14:14"}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Ionicons name="cloud-outline" size={28} color={colors.primary} />
        <Text style={styles.text}>{temp ?? "18°C"}</Text>
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
  },
  text: {
    fontFamily: "InterMedium",
    fontSize: 22,
  },
  textDetail: {
    fontFamily: "GlassRegular",
    fontSize: 26,
  },
});
