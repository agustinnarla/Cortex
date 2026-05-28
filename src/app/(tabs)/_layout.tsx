import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";
import { colors } from "@/themes/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fffef6",
        },
        headerTitleStyle: {
          fontFamily: "InterBold",
        },
        tabBarStyle: {
          backgroundColor: "#fffef6",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              >
                <Ionicons name="home-outline" size={24} color="black" />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="task"
        options={{
          title: "Task",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              >
                <Ionicons name="file-tray-outline" size={24} color="black" />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          title: "Habits",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="black"
                />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="note"
        options={{
          title: "Note",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: "Pomodoro",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
              >
                <Ionicons name="time-outline" size={24} color="black" />
              </View>
            );
          },
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    paddingVertical: 1,
  },
  tabBarIconFocused: {
    borderTopWidth: 2,
    paddingVertical: 1,
    borderTopColor: colors.primary,
  },
});
