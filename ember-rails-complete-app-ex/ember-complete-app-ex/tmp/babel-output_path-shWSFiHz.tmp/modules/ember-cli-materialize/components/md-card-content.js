import Ember from 'ember';
import layout from '../templates/components/md-card-content';

var Component = Ember.Component;
var computed = Ember.computed;

export default Component.extend({
  layout: layout,

  classNames: ['card-content'],

  classNameBinding: 'class',
  titleBinding: 'parentView.title',
  titleClassBinding: 'parentView.titleClass',
  activatorBinding: 'parentView.activator',

  cardTitleClass: computed('titleClass', function () {
    return this.get('titleClass') || 'black-text';
  })
});