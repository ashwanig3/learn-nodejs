import React, { Component } from 'react'

export default class ArticleDetails extends Component {
    state = {
        article:{}
    }

    componentDidMount = () => {
      const id = this.props.match.params.id
        fetch('http://localhost:4000/articles')
        .then(res => res.json())
        .then(data => {
          data.data.filter(val => {
            if(val._id === id) {
              this.setState({
                article: val
              })
            }
          })
        })
    }

  render() {
    const { article } = this.state;
    return (
      <div className="article-details">
        <h1>{article.title}</h1>
        <span>{article.description}</span>
        <p>{article.body}</p>
      </div>
    )
  }
}
