import Ember from 'ember';
import DS from 'ember-data';
import ENV from 'app4/config/environment';
import railsSerializer from './rails-serializer';

let serializer;
if(ENV.APP.useMirage){
	serializer = DS.JSONAPISerializer.extend({});
}else{
	serializer = railsSerializer;
}

export default serializer;
