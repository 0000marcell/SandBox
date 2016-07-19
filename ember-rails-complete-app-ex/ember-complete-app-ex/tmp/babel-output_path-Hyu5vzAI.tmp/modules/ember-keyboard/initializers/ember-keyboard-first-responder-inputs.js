export { initialize };
import Ember from 'ember';
import { EKMixin, EKFirstResponderOnFocusMixin } from 'ember-keyboard';

var TextArea = Ember.TextArea;
var TextField = Ember.TextField;

function initialize() {
  TextField.reopen(EKMixin, EKFirstResponderOnFocusMixin);
  TextArea.reopen(EKMixin, EKFirstResponderOnFocusMixin);
}

export default {
  name: 'ember-keyboard-first-responder-inputs',
  initialize: initialize
};