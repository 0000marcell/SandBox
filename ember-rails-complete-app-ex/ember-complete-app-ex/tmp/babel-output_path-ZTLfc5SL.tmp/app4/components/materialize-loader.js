define('app4/components/materialize-loader', ['exports', 'ember', 'app4/components/md-loader'], function (exports, _ember, _app4ComponentsMdLoader) {
  exports['default'] = _app4ComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});