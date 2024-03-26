import "./TodoItem.css";

const TodoItem = ({arrayTodos, searchTodo}) => {
  console.log(searchTodo);
  
  return (
    <div className="div-content-todo">
      {/* <TodoHeader status={count}/> */}
      {searchTodo.map((todo) => (
        <ul className="ul-list">
          <div className="conteiner-span">
            <section className="section-li">
              <li className="li-text">
                <p
                  className={`TodoItem-p ${
                    todo.complete && "TodoItem-p--complete"
                  }`}
                >
                  {todo.text}
                </p>
              </li>
            </section>
            <span
              className={`Icon Icon-check icon-completed ${
                todo.complete && "Icon-check--active"
              }`}
            >
              ✔
            </span>
            <span className={`Icon Icon-delete`}>✘</span>
          </div>
        </ul>
      ))}
    </div>
  );
};

export { TodoItem };
