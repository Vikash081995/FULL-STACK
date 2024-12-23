# Job-switch-preparation-2025

## React JS

---------------------------------------------------------------------------------
JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows developers to write HTML elements and components in a more concise and readable manner within JavaScript files.

---------------------------------------------------------------------------------

## Props in react

 Props are a way of passing data from a parent component to a child component in React. They are immutable and provide a way of making components dynamic and reusable

```import React from 'react';

const PassingProps = (props: { message: string }) => {
  return <div>{props?.message}</div>;
};

export default PassingProps;
------------------------------------------------------------
