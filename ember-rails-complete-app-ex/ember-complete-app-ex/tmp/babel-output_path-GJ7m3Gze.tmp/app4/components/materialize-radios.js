define('app4/components/materialize-radios', ['exports', 'ember', 'app4/components/md-radios'], function (exports, _ember, _app4ComponentsMdRadios) {
  exports['default'] = _app4ComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});