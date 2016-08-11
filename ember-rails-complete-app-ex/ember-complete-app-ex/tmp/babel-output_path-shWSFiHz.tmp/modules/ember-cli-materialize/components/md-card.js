import Ember from 'ember';
import layout from '../templates/components/md-card';

var Component = Ember.Component;

export default Component.extend({
  layout: layout,

  classNames: ['card'],
  classNameBinding: 'class'
});