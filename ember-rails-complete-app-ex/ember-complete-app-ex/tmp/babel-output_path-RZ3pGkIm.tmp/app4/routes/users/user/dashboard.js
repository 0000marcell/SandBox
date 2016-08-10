define('app4/routes/users/user/dashboard', ['exports', 'ember'], function (exports, _ember) {
   var __cov_upT9NI64EdJKlD1uZDBaaQ = Function('return this')();
   if (!__cov_upT9NI64EdJKlD1uZDBaaQ.__coverage__) {
      __cov_upT9NI64EdJKlD1uZDBaaQ.__coverage__ = {};
   }
   __cov_upT9NI64EdJKlD1uZDBaaQ = __cov_upT9NI64EdJKlD1uZDBaaQ.__coverage__;
   if (!__cov_upT9NI64EdJKlD1uZDBaaQ['app/routes/users/user/dashboard.js']) {
      __cov_upT9NI64EdJKlD1uZDBaaQ['app/routes/users/user/dashboard.js'] = { "path": "app/routes/users/user/dashboard.js", "s": { "1": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 4, "loc": { "start": { "line": 4, "column": 6 }, "end": { "line": 4, "column": 14 } } } }, "statementMap": { "1": { "start": { "line": 5, "column": 2 }, "end": { "line": 14, "column": 5 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Route.extend({", "\tmodel(params){", "\t\treturn Ember.RSVP.hash({", "\t\t\ttodos: this.store.query('todo', { page: {", "\t\t\t\tnumber: params.pageTodo,", "\t\t\t\tsize: params.size", "\t\t\t}}), ", "\t\t\ttasks: this.store.query('task', { page: {", "\t\t\t\tnumber: params.pageTask,", "\t\t\t\tsize: params.size", "\t\t\t}}) ", "\t\t});", "\t},", "\tqueryParams: {", "\t\tpageTodo: {", "\t\t\trefreshModel: true", "\t\t},", "\t\tsize: {", "\t\t\trefreshModel: true", "\t\t},", "\t\tpageTask: {", "\t\t\trefreshModel: true\t\t\t\t\t\t\t\t ", "\t\t}", "\t}", "});", ""] };
   }
   __cov_upT9NI64EdJKlD1uZDBaaQ = __cov_upT9NI64EdJKlD1uZDBaaQ['app/routes/users/user/dashboard.js'];
   exports['default'] = _ember['default'].Route.extend({ model: function model(params) {
         __cov_upT9NI64EdJKlD1uZDBaaQ.f['1']++;__cov_upT9NI64EdJKlD1uZDBaaQ.s['1']++;return _ember['default'].RSVP.hash({ todos: this.store.query('todo', { page: { number: params.pageTodo, size: params.size } }), tasks: this.store.query('task', { page: { number: params.pageTask, size: params.size } }) });
      }, queryParams: { pageTodo: { refreshModel: true }, size: { refreshModel: true }, pageTask: { refreshModel: true } } });
});