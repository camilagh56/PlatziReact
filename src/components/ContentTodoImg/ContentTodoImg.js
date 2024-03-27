import { TodoItem } from "../TodoItems/TodoItems";
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo";
import "./ContectTodoImg.css";

const ContentTodoImg = ({ searchTodo, onCompletedTodo }) => {
  return (
    <div className="content-todo">
      <TodoItem
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
      />
      <ButtonAddTodo />
    </div>
  );
};

export { ContentTodoImg };
