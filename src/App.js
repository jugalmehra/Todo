import React,{ useState, useEffect } from 'react';
import Createtodo from './Createtodo';
import './App.css';

function App() {

 
  const [todos, setTodos] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  function createNewTodo(currentTodo) {
    if(currentTodo!==''){
      let todosArray = [...todos];
    todosArray.push({
      todo: currentTodo,
      isCompleted: false
    });
    setTodos(todosArray);
    }
    
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
    console.log(todosArray)
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }

  function markAll(){
   for(let i=0;i<todos.length;i++){
    let todosArray = [...todos];
    if(!todosArray[i].isCompleted ){
      todosArray[i].isCompleted = !todosArray[i].isCompleted;
    }
    
    setTodos(todosArray);
   }

  
  }

  useEffect(() => {
    setTasksRemaining(todos.filter(item => !item.isCompleted).length)
  },[todos]);

  
  return (
    <div className="App">
      <Createtodo createNewTodo={createNewTodo} />
      
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {todo.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
      ))}
      {todos.length > 0 && `Total Tasks: ${todos.length} |`}  {tasksRemaining > 0 && `Task left: ${tasksRemaining} `}
      <button onClick={markAll}>MARKALL</button>
    </div>
  );
}

export default App;
