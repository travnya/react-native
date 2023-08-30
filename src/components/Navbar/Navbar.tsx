import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = (props: any) => {
  return (
    <View style={styles.navbarContainer}>
      <Text>TODOшечка</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  navbarContainer: {
    paddingTop: 30,
    height: 70,
    width: "100%",
    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
  },
});
