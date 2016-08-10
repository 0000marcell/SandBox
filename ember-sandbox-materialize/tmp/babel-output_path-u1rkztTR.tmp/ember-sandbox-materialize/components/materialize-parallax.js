define('ember-sandbox-materialize/components/materialize-parallax', ['exports', 'ember', 'ember-sandbox-materialize/components/md-parallax'], function (exports, _ember, _emberSandboxMaterializeComponentsMdParallax) {
  exports['default'] = _emberSandboxMaterializeComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});