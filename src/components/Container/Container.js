import { ContentTodoImg } from "../ContentTodoImg/ContentTodoImg";
import "./Container.css";

const Container = ({ searchTodo, onCompletedTodo, deletedTodo, loading, error, addTodo }) => {
  return (
    <div className="container">
      <ContentTodoImg
        loading={loading}
        error={error}
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
        deletedTodo={deletedTodo}
        addTodo={addTodo}
      />
    </div>
  );
};

export { Container };
