import Ember from 'ember';
import MaterializeInputField from './md-input-field';
import layout from '../templates/components/md-select';

export default MaterializeInputField.extend({
  layout: layout,
  classNames: ['md-select'],
  optionLabelPath: 'content',
  optionValuePath: 'content',

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    this._setupSelect();
  },

  _setupSelect: function _setupSelect() {
    // jscs: disable
    this.$('select').material_select();
    // jscs: enable
  },

  _parsedContent: Ember.computed('optionValuePath', 'optionLabelPath', 'content.[]', function () {
    var contentRegex = /(content\.|^content$)/;
    // keep backwards compatability for defining optionValuePath & as optionContentPath `content.{{attName}}`
    var optionValuePath = (this.get('optionValuePath') || '').replace(contentRegex, '');
    var optionLabelPath = (this.get('optionLabelPath') || '').replace(contentRegex, '');
    return Ember.A((this.get('content') || []).map(function (option) {
      return Ember.Object.create({
        value: optionValuePath ? Ember.get(option, optionValuePath) : option,
        label: optionLabelPath ? Ember.get(option, optionLabelPath) : option
      });
    }));
  }),

  // TODO: clean up any listeners that $.select() puts in place
  // _teardownSelect() {
  //
  // }

  // TODO: this could be converted to a computed property, returning a string
  //  that is bound to the class attribute of the inputSelector
  errorsDidChange: Ember.observer('errors', function () {
    var inputSelector = this.$('input');
    // monitor the select's validity and copy the appropriate validation class to the materialize input element.
    if (!Ember.isNone(inputSelector)) {
      Ember.run.later(this, function () {
        var isValid = this.$('select').hasClass('valid');
        if (isValid) {
          inputSelector.removeClass('invalid');
          inputSelector.addClass('valid');
        } else {
          inputSelector.removeClass('valid');
          inputSelector.addClass('invalid');
        }
      }, 150);
    }
  })
});