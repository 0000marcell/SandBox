import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdTabs from './md-tabs';
import layout from '../templates/components/md-tab';

var Component = Ember.Component;
var computed = Ember.computed;
var oneWay = Ember.computed.oneWay;

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: [MdTabs],
  tagName: 'li',
  layout: layout,

  classNames: ['materialize-tabs-tab', 'tab', 'col'],
  classNameBindings: ['_colClass'],

  colWidth: oneWay('composableParent.colWidth'),

  _colClass: computed('colWidth', function () {
    return 's' + this.get('colWidth');
  }),

  active: computed('composableParent.composableChildren.[]', 'composableParent.selected', 'value', function () {
    var selected = this.get('composableParent.selected');
    if (selected) {
      return selected === this.get('value');
    } else {
      var values = this.get('composableParent').tabComponents().map(function (t) {
        return t.get('value');
      });
      return values.indexOf(this.get('value')) === 0;
    }
  }).readOnly(),

  click: function click() {
    this.get('composableParent').set('selected', this.get('value'));
  }

});