import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Mixin.create({
  _mdSettings: computed(function () {
    var owner = Ember.getOwner ? Ember.getOwner(this) : this.get('container');
    return owner.lookup('service:materialize-settings');
  })
});