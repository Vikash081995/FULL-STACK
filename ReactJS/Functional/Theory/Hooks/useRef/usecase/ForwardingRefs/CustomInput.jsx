import { forwardRef } from "react";

const CustomeInput = forwardRef((props, ref) => {
  <input ref={ref} {...props} />;
});
