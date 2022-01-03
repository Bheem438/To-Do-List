import React, { useState } from "react";
import "./Todos.css";
import ListsTodo from "./TodoLISTS1";

function ToDoLists() {
  const [InputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const inputChange = (event) => {
    setInputList(event.target.value);
  };

  const clickHandler = () => {
    const task = InputList.trim();
    if (task === "" || task.length < 5) {
      window.alert("Please Enter valid any Input");
      return;
    }
    setItems((prevItems) => {
      return [...prevItems, task];
    });
    setInputList("");
  };

  const deleteItems = (id) =>{
    console.log("deleted")
    setItems((prevItems)=>{
      return prevItems.filter((arr,index)=>{
        return id !== index;
      })
    })
  }

  return (
    <div className="main-div">
      <div className="container">
        <h2 className="header">ToDo List</h2>

        <input
          type="text"
          className="input"
          placeholder="Add Items"
          value={InputList}
          onChange={inputChange}
        />
        <button className="button" onClick={clickHandler}>
          {" "}
          +{" "}
        </button>

        <ol>
          {/* <li>{InputList}</li> */}
          {Items.map((item, index) => {
            return <ListsTodo key={index} id={index} text={item} onSelect={deleteItems}/>;
          })}
        </ol>
      </div>
    </div>
  );
}
export default ToDoLists;
