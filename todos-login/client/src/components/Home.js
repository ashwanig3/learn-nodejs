import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import{ connect } from 'react-redux'
import { isLoggedIn } from '../actions/action';

class Home extends Component {
  
  componentWillMount = () => {
    this.props.dispatch(isLoggedIn())
  }
  render() {
    const { userId } = this.props;
    if(userId) { return <Redirect to='create' />}
    else {
      return (
        <div className="hero">
          <div className="hero-left">
            <div className="hero-heading">
            <h1>What Todo?</h1>
              <p>keep track of your task</p>
            </div>
              
          </div>
          <div className="hero-right">
              <div className="hero-right-auth">
                <h1>Get Started</h1>
                <Link to="/login" className="auth-link auth">Login</Link>
                <Link to="/signup" className="auth-link auth">Signup</Link>
              </div>
              
          </div>
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

export default connect(mapStateToProps)(Home)