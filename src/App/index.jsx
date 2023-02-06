import { useContext } from "react";
import "./App.css";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import CreateTodoButton from "../components/CreateTod/CreateTodoButton";
import TodoList from "../components/TodoList/TodoList";
import TodoItem from "../components/TodoItem/TodoItem";
import Greeting from "../components/Greeting/Greeting";
import TodoSearch from "../components/TodoSearch/TodoSearch";
import Modal from "../components/Modal/Modal";
// import TodoForm from "../components/TodoForm/TodoForm";

//contexto
import { TodoProvider, Provider, TodoContext } from "../context/TodoContext";
import AppUi from "./AppUi";
import TodoForm from "../components/TodoForm/TodoForm";
const defaultTodos = [
  { text: "cortar cebolla", completed: true },
  { text: "hacer curso de react", completed: false },
  { text: "hacer deporte", completed: true },
];

function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <Greeting />

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>It's not good</p>}
        {loading && <p>Loading..</p>}
        {!loading && !searchedTodos.length && <p>Write down your first task!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        // <Modal>
        //   <TodoForm />
        // </Modal>
        <Modal>
<TodoForm/>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
