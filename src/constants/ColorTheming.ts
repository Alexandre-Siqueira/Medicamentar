import React from "react";
import { Appearance } from "react-native";

const colorScheme = () => (Appearance.getColorScheme() === "dark") ? true : false;

const colorTheme = {
  light: {
    text: "#000000",
    primary: "#FFFFFF",
    secondary: "#20A2EB",
  },
  dark: {
    text: "#FFFFFF",
    primary: "#131313",
    secondary: "#656565",
  }
}

export const bgThemeColor = colorScheme() ? colorTheme.light.primary : colorTheme.dark.primary;
export const fgThemeColor = colorScheme() ? colorTheme.light.secondary : colorTheme.dark.secondary;
export const textThemeColor = colorScheme() ? colorTheme.dark.text : colorTheme.light.text;