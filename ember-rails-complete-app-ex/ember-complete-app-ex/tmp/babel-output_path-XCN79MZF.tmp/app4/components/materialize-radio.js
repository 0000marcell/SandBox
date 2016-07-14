define('app4/components/materialize-radio', ['exports', 'ember', 'app4/components/md-radio'], function (exports, _ember, _app4ComponentsMdRadio) {
  exports['default'] = _app4ComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});