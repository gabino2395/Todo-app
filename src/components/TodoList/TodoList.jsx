import React from "react";
import  "./list.css"
const TodoList = (props) => {
  return (
    <>
      <section>
        <ul>{props.children}</ul>
      </section>
    </>
  );
};

export default TodoList;
