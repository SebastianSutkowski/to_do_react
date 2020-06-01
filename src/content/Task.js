import React from 'react';
import './Task.css';
const Task = props => {
   return (
      <>
         <h5 className={((props.task.priority && !props.task.done) ? "priority" : "normal") + ((props.task.done) ? "done" : "")}>{props.task.name} do</h5>
         <h5>: {props.task.date} </h5>
         {!props.task.done ? <button onClick={() => props.changeStatus(props.task.id)}>done</button> : null}
         <button onClick={() => props.delete(props.task.id)}>x</button><br />
         {props.task.finishDate ? <p><h6>wykonano dnia({props.task.finishDate})</h6><br /></p> : null}

      </>
   );
}

export default Task;