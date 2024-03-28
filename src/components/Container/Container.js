import { ContentTodoImg } from "../ContentTodoImg/ContentTodoImg";
import "./Container.css";

const Container = ({ searchTodo, onCompletedTodo, deletedTodo }) => {
  return (
    <div className="container">
      <ContentTodoImg
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
        deletedTodo={deletedTodo}
      />
    </div>
  );
};

export { Container };
