import React,{ useState } from 'react';

function Createtodo({createNewTodo}){
    const [currentTodo, setCurrentTodo] = useState("");
    return(
      <>
        <div className="HeadingArea" >
        <h1>TODO LIST</h1>
        </div>
          <input
          className="todo-input"
          value={currentTodo}
          onChange={e => {
            setCurrentTodo(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              createNewTodo(currentTodo);
              setCurrentTodo("");
            }
          }}
          placeholder="Enter a task"
          
        />
      </>
      
    );
  }
 export default Createtodo;