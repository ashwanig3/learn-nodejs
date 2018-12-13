import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInAction } from '../action/action';


class LogIn extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.postLogin(this.state)
}

  render() {
    return (
      <div>
        <form action="/login" method="post" onSubmit={this.handleSubmit} className="signup-form">
                    <h1>Login Form</h1>
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    <button type="submit" onSubmit={this.handleSubmit}>submit</button>
         </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postLogin: (userData) => dispatch(logInAction(userData))
    }
}

export default connect(null, mapDispatchToProps)(LogIn)