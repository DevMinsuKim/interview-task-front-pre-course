import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  content: string;
  status: "To Do" | "Done";
}

export const useTaskManager = (iniTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(iniTasks);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const newTask: Task = {
        id: uuidv4(),
        content: inputValue,
        status: "To Do",
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const doneTask = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "To Do" ? "Done" : "To Do" }
          : task
      )
    );
  };

  return {
    tasks,
    inputValue,
    setInputValue,
    addTask,
    deleteTask,
    doneTask,
  };
};
