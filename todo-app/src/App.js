import React, {useEffect, useState} from 'react';
import './App.css';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIscompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setnewTitle] = useState("");
  const [newDescription, setnewDescription] = useState("");

  const handleAddTodo = ()=>{
    let newTodoItem = {
      title: newTitle,
      description: newDescription 
    }

    let updateTodoArr = [...allTodos];
    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem('todolist',JSON.stringify (updateTodoArr));
  };

  const handleDeleteTodo = (index)=>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'))
    if(savedTodo){
      setTodos(savedTodo);
    }
  },[])

  return (
    <div className="App">
      <h1>My ToDo</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
          
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e) => setnewTitle(e.target.value)} 
            placeholder="What is the task title?"></input>
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e) => setnewDescription(e.target.value)} 
            placeholder="What is the task Description?"></input>
          </div>

          <div className="todo-input-item">
            <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
          </div>

        </div>

        <div className="btn-area">
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === false && 'active'}`} onClick={()=>setIscompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === true && 'active'}`}onClick={()=>setIscompleteScreen(true)}>Completed</button>
        </div>

        <div className="todo-list">
         
         {allTodos.map((item, index) => {
          return(
            <div className="todo-list-item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              <div>
                <AiOutlineDelete className='icon' onClick={()=>handleDeleteTodo(index)}/>
                <BsCheckLg className='check-icon'/>
              </div>
            </div>
          )
         })}
        </div>
      </div>
    </div>
  );
}

export default App;
