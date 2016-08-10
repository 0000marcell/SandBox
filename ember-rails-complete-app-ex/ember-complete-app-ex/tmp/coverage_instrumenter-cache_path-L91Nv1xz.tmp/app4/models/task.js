
var __cov_mmaTt2G23HVmnOauDEUBRg = (Function('return this'))();
if (!__cov_mmaTt2G23HVmnOauDEUBRg.__coverage__) { __cov_mmaTt2G23HVmnOauDEUBRg.__coverage__ = {}; }
__cov_mmaTt2G23HVmnOauDEUBRg = __cov_mmaTt2G23HVmnOauDEUBRg.__coverage__;
if (!(__cov_mmaTt2G23HVmnOauDEUBRg['app/models/task.js'])) {
   __cov_mmaTt2G23HVmnOauDEUBRg['app/models/task.js'] = {"path":"app/models/task.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["import Model from 'ember-data/model';","import attr from 'ember-data/attr';","import { belongsTo } from 'ember-data/relationships';","// import { hasMany } from 'ember-data/relationships';","","export default Model.extend({","  title: attr('string'),","  user: belongsTo('user')","});",""]};
}
__cov_mmaTt2G23HVmnOauDEUBRg = __cov_mmaTt2G23HVmnOauDEUBRg['app/models/task.js'];
import Model from'ember-data/model';import attr from'ember-data/attr';import{belongsTo}from'ember-data/relationships';export default Model.extend({title:attr('string'),user:belongsTo('user')});
