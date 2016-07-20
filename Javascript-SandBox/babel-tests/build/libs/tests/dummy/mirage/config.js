'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  // Contacts
  this.get('/contacts');
  // this.get('/contacts', ['contacts', 'addresses']);
  this.get('/contacts/:id');
  this.post('/contacts');
  this.put('/contacts/:id');
  this.del('/contacts/:id');

  // Friends
  this.get('/friends', { coalesce: true });

  // Pets
  this.get('/pets', function (_ref) {
    var db = _ref.db;

    return { pets: db.pets.filter(function (pet) {
        return pet.alive;
      }) };
  });

  this.post('/pets', function (_ref2, req) {
    var db = _ref2.db;

    var _JSON$parse = JSON.parse(req.requestBody);

    var pet = _JSON$parse.pet;

    if (_ember2.default.isBlank(pet.name)) {
      var body = { errors: { name: ["can't be blank"] } };
      return new _emberCliMirage2.default.Response(422, { some: 'header' }, body);
    } else {
      return { pet: db.pets.insert(pet) };
    }
  });

  this.put('/pets/:id', function (_ref3, req) {
    var db = _ref3.db;

    var _JSON$parse2 = JSON.parse(req.requestBody);

    var pet = _JSON$parse2.pet;

    db.pets.update(pet.id, pet);
    return pet;
  });

  this.delete('/pets/:id', function (_ref4, req) {
    var db = _ref4.db;
  }, 200);

  this.get('/word-smiths/:id');
};

exports.testConfig = testConfig;

var _emberCliMirage = require('ember-cli-mirage');

var _emberCliMirage2 = _interopRequireDefault(_emberCliMirage);

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testConfig() {
  this.get('/friends/:id');
}