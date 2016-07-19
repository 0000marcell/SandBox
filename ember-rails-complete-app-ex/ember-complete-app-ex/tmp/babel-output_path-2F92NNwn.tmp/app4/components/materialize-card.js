define('app4/components/materialize-card', ['exports', 'ember', 'app4/components/md-card'], function (exports, _ember, _app4ComponentsMdCard) {
  exports['default'] = _app4ComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});