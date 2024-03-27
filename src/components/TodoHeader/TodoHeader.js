import React from "react";
import "./TodoHeader.css";
import { TodoSearch } from "../TodoSearch/TodoSearch";

const TodoHeader = (props) => {
  return (
    <div className="conteiner-input-header">
      <div className="div-content-header">
        <header>
          <span className="todoS">
            Has completado{" "}
            <span className="span-todo">{props.status.tdosCompleted}</span> de{" "}
            <span className="span-todo">{props.status.tdosTotal}</span> TODOs
          </span>
        </header>
      </div>
      <div>
        <TodoSearch
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </div>
    </div>
  );
};

export { TodoHeader };
