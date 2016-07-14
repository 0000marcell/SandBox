define('app4/components/materialize-navbar', ['exports', 'ember', 'app4/components/md-navbar'], function (exports, _ember, _app4ComponentsMdNavbar) {
  exports['default'] = _app4ComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});