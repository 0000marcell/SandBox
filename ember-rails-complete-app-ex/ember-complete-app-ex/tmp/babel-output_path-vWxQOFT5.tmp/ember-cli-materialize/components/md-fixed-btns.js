define('ember-cli-materialize/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/-md-fixed-btn-base', 'ember-cli-materialize/templates/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtnBase, _emberCliMaterializeTemplatesComponentsMdFixedBtns) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsMdFixedBtnBase['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdFixedBtns['default'],
    classNames: ['md-fixed-btns', 'fixed-action-btn']
  });
});