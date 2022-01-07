import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "../components/Header";
import { Task, TasksList } from "../components/TasksList";
import { TodoInput } from "../components/TodoInput";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks([
      ...tasks,
      { id: new Date().getTime(), title: newTaskTitle, done: false },
    ]);
  }

  function handleToggleTaskDone(id: number) {
    const newArrayToggleTask = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
        return task;
      }
      return task;
    });

    setTasks(newArrayToggleTask);
  }

  function handleRemoveTask(id: number) {
    const newArrayItemRemoved = tasks.filter((task) => task.id !== id);
    setTasks(newArrayItemRemoved);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
