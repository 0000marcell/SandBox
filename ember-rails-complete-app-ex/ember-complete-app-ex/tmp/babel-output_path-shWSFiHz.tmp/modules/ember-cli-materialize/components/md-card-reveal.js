import Ember from 'ember';
import layout from '../templates/components/md-card-reveal';

var Component = Ember.Component;

export default Component.extend({
  layout: layout,
  tagName: 'div',

  classNames: ['card-reveal'],
  classNameBinding: 'class',
  activatorBinding: 'parentView.activator'
});