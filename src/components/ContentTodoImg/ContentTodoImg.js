import { TodoItem } from "../TodoItems/TodoItems";
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo";
import "./ContectTodoImg.css";

const ContentTodoImg = ({ searchTodo, onCompletedTodo, deletedTodo }) => {
  return (
    <div className="content-todo">
      <TodoItem
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
        deletedTodo={deletedTodo}
      />
      <ButtonAddTodo />
    </div>
  );
};

export { ContentTodoImg };
