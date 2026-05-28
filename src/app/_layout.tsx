import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    GlassRegular: require("@/assets/fonts/GlassAntiqua-Regular.ttf"),
    InterLight: require("@/assets/fonts/Inter-Light.ttf"),
    InterRegular: require("@/assets/fonts/Inter-Regular.ttf"),
    InterBold: require("@/assets/fonts/Inter-Bold.ttf"),
  });
  if (!loaded) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
