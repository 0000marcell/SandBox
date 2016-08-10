define('ember-cli-materialize/components/md-btn', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-btn'], function (exports, _ember, _emberCliMaterializeMixinsUsesSettings, _emberCliMaterializeTemplatesComponentsMdBtn) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var typeOf = _ember['default'].typeOf;
  var scheduleOnce = _ember['default'].run.scheduleOnce;

  exports['default'] = Component.extend(_emberCliMaterializeMixinsUsesSettings['default'], {
    layout: _emberCliMaterializeTemplatesComponentsMdBtn['default'],
    tagName: 'a',
    classNameBindings: ['btn:waves-effect', 'wavesClass', 'isDisabled:disabled:waves-effect', 'buttonClass'],
    attributeBindings: ['isDisabled:disabled'],
    wavesClass: 'waves-light',
    text: null,
    icon: null,
    iconPosition: null,
    buttonType: null,
    actionArg: null,
    isFlat: computed.equal('buttonType', 'flat'),
    isDisabled: false,

    init: function init() {
      this._super.apply(this, arguments);
      if (!this.get('iconPosition')) {
        this.set('iconPosition', this.get('_mdSettings.buttonIconPosition'));
      }
    },

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      scheduleOnce('afterRender', this, this._setupWaves);
    },

    buttonClass: computed('buttonType', function () {
      var buttonType = this.get('buttonType');
      return buttonType ? 'btn-' + buttonType : 'btn';
    }),

    _setupWaves: function _setupWaves() {
      var Waves = window.Waves || {};
      if (typeOf(Waves.displayEffect) === 'function') {
        Waves.displayEffect();
      }
    },

    click: function click() {
      if (!this.get('disabled')) {
        this.sendAction('action', this.get('actionArg'));
      }
    }
  });
});