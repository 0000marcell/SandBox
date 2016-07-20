
var __cov_pLMDjU7n9NtkpHmmsXRgpg = (Function('return this'))();
if (!__cov_pLMDjU7n9NtkpHmmsXRgpg.__coverage__) { __cov_pLMDjU7n9NtkpHmmsXRgpg.__coverage__ = {}; }
__cov_pLMDjU7n9NtkpHmmsXRgpg = __cov_pLMDjU7n9NtkpHmmsXRgpg.__coverage__;
if (!(__cov_pLMDjU7n9NtkpHmmsXRgpg['app/models/user.js'])) {
   __cov_pLMDjU7n9NtkpHmmsXRgpg['app/models/user.js'] = {"path":"app/models/user.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["import DS from 'ember-data';","","export default DS.Model.extend({","\ttodos:\t\t\t\t\t\t\t   DS.hasMany('todo'),","\ttasks:\t\t\t\t\t\t\t   DS.hasMany('task'),","\temail:\t\t\t\t\t\t\t\t DS.attr('string'),","\tname:\t\t\t\t\t\t\t\t\t DS.attr('string'),","\tusername:\t\t\t\t\t\t\t DS.attr('string'),","\tpassword:\t\t\t\t\t\t\t DS.attr('string')","});",""]};
}
__cov_pLMDjU7n9NtkpHmmsXRgpg = __cov_pLMDjU7n9NtkpHmmsXRgpg['app/models/user.js'];
import DS from'ember-data';export default DS.Model.extend({todos:DS.hasMany('todo'),tasks:DS.hasMany('task'),email:DS.attr('string'),name:DS.attr('string'),username:DS.attr('string'),password:DS.attr('string')});
