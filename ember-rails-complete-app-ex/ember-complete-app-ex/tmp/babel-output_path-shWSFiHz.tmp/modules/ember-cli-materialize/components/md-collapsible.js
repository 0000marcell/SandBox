import Ember from 'ember';
import layout from '../templates/components/md-collapsible';
import _computed from 'ember-new-computed';

var deprecate = Ember.deprecate;
var Component = Ember.Component;

export default Component.extend({
  layout: layout,
  tagName: 'li',
  classNameBindings: ['class'],
  actionArg: null,
  model: _computed('actionArg', {
    get: function get() {
      deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
      return this.get('actionArg');
    },
    set: function set(key, val) {
      deprecate('md-collapsible#model is deprecated. Please use md-collapsible#actionArg instead');
      return this.set('actionArg', val);
    }
  }),
  actions: {
    headerClicked: function headerClicked() {
      this.sendAction('action', this.get('actionArg'));
    }
  }
});