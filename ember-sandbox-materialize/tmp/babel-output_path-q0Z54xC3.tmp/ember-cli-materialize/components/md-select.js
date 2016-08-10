define('ember-cli-materialize/components/md-select', ['exports', 'ember', 'ember-cli-materialize/components/md-input-field', 'ember-cli-materialize/templates/components/md-select'], function (exports, _ember, _emberCliMaterializeComponentsMdInputField, _emberCliMaterializeTemplatesComponentsMdSelect) {
  'use strict';

  var computed = _ember['default'].computed;
  var A = _ember['default'].A;
  var observer = _ember['default'].observer;
  var isNone = _ember['default'].isNone;
  var later = _ember['default'].run.later;
  var get = _ember['default'].get;

  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdSelect['default'],
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

    _parsedContent: computed('optionValuePath', 'optionLabelPath', 'content.[]', function () {
      var contentRegex = /(content\.|^content$)/;
      // keep backwards compatability for defining optionValuePath & as optionContentPath `content.{{attName}}`
      var optionValuePath = (this.get('optionValuePath') || '').replace(contentRegex, '');
      var optionLabelPath = (this.get('optionLabelPath') || '').replace(contentRegex, '');
      return A((this.get('content') || []).map(function (option) {
        return {
          value: optionValuePath ? get(option, optionValuePath) : option,
          label: optionLabelPath ? get(option, optionLabelPath) : option
        };
      }));
    }),

    // TODO: clean up any listeners that $.select() puts in place
    // _teardownSelect() {
    //
    // }

    // TODO: this could be converted to a computed property, returning a string
    //  that is bound to the class attribute of the inputSelector
    errorsDidChange: observer('errors', function () {
      var inputSelector = this.$('input');
      // monitor the select's validity and copy the appropriate validation class to the materialize input element.
      if (!isNone(inputSelector)) {
        later(this, function () {
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
});