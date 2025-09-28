# 🚀 Quick Start Guide

## Getting Started with React Mastery Projects

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- A code editor (VS Code recommended)

### Project 1: Todo App (Fundamentals)

```bash
# Navigate to the todo app directory
cd 01-fundamentals/todo-app

# Install dependencies
npm install

# Start the development server
npm run dev

# Open your browser to http://localhost:3000
```

**What you'll learn:**

- React components and JSX
- State management with useState
- Event handling
- Props and component communication
- Conditional rendering
- List rendering

### Project 2: E-commerce Store (Advanced)

```bash
# Navigate to the e-commerce store directory
cd 02-advanced/ecommerce-store

# Install dependencies
npm install

# Start the development server
npm run dev

# Open your browser to http://localhost:3000
```

**What you'll learn:**

- React Router for navigation
- Context API for global state
- useReducer for complex state
- Performance optimization
- Component composition
- Advanced patterns

## 🎯 Learning Path

### Week 1: Fundamentals

1. **Day 1-2**: Complete the Todo App
2. **Day 3-4**: Practice with exercises in LEARNING_GUIDE.md
3. **Day 5-7**: Build additional features and experiment

### Week 2: Advanced Concepts

1. **Day 1-3**: Complete the E-commerce Store
2. **Day 4-5**: Implement advanced features
3. **Day 6-7**: Build your own project using learned concepts

### Week 3: Mastery

1. **Day 1-3**: Build the Social Media Dashboard
2. **Day 4-5**: Add testing and optimization
3. **Day 6-7**: Deploy and share your projects

## 🛠️ Development Tips

### VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

### Useful Commands

```bash
# Create a new React project
npm create vite@latest my-app -- --template react

# Install additional packages
npm install react-router-dom
npm install styled-components

# Build for production
npm run build

# Preview production build
npm run preview
```

### Debugging Tips

1. Use React DevTools browser extension
2. Add console.log statements for debugging
3. Use the browser's developer tools
4. Check the Network tab for API calls
5. Use the Components tab in React DevTools

## 🎯 Exercises to Try

### Todo App Extensions

1. Add due dates to todos
2. Implement todo categories
3. Add search functionality
4. Persist data to localStorage
5. Add drag-and-drop reordering

### E-commerce Store Extensions

1. Add user authentication
2. Implement product reviews
3. Add wishlist functionality
4. Create admin panel
5. Add payment integration

## 🚨 Troubleshooting

### Common Issues

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

**Module not found:**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**

```bash
# Check for syntax errors
npm run build
# Fix any TypeScript errors
npx tsc --noEmit
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

Happy coding! 🎉
