'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  setup: function setup() {
    var db = new _db2.default();
    this.schema = new _schema2.default(db);
    this.schema.registerModels({
      wordSmith: _model2.default.extend({
        blogPosts: _emberCliMirage2.default.hasMany()
      }),
      blogPost: _model2.default.extend({
        wordSmith: _emberCliMirage2.default.belongsTo(),
        fineComments: _emberCliMirage2.default.hasMany()
      }),
      fineComment: _model2.default.extend({
        blogPost: _emberCliMirage2.default.belongsTo()
      }),
      greatPhoto: _model2.default,

      foo: _model2.default.extend({
        bar: _emberCliMirage2.default.belongsTo()
      }),
      bar: _model2.default.extend({
        baz: _emberCliMirage2.default.belongsTo()
      }),
      baz: _model2.default.extend({
        quuxes: _emberCliMirage2.default.hasMany()
      }),
      quux: _model2.default.extend({
        zomgs: _emberCliMirage2.default.hasMany()
      }),
      zomg: _model2.default.extend({
        lol: _emberCliMirage2.default.belongsTo()
      }),
      lol: _model2.default
    });

    return this.schema;
  }
};