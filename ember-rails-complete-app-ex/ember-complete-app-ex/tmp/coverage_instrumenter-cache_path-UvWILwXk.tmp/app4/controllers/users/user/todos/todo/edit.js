
var __cov_xQhtlcB9Djb3mWCGOc9qDw = (Function('return this'))();
if (!__cov_xQhtlcB9Djb3mWCGOc9qDw.__coverage__) { __cov_xQhtlcB9Djb3mWCGOc9qDw.__coverage__ = {}; }
__cov_xQhtlcB9Djb3mWCGOc9qDw = __cov_xQhtlcB9Djb3mWCGOc9qDw.__coverage__;
if (!(__cov_xQhtlcB9Djb3mWCGOc9qDw['app/controllers/users/user/todos/todo/edit.js'])) {
   __cov_xQhtlcB9Djb3mWCGOc9qDw['app/controllers/users/user/todos/todo/edit.js'] = {"path":"app/controllers/users/user/todos/todo/edit.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":8}}}},"statementMap":{"1":{"start":{"line":6,"column":3},"end":{"line":10,"column":6}},"2":{"start":{"line":7,"column":3},"end":{"line":7,"column":46}},"3":{"start":{"line":9,"column":4},"end":{"line":9,"column":49}}},"branchMap":{},"code":["import Ember from 'ember';","","export default Ember.Controller.extend({","\tactions: {","\t\tedit(){","\t\t\tthis.get('model').save().then(() => {","\t\t\tthis.transitionToRoute('users.user.todos');\t","\t\t\t}).catch((error) => {","\t\t\t\tconsole.log('error while saving todo'+error);","\t\t\t});","\t\t}","\t}","});",""]};
}
__cov_xQhtlcB9Djb3mWCGOc9qDw = __cov_xQhtlcB9Djb3mWCGOc9qDw['app/controllers/users/user/todos/todo/edit.js'];
import Ember from'ember';export default Ember.Controller.extend({actions:{edit(){__cov_xQhtlcB9Djb3mWCGOc9qDw.f['1']++;__cov_xQhtlcB9Djb3mWCGOc9qDw.s['1']++;this.get('model').save().then(()=>{__cov_xQhtlcB9Djb3mWCGOc9qDw.s['2']++;this.transitionToRoute('users.user.todos');}).catch(error=>{__cov_xQhtlcB9Djb3mWCGOc9qDw.s['3']++;console.log('error while saving todo'+error);});}}});
