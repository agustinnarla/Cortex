import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/themes/colors";

interface WeatherTimerProps {
  name?: string;
  image?: string;
}

export const SpotifyComponent = ({ name, image }: WeatherTimerProps) => {
  const images: Record<string, any> = {
    portada: require("@/assets/images/portada.png"),
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text style={styles.text}>{name ?? "Otra vuelta de tuerca"}</Text>
        <Image source={images[image ?? "portada"]} style={styles.image} />
      </View>
      <View
        style={{
          alignItems: "flex-end",
        }}
      >
        <Ionicons
          name="musical-notes-outline"
          size={28}
          color={colors.primary}
        />
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
    fontFamily: "GlassRegular",
    fontSize: 26,
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
