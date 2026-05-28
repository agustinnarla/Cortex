import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@/themes/colors";
import { router } from "expo-router";

export const LoginPage = () => {
  const handlePage = () => {
    router.replace("/(tabs)/home");
  };
  return (
    <SafeAreaView>
      <Text style={styles.title}>CORTEX</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido de vuelta</Text>
        <Text style={styles.text}>Autenticate para continuar</Text>
        <View style={styles.securityContainer}>
          <TouchableOpacity onPress={handlePage}>
            <Ionicons
              name="finger-print-outline"
              size={62}
              color={colors.primary}
            />
          </TouchableOpacity>

          <Text style={styles.securityText}>Seguridad</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "GlassRegular",
    textAlign: "center",
    fontSize: 42,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 100,
    gap: 10,
  },
  text: {
    fontFamily: "InterRegular",
    fontSize: 16,
  },
  securityContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    paddingVertical: 50,
    paddingHorizontal: 50,
    marginHorizontal: 50,
    marginVertical: 20,

    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  securityText: {
    fontFamily: "GlassRegular",
    color: "black",
    fontSize: 20,
  },
});
