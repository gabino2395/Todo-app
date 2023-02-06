import React ,{useState}from "react";
import { useLocalStorage } from "./useLocalStorage";
import { createContext } from "react";

const TodoContext = createContext();
const Provider = TodoContext.Provider;









function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage(
    "TODOS_V1",
    []
  );
  //Estado inicial de los todos
  const [searchInput, setSearchInput] = useState("");
  const [openModal, setOpenModal] = useState(false);


  //cantidad de todos completados
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  //cantidad total de todos
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchInput.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchInput.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  //funcion para agregar todos
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  //funcion para marcar completado el todo
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  //funcion para eliminar el todo
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchInput,
        setSearchInput,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { TodoProvider, Provider ,TodoContext};
