import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <ul>
    <li><Link to="/">Posts</Link></li>
    <li><Link to="/users">Users</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>
)

export default AppHeader;
