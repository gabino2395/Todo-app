import React, { useContext, useState } from "react";
import "./search.css";
import { Provider, TodoContext} from "../../context/TodoContext";
const TodoSearch = () => {
  const { searchInput, setSearchInput } = useContext(TodoContext);

  const changeSearch = (event) => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };
  return (
    <div className="search-input-box">
      <input
        onChange={changeSearch}
        className="main-input"
        type="text"
        value={searchInput}
        placeholder="search yours tasks.."
      />
      <i className="bi bi-search icon-search"></i>
      {/* <p>{searchInput}</p> */}
    </div>
  );
};

export default TodoSearch;
