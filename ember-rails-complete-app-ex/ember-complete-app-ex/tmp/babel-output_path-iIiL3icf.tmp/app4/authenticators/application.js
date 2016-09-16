define('app4/authenticators/application', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _emberSimpleAuthAuthorizersOauth2Bearer) {
   var __cov_KmdfYlKvgoRiI8c$vTxAHg = Function('return this')();
   if (!__cov_KmdfYlKvgoRiI8c$vTxAHg.__coverage__) {
      __cov_KmdfYlKvgoRiI8c$vTxAHg.__coverage__ = {};
   }
   __cov_KmdfYlKvgoRiI8c$vTxAHg = __cov_KmdfYlKvgoRiI8c$vTxAHg.__coverage__;
   if (!__cov_KmdfYlKvgoRiI8c$vTxAHg['app/authenticators/application.js']) {
      __cov_KmdfYlKvgoRiI8c$vTxAHg['app/authenticators/application.js'] = { "path": "app/authenticators/application.js", "s": {}, "b": {}, "f": {}, "fnMap": {}, "statementMap": {}, "branchMap": {}, "code": ["import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';", "", "export default OAuth2Bearer.extend();", ""] };
   }
   __cov_KmdfYlKvgoRiI8c$vTxAHg = __cov_KmdfYlKvgoRiI8c$vTxAHg['app/authenticators/application.js'];
   exports['default'] = _emberSimpleAuthAuthorizersOauth2Bearer['default'].extend();
});