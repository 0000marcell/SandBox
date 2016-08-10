define('ember-cli-materialize/components/md-switch', ['exports', 'ember', 'ember-cli-materialize/components/selectable-item', 'ember-cli-materialize/templates/components/md-switch'], function (exports, _ember, _emberCliMaterializeComponentsSelectableItem, _emberCliMaterializeTemplatesComponentsMdSwitch) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _emberCliMaterializeComponentsSelectableItem['default'].extend({
    layout: _emberCliMaterializeTemplatesComponentsMdSwitch['default'],

    classNames: ['switch', 'materialize-switch'],

    offLabel: 'Off',
    onLabel: 'On',
    disabled: false,

    _labelClass: computed('name', function () {
      return this.get('name') ? 'right' : '';
    })
  });
});