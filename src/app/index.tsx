import { colors } from "@/themes/colors";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function SplashSreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.Image
          source={require("@/assets/images/snoppy.png")}
          style={styles.icon}
          entering={FadeIn.duration(2000)}
        />
        <Animated.Text exiting={FadeIn.duration(2000)} style={styles.title}>
          CORTEX
        </Animated.Text>
        <Animated.Text exiting={FadeIn.duration(3000)} style={styles.loading}>
          Cargando{" "}
          <Animated.Text
            exiting={FadeOut.duration(4000)}
            style={styles.loadingText}
          >
            ...
          </Animated.Text>
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    gap: 100,
    alignItems: "center",
  },
  icon: {
    width: 120,
    height: 120,
  },
  title: {
    fontFamily: "GlassRegular",
    fontSize: 32,
    textAlign: "center",
  },
  loading: {
    fontFamily: "InterRegular",
    textAlign: "center",
  },
  loadingText: {
    fontFamily: "InterRegular",
    color: colors.primary,
    letterSpacing: 1,
  },
});
