// import Hello from "./components/Hello";
// import Greet from "./components/Greet";
import RefsDemo from "./components/RefsDemo";

import ParentComp from "./components/ParentComp";

function App() {
  return (
    <>
      {/* <Hello />
      <Greet name="Ravi" />
      <Greet name="Human">this is children props</Greet> */}
      {/* <Greet name="new" heroName="Superman">
        <button> Action</button>
      </Greet> */}
      <ParentComp />
      <RefsDemo />
    </>
  );
}

export default App;
