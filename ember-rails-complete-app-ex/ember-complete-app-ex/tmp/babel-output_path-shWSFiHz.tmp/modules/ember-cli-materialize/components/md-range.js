import Ember from 'ember';
import layout from '../templates/components/md-range';

var Component = Ember.Component;

export default Component.extend({
  layout: layout,

  classNames: ['range-field'],

  min: 0,
  max: 100,
  step: 5
});