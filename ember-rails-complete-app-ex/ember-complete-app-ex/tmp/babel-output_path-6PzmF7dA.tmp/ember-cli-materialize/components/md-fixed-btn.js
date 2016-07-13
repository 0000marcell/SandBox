define('ember-cli-materialize/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/-md-fixed-btn-base', 'ember-cli-materialize/templates/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtnBase, _emberCliMaterializeTemplatesComponentsMdFixedBtn) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsMdFixedBtnBase['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdFixedBtn['default'],
    tagName: 'li',
    classNames: ['md-fixed-btn']
  });
});