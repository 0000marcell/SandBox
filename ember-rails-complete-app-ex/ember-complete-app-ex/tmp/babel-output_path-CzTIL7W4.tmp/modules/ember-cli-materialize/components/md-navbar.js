import Ember from 'ember';
import layout from '../templates/components/md-navbar';

var computed = Ember.computed;
var Component = Ember.Component;
var typeOf = Ember.typeOf;
var scheduleOnce = Ember.run.scheduleOnce;

export default Component.extend({
  tagName: 'nav',
  layout: layout,
  homeRoute: 'index',

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    // TODO: is this scheduling necessary?
    scheduleOnce('afterRender', this, this._setupNavbar);
  },

  _setupNavbar: function _setupNavbar() {
    if (typeOf(Ember.$('.button-collapse').sideNav) === 'function') {
      this.notifyPropertyChange('_sideNavId');
      this.$('.button-collapse').sideNav({
        closeOnClick: true
      });
    }
  },

  _sideNavId: computed(function () {
    return this.get('element.id') + '-sidenav';
  })

  // TODO: Unregister any listeners that $.sideNav() puts in place
  // _teardownNavbar() {
  //
  // }
});