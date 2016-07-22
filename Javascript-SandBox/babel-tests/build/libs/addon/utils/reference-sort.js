'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (edges) {
  var nodes = (0, _uniq3.default)((0, _flatten3.default)(edges));
  var cursor = nodes.length;
  var sorted = new Array(cursor);
  var visited = {};
  var i = cursor;

  var visit = function visit(node, i, predecessors) {

    if (predecessors.indexOf(node) >= 0) {
      throw new Error('Cyclic dependency in properties ' + JSON.stringify(predecessors));
    }

    if (visited[i]) {
      return;
    } else {
      visited[i] = true;
    }

    var outgoing = edges.filter(function (edge) {
      return edge && edge[0] === node;
    });

    if (i = outgoing.length) {
      var preds = predecessors.concat(node);
      do {
        var pair = outgoing[--i];
        var child = pair[1];
        if (child) {
          visit(child, nodes.indexOf(child), preds);
        }
      } while (i);
    }

    sorted[--cursor] = node;
  };

  while (i--) {
    if (!visited[i]) {
      visit(nodes[i], i, []);
    }
  }

  return sorted.reverse();
};

var _uniq2 = require('lodash/array/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

var _flatten2 = require('lodash/array/flatten');

var _flatten3 = _interopRequireDefault(_flatten2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }