import Ember from 'ember';
import layout from '../templates/components/md-card-panel';

var Component = Ember.Component;

export default Component.extend({
  layout: layout,

  classNames: ['card-panel'],
  classNameBinding: 'class'
});