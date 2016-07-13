define('app4/components/materialize-card-reveal', ['exports', 'ember', 'app4/components/md-card-reveal'], function (exports, _ember, _app4ComponentsMdCardReveal) {
  exports['default'] = _app4ComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});