import React from "react";
import "./CreateTodo.css";
const CreateTodoButton = (props) => {
  const createTodo = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <>
    <div className="btn-box">

    <i onClick={createTodo} className="bi bi-plus css-button-retro--blue"></i>
    </div>
    </>
  );
};

export default CreateTodoButton;
