define('ember-sandbox-materialize/components/materialize-navbar', ['exports', 'ember', 'ember-sandbox-materialize/components/md-navbar'], function (exports, _ember, _emberSandboxMaterializeComponentsMdNavbar) {
  exports['default'] = _emberSandboxMaterializeComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});