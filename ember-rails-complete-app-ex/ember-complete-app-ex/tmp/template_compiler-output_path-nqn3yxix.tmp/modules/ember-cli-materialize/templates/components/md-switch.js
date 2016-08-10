export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
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
          "line": 9,
          "column": 0
        }
      },
      "moduleName": "modules/ember-cli-materialize/templates/components/md-switch.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("span");
      dom.setAttribute(el1,"class","switch-label materialize-selectable-item-label");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("label");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"class","offlabel");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"class","lever");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"class","onlabel");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createAttrMorph(element0, 'class');
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      morphs[3] = dom.createMorphAt(element0,3,3);
      morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
      return morphs;
    },
    statements: [
      ["content","name",["loc",[null,[1,61],[1,69]]]],
      ["attribute","class",["concat",[["get","_labelClass",["loc",[null,[3,16],[3,27]]]]]]],
      ["content","offLabel",["loc",[null,[4,25],[4,37]]]],
      ["inline","input",[],["type","checkbox","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[5,35],[5,43]]]]],[],[]],"checked",["subexpr","@mut",[["get","isSelected",["loc",[null,[5,52],[5,62]]]]],[],[]]],["loc",[null,[5,2],[5,64]]]],
      ["content","onLabel",["loc",[null,[7,24],[7,35]]]]
    ],
    locals: [],
    templates: []
  };
}()));