import { useState } from "react";
import "./TodoForm.css";
import { RiCloseCircleFill } from "react-icons/ri";

const TodoForm = ({ cancelTodo, addTodo }) => {
  const [newTodoValue, setNewTodoValue] = useState('')

  const onChangeTodo = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    cancelTodo()
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <div className="conteiner-button-">
        <button onClick={cancelTodo} className="button-close">
          <RiCloseCircleFill/>
        </button>
      </div>
      <label>Escribe tu nuevo TODOs</label>
      <textarea
        value={newTodoValue}
        className="textarea-block"
        placeholder="Cortar cebolla para el almuerzo"
        onChange={onChangeTodo}
      />
      <div className="container-buttons">
        <button
          onClick={cancelTodo}
          className="TodoForm-button  TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button  TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
