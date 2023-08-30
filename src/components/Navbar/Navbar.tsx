import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import SunIcon from "../../../assets/sun.svg";
// @ts-ignore
import MoonIcon from "../../../assets/moon.svg";
import { $theme, switchTheme } from "../../lib/theme/theme";
import { useStore } from "effector-react";

export const Navbar = (props: any) => {
  const theme = useStore($theme);

  return (
    <View
      style={
        theme === "light" ? styles.lightNavbarContainer : styles.navbarContainer
      }
    >
      <Text>TODOшечка</Text>
      {theme === "light" ? (
        <SunIcon width={25} height={25} onPress={switchTheme} />
      ) : (
        <MoonIcon width={30} height={30} onPress={switchTheme} />
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  navbarContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#343436",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
  lightNavbarContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "#dee880",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
});
