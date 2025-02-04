import { useState } from "react";
import MyModal from "../components/Modals/Modals";

const ModalShow = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal</p>
      </MyModal>
    </div>
  );
};

export default ModalShow;
