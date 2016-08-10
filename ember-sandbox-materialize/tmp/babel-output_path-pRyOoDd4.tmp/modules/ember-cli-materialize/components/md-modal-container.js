import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal-container';

var Component = Ember.Component;

export default Component.extend(UsesSettings, {
  layout: layout,
  modalContainerId: null,

  init: function init() {
    this._super.apply(this, arguments);
    if (!this.get('modalContainerId')) {
      this.set('modalContainerId', this.get('_mdSettings.modalContainerId'));
    }
  }
});