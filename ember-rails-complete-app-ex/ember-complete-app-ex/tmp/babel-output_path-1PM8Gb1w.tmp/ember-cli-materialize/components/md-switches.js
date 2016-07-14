define('ember-cli-materialize/components/md-switches', ['exports', 'ember-cli-materialize/components/selectable-item-group'], function (exports, _emberCliMaterializeComponentsSelectableItemGroup) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsSelectableItemGroup['default'].extend({
    selectableItemView: 'md-switches-switch',
    multiple: true
  });
});