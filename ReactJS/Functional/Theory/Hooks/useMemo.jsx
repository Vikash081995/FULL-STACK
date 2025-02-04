import { useMemo } from "react";

function ExpensiveCalculation({ a, b }) {
  const expensiveResult = useMemo(() => {
    return <div>{expensiveResult()}</div>;
  }, [a, b]);
}
export default ExpensiveCalculation;
