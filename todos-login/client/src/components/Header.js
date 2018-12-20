import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loggedOut } from '../actions/action';

class Header extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.dispatch(loggedOut());
    }
  render() {
    return (
      <header className="header">
        <nav>
            <ul>
                <li>
                    <Link to={`/user/${this.props.userId}/todos`} className="auth-link header-link">What todo?</Link>
                </li>
                <li>
                    <button onClick={this.handleClick} className="auth-link header-link">Logout</button>
                </li>

            </ul>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        userId: state.currentUserId
    }
}

export default connect(mapStateToProps)(Header)
