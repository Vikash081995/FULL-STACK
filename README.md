# Job-switch-preparation-2025

---

## React JS

### JSX

JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows developers to write HTML elements and components in a more concise and readable manner within JavaScript files.

### Props in react

Props are a way of passing data from a parent component to a child component in React. They are immutable and provide a way of making components dynamic and reusable

```import React from 'react';

const PassingProps = (props: { message: string }) => {
  return <div>{props?.message}</div>;
};

export default PassingProps;
```

### State in react

State in React refers to the internal data that a component can hold and manage. It allows components to store and update data that can be used to render dynamic content.

`import React, { useState } from 'react';
import { useState } from "react";
const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default State;
 `

### Lifecycle Methods

In React, lifecycle methods are special methods in class components that allow you to run code at particular times during a component’s life cycle. The lifecycle consists of three phases:

1.Mounting (when a component is added to the DOM)
2.Updating (when a component is re-rendered)
3.Unmounting (when a component is removed from the DOM)

### ERROR BOUNDARY

An Error Boundary is a React component that catches JavaScript errors in its child component tree during rendering, lifecycle methods, and in constructors of child components. It allows developers to gracefully handle errors by displaying a fallback UI instead of crashing the entire application

#### When Do Error Boundaries Catch Errors?

- In lifecycle methods
- In constructors of child components
- During rendering

#### What Error Boundaries Cannot Catch?

- Errors inside an event handler
- Errors in asynchronous code (e.g., setTimeout or fetch)
- Errors from the server
- Errors in the Error Boundary itself

#### Creating an Error boundary

- An Error Boundary must be a class component.

```import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStaeFromError(error) {
    return { hasError: true, message: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
```

#### Using error boundary

- Wrap any part of your application where you want to catch errors:

```import ErrorBoundary from "./1-creating-error-boundary";
import Dummy from "./dummy-component";

const UsingErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <Dummy />
    </ErrorBoundary>
  );
}
export default UsingErrorBoundary;
```

#### Handling Error in Functional component

```import ErrorBoundary from "./1.creating-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function BUggyComponen() {
  throw new Error("Crashed");
}

export default function UsingErrorBoundary() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BUggyComponen />
    </ErrorBoundary>
  );
}
```
