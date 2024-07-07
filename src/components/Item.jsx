import React from "react";


const Item = (props) => {
  return (
    <li className="todo-item">
      <span>
        {props.completed ? <></> : <input type="checkbox"></input>}
        <span className="todo-item-text">{props.name}</span>
      </span>
      <p>...</p>
    </li>
  );
};

export default Item;
