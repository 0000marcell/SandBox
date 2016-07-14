define('app4/controllers/users/user/todos/index', ['exports', 'ember'], function (exports, _ember) {
   var __cov_47nOOAnQ36OHjmzBzbjeGg = Function('return this')();
   if (!__cov_47nOOAnQ36OHjmzBzbjeGg.__coverage__) {
      __cov_47nOOAnQ36OHjmzBzbjeGg.__coverage__ = {};
   }
   __cov_47nOOAnQ36OHjmzBzbjeGg = __cov_47nOOAnQ36OHjmzBzbjeGg.__coverage__;
   if (!__cov_47nOOAnQ36OHjmzBzbjeGg['app/controllers/users/user/todos/index.js']) {
      __cov_47nOOAnQ36OHjmzBzbjeGg['app/controllers/users/user/todos/index.js'] = { "path": "app/controllers/users/user/todos/index.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }, "b": {}, "f": { "1": 0, "2": 0, "3": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 8, "loc": { "start": { "line": 8, "column": 8 }, "end": { "line": 8, "column": 14 } } }, "2": { "name": "(anonymous_2)", "line": 12, "loc": { "start": { "line": 12, "column": 7 }, "end": { "line": 12, "column": 9 } } }, "3": { "name": "(anonymous_3)", "line": 16, "loc": { "start": { "line": 16, "column": 12 }, "end": { "line": 16, "column": 14 } } } }, "statementMap": { "1": { "start": { "line": 9, "column": 3 }, "end": { "line": 9, "column": 38 } }, "2": { "start": { "line": 10, "column": 3 }, "end": { "line": 10, "column": 28 } }, "3": { "start": { "line": 13, "column": 3 }, "end": { "line": 13, "column": 37 } }, "4": { "start": { "line": 14, "column": 3 }, "end": { "line": 14, "column": 38 } }, "5": { "start": { "line": 17, "column": 3 }, "end": { "line": 17, "column": 38 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Controller.extend({", "\tloadingModel: false,", "\tmodalIsOpen: false,\t", "\titemToDelete: null,", "\tactions: {", "\t\tdelete(todo){", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t\tthis.itemToDelete = todo;", "\t\t},", "\t\tagree(){", "\t\t\tthis.itemToDelete.destroyRecord();\t", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t},", "\t\tcloseModal(){", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t}", "\t}", "});", ""] };
   }
   __cov_47nOOAnQ36OHjmzBzbjeGg = __cov_47nOOAnQ36OHjmzBzbjeGg['app/controllers/users/user/todos/index.js'];
   exports['default'] = _ember['default'].Controller.extend({ loadingModel: false, modalIsOpen: false, itemToDelete: null, actions: { 'delete': function _delete(todo) {
            __cov_47nOOAnQ36OHjmzBzbjeGg.f['1']++;__cov_47nOOAnQ36OHjmzBzbjeGg.s['1']++;this.toggleProperty('modalIsOpen');__cov_47nOOAnQ36OHjmzBzbjeGg.s['2']++;this.itemToDelete = todo;
         }, agree: function agree() {
            __cov_47nOOAnQ36OHjmzBzbjeGg.f['2']++;__cov_47nOOAnQ36OHjmzBzbjeGg.s['3']++;this.itemToDelete.destroyRecord();__cov_47nOOAnQ36OHjmzBzbjeGg.s['4']++;this.toggleProperty('modalIsOpen');
         }, closeModal: function closeModal() {
            __cov_47nOOAnQ36OHjmzBzbjeGg.f['3']++;__cov_47nOOAnQ36OHjmzBzbjeGg.s['5']++;this.toggleProperty('modalIsOpen');
         } } });
});