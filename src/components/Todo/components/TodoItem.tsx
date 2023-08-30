import { StyleSheet, Text, TextInput, TextInputBase } from "react-native";
import { ITodoItem } from "./Todo";
import React, { FC } from "react";
import { Paragraph } from "../../shared/Paragraph";

interface IProps {
  todo: ITodoItem;
  setTodos: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
  index: number;
}

export const TodoItem: FC<IProps> = ({
  todo: { title, done },
  setTodos,
  index,
}) => {
  const handleDone = () => {
    setTodos((prev) => [
      ...prev.slice(0, index),
      {
        ...prev[index],
        done: !done,
      },
      ...prev.slice(index + 1),
    ]);
  };

  const styles = StyleSheet.create({
    text: {
      textDecorationLine: done ? "line-through" : "none",
      fontSize: 18,
      color: done ? "#037A37" : "#000000",
    },
  });

  return <Paragraph onPress={handleDone} style={styles.text} text={title} />;
};
