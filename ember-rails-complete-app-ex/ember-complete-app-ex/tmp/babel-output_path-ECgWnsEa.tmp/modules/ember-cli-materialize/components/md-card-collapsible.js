import Ember from 'ember';
import layout from '../templates/components/md-card-collapsible';

var computed = Ember.computed;
var Component = Ember.Component;

export default Component.extend({
  layout: layout,
  tagName: 'ul',
  classNames: ['collapsible'],
  attributeBindings: ['data-collapsible'],
  accordion: true,

  'data-collapsible': computed(function () {
    return this.get('accordion') ? 'accordion' : 'expandable';
  }),

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this._setupCollapsible();
  },

  _setupCollapsible: function _setupCollapsible() {
    var accordion = this.get('accordion');
    this.$().collapsible({ accordion: accordion });
  },

  _teardownCollapsible: function _teardownCollapsible() {
    var $panelHeaders = this.$('> li > .collapsible-header');
    this.$().off('click.collapse', '.collapsible-header');
    $panelHeaders.off('click.collapse');
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    this._teardownCollapsible();
  }
});