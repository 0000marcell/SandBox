define('ember-cli-materialize/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'].extend({
    layoutName: 'components/materialize-button',
    tagName: 'button',
    attributeBindings: ['type'],
    type: 'submit'
  });
});