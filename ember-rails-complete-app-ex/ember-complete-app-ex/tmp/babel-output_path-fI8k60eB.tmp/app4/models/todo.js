define('app4/models/todo', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
   var __cov_aal9j77$dvwy_86FPflcWQ = Function('return this')();
   if (!__cov_aal9j77$dvwy_86FPflcWQ.__coverage__) {
      __cov_aal9j77$dvwy_86FPflcWQ.__coverage__ = {};
   }
   __cov_aal9j77$dvwy_86FPflcWQ = __cov_aal9j77$dvwy_86FPflcWQ.__coverage__;
   if (!__cov_aal9j77$dvwy_86FPflcWQ['app/models/todo.js']) {
      __cov_aal9j77$dvwy_86FPflcWQ['app/models/todo.js'] = { "path": "app/models/todo.js", "s": {}, "b": {}, "f": {}, "fnMap": {}, "statementMap": {}, "branchMap": {}, "code": ["import Model from 'ember-data/model';", "import attr from 'ember-data/attr';", "import { belongsTo } from 'ember-data/relationships';", "", "export default Model.extend({", "  title: attr('string'),", "\tuser: belongsTo('user')", "});", ""] };
   }
   __cov_aal9j77$dvwy_86FPflcWQ = __cov_aal9j77$dvwy_86FPflcWQ['app/models/todo.js'];
   exports['default'] = _emberDataModel['default'].extend({ title: (0, _emberDataAttr['default'])('string'), user: (0, _emberDataRelationships.belongsTo)('user') });
});