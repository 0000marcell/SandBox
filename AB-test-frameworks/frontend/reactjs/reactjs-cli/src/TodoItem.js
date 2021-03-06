import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(){
    this.props.removeTodo(this.props.id);
  }

  render(){
    return (
      <li>
        {this.props.name}
        <button 
          onClick={this.removeTodo}>
          remove
        </button>
      </li>
    )
  }
}

export default TodoItem;
