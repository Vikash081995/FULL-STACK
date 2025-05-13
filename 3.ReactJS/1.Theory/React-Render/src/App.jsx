import { ChildA } from "./components/Context/ContextChildren";

import ContextParent from "./components/Context/ContextParent";

function App() {
  return (
    <div>
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
