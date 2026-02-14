"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useTodos } from "@/hooks/useTodos";
import { useState } from "react";
import { Trash2 } from "lucide-react";

type ViewFilter = "all" | "active" | "completed";

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo, getActiveTodos, getCompletedTodos } = useTodos();
  const [inputValue, setInputValue] = useState("");
  const [viewFilter, setViewFilter] = useState<ViewFilter>("all");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const getFilteredTodos = () => {
    switch (viewFilter) {
      case "active":
        return getActiveTodos();
      case "completed":
        return getCompletedTodos();
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const activeTodosCount = getActiveTodos().length;
  const completedTodosCount = getCompletedTodos().length;

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-background to-muted/20">
      <main className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">Todo App</h1>
          <p className="text-muted-foreground">
            Keep track of your tasks with localStorage persistence
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Add New Todo</CardTitle>
            <CardDescription>
              Create a new task to keep yourself organized
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleAddTodo}>Add Todo</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Todos</CardTitle>
                <CardDescription>
                  {activeTodosCount} active, {completedTodosCount} completed
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={viewFilter === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewFilter("active")}
                >
                  Active
                </Button>
                <Button
                  variant={viewFilter === "completed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewFilter("completed")}
                >
                  Completed
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredTodos.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                {viewFilter === "active" && "No active todos. Great job!"}
                {viewFilter === "completed" && "No completed todos yet."}
                {viewFilter === "all" && "No todos yet. Add one to get started!"}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
                  >
                    <Checkbox
                      id={todo.id}
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                    />
                    <label
                      htmlFor={todo.id}
                      className="flex-1 cursor-pointer select-none"
                    >
                      <div
                        className={`font-medium ${
                          todo.completed
                            ? "line-through text-muted-foreground"
                            : ""
                        }`}
                      >
                        {todo.text}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Created {new Date(todo.createdAt).toLocaleString()}
                      </div>
                    </label>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTodo(todo.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
