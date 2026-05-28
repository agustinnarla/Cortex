import { NoteFastComponent } from "@/components/home/NoteFastComponent";
import { PomodoroComponent } from "@/components/home/PomodoroComponent";
import { SpotifyComponent } from "@/components/home/SpotifyComponent";
import { ToDoComponent } from "@/components/home/ToDoComponent";
import { WeatherTimerComponent } from "@/components/home/WheaterTimerComponent";
import React from "react";
import { Text, View } from "react-native";

export const HomePage = () => {
  return (
    <View>
      <WeatherTimerComponent />
      <SpotifyComponent />
      <View style={{ flexDirection: "row" }}>
        <NoteFastComponent />
        <ToDoComponent />
      </View>
      <PomodoroComponent />
    </View>
  );
};
