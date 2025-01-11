# UseState

## keypoints

> Call the useState hook when you want React to manage a value for a component. It returns an array with two elements: the state value and an updater function. You can pass in an initial value if required:

```jsx
const [value, setValue] = useState(initialValue);
```

> If you need to perform an expensive calculation to generate the initial state, pass it to useState in a function. React will run the function to get this lazy initial state only when it first calls the component:

```jsx
const [value, setValue] = useState(() => {
  return initialState;
});
```

> Use the updater function that useState returns to set a new value. The new value replaces the old value. React will schedule a re-render if the value has changed:

```jsx
setValue(newValue);
```

> If your state value is an object, make sure to copy over unchanged properties from the previous state when your updater function is updating only a subset of the properties:

```jsx
setValue({
  ...state,
  property: newValue,
});
```

> To be sure you’re working with the latest state value when calling the updater function and setting a new value based on the old one, pass the updater function a function as its argument. React will assign the latest state value to the function argument:

```jsx
setValue((value) => {
  return newValue;
});

setValue((state) => {
  return {
    ...state,
    property: newValue,
  };
});
```

> If you have multiple pieces of state, you can call useState multiple times. React uses the order of the calls to consistently assign values and updater functions to the correct variables:

```jsx
const [index, setIndex] = useState(0); // call 1
const [name, setName] = useState("Jamal"); // call 2
const [isPresenting, setIsPresenting] = useState(false); // call 3
```

> Focus on the state and how events will update the state. React will do its job of synchronizing the state and the UI:

```jsx
function Counter () {
  const [count, setCount] = useState(0);                           

  return (
    <p>{count}                                                     
      <button onClick={() => setCount(c => c + 1)}> + </button>    
    </p>
  );
}
```

## behind the scenes of useState

---

setps:

---

> 1.React calls the component.

To generate the UI for the page, React traverses the tree of components, calling each one. React will pass each component any props set as attributes in the JSX.

> 2.The component calls useState for the first time.

The component passes the initial value to the useState function. React sets the current value for that useState call from that component.

> 3.React returns the current value and an updater function as an array.

The component code assigns the value and updater function to variables for later use. The second variable name often starts with set (for example, value and setValue).

> 4.The component sets up an event handler.

The event handler may listen for user clicks, for example. The handler will change the state when it runs later. React will hook up the handler to the DOM when it updates the DOM in step 6.

> 5.The component returns its UI.

The component uses the current state value to generate its user interface and returns it, finishing its work.

> 6.React updates the DOM.

React updates the DOM with any changes needed.

> 7.The event handler calls the updater function.

An event fires, and the handler runs. The handler uses the updater function to change the state value.

> 8.React updates the state value.

React replaces the state value with the value passed by the updater function.

> 9.React calls the component.

React knows that the state value has changed and so must recalculate the UI.

> 10.The component calls useState for the second time.

This time, React will ignore the initial value argument.

> 11.React returns the current state value and the updater function.

React has updated the state value. The component needs the latest value.

> 12.The component sets up an event handler.

This is a new version of the handler and may use the newly updated state value.

> 13.The component returns its UI.

The component uses the current state value to generate its user interface and returns it, finishing its work.

> 14.React updates the DOM.

React compares the newly returned UI with the old and efficiently updates the DOM with any changes needed.
```
