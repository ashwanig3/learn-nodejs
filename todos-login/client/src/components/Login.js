import React, { Component } from 'react'
import { logInAction, loginByGoogle } from '../actions/action';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        password: ''
        
    }
   handleChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(logInAction(this.state))
    }


    loginWithGoogle = () => {
        console.log("login with google")
        this.props.dispatch(loginByGoogle())
    }
    
  render() {
      const { userId } = this.props;
      if(userId) {
          return <Redirect to="/create" />
      } else {
        return (
            <div className="login-container">
              <form action="/login" method="post" onSubmit={this.handleSubmit} className="signup-form">
                    <h1>Login Form</h1>
                    <input type="text" placeholder="Username" name="username" required onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" required onChange={this.handleChange} />
                    <button type="submit" onSubmit={this.handleSubmit}>submit</button>
                    <Link to="/signup" className="signup-link">Get Started?</Link>
                    <a href='/auth/google' className="google-btn">Login with Google</a>
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


export default connect(mapStateToProps)(Login)