define('app4/services/session', ['exports', 'ember', 'ember-simple-auth/services/session'], function (exports, _ember, _emberSimpleAuthServicesSession) {
   var __cov_8e$vB8RREZ7R5ijDvltMPg = Function('return this')();
   if (!__cov_8e$vB8RREZ7R5ijDvltMPg.__coverage__) {
      __cov_8e$vB8RREZ7R5ijDvltMPg.__coverage__ = {};
   }
   __cov_8e$vB8RREZ7R5ijDvltMPg = __cov_8e$vB8RREZ7R5ijDvltMPg.__coverage__;
   if (!__cov_8e$vB8RREZ7R5ijDvltMPg['app/services/session.js']) {
      __cov_8e$vB8RREZ7R5ijDvltMPg['app/services/session.js'] = { "path": "app/services/session.js", "s": {}, "b": {}, "f": {}, "fnMap": {}, "statementMap": {}, "branchMap": {}, "code": ["import Ember from 'ember';", "import ESASession from \"ember-simple-auth/services/session\";", "", "export default ESASession.extend({", "\tstore: Ember.inject.service()", "});", ""] };
   }
   __cov_8e$vB8RREZ7R5ijDvltMPg = __cov_8e$vB8RREZ7R5ijDvltMPg['app/services/session.js'];
   exports['default'] = _emberSimpleAuthServicesSession['default'].extend({ store: _ember['default'].inject.service() });
});