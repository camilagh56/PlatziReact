import { ContentTodoImg } from "../ContentTodoImg/ContentTodoImg";
import "./Container.css";

const Container = ({ arrayTodos, searchTodo, completeTodo }) => {
  return (
    <div className="container">
      <ContentTodoImg
        arrayTodos={arrayTodos}
        searchTodo={searchTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export { Container };
