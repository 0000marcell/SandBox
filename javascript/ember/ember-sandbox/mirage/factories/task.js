import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	title(i) { return `todo ${i}`; },
	time: '3:00',
	status: 'active'
});
