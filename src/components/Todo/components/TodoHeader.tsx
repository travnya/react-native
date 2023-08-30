import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ITodoItem } from "./Todo";
import React, { FC, useState } from "react";
import { Paragraph } from "../../shared/Paragraph";

interface IProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodoItem[]>>;
  todos: ITodoItem[];
}

export type TActiveTab = "active" | "finished" | "deleted";

export const TodoHeader: FC<IProps> = ({ setTodos, todos }) => {
  // states
  const [newGoalTitle, setNewGoalTitle] = useState<string>("");
  const [activeTab, setActiveTab] = useState<TActiveTab>("active");

  // handlers
  const handleAddGoal = () => {
    setTodos((prev) => [...prev, { title: newGoalTitle }]);
    setNewGoalTitle("");
  };

  return (
    <>
      <View style={styles.tabsWrapper}>
        <Button
          title="Активные"
          disabled={activeTab === "active"}
          onPress={() => setActiveTab("active")}
        />
        <Button
          title="Завершённые"
          disabled={activeTab === "finished"}
          onPress={() => setActiveTab("finished")}
        />
        <Button
          title="Удалённые"
          disabled={activeTab === "deleted"}
          onPress={() => setActiveTab("deleted")}
        />
      </View>
      <View style={styles.todoTitle}>
        <Paragraph text={`Всего целей: ${todos?.length}`} />
        <Button onPress={() => setTodos([])} title="Очистить всё" />
      </View>
      <View style={styles.todoTitle}>
        <TextInput
          style={styles.input}
          value={newGoalTitle}
          onChangeText={setNewGoalTitle}
        />
        <Button
          disabled={!newGoalTitle}
          onPress={handleAddGoal}
          title="Добавить цель"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  todoTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    width: "50%",
    padding: 5,
  },
  tabsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
