import React, { useState } from "react";
import ToDoList from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItmes = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log('deleted')
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type='text' placeholder="Add items"
            value={inputList}
            onChange={itemEvent} />
          <button onClick={listofItmes}> + </button>
          <ol>
            {Items.map((itemsval, index) => {
              return <ToDoList key={index}
                id={index}
                text={itemsval}
                onSelect={deleteItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;