import { useState, useEffect } from "react";
import Accordion from "./components/Accordion/Accordion";
import { items } from "./data/Accordion-data";
import Search from "./components/Search/Search";
import DropDown from "./components/DropDown/DropDown";
import { options } from "./data/dropdown-data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown && (
        <DropDown
          options={options}
          selected={selected}
          onSetSelected={setSelected}
        />
      )}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Accordion items={items} />
    </>
  );
}

export default App;
