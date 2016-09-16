define('ember-cli-materialize/components/md-checks', ['exports', 'ember-cli-materialize/components/selectable-item-group'], function (exports, _emberCliMaterializeComponentsSelectableItemGroup) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsSelectableItemGroup['default'].extend({
    selectableItemView: 'md-checks-check',
    multiple: true
  });
});