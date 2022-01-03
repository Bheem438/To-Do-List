import React from "react";
// import './Todos.css

function ListsTodo(props) {
  return (
    <>
      <div className="lists-style">
        {/* <i className="fa fa-car"></i> */}
        <i
          className="fas fa-times-circle"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        {/* <i className="fa fa-car" style={{font-size:'48px'}}></i>
    <i className="fa fa-car" style={"font-size:60px;color:red;}"></i> */}
        <li>{props.text}</li>
      </div>
    </>
  );
}

export default ListsTodo;
