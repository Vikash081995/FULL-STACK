# Javascript in Jsx with curly brances

## Passing Strings with Quotes

> When you want to pass a string attribute to JSX, you put it in single or double quotes:

```jsx
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

> But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing " and " with { and }:

```jsx
export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}
```

> You can also use JavaScript expressions inside curly braces. For example, you can use the + operator to concatenate two strings:

```jsx
export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const isLoggedIn = true;
  return <h1>{isLoggedIn ? "Hello, " + description : "Please sign in"}</h1>;
}
```

## Using “double curlies”: CSS and other objects in JSX

In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX.

> to pass a JS object in JSX, you must wrap the object in another pair of curly braces:

```jsx
person={{ name: "Hedy Lamarr", inventions: 5 }}
```

````jsx
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
  ```You can move several expressions into one object, and reference them in your JSX inside curly braces

```jsx
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```
