import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodoItem } from '../actions/action';
import Header from './Header';

class Todo extends Component {

    componentWillMount = () => {
        this.props.dispatch(getTodos(this.props.userId))
    }
    
    deleteTodo = (e) => {
        e.preventDefault()
        let id= e.target.id;
        this.props.dispatch(deleteTodoItem(id))
    }

  render() {
      const { todos } = this.props;
    return (
        <div>
        <Header />
         <div className="todo-container">
             <h1>Todo list</h1>
        <ul>
            {
            todos && todos.map(todo => 
            <li>
               <span>{todo.title}</span>
               <div>
                    <button id={todo._id} onClick={this.deleteTodo}>delete</button>
               </div>
                
            </li>)
            }
        </ul>
      </div>
        </div>
     
    )
  }
}

const mapStateToProps = (state) => {
    return {
        userId: state.currentUserId,
        todos: state.currentUserData.userData
    }
}

export default connect(mapStateToProps)(Todo)