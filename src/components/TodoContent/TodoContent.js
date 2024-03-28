import { TodoHeader } from "../TodoHeader/TodoHeader";
import { Container } from "../Container/Container";
import "./TodoContent.css";
import { useState, useEffect } from "react";

const arrayTodos = [
  { text: "Jugar con Apolito", complete: false },
  { text: "Dormir", complete: true },
  { text: "Comer", complete: true },
  { text: "Estudiar", complete: false },
  { text: "Tomar agua", complete: false },
];

const TodoContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(arrayTodos);
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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].complete = true;
    setTodos(newTodos);
  };

  const deletedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
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
