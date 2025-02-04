// import Hello from "./components/Hello";
// import Greet from "./components/Greet";
// import RefsDemo from "./components/RefsDemo";
// import ParentComp from "./components/ParentComp";
// import PortalDemo from "./components/PortalDemo";
// import Hero from "./components/Hero";
// import ErrorBoundary from "./components/ErrorBoundary";
import { UserProvider } from "./components/userContext";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <>
      {/* <Hello />
      <Greet name="Ravi" />
      <Greet name="Human">this is children props</Greet> */}
      {/* <Greet name="new" heroName="Superman">
        <button> Action</button>
      </Greet> */}
      {/* <ParentComp />
      <RefsDemo />
      <PortalDemo />
      <div>
        <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div> */}
      <UserProvider name="Vish">
        <ComponentC />
      </UserProvider>
    </>
  );
}

export default App;
