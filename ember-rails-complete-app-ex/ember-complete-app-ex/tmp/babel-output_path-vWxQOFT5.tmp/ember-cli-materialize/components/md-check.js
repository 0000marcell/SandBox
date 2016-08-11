define('ember-cli-materialize/components/md-check', ['exports', 'ember', 'ember-cli-materialize/components/selectable-item', 'ember-cli-materialize/templates/components/md-checkbox'], function (exports, _ember, _emberCliMaterializeComponentsSelectableItem, _emberCliMaterializeTemplatesComponentsMdCheckbox) {
  'use strict';

  var alias = _ember['default'].computed.alias;

  exports['default'] = _emberCliMaterializeComponentsSelectableItem['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdCheckbox['default'],
    text: alias('name'),
    classNames: ['materialize-checkbox']
  });
});