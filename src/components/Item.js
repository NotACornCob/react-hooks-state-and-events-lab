import React, { useState } from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false);
  const className = isOn ? "in-cart" : "false"
  
  function handleClick() {
    setIsOn(!isOn)
  }
  return (
    <li className={className}>
      <span>{name}</span>
      <span className={className}>{category}</span>
      <button className="add" onClick={handleClick}>{isOn ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
