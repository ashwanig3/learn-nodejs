import React, { Component } from 'react'
import { addTodo } from '../actions/action';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Header from './Header';


class CreateTodo extends Component {
    state={
        title: '',
        description: '',
        userId: this.props.userId
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handeSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(addTodo(this.state))
        this.props.history.push(`/user/${this.props.userId}/todos`)
    }
  render() {
      const { userId } = this.props;
      if(!userId) { return <Redirect to='/' />}
      else {
        return (
            <div>
              <Header />
              <form action="/create" method="Post" onSubmit={this.handeSubmit} className="Add-todo">
                  <h1>Add Todo</h1>
                  <input type="text" name="title" placeholder="Todo title" onChange={this.handleChange} />
                  <input type="text" name="description" placeholder="Todo description" onChange={this.handleChange} />
                  <button type="submit" onSubmit={this.handeSubmit}>Submit</button>
              </form>
            </div>
          )
      }
    
  }
}


const mapStateToProps = (state) => {
    return {
        userId: state.currentUserId
    }
}

export default connect(mapStateToProps)(CreateTodo)