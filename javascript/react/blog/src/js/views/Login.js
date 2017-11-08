import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import history from '../history'
import store from '../actions/counter';

class Login extends Component {
  _logIn(){
    history.push({ pathname: '/'});
    store.dispatch({type: 'INCREMENT'});
    console.log('store state: ', 
      store.getState());
  }

  render(){
    return (
      <form onSubmit={this._logIn}>
        <button type='submit'>Login</button> 
      </form>
    )
  }
}

withRouter(Login);

export default Login;
