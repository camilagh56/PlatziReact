import { ContentTodoImg } from "../ContentTodoImg/ContentTodoImg";
import "./Container.css"

const Container = ({arrayTodos, searchTodo}) => {
  return (
    <div className="container">
      <ContentTodoImg  arrayTodos={arrayTodos} searchTodo={searchTodo}/>
    </div>
  );
};

export { Container };
