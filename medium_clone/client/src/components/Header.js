import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLink from './navlinks/SignedInLink';
import SignedOutLink from './navlinks/SignedOutLink'

class Header extends Component {
  render() {
    const { userId } = this.props;
    let links;
    if(userId) {
     links = <SignedInLink />
    } else {
      links = <SignedOutLink />
    }
    return (
      <div>
        <header className="header">
          <h1 className="medium-heading">Medium</h1>
          {/* <i class="fas fa-pen-square pen-icon"></i> */}
          {/* <i class="fab fa-medium pen-icon"></i> */}
          <div>
            {
             links 
            }
          </div>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.currentUserId
  }
}

export default connect(mapStateToProps)(Header)

