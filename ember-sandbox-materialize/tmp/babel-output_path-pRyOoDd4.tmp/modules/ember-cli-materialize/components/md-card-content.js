import Ember from 'ember';
import layout from '../templates/components/md-card-content';

var Component = Ember.Component;
var computed = Ember.computed;
var alias = Ember.computed.alias;

export default Component.extend({
  layout: layout,

  classNames: ['card-content'],

  classNameBindings: ['class'],
  title: alias('parentView.title'),
  titleClass: alias('parentView.titleClass'),
  activator: alias('parentView.activator'),

  cardTitleClass: computed('titleClass', function () {
    return this.get('titleClass') || 'black-text';
  })
});