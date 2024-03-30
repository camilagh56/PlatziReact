import { ContentTodoImg } from "../ContentTodoImg/ContentTodoImg";
import "./Container.css";

const Container = ({ searchTodo, onCompletedTodo, deletedTodo, loading, error }) => {
  return (
    <div className="container">
      <ContentTodoImg
        loading={loading}
        error={error}
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
        deletedTodo={deletedTodo}
      />
    </div>
  );
};

export { Container };
