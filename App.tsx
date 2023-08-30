import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/components/Navbar/Navbar";
import React from "react";
import { Todo } from "./src/components/Todo/components/Todo";
import { useStore } from "effector-react";
import { $theme } from "./src/lib/theme/theme";
import { MainTodoWrapper } from "./src/styles/main.styles";

const App = () => {
  // theme
  const theme = useStore($theme);

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Navbar />
      <MainTodoWrapper theme={theme}>
        <Todo />
      </MainTodoWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    // backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
