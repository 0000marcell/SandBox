define('app4/adapters/application', ['exports', 'ember-data/adapters/json-api', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberDataAdaptersJsonApi, _emberSimpleAuthMixinsDataAdapterMixin) {
   var __cov_qYlmtFBdLKVTb_qV_FT4YQ = Function('return this')();
   if (!__cov_qYlmtFBdLKVTb_qV_FT4YQ.__coverage__) {
      __cov_qYlmtFBdLKVTb_qV_FT4YQ.__coverage__ = {};
   }
   __cov_qYlmtFBdLKVTb_qV_FT4YQ = __cov_qYlmtFBdLKVTb_qV_FT4YQ.__coverage__;
   if (!__cov_qYlmtFBdLKVTb_qV_FT4YQ['app/adapters/application.js']) {
      __cov_qYlmtFBdLKVTb_qV_FT4YQ['app/adapters/application.js'] = { "path": "app/adapters/application.js", "s": { "1": 0, "2": 0, "3": 0 }, "b": {}, "f": { "1": 0 }, "fnMap": { "1": { "name": "(anonymous_1)", "line": 8, "loc": { "start": { "line": 8, "column": 21 }, "end": { "line": 8, "column": 44 } } } }, "statementMap": { "1": { "start": { "line": 9, "column": 2 }, "end": { "line": 9, "column": 42 } }, "2": { "start": { "line": 10, "column": 2 }, "end": { "line": 10, "column": 41 } }, "3": { "start": { "line": 11, "column": 2 }, "end": { "line": 11, "column": 14 } } }, "branchMap": {}, "code": ["import JSONAPIAdapter from 'ember-data/adapters/json-api';", "import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';", "", "export default JSONAPIAdapter.extend(DataAdapterMixin, {", "\tnamespace: 'api/v1',", "\tauthorizer: 'authorizer:application',", "\tcoalesceFindRequests: true,", "\tparseErrorResponse: function(responseText) {", "\t\tvar response = JSON.parse(responseText);", "\t\tvar json = {errors: [response.errors]};", "\t\treturn json;", "\t}", "});", ""] };
   }
   __cov_qYlmtFBdLKVTb_qV_FT4YQ = __cov_qYlmtFBdLKVTb_qV_FT4YQ['app/adapters/application.js'];
   exports['default'] = _emberDataAdaptersJsonApi['default'].extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], { namespace: 'api/v1', authorizer: 'authorizer:application', coalesceFindRequests: true, parseErrorResponse: function parseErrorResponse(responseText) {
         __cov_qYlmtFBdLKVTb_qV_FT4YQ.f['1']++;__cov_qYlmtFBdLKVTb_qV_FT4YQ.s['1']++;var response = JSON.parse(responseText);__cov_qYlmtFBdLKVTb_qV_FT4YQ.s['2']++;var json = { errors: [response.errors] };__cov_qYlmtFBdLKVTb_qV_FT4YQ.s['3']++;return json;
      } });
});