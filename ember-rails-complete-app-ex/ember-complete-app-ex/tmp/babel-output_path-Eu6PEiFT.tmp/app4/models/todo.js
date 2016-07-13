define('app4/models/todo', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  // import { hasMany } from 'ember-data/relationships';

  exports['default'] = _emberDataModel['default'].extend({
    title: (0, _emberDataAttr['default'])('string'),
    user: (0, _emberDataRelationships.belongsTo)('user')
  });
});