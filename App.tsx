import { AppRegistry, StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar/Navbar";
import React from "react";
import { Todo } from "./src/components/Todo/components/Todo";

export const App = () => {
  return (
    <>
      <Navbar />
      <View style={styles.container}>
        <Todo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
    padding: 20,
  },
});
