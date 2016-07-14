define('app4/components/materialize-input', ['exports', 'ember', 'app4/components/md-input'], function (exports, _ember, _app4ComponentsMdInput) {
  exports['default'] = _app4ComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});