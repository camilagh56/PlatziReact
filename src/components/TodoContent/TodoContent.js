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

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

const TodoContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [count, setCount] = useState();

  console.log(count, "aqui contador");

  const completedTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;

  const searchTodo = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

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

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, complete: false });
    saveTodos(newTodos);
  };

  return (
    <div className="container-app">
      <TodoHeader
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Container
        loading={loading}
        error={error}
        searchTodo={searchTodo}
        onCompletedTodo={completeTodo}
        deletedTodo={deletedTodo}
        addTodo={addTodo}
      />
    </div>
  );
};

export { TodoContent };
