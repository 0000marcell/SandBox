import Ember from 'ember';
import layout from '../templates/components/md-pagination';

var Component = Ember.Component;
var computed = Ember.computed;
var A = Ember.A;

export default Component.extend({
  layout: layout,

  classNames: ['pagination'],

  min: 1,
  max: 1,
  current: 1,
  range: 5,
  tagName: 'ul',

  windowRange: computed('min', 'max', 'range', 'current', function () {
    // TODO: this should be broken out into a util, so that it can be tested independently
    var max = this.get('max');
    var min = this.get('min');
    var range = this.get('range');
    var current = this.get('current');

    var middle = Math.floor((max - min) / 2);
    var low = Math.max(min, current - Math.floor(range / 2));
    var high = Math.min(max, current + Math.floor(range / 2));

    if (high - low < range - 1) {
      if (current <= middle) {
        high = Math.min(max, low + range - 1);
      } else {
        low = Math.max(min, high - (range - 1));
      }
    }
    return {
      low: low, high: high
    };
  }),

  _pages: computed('windowRange.low', 'windowRange.high', 'current', function () {
    var a = new A([]);
    var winRange = this.get('windowRange');
    var current = this.get('current');
    for (var i = winRange.low; i <= winRange.high; i += 1) {
      a.addObject({ val: i, cssClass: current === i ? 'active' : 'waves-effect' });
    }
    return a;
  }),

  _canGoBack: computed('min', 'current', function () {
    return this.get('current') > this.get('min');
  }),

  _canGoFwd: computed('max', 'current', function () {
    return this.get('current') < this.get('max');
  }),

  incrementClass: computed('_canGoFwd', function () {
    return this.get('_canGoFwd') ? '' : 'disabled';
  }),

  decrementClass: computed('_canGoBack', function () {
    return this.get('_canGoBack') ? '' : 'disabled';
  }),

  actions: {
    oneBack: function oneBack() {
      if (this.get('_canGoBack')) {
        this.decrementProperty('current');
      }
    },
    oneFwd: function oneFwd() {
      if (this.get('_canGoFwd')) {
        this.incrementProperty('current');
      }
    },
    gotoPage: function gotoPage(pagenum) {
      this.set('current', pagenum);
    }
  }
});