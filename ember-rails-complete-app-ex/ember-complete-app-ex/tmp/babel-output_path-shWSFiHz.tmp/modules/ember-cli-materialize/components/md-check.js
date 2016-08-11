import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-checkbox';

var alias = Ember.computed.alias;

export default SelectableItem.extend({
  layout: layout,
  text: alias('name'),
  classNames: ['materialize-checkbox']
});