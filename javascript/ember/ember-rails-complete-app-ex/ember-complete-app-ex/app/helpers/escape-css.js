import Ember from 'ember';

export function escapeCSS(params) {
	return Ember.String.htmlSafe(params);	
}

export default Ember.Helper.helper(escapeCSS);
