import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TodoItem from '../TodoItem';

it('#todo-item-01 it renders without crashing', () => {
  const div = document.createElement('div');
  const component = 
    ReactDOM.render(<TodoItem name="marcell" />, div);
  expect(component.props.name).toBe("marcell");
});

it('#todo-item-02 it removes a todo', () => {
  const div = document.createElement('div');
  const removeTodo = (id) => {
    expect(id).toBe('1'); 
  }
  const component = 
    ReactDOM.render((<TodoItem 
      removeTodo={removeTodo}
      key='1'
      id='1'
      name="marcell" />), 
      div);
  ReactTestUtils.Simulate.click(component.refs.removeButton);   
});
