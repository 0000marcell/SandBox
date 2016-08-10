define('app4/components/materialize-parallax', ['exports', 'ember', 'app4/components/md-parallax'], function (exports, _ember, _app4ComponentsMdParallax) {
  exports['default'] = _app4ComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});