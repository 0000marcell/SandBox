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
          var element4 = dom.childAt(fragment, [3]);
          var element5 = dom.childAt(element4, [1]);
          var element6 = dom.childAt(element4, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),0,0);
          morphs[1] = dom.createElementMorph(element5);
          morphs[2] = dom.createElementMorph(element6);
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
                    "column": 59
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
                ["content","item.title",["loc",[null,[29,45],[29,59]]]]
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
                  "line": 27,
                  "column": 2
                },
                "end": {
                  "line": 35,
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
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"id","item");
              dom.setAttribute(el1,"class","collection-item");
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n				");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","secondary-content");
              var el3 = dom.createTextNode("\n					");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"data-autoId","edit");
              var el4 = dom.createTextNode("Edit");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n					");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"data-autoId","delete");
              var el4 = dom.createTextNode("Delete");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n				");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n			");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var element1 = dom.childAt(element0, [3]);
              var element2 = dom.childAt(element1, [1]);
              var element3 = dom.childAt(element1, [3]);
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(element0,1,1);
              morphs[1] = dom.createElementMorph(element2);
              morphs[2] = dom.createElementMorph(element3);
              return morphs;
            },
            statements: [
              ["block","link-to",["users.user.todos.todo",["get","item",["loc",[null,[29,39],[29,43]]]]],[],0,null,["loc",[null,[29,4],[29,71]]]],
              ["element","action",["editItem",["get","item",["loc",[null,[31,47],[31,51]]]]],[],["loc",[null,[31,27],[31,53]]]],
              ["element","action",["delete",["get","item",["loc",[null,[32,47],[32,51]]]]],[],["loc",[null,[32,29],[32,53]]]]
            ],
            locals: ["item"],
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
                "line": 37,
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
            ["block","md-collection",[],["content",["subexpr","@mut",[["get","model",["loc",[null,[27,27],[27,32]]]]],[],[]]],0,null,["loc",[null,[27,2],[35,20]]]],
            ["inline","md-pagination",[],["min",1,"max",["subexpr","@mut",[["get","total",["loc",[null,[36,28],[36,33]]]]],[],[]],"current",["subexpr","@mut",[["get","page",["loc",[null,[36,42],[36,46]]]]],[],[]],"range",5],["loc",[null,[36,2],[36,56]]]]
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
                      "line": 43,
                      "column": 3
                    },
                    "end": {
                      "line": 47,
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
                  ["content","msgContent",["loc",[null,[46,5],[46,19]]]]
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
                    "line": 42,
                    "column": 2
                  },
                  "end": {
                    "line": 48,
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
                ["block","md-card-panel",[],["class",["subexpr","readonly",[["get","msgColor",["loc",[null,[43,36],[43,44]]]]],[],["loc",[null,[43,26],[43,45]]]],"bodyClass","white-text","id","card-panel"],0,null,["loc",[null,[43,3],[47,21]]]]
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
                  "line": 37,
                  "column": 1
                },
                "end": {
                  "line": 53,
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
              ["inline","md-btn",[],["icon","mdi-action-favorite","action","closeView","buttonType","floating","class","btn-small red accent-4 pull-right"],["loc",[null,[38,2],[40,46]]]],
              ["block","if",[["get","msgVisible",["loc",[null,[42,8],[42,18]]]]],[],0,null,["loc",[null,[42,2],[48,9]]]],
              ["inline","md-input",[],["value",["subexpr","@mut",[["get","selectedItem.title",["loc",[null,[49,19],[49,37]]]]],[],[]],"label","Title","class","col s12","validate",true],["loc",[null,[49,2],[49,83]]]],
              ["inline","md-btn",[],["text","Save","action","saveItem","class","indigo darken-2"],["loc",[null,[50,2],[52,28]]]]
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
                    "line": 53,
                    "column": 1
                  },
                  "end": {
                    "line": 64,
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
                var el1 = dom.createTextNode("\n		");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n		");
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
                ["inline","md-btn",[],["icon","mdi-action-favorite","action","closeView","buttonType","floating","class","btn-small red accent-4 pull-right"],["loc",[null,[54,2],[56,46]]]],
                ["inline","md-input",[],["label","Name","type","text","class","col s12","value",["subexpr","@mut",[["get","selectedItem.title",["loc",[null,[59,37],[59,55]]]]],[],[]],"validate",true],["loc",[null,[58,2],[59,71]]]],
                ["inline","md-btn-submit",[],["class","indigo","id","form-submit","action","saveItem","text","Save"],["loc",[null,[60,2],[63,16]]]]
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
                  "line": 53,
                  "column": 1
                },
                "end": {
                  "line": 64,
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
              ["block","if",[["get","update",["loc",[null,[53,11],[53,17]]]]],[],0,null,["loc",[null,[53,1],[64,1]]]]
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
                "line": 37,
                "column": 1
              },
              "end": {
                "line": 64,
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
            ["block","if",[["get","create",["loc",[null,[37,11],[37,17]]]]],[],0,1,["loc",[null,[37,1],[64,1]]]]
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
              "line": 64,
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
          ["block","if",[["get","main",["loc",[null,[22,11],[22,15]]]]],[],0,1,["loc",[null,[22,1],[64,1]]]]
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
            "line": 65,
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
        ["block","if",[["get","loadingModel",["loc",[null,[20,7],[20,19]]]]],[],0,1,["loc",[null,[20,1],[64,8]]]]
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
          "line": 66,
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
      ["block","md-card",[],["class","height-3"],1,null,["loc",[null,[19,0],[65,12]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));