# Conditionally returning JSX

In React, you can conditionally render JSX using JavaScript syntax like `if`statements, `&&`, and `? :` operators.

App.js

```tsx
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
```

`if-else` statement:

```tsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

App.js

```tsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
```

## Conditionally returning nothing with `null`

App.js

```tsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
```

## Conditionally including JSX

```tsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

## Conditional (ternary) operator (`? :`)

> JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.

```tsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
```

```tsx
return <li className="item">{isPacked ? name + " ✔" : name}</li>;
```

### Logical AND operator (`&&`)

> A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is `true`. But if the condition is `false`,the whole expression becomes `false`

```tsx
return (
  <li className="item">
    {name} {isPacked && "✔"}
  </li>
);
```

## Conditionally assigning JSX to a variable

When the shortcuts get in the way of writing plain code, try using an `if`statement and a variable. You can reassign variables defined with `let`, so start by providing the default content you want to display

```tsx
let itemContent = name;
if (isPacked) {
  itemContent = name + " ✔";
}
<li className="item">{itemContent}</li>;
```
