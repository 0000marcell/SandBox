define('ember-cli-materialize/components/md-select', ['exports', 'ember', 'ember-cli-materialize/components/md-input-field', 'ember-cli-materialize/templates/components/md-select'], function (exports, _ember, _emberCliMaterializeComponentsMdInputField, _emberCliMaterializeTemplatesComponentsMdSelect) {
  'use strict';

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

    _parsedContent: _ember['default'].computed('optionValuePath', 'optionLabelPath', 'content.[]', function () {
      var contentRegex = /(content\.|^content$)/;
      // keep backwards compatability for defining optionValuePath & as optionContentPath `content.{{attName}}`
      var optionValuePath = (this.get('optionValuePath') || '').replace(contentRegex, '');
      var optionLabelPath = (this.get('optionLabelPath') || '').replace(contentRegex, '');
      return _ember['default'].A((this.get('content') || []).map(function (option) {
        return _ember['default'].Object.create({
          value: optionValuePath ? _ember['default'].get(option, optionValuePath) : option,
          label: optionLabelPath ? _ember['default'].get(option, optionLabelPath) : option
        });
      }));
    }),

    // TODO: clean up any listeners that $.select() puts in place
    // _teardownSelect() {
    //
    // }

    // TODO: this could be converted to a computed property, returning a string
    //  that is bound to the class attribute of the inputSelector
    errorsDidChange: _ember['default'].observer('errors', function () {
      var inputSelector = this.$('input');
      // monitor the select's validity and copy the appropriate validation class to the materialize input element.
      if (!_ember['default'].isNone(inputSelector)) {
        _ember['default'].run.later(this, function () {
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