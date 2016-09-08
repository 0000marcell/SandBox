define('app4/controllers/users/user/todos/index', ['exports', 'ember'], function (exports, _ember) {
   var __cov_47nOOAnQ36OHjmzBzbjeGg = Function('return this')();
   if (!__cov_47nOOAnQ36OHjmzBzbjeGg.__coverage__) {
      __cov_47nOOAnQ36OHjmzBzbjeGg.__coverage__ = {};
   }
   __cov_47nOOAnQ36OHjmzBzbjeGg = __cov_47nOOAnQ36OHjmzBzbjeGg.__coverage__;
   if (!__cov_47nOOAnQ36OHjmzBzbjeGg['app/controllers/users/user/todos/index.js']) {
      __cov_47nOOAnQ36OHjmzBzbjeGg['app/controllers/users/user/todos/index.js'] = { "path": "app/controllers/users/user/todos/index.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0 }, "b": { "1": [0, 0] }, "f": { "1": 0, "2": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 8, "loc": { "start": { "line": 8, "column": 48 }, "end": { "line": 8, "column": 58 } } }, "2": { "name": "(anonymous_2)", "line": 14, "loc": { "start": { "line": 14, "column": 8 }, "end": { "line": 14, "column": 14 } } } }, "statementMap": { "1": { "start": { "line": 9, "column": 2 }, "end": { "line": 10, "column": 48 } }, "2": { "start": { "line": 11, "column": 2 }, "end": { "line": 11, "column": 15 } }, "3": { "start": { "line": 15, "column": 3 }, "end": { "line": 15, "column": 38 } }, "4": { "start": { "line": 16, "column": 3 }, "end": { "line": 16, "column": 28 } } }, "branchMap": { "1": { "line": 9, "type": "binary-expr", "locations": [{ "start": { "line": 9, "column": 14 }, "end": { "line": 9, "column": 59 } }, { "start": { "line": 10, "column": 2 }, "end": { "line": 10, "column": 47 } }] } }, "code": ["import Ember from 'ember';", "", "export default Ember.Controller.extend({", "\tqueryParams: ['page', 'size', 'search'],", "\tpage: 1,", "\tsize: 5,", "\tsearch: '',", "\ttotal: Ember.computed('model.meta.pagination', function(){", "\t\tlet total = this.get('model.meta.pagination.last.number') || ", "\t\tthis.get('model.meta.pagination.self.number');", "\t\treturn total;", "\t}),", "\tactions: {", "\t\tdelete(todo){", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t\tthis.itemToDelete = todo;", "\t\t}", "\t}", "});", ""] };
   }
   __cov_47nOOAnQ36OHjmzBzbjeGg = __cov_47nOOAnQ36OHjmzBzbjeGg['app/controllers/users/user/todos/index.js'];
   exports['default'] = _ember['default'].Controller.extend({ queryParams: ['page', 'size', 'search'], page: 1, size: 5, search: '', total: _ember['default'].computed('model.meta.pagination', function () {
         __cov_47nOOAnQ36OHjmzBzbjeGg.f['1']++;__cov_47nOOAnQ36OHjmzBzbjeGg.s['1']++;var total = (__cov_47nOOAnQ36OHjmzBzbjeGg.b['1'][0]++, this.get('model.meta.pagination.last.number')) || (__cov_47nOOAnQ36OHjmzBzbjeGg.b['1'][1]++, this.get('model.meta.pagination.self.number'));__cov_47nOOAnQ36OHjmzBzbjeGg.s['2']++;return total;
      }), actions: { 'delete': function _delete(todo) {
            __cov_47nOOAnQ36OHjmzBzbjeGg.f['2']++;__cov_47nOOAnQ36OHjmzBzbjeGg.s['3']++;this.toggleProperty('modalIsOpen');__cov_47nOOAnQ36OHjmzBzbjeGg.s['4']++;this.itemToDelete = todo;
         } } });
});