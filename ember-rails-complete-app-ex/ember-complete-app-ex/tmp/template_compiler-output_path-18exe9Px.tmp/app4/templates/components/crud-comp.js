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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 16,
              "column": 1
            }
          },
          "moduleName": "app4/templates/components/crud-comp.hbs"
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
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Delete Task!");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
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
          var element2 = dom.childAt(fragment, [3]);
          var element3 = dom.childAt(element2, [1]);
          var element4 = dom.childAt(element2, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),0,0);
          morphs[1] = dom.createElementMorph(element3);
          morphs[2] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [
          ["content","modalText",["loc",[null,[6,6],[6,19]]]],
          ["element","action",["agree"],[],["loc",[null,[9,88],[9,106]]]],
          ["element","action",["closeModal"],[],["loc",[null,[12,88],[12,111]]]]
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
            "line": 2,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "app4/templates/components/crud-comp.hbs"
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
        ["block","md-modal",[],["close","closeModal","class","test-modal"],0,null,["loc",[null,[3,1],[16,14]]]]
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
              "line": 20,
              "column": 1
            },
            "end": {
              "line": 22,
              "column": 1
            }
          },
          "moduleName": "app4/templates/components/crud-comp.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
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
          ["inline","md-loader",[],["mode","circular"],["loc",[null,[21,2],[21,31]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.5.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 29,
                      "column": 4
                    },
                    "end": {
                      "line": 29,
                      "column": 57
                    }
                  },
                  "moduleName": "app4/templates/components/crud-comp.hbs"
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
                  ["content","row.title",["loc",[null,[29,44],[29,57]]]]
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
                    "line": 28,
                    "column": 3
                  },
                  "end": {
                    "line": 32,
                    "column": 3
                  }
                },
                "moduleName": "app4/templates/components/crud-comp.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("				");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1,"data-autoId","edit");
                var el2 = dom.createTextNode("Edit");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n				");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("a");
                dom.setAttribute(el1,"data-autoId","delete");
                var el2 = dom.createTextNode("Delete");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [3]);
                var element1 = dom.childAt(fragment, [5]);
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                morphs[1] = dom.createElementMorph(element0);
                morphs[2] = dom.createElementMorph(element1);
                return morphs;
              },
              statements: [
                ["block","link-to",["users.user.todos.todo",["get","row",["loc",[null,[29,39],[29,42]]]]],[],0,null,["loc",[null,[29,4],[29,69]]]],
                ["element","action",["editItem",["get","row",["loc",[null,[30,46],[30,49]]]]],[],["loc",[null,[30,26],[30,51]]]],
                ["element","action",["deleteItem",["get","row",["loc",[null,[31,50],[31,53]]]]],[],["loc",[null,[31,28],[31,55]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 2
                },
                "end": {
                  "line": 33,
                  "column": 2
                }
              },
              "moduleName": "app4/templates/components/crud-comp.hbs"
            },
            isEmpty: false,
            arity: 1,
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
              ["block","md-table-col",[],["row",["subexpr","@mut",[["get","row",["loc",[null,[28,23],[28,26]]]]],[],[]],"key","title","header","Title"],0,null,["loc",[null,[28,3],[32,20]]]]
            ],
            locals: ["row"],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 1
              },
              "end": {
                "line": 57,
                "column": 1
              }
            },
            "moduleName": "app4/templates/components/crud-comp.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
            morphs[2] = dom.createMorphAt(fragment,5,5,contextualElement);
            morphs[3] = dom.createMorphAt(fragment,7,7,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","md-input",[],["value",["subexpr","@mut",[["get","search",["loc",[null,[23,19],[23,25]]]]],[],[]],"label","Search","class","col s12","validate",true],["loc",[null,[23,2],[23,72]]]],
            ["inline","md-btn",[],["icon","mdi-action-favorite","action","createItem","buttonType","floating","class","btn-small indigo darken-2"],["loc",[null,[24,2],[26,38]]]],
            ["block","md-table",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[27,22],[27,27]]]]],[],[]]],0,null,["loc",[null,[27,2],[33,15]]]],
            ["inline","md-pagination",[],["min",1,"max",["subexpr","@mut",[["get","total",["loc",[null,[56,28],[56,33]]]]],[],[]],"current",["subexpr","@mut",[["get","page",["loc",[null,[56,42],[56,46]]]]],[],[]],"range",5],["loc",[null,[56,2],[56,56]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.5.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 63,
                      "column": 3
                    },
                    "end": {
                      "line": 67,
                      "column": 3
                    }
                  },
                  "moduleName": "app4/templates/components/crud-comp.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("					");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                  return morphs;
                },
                statements: [
                  ["content","msgContent",["loc",[null,[66,5],[66,19]]]]
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
                    "line": 62,
                    "column": 2
                  },
                  "end": {
                    "line": 68,
                    "column": 2
                  }
                },
                "moduleName": "app4/templates/components/crud-comp.hbs"
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
                ["block","md-card-panel",[],["class",["subexpr","readonly",[["get","msgColor",["loc",[null,[63,36],[63,44]]]]],[],["loc",[null,[63,26],[63,45]]]],"bodyClass","white-text","id","card-panel"],0,null,["loc",[null,[63,3],[67,21]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 57,
                  "column": 1
                },
                "end": {
                  "line": 73,
                  "column": 1
                }
              },
              "moduleName": "app4/templates/components/crud-comp.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("		");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n		");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("h5");
              var el2 = dom.createTextNode("New Task");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("	\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n		");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(4);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
              morphs[2] = dom.createMorphAt(fragment,7,7,contextualElement);
              morphs[3] = dom.createMorphAt(fragment,9,9,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","md-btn",[],["icon","mdi-action-favorite","action","closeView","buttonType","floating","class","btn-small red accent-4 pull-right"],["loc",[null,[58,2],[60,46]]]],
              ["block","if",[["get","msgVisible",["loc",[null,[62,8],[62,18]]]]],[],0,null,["loc",[null,[62,2],[68,9]]]],
              ["inline","md-input",[],["value",["subexpr","@mut",[["get","selectedItem.title",["loc",[null,[69,21],[69,39]]]]],[],[]],"label","Title","class","col s12","validate",true],["loc",[null,[69,4],[69,85]]]],
              ["inline","md-btn",[],["text","Save","action","saveItem","class","indigo darken-2"],["loc",[null,[70,2],[72,28]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.5.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 78,
                      "column": 2
                    },
                    "end": {
                      "line": 81,
                      "column": 2
                    }
                  },
                  "moduleName": "app4/templates/components/crud-comp.hbs"
                },
                isEmpty: false,
                arity: 1,
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
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                  return morphs;
                },
                statements: [
                  ["inline","md-input",[],["label",["subexpr","@mut",[["get","item.key",["loc",[null,[79,20],[79,28]]]]],[],[]],"type","text","class","col s12","value",["subexpr","@mut",[["get","item.value",["loc",[null,[80,38],[80,48]]]]],[],[]],"validate",true],["loc",[null,[79,3],[80,64]]]]
                ],
                locals: ["item"],
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
                    "line": 73,
                    "column": 1
                  },
                  "end": {
                    "line": 86,
                    "column": 1
                  }
                },
                "moduleName": "app4/templates/components/crud-comp.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("		");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n		");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("h5");
                var el2 = dom.createTextNode("Edit todo");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("		");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n	");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(3);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
                morphs[2] = dom.createMorphAt(fragment,7,7,contextualElement);
                return morphs;
              },
              statements: [
                ["inline","md-btn",[],["icon","mdi-action-favorite","action","closeView","buttonType","floating","class","btn-small red accent-4 pull-right"],["loc",[null,[74,2],[76,46]]]],
                ["block","each",[["get","modelToArray",["loc",[null,[78,10],[78,22]]]]],[],0,null,["loc",[null,[78,2],[81,11]]]],
                ["inline","md-btn-submit",[],["class","indigo","id","form-submit","action","saveItem","text","Save"],["loc",[null,[82,2],[85,16]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.5.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 73,
                  "column": 1
                },
                "end": {
                  "line": 86,
                  "column": 1
                }
              },
              "moduleName": "app4/templates/components/crud-comp.hbs"
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
              ["block","if",[["get","update",["loc",[null,[73,11],[73,17]]]]],[],0,null,["loc",[null,[73,1],[86,1]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.5.1",
            "loc": {
              "source": null,
              "start": {
                "line": 57,
                "column": 1
              },
              "end": {
                "line": 86,
                "column": 1
              }
            },
            "moduleName": "app4/templates/components/crud-comp.hbs"
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
            ["block","if",[["get","create",["loc",[null,[57,11],[57,17]]]]],[],0,1,["loc",[null,[57,1],[86,1]]]]
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
              "line": 22,
              "column": 1
            },
            "end": {
              "line": 86,
              "column": 1
            }
          },
          "moduleName": "app4/templates/components/crud-comp.hbs"
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
          ["block","if",[["get","main",["loc",[null,[22,11],[22,15]]]]],[],0,1,["loc",[null,[22,1],[86,1]]]]
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
            "line": 19,
            "column": 0
          },
          "end": {
            "line": 87,
            "column": 0
          }
        },
        "moduleName": "app4/templates/components/crud-comp.hbs"
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
        ["block","if",[["get","loadingModel",["loc",[null,[20,7],[20,19]]]]],[],0,1,["loc",[null,[20,1],[86,8]]]]
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
          "line": 88,
          "column": 0
        }
      },
      "moduleName": "app4/templates/components/crud-comp.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment(" MODAL ");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","modalIsOpen",["loc",[null,[2,6],[2,17]]]]],[],0,null,["loc",[null,[2,0],[17,7]]]],
      ["block","md-card",[],["class","height-3"],1,null,["loc",[null,[19,0],[87,12]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));