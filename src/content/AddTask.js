import React, { Component } from 'react';
class AddTask extends Component {
   state = {
      task: "",
      accepted: false,
      date: `${(new Date()).getFullYear()}-${(((new Date()).getMonth() + 1) > 9 ? ((new Date()).getMonth() + 1) : ("0" + ((new Date()).getMonth() + 1)))}-${(new Date()).getDate()}`
   }
   handleChange = (e) => {
      const name = e.target.name
      if (name === "accepted") {
         this.setState({
            [name]: !this.state.accepted
         })
      } else {
         this.setState({
            [name]: e.target.value
         })
      }
   }
   handleClick = (e) => {
      e.preventDefault()
      if (this.state.task.length > 3) {
         this.props.addNewTask(this.state)
         this.setState({
            task: "",
            accepted: false,
         })
      }
   }
   render() {
      return (
         <>
            < form noValidate >

               <label htmlFor="newTask">
                  <input
                     onChange={this.handleChange}
                     type="text"
                     id="newTask"
                     name="task"
                     value={this.state.task}
                  />
               </label>
               <label htmlFor="priority">
                  <input
                     onChange={this.handleChange}
                     type="checkbox"
                     id="priority"
                     name="accepted"
                     checked={this.state.priority}
                  />
                  <h3>priorytet</h3>
               </label><br />
               <label htmlFor="date">
                  <h3>Do kiedy </h3>
                  <input
                     onChange={this.handleChange}
                     type="date"
                     id="date"
                     name="date"
                     value={this.state.date}
                  />
               </label><br />
               <button onClick={this.handleClick}>DODAJ</button>
            </form >
         </>
      );
   }
}

export default AddTask;
