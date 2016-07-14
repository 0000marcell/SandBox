define('app4/components/materialize-switches', ['exports', 'ember', 'app4/components/md-switches'], function (exports, _ember, _app4ComponentsMdSwitches) {
  exports['default'] = _app4ComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});