import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/md-table';

var A = Ember.A;
var Component = Ember.Component;
var computed = Ember.computed;

export default Component.extend(ParentComponentSupport, {
  tagName: 'table',
  layout: layout,
  columns: null,
  composableChildrenDebounceTime: 1,
  init: function init() {
    this._super.apply(this, arguments);
    this.set('columns', Ember.A());
  },

  columnComponents: computed('composableChildren', function () {
    return new A(this.get('composableChildren'));
  }).readOnly(),

  registerChildComponent: function registerChildComponent(childComponent) {
    this.get('_childComponents').add(childComponent, childComponent.get('key'));
    this._notifyComposableChildrenChanged();
  },

  unregisterChildComponent: function unregisterChildComponent(childComponent) {
    this.get('_childComponents')['delete'](childComponent, childComponent.get('key'));
    this._notifyComposableChildrenChanged();
  }
});