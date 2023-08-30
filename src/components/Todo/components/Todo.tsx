import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TodoItem } from "./TodoItem";
import React from "react";
import { TodoHeader } from "./TodoHeader";

export interface ITodoItem {
  title?: string;
  done?: boolean;
  id?: number;
}

export const Todo = () => {
  // states
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  return (
    <>
      <TodoHeader setTodos={setTodos} todos={todos} />
      <ScrollView style={{ ...styles.todosWrapper, rowGap: 20 }}>
        {todos?.map((todo, index) => (
          <TodoItem todo={todo} setTodos={setTodos} key={index} index={index} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  todosWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "75%",
    paddingHorizontal: 20,
  },
});
