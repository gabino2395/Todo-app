import React from 'react';
import { TodoContext } from '../../context/TodoContext';
import { useState } from 'react';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>New task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="do some exercise"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm ;
