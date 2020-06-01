import React, { Component } from 'react';
import TasksToDo from './TasksToDo'
import TasksDone from './TasksDone'
import AddTask from './AddTask'

import './App.css';
class App extends Component {
  state = {
    tasks: [

    ]
  }
  taskDone = (id) => {
    const tasks = [...this.state.tasks]
    tasks.map(task => {
      if (task.id === id) {
        task.done = true
        task.finishDate = `${(new Date()).getFullYear()}-${(((new Date()).getMonth() + 1) > 9 ? ((new Date()).getMonth() + 1) : ("0" + ((new Date()).getMonth() + 1)))}-${(new Date()).getDate()}`
      }
    }
    )
    this.setState({
      tasks
    })
  }
  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    let i = 1;
    tasks.forEach(task => {
      task.id = i;
      i++
    });
    this.setState({
      tasks
    })
    console.log(tasks)
  }
  handleAddTask = (newTask) => {
    const tasks = [...this.state.tasks]
    const taskToAdd = {
      id: tasks.length + 1,
      name: newTask.task,
      priority: newTask.accepted,
      date: newTask.date,
      done: false,
      finishDate: null
    }
    tasks.concat(taskToAdd)
    this.setState({
      tasks: tasks.concat(taskToAdd)
    })
  }
  render() {
    return (
      <>
        <h1>TO DO APP</h1>
        <div className="line"></div>
        <h2>Dodaj zadanie</h2>
        <AddTask addNewTask={this.handleAddTask} />
        <div className="line"></div>
        <TasksToDo tasks={this.state.tasks} changeStatus={this.taskDone}
          delete={this.deleteTask} />
        <div className="line"></div>
        <TasksDone tasks={this.state.tasks} delete={this.deleteTask} />
      </>
    );
  }
}


export default App;
