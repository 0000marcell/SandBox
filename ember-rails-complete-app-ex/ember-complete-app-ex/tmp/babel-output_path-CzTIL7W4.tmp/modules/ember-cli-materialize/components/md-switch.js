import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-switch';

var computed = Ember.computed;

export default SelectableItem.extend({
  layout: layout,

  classNames: ['switch', 'materialize-switch'],

  offLabel: 'Off',
  onLabel: 'On',
  disabled: false,

  _labelClass: computed('name', function () {
    return this.get('name') ? 'right' : '';
  })
});