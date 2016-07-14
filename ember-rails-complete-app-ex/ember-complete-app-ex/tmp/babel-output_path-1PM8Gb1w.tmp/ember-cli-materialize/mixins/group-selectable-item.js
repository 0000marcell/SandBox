define('ember-cli-materialize/mixins/group-selectable-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Mixin = _ember['default'].Mixin;
  var alias = _ember['default'].computed.alias;

  exports['default'] = Mixin.create({
    name: alias('content.label'),
    value: alias('content.value'),
    disabled: false
  });
});