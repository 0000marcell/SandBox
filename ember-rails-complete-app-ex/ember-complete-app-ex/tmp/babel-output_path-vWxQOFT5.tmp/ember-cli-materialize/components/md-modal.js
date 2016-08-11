define('ember-cli-materialize/components/md-modal', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-modal', 'ember-keyboard'], function (exports, _ember, _emberCliMaterializeMixinsUsesSettings, _emberCliMaterializeTemplatesComponentsMdModal, _emberKeyboard) {
  'use strict';

  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var oneWay = _ember['default'].computed.oneWay;

  exports['default'] = Component.extend(_emberKeyboard.EKMixin, _emberCliMaterializeMixinsUsesSettings['default'], {
    layout: _emberCliMaterializeTemplatesComponentsMdModal['default'],

    attributeBindings: ['style:inlineStyle'],
    concatenatedProperties: ['modalClassNames'],

    inlineStyle: computed(function () {
      return new _ember['default'].Handlebars.SafeString('z-index: 1000;');
    }),

    isFooterFixed: oneWay('_mdSettings.modalIsFooterFixed'),

    modalClassNames: ['modal', 'show'],
    _modalClassString: computed('modalClassNames.[]', 'isFooterFixed', function () {
      var names = this.get('modalClassNames');
      if (this.get('isFooterFixed')) {
        names.push('modal-fixed-footer');
      }
      return names.join(' ');
    }),

    init: function init() {
      this._super.apply(this, arguments);
      this.set('keyboardActivated', true);
    },

    _onEsc: _ember['default'].on((0, _emberKeyboard.keyUp)('Escape'), function () {
      this.cancel();
    }),

    cancel: function cancel() {
      this.sendAction('close');
    },

    actions: {
      closeModal: function closeModal() {
        this.sendAction('close');
      }
    }

  });
});