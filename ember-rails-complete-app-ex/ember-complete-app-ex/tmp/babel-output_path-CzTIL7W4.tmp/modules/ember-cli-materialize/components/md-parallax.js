import Ember from 'ember';
import layout from '../templates/components/md-parallax';
var Component = Ember.Component;

export default Component.extend({
  layout: layout,
  classNames: ['parallax-container'],

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this._setupParallax();
  },

  _setupParallax: function _setupParallax() {
    this.$('.parallax').parallax();
  }

  // TODO: unregister any listeners that $.parallax() registers
  // _teardownParallax() {
  //
  // }
});