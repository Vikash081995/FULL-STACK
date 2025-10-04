// 📚 CONCEPT: List Rendering and Conditional Content
// This component demonstrates how to render lists and show different content based on state

import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

// 📚 CONCEPT: Props for Data and Functions
// This component receives todos array and callback functions from parent
function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  // 📚 CONCEPT: Conditional Rendering
  // Show different content based on whether we have todos or not
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <h3>No todos yet!</h3>
        <p>Add your first todo above to get started.</p>
      </div>
    );
  }

  // 📚 CONCEPT: List Rendering with map()
  // Transform array of data into array of JSX elements
  return (
    <div className="todo-list">
      <h2>Your Todos ({todos.length})</h2>
      <ul className="todo-items">
        {todos.map((todo) => (
          // 📚 CONCEPT: Key Prop
          // React needs a unique key for each list item for efficient updates
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

/* 🎯 KEY LEARNING POINTS:
   1. List Rendering - Using map() to render arrays
   2. Key Prop - Unique identifier for list items
   3. Conditional Rendering - Showing different content based on state
   4. Props Drilling - Passing data and functions down
   5. Component Composition - Using TodoItem inside TodoList
   6. Empty State - Handling when there's no data
*/
