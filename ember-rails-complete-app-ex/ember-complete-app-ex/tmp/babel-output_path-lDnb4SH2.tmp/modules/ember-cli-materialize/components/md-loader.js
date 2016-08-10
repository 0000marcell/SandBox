import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-loader';

var Component = Ember.Component;
var computed = Ember.computed;
var oneWay = Ember.computed.oneWay;

export default Component.extend(UsesSettings, {
  layout: layout,

  classNameBindings: ['isBarType:progress:preloader-wrapper', 'active:active', 'size'],

  mode: oneWay('_mdSettings.loaderMode'),
  percent: 0,
  size: oneWay('_mdSettings.loaderSize'),
  active: true,
  color: null,

  isBarType: computed('mode', function () {
    return ['determinate', 'indeterminate'].indexOf(this.get('mode')) >= 0;
  }),

  isDeterminate: computed('mode', function () {
    return ['determinate'].indexOf(this.get('mode'));
  }),

  barStyle: computed('mode', 'percent', function () {
    if (this.get('mode') === 'determinate') {
      return new Ember.String.htmlSafe('width: ' + parseInt(this.get('percent'), 10) + '%');
    } else {
      return new Ember.String.htmlSafe('');
    }
  }),

  barClassName: computed('isBarType', 'mode', function () {
    return this.get('isBarType') ? this.get('mode') : null;
  }),

  spinnerClassNames: computed('color', 'isBarType', function () {
    if (!this.get('isBarType')) {
      var color = this.get('color');
      if (!color) {
        return Ember.A(['blue', 'red', 'green', 'yellow'].map(function (c) {
          return 'spinner-layer spinner-' + c;
        }));
      } else {
        return Ember.A(['spinner-layer spinner-' + color + '-only']);
      }
    } else {
      return Ember.A();
    }
  })
});