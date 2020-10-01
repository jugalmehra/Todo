import React,{ useState, useEffect} from 'react';
import Createtodo from './Createtodo';
import { Button, ButtonGroup } from 'reactstrap';

import './App.css';




function App() {

 
  const [todos, setTodos] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [storeall, setStoreall] = useState([]);
  const [completeall, setCompleteall] = useState([]);

  function createNewTodo(currentTodo) {
    const name = currentTodo.trim();
    if(name!==''){
      let todosArray = [...todos];
    todosArray.push({
      todo: name,
      isCompleted: false
    });
    setTodos(todosArray);
    setStoreall(todosArray);
    setCompleteall(todosArray)
    }
    
  }

  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
    setStoreall(todosArray);
    setCompleteall(todosArray)
    console.log('try',todosArray)
  }

  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
    setStoreall(todosArray);
    setCompleteall(todosArray);
  }

  function markAll(){
   for(let i=0;i<todos.length;i++){
    let todosArray = [...todos];
    if(todosArray[i].isCompleted === false ){
      todosArray[i].isCompleted = true;
    }
    setTodos(todosArray);
   
   }

  

  
  }

 function deleteall(){
   

 }


  function active(){
    
    let todosArray = storeall.filter((e) =>{
       return e.isCompleted === false;
  });
    console.log(todosArray)
    setTodos(todosArray)
  }
  
  function completed(){
    
    let todosArray = storeall.filter((e) =>{
       return e.isCompleted === true;
  });
    console.log(todosArray)
    setTodos(todosArray)
  }

  function all(){
    storeall.filter((e) =>{
      return e.isCompleted === false || true;
 });
  //  console.log(todosArray)
   setTodos(storeall)
  }


  useEffect(() => {
    setTasksRemaining(todos.filter(item => !item.isCompleted).length)
    
  },[todos]);

  useEffect(() => {
    setStoreall(completeall)
  },[todos]);

  
  
  return (
    <div className="App">
      <Createtodo createNewTodo={createNewTodo} />
      <ButtonGroup>
        <Button onClick={all}>All</Button>
        <Button onClick={completed}>Completed</Button>
        <Button onClick={active}>Active</Button>
      </ButtonGroup>
      
      
      
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
      {todos.length > 0 && `Total Tasks: ${todos.length} `}  {tasksRemaining > 0 && `Task left: ${tasksRemaining} `}
      {todos.length > 0 && <Button color="primary" size="lg" active onClick={markAll}>MARKALL</Button>}{'  '}
      {todos.length > 0 && <Button color="primary" size="lg" active onClick={deleteall}>Delete all</Button>}
    </div>
  );
}

export default App;
