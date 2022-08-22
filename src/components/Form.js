import React from 'react'


function Form({setInput, tasks, setTasks, input, setStatus}) {
    const inputHandler = (event) => {
        setInput(event.target.value);
    };

function submitTaskHandler (event){
        event.preventDefault();
        setTasks([ 
            ...tasks,
            { 
            text: input,
            completed: false, 
            id: Math.random()* 1000
        }
        ]);
        setInput('');
    };

function statusHandler(event){
        setStatus(event.target.value);
     
    };

  return (
    <form>
        <input type="text" value={input} onChange={inputHandler}  className='task-input'/>
        <button  type="submit" className="task-btn">
            <i onClick={submitTaskHandler} className="fa-solid fa-circle-plus"></i>
        </button>
        <div className='select'>
            <select onChange={statusHandler} className='filter-task'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form;