import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Articles extends Component {
    state = {
        articles: []
    }

    componentWillMount = () => {
        fetch('http://localhost:4000/api/articles')
        .then(res => res.json())
        .then(data => this.setState({
            articles: data.data
        }))
    }
  render() {
      const { articles } = this.state;
    return (
      <div className="articles-container">
        {
            articles && articles.map(article => 
                <Link to={`/articles/${article._id}`} className="article-link">
                    <h1>{article.title}</h1>
                    <span>{article.description}</span>
                </Link>
            )
        }
      </div>
    )
  }
}
