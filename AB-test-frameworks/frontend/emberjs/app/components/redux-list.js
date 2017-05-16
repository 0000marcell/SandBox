import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

let stateToComputed = (state) => {
  return {
    todos: state.todos
  }
};

let dispatchToActions = (dispatch) => {
  return {
    add: (name, comp) => {
      dispatch({type: 'ADD_TODO', name: name}) 
      comp.set('showActive', true);
    },
    remove: (id) => {
      dispatch({type: 'REMOVE_TODO', id: id}) 
    },
    toggleActive: (id) => {
      dispatch({type: 'TOGGLE_ACTIVE_TODO', id: id})
    }
  } 
}

const ReduxList = Ember.Component.extend({
  showActive: true,
  layout: hbs`
    <h1>Redux list</h1>
    {{input type='text' value=task}}
    <button onclick={{action "add" task this}}>add</button>
    <button onclick={{action "showActive"}}>
      Show Active
    </button>
    <button onclick={{action "showInactive"}}>
      Show Inactive
    </button>
    <ul>
      {{#each (filter-by "active" showActive todos) as |todo|}}
        <li>
          {{todo.active}}
          {{todo.name}}
          <button {{action 'remove' todo.id}}>remove</button>
          <button {{action 'toggleActive' todo.id}}>
            activate</button>
        </li>
      {{/each}}
    </ul>
  `,
  actions: {
    showActive(){
      this.set('showActive', true);
    },
    showInactive(){
      this.set('showActive', false);
    }
  }
});

export default connect(stateToComputed, 
    dispatchToActions)(ReduxList);
