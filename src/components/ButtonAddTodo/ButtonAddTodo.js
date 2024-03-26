import "./ButtonAddTodo.css";

const ButtonAddTodo = () => {
  return (
    <div className="content-button-img">
      <button onClick={() => console.log('Le diste click, yeiii')}> ✚ Agregar nuevo TODOs</button>
      <div className="conteiner-img">
        <img src="https://img.freepik.com/foto-gratis/3d-renderizar-telefono-inteligente-encuesta-linea-relleno-manual_107791-15912.jpg?w=740&t=st=1710948831~exp=1710949431~hmac=b8c38b46147ced75930a2fa06e3a6ee45eb03ef040787a6a45c8216564f42cec" />
      </div>
    </div>
  );
};

export { ButtonAddTodo };
