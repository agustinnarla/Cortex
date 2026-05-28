import { HomePage } from "@/pages/tabs/Home";
import React from "react";
import { Text, View } from "react-native";

export default function HomeTab() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fffef6" }}>
      <HomePage />
    </View>
  );
}
