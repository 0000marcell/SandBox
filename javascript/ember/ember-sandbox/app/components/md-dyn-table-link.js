import Ember from 'ember';
import layout from '../templates/components/md-dyn-table-text';
import Table from './md-table';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';

const { Component, computed, get, computed: { oneWay } } = Ember;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [Table],
  tagName: 'td',
  layout,
	opts: null,
  valueBindingPath: null,
	headerComponentName: 'md-default-column-header',
  header: oneWay('valueBindingPath'),
  key: oneWay('valueBindingPath'),
	_value: computed('valueBindingPath', 'row', function() {
    let vbp = this.get('valueBindingPath');
    if (!vbp) {
      return '';
    } else {
      return get(this.get('row'), this.get('valueBindingPath'));
    }
  })
});