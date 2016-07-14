import Ember from 'ember';
import layout from '../templates/components/md-badge';

var Component = Ember.Component;

export default Component.extend({
  layout: layout,
  tagName: 'span',
  text: null,
  classNames: ['badge']
});