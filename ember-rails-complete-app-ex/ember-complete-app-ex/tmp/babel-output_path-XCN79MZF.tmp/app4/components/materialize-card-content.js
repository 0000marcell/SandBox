define('app4/components/materialize-card-content', ['exports', 'ember', 'app4/components/md-card-content'], function (exports, _ember, _app4ComponentsMdCardContent) {
  exports['default'] = _app4ComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});