import Ember from 'ember';
import layout from '../templates/components/md-btn-dropdown';
import MaterializeButton from './md-btn';

var computed = Ember.computed;

export default MaterializeButton.extend({
  layout: layout,
  tagName: 'a',
  classNames: ['dropdown-button'],
  icon: 'mdi-navigation-expand-more',
  iconBody: '',
  iconPosition: 'right',
  attributeBindings: ['inDuration:data-induration', 'outDuration:data-outduration', 'constrainWidth:data-constrainwidth', '_hoverVal:data-hover', 'gutter:data-gutter', 'belowOrigin:data-beloworigin', 'alignment'],

  didRender: function didRender() {
    this._super.apply(this, arguments);
    this._setupDropdown();
  },

  _hoverVal: computed('hover', function () {
    return this.get('hover') ? 'true' : 'false';
  }),

  _setupDropdown: function _setupDropdown() {
    // needed until the Materialize.dropdown plugin is replaced
    this.$().attr('data-activates', this.get('_dropdownContentId'));
    var options = {
      hover: !!this.getWithDefault('hover', false),
      // Ignore requireCamelCaseOrUpperCaseIdentifiers because the original
      // variable of materializecss contains underscore
      // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      constrain_width: !!this.getWithDefault('constrainWidth', true),
      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      inDuration: this.getWithDefault('inDuration', this.get('_mdSettings.dropdownInDuration')),
      outDuration: this.getWithDefault('outDuration', this.get('_mdSettings.dropdownOutDuration')),
      gutter: this.getWithDefault('gutter', 0),
      belowOrigin: !!this.getWithDefault('belowOrigin', false),
      alignment: this.getWithDefault('alignment', 'left')
    };

    this.$().dropdown(options);
  },
  _dropdownContentId: computed(function () {
    return this.get('elementId') + '-dropdown-content';
  })
});