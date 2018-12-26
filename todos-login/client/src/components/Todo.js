import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
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
      const { todos, userId, username } = this.props;
      console.log(username)
      if(!userId) { return <Redirect to='/' />}
      else {
        return (
            <div>
            <Header />
             <div className="todo-container">
                <div className="todo-header">
                    <h1>Todo list</h1>
                    <Link to="/create" className="add-link">Add Todo</Link>
                </div>

            <ul>
                {
                todos && todos.map(todo => 
                <li>
                   <Link to={`/${username}/todos/${todo._id}`}>{todo.title}</Link>
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
}

const mapStateToProps = (state) => {
    return {
        userId: state.currentUserId,
        todos: state.currentUserData.userData,
        username: state.currentUserData.userInfo.username
    }
}

export default connect(mapStateToProps)(Todo)