define('ember-cli-materialize/components/md-modal-container', ['exports', 'ember', 'ember-cli-materialize/mixins/uses-settings', 'ember-cli-materialize/templates/components/md-modal-container'], function (exports, _ember, _emberCliMaterializeMixinsUsesSettings, _emberCliMaterializeTemplatesComponentsMdModalContainer) {
  'use strict';

  var Component = _ember['default'].Component;

  exports['default'] = Component.extend(_emberCliMaterializeMixinsUsesSettings['default'], {
    layout: _emberCliMaterializeTemplatesComponentsMdModalContainer['default'],
    modalContainerId: null,

    init: function init() {
      this._super.apply(this, arguments);
      if (!this.get('modalContainerId')) {
        this.set('modalContainerId', this.get('_mdSettings.modalContainerId'));
      }
    }
  });
});