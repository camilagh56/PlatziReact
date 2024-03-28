import { TodoHeader } from "../TodoHeader/TodoHeader";
import { Container } from "../Container/Container";
import "./TodoContent.css";
import { useState, useEffect } from "react";

// const arrayTodos = [
//   { text: "Jugar con Apolito", complete: false },
//   { text: "Dormir", complete: true },
//   { text: "Comer", complete: true },
//   { text: "Estudiar", complete: false },
//   { text: "Tomar agua", complete: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(arrayTodos))
// localStorage.removeItem("TODOS_V1")

const TodoContent = () => {
  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(parsedTodos);
  const [count, setCount] = useState();

  useEffect(() => {
    const completedTodos = todos.filter((todo) => !!todo.complete).length;
    const totalTodos = todos.length;
    const objCount = {
      tdosCompleted: completedTodos,
      tdosTotal: totalTodos,
    };
    setCount({ ...objCount });
  }, []);

  const searchTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const saveTodos = (todosNew) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(todosNew))
    setTodos(todosNew)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  };

  const deletedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <div className="container-app">
      {count && (
        <TodoHeader
          status={count}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
      <Container
        searchTodo={searchTodo}
        onCompletedTodo={completeTodo}
        deletedTodo={deletedTodo}
      />
    </div>
  );
};

export { TodoContent };
