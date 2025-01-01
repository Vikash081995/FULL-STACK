import { useState, useEffect } from "react";
import Accordion from "./components/Accordion/Accordion";
import { items } from "./data/Accordion-data";
import Search from "./components/Search/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Accordion items={items} />
    </>
  );
}

export default App;
