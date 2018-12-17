import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Header from './components/Header';
import CreateArticle from './components/CreateArticle';
import Articles from './components/Articles';
import ArticleDetails from './components/ArticleDetails';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/create' component={CreateArticle} />
            <Route exact path='/' component={Articles} />
            <Route exact path='/articles/:id' component={ArticleDetails} />
            <Route exact path='/users/:id' component={Profile} />
          </Switch>
          
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
