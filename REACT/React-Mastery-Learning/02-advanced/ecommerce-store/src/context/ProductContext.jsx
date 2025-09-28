// 📚 CONCEPT: Product Context for Managing Product Data
// This context manages the product catalog and filtering

import React, { createContext, useContext, useState, useMemo } from "react";

const ProductContext = createContext();

// 📚 CONCEPT: Mock Data
// In a real app, this would come from an API
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    category: "Electronics",
    rating: 4.5,
    description: "High-quality wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    category: "Electronics",
    rating: 4.8,
    description: "Advanced smartwatch with health monitoring features",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300",
    category: "Home",
    rating: 4.3,
    description: "Programmable coffee maker for the perfect morning brew",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
    category: "Sports",
    rating: 4.6,
    description: "Comfortable running shoes with excellent support",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7f457444dac5?w=300",
    category: "Office",
    rating: 4.4,
    description: "Adjustable laptop stand for better ergonomics",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
    category: "Electronics",
    rating: 4.7,
    description: "Portable Bluetooth speaker with excellent sound quality",
  },
];

export const ProductProvider = ({ children }) => {
  const [products] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // 📚 CONCEPT: useMemo for Expensive Calculations
  // This prevents recalculating filtered products on every render
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy]);

  // 📚 CONCEPT: Derived Data
  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    return ["All", ...uniqueCategories];
  }, [products]);

  // 📚 CONCEPT: Context Value
  const value = {
    products: filteredProducts,
    allProducts: products,
    categories,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    getProductById: (id) =>
      products.find((product) => product.id === parseInt(id)),
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

/* 🎯 KEY LEARNING POINTS:
   1. useMemo - Optimizing expensive calculations
   2. Derived State - Computing values from other state
   3. Search and Filter - Implementing search functionality
   4. Sorting - Multiple sorting options
   5. Data Management - Organizing product data
   6. Performance - Preventing unnecessary recalculations
*/
