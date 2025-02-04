/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";

function MyModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div onClick={onClose} className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
export default MyModal;
