define('app4/components/materialize-button', ['exports', 'ember', 'app4/components/md-btn'], function (exports, _ember, _app4ComponentsMdBtn) {
  exports['default'] = _app4ComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});