define('ember-sandbox-materialize/components/materialize-radios', ['exports', 'ember', 'ember-sandbox-materialize/components/md-radios'], function (exports, _ember, _emberSandboxMaterializeComponentsMdRadios) {
  exports['default'] = _emberSandboxMaterializeComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});