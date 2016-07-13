import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal';
import { EKMixin, keyUp } from 'ember-keyboard';

var Component = Ember.Component;
var computed = Ember.computed;
var oneWay = Ember.computed.oneWay;

export default Component.extend(EKMixin, UsesSettings, {
  layout: layout,

  attributeBindings: ['style:inlineStyle'],
  concatenatedProperties: ['modalClassNames'],

  inlineStyle: computed(function () {
    return new Ember.Handlebars.SafeString('z-index: 1000;');
  }),

  isFooterFixed: oneWay('_mdSettings.modalIsFooterFixed'),

  modalClassNames: ['modal', 'show'],
  _modalClassString: computed('modalClassNames.[]', 'isFooterFixed', function () {
    var names = this.get('modalClassNames');
    if (this.get('isFooterFixed')) {
      names.push('modal-fixed-footer');
    }
    return names.join(' ');
  }),

  init: function init() {
    this._super.apply(this, arguments);
    this.set('keyboardActivated', true);
  },

  _onEsc: Ember.on(keyUp('Escape'), function () {
    this.cancel();
  }),

  cancel: function cancel() {
    this.sendAction('close');
  },

  actions: {
    closeModal: function closeModal() {
      this.sendAction('close');
    }
  }

});