
var __cov_fbEbUVqKwyDbVW3tkySIeA = (Function('return this'))();
if (!__cov_fbEbUVqKwyDbVW3tkySIeA.__coverage__) { __cov_fbEbUVqKwyDbVW3tkySIeA.__coverage__ = {}; }
__cov_fbEbUVqKwyDbVW3tkySIeA = __cov_fbEbUVqKwyDbVW3tkySIeA.__coverage__;
if (!(__cov_fbEbUVqKwyDbVW3tkySIeA['app/routes/users/user/todos/todo.js'])) {
   __cov_fbEbUVqKwyDbVW3tkySIeA['app/routes/users/user/todos/todo.js'] = {"path":"app/routes/users/user/todos/todo.js","s":{"1":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":4,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":13}}}},"statementMap":{"1":{"start":{"line":5,"column":2},"end":{"line":7,"column":4}}},"branchMap":{},"code":["import Ember from 'ember';","","export default Ember.Route.extend({","\tmodel(param){","\t\treturn this.store.find('todo', ","\t\t\tparam.id","\t\t);","\t},","\t/*","\tserialize(model){","\t\tif(!model.get('title'))","\t\t\treturn;","\t\tlet title = model.get('title');","\t\treturn {","\t\t\ttodo_url: Ember.String.dasherize(title.toLowerCase())","\t\t}","\t}","\t*/","});",""]};
}
__cov_fbEbUVqKwyDbVW3tkySIeA = __cov_fbEbUVqKwyDbVW3tkySIeA['app/routes/users/user/todos/todo.js'];
import Ember from'ember';export default Ember.Route.extend({model(param){__cov_fbEbUVqKwyDbVW3tkySIeA.f['1']++;__cov_fbEbUVqKwyDbVW3tkySIeA.s['1']++;return this.store.find('todo',param.id);}});
