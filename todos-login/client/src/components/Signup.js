import React, { Component } from 'react'
import { signUpAction } from '../actions/action';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Signup extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(signUpAction(this.state))
        this.props.history.push('/login')
    }

  render() {
    return (
      <div className="signup-container">
         <form action="/signup" method="post" onSubmit={this.handleSubmit} className="signup-form">
                    <h1>SignUp Form</h1>
                    <input type="text" placeholder="Fullname" name="name" onChange={this.handleChange} />
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    <input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    <button type="submit" onSubmit={this.handleSubmit}>submit</button>
                    <Link to="/login" className="signup-link">Have Account?</Link>
         </form>
         
      </div>
    )
  }
}

export default connect()(Signup);