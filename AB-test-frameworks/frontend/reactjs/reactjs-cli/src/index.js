import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';

const ITEMS_LIST = [{id: 1, name: 'buy sockets!', active: true},
  {id: 2, name: 'buy water!', active: false}]; 

ReactDOM.render(
  < TodoList items={ITEMS_LIST}/>,
  document.getElementById('root')
);
