import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpAction } from '../action/action';


class SignUp extends Component {
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
    this.props.postSignup(this.state)
    this.props.history.push('/login')
}

  render() {
    return (
      <div>
        <form action="/signup" method="post" onSubmit={this.handleSubmit} className="signup-form">
                    <h1>SignUp Form</h1>
                    <input type="text" placeholder="Fullname" name="name" onChange={this.handleChange} />
                    <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
                    <input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                    <button type="submit" onSubmit={this.handleSubmit}>submit</button>
         </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postSignup: (userData) => dispatch(signUpAction(userData))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)