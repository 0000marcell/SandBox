import React from 'react';
import AppHeader from './js/views/AppHeader';
import Login from './js/views/Login';
import PostList from './js/views/posts/List';
import UserList from './js/views/users/List';
import history from './js/history';

import {
  Router,
  Route
} from 'react-router-dom';

const App = () => (
  <Router history={history}>
    <div>
      <AppHeader />
      <hr />
      <Route exact path="/" component={PostList} /> 
      <Route path="/users" component={UserList} />
      <Route path="/login" component={Login} />
      <Route path="*" component={PostList}/>
    </div>
  </Router>
)

export default App;
