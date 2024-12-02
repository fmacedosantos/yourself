import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="screens" />
        <Stack.Screen name="confirmPassword/index"/>
        <Stack.Screen name="settings/index"/>
        <Stack.Screen name="pomodoro/index"/>
        <Stack.Screen name="editTimer/index"/>
    </Stack>
  );
}
