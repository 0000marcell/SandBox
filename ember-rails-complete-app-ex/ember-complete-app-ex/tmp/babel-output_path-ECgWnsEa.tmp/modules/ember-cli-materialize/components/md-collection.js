import Ember from 'ember';
import layout from '../templates/components/md-collection';

var Component = Ember.Component;
var bool = Ember.computed.bool;

export default Component.extend({
  layout: layout,
  classNames: ['collection'],
  classNameBindings: ['_hasHeader:with-header'],
  headerComponentName: 'md-default-collection-header',
  header: null,
  _hasHeader: bool('header')
});