define('app4/components/pag-table', ['exports', 'ember'], function (exports, _ember) {
   var __cov_L4Rkmbe_Z3uui_ov8qvwwA = Function('return this')();
   if (!__cov_L4Rkmbe_Z3uui_ov8qvwwA.__coverage__) {
      __cov_L4Rkmbe_Z3uui_ov8qvwwA.__coverage__ = {};
   }
   __cov_L4Rkmbe_Z3uui_ov8qvwwA = __cov_L4Rkmbe_Z3uui_ov8qvwwA.__coverage__;
   if (!__cov_L4Rkmbe_Z3uui_ov8qvwwA['app/components/pag-table.js']) {
      __cov_L4Rkmbe_Z3uui_ov8qvwwA['app/components/pag-table.js'] = { "path": "app/components/pag-table.js", "s": { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 }, "b": {}, "f": { "1": 0, "2": 0, "3": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 8, "loc": { "start": { "line": 8, "column": 8 }, "end": { "line": 8, "column": 14 } } }, "2": { "name": "(anonymous_2)", "line": 12, "loc": { "start": { "line": 12, "column": 7 }, "end": { "line": 12, "column": 9 } } }, "3": { "name": "(anonymous_3)", "line": 16, "loc": { "start": { "line": 16, "column": 12 }, "end": { "line": 16, "column": 14 } } } }, "statementMap": { "1": { "start": { "line": 9, "column": 3 }, "end": { "line": 9, "column": 38 } }, "2": { "start": { "line": 10, "column": 3 }, "end": { "line": 10, "column": 20 } }, "3": { "start": { "line": 13, "column": 3 }, "end": { "line": 13, "column": 38 } }, "4": { "start": { "line": 14, "column": 3 }, "end": { "line": 14, "column": 39 } }, "5": { "start": { "line": 17, "column": 3 }, "end": { "line": 17, "column": 38 } } }, "branchMap": {}, "code": ["import Ember from 'ember';", "", "export default Ember.Component.extend({", "\tloadingModel: false,", "\tmodalIsOpen: false,", "\titem: null,", "\tactions: {", "\t\tdelete(item){", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t\tthis.item = item;\t", "\t\t},", "\t\tagree(){", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t\tthis.get('deleteAction')(this.item);", "\t\t},", "\t\tcloseModal(){", "\t\t\tthis.toggleProperty('modalIsOpen');", "\t\t}", "\t}", "});", ""] };
   }
   __cov_L4Rkmbe_Z3uui_ov8qvwwA = __cov_L4Rkmbe_Z3uui_ov8qvwwA['app/components/pag-table.js'];
   exports['default'] = _ember['default'].Component.extend({ loadingModel: false, modalIsOpen: false, item: null, actions: { 'delete': function _delete(item) {
            __cov_L4Rkmbe_Z3uui_ov8qvwwA.f['1']++;__cov_L4Rkmbe_Z3uui_ov8qvwwA.s['1']++;this.toggleProperty('modalIsOpen');__cov_L4Rkmbe_Z3uui_ov8qvwwA.s['2']++;this.item = item;
         }, agree: function agree() {
            __cov_L4Rkmbe_Z3uui_ov8qvwwA.f['2']++;__cov_L4Rkmbe_Z3uui_ov8qvwwA.s['3']++;this.toggleProperty('modalIsOpen');__cov_L4Rkmbe_Z3uui_ov8qvwwA.s['4']++;this.get('deleteAction')(this.item);
         }, closeModal: function closeModal() {
            __cov_L4Rkmbe_Z3uui_ov8qvwwA.f['3']++;__cov_L4Rkmbe_Z3uui_ov8qvwwA.s['5']++;this.toggleProperty('modalIsOpen');
         } } });
});