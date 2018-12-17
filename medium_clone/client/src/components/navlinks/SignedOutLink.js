import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SignedOutLink extends Component {
  render() {
    return (
      <div>
        <Link to='/login' className="auth">Login</Link>
        <Link to='/signup' className="auth">Signup</Link>
      </div>
    )
  }
}
