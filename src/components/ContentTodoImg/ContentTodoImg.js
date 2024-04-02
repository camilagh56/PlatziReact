import { TodoItem } from "../TodoItems/TodoItems";
import { ButtonAddTodo } from "../ButtonAddTodo/ButtonAddTodo";
import "./ContectTodoImg.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";

const ContentTodoImg = ({
  searchTodo,
  onCompletedTodo,
  deletedTodo,
  loading,
  error,
  addTodo
}) => {
  const [openModal, setOpenModal] = useState(true)

  const viewModal = () => {
    setOpenModal(!openModal)
  }

  const cancelTodo = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="content-todo">
      <TodoItem
        loading={loading}
        error={error}
        searchTodo={searchTodo}
        onCompletedTodo={onCompletedTodo}
        deletedTodo={deletedTodo}
      />
      <ButtonAddTodo
      viewModal={viewModal}
      />
      {openModal && 
        <Modal>
          <TodoForm 
          cancelTodo={cancelTodo}
          addTodo={addTodo}
          />
        </Modal>}
    </div>
  );
};

export { ContentTodoImg };
