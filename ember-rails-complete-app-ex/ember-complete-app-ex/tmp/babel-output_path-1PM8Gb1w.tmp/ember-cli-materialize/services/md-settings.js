define('ember-cli-materialize/services/md-settings', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var getWithDefault = _ember['default'].getWithDefault;
  var set = _ember['default'].set;
  var oneWay = _ember['default'].computed.oneWay;
  var classify = _ember['default'].String.classify;

  var keys = Object.keys || _ember['default'].keys;

  exports['default'] = _ember['default'].Service.extend({
    // Footer
    modalIsFooterFixed: oneWay('defaultModalIsFooterFixed'),
    // Button
    buttonIconPosition: oneWay('defaultButtonIconPosition'),
    // Loader
    loaderSize: oneWay('defaultLoaderSize'),
    loaderMode: oneWay('defaultLoaderMode'),
    // Modal
    modalContainerId: oneWay('defaultModalContainerId'),

    // Animation (Dropdown Button)
    dropdownInDuration: oneWay('defaultDropdownInDuration'),
    dropdownOutDuration: oneWay('defaultDropdownOutDuration'),

    init: function init() {
      this._super.apply(this, arguments);
      this._setDefaults();
    },

    _setDefaults: function _setDefaults() {
      var _this = this;

      var defaults = getWithDefault(this, 'materializeDefaults', {});
      keys(defaults).map(function (key) {
        var classifiedKey = classify(key);
        var defaultKey = 'default' + classifiedKey;
        return set(_this, defaultKey, defaults[key]);
      });
    }
  });
});