import { useMemo } from "react";

const ExpensiveCalculations = ({ items }) => {
  const totalValue = useMemo(() => {
    console.log("computing total value");

    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>Total:${totalValue}</div>;
};

export default ExpensiveCalculations;
