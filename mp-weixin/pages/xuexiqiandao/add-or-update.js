(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuexiqiandao/add-or-update"],{"0ca4":function(n,e,t){},"23ad":function(n,e,t){"use strict";(function(n){t("0993"),t("921b");i(t("66fd"));var e=i(t("2766"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},2766:function(n,e,t){"use strict";t.r(e);var i=t("2a24"),a=t("67ce");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("8746");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1e2eed76",null,!1,i["a"],o);e["default"]=s.exports},"2a24":function(n,e,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"8bc2"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},"67ce":function(n,e,t){"use strict";t.r(e);var i=t("c382"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},8746:function(n,e,t){"use strict";var i=t("0ca4"),a=t.n(i);a.a},c382:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,o){try{var u=n[r](o),s=u.value}catch(c){return void t(c)}u.done?e(s):Promise.resolve(s).then(i,a)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var o=n.apply(e,t);function u(n){r(o,i,a,u,s,"next",n)}function s(n){r(o,i,a,u,s,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("8bc2"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{zhanghao:"",xingming:"",zhaopian:"",leixing:"",qiandaoshijian:"",qiandaodidian:"",userid:""},leixingOptions:[],leixingIndex:0,user:{},ro:{zhanghao:!1,xingming:!1,zhaopian:!1,leixing:!1,qiandaoshijian:!1,qiandaodidian:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(){var e=o(i.default.mark((function e(t){var a,r,o,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.qiandaoshijian=this.$utils.getCurDateTime(),a=n.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:if(r=e.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.leixingOptions="签到,签退".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=17;break}return this.ruleForm.id=t.id,e.next=15,this.$api.info("xuexiqiandao",this.ruleForm.id);case 15:r=e.sent,this.ruleForm=r.data;case 17:if(!t.cross){e.next=52;break}o=n.getStorageSync("crossObj"),e.t0=i.default.keys(o);case 20:if((e.t1=e.t0()).done){e.next=52;break}if(u=e.t1.value,"zhanghao"!=u){e.next=26;break}return this.ruleForm.zhanghao=o[u],this.ro.zhanghao=!0,e.abrupt("continue",20);case 26:if("xingming"!=u){e.next=30;break}return this.ruleForm.xingming=o[u],this.ro.xingming=!0,e.abrupt("continue",20);case 30:if("zhaopian"!=u){e.next=34;break}return this.ruleForm.zhaopian=o[u],this.ro.zhaopian=!0,e.abrupt("continue",20);case 34:if("leixing"!=u){e.next=38;break}return this.ruleForm.leixing=o[u],this.ro.leixing=!0,e.abrupt("continue",20);case 38:if("qiandaoshijian"!=u){e.next=42;break}return this.ruleForm.qiandaoshijian=o[u],this.ro.qiandaoshijian=!0,e.abrupt("continue",20);case 42:if("qiandaodidian"!=u){e.next=46;break}return this.ruleForm.qiandaodidian=o[u],this.ro.qiandaodidian=!0,e.abrupt("continue",20);case 46:if("userid"!=u){e.next=50;break}return this.ruleForm.userid=o[u],this.ro.userid=!0,e.abrupt("continue",20);case 50:e.next=20;break;case 52:this.styleChange();case 53:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},qiandaoshijianConfirm:function(n){console.log(n),this.ruleForm.qiandaoshijian=n.result,this.$forceUpdate()},leixingChange:function(n){this.leixingIndex=n.target.value,this.ruleForm.leixing=this.leixingOptions[this.leixingIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("xuexiqiandao",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("xuexiqiandao",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])}},[["23ad","common/runtime","common/vendor"]]]);