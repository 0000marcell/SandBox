import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	username: '____marcell',
	name(i) { return `User ${i}` },
	email(i) { return `user${i}@gmail.com` },
	password: '123456' 
});
