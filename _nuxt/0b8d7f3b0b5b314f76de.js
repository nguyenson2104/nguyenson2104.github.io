(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{287:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("08d4b84c",content,!0,{sourceMap:!1})},288:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},290:function(t,e,n){"use strict";var o={props:["breadcrumbsItems"]},l=n(8),r=n(20),c=n.n(r),h=n(331),d=n(107),v=n(285),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBreadcrumbs:h.a,VIcon:d.a,VToolbarItems:v.a})},298:function(t,e,n){"use strict";n(122),n(29),n(15),n(168),n(30),n(31),n(287);var o=n(45);e.a={name:"v-form",mixins:[Object(o.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))}):n.valid=e(input),n},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},299:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("336de78c",content,!0,{sourceMap:!1})},300:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}",""])},301:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("234f3ccc",content,!0,{sourceMap:!1})},302:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1);width:100%;z-index:6;outline:none}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog__activator,.v-dialog__activator *{cursor:pointer}.v-dialog__container{display:inline-block;vertical-align:middle}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;max-width:100%;flex-direction:column}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:1 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},325:function(t,e,n){"use strict";var o={data:function(){return{}},props:{trangThaiHD:{type:String,default:"Chờ xác nhận"},suaAll:{type:Boolean,default:!1},trangthai:{type:String,default:"Đang hoạt động"},dsAllFieldsEdit:{type:Boolean,default:!1},btnExcel:{type:Boolean,default:!1},btnLock:{type:Boolean,default:!1},btnEditAll:{type:Boolean,default:!1},btnPrint:{type:Boolean,default:!1},btnDel:{type:Boolean,default:!1},btnDoiMK:{type:Boolean,default:!1},btnCancel:{type:Boolean,default:!1},linkDoiMK:{type:String,default:""}},methods:{suaDsHuyen:function(){this.$emit("suaDsHuyen")},suaAllFunc:function(){this.$emit("suaAllFunc")},huyAllFunc:function(){this.$emit("huyAllFunc")},validate:function(){this.$emit("validate")}}},l=n(8),r=n(20),c=n.n(r),h=n(117),d=n(114),v=n(107),f=n(285),m=n(282),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDoiMK?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:"",to:t.linkDoiMK}},o),[n("v-icon",[t._v("mdi-key-variant")])],1)]}}],null,!1,25299971)},[t._v(" "),n("span",[t._v("Đổi mật khẩu")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnEditAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAllFunc(),t.suaDsHuyen()}}},o),[n("v-icon",[t._v("edit")])],1)]}}],null,!1,2420839842)},[t._v(" "),n("span",[t._v("Sửa tất cả")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnPrint?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({class:{"v-btn--disabled":t.dsAllFieldsEdit},attrs:{icon:""}},o),[n("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,1897770753)},[t._v(" "),n("span",[t._v("In")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.validate()}}},o),[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,3212056989)},[t._v(" "),n("span",[t._v("Lưu lại")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},o),[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),n("span",[t._v("Hủy bỏ")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"==t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Không hoạt động"}}},o),[n("v-icon",[t._v("lock")])],1)]}}],null,!1,445311523)},[t._v(" "),n("span",[t._v("Khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"!=t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Đang hoạt động"}}},o),[n("v-icon",[t._v("lock_open")])],1)]}}],null,!1,1712601230)},[t._v(" "),n("span",[t._v("Mở khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnExcel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("mdi-file-excel")])],1)]}}],null,!1,512336027)},[t._v(" "),n("span",[t._v("Xuất Excel")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("delete")])],1)]}}],null,!1,2997350483)},[t._v(" "),n("span",[t._v("Xóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnCancel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("cancel")])],1)]}}],null,!1,1769432908)},[t._v(" "),n("span",[t._v("Hủy")])]):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:h.a,VFlex:d.a,VIcon:v.a,VToolbarItems:f.a,VTooltip:m.a})},330:function(t,e,n){"use strict";n(30),n(31),n(17),n(301);var o=n(66),l=n(125),r=n(126),c=n(327),h=n(127),d=n(33),v=n(124),f=n(1),m=n(328),x=n(9),y=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={name:"v-dialog",directives:{ClickOutside:v.a},mixins:[o.a,l.a,r.a,c.a,h.a,d.a],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return _(t={},("v-dialog "+this.contentClass).trim(),!0),_(t,"v-dialog--active",this.isActive),_(t,"v-dialog--persistent",this.persistent),_(t,"v-dialog--fullscreen",this.fullscreen),_(t,"v-dialog--scrollable",this.scrollable),_(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(f.m)(this,"activator",!0)&&Object(x.a)("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r.a.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===f.q.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=event.target;if(![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(e)})){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,n=e&&e.elm;if(n)return n}Object(x.a)("No activator found")},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(f.m)(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,n=[],data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(data.style={maxWidth:"none"===this.maxWidth?void 0:Object(f.c)(this.maxWidth),width:"auto"===this.width?void 0:Object(f.c)(this.width)}),n.push(this.genActivator());var dialog=t("div",data,this.showLazyContent(this.$slots.default));return this.transition&&(dialog=t("transition",{props:{name:this.transition,origin:this.origin}},[dialog])),n.push(t("div",{class:this.contentClasses,attrs:y({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(m.a,{props:{root:!0,light:this.light,dark:this.dark}},[dialog])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}}},331:function(t,e,n){"use strict";n(24),n(299);var o=n(65),l=n(7);var r=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return t={"v-breadcrumbs__item":!0},e=this.activeClass,n=this.disabled,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}}),c=n(1),h=Object(c.f)("v-breadcrumbs__divider","li"),d=n(14),v=n(9),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(l.a)(d.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return f({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(v.d)("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(v.d)("justify-end",'class="justify-end"',this),this.$slots.default&&Object(v.d)("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var n=this.$slots.default[i];n.componentOptions&&"v-breadcrumbs-item"===n.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(n),e=!0):t.push(n)}return t}},genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var o=this.items[i];n.push(o.text),e?t.push(this.$scopedSlots.item({item:o})):t.push(this.$createElement(r,{key:n.join("."),props:o},[o.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},348:function(t,e,n){var content=n(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("de4ba5f6",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";var o=n(348);n.n(o).a},451:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.application[data-v-f58028f2]{background:#fff}.blur-icon[data-v-f58028f2]{color:rgba(0,0,0,.6)!important}.container[data-v-f58028f2]{padding-top:0}.form-suabieudogioxuatben[data-v-f58028f2]{width:600px;padding:24px;background:#fff;border-radius:4px;box-shadow:0 19px 36px rgba(0,0,0,.26)}",""])},541:function(t,e,n){"use strict";n.r(e);n(122);var o=n(290),l=n(325),r={layout:"def_layout_mini_true",data:function(){return{valid:!0,dialog:!1,typeMST:1,suaAll:!1,maSoTuyen:"A",suaTuyen:!1,removeMaSoTuyen:"",tinhNoiDen:"Thái Nguyên",removeTinhNoiDen:"",benNoiDen:"Bx mới",removeBenNoiDen:"",hanhTrinh:"Hà Nội - Thái Nguyên",removeHanhTrinh:"",suaCuLy:!1,cuLy:"120",removeCuLy:"",suaGianCach:!1,gianCach:"30",removeGianCach:"",luuLuong:"200",suaLuuLuong:!1,removeLuuLuong:"",suaBieuDoGioXuatBen:!1,bieuDoGioXuatBen:["07:00","13:00","17:00"],removeBieuDoGioXuatBen:[],soChuyenDangKyTrenThang:"150 chuyến/tháng",soDVVTDangKhaiThac:"3",trangThaiHD:"Chờ xác nhận",dsBx:[],rules:[function(t){return!!t||"Không được để trống"}],breadcrumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Luồng tuyến",disabled:!1,to:"/danh-sach-luong-tuyen"},{text:"Chi tiết thông tin",disabled:!0}],tinh:[{tentinh:"Thái Nguyên",matinh:"tn",maSoTinh:20,itemBen:[{tenBx:"Bx mới",maBx:"bx-tp",maSoBen:14},{tenBx:"Bx Phổ Yên",maBx:"bx-py",maSoBen:15},{tenBx:"Bx Đại Từ",maBx:"bx-dt",maSoBen:16}]},{tentinh:"TP. Hồ Chí Minh",matinh:"hcm",maSoTinh:59,itemBen:[{tenBx:"Bx Q1",maBx:"bx-q1",maSoBen:14},{tenBx:"Bx Củ Chi",maBx:"bx-cuchi",maSoBen:15}]},{tentinh:"Hà Nội",matinh:"hn",maSoTinh:29,itemBen:[{tenBx:"Bx Đông Anh",maBx:"bx-donganh",maSoBen:14},{tenBx:"Bx Sóc Sơn",maBx:"bx-socson",maSoBen:15}]}],chipsRules:[function(t){return!(!t||t.length<1)||"Không được để trống"}]}},methods:{showDsBx:function(){var t=this;this.tinhNoiDen?(this.dsBx=this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).itemBen,this.benNoiDen=this.dsBx[0].tenBx):(this.dsBx=[],this.benNoiDen="")},suaDsBx:function(){var t=this;this.tinhNoiDen?this.dsBx=this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).itemBen:this.dsBx=[]},suaAllFunc:function(){if(this.suaAll=!0,1!=this.suaTuyen&&(this.removeTinhNoiDen=this.tinhNoiDen,this.removeMaSoTuyen=this.maSoTuyen,this.removeBenNoiDen=this.benNoiDen,this.removeHanhTrinh=this.hanhTrinh),1!=this.suaCuLy&&(this.removeCuLy=this.cuLy),1!=this.suaGianCach&&(this.removeGianCach=this.gianCach),1!=this.suaLuuLuong&&(this.removeLuuLuong=this.luuLuong),1!=this.suaBieuDoGioXuatBen)for(var i=0;i<this.bieuDoGioXuatBen.length;i++)this.removeBieuDoGioXuatBen[i]=this.bieuDoGioXuatBen[i];this.suaTuyen=!0,this.suaCuLy=!0,this.suaGianCach=!0,this.suaLuuLuong=!0,this.suaBieuDoGioXuatBen=!0},huyAllFunc:function(){""!=this.removeMaSoTuyen&&1==this.suaTuyen&&(this.maSoTuyen=this.removeMaSoTuyen),""!=this.removeTinhNoiDen&&1==this.suaTuyen&&(this.tinhNoiDen=this.removeTinhNoiDen),""!=this.removeBenNoiDen&&1==this.suaTuyen&&(this.benNoiDen=this.removeBenNoiDen),""!=this.removeHanhTrinh&&1==this.suaTuyen&&(this.hanhTrinh=this.removeHanhTrinh),""!=this.removeCuLy&&1==this.suaCuLy&&(this.cuLy=this.removeCuLy),""!=this.removeGianCach&&1==this.suaGianCach&&(this.gianCach=this.removeGianCach),""!=this.removeLuuLuong&&1==this.suaLuuLuong&&(this.luuLuong=this.removeLuuLuong),""!=this.removeBieuDoGioXuatBen&&1==this.suaBieuDoGioXuatBen&&(this.bieuDoGioXuatBen=this.removeBieuDoGioXuatBen),this.suaAll=!1,this.suaTuyen=!1,this.suaCuLy=!1,this.suaGianCach=!1,this.suaLuuLuong=!1,this.suaBieuDoGioXuatBen=!1},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,this.suaAll=!1,this.suaTuyen=!1,this.suaCuLy=!1,this.suaGianCach=!1,this.suaLuuLuong=!1,this.suaBieuDoGioXuatBen=!1,this.dialog=!1)},suaAllTuyen:function(){this.removeTinhNoiDen=this.tinhNoiDen,this.removeMaSoTuyen=this.maSoTuyen,this.removeBenNoiDen=this.benNoiDen,this.removeHanhTrinh=this.hanhTrinh},huyAllTuyen:function(){this.tinhNoiDen=this.removeTinhNoiDen,this.maSoTuyen=this.removeMaSoTuyen,this.benNoiDen=this.removeBenNoiDen,this.hanhTrinh=this.removeHanhTrinh},editBieuDoGio:function(){for(var i=0;i<this.bieuDoGioXuatBen.length;i++)this.removeBieuDoGioXuatBen[i]=this.bieuDoGioXuatBen[i]},swapMST:function(){1==this.typeMST?this.typeMST=2:2==this.typeMST&&(this.typeMST=1)}},computed:{fullDiaChi:function(){return this.diachi+", "+this.elHuyen+", Tỉnh "+this.elTinh},sdtFormat:function(){return this.fixSdt(),this.sdt},dsAllFieldsEdit:function(){return 1==this.suaTuyen||1==this.suaCuLy||1==this.suaGianCach||1==this.suaLuuLuong||1==this.suaBieuDoGioXuatBen},fixCuLy:function(){return this.cuLy+" km"},fixGianCach:function(){return this.gianCach+" phút"},fixLuuLuong:function(){return this.luuLuong+" chuyến/tháng"},fixTenTuyen:function(){return this.benNoiDen?"Hà Nội - "+this.benNoiDen:"Hà Nội - "},maSoTuyen_default:function(){var t=this;if(this.tinhNoiDen&&this.benNoiDen){if(1==this.typeMST)return"38"+this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).maSoTinh+".14"+this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).itemBen.find(function(e){return e.tenBx==t.benNoiDen}).maSoBen+".";if(2==this.typeMST)return this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).maSoTinh+"38."+this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).itemBen.find(function(e){return e.tenBx==t.benNoiDen}).maSoBen+"14."}},fixMaSoTuyen:function(){var t=this;return this.maSoTuyen=this.maSoTuyen.toUpperCase(),1==this.typeMST?"38"+this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).maSoTinh+".14"+this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).itemBen.find(function(e){return e.tenBx==t.benNoiDen}).maSoBen+"."+this.maSoTuyen.toUpperCase():2==this.typeMST?this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).maSoTinh+"38."+this.tinh.find(function(e){return e.tentinh==t.tinhNoiDen}).itemBen.find(function(e){return e.tenBx==t.benNoiDen}).maSoBen+"14."+this.maSoTuyen.toUpperCase():void 0},w:function(){return window}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)}},components:{router:o.a,toolbox:l.a}},c=(n(450),n(8)),h=n(20),d=n.n(h),v=n(286),f=n(117),m=n(394),x=n(113),y=n(330),_=n(114),C=n(298),B=n(107),T=n(108),D=n(524),w=n(284),A=n(527),S=n(118),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[n("router",{attrs:{breadcrumbsItems:t.breadcrumbsItems}}),t._v(" "),n("v-spacer"),t._v(" "),n("toolbox",{attrs:{btnEditAll:!0,btnPrint:!0,suaAll:t.suaAll,trangThaiHD:t.trangThaiHD,dsAllFieldsEdit:t.dsAllFieldsEdit},on:{suaAllFunc:t.suaAllFunc,huyAllFunc:t.huyAllFunc,suaDsHuyen:t.suaDsBx,validate:t.validate}})],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticStyle:{width:"100%",margin:"0 auto"}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md7:"",lg7:"",grow:"","pr-4":""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-layout",{staticClass:"custom-layout",staticStyle:{height:"48px"},attrs:{row:""}},[n("v-flex",{staticClass:"title",attrs:{md4:"",lg4:"",grow:"","pt-3":"","pb-2":""}},[t._v("Thông tin chính")]),t._v(" "),n("v-flex",{attrs:{"pt-3":"","pb-2":""}},[t._v("(Chỉnh sửa lần cuối ngày 1/6/2019 bởi Lục Bé)")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Tên tuyến")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.fixTenTuyen))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaTuyen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Mã số tuyến")]),t._v(" "),t.suaTuyen?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.fixMaSoTuyen))]),t._v(" "),t.suaTuyen?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"maSoTuyen",prefix:t.maSoTuyen_default,"append-icon":"swap_horiz",rules:[function(t){return!!t||"Không được để trống"},function(t){return/^(([a-zA-Z]{1})|(([a-zA-Z]{1})([a-zA-Z0-9]{1})))\b/.test(t)||"Sai định dạng mã số tuyến"}],required:"","pt-0":""},on:{"click:append":t.swapMST},model:{value:t.maSoTuyen,callback:function(e){t.maSoTuyen=e},expression:"maSoTuyen"}})],1):t._e(),t._v(" "),1==t.suaTuyen&&0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1),t._v(" "),n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:function(e){t.suaTuyen=!1,t.huyAllTuyen()}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)],1):t._e(),t._v(" "),0==t.suaTuyen&&0==t.suaAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md1:"",lg1:"","pr-0":""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaAllTuyen(),t.huyAllFunc(),t.suaTuyen=!0,t.suaDsBx()}}},[n("v-icon",[t._v("edit")])],1)],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaTuyen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Tỉnh nơi đến")]),t._v(" "),t.suaTuyen?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.tinhNoiDen))]),t._v(" "),t.suaTuyen?n("v-flex",[n("v-select",{staticClass:"custom-textfield",attrs:{label:"Tỉnh nơi đến",items:t.tinh,"item-text":"tentinh","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},on:{change:t.showDsBx},model:{value:t.tinhNoiDen,callback:function(e){t.tinhNoiDen=e},expression:"tinhNoiDen"}})],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaTuyen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Bến nơi đến")]),t._v(" "),t.suaTuyen?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.benNoiDen))]),t._v(" "),t.suaTuyen?n("v-flex",[n("v-select",{staticClass:"custom-textfield",attrs:{label:"Bến nơi đến",items:t.dsBx,"item-text":"tenBx","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",rules:[function(t){return!!t||"Bạn chưa chọn bến đến"}],required:""},model:{value:t.benNoiDen,callback:function(e){t.benNoiDen=e},expression:"benNoiDen"}})],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaTuyen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Hành trình chạy chính")]),t._v(" "),t.suaTuyen?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.hanhTrinh))]),t._v(" "),t.suaTuyen?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"hanhTrinh",rules:t.rules,required:"","pt-0":""},model:{value:t.hanhTrinh,callback:function(e){t.hanhTrinh=e},expression:"hanhTrinh"}})],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaCuLy},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Cự ly tuyến")]),t._v(" "),t.suaCuLy?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.fixCuLy))]),t._v(" "),t.suaCuLy?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"cuLy",type:"number",min:"1",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>0||"Số nhập vào > 0"}],required:"",suffix:"km","pt-0":""},model:{value:t.cuLy,callback:function(e){t.cuLy=e},expression:"cuLy"}})],1):t._e(),t._v(" "),1==t.suaCuLy&&0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1),t._v(" "),n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:function(e){t.suaCuLy=!1,t.cuLy=t.removeCuLy}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)],1):t._e(),t._v(" "),0==t.suaCuLy&&0==t.suaAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md1:"",lg1:"","pr-0":""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeCuLy=t.cuLy,t.huyAllFunc(),t.suaCuLy=!0}}},[n("v-icon",[t._v("edit")])],1)],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaGianCach},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Giãn cách tối thiểu")]),t._v(" "),t.suaGianCach?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.fixGianCach))]),t._v(" "),t.suaGianCach?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"gianCach",suffix:"phút",type:"number",min:"1",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>0||"Số nhập vào > 0"}],required:"","pt-0":""},model:{value:t.gianCach,callback:function(e){t.gianCach=e},expression:"gianCach"}})],1):t._e(),t._v(" "),1==t.suaGianCach&&0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1),t._v(" "),n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:function(e){t.suaGianCach=!1,t.gianCach=t.removeGianCach}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)],1):t._e(),t._v(" "),0==t.suaGianCach&&0==t.suaAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md1:"",lg1:"","pr-0":""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeGianCach=t.gianCach,t.huyAllFunc(),t.suaGianCach=!0}}},[n("v-icon",[t._v("edit")])],1)],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaLuuLuong},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Lưu lượng quy hoạch")]),t._v(" "),t.suaLuuLuong?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.fixLuuLuong))]),t._v(" "),t.suaLuuLuong?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"luuLuong",type:"number",suffix:"chuyến/tháng",min:"1",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>0||"Số nhập vào > 0"}],required:"","pt-0":""},model:{value:t.luuLuong,callback:function(e){t.luuLuong=e},expression:"luuLuong"}})],1):t._e(),t._v(" "),1==t.suaLuuLuong&&0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1),t._v(" "),n("v-btn",{staticClass:"mr-0 ml-0",attrs:{icon:""},on:{click:function(e){t.suaLuuLuong=!1,t.luuLuong=t.removeLuuLuong}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)],1):t._e(),t._v(" "),0==t.suaLuuLuong&&0==t.suaAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md1:"",lg1:"","pr-0":""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeLuuLuong=t.luuLuong,t.huyAllFunc(),t.suaLuuLuong=!0}}},[n("v-icon",[t._v("edit")])],1)],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field edit-double-field":t.suaAll,"edit-field edit-double-field":t.suaBieuDoGioXuatBen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Biểu đồ giờ xuất bến trong ngày")]),t._v(" "),t.suaBieuDoGioXuatBen?t._e():n("v-flex",{staticClass:"text-flex"},t._l(t.bieuDoGioXuatBen,function(e){return n("label",{directives:[{name:"show",rawName:"v-show",value:!t.dialog,expression:"!dialog"}],key:e.index,staticClass:"ngancach"},[t._v("\n                  "+t._s(e)+"\n                  "),n("span",[t._v("|")])])}),0),t._v(" "),t.suaBieuDoGioXuatBen?n("v-flex",[n("v-layout",{attrs:{row:""}},[n("v-combobox",{staticClass:"input-time",attrs:{name:"bieuDoGioXuatBen",label:"Biểu đồ giờ xuất bến",rules:t.chipsRules,"single-line":"","deletable-chips":"","clear-icon":"clear",chips:"","append-icon":"",multiple:"","pt-0":"",type:"time"},model:{value:t.bieuDoGioXuatBen,callback:function(e){t.bieuDoGioXuatBen=e},expression:"bieuDoGioXuatBen"}})],1),t._v(" "),n("v-layout",[n("v-flex",[t._v(t._s(t.removeBieuDoGioXuatBen))])],1)],1):t._e(),t._v(" "),0==t.suaBieuDoGioXuatBen&&0==t.suaAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md1:"",lg1:"","pr-0":""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.editBieuDoGio(),t.huyAllFunc(),t.dialog=!0}}},[n("v-icon",[t._v("edit")])],1)],1):t._e()],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("div",{staticClass:"form-suabieudogioxuatben"},[n("v-layout",{attrs:{row:"","mb-4":""}},[n("v-flex",{attrs:{xs12:""}},[n("h6",{staticClass:"title text-xs-center"},[t._v("Sửa biểu đồ giờ xuất bến trong ngày")])])],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",[n("v-layout",{attrs:{row:""}},[n("v-combobox",{staticClass:"input-time input-dialog",attrs:{name:"bieuDoGioXuatBen",label:"Biểu đồ giờ xuất bến",rules:t.chipsRules,outline:"","deletable-chips":"","clear-icon":"clear",chips:"","append-icon":"",multiple:"","pt-0":"",type:"time"},model:{value:t.bieuDoGioXuatBen,callback:function(e){t.bieuDoGioXuatBen=e},expression:"bieuDoGioXuatBen"}})],1)],1)],1),t._v(" "),n("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[n("v-btn",{staticClass:"body-1 ma-0",staticStyle:{"margin-left":"-24px !important"},attrs:{color:"primary",flat:""},on:{click:function(e){t.bieuDoGioXuatBen=t.removeBieuDoGioXuatBen,t.dialog=!1}}},[t._v("HỦY")]),t._v(" "),n("v-btn",{staticClass:"body-1 ma-0",attrs:{color:"primary"},on:{click:t.validate}},[t._v("LƯU")])],1)],1)]),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Số chuyến đăng ký trên tháng")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.soChuyenDangKyTrenThang))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Số đơn vị vận tải đang khai thác")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[n("a",{attrs:{href:"#"}},[t._v(t._s(t.soDVVTDangKhaiThac))])])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Trạng thái hoạt động")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[n("v-icon",{staticClass:"pr-3",staticStyle:{"margin-bottom":"-4px",color:"#000"}},[t._v("check_circle")]),t._v("\n                "+t._s(t.trangThaiHD)+"\n              ")],1)],1)],1)],1),t._v(" "),n("v-flex",{attrs:{"pt-3":""}},[n("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d474527.50645987364!2d105.24038475033383!3d21.693163811872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3134adfe6b56a1bb%3A0xee5e6d275fb91d46!2zQuG6v24gWGUgVHV5w6puIFF1YW5nLCBDaGnhur9uIFRo4bqvbmcgU8O0bmcgTMO0LCBUaMOgbmggcGjhu5EgVHV5w6puIFF1YW5nLCBUdXnDqm4gUXVhbmcsIFZp4buHdCBOYW0!3m2!1d21.811118399999998!2d105.2143452!4m5!1s0x31352728183d2dcd%3A0xda9a5ca538d86c9!2zQuG6v24geGUga2jDoWNoIHRydW5nIHTDom0gVFAgVGjDoWkgTmd1ecOqbiwgVGjDoG5oIHBo4buRIFRow6FpIE5ndXnDqm4sIFRow6FpIE5ndXnDqm4sIFZp4buHdCBOYW0!3m2!1d21.576482799999997!2d105.8284652!5e0!3m2!1svi!2s!4v1559965541604!5m2!1svi!2s",width:"100%",height:"100%",frameborder:"0",allowfullscreen:""}})])],1)],1)])],1)},[],!1,null,"f58028f2",null);e.default=component.exports;d()(component,{VApp:v.a,VBtn:f.a,VCombobox:m.a,VContainer:x.a,VDialog:y.a,VFlex:_.a,VForm:C.a,VIcon:B.a,VLayout:T.a,VSelect:D.a,VSpacer:w.a,VTextField:A.a,VToolbar:S.a})}}]);