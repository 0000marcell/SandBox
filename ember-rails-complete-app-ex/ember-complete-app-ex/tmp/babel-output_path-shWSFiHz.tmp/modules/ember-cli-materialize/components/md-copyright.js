import Ember from 'ember';
import layout from '../templates/components/md-copyright';

var Component = Ember.Component;
var computed = Ember.computed;

export default Component.extend({
  layout: layout,
  classNames: ['footer-copyright'],

  init: function init() {
    this._super.apply(this, arguments);
    Ember.assert('Property startYear must be less than or equal to the current year.', this.get('startYear') === null || this.get('startYear') <= new Date().getFullYear());
  },

  startYear: null,
  text: null,

  date: computed(function () {
    var currentYear = new Date().getFullYear();
    var startYear = this.get('startYear');

    if (startYear === null || startYear === currentYear) {
      return '' + currentYear;
    } else {
      return startYear + ' - ' + currentYear;
    }
  })
});