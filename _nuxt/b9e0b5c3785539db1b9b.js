(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{299:function(t,e,n){"use strict";n(17);var o=n(1),r=n(0);e.a=r.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.c)(this.height),n=Object(o.c)(this.minHeight),r=Object(o.c)(this.minWidth),l=Object(o.c)(this.maxHeight),c=Object(o.c)(this.maxWidth),d=Object(o.c)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},313:function(t,e,n){var content=n(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("74d835da",content,!0,{sourceMap:!1})},314:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},318:function(t,e,n){"use strict";n(316),n(313);var o=n(12);n(17);var r=n(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,n=!0,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t):{};var t,e,n}}}),l=n(299),c=n(14),d=n(7),v=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},h=Object(d.a)(o.a,r,l.a,c.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return v({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),f=n(64),m=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(d.a)(f.a,h).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return m({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},h.options.computed.classes.call(this))},styles:function(){var style=m({},h.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),n=e.tag,data=e.data;return data.style=this.styles,t(n,this.setBackgroundColor(this.color,data),this.$slots.default)}})},320:function(t,e,n){var content=n(321);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("234f3ccc",content,!0,{sourceMap:!1})},321:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1);width:100%;z-index:6;outline:none}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog__activator,.v-dialog__activator *{cursor:pointer}.v-dialog__container{display:inline-block;vertical-align:middle}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;max-width:100%;flex-direction:column}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:1 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},322:function(t,e,n){"use strict";var o=n(0);e.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,n=e.props,o=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,o)}})},357:function(t,e,n){var content=n(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("62db264a",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(31),n(32),n(17),n(320);var o=n(67),r=n(125),l=n(129),c=n(325),d=n(131),v=n(34),h=n(124),f=n(1),m=n(326),x=n(9),y=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={name:"v-dialog",directives:{ClickOutside:h.a},mixins:[o.a,r.a,l.a,c.a,d.a,v.a],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return _(t={},("v-dialog "+this.contentClass).trim(),!0),_(t,"v-dialog--active",this.isActive),_(t,"v-dialog--persistent",this.persistent),_(t,"v-dialog--fullscreen",this.fullscreen),_(t,"v-dialog--scrollable",this.scrollable),_(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(f.m)(this,"activator",!0)&&Object(x.a)("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l.a.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===f.q.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=event.target;if(![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(e)})){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,n=e&&e.elm;if(n)return n}Object(x.a)("No activator found")},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(f.m)(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,n=[],data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(data.style={maxWidth:"none"===this.maxWidth?void 0:Object(f.c)(this.maxWidth),width:"auto"===this.width?void 0:Object(f.c)(this.width)}),n.push(this.genActivator());var dialog=t("div",data,this.showLazyContent(this.$slots.default));return this.transition&&(dialog=t("transition",{props:{name:this.transition,origin:this.origin}},[dialog])),n.push(t("div",{class:this.contentClasses,attrs:y({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(m.a,{props:{root:!0,light:this.light,dark:this.dark}},[dialog])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}}},492:function(t,e,n){"use strict";var o=n(357);n.n(o).a},493:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-input{height:70px}.date .v-label--active{background-color:#fff}",""])},522:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1,address:["Thái Nguyên","Bắc Giang","Lạng Sơn"],district:["Phổ Yên"],txtRules:[function(t){return!!t||"Không được để trống"}],phoneRules:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05|016)+([0-9]{8})\b)/g.test(t)||"Sai định dạng số điện thoại"}],emailRules:[function(t){return!!t||"Email không được để trống"},function(t){return/.+@.+/.test(t)||"Chưa đúng định dạng mail"}]}}},r=(n(492),n(8)),l=n(20),c=n.n(l),d=n(117),v=n(318),h=n(322),f=n(113),m=n(518),x=n(377),y=n(114),_=n(512),w=n(108),k=n(510),C=n(284),O=n(513),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticStyle:{margin:"0 auto"},attrs:{flat:"",width:"873px",height:"694px"}},[n("v-form",[n("v-layout",{attrs:{"justify-center":""}},[n("v-card-title",{staticClass:"pt-4"},[n("h2",{staticClass:"title font-weight-light"},[t._v("Sửa thông tin đơn vị vận tải")])])],1),t._v(" "),n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("h3",{staticClass:"subheading font-weight-light"},[t._v("Sửa thông tin chính")])])],1),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Tên người đại diện",required:"",rules:t.txtRules}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Website",required:"",rules:t.txtRules}})],1)],1),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Chức vụ",required:"",rules:t.txtRules}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{outline:"",autocomplete:"",required:"","single-line":"",label:"Tỉnh/ Thành phố",items:t.address,rules:t.txtRules}})],1)],1),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Số điện thoại",required:"",rules:t.phoneRules}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{outline:"",autocomplete:"",required:"","single-line":"",label:"Huyện",items:t.district,rules:t.txtRules}})],1)],1),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Email",required:"",rules:t.emailRules}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Địa chỉ cụ thể",required:"",rules:t.txtRules}})],1)],1)],1),t._v(" "),n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("h3",{staticClass:"subheading font-weight-light"},[t._v("Sửa thông tin GPKD")])])],1),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Số giấy phép",required:"",rules:t.txtRules}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-dialog",{ref:"dialog",attrs:{"return-value":t.date,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({staticClass:"date",attrs:{label:"Ngày cấp","append-icon":"event",right:"",readonly:"",outline:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},o))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1)],1),t._v(" "),n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Nơi cấp",required:"",rules:t.txtRules}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("v-text-field",{attrs:{outline:"",label:"Lần cấp",required:"",type:"number",rules:t.txtRules}})],1)],1),t._v(" "),n("v-layout",[n("v-btn",{attrs:{flat:"",color:"primary",to:"/",outline:""}},[t._v("Hủy")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{slot:"activator",color:"primary"},on:{click:t.validate},slot:"activator"},[t._v("Lưu")]),t._v(" "),n("v-dialog",{attrs:{width:"282px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("cart-success-vue")],1)],1)],1)],1)],1)},[],!1,null,null,null),S=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardTitle:h.a,VContainer:f.a,VDatePicker:m.a,VDialog:x.a,VFlex:y.a,VForm:_.a,VLayout:w.a,VSelect:k.a,VSpacer:C.a,VTextField:O.a});var A={layout:"none",components:{suaTTDVVT:S}},j=n(106),$=Object(r.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("v-content",[e("suaTTDVVT")],1)},[],!1,null,null,null);e.default=$.exports;c()($,{VContent:j.a})}}]);