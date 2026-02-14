"use client";

import { useLocalStorage } from "./useLocalStorage";
import { Todo } from "@/types/todo";

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const getActiveTodos = () => todos.filter((todo) => !todo.completed);

  const getCompletedTodos = () => todos.filter((todo) => todo.completed);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    getActiveTodos,
    getCompletedTodos,
  };
}
