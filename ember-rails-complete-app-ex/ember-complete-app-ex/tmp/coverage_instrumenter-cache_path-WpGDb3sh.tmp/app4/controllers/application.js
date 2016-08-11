
var __cov_qaGe43uoYZvGjbmStjfdBQ = (Function('return this'))();
if (!__cov_qaGe43uoYZvGjbmStjfdBQ.__coverage__) { __cov_qaGe43uoYZvGjbmStjfdBQ.__coverage__ = {}; }
__cov_qaGe43uoYZvGjbmStjfdBQ = __cov_qaGe43uoYZvGjbmStjfdBQ.__coverage__;
if (!(__cov_qaGe43uoYZvGjbmStjfdBQ['app/controllers/application.js'])) {
   __cov_qaGe43uoYZvGjbmStjfdBQ['app/controllers/application.js'] = {"path":"app/controllers/application.js","s":{"1":0,"2":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":10}}}},"statementMap":{"1":{"start":{"line":7,"column":3},"end":{"line":7,"column":40}},"2":{"start":{"line":8,"column":3},"end":{"line":8,"column":35}}},"branchMap":{},"code":["import Ember from 'ember';","","export default Ember.Controller.extend({","\tauthManager: Ember.inject.service('session'),","\tactions: {","\t\tlogout(){","\t\t\tthis.get('authManager').invalidate();","\t\t\tthis.transitionToRoute('login');","\t\t}","\t}","});",""]};
}
__cov_qaGe43uoYZvGjbmStjfdBQ = __cov_qaGe43uoYZvGjbmStjfdBQ['app/controllers/application.js'];
import Ember from'ember';export default Ember.Controller.extend({authManager:Ember.inject.service('session'),actions:{logout(){__cov_qaGe43uoYZvGjbmStjfdBQ.f['1']++;__cov_qaGe43uoYZvGjbmStjfdBQ.s['1']++;this.get('authManager').invalidate();__cov_qaGe43uoYZvGjbmStjfdBQ.s['2']++;this.transitionToRoute('login');}}});
