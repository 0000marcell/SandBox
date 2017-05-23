import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {items: props.items, addName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo= this.removeTodo.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showInactive = this.showInactive.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  showAll(){
    this.setState({
      items: this.props.items
    });
  }

  showActive(){
    let result = this.props.items.filter((item) => {
      return item.active; 
    });
    this.setState({
      items: result
    });
  }

  showInactive(){
    let result = this.props.items.filter((item) => {
      return !item.active; 
    });
    this.setState({
      items: result
    });
  }

  addTodo(){
    let newItem = {id: this.state.items.length + 1,
                    name: this.state.addName, 
                    active: true};
    let arr = this.state.items.slice();
    arr.push(newItem);
    this.setState({
      items: arr 
    }); 
  }

  removeTodo(id){
    let result = 
      this.state.items.filter((item) => {
        return item.id !== id;   
      });
    this.setState({
      items: result
    });
  }

  handleChange(event){
    this.setState({addName: 
      event.target.value});
  }

  render(){
    return (
      <div>
        <input value={this.state.addName} 
          onChange={this.handleChange}
        />
        <button 
          ref="addButton"
          onClick={this.addTodo}>
          add
        </button>
        <button
          ref="showAll"
          onClick={this.showAll}>
          all
        </button>
        <button
          ref="showActive"
          onClick={this.showActive}>
          active
        </button>
        <button
          ref="showInactive"
          onClick={this.showInactive}>
          inactive
        </button>
        <ul>
          {
            this.state.items.map((item) => {
              return <TodoItem 
                removeTodo={this.removeTodo}
                key={item.id} 
                id={item.id}
                name={item.name} />
            })
          }  
        </ul>
      </div>
    );
  }
}

export default TodoList;
