import React from "react";
import "./TodoHeader.css";

const TodoHeader = () => {
  return (
    <div className="conteiner-input-header">
      <div className="div-content-header">
        <header>
          <span className="todoS">
            Has completado <span className="span-todo">5</span> de{" "}
            <span className="span-todo">10</span> TODOs
          </span>
        </header>
      </div>
      <div className="content-img-search">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25313.png" />
        <input className="input-search" placeholder="Cortar cebolla..." />
      </div>
    </div>
  );
};

export { TodoHeader };
