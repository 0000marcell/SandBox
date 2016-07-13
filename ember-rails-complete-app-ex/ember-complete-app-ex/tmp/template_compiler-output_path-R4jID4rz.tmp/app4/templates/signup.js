export default Ember.HTMLBars.template((function() {
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
                "line": 6,
                "column": 4
              },
              "end": {
                "line": 10,
                "column": 4
              }
            },
            "moduleName": "app4/templates/signup.hbs"
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
            ["content","msgProp.msg",["loc",[null,[9,5],[9,20]]]]
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
              "line": 5,
              "column": 3
            },
            "end": {
              "line": 11,
              "column": 3
            }
          },
          "moduleName": "app4/templates/signup.hbs"
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
          ["block","md-card-panel",[],["class",["subexpr","readonly",[["get","msgProp.color",["loc",[null,[6,37],[6,50]]]]],[],["loc",[null,[6,27],[6,51]]]],"bodyClass","white-text","id","card-panel"],0,null,["loc",[null,[6,4],[10,22]]]]
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
            "line": 3,
            "column": 2
          },
          "end": {
            "line": 21,
            "column": 2
          }
        },
        "moduleName": "app4/templates/signup.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        var el2 = dom.createTextNode("Sign Up");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("			");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","");
        var el2 = dom.createTextNode("\n				");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n			");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,7,7,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,9,9,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,11,11,contextualElement);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [13]),1,1);
        return morphs;
      },
      statements: [
        ["block","if",[["get","msgProp.msg",["loc",[null,[5,9],[5,20]]]]],[],0,null,["loc",[null,[5,3],[11,10]]]],
        ["inline","md-input",[],["label","Name","type","text","class","col s12","value",["subexpr","@mut",[["get","model.name",["loc",[null,[12,61],[12,71]]]]],[],[]],"validate",true],["loc",[null,[12,3],[12,87]]]],
        ["inline","md-input",[],["label","Email","type","email","class","col s12","value",["subexpr","@mut",[["get","model.email",["loc",[null,[13,63],[13,74]]]]],[],[]],"validate",true],["loc",[null,[13,3],[13,90]]]],
        ["inline","md-input",[],["label","Password","type","password","class","col s12","value",["subexpr","@mut",[["get","model.password",["loc",[null,[14,69],[14,83]]]]],[],[]],"validate",true],["loc",[null,[14,3],[14,99]]]],
        ["inline","md-input",[],["label","Password Confirmation","type","password","class","col s12","value",["subexpr","@mut",[["get","model.passwordConfirmation",["loc",[null,[15,82],[15,108]]]]],[],[]],"validate",true],["loc",[null,[15,3],[15,124]]]],
        ["inline","md-btn-submit",[],["class","indigo","action","signup","text","Sign Up"],["loc",[null,[17,4],[19,21]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "triple-curlies"
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 25,
          "column": 0
        }
      },
      "moduleName": "app4/templates/signup.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","row");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
      return morphs;
    },
    statements: [
      ["block","md-card",[],["id","image-card"],0,null,["loc",[null,[3,2],[21,14]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));