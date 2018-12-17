import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInAction } from '../action/action';
import { Redirect } from 'react-router-dom';


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
    this.props.postLogin(this.state)
}

  render() {
      const { userId } = this.props;
      if(userId) {return(<Redirect to='/' />)
    } else {
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
}

const mapDispatchToProps = (dispatch) => {
    return {
        postLogin: (userData) => dispatch(logInAction(userData))
    }
}

const mapStateToProps = (state) => {
    return {
      userId: state.currentUserId
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)