import React, { Component } from 'react'

export default class TodoForm extends Component {

    constructor(){
        super();
        this.state ={
            todoText: ''
        }

    }

handleChange = e => {
    this.setState({todoText: e.target.value})
    

}
    handleSubmit = e => {
        e.preventDefault();
         this.props.addItem(this.state.todoText)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter Todo:
                        <input type='text' name="todo" placeholder= "...todo" onChange={this.handleChange} value={this.state.todoText}/>
                    </label>
                    <input type='submit' value='Add Todo'/>
                    <input type= 'submit' value= 'Clear Completed'/>
                </form>
            </div>
        )
    }
}
