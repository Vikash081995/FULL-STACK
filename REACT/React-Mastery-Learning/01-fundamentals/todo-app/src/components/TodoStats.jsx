// 📚 CONCEPT: Statistics Component
// This component shows calculated data and demonstrates derived state

import React from "react";
import "./TodoStats.css";

// 📚 CONCEPT: Derived State and Calculations
// We calculate statistics from the todos array without storing them in state
function TodoStats({ todos, onClearCompleted }) {
  // 📚 CONCEPT: Computed Values
  // These values are calculated every time the component renders
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;
  const completionPercentage =
    totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  // 📚 CONCEPT: Conditional Rendering
  // Only show the clear button if there are completed todos
  const hasCompletedTodos = completedTodos > 0;

  return (
    <div className="todo-stats">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">{totalTodos}</div>
          <div className="stat-label">Total</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{completedTodos}</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{remainingTodos}</div>
          <div className="stat-label">Remaining</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{completionPercentage}%</div>
          <div className="stat-label">Progress</div>
        </div>
      </div>

      {/* 📚 CONCEPT: Conditional Rendering with && */}
      {/* Only render the button if there are completed todos */}
      {hasCompletedTodos && (
        <button onClick={onClearCompleted} className="clear-button">
          Clear Completed ({completedTodos})
        </button>
      )}
    </div>
  );
}

export default TodoStats;

/* 🎯 KEY LEARNING POINTS:
   1. Derived State - Calculating values from existing state
   2. Array Methods - filter() for counting completed todos
   3. Conditional Rendering - Showing elements based on conditions
   4. Mathematical Calculations - Computing percentages
   5. Props - Receiving data and functions from parent
   6. Clean Code - Separating concerns into different components
*/
