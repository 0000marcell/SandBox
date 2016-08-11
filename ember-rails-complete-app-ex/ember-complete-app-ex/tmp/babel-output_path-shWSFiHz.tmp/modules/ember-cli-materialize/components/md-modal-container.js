import Ember from 'ember';
import UsesSettings from '../mixins/uses-settings';
import layout from '../templates/components/md-modal-container';

var Component = Ember.Component;
var oneWay = Ember.computed.oneWay;

export default Component.extend(UsesSettings, {
  layout: layout,
  modalContainerId: oneWay('_mdSettings.modalContainerId')
});