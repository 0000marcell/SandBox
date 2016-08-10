import Ember from 'ember';
import layout from '../templates/components/md-card-reveal';

var Component = Ember.Component;
var alias = Ember.computed.alias;

export default Component.extend({
  layout: layout,
  tagName: 'div',

  classNames: ['card-reveal'],
  classNameBindings: ['class'],
  activator: alias('parentView.activator')
});