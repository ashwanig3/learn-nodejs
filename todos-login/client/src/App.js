import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/create' component={CreateTodo} />
            <Route exact path='/user/:id/todos' component={Todo} />
        </Switch>
          
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
