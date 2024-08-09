import React, {useState} from 'react';
import './App.css';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIscompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My ToDo</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
          
            <label>Title</label>
            <input type="text" placeholder="What is the task title?"></input>
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input type="text" placeholder="What is the task Description?"></input>
          </div>

          <div className="todo-input-item">
            <button type="button" className="primaryBtn">Add</button>
          </div>

        </div>

        <div className="btn-area">
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === false && 'active'}`} onClick={()=>setIscompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === true && 'active'}`}onClick={()=>setIscompleteScreen(true)}>Completed</button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
          <div>
            <h3>Task 1</h3>
            <p>Description</p>
          </div>
          <div>
            <AiOutlineDelete className='icon'/>
            <BsCheckLg className='check-icon'/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
