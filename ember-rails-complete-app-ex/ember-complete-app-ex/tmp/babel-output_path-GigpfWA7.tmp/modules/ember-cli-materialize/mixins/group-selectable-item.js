import Ember from 'ember';

var Mixin = Ember.Mixin;
var alias = Ember.computed.alias;

export default Mixin.create({
  name: alias('content.label'),
  value: alias('content.value'),
  disabled: false
});