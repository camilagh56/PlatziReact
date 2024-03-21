import "./TodoItem.css";

const TodoItem = () => {
  const arrayTodos = [
    { text: "Jugar con Apolito", complete: false },
    { text: "Dormir", complete: true },
    { text: "Comer", complete: true },
    { text: "Estudiar", complete: true },
    { text: "Tomar agua", complete: true },
  ];

  return (
    <div className="div-content-todo">
      {arrayTodos.map((todo) => (
        <ul className="ul-list">
          <div className="conteiner-span">
            <section className="section-li">
              <li className="li-text">{todo.text}</li>
            </section>
            <span>✔</span>
            <span>✘</span>
          </div>
        </ul>
      ))}
    </div>
  );
};

export { TodoItem };
