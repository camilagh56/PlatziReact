import "./TodoItem.css";

const TodoItem = ({
  searchTodo,
  onCompletedTodo,
  deletedTodo,
  loading,
  error,
}) => {
  return (
    <div className="div-content-todo">
      {/* <TodoHeader status={count}/> */}
      <div className="conteiner-loading">
        {loading && (
          <div class="loader">
            <div class="loaderMiniContainer">
              <div class="barContainer">
                <span class="bar"></span>
                <span class="bar bar2"></span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 101 114"
                class="svgIcon"
              >
                <circle
                  stroke-width="7"
                  stroke="black"
                  transform="rotate(36.0692 46.1726 46.1727)"
                  r="29.5497"
                  cy="46.1727"
                  cx="46.1726"
                ></circle>
                <line
                  stroke-width="7"
                  stroke="black"
                  y2="111.784"
                  x2="97.7088"
                  y1="67.7837"
                  x1="61.7089"
                ></line>
              </svg>
            </div>
          </div>
        )}
      </div>
      {error && <p>Upss, hubo un error, comunicate al 0180009532563</p>}
      <div className="conteiner-first-todo">
        {!loading && searchTodo.length == 0 && <p>Crea tu primer TODOs!</p>}
      </div>

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
              onClick={() => onCompletedTodo(todo.text)}
            >
              ✔
            </span>
            <span
              className={`Icon Icon-delete`}
              onClick={() => deletedTodo(todo.text)}
            >
              ✘
            </span>
          </div>
        </ul>
      ))}
    </div>
  );
};

export { TodoItem };
