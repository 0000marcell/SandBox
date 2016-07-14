export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 15,
              "column": 1
            }
          },
          "moduleName": "app4/templates/users/user/todos/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","modal-content");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("Delete Todo!");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Are you sure you wanna delete this todo?");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","modal-footer");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"class","modal-action modal-close waves-effect waves-orange btn-flat agree-button");
          var el3 = dom.createTextNode("\n        Yes\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2,"class","modal-action modal-close waves-effect waves-red btn-flat cancel-button");
          var el3 = dom.createTextNode("\n				Cancel\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [3]);
          var element4 = dom.childAt(element3, [1]);
          var element5 = dom.childAt(element3, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element4);
          morphs[1] = dom.createElementMorph(element5);
          return morphs;
        },
        statements: [
          ["element","action",["agree"],[],["loc",[null,[8,88],[8,106]]]],
          ["element","action",["closeModal"],[],["loc",[null,[11,88],[11,111]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "app4/templates/users/user/todos/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","md-modal",[],["close","closeModal","class","test-modal"],0,null,["loc",[null,[2,1],[15,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 2
            },
            "end": {
              "line": 21,
              "column": 2
            }
          },
          "moduleName": "app4/templates/users/user/todos/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","md-loader",[],["mode","circular"],["loc",[null,[20,3],[20,32]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 3
              },
              "end": {
                "line": 22,
                "column": 41
              }
            },
            "moduleName": "app4/templates/users/user/todos/index.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("New");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 25,
                  "column": 5
                },
                "end": {
                  "line": 25,
                  "column": 60
                }
              },
              "moduleName": "app4/templates/users/user/todos/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","item.title",["loc",[null,[25,46],[25,60]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 6
                },
                "end": {
                  "line": 27,
                  "column": 56
                }
              },
              "moduleName": "app4/templates/users/user/todos/index.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Edit");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 3
              },
              "end": {
                "line": 31,
                "column": 3
              }
            },
            "moduleName": "app4/templates/users/user/todos/index.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("				");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"id","item");
            dom.setAttribute(el1,"class","collection-item");
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","secondary-content");
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n						");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"id","delete");
            var el4 = dom.createTextNode("Delete");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n					");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n				");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [3]);
            var element2 = dom.childAt(element1, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element0,1,1);
            morphs[1] = dom.createMorphAt(element1,1,1);
            morphs[2] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [
            ["block","link-to",["users.user.todos.todo",["get","item",["loc",[null,[25,40],[25,44]]]]],[],0,null,["loc",[null,[25,5],[25,72]]]],
            ["block","link-to",["users.user.todos.todo.edit",["get","item",["loc",[null,[27,46],[27,50]]]]],[],1,null,["loc",[null,[27,6],[27,68]]]],
            ["element","action",["delete",["get","item",["loc",[null,[28,39],[28,43]]]]],[],["loc",[null,[28,21],[28,45]]]]
          ],
          locals: ["item"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.5.1",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 2
            },
            "end": {
              "line": 34,
              "column": 2
            }
          },
          "moduleName": "app4/templates/users/user/todos/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
          return morphs;
        },
        statements: [
          ["block","link-to",["users.user.todos.new"],[],0,null,["loc",[null,[22,3],[22,53]]]],
          ["block","md-collection",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[23,28],[23,33]]]]],[],[]]],1,null,["loc",[null,[23,3],[31,21]]]],
          ["inline","md-pagination",[],["min",1,"max",["subexpr","@mut",[["get","model.meta.pagination.last.number",["loc",[null,[32,29],[32,62]]]]],[],[]],"current",["subexpr","@mut",[["get","page",["loc",[null,[33,12],[33,16]]]]],[],[]],"range",5],["loc",[null,[32,3],[33,26]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.5.1",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 1
          },
          "end": {
            "line": 35,
            "column": 1
          }
        },
        "moduleName": "app4/templates/users/user/todos/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("		");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        var el2 = dom.createTextNode("todo");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","loadingModel",["loc",[null,[19,8],[19,20]]]]],[],0,1,["loc",[null,[19,2],[34,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 36,
          "column": 0
        }
      },
      "moduleName": "app4/templates/users/user/todos/index.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","modalIsOpen",["loc",[null,[1,6],[1,17]]]]],[],0,null,["loc",[null,[1,0],[16,7]]]],
      ["block","md-card",[],["id","image-card"],1,null,["loc",[null,[17,1],[35,13]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));