
var __cov_WS$1$jG8TUbHoYYuK8smAA = (Function('return this'))();
if (!__cov_WS$1$jG8TUbHoYYuK8smAA.__coverage__) { __cov_WS$1$jG8TUbHoYYuK8smAA.__coverage__ = {}; }
__cov_WS$1$jG8TUbHoYYuK8smAA = __cov_WS$1$jG8TUbHoYYuK8smAA.__coverage__;
if (!(__cov_WS$1$jG8TUbHoYYuK8smAA['app/components/crud-comp.js'])) {
   __cov_WS$1$jG8TUbHoYYuK8smAA['app/components/crud-comp.js'] = {"path":"app/components/crud-comp.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},"fnMap":{"1":{"name":"(anonymous_1)","line":14,"loc":{"start":{"line":14,"column":11},"end":{"line":14,"column":26}}},"2":{"name":"(anonymous_2)","line":23,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":14}}},"3":{"name":"(anonymous_3)","line":28,"loc":{"start":{"line":28,"column":10},"end":{"line":28,"column":12}}},"4":{"name":"(anonymous_4)","line":41,"loc":{"start":{"line":41,"column":10},"end":{"line":41,"column":16}}},"5":{"name":"(anonymous_5)","line":45,"loc":{"start":{"line":45,"column":11},"end":{"line":45,"column":13}}},"6":{"name":"(anonymous_6)","line":48,"loc":{"start":{"line":48,"column":8},"end":{"line":48,"column":14}}},"7":{"name":"(anonymous_7)","line":54,"loc":{"start":{"line":54,"column":7},"end":{"line":54,"column":9}}},"8":{"name":"(anonymous_8)","line":59,"loc":{"start":{"line":59,"column":12},"end":{"line":59,"column":14}}}},"statementMap":{"1":{"start":{"line":15,"column":2},"end":{"line":15,"column":23}},"2":{"start":{"line":16,"column":2},"end":{"line":16,"column":32}},"3":{"start":{"line":17,"column":2},"end":{"line":20,"column":5}},"4":{"start":{"line":18,"column":3},"end":{"line":19,"column":27}},"5":{"start":{"line":19,"column":4},"end":{"line":19,"column":27}},"6":{"start":{"line":24,"column":3},"end":{"line":24,"column":27}},"7":{"start":{"line":25,"column":3},"end":{"line":25,"column":56}},"8":{"start":{"line":26,"column":3},"end":{"line":26,"column":37}},"9":{"start":{"line":29,"column":3},"end":{"line":29,"column":40}},"10":{"start":{"line":30,"column":3},"end":{"line":30,"column":76}},"11":{"start":{"line":31,"column":3},"end":{"line":39,"column":6}},"12":{"start":{"line":32,"column":4},"end":{"line":32,"column":34}},"13":{"start":{"line":33,"column":4},"end":{"line":33,"column":43}},"14":{"start":{"line":35,"column":4},"end":{"line":35,"column":26}},"15":{"start":{"line":37,"column":4},"end":{"line":37,"column":41}},"16":{"start":{"line":38,"column":4},"end":{"line":38,"column":33}},"17":{"start":{"line":42,"column":3},"end":{"line":42,"column":34}},"18":{"start":{"line":43,"column":3},"end":{"line":43,"column":27}},"19":{"start":{"line":46,"column":3},"end":{"line":46,"column":25}},"20":{"start":{"line":49,"column":3},"end":{"line":50,"column":61}},"21":{"start":{"line":51,"column":3},"end":{"line":51,"column":38}},"22":{"start":{"line":52,"column":3},"end":{"line":52,"column":20}},"23":{"start":{"line":55,"column":3},"end":{"line":55,"column":38}},"24":{"start":{"line":56,"column":3},"end":{"line":56,"column":36}},"25":{"start":{"line":60,"column":3},"end":{"line":60,"column":38}}},"branchMap":{"1":{"line":18,"type":"if","locations":[{"start":{"line":18,"column":3},"end":{"line":18,"column":3}},{"start":{"line":18,"column":3},"end":{"line":18,"column":3}}]}},"code":["import Ember from 'ember';","","export default Ember.Component.extend({","\tmsgVisible: false,","\tmsgColor: '',","\tmodalIsOpen: '',","\tmodalText: '',","\tstore: null,","\tmsgContent: 'Task not saved!',","\tmain: true,","\tviews: ['main', 'create'],","\tselectedItem: null,","\tauthManager: Ember.inject.service('session'),","\tshowView: function(item) {","\t\tthis.set(item, true);\t","\t\tlet views = this.get('views');","\t\tviews.forEach((value) => {","\t\t\tif(value != item)","\t\t\t\tthis.set(value, false);\t","\t\t});","\t},","\tactions: {","\t\tcreateItem(){","\t\t\tthis.showView('create');","\t\t\tlet newItem = this.get('store').createRecord('task');\t","\t\t\tthis.set('selectedItem', newItem);","\t\t},","\t\tsaveItem(){","\t\t\tlet model = this.get('selectedItem');","\t\t\tmodel.set('user_id', this.get('authManager.data.authenticated.user.id'));","\t\t\tmodel.save().then((model) => {","\t\t\t\tthis.set('msgVisible', false);","\t\t\t\tthis.set('msgColor', 'green accent 4');","\t\t\t\t//this.get('todos').reload();","\t\t\t\tthis.showView('main');","\t\t\t}).catch(() => {","\t\t\t\tthis.set('msgColor', 'red accent 4');","\t\t\t\tthis.set('msgVisible', true);","\t\t\t});","\t\t},","\t\teditItem(item){","\t\t\tthis.set('selectedItem', item);\t","\t\t\tthis.showView('update');","\t\t},","\t\tcloseView(){","\t\t\tthis.showView('main');","\t\t},","\t\tdelete(item){","\t\t\tthis.set('modalText', ","\t\t\t\t\t`Are you sure you wanna delete ${item.get('title')} ?`);","\t\t\tthis.toggleProperty('modalIsOpen');\t","\t\t\tthis.item = item;","\t\t},","\t\tagree(){","\t\t\tthis.toggleProperty('modalIsOpen');","\t\t\tthis.get('item').destroyRecord();","\t\t\t//this.get('deleteAction')(this.item);","\t\t},","\t\tcloseModal(){","\t\t\tthis.toggleProperty('modalIsOpen');","\t\t}","\t}","});",""]};
}
__cov_WS$1$jG8TUbHoYYuK8smAA = __cov_WS$1$jG8TUbHoYYuK8smAA['app/components/crud-comp.js'];
import Ember from'ember';export default Ember.Component.extend({msgVisible:false,msgColor:'',modalIsOpen:'',modalText:'',store:null,msgContent:'Task not saved!',main:true,views:['main','create'],selectedItem:null,authManager:Ember.inject.service('session'),showView:function(item){__cov_WS$1$jG8TUbHoYYuK8smAA.f['1']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['1']++;this.set(item,true);__cov_WS$1$jG8TUbHoYYuK8smAA.s['2']++;let views=this.get('views');__cov_WS$1$jG8TUbHoYYuK8smAA.s['3']++;views.forEach(value=>{__cov_WS$1$jG8TUbHoYYuK8smAA.s['4']++;if(value!=item){__cov_WS$1$jG8TUbHoYYuK8smAA.b['1'][0]++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['5']++;this.set(value,false);}else{__cov_WS$1$jG8TUbHoYYuK8smAA.b['1'][1]++;}});},actions:{createItem(){__cov_WS$1$jG8TUbHoYYuK8smAA.f['2']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['6']++;this.showView('create');__cov_WS$1$jG8TUbHoYYuK8smAA.s['7']++;let newItem=this.get('store').createRecord('task');__cov_WS$1$jG8TUbHoYYuK8smAA.s['8']++;this.set('selectedItem',newItem);},saveItem(){__cov_WS$1$jG8TUbHoYYuK8smAA.f['3']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['9']++;let model=this.get('selectedItem');__cov_WS$1$jG8TUbHoYYuK8smAA.s['10']++;model.set('user_id',this.get('authManager.data.authenticated.user.id'));__cov_WS$1$jG8TUbHoYYuK8smAA.s['11']++;model.save().then(model=>{__cov_WS$1$jG8TUbHoYYuK8smAA.s['12']++;this.set('msgVisible',false);__cov_WS$1$jG8TUbHoYYuK8smAA.s['13']++;this.set('msgColor','green accent 4');__cov_WS$1$jG8TUbHoYYuK8smAA.s['14']++;this.showView('main');}).catch(()=>{__cov_WS$1$jG8TUbHoYYuK8smAA.s['15']++;this.set('msgColor','red accent 4');__cov_WS$1$jG8TUbHoYYuK8smAA.s['16']++;this.set('msgVisible',true);});},editItem(item){__cov_WS$1$jG8TUbHoYYuK8smAA.f['4']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['17']++;this.set('selectedItem',item);__cov_WS$1$jG8TUbHoYYuK8smAA.s['18']++;this.showView('update');},closeView(){__cov_WS$1$jG8TUbHoYYuK8smAA.f['5']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['19']++;this.showView('main');},delete(item){__cov_WS$1$jG8TUbHoYYuK8smAA.f['6']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['20']++;this.set('modalText',`Are you sure you wanna delete ${item.get('title')} ?`);__cov_WS$1$jG8TUbHoYYuK8smAA.s['21']++;this.toggleProperty('modalIsOpen');__cov_WS$1$jG8TUbHoYYuK8smAA.s['22']++;this.item=item;},agree(){__cov_WS$1$jG8TUbHoYYuK8smAA.f['7']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['23']++;this.toggleProperty('modalIsOpen');__cov_WS$1$jG8TUbHoYYuK8smAA.s['24']++;this.get('item').destroyRecord();},closeModal(){__cov_WS$1$jG8TUbHoYYuK8smAA.f['8']++;__cov_WS$1$jG8TUbHoYYuK8smAA.s['25']++;this.toggleProperty('modalIsOpen');}}});
