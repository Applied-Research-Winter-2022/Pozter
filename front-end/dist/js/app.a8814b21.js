(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],d=0,v=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"33f8":function(e,t,r){e.exports=r.p+"img/canvas_1.07ac1a42.jpg"},4743:function(e,t,r){e.exports=r.p+"img/poz.01937be9.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isPlayer?r("router-view"):r("v-app",[r("navbar"),r("v-main",{staticClass:"grey lighten-3"},[r("router-view")],1)],1)],1)},o=[],s=(r("caad"),r("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{attrs:{color:"deep-orange lighten-1"}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-avatar",{staticClass:"mr-5 ml-5",attrs:{size:"32",rounded:""}},[a("img",{staticStyle:{cursor:"pointer"},attrs:{src:r("4743"),contain:"",alt:"Pozter"},on:{click:e.returnHome}})]),a("v-toolbar-title",[e._v(e._s(e.currentRouteName))])],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},[a("v-list-item-group",{attrs:{"active-class":"indigo--text text--accent-4"}},e._l(e.links,(function(t){return a("v-list-item",{key:t.title},[a("v-list-item-icon",[a("v-icon",[e._v(" "+e._s(t.icon)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title)+" ")])],1)],1)})),1)],1)],1)],1)}),c=[],i=(r("b0c0"),{data:function(){return{drawer:!1,links:[{title:"Home",icon:"mdi-home"},{title:"Account",icon:"mdi-account-multiple"},{title:"Campaigns",icon:"mdi-bullhorn"},{title:"Reports",icon:"mdi-clipboard-text"},{title:"Logout",icon:"mdi-logout"}]}},methods:{returnHome:function(){this.$router.push("/").catch((function(){}))}},computed:{currentRouteName:function(){return this.$route.name}}}),l=i,u=r("2877"),d=r("6544"),v=r.n(d),p=r("5bc1"),f=r("8212"),h=r("132d"),b=r("8860"),m=r("da13"),g=r("5d23"),x=r("1baa"),S=r("34c3"),y=r("f774"),_=r("71d9"),w=r("2a7f"),O=Object(u["a"])(l,s,c,!1,null,"c4d6a3bc",null),C=O.exports;v()(O,{VAppBarNavIcon:p["a"],VAvatar:f["a"],VIcon:h["a"],VList:b["a"],VListItem:m["a"],VListItemContent:g["a"],VListItemGroup:x["a"],VListItemIcon:S["a"],VListItemTitle:g["b"],VNavigationDrawer:y["a"],VToolbar:_["a"],VToolbarTitle:w["a"]});var M={name:"App",data:function(){return{isPlayer:!0}},components:{Navbar:C},created:function(){this.$route.path.includes("/play")||(this.isPlayer=!1)}},V=M,j=r("7496"),k=r("f6c4"),P=Object(u["a"])(V,n,o,!1,null,null,null),I=P.exports;v()(P,{VApp:j["a"],VMain:k["a"]});var B=r("8c4f"),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-main",[r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs6:"","pa-6":""}},[r("div",{staticClass:"text-xs-center"},[r("router-link",{attrs:{to:"/create"}},[r("v-btn",{staticClass:"mx-auto",attrs:{id:"button-create",color:"deep-orange lighten-1"}},[e._v(" New Canvas ")])],1)],1)])],1)],1)],1)],1)},U=[],N={name:"Home",props:{},data:function(){return{}},components:{},computed:{},methods:{}},T=N,$=r("8336"),E=r("a523"),A=r("0e8f"),F=r("a722"),L=Object(u["a"])(T,R,U,!1,null,"08b7bc48",null),H=L.exports;v()(L,{VBtn:$["a"],VContainer:E["a"],VFlex:A["a"],VLayout:F["a"],VMain:k["a"]});var z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{sm:"12"}},[r("h2",{staticClass:"d-flex justify-center",staticStyle:{border:"solid #cccccc"}},[e._v(" Billboard Pozter Selector ")]),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{sm:"10"}},[r("v-row",e._l(e.billboards,(function(e){return r("v-col",{key:e.id,attrs:{cols:6}},[r("BillboardCard",{attrs:{id:e.id,billboardName:e.billboard_name,venue:e.venue}})],1)})),1)],1)],1)],1)],1)],1)},q=[],J=r("1da1"),X=(r("96cf"),r("e9c4"),r("d4ec")),D=r("bee2"),Y=r("bc3a"),G=r.n(Y),W={get dataApi(){return G.a.create({baseURL:"http://localhost:8000",headers:{"Content-Type":"application/json"}})}},K=function(){function e(){Object(X["a"])(this,e)}return Object(D["a"])(e,[{key:"fetchBillboardId",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.dataApi.get("/billboard/id/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data[0]);case 7:return e.prev=7,e.t0=e["catch"](0),console.error("Failed to fetch billboard - ",e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"fetchBillboards",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.dataApi.get("/billboards");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e["catch"](0),console.error("Failed to fetch billboards - ",e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"fetchUserBillboard",value:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.dataApi.get("/user_billboard/full/id/".concat(t));case 3:return r=e.sent,console.log(r),e.abrupt("return",r.data[0]);case 8:return e.prev=8,e.t0=e["catch"](0),console.error("Failed to fetch billboard - ",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),Q=new K,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{hover:!0},on:{click:e.handleClick}},[a("v-img",{attrs:{src:r("33f8"),contain:"",height:"200px"}}),a("v-card-title",{staticClass:"justify-center",domProps:{textContent:e._s(e.billboardName)}})],1)},ee=[],te={name:"Step1Billboard",props:{id:String,billboardName:String,venue:String},data:function(){return{}},methods:{handleClick:function(){this.$router.push({path:"create/2",query:{billboardId:this.id}})}}},re=te,ae=r("b0af"),ne=r("99d9"),oe=r("adda"),se=Object(u["a"])(re,Z,ee,!1,null,null,null),ce=se.exports;v()(se,{VCard:ae["a"],VCardTitle:ne["c"],VImg:oe["a"]});var ie={name:"Step1Billboard",components:{BillboardCard:ce},data:function(){return{billboard:{},billboards:[]}},mounted:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");case 2:return console.log("billboard: "+JSON.stringify(e.billboard)),t.next=5,e.fetchBillboards();case 5:console.log("billboards: "+JSON.stringify(e.billboards));case 6:case"end":return t.stop()}}),t)})))()},computed:{},methods:{fetchBillboardId:function(e){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Q.fetchBillboardId(e);case 2:t.billboard=r.sent;case 3:case"end":return r.stop()}}),r)})))()},fetchBillboards:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Q.fetchBillboards();case 2:e.billboards=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},le=ie,ue=r("62ad"),de=r("0fd9"),ve=Object(u["a"])(le,z,q,!1,null,"786f0bee",null),pe=ve.exports;v()(ve,{VCol:ue["a"],VContainer:E["a"],VRow:de["a"]});var fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-flex",[r("div",{staticClass:"screens pa-12"},[r("v-row",[r("v-col",[r("v-select",{attrs:{items:e.screens,label:"Select a Screen Canvas",solo:"","return-object":""},model:{value:e.selectedScreen,callback:function(t){e.selectedScreen=t},expression:"selectedScreen"}})],1)],1)],1)])],1),r("v-flex",{attrs:{xs12:"","pa-4":""}},[r("v-card-actions",[r("v-spacer"),r("v-row",{staticClass:"mb-6"},[r("v-col",{attrs:{md:"2","offset-md":"8"}},[r("div",[r("router-link",{attrs:{to:"/"}},[r("v-btn",[e._v("Cancel")])],1)],1)]),r("v-col",{attrs:{md:"1","offset-md":"1"}},[r("div",[r("router-link",{attrs:{to:"/create/3"}},[r("v-btn",{attrs:{color:"deep-orange lighten-1"}},[e._v("Next")])],1)],1)])],1)],1)],1)],1)},he=[],be=(r("99af"),{name:"Step2Canvas",props:{},data:function(){return{screens:[{text:"One Screen Canvas",value:"oneScreen"},{text:"Three Screens Canvas",value:"threeScreens"}],selectedScreen:null}},mounted:function(){console.log(this.$route.query)},computed:{},methods:{directToScreen:function(){alert("Label: ".concat(this.selectedScreen.text,"; Value: ").concat(this.selectedScreen.value)),console.log("Label: ",this.selectedScreen.texy),console.log("Value: ",this.selectedScreen.value)}}}),me=be,ge=r("b974"),xe=r("2fa4"),Se=Object(u["a"])(me,fe,he,!1,null,null,null),ye=Se.exports;v()(Se,{VBtn:$["a"],VCardActions:ne["a"],VCol:ue["a"],VContainer:E["a"],VFlex:A["a"],VRow:de["a"],VSelect:ge["a"],VSpacer:xe["a"]});var _e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-row",[r("v-col",[r("v-file-input",{attrs:{multiple:"",label:"Upload a Screen Canvas",chips:""},on:{change:e.onAddFiles}}),e.files.length>0?r("v-card",[r("v-card-text",e._l(e.files,(function(t){return r("v-alert",{key:t.public_id,attrs:{type:"success"}},[e._v(" File uploaded: "+e._s(t.original_filename)+" at "+e._s(t.url)+" ")])})),1)],1):e._e(),e.isError?r("v-alert",[e._v(" "+e._s(e.errorText)+" ")]):e._e()],1)],1),r("v-flex",[r("v-col",{attrs:{md:"9"}},[r("v-card-actions",[r("v-spacer"),r("router-link",{attrs:{to:"/create/2"}},[r("v-btn",{staticClass:"mx-3 deep-orange lighten-2"},[e._v("Create Another Screen")])],1),r("router-link",{attrs:{to:"/create/4"}},[r("v-btn",{staticClass:"mx-3 deep-orange lighten-2"},[e._v("Configure Social Media")])],1)],1)],1)],1),r("v-flex",{attrs:{xs12:"","pa-4":""}},[r("v-card-actions",[r("v-spacer"),r("v-row",{staticClass:"mb-6"},[r("v-col",{attrs:{md:"2","offset-md":"8"}},[r("div",[r("router-link",{attrs:{to:"/"}},[r("v-btn",[e._v("Cancel")])],1)],1)]),r("v-col",{attrs:{md:"1","offset-md":"1"}},[r("div",[r("router-link",{attrs:{to:"/create/done"}},[r("v-btn",{attrs:{color:"deep-orange lighten-1"}},[e._v("Next")])],1)],1)])],1)],1)],1)],1)],1)},we=[],Oe=(r("d3b7"),r("159b"),{name:"Step3UserContent",props:{},data:function(){return{files:[],isError:!1,errorText:null}},mounted:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchBillboardId("814f8704-9462-11ec-abf7-9f7d873f0076");case 2:return t.next=4,e.fetchBillboards();case 4:case"end":return t.stop()}}),t)})))()},computed:{},methods:{fetchBillboardId:function(e){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Q.fetchBillboardId(e);case 2:t.billboard=r.sent;case 3:case"end":return r.stop()}}),r)})))()},fetchBillboards:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Q.fetchBillboards();case 2:e.billboards=t.sent;case 3:case"end":return t.stop()}}),t)})))()},onAddFiles:function(e){var t=this;e.length>0&&e.forEach((function(e){window.console.log(e),t.uploadFileToCloudinary(e).then((function(e){t.files.push(e)}))}))},uploadFileToCloudinary:function(e){return new Promise((function(t,r){var a=this,n="https://api.cloudinary.com/v1_1/pozter/upload",o="affgwoft",s=new FormData;s.append("upload_preset",o),s.append("folder","cloudinary-demo"),s.append("file",e);var c=new XMLHttpRequest;c.open("POST",n,!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.onreadystatechange=function(){if(4===c.readyState&&200===c.status){var e=JSON.parse(c.responseText);t(e)}if(200!==c.status){var n=JSON.parse(c.responseText),o=n.error.message;a.errorText="error uploading files "+o,a.isError=!0,r(o)}},c.onerror=function(e){alert("error: "+e),r(e)},c.send(s)}))}}}),Ce=Oe,Me=r("0798"),Ve=r("23a7"),je=Object(u["a"])(Ce,_e,we,!1,null,null,null),ke=je.exports;v()(je,{VAlert:Me["a"],VBtn:$["a"],VCard:ae["a"],VCardActions:ne["a"],VCardText:ne["b"],VCol:ue["a"],VContainer:E["a"],VFileInput:Ve["a"],VFlex:A["a"],VRow:de["a"],VSpacer:xe["a"]});var Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-flex",[r("div",{staticClass:"hashtag pa-12"},[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Enter a hashtag",color:"indigo darken-4","full-width":"",solo:"",width:"80px",height:"20px"},model:{value:e.hashtag,callback:function(t){e.hashtag=t},expression:"hashtag"}})],1)],1)],1)])],1),r("v-flex",{attrs:{xs12:"","pa-4":""}},[r("v-card-actions",[r("v-spacer"),r("v-row",{staticClass:"mb-6"},[r("v-col",{attrs:{md:"2","offset-md":"8"}},[r("div",[r("router-link",{attrs:{to:"/"}},[r("v-btn",[e._v("Cancel")])],1)],1)]),r("v-col",{attrs:{md:"1","offset-md":"1"}},[r("div",[r("router-link",{attrs:{to:"/create/done"}},[r("v-btn",{attrs:{color:"deep-orange lighten-1"}},[e._v("Next")])],1)],1)])],1)],1)],1)],1)},Ie=[],Be={name:"Step4SocialMedia",props:{},data:function(){return{hashtag:""}},computed:{},methods:{}},Re=Be,Ue=r("8654"),Ne=Object(u["a"])(Re,Pe,Ie,!1,null,"193062cd",null),Te=Ne.exports;v()(Ne,{VBtn:$["a"],VCardActions:ne["a"],VCol:ue["a"],VContainer:E["a"],VFlex:A["a"],VRow:de["a"],VSpacer:xe["a"],VTextField:Ue["a"]});var $e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{sm:"12"}},[r("h2",{staticClass:"d-flex justify-center",staticStyle:{border:"solid #cccccc"}},[e._v(" Success ")]),r("p",{staticClass:"d-flex justify-center"},[e._v(" Your billboard was created successfully. It can be viewed at: ")]),r("strong",{staticClass:"d-flex justify-center"},[r("a",{attrs:{href:e.userBillboardUrl}},[e._v("http://localhost:8080/play/"+e._s(e.userBillboardId))])])])],1)],1)},Ee=[],Ae={name:"Step5Success",props:{},data:function(){return{userBillboardId:"d12cb650-9f40-11ec-bbaa-6fe27c042acc"}},computed:{userBillboardUrl:function(){return"http://localhost:8080/play/"+this.userBillboardId}},methods:{}},Fe=Ae,Le=Object(u["a"])(Fe,$e,Ee,!1,null,"2fa80579",null),He=Le.exports;v()(Le,{VCol:ue["a"],VContainer:E["a"],VRow:de["a"]});var ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("UserBillboard",{attrs:{userScreen:e.currentUserScreen,screenCanvas:e.currentScreenCanvas,socialMediaPost:e.currentSocialMediaPost,socialMediaOverlay:e.currentSocialMediaOverlay}})},qe=[],Je=r("daa8"),Xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"absolute",top:"0",left:"0","background-color":"red"},style:e.styles},[r("UserScreen",{attrs:{userScreen:e.userScreen,socialMediaOverlay:e.socialMediaOverlay,socialMediaPost:e.socialMediaPost}})],1)},De=[],Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"absolute",top:"0",left:"0"},style:e.styles},[r("SocialMediaOverlay",{attrs:{socialMediaOverlay:e.socialMediaOverlay,socialMediaPost:e.socialMediaPost}})],1)},Ge=[],We=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"absolute","background-color":"rgba(255, 255, 255, 0.5)"},style:e.styles},[r("SocialMediaPost",{attrs:{socialMediaPost:e.socialMediaPost}})],1)},Ke=[],Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"font-size":"120pt"}},[r("div",{staticStyle:{"padding-left":"2.5%"}},[e._v(' "'+e._s(e.content)+'"" ')]),r("div",{staticStyle:{"padding-left":"5%"}},[e._v(" - "+e._s(e.user)+" ")])])},Ze=[],et={name:"",props:{socialMediaPost:Object},data:function(){return{}},computed:{user:function(){return this.socialMediaPost?this.socialMediaPost.content.user:""},content:function(){return this.socialMediaPost?this.socialMediaPost.content.content:""}},methods:{}},tt=et,rt=Object(u["a"])(tt,Qe,Ze,!1,null,"fac77f92",null),at=rt.exports,nt={name:"",components:{SocialMediaPost:at},props:{socialMediaOverlay:Object,socialMediaPost:Object},data:function(){return{}},computed:{styles:function(){return console.log(this.socialMediaOverlay),this.socialMediaOverlay?{width:this.socialMediaOverlay.width,height:this.socialMediaOverlay.height,top:this.socialMediaOverlay.translateY,left:this.socialMediaOverlay.translateX}:null}},methods:{}},ot=nt,st=Object(u["a"])(ot,We,Ke,!1,null,"3a1b94c2",null),ct=st.exports,it={name:"UserScreen",components:{SocialMediaOverlay:ct},props:{userScreen:Object,socialMediaOverlay:Object,socialMediaPost:Object},data:function(){return{}},computed:{styles:function(){return this.userScreen&&"image"===this.userScreen.config.type?{width:this.userScreen.config.width,height:this.userScreen.config.height,backgroundImage:"url('".concat(this.userScreen.config.asset,"')"),backgroundSize:"100% 100%"}:null}},methods:{}},lt=it,ut=Object(u["a"])(lt,Ye,Ge,!1,null,"047ce69e",null),dt=ut.exports,vt={name:"UserBillboard",components:{UserScreen:dt},props:{userScreen:Object,screenCanvas:Object,socialMediaPost:Object,socialMediaOverlay:Object},data:function(){return{}},computed:{styles:function(){if(this.screenCanvas){var e=this.screenCanvas.config.canvases[0];return{width:e.width,height:e.height}}return null}}},pt=vt,ft=Object(u["a"])(pt,Xe,De,!1,null,"6c8f58c2",null),ht=ft.exports,bt={name:"Home",components:{UserBillboard:ht},props:{},data:function(){return{userBillboard:{},screenCanvases:{},userScreens:[],socialMediaPosts:[],socket:null,screenInterval:null,postInterval:null,currentUserScreenIndex:2,currentSocialMediaPostIndex:0}},created:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.params.id,t.next=3,Q.fetchUserBillboard(r);case 3:for(n in a=t.sent,e.userBillboard.socket_url=a.socket_url,e.userScreens=a.user_screens,e.userScreens)o=e.userScreens[n],o.screen_canvases&&(s=o.screen_canvases[0],e.screenCanvases[s.id]=s);e.socialMediaPosts=a.social_media_content[0].social_media_posts,e.socket=Object(Je["a"])(e.userBillboard.socketurl),e.socket.on("user-screen-next",e.handleUserScreenNext),e.socket.on("social-media-next",e.handleSocialMediaNext),e.screenInterval=setInterval(e.handleUserScreenNext,1e4),e.screenInterval=setInterval(e.handleSocialMediaNext,4e3);case 13:case"end":return t.stop()}}),t)})))()},computed:{currentUserScreen:function(){return this.userScreens?this.userScreens[this.currentUserScreenIndex]:null},currentSocialMediaPost:function(){return this.socialMediaPosts?this.socialMediaPosts[this.currentSocialMediaPostIndex]:null},currentScreenCanvas:function(){return this.currentUserScreen?this.screenCanvases[this.currentUserScreen.screen_canvas_id]:null},currentSocialMediaOverlay:function(){return this.currentScreenCanvas?this.currentScreenCanvas.config.social_media_overlay:null}},methods:{handleUserScreenNext:function(){this.currentUserScreenIndex===this.userScreens.length-1?this.currentUserScreenIndex=0:this.currentUserScreenIndex++},handleSocialMediaNext:function(){this.currentSocialMediaPostIndex===this.socialMediaPosts.length-1?this.currentSocialMediaPostIndex=0:this.currentSocialMediaPostIndex++}},destroyed:function(){this.socket.disconnect(),clearInterval(this.screenInterval),clearInterval(this.postInterval)}},mt=bt,gt=Object(u["a"])(mt,ze,qe,!1,null,"635c4c3a",null),xt=gt.exports;a["default"].use(B["a"]);var St=[{path:"/",name:"Home",alias:"/home",component:H},{path:"/create",name:"Billboard",component:pe},{path:"/create/2",name:"Canvas",component:ye},{path:"/create/3",name:"User Content",component:ke},{path:"/create/4",name:"Social Media",component:Te},{path:"/create/done",name:"Success",component:He},{path:"/play/:id",name:"PlayerHome",component:xt}],yt=new B["a"]({mode:"history",base:"/",routes:St}),_t=yt,wt=r("2f62");a["default"].use(wt["a"]);var Ot=new wt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ct=r("f309");a["default"].use(Ct["a"]);var Mt=new Ct["a"]({}),Vt=r("5f5b"),jt=r("b1e0"),kt=r("130e");r("f9e3"),r("2dd8");a["default"].use(Vt["a"]),a["default"].use(jt["a"]),a["default"].use(kt["a"],G.a),a["default"].config.productionTip=!1,new a["default"]({router:_t,store:Ot,vuetify:Mt,render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.a8814b21.js.map