import React, { Component } from 'react'
import { postArticle } from '../action/action';
import { connect } from 'react-redux'

class CreateArticle extends Component {
    state= {
        title: '',
        description: '',
        body: '',
        claps: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(postArticle(this.state))
    }

  render() {
    return (
      <div className="new-story">
        <h1>New Story</h1>
        <form action='/new' method='post' className='new-story-form' onSubmit={this.handleSubmit}>
            <input type='text' name='title' placeholder='title' onChange={this.handleChange} />
            <input type='text' name='description' placeholder='description' onChange={this.handleChange} />
            <textarea rows='5' cols='50' name='body' placeholder='body' onChange={this.handleChange}></textarea>
            <button type='submit' onSubmit={this.handleSubmit}>Ready to publish?</button>
        </form>
      </div>
    )
  }
}

export default connect()(CreateArticle);