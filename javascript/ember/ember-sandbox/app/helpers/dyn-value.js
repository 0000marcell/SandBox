import Ember from 'ember';
const { get } = Ember;

/*
 Used to return a dynamic segment in the template
 ex: {{link-to (dynValue 'title' model)}} 
*/
export function dynValue(params) {
	return get(params[0], params[1]);
}

export default Ember.Helper.helper(dynValue);
