import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from './Header'


class TodoDetail extends Component {
    state = {
        todo: {}
    }

componentWillMount = () => {
    const todoId = this.props.match.params.id;
    const todoDetails = this.props.userData.filter(todo => todoId === todo._id);
    this.setState({
        todo: todoDetails[0]
    })
}

  render() {
    const { todo } = this.state;
    return (
      <div>
        <Header />
        <div className="todo-card">
        <div className="todo-title">
            <h2>{todo.title}</h2>
            <span>Created_at: {todo.createdOn}</span>
        </div>
        <span className="todo-description">{todo.description}</span>
      </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
    return {
        userData: state.currentUserData.userData
    }
}

export default connect(mapStateToProps)(TodoDetail)
