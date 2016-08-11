define('ember-cli-materialize/components/md-radios', ['exports', 'ember-cli-materialize/components/selectable-item-group'], function (exports, _emberCliMaterializeComponentsSelectableItemGroup) {
  'use strict';

  exports['default'] = _emberCliMaterializeComponentsSelectableItemGroup['default'].extend({
    classNames: ['md-radios'],
    selectableItemView: 'md-radios-radio'
  });
});