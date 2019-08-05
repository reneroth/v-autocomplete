webpackJsonp([0],[,,function(i,e,t){"use strict";var s=t(15),o=t(21),n=t(23);e.a={name:"demo",components:{"v-autocomplete":s.a},data:function(){return{itemsApi:[],item:{id:9,name:"Lion",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},items:[],tpl:o.a}},methods:{itemSelected:function(i){console.log("Selected item!",i)},itemClicked:function(i){console.log("You clicked an item!",i)},getLabel:function(i){return i?i.name:""},update:function(i){this.items=n.a.filter(function(e){return new RegExp(i.toLowerCase()).test(e.name.toLowerCase())})}}}},function(i,e,t){"use strict";var s=t(17),o=t(19);e.a={name:"v-autocomplete",props:{componentItem:{default:function(){return s.a}},minLen:{type:Number,default:o.a.minLen},wait:{type:Number,default:o.a.wait},value:null,getLabel:{type:Function,default:function(i){return i}},items:Array,autoSelectOneItem:{type:Boolean,default:!0},listCloseDelay:{type:Number,default:500},placeholder:String,inputClass:{type:String,default:"v-autocomplete-input"},disabled:{type:Boolean,default:!1},inputAttrs:{type:Object,default:function(){return{}}},keepOpen:{type:Boolean,default:!1}},data:function(){return{searchText:"",showList:!1,cursor:-1,internalItems:this.items||[]}},computed:{hasItems:function(){return!!this.internalItems.length},show:function(){return this.showList&&this.hasItems||this.keepOpen}},methods:{inputChange:function(){this.showList=!0,this.cursor=-1,this.onSelectItem(null),o.a.callUpdateItems(this.searchText,this.updateItems,this.listCloseDelay),this.$emit("change",this.searchText)},updateItems:function(){this.$emit("update-items",this.searchText)},focus:function(){this.$emit("focus",this.searchText),this.showList=!0},blur:function(){var i=this;this.$emit("blur",this.searchText),setTimeout(function(){return i.showList=!1},200)},onClickItem:function(i){this.onSelectItem(i),this.$emit("item-clicked",i)},onSelectItem:function(i){i?(this.internalItems=[i],this.searchText=this.getLabel(i),this.$emit("item-selected",i)):this.setItems(this.items),this.$emit("input",i)},setItems:function(i){this.internalItems=i||[]},isSelectedValue:function(i){return 1==this.internalItems.length&&i==this.internalItems[0]},keyUp:function(i){this.cursor>-1&&(this.cursor--,this.itemView(this.$el.getElementsByClassName("v-autocomplete-list-item")[this.cursor]))},keyDown:function(i){this.cursor<this.internalItems.length&&(this.cursor++,this.itemView(this.$el.getElementsByClassName("v-autocomplete-list-item")[this.cursor]))},itemView:function(i){i&&i.scrollIntoView&&i.scrollIntoView(!1)},keyEnter:function(i){this.showList&&this.internalItems[this.cursor]&&(this.onSelectItem(this.internalItems[this.cursor]),this.showList=!1)}},created:function(){o.a.minLen=this.minLen,o.a.wait=this.wait,this.onSelectItem(this.value)},watch:{items:function(i){this.setItems(i);var e=o.a.findItem(this.items,this.searchText,this.autoSelectOneItem);e&&(this.onSelectItem(e),this.showList=!1)},value:function(i){if(!this.isSelectedValue(i)){this.onSelectItem(i);var e=this.getLabel(i);e&&(this.searchText=e)}}}}},function(i,e,t){"use strict";e.a={props:{item:{required:!0}}}},function(i,e,t){"use strict";e.a={props:{item:{required:!0}}}},function(i,e,t){i.exports=t(7)},function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t(8),o=t(12);new s.a(Object.assign({},o.a)).$mount("#app")},,,,,function(i,e,t){"use strict";function s(i){t(13),t(14)}var o=t(2),n=t(24),r=t(0),c=s,a=r(o.a,n.a,!1,c,null,null);e.a=a.exports},function(i,e){},function(i,e){},function(i,e,t){"use strict";function s(i){t(16)}var o=t(3),n=t(20),r=t(0),c=s,a=r(o.a,n.a,!1,c,null,null);e.a=a.exports},function(i,e){},function(i,e,t){"use strict";var s=t(4),o=t(18),n=t(0),r=n(s.a,o.a,!1,null,null,null);e.a=r.exports},function(i,e,t){"use strict";var s=function(){var i=this,e=i.$createElement;return(i._self._c||e)("div",[i._v(i._s(i.item))])},o=[],n={render:s,staticRenderFns:o};e.a=n},function(i,e,t){"use strict";e.a={minLen:3,timeout:null,isUpdateItems:function(i){if(i.length>=this.minLen)return!0},callUpdateItems:function(i,e,t){clearTimeout(this.timeout),this.isUpdateItems(i)&&(t?this.timeout=setTimeout(e,t):e())},findItem:function(i,e,t){if(e)return t&&1==i.length?i[0]:void 0}}},function(i,e,t){"use strict";var s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"v-autocomplete"},[t("div",{staticClass:"v-autocomplete-input-group",class:{"v-autocomplete-selected":i.value}},[t("input",i._b({directives:[{name:"model",rawName:"v-model",value:i.searchText,expression:"searchText"}],class:i.inputAttrs.class||i.inputClass,attrs:{type:"search",placeholder:i.inputAttrs.placeholder||i.placeholder,disabled:i.inputAttrs.disabled||i.disabled},domProps:{value:i.searchText},on:{blur:i.blur,focus:i.focus,input:[function(e){e.target.composing||(i.searchText=e.target.value)},i.inputChange],keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.keyEnter(e)},keydown:[function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"tab",9,e.key,"Tab")?null:i.keyEnter(e)},function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:i.keyUp(e)},function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:i.keyDown(e)}]}},"input",i.inputAttrs,!1))]),i._v(" "),i.show?t("div",{staticClass:"v-autocomplete-list"},i._l(i.internalItems,function(e,s){return t("div",{staticClass:"v-autocomplete-list-item",class:{"v-autocomplete-item-active":s===i.cursor},on:{click:function(t){return i.onClickItem(e)},mouseover:function(e){i.cursor=s}}},[t(i.componentItem,{tag:"div",attrs:{item:e,searchText:i.searchText}})],1)}),0):i._e()])},o=[],n={render:s,staticRenderFns:o};e.a=n},function(i,e,t){"use strict";var s=t(5),o=t(22),n=t(0),r=n(s.a,o.a,!1,null,null,null);e.a=r.exports},function(i,e,t){"use strict";var s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("b",[i._v("#"+i._s(i.item.id))]),t("span",[i._v(" "+i._s(i.item.name))]),t("abbr",[i._v(i._s(i.item.description))])])},o=[],n={render:s,staticRenderFns:o};e.a=n},function(i,e,t){"use strict";e.a=[{id:1,name:"Golden Retriever",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:2,name:"Cat",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:3,name:"Squirrel",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:4,name:"Cougar",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:5,name:"Rave",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:6,name:"Alligator",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:7,name:"Black Bear",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:8,name:"Possu",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:9,name:"Lion",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:10,name:"Crocodile",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:11,name:"Brown Bear",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:12,name:"Koal",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:13,name:"Tiger",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:14,name:"Chipmunks",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:15,name:"Grizzly Bear",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:16,name:"Swa",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:17,name:"Rabbit",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:18,name:"Whale",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:19,name:"Platypu",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:20,name:"Goat",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:21,name:"Duck",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:22,name:"Octopu",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:23,name:"Sheep",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:24,name:"Zebra",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:25,name:"Anacond",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:26,name:"Cow",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:27,name:"Goose",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:28,name:"Bald Eagl",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:29,name:"Pig",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:30,name:"Donkey",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:31,name:"Ospre",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:32,name:"Parrot",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:33,name:"Panda",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:34,name:"Poodl",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:35,name:"Bear",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:36,name:"Elephant",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:37,name:"Skun",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:38,name:"Bull",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:39,name:"Dolphin",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:40,name:"Jagua",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:41,name:"Rooster",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:42,name:"Salamander",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:43,name:"Tortois",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:44,name:"Chicken",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:45,name:"Raccoon",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:46,name:"Hedgeho",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:47,name:"Piranha",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:48,name:"Penguin",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:49,name:"Iguan",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:50,name:"Turkey",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:51,name:"Polar Bear",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:52,name:"Flaming",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:53,name:"Crow",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:54,name:"Walrus",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:55,name:"Worm",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:56,name:"Ape",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:57,name:"Jellyﬁsh",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:58,name:"Fro",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:59,name:"Monkey",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:60,name:"Giraffe",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:61,name:"Slot",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:62,name:"Pigeon",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:63,name:"Ostrich",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:64,name:"Lobste",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:65,name:"Yellow ﬁn tuna",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:66,name:"Wolf",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:67,name:"Swordﬁs",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:68,name:"Cod",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:69,name:"Deer",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:70,name:"Mackere",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:71,name:"Gecko",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:72,name:"Antelope",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:73,name:"Bonit",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:74,name:"Spider",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:75,name:"Catﬁsh",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:76,name:"Trou",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:77,name:"Cobra",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:78,name:"Beluga Whale",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:79,name:"Peregrine Falco",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:80,name:"Hamster",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:81,name:"Fox",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:82,name:"Chimpanze",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:83,name:"Seal",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:84,name:"Lama",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:85,name:"Kangaro",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:86,name:"Leopard",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:87,name:"Camel",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:88,name:"Porcupine",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:89,name:"Cheetah",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:90,name:"Gorilla",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:91,name:"Hyen",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:92,name:"Crab",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:93,name:"Toad",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:94,name:"Hipp",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:95,name:"Mouse",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:96,name:"Quail",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:97,name:"Rhin",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:98,name:"Rat",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:99,name:"Moose",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."},{id:100,name:"Cra",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}]},function(i,e,t){"use strict";var s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticStyle:{"text-align":"center"}},[t("h2",[i._v("Type some animal name to search")]),t("v-autocomplete",{attrs:{items:i.items,"get-label":i.getLabel,"min-len":0,"component-item":i.tpl,"input-attrs":{name:"input-test",id:"v-my-autocomplete"}},on:{"update-items":i.update,"item-selected":i.itemSelected,"item-clicked":i.itemClicked},model:{value:i.item,callback:function(e){i.item=e},expression:"item"}}),t("p",[i._v("Selected item:")]),t("pre",[i._v(i._s(i.item))]),t("hr"),i._m(0)],1)},o=[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("p",{staticClass:"left note"},[t("b",[i._v("Note: ")]),i._v("The v-autocomplete component does not contain any css. Therefore, you can customize the appearence for any framework by applying style to the generated classes."),t("br"),t("b",[t("a",{attrs:{href:"https://github.com/paliari/v-autocomplete#what-about-appearence",target:"_blank"}},[i._v("See an example")])])])}],n={render:s,staticRenderFns:o};e.a=n}],[6]);