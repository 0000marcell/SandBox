import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {allItems: props.items, 
      filteredItems: props.items, addName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showInactive = this.showInactive.bind(this);
  }

  showAll(){
    this.setState({
      filteredItems: this.state.allItems
    });
  }

  showActive(){
    let result = this.state.allItems.filter((item) => {
      return item.active; 
    });
    this.setState({
      filteredItems: result
    });
  }

  showInactive(){
    let result = this.state.allItems.filter((item) => {
      return !item.active; 
    });
    this.setState({
      filteredItems: result
    });
  }

  addTodo(){
    let result = this.state.allItems.slice();
    result.push({id: result.slice(-1)[0].id + 1, 
      name: this.state.addName, active: true});
    this.setState({
      allItems: result,
      filteredItems: result 
    });
  }

  removeTodo(id){
    let result = this.state.allItems.filter((item) => {
      return item.id !== id; 
    });
    this.setState({
      allItems: result,
      filteredItems: result
    });
  }

  handleChange(e){
    this.setState({
      addName: e.target.value
    });
  }

  render(){
    return (
      <div>
        <input value={this.state.addName} 
          onChange={this.handleChange}
        />
        <button onClick={this.addTodo}>
          add
        </button>
        <button onClick={this.showAll}>
          all
        </button>
        <button onClick={this.showActive}>
          active
        </button>
        <button onClick={this.showInactive}>
          inactive
        </button>
        <ul>
          {
            this.state.filteredItems.map((item) => {
              return <TodoItem 
                  key={item.id} 
                  id={item.id}
                  name={item.name + item.id} 
                  removeTodo={this.removeTodo} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
