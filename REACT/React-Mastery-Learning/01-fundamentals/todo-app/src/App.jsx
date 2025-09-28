// 📚 CONCEPT: Main App Component
// This is our root component that orchestrates the entire application

import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

function App() {
  // 📚 CONCEPT: State Management with useState
  // State is data that can change over time and causes re-renders
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React fundamentals",
      completed: false,
      priority: "high",
    },
    { id: 2, text: "Build a todo app", completed: true, priority: "medium" },
    {
      id: 3,
      text: "Master component props",
      completed: false,
      priority: "high",
    },
  ]);

  // 📚 CONCEPT: Event Handlers and State Updates
  // Functions that handle user interactions and update state
  const addTodo = (text, priority) => {
    const newTodo = {
      id: Date.now(), // Simple ID generation
      text,
      completed: false,
      priority,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // 📚 CONCEPT: JSX - JavaScript XML
  // JSX allows us to write HTML-like syntax in JavaScript
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 React Todo Mastery</h1>
        <p>Learn React concepts through hands-on practice</p>
      </header>

      <main className="app-main">
        {/* 📚 CONCEPT: Component Composition */}
        {/* We break our app into smaller, reusable components */}
        <TodoForm onAddTodo={addTodo} />
        <TodoStats todos={todos} onClearCompleted={clearCompleted} />
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;

/* 🎯 KEY LEARNING POINTS:
   1. useState Hook - Managing component state
   2. State Updates - Using functional updates for immutability
   3. Props - Passing data and functions to child components
   4. JSX - Writing HTML-like syntax in JavaScript
   5. Component Composition - Breaking UI into smaller pieces
   6. Event Handling - Responding to user interactions
*/
