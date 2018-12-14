import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import CreateArticle from './components/CreateArticle';
import Articles from './components/Articles';
import ArticleDetails from './components/ArticleDetails';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/create' component={CreateArticle} />
          <Route exact path='/' component={Articles} />
          <Route exact path='/articles/:id' component={ArticleDetails} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
