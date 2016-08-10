import Ember from 'ember';

var computed = Ember.computed;
var Mixin = Ember.Mixin;

export default Mixin.create({
  _mdSettings: computed(function () {
    // jscs:disable disallowDirectPropertyAccess
    var owner = Ember.getOwner ? Ember.getOwner(this) : this.get('container');
    // jscs:enable disallowDirectPropertyAccess
    return owner.lookup('service:materialize-settings');
  })
});