import React from 'react';
import TaskList from './TaskList'
const TasksDone = props => {
   const TaskDoneValue = props.tasks.filter(task => {
      if (task.done) {
         return task
      }
   }).length
   return (
      <article>
         <header>
            <h3>zadania zronione({TaskDoneValue})</h3>
         </header>
         <section>
            <TaskList done={true} tasks={props.tasks} delete={props.delete} />
         </section>
      </article>

   );
}

export default TasksDone;