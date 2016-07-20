define('ember-cli-materialize/components/-md-fixed-btn-base', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var Component = _ember['default'].Component;

  exports['default'] = Component.extend({
    actionArgs: null,
    large: true,

    actions: {
      fireButtonAction: function fireButtonAction() {
        var actionArgs = this.get('actionArgs');
        if (actionArgs) {
          this.sendAction('action', actionArgs || null);
        } else {
          this.sendAction('action');
        }
      }
    },

    _btnClassString: computed('btnClass', function () {
      return this.get('btnClass') + ' btn-floating ' + (this.get('large') ? 'btn-large' : '');
    })
  });
});