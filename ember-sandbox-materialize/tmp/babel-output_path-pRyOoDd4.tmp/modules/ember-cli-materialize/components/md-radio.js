import Ember from 'ember';
import SelectableItem from './selectable-item';
import layout from '../templates/components/md-radio';

var computed = Ember.computed;
var alias = Ember.computed.alias;
var isEmpty = Ember.isEmpty;
var assert = Ember.assert;

export default SelectableItem.extend({
  layout: layout,

  value: '',
  text: alias('name'),
  groupValue: alias('group.selection'),

  className: ['materialize-radio'],

  checked: computed('groupValue', 'value', function () {
    return this.get('groupValue') === this.get('value');
  }),

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    assert(!isEmpty(this.get('group')), 'materialize-radio is not supported outside the context of a materialize-radio-group');
  }
});