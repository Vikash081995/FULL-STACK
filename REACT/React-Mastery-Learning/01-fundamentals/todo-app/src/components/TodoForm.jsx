// 📚 CONCEPT: Form Component with Props
// This component demonstrates how to handle user input and pass data to parent

import React, { useState } from "react";
import "./TodoForm.css";

// 📚 CONCEPT: Props - Data passed from parent to child
// Props make components reusable and configurable
function TodoForm({ onAddTodo }) {
  // 📚 CONCEPT: Local State for Form Input
  // Each component can have its own state
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  // 📚 CONCEPT: Event Handlers
  // Functions that respond to user interactions
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // 📚 CONCEPT: Input Validation
    if (text.trim() === "") {
      alert("Please enter a todo item!");
      return;
    }

    // 📚 CONCEPT: Calling Parent Functions via Props
    // We call the function passed from parent with our data
    onAddTodo(text.trim(), priority);

    // Reset form after submission
    setText("");
    setPriority("medium");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  // 📚 CONCEPT: JSX with Event Handlers
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <select
          value={priority}
          onChange={handlePriorityChange}
          className="priority-select"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button type="submit" className="add-button">
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default TodoForm;

/* 🎯 KEY LEARNING POINTS:
   1. Props - Receiving data from parent component
   2. Controlled Components - Input value controlled by state
   3. Event Handling - onSubmit, onChange events
   4. Form Validation - Checking input before submission
   5. State Management - Local state for form inputs
   6. Parent-Child Communication - Calling parent functions
*/
