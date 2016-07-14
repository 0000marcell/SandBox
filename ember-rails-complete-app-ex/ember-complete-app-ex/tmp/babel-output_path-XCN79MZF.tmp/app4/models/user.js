define('app4/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
   var __cov_pLMDjU7n9NtkpHmmsXRgpg = Function('return this')();
   if (!__cov_pLMDjU7n9NtkpHmmsXRgpg.__coverage__) {
      __cov_pLMDjU7n9NtkpHmmsXRgpg.__coverage__ = {};
   }
   __cov_pLMDjU7n9NtkpHmmsXRgpg = __cov_pLMDjU7n9NtkpHmmsXRgpg.__coverage__;
   if (!__cov_pLMDjU7n9NtkpHmmsXRgpg['app/models/user.js']) {
      __cov_pLMDjU7n9NtkpHmmsXRgpg['app/models/user.js'] = { "path": "app/models/user.js", "s": {}, "b": {}, "f": {}, "fnMap": {}, "statementMap": {}, "branchMap": {}, "code": ["import DS from 'ember-data';", "", "export default DS.Model.extend({", "\ttodos:\t\t\t\t\t\t\t   DS.hasMany('todo'),", "\ttasks:\t\t\t\t\t\t\t   DS.hasMany('task'),", "\temail:\t\t\t\t\t\t\t\t DS.attr('string'),", "\tname:\t\t\t\t\t\t\t\t\t DS.attr('string'),", "\tusername:\t\t\t\t\t\t\t DS.attr('string'),", "\tpassword:\t\t\t\t\t\t\t DS.attr('string')", "});", ""] };
   }
   __cov_pLMDjU7n9NtkpHmmsXRgpg = __cov_pLMDjU7n9NtkpHmmsXRgpg['app/models/user.js'];
   exports['default'] = _emberData['default'].Model.extend({ todos: _emberData['default'].hasMany('todo'), tasks: _emberData['default'].hasMany('task'), email: _emberData['default'].attr('string'), name: _emberData['default'].attr('string'), username: _emberData['default'].attr('string'), password: _emberData['default'].attr('string') });
});