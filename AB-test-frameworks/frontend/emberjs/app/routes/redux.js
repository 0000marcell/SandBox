import Ember from 'ember';
import route from 'ember-redux/route';

let ReduxRoute = Ember.Route.extend();

const initialState = 
  [{id: 1, name: 'buy new socks!', active: true},
   {id: 2, name: 'buy orange juice', active: false}];

let model = (dispatch) => {
  return dispatch({type: 'LOAD_TODOS', 
    response: initialState});
};

export default route({model})(ReduxRoute);
