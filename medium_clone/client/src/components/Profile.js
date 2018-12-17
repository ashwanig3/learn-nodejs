import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
      const { currentUser } = this.props;
      console.log(currentUser)
    return (
      <div className="user-profile">
        <div className="user-info">
            <div className="profile-img"></div>
            <h1 className="user-name">{currentUser.name}</h1>
            <span>{currentUser.username}</span>
        </div>
        <div className="user-artices">
            <h1>Stories</h1>
            <h2 className="article-title">Use Nouns instead of Verbs for Resources</h2>
            <span className="article-description">client-server interaction for creating</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUserData.userInfo
    }
}

export default connect(mapStateToProps)(Profile)
