define('app4/components/materialize-card-panel', ['exports', 'ember', 'app4/components/md-card-panel'], function (exports, _ember, _app4ComponentsMdCardPanel) {
  exports['default'] = _app4ComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});