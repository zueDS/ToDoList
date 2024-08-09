import React, {useState} from 'react';
import './App.css';

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
            <h1>Task 1</h1>
            <p>Description</p>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
