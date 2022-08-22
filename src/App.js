import React, { useState, useEffect } from 'react';

import './App.css';
import Form from './components/Form';
import TaskList from './components/TaskList';


function App() {

  
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);

  
  useEffect(() =>{
    getLocalTasks();
  }, []);
  
  useEffect(() =>{
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);

 
  
  function filterHandler(){
  switch(status){
    case 'completed':
      setFilteredTasks(tasks.filter(task => task.completed === true));
      break;
    case 'uncompleted':
        setFilteredTasks(tasks.filter(task => task.completed === false));
        break;
    default:
      setFilteredTasks(tasks);
      break;
  }
};
 
  function saveLocalTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


  function getLocalTasks(){
    if(localStorage.getItem("tasks") === null){
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
};

  return (
    <div className="App">
      <header>Task List</header>
      <hr/>
      <div className='content-body'>
        <Form 
        tasks={tasks} 
        setTasks={setTasks}
        input={input} 
        setInput={setInput} 
        setStatus={setStatus}/>
        <TaskList tasks={tasks} setTasks={setTasks} filteredTasks={filteredTasks}/>
      </div>
      
    </div>
  );
  };

export default App;
