define('app4/components/materialize-copyright', ['exports', 'ember', 'app4/components/md-copyright'], function (exports, _ember, _app4ComponentsMdCopyright) {
  exports['default'] = _app4ComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});