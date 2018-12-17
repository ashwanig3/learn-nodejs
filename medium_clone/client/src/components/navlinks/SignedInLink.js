import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loggedOut } from '../../action/action';

class SignedInLink extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(loggedOut())
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <Link to='/create' className="auth">New Story</Link>
        <Link to={`/users/${id}`} className="auth">Profile</Link>
        <button onClick={this.handleSubmit} className="auth">Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      id : state.currentUserData.userInfo.username
  }
}

export default connect(mapStateToProps)(SignedInLink);