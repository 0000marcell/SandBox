import Ember from 'ember';

var getWithDefault = Ember.getWithDefault;
var set = Ember.set;
var oneWay = Ember.computed.oneWay;
var classify = Ember.String.classify;

var keys = Object.keys || Ember.keys;

export default Ember.Service.extend({
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