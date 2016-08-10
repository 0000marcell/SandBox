define('ember-cli-materialize/components/md-input-field', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var isPresent = _ember['default'].isPresent;

  exports['default'] = Component.extend({
    classNames: ['input-field'],

    bindAttributes: ['disabled', 'readonly', 'autofocus'],
    validate: false,
    _wasTouched: false,
    isValid: computed('_wasTouched', 'value', 'validate', 'errors', 'errors.[]', function () {
      return (isPresent(this.get('value')) || this.get('_wasTouched')) && this.get('validate') && this.get('errors') && this.get('errors.length') === 0;
    }),

    isInvalid: computed('_wasTouched', 'value', 'validate', 'errors', 'errors.[]', function () {
      return (isPresent(this.get('value')) || this.get('_wasTouched')) && this.get('validate') && this.get('errors') && this.get('errors.length') > 0;
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // pad the errors element when an icon is present
      if (isPresent(this.get('icon'))) {
        this.$('> span').css('padding-left', '3rem');
      }
    },

    id: computed('elementId', function () {
      return this.get('elementId') + '-input';
    }),

    _setupLabel: function _setupLabel() {
      var $label = this.$('> label');
      if (isPresent(this.get('value')) && !$label.hasClass('active')) {
        $label.addClass('active');
      }
    },
    _errorString: computed('errors.[]', function () {
      return (this.get('errors') || []).join('. ');
    }),
    actions: {
      inputFocusIn: function inputFocusIn(evt) {
        this.set('_wasTouched', true);
        this.sendAction('focusIn', evt);
      }
    }
  });
});