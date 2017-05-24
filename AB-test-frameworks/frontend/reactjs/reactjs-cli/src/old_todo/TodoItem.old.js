import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(e){
    this.props.removeTodo(this.props.id);
  }

  render(){
    return (
      <li>
        <p>{this.props.name}</p>
        <button ref="removeButton"
          onClick={this.removeTodo}>
          remove
        </button>
      </li>
    );
  }
}

export default TodoItem;
