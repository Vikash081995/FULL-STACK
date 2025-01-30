// import Hello from "./components/Hello";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      {/* <Hello />
      <Greet name="Ravi" />
      <Greet name="Human">this is children props</Greet> */}
      <Greet name="new" heroName="Superman">
        <button> Action</button>
      </Greet>
    </>
  );
}

export default App;
