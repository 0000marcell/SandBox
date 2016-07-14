define('app4/components/materialize-modal', ['exports', 'ember', 'app4/components/md-modal'], function (exports, _ember, _app4ComponentsMdModal) {
  exports['default'] = _app4ComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});