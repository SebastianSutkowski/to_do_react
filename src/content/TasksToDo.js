import React from 'react';
import TaskList from './TaskList'
const TasksToDo = props => {
   const TaskToDoValue = props.tasks.filter(task => {
      if (!task.done) {
         return task
      }
   }).length
   return (

      <article>
         <header>
            <h2>Zadania do zrobienia({TaskToDoValue})</h2>
         </header>
         <section>
            <TaskList changeStatus={props.changeStatus}
               delete={props.delete} done={false} tasks={props.tasks} />
         </section>
      </article>

   );
}

export default TasksToDo;