import { TodoItem } from "../TodoItems/TodoItems";
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo";
import "./ContectTodoImg.css";

const ContentTodoImg = ({ searchTodo, onCompletedTodo, deletedTodo, loading, error }) => {
  return (
    <div className="content-todo">
      <TodoItem
        loading={loading}
        error={error}
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
        deletedTodo={deletedTodo}
      />
      <ButtonAddTodo />
    </div>
  );
};

export { ContentTodoImg };
