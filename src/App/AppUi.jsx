import React from "react";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import CreateTodoButton from "../components/CreateTod/CreateTodoButton";
import TodoList from "../components/TodoList/TodoList";
import TodoItem from "../components/TodoItem/TodoItem";
import Greeting from "../components/Greeting/Greeting";
import TodoSearch from "../components/TodoSearch/TodoSearch";
const AppUi = ({
  totalTodos,
  completedTodos,
  searchInput,
  setSearchInput,
  searchedTodos,
  completeTodos,
  deleteTodos,
}) => {
  return (
    <>
      <Greeting />
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchInput={searchInput} setSearchInput={setSearchInput} />
      <TodoList>
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
      <CreateTodoButton />
    </>
  );
};

export default AppUi;
