import { TodoHeader } from "../TodoHeader/TodoHeader"
import { Container } from "../Container/Container"
import "./TodoContent.css"

const TodoContent = () => {
    return (
    <div className="container-app" >
     <TodoHeader/>
     <Container/>
    </div>
    )
}

export { TodoContent };