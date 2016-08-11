define('ember-cli-materialize/mixins/uses-settings', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;

  exports['default'] = _ember['default'].Mixin.create({
    _mdSettings: computed(function () {
      var owner = _ember['default'].getOwner ? _ember['default'].getOwner(this) : this.get('container');
      return owner.lookup('service:materialize-settings');
    })
  });
});