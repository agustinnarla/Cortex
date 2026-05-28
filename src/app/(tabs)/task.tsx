import { TaskPage } from "@/pages/tabs/Task";
import React from "react";
import { Text, View } from "react-native";

export default function TaskTab() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fffef6" }}>
      <TaskPage />
    </View>
  );
}
