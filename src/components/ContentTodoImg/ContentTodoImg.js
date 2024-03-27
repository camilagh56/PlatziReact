import { TodoItem } from "../TodoItems/TodoItems";
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo";
import "./ContectTodoImg.css";

const ContentTodoImg = ({ arrayTodos, searchTodo, completeTodo }) => {
  return (
    <div className="content-todo">
      <TodoItem
        arrayTodos={arrayTodos}
        searchTodo={searchTodo}
        completeTodo={completeTodo}
      />
      <ButtonAddTodo />
    </div>
  );
};

export { ContentTodoImg };
