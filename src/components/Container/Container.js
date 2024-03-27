import { ContentTodoImg } from "../ContentTodoImg/ContentTodoImg";
import "./Container.css";

const Container = ({ searchTodo, onCompletedTodo }) => {
  return (
    <div className="container">
      <ContentTodoImg
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
      />
    </div>
  );
};

export { Container };
