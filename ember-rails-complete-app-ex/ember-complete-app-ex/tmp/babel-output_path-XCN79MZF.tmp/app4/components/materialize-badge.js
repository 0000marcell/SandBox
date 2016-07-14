define('app4/components/materialize-badge', ['exports', 'ember', 'app4/components/md-badge'], function (exports, _ember, _app4ComponentsMdBadge) {
  exports['default'] = _app4ComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});