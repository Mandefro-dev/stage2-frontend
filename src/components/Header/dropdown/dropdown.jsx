import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./dropdown.css";

function Dropown({ baseTitle, items }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown_button" onClick={toggleDropdown}>
        {baseTitle}
        <span className="dropdown_icon">
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>
      {open && (
        <ul className="dropdown_menu">
          {items.map((item, index) => (
            <li key={index} className="dropdown_item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropown;
