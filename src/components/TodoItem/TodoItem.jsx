import React from "react";
import  "./item.css";
const TodoItem = (props) => {

  return (
    <>
      <li className="item-box">
        <span
        onClick={props.onComplete}
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
        >
          <i className="bi bi-check-all"></i>
        </span>
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete">
          <i 
          onClick={props.onDelete}
          className="bi bi-trash3"></i>
        </span>
      </li>
    </>
  );
};

export default TodoItem;
