
var __cov_ru0Qf4HQZHv06HZ42pUU6A = (Function('return this'))();
if (!__cov_ru0Qf4HQZHv06HZ42pUU6A.__coverage__) { __cov_ru0Qf4HQZHv06HZ42pUU6A.__coverage__ = {}; }
__cov_ru0Qf4HQZHv06HZ42pUU6A = __cov_ru0Qf4HQZHv06HZ42pUU6A.__coverage__;
if (!(__cov_ru0Qf4HQZHv06HZ42pUU6A['app/components/session-component.js'])) {
   __cov_ru0Qf4HQZHv06HZ42pUU6A['app/components/session-component.js'] = {"path":"app/components/session-component.js","s":{"1":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":10}}}},"statementMap":{"1":{"start":{"line":7,"column":3},"end":{"line":7,"column":26}}},"branchMap":{},"code":["import Ember from 'ember';","","export default Ember.Component.extend({","\tauthManager: Ember.inject.service('session'),","\tactions: {","\t\tlogOut(){","\t\t\tthis.get('onLogout')();","\t\t}","\t}","});",""]};
}
__cov_ru0Qf4HQZHv06HZ42pUU6A = __cov_ru0Qf4HQZHv06HZ42pUU6A['app/components/session-component.js'];
import Ember from'ember';export default Ember.Component.extend({authManager:Ember.inject.service('session'),actions:{logOut(){__cov_ru0Qf4HQZHv06HZ42pUU6A.f['1']++;__cov_ru0Qf4HQZHv06HZ42pUU6A.s['1']++;this.get('onLogout')();}}});
