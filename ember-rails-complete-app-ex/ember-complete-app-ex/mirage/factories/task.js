import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	title(i) { return `task ${i}` }
});
