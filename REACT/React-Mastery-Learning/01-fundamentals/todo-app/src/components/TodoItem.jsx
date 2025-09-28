// 📚 CONCEPT: Individual Item Component
// This component represents a single todo item with its own behavior

import React from "react";
import "./TodoItem.css";

// 📚 CONCEPT: Props for Individual Data
// Each todo item receives its data and callback functions
function TodoItem({ todo, onToggle, onDelete }) {
  // 📚 CONCEPT: Event Handlers with Parameters
  // We need to pass the todo id to the parent functions
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  // 📚 CONCEPT: Dynamic Styling Based on State
  // We can apply different styles based on the todo's properties
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "priority-medium";
    }
  };

  // 📚 CONCEPT: Conditional CSS Classes
  // Apply different classes based on the todo's completed state
  const itemClasses = `todo-item ${
    todo.completed ? "completed" : ""
  } ${getPriorityClass(todo.priority)}`;

  return (
    <li className={itemClasses}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="todo-checkbox"
        />
        <span className="todo-text">{todo.text}</span>
        <span className="priority-badge">{todo.priority}</span>
      </div>
      <button
        onClick={handleDelete}
        className="delete-button"
        title="Delete todo"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;

/* 🎯 KEY LEARNING POINTS:
   1. Individual Component - Each todo is its own component
   2. Props - Receiving data and functions from parent
   3. Event Handlers - Handling clicks and changes
   4. Conditional Styling - Different styles based on state
   5. Dynamic Classes - Building class names dynamically
   6. Accessibility - Using title attribute for better UX
*/
