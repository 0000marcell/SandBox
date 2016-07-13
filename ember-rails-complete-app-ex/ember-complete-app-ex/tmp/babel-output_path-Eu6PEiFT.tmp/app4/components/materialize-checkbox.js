define('app4/components/materialize-checkbox', ['exports', 'ember', 'app4/components/md-check'], function (exports, _ember, _app4ComponentsMdCheck) {
  exports['default'] = _app4ComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});