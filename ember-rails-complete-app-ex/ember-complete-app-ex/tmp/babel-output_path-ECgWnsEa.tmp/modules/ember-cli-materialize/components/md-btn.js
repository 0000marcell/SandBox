import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-btn';

var Component = Ember.Component;
var computed = Ember.computed;
var oneWay = Ember.computed.oneWay;
var typeOf = Ember.typeOf;
var scheduleOnce = Ember.run.scheduleOnce;

export default Component.extend(UsesSettings, {
  layout: layout,
  tagName: 'a',
  classNameBindings: ['btn:waves-effect', 'wavesClass', 'isDisabled:disabled:waves-effect', 'buttonClass'],
  attributeBindings: ['isDisabled:disabled'],
  wavesClass: 'waves-light',
  text: null,
  icon: null,
  iconPosition: oneWay('_mdSettings.buttonIconPosition'),
  buttonType: null,
  actionArg: null,
  isFlat: computed.equal('buttonType', 'flat'),
  isDisabled: false,

  didInsertElement: function didInsertElement() {
    this._super.apply(this, arguments);
    scheduleOnce('afterRender', this, this._setupWaves);
  },

  buttonClass: computed('buttonType', function () {
    var buttonType = this.get('buttonType');
    return buttonType ? 'btn-' + buttonType : 'btn';
  }),

  _setupWaves: function _setupWaves() {
    var Waves = window.Waves || {};
    if (typeOf(Waves.displayEffect) === 'function') {
      Waves.displayEffect();
    }
  },

  click: function click() {
    if (!this.get('disabled')) {
      this.sendAction('action', this.get('actionArg'));
    }
  }
});