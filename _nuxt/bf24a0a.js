(window.webpackJsonp=window.webpackJsonp||[]).push([[33,23,24,28],{500:function(t,e,l){var content=l(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(19).default)("737b1854",content,!0,{sourceMap:!1})},501:function(t,e,l){var content=l(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(19).default)("5fc3799a",content,!0,{sourceMap:!1})},511:function(t,e,l){"use strict";l.r(e);var o=l(233),n=l(446),c=l(544),r=l(503),d=l(182),k=l(206),f=l(135),v=l(207),h=l(65),m=l(70),T=l(115),_={data:function(){return{radio:4}},props:{filteredTasks:{required:!0},isDone:{default:!1},activeTab:{default:"tasks"}},methods:{openTaskDialog:function(t){this.$store.commit("todo/M_openDialogTask",{taskDialogStatue:!0,taskDialogContent:t})},toggleDone:function(t){this.radio=[1,2,3,4,5]}}},x=l(73),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e(n.a,{key:"1",staticClass:"pa-0",staticStyle:{position:"relative","z-index":"1"}},[e(m.a,{staticClass:"overflow-y-auto v-scroll-bar",attrs:{"max-height":380,"min-height":"370"}},[e(k.a,{staticClass:"pa-0"},[e(T.d,{attrs:{group:"","hide-on-leave":""}},t._l(t.filteredTasks,(function(l,n){return e(f.a,{key:n,attrs:{link:""},on:{click:function(e){return t.openTaskDialog(l)}}},[e(v.a,{staticClass:"mr-4",on:{click:function(t){t.stopPropagation()}}},[e(r.a,{scopedSlots:t._u([{key:"default",fn:function(n){var c=n.hover;return[e(o.a,{attrs:{fab:"","x-small":"",text:"",color:"indigo lighten-1"},on:{click:function(e){return t.$store.commit("todo/M_toggleDone",l)}}},[e(d.a,[t._v(t._s(l.done?"mdi-check-circle":c&&!l.done?"mdi-check-circle-outline":"mdi-circle-outline"))])],1)]}}],null,!0)})],1),t._v(" "),e(h.a,[e(h.c,{staticClass:"font-weight-m-medium text-sm-subtitle-1 text-subtitle-2",class:{"text-decoration-line-through":l.done},staticStyle:{"line-height":"1.2"}},[t._v("\n              "+t._s(l.title)+"\n            ")]),t._v(" "),e(h.b,{staticClass:"text-sm-subtitle-1 text-subtitle-2 grey--text text--darken-2",class:{"text-decoration-line-through":l.done},staticStyle:{"line-height":"1.2"}},[t._v(t._s(l.text))]),t._v(" "),e("div",{staticClass:"labels mt-2",class:{"text-decoration-line-through":l.done}},t._l(l.labels,(function(label,o){return e(c.a,{key:o,staticClass:"mr-2 text-capitalize",class:[3==l.labels.length&&2==o?"mt-2":""],attrs:{"x-small":"",outlined:"",color:"groceries"!=label?"primary":"orange"}},[t._v("\n                "+t._s(label)+"\n              ")])})),1)],1),t._v(" "),e(v.a,{on:{click:function(t){t.stopPropagation()}}},[e(o.a,{attrs:{fab:"",small:"",text:"",color:"grey darken-1"},on:{click:function(e){return t.$store.commit("todo/M_deleteTask",l)}}},[e(d.a,{attrs:{size:t.$vuetify.breakpoint.xsOnly?22:""}},[t._v("mdi-delete-outline")])],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,"02cb069a",null);e.default=component.exports},549:function(t,e,l){"use strict";l(500)},550:function(t,e,l){var o=l(18)(!1);o.push([t.i,".v-select-list[data-v-4787eb36]{padding:0 !important}",""]),t.exports=o},551:function(t,e,l){"use strict";l(501)},552:function(t,e,l){var o=l(18)(!1);o.push([t.i,".v-select-list[data-v-61f7e2f3]{padding:0 !important}",""]),t.exports=o},553:function(t,e,l){t.exports=l.p+"img/no-task.0a02c3a.jpg"},564:function(t,e,l){"use strict";l.r(e);var o=l(233),n=l(449),c=l(446),r=l(544),d=l(658),k=l(574),f=l(182),v=l(135),h=l(65),m=l(691),T=l(629),_=l(684),x=l(2),C=(l(42),l(60),l(179),l(61),{data:function(){var t;return t={addTaskDialog:!1,taskLabels:"",items:["work","fun","groceries"],arr:[],taskTitle:"",taskText:null},Object(x.a)(t,"taskLabels",[]),Object(x.a)(t,"isBtnClicked",!1),t},props:{taskDialog:{default:!1},getTaskDialog:{type:Function,default:function(){}}},methods:{selection:function(t){var e=this.arr;this.arr.includes(t)?e.splice(e.indexOf(t),1):e.push(t),this.arr=e,this.taskLabels=this.arr},addTask:function(){var t=this;if(this.taskTitle){this.isBtnClicked=!0,setTimeout((function(){var e;e={title:t.taskTitle,text:t.tasktext,labels:t.taskLabels,done:!1,id:55},t.$store.commit("todo/M_addTask",e),t.isBtnClicked=!1,t.addTaskDialog=!1,t.getTaskDialog(!1),t.taskTitle="",t.taskText="",t.taskLabels=[]}),1500)}}},watch:{taskDialog:function(t){t&&(this.addTaskDialog=!0)}}}),D=(l(549),l(73)),component=Object(D.a)(C,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{"max-width":"600"},on:{"click:outside":function(e){return t.getTaskDialog(!1)}},model:{value:t.addTaskDialog,callback:function(e){t.addTaskDialog=e},expression:"addTaskDialog"}},[e(n.a,[e(c.a,{staticClass:"d-flex px-4 pa-3 align-center justify-space-between"},[e("div",{staticClass:"dialog-title"},[e("div",{staticClass:"font-weight-bold text-h6"},[t._v("Add Task")])]),t._v(" "),e("div",{staticClass:"dialog-close-btn"},[e(o.a,{attrs:{fab:"",color:"grey darken-1",small:"",text:""},on:{click:function(e){e.stopPropagation(),t.addTaskDialog=!1,t.getTaskDialog(!1)}}},[e(f.a,[t._v("mdi-close")])],1)],1)]),t._v(" "),e(k.a,{staticClass:"mb-5 mt-2"}),t._v(" "),e(c.a,{staticClass:"py-0"},[e(T.a,{attrs:{placeholder:"Title",solo:"",flat:"","hide-details":""},model:{value:t.taskTitle,callback:function(e){t.taskTitle=e},expression:"taskTitle"}})],1),t._v(" "),e(k.a,{staticClass:"my-3"}),t._v(" "),e(c.a,{staticClass:"py-0"},[e(_.a,{attrs:{placeholder:"Description",solo:"",flat:"","hide-details":""},model:{value:t.taskText,callback:function(e){t.taskText=e},expression:"taskText"}}),t._v(" "),e(m.a,{staticClass:"mt-4 select--box",attrs:{chips:"",solo:"",flat:"",multiple:"",items:t.items,"menu-props":{top:!1,offsetY:!0},label:"labels","hide-details":""},scopedSlots:t._u([{key:"item",fn:function(l){var o=l.item;return[e(v.a,{attrs:{link:"",dense:""},on:{click:function(e){return t.selection(o)}}},[e(h.a,[e(h.c,[e(r.a,{attrs:{label:"",small:"",outlined:"",color:"groceries"!=o?"primary":"orange"}},[t._v(t._s(o))])],1)],1)],1)]}}]),model:{value:t.taskLabels,callback:function(e){t.taskLabels=e},expression:"taskLabels"}})],1),t._v(" "),e(k.a,{staticClass:"my-5"}),t._v(" "),e(c.a,{staticClass:"align-center justify-space-between d-flex"},[e("div",{staticClass:"cancel-btn"},[e(o.a,{attrs:{outlined:"",small:""},on:{click:function(e){e.stopPropagation(),t.addTaskDialog=!1,t.getTaskDialog(!1)}}},[e("span",{staticClass:"text-capitalize"},[t._v("cancel")])])],1),t._v(" "),e("div",{staticClass:"add-btn"},[e(o.a,{attrs:{color:"primary",small:"",loading:t.isBtnClicked,disabled:t.isBtnClicked},on:{click:t.addTask}},[e("span",{staticClass:"text-capitalize"},[t._v("save")])])],1)])],1)],1)}),[],!1,null,"4787eb36",null);e.default=component.exports},565:function(t,e,l){"use strict";l.r(e);var o=l(233),n=l(449),c=l(446),r=l(544),d=l(658),k=l(574),f=l(182),v=l(135),h=l(65),m=l(691),T=l(629),_=l(684),x=l(2),C=(l(42),l(60),l(179),l(61),{data:function(){var t;return t={editTaskDialog:!1,taskLabels:"",items:["work","fun","groceries"],arr:[],taskTitle:"",taskText:null},Object(x.a)(t,"taskLabels",[]),Object(x.a)(t,"isBtnClicked",!1),Object(x.a)(t,"taskId",""),t},methods:{selection:function(t){var e=this.arr;this.arr.includes(t)?e.splice(e.indexOf(t),1):e.push(t),this.arr=e,this.taskLabels=this.arr},editTask:function(){var t=this;if(this.taskTitle){this.isBtnClicked=!0,setTimeout((function(){var e;e={title:t.taskTitle,text:t.taskText,labels:t.taskLabels,id:t.taskId},t.$store.commit("todo/M_editTask",e),t.isBtnClicked=!1,t.closeDialog(),t.taskTitle="",t.taskText="",t.taskLabels=[]}),1500)}},closeDialog:function(){this.editTaskDialog=!1,this.$store.commit("todo/M_openDialogTask",{taskDialogStatue:!1,taskDialogContent:{}})}},watch:{"$store.state.todo.S_dialogTask":function(t){if(t){var content=this.$store.state.todo.S_dialogContent;this.editTaskDialog=!0,this.taskTitle=content.title,this.taskText=content.text,this.taskLabels=content.labels,this.taskId=content.id}}}}),D=(l(551),l(73)),component=Object(D.a)(C,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{"max-width":"600",transition:"slide-y-transition"},on:{"click:outside":t.closeDialog},model:{value:t.editTaskDialog,callback:function(e){t.editTaskDialog=e},expression:"editTaskDialog"}},[e(n.a,[e(c.a,{staticClass:"d-flex px-4 pa-3 align-center justify-space-between"},[e("div",{staticClass:"dialog-title"},[e("div",{staticClass:"font-weight-bold text-h6"},[t._v("Edit Task")])]),t._v(" "),e("div",{staticClass:"dialog-close-btn"},[e(o.a,{attrs:{fab:"",color:"grey darken-1",small:"",text:""},on:{click:function(e){return e.stopPropagation(),t.closeDialog.apply(null,arguments)}}},[e(f.a,[t._v("mdi-close")])],1)],1)]),t._v(" "),e(k.a,{staticClass:"mb-5 mt-2"}),t._v(" "),e(c.a,{staticClass:"py-0"},[e(T.a,{attrs:{placeholder:"Title",solo:"",flat:"","hide-details":""},model:{value:t.taskTitle,callback:function(e){t.taskTitle=e},expression:"taskTitle"}})],1),t._v(" "),e(k.a,{staticClass:"my-3"}),t._v(" "),e(c.a,{staticClass:"py-0"},[e(_.a,{attrs:{placeholder:"Description",solo:"",flat:"","hide-details":""},model:{value:t.taskText,callback:function(e){t.taskText=e},expression:"taskText"}}),t._v(" "),e(m.a,{staticClass:"mt-4 select--box",attrs:{chips:"",solo:"",flat:"",multiple:"",items:t.items,"menu-props":{top:!1,offsetY:!0},label:"labels","hide-details":""},scopedSlots:t._u([{key:"item",fn:function(l){var o=l.item;return[e(v.a,{attrs:{link:"",dense:""},on:{click:function(e){return t.selection(o)}}},[e(h.a,[e(h.c,[e(r.a,{attrs:{label:"",small:"",outlined:"",color:"groceries"!=o?"primary":"orange"}},[t._v(t._s(o))])],1)],1)],1)]}}]),model:{value:t.taskLabels,callback:function(e){t.taskLabels=e},expression:"taskLabels"}})],1),t._v(" "),e(k.a,{staticClass:"my-5"}),t._v(" "),e(c.a,{staticClass:"align-center justify-space-between d-flex"},[e("div",{staticClass:"cancel-btn"},[e(o.a,{attrs:{outlined:"",small:""},on:{click:function(e){return e.stopPropagation(),t.closeDialog.apply(null,arguments)}}},[e("span",{staticClass:"text-capitalize"},[t._v("cancel")])])],1),t._v(" "),e("div",{staticClass:"edit-btn"},[e(o.a,{attrs:{color:"primary",small:"",loading:t.isBtnClicked,disabled:t.isBtnClicked},on:{click:t.editTask}},[e("span",{staticClass:"text-capitalize"},[t._v("save")])])],1)])],1)],1)}),[],!1,null,"61f7e2f3",null);e.default=component.exports},566:function(t,e,l){"use strict";l.r(e);var o=l(612),n=l(233),c=l(449),r=l(446),d=l(182),k=l(206),f=l(135),v=l(207),h=l(65),m=l(208),T=l(111),_=l(598),x={data:function(){return{activeTab:"tasks",label:"",addTaskDialog:!1}},props:{todoLinks:Array,getSelectedTab:{type:Function,default:function(){return"Default function"}},getTaskDialog:{type:Function,default:function(){return"default function"}},isDrawer:{default:!1},closeNavigation:{type:Function,default:function(){}}},methods:{filterByLabel:function(label){},testing:function(){}}},C=l(73),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"fill-height mx-auto",attrs:{"max-width":t.isDrawer?"":240,flat:t.isDrawer}},[e(r.a,[e(n.a,{attrs:{color:"primary",block:"","min-height":"45",depressed:""},on:{click:function(e){return e.stopPropagation(),t.getTaskDialog(!0)}}},[e("span",{staticClass:"text-capitalize"},[t._v("add task")])])],1),t._v(" "),e(r.a,{staticClass:"py-0"},[e(k.a,{staticClass:"pa-0",attrs:{nav:"",dense:""}},[e(m.a,{attrs:{color:"primary"},on:{change:function(e){t.getSelectedTab(t.activeTab),t.closeNavigation("changed")}},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[t._l(t.todoLinks,(function(l,n){return l.isLabel?t._e():e(f.a,{key:n,attrs:{value:l.title,link:""}},[e(T.a,{staticClass:"mr-3"},[e(d.a,{attrs:{size:"16"}},[t._v(t._s(l.icon))])],1),t._v(" "),e(h.a,[e(h.c,{staticClass:"text-capitalize"},[t._v(t._s(l.title))])],1),t._v(" "),e(v.a,{},[e(o.a,{staticStyle:{"min-height":"25px"},attrs:{content:0!=n?t.$store.getters["todo/G_completedTasks"]:t.$store.getters["todo/G_notCompletedTasks"],value:0!=n?t.$store.getters["todo/G_completedTasks"]:t.$store.getters["todo/G_notCompletedTasks"],inline:""}})],1)],1)})),t._v(" "),e(_.a,[t._v("LABELS")]),t._v(" "),t._l(t.todoLinks,(function(l,o){return l.isLabel?e(f.a,{key:o,attrs:{link:"",value:l.title}},[e(T.a,{staticClass:"mr-3"},[e(d.a,{attrs:{color:"groceries"!=l.title?"primary":"orange",size:"16"}},[t._v("mdi-label-outline")])],1),t._v(" "),e(h.a,[e(h.c,{staticClass:"text-capitalize"},[t._v(t._s(l.title))])],1)],1):t._e()}))],2)],1)],1)],1)}),[],!1,null,"6e307f78",null);e.default=component.exports},567:function(t,e,l){"use strict";l.r(e);var o=l(449),n=l(446),c=l(176),r=l(115),d=l(629),k=(l(25),l(221),l(12),l(3),l(42),l(60),{data:function(){return{search:""}},props:{activeTab:{default:"tasks"}},computed:{filteredTasks:function(){var t,e=this,l=this.$store.state.todo.S_tasks,o=this.search.toLowerCase();return t="tasks"!=this.activeTab&&("completed"!=this.activeTab&&("fun"==this.activeTab||this.activeTab,!0)),l.filter((function(l){var s=l.title.includes(o);return l.labels||(l.labels=[]),t||"tasks"!=e.activeTab?t||"completed"!=e.activeTab?t?l.labels.includes(e.activeTab)&&s:l&&s:l.done&&s:!l.done&&s}))}}}),f=l(73),component=Object(f.a)(k,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"main-shadow",attrs:{"min-height":"470"}},[e(n.a,{staticClass:"pa-0"},[e(d.a,{staticClass:"pa-1 main-shadow py-4",staticStyle:{position:"relative","z-index":"2"},attrs:{"hide-details":"",solo:"",flat:"",placeholder:"Filter tasks","prepend-inner-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e(r.f,{staticClass:"d-flex justify-center align-center",attrs:{group:"","leave-absolute":"","hide-on-leave":""}},[0!=t.$store.getters["todo/G_notCompletedTasks"]||"tasks"!=t.activeTab?e("TodoList",{key:"1",attrs:{filteredTasks:t.filteredTasks}}):e(c.a,{key:"2",attrs:{src:l(553),height:"400px",width:"300px",contain:""}})],1)],1)}),[],!1,null,"7e6212f2",null);e.default=component.exports;installComponents(component,{TodoList:l(511).default})},627:function(t,e,l){"use strict";l.r(e);var o=l(464),n=l(233),c=l(517),r=l(555),d=l(182),k=l(462),f=l(516),v=l(223),h=l(38),m=(l(119),{data:function(){return{activeTab:"tasks",tasks:"",isBtnClicked:!1,todoNavigation:!1,taskDialog:!1,todoLinks:[{title:"tasks",icon:"mdi-checkbox-marked-circle-outline",isLabel:!1},{title:"completed",icon:"mdi-check",isLabel:!1},{title:"work",color:"primary",isLabel:!0},{title:"fun",color:"primary",isLabel:!0},{title:"groceries",color:"orange",isLabel:!0}]}},methods:{loadTasks:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/v1/tasks");case 2:l=e.sent,t.tasks=l.data;case 4:case"end":return e.stop()}}),e)})))()},getSelectedTab:function(t){this.activeTab=t},getTaskDialog:function(t){this.taskDialog=t},closeNavigation:function(t){this.todoNavigation=!1}},mounted:function(){this.loadTasks()}}),T=l(73),component=Object(T.a)(m,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"Todo"}},[e(r.a,{attrs:{fluid:!t.$vuetify.breakpoint.lgAndUp}},[e("TodoTaskDialog",{attrs:{taskDialog:t.taskDialog,getTaskDialog:t.getTaskDialog}}),t._v(" "),e("TodoEditDialog"),t._v(" "),e(f.a,{attrs:{dense:""}},[t.$vuetify.breakpoint.lgAndUp?e(c.a,{attrs:{lg:"3"}},[e("TodoLeftSide",{attrs:{getTaskDialog:t.getTaskDialog,getSelectedTab:t.getSelectedTab,todoLinks:t.todoLinks}})],1):e(c.a,{staticClass:"mb-3",attrs:{cols:"12"}},[e(o.a,{staticClass:"main-shadow",attrs:{color:"white"}},[e(n.a,{attrs:{small:"",width:"47",height:"47",fab:"",text:""},on:{click:function(e){t.todoNavigation=!t.todoNavigation}}},[e(d.a,{attrs:{size:"20"}},[t._v("mdi-tune-variant")])],1),t._v(" "),e(v.a,{staticClass:"font-weight-bold pl-3"},[t._v("\n            Todo App\n          ")])],1)],1),t._v(" "),e(c.a,{attrs:{lg:"9"}},[e("TodoRightSide",{attrs:{activeTab:t.activeTab}})],1)],1)],1),t._v(" "),e(k.a,{attrs:{app:"",fixed:"","disable-resize-watcher":"","disable-route-watcher":""},model:{value:t.todoNavigation,callback:function(e){t.todoNavigation=e},expression:"todoNavigation"}},[e("TodoLeftSide",{attrs:{getTaskDialog:t.getTaskDialog,getSelectedTab:t.getSelectedTab,closeNavigation:t.closeNavigation,todoLinks:t.todoLinks,isDrawer:!0}})],1),t._v(" "),t._v("\n  tasks: "+t._s(t.tasks)+"\n  ")],1)}),[],!1,null,"286feaf8",null);e.default=component.exports;installComponents(component,{TodoTaskDialog:l(564).default,TodoEditDialog:l(565).default,TodoLeftSide:l(566).default,TodoRightSide:l(567).default})},688:function(t,e,l){"use strict";l.r(e);var o=l(555),n={},c=l(73),component=Object(c.a)(n,(function(){var t=this._self._c;return t(o.a,[t("Todo")],1)}),[],!1,null,"1a98c4b0",null);e.default=component.exports;installComponents(component,{Todo:l(627).default})}}]);