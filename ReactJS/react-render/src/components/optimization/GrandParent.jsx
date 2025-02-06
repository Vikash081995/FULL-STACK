import { useState } from "react";
import PareentOne from "./ParentOne";
import ChildOne from "./ChildOne";

function GrandParent() {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParent Count - {newCount}
      </button>
      <PareentOne newCount={newCount}>
        <ChildOne />
      </PareentOne>
    </div>
  );
}

export default GrandParent;
