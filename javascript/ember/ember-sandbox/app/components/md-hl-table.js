import Ember from 'ember';

/*
 High level implementantion of md-table 
*/
export default Ember.Component.extend({
	columnIds: [{ link: 'tasks.task', key: 'title' },
							{key: 'time'},
							{key: 'status'}]
});
