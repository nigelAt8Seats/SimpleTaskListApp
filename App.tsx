import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "Sample Task" },
  ]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = async () => {
    if (newTask.trim()) {
      await saveTasksToServer(tasks);
      setTasks([...tasks, { id: tasks.length + 1, name: newTask }]);
      setNewTask("");
    }
  };

  const saveTasksToServer = async (tasks: any[]) => {
    return await new Promise<string>((resolve, reject) => {
      // Simulating a really show server save
      setTimeout(() => {
        // Here you would normally save tasks to the server
        console.log("Tasks saved to server:", tasks);
        resolve("ok");
      }, 1000);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <ScrollView>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskContainer}>
            <Text>{task.name}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New Task"
      />
      <TouchableOpacity onPress={addTask} style={styles.button}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
