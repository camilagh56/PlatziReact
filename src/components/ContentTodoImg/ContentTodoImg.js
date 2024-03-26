import { TodoItem } from "../TodoItems/TodoItems"
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo"
import "./ContectTodoImg.css"

const ContentTodoImg = ({arrayTodos, searchTodo}) => {
    return (
        <div className="content-todo">
        <TodoItem arrayTodos={arrayTodos} searchTodo={searchTodo}/>
        <ButtonAddTodo/>
        </div>
    )
}

export { ContentTodoImg }