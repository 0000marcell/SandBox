import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';

const ITEMS_LIST = [{id: 1, name: 'buy sockets!', active: true},
  {id: 2, name: 'buy water!', active: false}]; 

it('#todo-list-01 it renders without crashing', () => {
  const div = document.createElement('div');
  const component = 
    ReactDOM.render(<TodoItem items={ITEMS_LIST} />, div);
  expect(component.props.items.length).toBe(2);
});

it('#todo-list-02 it adds a new todo', () => {
  const div = document.createElement('div'); 
  const component = 
    ReactDOM.render(<TodoList items={ITEMS_LIST} />, div);
  component.setState({addName: 'marcell'});
  ReactTestUtils.Simulate.click(component.refs.addButton);
  expect(component.state.items.length).toBe(3);
});

it('#todo-list-03 it shows active items', () => {
  const div = document.createElement('div'); 
  const component = 
    ReactDOM.render(<TodoList items={ITEMS_LIST} />, div);
  ReactTestUtils.Simulate.click(component.refs.showActive);
  expect(component.state.items.length).toBe(1);
});

it('#todo-list-04 it shows inactive', () => {
  const div = document.createElement('div'); 
  const component = 
    ReactDOM.render(<TodoList items={ITEMS_LIST} />, div);
  ReactTestUtils.Simulate.click(component.refs.showInactive);
  expect(component.state.items.length).toBe(1);
});

it('#todo-list-05 it shows all the items', () => {
  const div = document.createElement('div'); 
  const component = 
    ReactDOM.render(<TodoList items={ITEMS_LIST} />, div);
  ReactTestUtils.Simulate.click(component.refs.showInactive);
  expect(component.state.items.length).toBe(2);
});
