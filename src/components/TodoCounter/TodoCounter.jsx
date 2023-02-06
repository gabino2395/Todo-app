import React, { useContext } from "react";
import './TodoCounter.css'
import { Provider,TodoContext} from "../../context/TodoContext";
const TodoCounter = () => {
  const {totalTodos,completedTodos}=useContext(TodoContext)
  return(
<>
<div className="counter-container">
<h1>Your tasks:</h1>
<h2>Completed {completedTodos} out of {totalTodos} </h2>

</div>
</>


  ) 
};

export default TodoCounter;
