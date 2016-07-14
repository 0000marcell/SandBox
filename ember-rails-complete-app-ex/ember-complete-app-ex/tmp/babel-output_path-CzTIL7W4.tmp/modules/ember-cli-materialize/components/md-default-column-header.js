import Ember from 'ember';
import layout from '../templates/components/md-default-column-header';

var Component = Ember.Component;
var alias = Ember.computed.alias;

export default Component.extend({
  tagName: 'th',
  layout: layout,
  attributeBindings: ['data-field'],
  'data-field': alias('column.valueBindingPath')
});