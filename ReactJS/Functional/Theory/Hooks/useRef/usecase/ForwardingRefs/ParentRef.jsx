import React, { useRef } from "react";
import CustomeInput from "./CustomInput";

function ParentRef() {
  const inputRef = useRef(null);
  return <CustomeInput ref={inputRef} />;
}

export default ParentRef;
