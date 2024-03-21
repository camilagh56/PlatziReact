import { TodoItem } from "../TodoItems/TodoItems"
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo"
import "./ContectTodoImg.css"

const ContentTodoImg = () => {
    return (
        <div className="content-todo">
        <TodoItem/>
        <ButtonAddTodo/>
        </div>
    )
}

export { ContentTodoImg }