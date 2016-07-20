'use strict';

var _qunit = require('qunit');

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _emberCliMirage = require('ember-cli-mirage');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | ORM | Named associations test');

(0, _qunit.test)('schemas with a single hasMany have correct foreign keys', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    user: _model2.default.extend({
      projects: (0, _emberCliMirage.hasMany)()
    }),
    project: _model2.default
  });

  // Fks are set up correctly
  assert.deepEqual(schema._registry.user.foreignKeys, []);
  assert.deepEqual(schema._registry.project.foreignKeys, ['userId']);

  var user = schema.users.create();
  var project = user.createProject();

  assert.ok(user);
  assert.ok(project);
});

/*

What should the behavior be??

// test('schemas with a single hasMany with a different property name have correct foreign keys', function(assert) {
//   var schema = new Schema(new Db(), {
//     user: Model.extend({
//       specialProjects: hasMany('project'),
//     }),
//     project: Model
//   });
// });

*/

(0, _qunit.test)('schemas with a single belongsTo have correct foreign keys', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    user: _model2.default,
    project: _model2.default.extend({
      user: (0, _emberCliMirage.belongsTo)()
    })
  });

  // Fks are set up correctly
  assert.deepEqual(schema._registry.user.foreignKeys, []);
  assert.deepEqual(schema._registry.project.foreignKeys, ['userId']);

  var project = schema.projects.create();
  var user = project.createUser();

  assert.ok(user);
  assert.ok(project);
});

(0, _qunit.test)('schemas with a single belongsTo with a different property name have correct foreign keys', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    user: _model2.default,
    project: _model2.default.extend({
      owner: (0, _emberCliMirage.belongsTo)('user')
    })
  });

  // Fks are set up correctly
  assert.deepEqual(schema._registry.user.foreignKeys, []);
  assert.deepEqual(schema._registry.project.foreignKeys, ['ownerId']);

  var project = schema.projects.create();
  var user = project.createOwner();

  assert.ok(user);
  assert.ok(project);
});

(0, _qunit.test)('schemas with a single hasMany and belongsTo have correct foreign keys', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    user: _model2.default.extend({
      projects: (0, _emberCliMirage.hasMany)()
    }),
    project: _model2.default.extend({
      user: (0, _emberCliMirage.belongsTo)()
    })
  });

  // Fks are set up correctly
  assert.deepEqual(schema._registry.user.foreignKeys, []);
  assert.deepEqual(schema._registry.project.foreignKeys, ['userId']);

  var project = schema.projects.create();
  var user = project.createUser();

  assert.ok(user);
  assert.ok(project);
});

(0, _qunit.test)('complex schemas have correct foreign keys', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    user: _model2.default.extend({
      projects: (0, _emberCliMirage.hasMany)(),
      tasks: (0, _emberCliMirage.hasMany)()
    }),
    project: _model2.default.extend({
      user: (0, _emberCliMirage.belongsTo)(),
      tasks: (0, _emberCliMirage.hasMany)()
    }),
    task: _model2.default.extend({
      user: (0, _emberCliMirage.belongsTo)(),
      project: (0, _emberCliMirage.belongsTo)()
    })
  });

  // Fks are set up correctly
  assert.deepEqual(schema._registry.user.foreignKeys, []);
  assert.deepEqual(schema._registry.project.foreignKeys, ['userId']);
  assert.deepEqual(schema._registry.task.foreignKeys, ['userId', 'projectId']);

  var user = schema.users.create();
  var project = user.createProject();
  var task = user.createTask();

  assert.ok(user);
  assert.ok(project);
  assert.ok(task);
});

(0, _qunit.test)('foreign keys should be named appropriately for multiword properties', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    author: _model2.default,
    post: _model2.default.extend({
      wordSmith: (0, _emberCliMirage.belongsTo)('author')
    })
  });

  // Fks are set up correctly
  assert.deepEqual(schema._registry.author.foreignKeys, []);
  assert.deepEqual(schema._registry.post.foreignKeys, ['wordSmithId']);

  var post = schema.posts.create();
  var wordSmith = post.createWordSmith();

  assert.ok(post);
  assert.ok(wordSmith);
  assert.equal(wordSmith.modelName, 'author');
});

(0, _qunit.test)('foreign keys should be named appropriately for multiword model names', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    wordSmith: _model2.default,
    post: _model2.default.extend({
      author: (0, _emberCliMirage.belongsTo)('word-smith')
    })
  });

  assert.deepEqual(schema._registry.wordSmith.foreignKeys, []);
  assert.deepEqual(schema._registry.post.foreignKeys, ['authorId']);

  var post = schema.posts.create();
  var author = post.createAuthor();

  assert.ok(post);
  assert.ok(author);
  assert.equal(author.modelName, 'word-smith');
});

(0, _qunit.test)('foreign keys should be named appropriately for multiword properties and model names', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    wordSmith: _model2.default,
    post: _model2.default.extend({
      brilliantWriter: (0, _emberCliMirage.belongsTo)('word-smith')
    })
  });

  assert.deepEqual(schema._registry.wordSmith.foreignKeys, []);
  assert.deepEqual(schema._registry.post.foreignKeys, ['brilliantWriterId']);

  var post = schema.posts.create();
  var brilliantWriter = post.createBrilliantWriter();

  assert.ok(post);
  assert.ok(brilliantWriter);
  assert.equal(brilliantWriter.modelName, 'word-smith');
});

(0, _qunit.test)('a model can have multiple belongsTo associations of the same type', function (assert) {
  var schema = new _schema2.default(new _db2.default(), {
    user: _model2.default,
    project: _model2.default.extend({
      admin: (0, _emberCliMirage.belongsTo)('user'),
      specialUser: (0, _emberCliMirage.belongsTo)('user')
    })
  });

  assert.deepEqual(schema._registry.user.foreignKeys, []);
  assert.deepEqual(schema._registry.project.foreignKeys, ['adminId', 'specialUserId']);

  var project = schema.projects.create();
  var admin = project.createAdmin();
  var specialUser = project.createSpecialUser();

  assert.ok(project);
  assert.ok(admin);
  assert.equal(admin.modelName, 'user');
  assert.ok(specialUser);
  assert.equal(specialUser.modelName, 'user');
});

/*

What should the behavior for this be???

// test('a model can have multiple hasMany associations of the same type', function(assert) {
//   var schema = new Schema(new Db(), {
//     user: Model.extend({
//       mainProjects: hasMany('project'),
//       specialProjects: hasMany('project'),
//     }),
//     project: Model
//   });

//   assert.deepEqual(schema._registry.user.foreignKeys, []);
//   assert.deepEqual(schema._registry.project.foreignKeys, ['adminId', 'specialUserId']);
// });

*/