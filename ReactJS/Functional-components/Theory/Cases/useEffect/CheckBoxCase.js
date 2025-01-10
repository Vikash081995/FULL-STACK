import React, { useState } from "react";

function CheckBoxCase() {
  const [checked, setChecked] = useState(false);



  //can be used to log out the state of the checkbox

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked ? "checked" : "not checked"}
    </div>
  );
}

export default CheckBoxCase;
