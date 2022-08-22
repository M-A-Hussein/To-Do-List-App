import React from 'react'
// import components
import Task from './Task'
function TaskList({tasks, setTasks, filteredTasks}) {
  return (
    <div className='task-conatiner'>
        <ul className='task-list'>
         {filteredTasks.map(task  => (         
          <Task 
          tasks={tasks} 
          setTasks={setTasks} 
          key={task.id} 
          task={task}
          text={task.text} />
         ))}
        </ul>
    </div>
  );
};

export default TaskList