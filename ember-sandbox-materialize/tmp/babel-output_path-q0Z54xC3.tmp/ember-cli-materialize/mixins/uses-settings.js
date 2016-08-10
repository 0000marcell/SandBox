define('ember-cli-materialize/mixins/uses-settings', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var Mixin = _ember['default'].Mixin;

  exports['default'] = Mixin.create({
    _mdSettings: computed(function () {
      // jscs:disable disallowDirectPropertyAccess
      var owner = _ember['default'].getOwner ? _ember['default'].getOwner(this) : this.get('container');
      // jscs:enable disallowDirectPropertyAccess
      return owner.lookup('service:materialize-settings');
    })
  });
});