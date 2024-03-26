import "./TodoSearch.css"
import React from "react"

const TodoSearch = (props) => {

  const changeInput = (event) => {
    props.setSearchValue(event.target.value)
  }
  console.log("Buscasteeee", props.searchValue);

  return (
    <div className="content-img-search">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25313.png" />
      <input 
      value={props.searchValue}
      onChange={changeInput} className="input-search" placeholder="Cortar cebolla..." />
    </div>
  );
};

export { TodoSearch };
