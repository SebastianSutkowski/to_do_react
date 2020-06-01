import React from 'react';
import Task from './Task'

const TaskList = props => {
   const tasks = props.tasks.map(task => {
      if (props.done === task.done) {
         return <Task changeStatus={props.changeStatus}
            delete={props.delete} key={task.id} task={task} />
      }

   })
   return (
      <div>{tasks.sort((a, b) => {
         if (a.name > b.name) {
            return -1
         }
         if (a.name < b.name) {
            return 1
         }
         return 0
      })}</div>
   );
}

export default TaskList;