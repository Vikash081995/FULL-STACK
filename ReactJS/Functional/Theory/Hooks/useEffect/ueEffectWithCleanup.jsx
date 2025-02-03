import { useEffect } from "react";
import HookMouse from "./UseEffectRunsOnce";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
}
