import { Slot, Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen'

import "@/global.css";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync,2000);

export default function RootLayout() {
  // return <Slot />;
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
