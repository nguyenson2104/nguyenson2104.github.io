(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{272:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("a0b0972c",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";var l=n(272);n.n(l).a},288:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".theme--light.application[data-v-c8f96822]{background:#fff}.toolbar-custom[data-v-c8f96822]{box-shadow:unset}[data-v-c8f96822] .theme--light.v-breadcrumbs .v-breadcrumbs__divider,[data-v-c8f96822] .theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:#000}.custom-layout[data-v-c8f96822]{border-bottom:1px solid #707070}.custom-layout.edit-field[data-v-c8f96822]{border-bottom:none}.custom-textfield[data-v-c8f96822]{padding-top:6px;margin:0}[data-v-c8f96822] .custom-textfield input{font-size:14px;padding-left:8px;padding-bottom:2px}[data-v-c8f96822] .custom-textfield .v-messages{display:none}[data-v-c8f96822] .custom-layout .v-btn{margin:4px 8px}[data-v-c8f96822] .custom-textfield .v-input__slot{margin-bottom:4px}",""])},289:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("336de78c",content,!0,{sourceMap:!1})},290:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}",""])},344:function(t,e,n){"use strict";n.r(e);var l={layout:"def_layout",data:function(){return{suaAll:!1,suachucvu:!1,chucvu:"Giám đốc",chucvu_done:"Giám đốc",ngDaiDien:"Nguyễn Văn A",suaNgDaiDien:!1,ngDaiDien_done:"Nguyễn Văn A",breadcumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Chi tiết thông tin đơn vị vận tải",disabled:!0}]}},methods:{suaAllFunc:function(){this.suaAll=!0,this.suachucvu=!0,this.suaNgDaiDien=!0},huyAllFunc:function(){this.suaAll=!1,this.suachucvu=!1,this.suaNgDaiDien=!1,this.chucvu_done=this.chucvu,this.ngDaiDien_done=this.ngDaiDien},luuAllFunc:function(){this.suaAll=!1,this.suachucvu=!1,this.suaNgDaiDien=!1,this.chucvu=this.chucvu_done,this.ngDaiDien=this.ngDaiDien_done}}},o=(n(287),n(26)),c=n(44),r=n.n(c),v=n(269),d=(n(24),n(289),n(77)),h=n(5);var f=Object(h.a)(d.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return t={"v-breadcrumbs__item":!0},e=this.activeClass,n=this.disabled,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}}),m=n(1),_=Object(m.e)("v-breadcrumbs__divider","li"),x=n(13),D=n(9),y=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},A=Object(h.a)(x.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return y({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(D.d)("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(D.d)("justify-end",'class="justify-end"',this),this.$slots.default&&Object(D.d)("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var n=this.$slots.default[i];n.componentOptions&&"v-breadcrumbs-item"===n.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(n),e=!0):t.push(n)}return t}},genDivider:function(){return this.$createElement(_,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var l=this.items[i];n.push(l.text),e?t.push(this.$scopedSlots.item({item:l})):t.push(this.$createElement(f,{key:n.join("."),props:l},[l.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),C=n(111),k=n(107),j=n(108),w=n(113),N=n(109),S=n(267),V=n(350),O=n(114),$=n(268),T=n(265),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcumbsItems,divider:">",large:""}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[t.suaAll?t._e():n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.suaAllFunc}},l),[n("v-icon",[t._v("edit")])],1)]}}],null,!1,426766987)},[t._v(" "),n("span",[t._v("Sửa tất cả")])]),t._v(" "),t.suaAll?t._e():n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAll=!t.suaAll}}},l),[n("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,2827999161)},[t._v(" "),n("span",[t._v("In")])]),t._v(" "),t.suaAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},l),[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),n("span",[t._v("Hủy bỏ")])]):t._e(),t._v(" "),t.suaAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.luuAllFunc}},l),[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,1775473710)},[t._v(" "),n("span",[t._v("Lưu lại")])]):t._e(),t._v(" "),t.suaAll?t._e():n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAll=!t.suaAll}}},l),[n("v-icon",[t._v("delete")])],1)]}}],null,!1,1465644327)},[t._v(" "),n("span",[t._v("Xóa")])])],1)],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticStyle:{width:"800px",margin:"0 auto"}},[n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font20",attrs:{"pb-3":""}},[t._v("Thông tin chính")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16 label",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Tên đơn vị vận tải")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[t._v("HTX Thành Công")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số hợp đồng")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[n("a",{attrs:{href:"#"}},[t._v("11/2019/HĐ-BXTT")])])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Mã số thuế")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[t._v("600003515")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suachucvu},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Chức vụ")]),t._v(" "),0==t.suachucvu&&0==t.suaAll?n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.chucvu,callback:function(e){t.chucvu=e},expression:"chucvu"}},[t._v(t._s(t.chucvu))]):t._e(),t._v(" "),n("v-flex",{class:{"pr-2":t.suaAll}},[t.suachucvu?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.chucvu,"pt-0":""},model:{value:t.chucvu_done,callback:function(e){t.chucvu_done=e},expression:"chucvu_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suachucvu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suachucvu=!1,t.chucvu=t.chucvu_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suachucvu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suachucvu=!1,t.chucvu_done=t.chucvu}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suachucvu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suachucvu=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNgDaiDien},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Người đại diện")]),t._v(" "),t.suaNgDaiDien?t._e():n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.ngDaiDien,callback:function(e){t.ngDaiDien=e},expression:"ngDaiDien"}},[t._v(t._s(t.ngDaiDien))]),t._v(" "),n("v-flex",{class:{"pr-2":t.suaAll}},[t.suaNgDaiDien?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.ngDaiDien,"pt-0":""},model:{value:t.ngDaiDien_done,callback:function(e){t.ngDaiDien_done=e},expression:"ngDaiDien_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaNgDaiDien&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!1,t.ngDaiDien=t.ngDaiDien_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaNgDaiDien&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!1,t.ngDaiDien_done=t.ngDaiDien}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaNgDaiDien&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1)],1)])],1)},[],!1,null,"c8f96822",null);e.default=component.exports;r()(component,{VApp:v.a,VBreadcrumbs:A,VBtn:C.a,VContainer:k.a,VFlex:j.a,VIcon:w.a,VLayout:N.a,VSpacer:S.a,VTextField:V.a,VToolbar:O.a,VToolbarItems:$.a,VTooltip:T.a})}}]);