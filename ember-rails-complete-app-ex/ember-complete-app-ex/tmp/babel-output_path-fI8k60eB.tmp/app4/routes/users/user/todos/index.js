define('app4/routes/users/user/todos/index', ['exports', 'ember'], function (exports, _ember) {
   var __cov_1L4Cxa0_3HKAqy8_FhVy7A = Function('return this')();
   if (!__cov_1L4Cxa0_3HKAqy8_FhVy7A.__coverage__) {
      __cov_1L4Cxa0_3HKAqy8_FhVy7A.__coverage__ = {};
   }
   __cov_1L4Cxa0_3HKAqy8_FhVy7A = __cov_1L4Cxa0_3HKAqy8_FhVy7A.__coverage__;
   if (!__cov_1L4Cxa0_3HKAqy8_FhVy7A['app/routes/users/user/todos/index.js']) {
      __cov_1L4Cxa0_3HKAqy8_FhVy7A['app/routes/users/user/todos/index.js'] = { "path": "app/routes/users/user/todos/index.js", "s": { "1": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 4, "loc": { "start": { "line": 4, "column": 6 }, "end": { "line": 4, "column": 14 } } } }, "statementMap": { "1": { "start": { "line": 5, "column": 2 }, "end": { "line": 10, "column": 5 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Route.extend({", "\tmodel(params){", "\t\treturn this.store.query('todo', { page: {", "\t\t\t\tnumber: params.page,", "\t\t\t\tsize:   params.size", "\t\t\t},", "\t\t\tsearch: params.search", "\t\t});", "\t},\t", "\tqueryParams: {", "\t\tpage: {", "\t\t\trefreshModel: true", "\t\t},", "\t\tsize: {", "\t\t\trefreshModel: true", "\t\t},", "\t\tsearch: {", "\t\t\trefreshModel: true", "\t  }", "\t}", "});", ""] };
   }
   __cov_1L4Cxa0_3HKAqy8_FhVy7A = __cov_1L4Cxa0_3HKAqy8_FhVy7A['app/routes/users/user/todos/index.js'];
   exports['default'] = _ember['default'].Route.extend({ model: function model(params) {
         __cov_1L4Cxa0_3HKAqy8_FhVy7A.f['1']++;__cov_1L4Cxa0_3HKAqy8_FhVy7A.s['1']++;return this.store.query('todo', { page: { number: params.page, size: params.size }, search: params.search });
      }, queryParams: { page: { refreshModel: true }, size: { refreshModel: true }, search: { refreshModel: true } } });
});