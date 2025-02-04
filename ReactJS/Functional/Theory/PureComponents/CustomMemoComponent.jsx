import { memo } from "react";

const CustomMemoComponent = memo(
  function CustomComponent({ data }) {
    return <div>{data.value}</div>;
  },
  (prevProps, nextProps) => {
    return (
      prevProps.data.value === nextProps.data.value &&
      prevProps.data.value === nextProps.data.value
    );
  }
);

export default CustomMemoComponent;
