import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={Login} />

        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
