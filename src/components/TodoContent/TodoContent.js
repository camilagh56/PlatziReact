import { TodoHeader } from "../TodoHeader/TodoHeader";
import { Container } from "../Container/Container";
import "./TodoContent.css";
import { useState, useEffect } from "react";

const TodoContent = () => {
  const arrayTodos = [
    { text: "Jugar con Apolito", complete: false },
    { text: "Dormir", complete: true },
    { text: "Comer", complete: true },
    { text: "Estudiar", complete: false },
    { text: "Tomar agua", complete: false },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState([...arrayTodos]);
  const [count, setCount] = useState();
  console.log(todos);
  useEffect(() => {
    const completedTodos = arrayTodos.filter((todo) => !!todo.complete).length;
    const totalTodos = arrayTodos.length;
    const objCount = {
      tdosCompleted: completedTodos,
      tdosTotal: totalTodos,
    };
    setCount({ ...objCount });
  }, []);

  const searchTodo = arrayTodos.filter((todo) => {
  return todo.text.includes(searchValue)
  })
  
  return (
    <div className="container-app">
      {count && (
        <TodoHeader
          status={count}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
      <Container arrayTodos={arrayTodos} searchTodo={searchTodo} />
    </div>
  );
};

export { TodoContent };
