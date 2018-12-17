import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignedInLink extends Component {
  render() {
    return (
      <div>
        {/* <img className='profile-img' src=""/> */}
        <Link to='/create' className="auth">New Story</Link>
        <Link to='/login' className="auth">Logout</Link>
      </div>
    )
  }
}
