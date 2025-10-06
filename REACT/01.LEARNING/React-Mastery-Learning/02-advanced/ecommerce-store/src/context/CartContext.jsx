// 📚 CONCEPT: React Context for Global State
// Context allows us to share state across the entire component tree

import React, { createContext, useContext, useReducer } from "react";

// 📚 CONCEPT: Context Creation
// Create a context that will hold our cart state and functions
const CartContext = createContext();

// 📚 CONCEPT: useReducer for Complex State
// useReducer is better than useState for complex state logic
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item already exists in cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If exists, increase quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If new, add to cart
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove items with 0 quantity
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

// 📚 CONCEPT: Context Provider Component
// This component provides the context to all child components
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  // 📚 CONCEPT: Context Value Object
  // We provide both state and functions to manipulate it
  const value = {
    items: state.items,
    addToCart: (product) => dispatch({ type: "ADD_TO_CART", payload: product }),
    removeFromCart: (productId) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: productId }),
    updateQuantity: (productId, quantity) =>
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: productId, quantity },
      }),
    clearCart: () => dispatch({ type: "CLEAR_CART" }),
    getTotalItems: () =>
      state.items.reduce((total, item) => total + item.quantity, 0),
    getTotalPrice: () =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 📚 CONCEPT: Custom Hook for Using Context
// This makes it easier to use the context in components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

/* 🎯 KEY LEARNING POINTS:
   1. Context API - Global state management
   2. useReducer - Complex state logic
   3. Provider Pattern - Wrapping components
   4. Custom Hooks - Encapsulating context logic
   5. Immutable Updates - Never mutate state directly
   6. Error Handling - Checking if context exists
*/
