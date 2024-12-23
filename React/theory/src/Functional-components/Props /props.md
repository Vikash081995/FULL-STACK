# Props in react

 -Props are a way of passing data from a parent component to a child component in React. They are immutable and provide a way of making components dynamic and reusable

```import React from 'react';

const PropsExample = (props) => {
  return <p>{props.message}</p>;
}

export default PropsExample;
`
