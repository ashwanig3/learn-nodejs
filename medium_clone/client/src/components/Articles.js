import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { setInitialUser, getAllArticles } from '../action/action';
import { connect } from 'react-redux';

 class Articles extends Component {

    componentDidMount = () => {
    this.props.dispatch(getAllArticles())
     this.props.dispatch(setInitialUser())
        
    }
  render() {
      const { articles } = this.props;
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

const mapStateToProps = (state) => {
    return {
        articles : state.allBlogs
    }
}

export default connect(mapStateToProps)(Articles);