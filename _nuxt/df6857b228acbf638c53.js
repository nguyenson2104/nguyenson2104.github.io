(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{288:function(t,e,n){"use strict";var l={props:["breadcrumbsItems"]},o=n(10),c=n(27),r=n.n(c),v=n(337),d=n(118),h=n(282),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;r()(component,{VBreadcrumbs:v.a,VIcon:d.a,VToolbarItems:h.a})},289:function(t,e,n){var content=n(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("336de78c",content,!0,{sourceMap:!1})},290:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}",""])},295:function(t,e,n){var content=n(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("6f22d38a",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";var l={data:function(){return{}},props:["suaAll","trangthai","dsAllFieldsEdit","btnExcel","btnLock","btnEditAll","btnPrint","btnDel","btnDoiMK","linkDoiMK"],methods:{suaDsHuyen:function(){this.$emit("suaDsHuyen")},suaAllFunc:function(){this.$emit("suaAllFunc")},luuAllFunc:function(){this.$emit("luuAllFunc")},huyAllFunc:function(){this.$emit("huyAllFunc")}}},o=n(10),c=n(27),r=n.n(c),v=n(115),d=n(113),h=n(118),_=n(282),f=n(279),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDoiMK?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:"",to:t.linkDoiMK}},l),[n("v-icon",[t._v("mdi-key-variant")])],1)]}}],null,!1,25299971)},[t._v(" "),n("span",[t._v("Đổi mật khẩu")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAllFunc(),t.suaDsHuyen()}}},l),[n("v-icon",[t._v("edit")])],1)]}}],null,!1,2420839842)},[t._v(" "),n("span",[t._v("Sửa tất cả")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnPrint?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({class:{"v-btn--disabled":t.dsAllFieldsEdit},attrs:{icon:""}},l),[n("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,1897770753)},[t._v(" "),n("span",[t._v("In")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.luuAllFunc}},l),[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,1775473710)},[t._v(" "),n("span",[t._v("Lưu lại")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},l),[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),n("span",[t._v("Hủy bỏ")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"==t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Không hoạt động"}}},l),[n("v-icon",[t._v("lock")])],1)]}}],null,!1,445311523)},[t._v(" "),n("span",[t._v("Khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"!=t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Đang hoạt động"}}},l),[n("v-icon",[t._v("lock_open")])],1)]}}],null,!1,1712601230)},[t._v(" "),n("span",[t._v("Mở khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnExcel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("mdi-file-excel")])],1)]}}],null,!1,512336027)},[t._v(" "),n("span",[t._v("Xuất Excel")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("delete")])],1)]}}],null,!1,2997350483)},[t._v(" "),n("span",[t._v("Xóa")])]):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports;r()(component,{VBtn:v.a,VFlex:d.a,VIcon:h.a,VToolbarItems:_.a,VTooltip:f.a})},337:function(t,e,n){"use strict";n(25),n(289);var l=n(66),o=n(7);var c=Object(o.a)(l.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return t={"v-breadcrumbs__item":!0},e=this.activeClass,n=this.disabled,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}}),r=n(1),v=Object(r.f)("v-breadcrumbs__divider","li"),d=n(14),h=n(8),_=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(o.a)(d.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return _({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(h.d)("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(h.d)("justify-end",'class="justify-end"',this),this.$slots.default&&Object(h.d)("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var n=this.$slots.default[i];n.componentOptions&&"v-breadcrumbs-item"===n.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(n),e=!0):t.push(n)}return t}},genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var l=this.items[i];n.push(l.text),e?t.push(this.$scopedSlots.item({item:l})):t.push(this.$createElement(c,{key:n.join("."),props:l},[l.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},341:function(t,e,n){"use strict";var l=n(295);n.n(l).a},342:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.application[data-v-e1f6cabc]{background:#fff}.blur-icon[data-v-e1f6cabc]{color:rgba(0,0,0,.6)!important}",""])},432:function(t,e,n){"use strict";n.r(e);n(31);var l=n(161),o=(n(122),n(288)),c=n(321),r="Tổ 10A Phường Tân Lập",v="0353205411",d="htxthanhcong@gmail.com",h={layout:"def_layout_temp",data:function(){return{menuDate:!1,date:(new Date).toISOString().substr(0,10),suaAll:!1,suachucvu:!1,chucvu:"Giám đốc",chucvu_done:"Giám đốc",ngDaiDien:"Nguyễn Văn A",suaNgDaiDien:!1,ngDaiDien_done:"Nguyễn Văn A",suadiachi:!1,diachi:r,diachi_done:r,suasdt:!1,sdt:v,sdt_done:v,suaemail:!1,email:d,email_done:d,suawebsite:!1,website:"www.htxthanhcong.com",website_done:"www.htxthanhcong.com",suaAllGPKD:!1,sogiayphep:"37/GPKDVT",sogiayphep_edit:"37/GPKDVT",sogiayphep_done:"37/GPKDVT",solansua:1,noicap:"Hà Nội",noicap_edit:"Hà Nội",noicap_done:"Hà Nội",ngaycap:"02/08/2018",ngaycap_edit:"02/08/2018",ngaycap_done:"02/08/2018",elTinh:"Thái Nguyên",elHuyen:"TP Thái Nguyên",dsHuyen:[],trangthai:"Đang hoạt động",msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{8})\b)/g.test(t)||"Sai định dạng số điện thoại"}],msgEmail:[function(t){return!!t||"E-mail không được để trống"},function(t){return/.+@.+/.test(t)||"Sai định dạng E-mail"}],tinh:[{tentinh:"Thái Nguyên",matinh:"tn",itemHuyen:[{tenhuyen:"TP Thái Nguyên",mahuyen:"tn-tptn"},{tenhuyen:"Huyện Đồng Hỷ",mahuyen:"tn-dhy"}]},{tentinh:"TP. Hồ Chí Minh",matinh:"hcm",itemHuyen:[{tenhuyen:"Huyện Củ Chi",mahuyen:"hcm-cuchi"},{tenhuyen:"Huyện Bình Chánh",mahuyen:"hcm-binhchanh"}]},{tentinh:"Hà Nội",matinh:"hn",itemHuyen:[{tenhuyen:"Huyện Đông Anh",mahuyen:"hn-donganh"},{tenhuyen:"Huyện Sóc Sơn",mahuyen:"hn-socson"}]}],breadcrumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Chi tiết thông tin đơn vị vận tải",disabled:!0}]}},methods:{showDsHuyen:function(){var t=this;this.dsHuyen=this.tinh.find(function(e){return e.tentinh==t.elTinh}).itemHuyen,this.elHuyen=this.dsHuyen[0].tenhuyen},suaDsHuyen:function(){var t=this;this.dsHuyen=this.tinh.find(function(e){return e.tentinh==t.elTinh}).itemHuyen},suaAllFunc:function(){this.suaAll=!0,this.suachucvu=!0,this.suaNgDaiDien=!0,this.suadiachi=!0,this.suasdt=!0,this.suaemail=!0,this.suawebsite=!0,this.suaAllGPKD=!0},huyAllFunc:function(){this.suaAll=!1,this.suachucvu=!1,this.suaNgDaiDien=!1,this.suadiachi=!1,this.suasdt=!1,this.suaemail=!1,this.suawebsite=!1,this.suaAllGPKD=!1,this.chucvu_done=this.chucvu,this.ngDaiDien_done=this.ngDaiDien,this.diachi_done=this.diachi,this.sdt_done=this.sdt,this.email_done=this.email,this.website_done=this.website,this.sogiayphep_edit=this.sogiayphep_done,this.noicap_edit=this.noicap_done,this.ngaycap_edit=this.ngaycap_done},luuAllFunc:function(){this.suaAll=!1,this.suachucvu=!1,this.suaNgDaiDien=!1,this.suadiachi=!1,this.suasdt=!1,this.suaemail=!1,this.suawebsite=!1,this.suaAllGPKD=!1,this.chucvu=this.chucvu_done,this.ngDaiDien=this.ngDaiDien_done,this.diachi=this.diachi_done,this.sdt=this.sdt_done,this.email=this.email_done,this.website=this.website_done,this.sogiayphep_done=this.sogiayphep_edit,this.noicap_done=this.noicap_edit,this.ngaycap_done=this.ngaycap_edit,this.solansua++},suaGPKD:function(){this.suaAllGPKD=!1,this.sogiayphep_done=this.sogiayphep_edit,this.noicap_done=this.noicap_edit,this.ngaycap_done=this.ngaycap_edit,this.solansua++},huySuaGPKD:function(){this.suaAllGPKD=!1,this.sogiayphep_edit=this.sogiayphep_done,this.noicap_edit=this.noicap_done,this.ngaycap_edit=this.ngaycap_done},formatDate:function(){var t=this.date.split("-"),e=Object(l.a)(t,3),n=e[0],o=e[1],c=e[2];return"".concat(c,"/").concat(o,"/").concat(n)}},computed:{fullDiaChi:function(){return this.diachi+", "+this.elHuyen+", Tỉnh "+this.elTinh},dsAllFieldsEdit:function(){return 1==this.suachucvu||1==this.suaNgDaiDien||1==this.suadiachi||1==this.suasdt||1==this.suaemail||1==this.suawebsite||1==this.suaAllGPKD}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)}},components:{router:o.a,toolbox:c.a}},_=(n(341),n(10)),f=n(27),m=n.n(f),y=n(283),x=n(115),D=n(112),A=n(421),w=n(113),k=n(118),C=n(107),P=n(336),S=n(419),K=n(281),H=n(434),G=n(117),component=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[n("router",{attrs:{breadcrumbsItems:t.breadcrumbsItems}}),t._v(" "),n("v-spacer"),t._v(" "),n("toolbox",{attrs:{btnLock:"true",btnEditAll:"true",btnPrint:"true",suaAll:t.suaAll,trangthai:t.trangthai,dsAllFieldsEdit:t.dsAllFieldsEdit,suachucvu:t.suachucvu},on:{suaAllFunc:t.suaAllFunc,luuAllFunc:t.luuAllFunc,huyAllFunc:t.huyAllFunc,suaDsHuyen:t.suaDsHuyen}})],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticStyle:{width:"900px",margin:"0 auto"}},[n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font20",attrs:{"pb-2":""}},[t._v("Thông tin chính")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16 label",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Tên đơn vị vận tải")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[t._v("HTX Thành Công")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số hợp đồng")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[n("a",{attrs:{href:"#"}},[t._v("11/2019/HĐ-BXTT")])])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Mã số thuế")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[t._v("600003515")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNgDaiDien},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Người đại diện")]),t._v(" "),t.suaNgDaiDien?t._e():n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.ngDaiDien,callback:function(e){t.ngDaiDien=e},expression:"ngDaiDien"}},[t._v(t._s(t.ngDaiDien))]),t._v(" "),n("v-flex",[t.suaNgDaiDien?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.ngDaiDien,"pt-0":""},model:{value:t.ngDaiDien_done,callback:function(e){t.ngDaiDien_done=e},expression:"ngDaiDien_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaNgDaiDien&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!1,t.ngDaiDien=t.ngDaiDien_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaNgDaiDien&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!1,t.ngDaiDien_done=t.ngDaiDien}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaNgDaiDien&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suachucvu},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Chức vụ")]),t._v(" "),0==t.suachucvu&&0==t.suaAll?n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[t._v(t._s(t.chucvu))]):t._e(),t._v(" "),n("v-flex",[t.suachucvu?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.chucvu,"pt-0":""},model:{value:t.chucvu_done,callback:function(e){t.chucvu_done=e},expression:"chucvu_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suachucvu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suachucvu=!1,t.chucvu=t.chucvu_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suachucvu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suachucvu=!1,t.chucvu_done=t.chucvu}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suachucvu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suachucvu=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suadiachi},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Địa chỉ")]),t._v(" "),0==t.suadiachi&&0==t.suaAll?n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.fullDiaChi,callback:function(e){t.fullDiaChi=e},expression:"fullDiaChi"}},[t._v(t._s(t.fullDiaChi))]):t._e(),t._v(" "),n("v-flex",[n("v-layout",[n("v-flex",{attrs:{"pr-4":""}},[t.suadiachi?n("v-select",{staticClass:"custom-textfield",attrs:{label:"Tỉnh/TP",items:t.tinh,"item-text":"tentinh","item-value":"tentinh","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},on:{change:t.showDsHuyen},model:{value:t.elTinh,callback:function(e){t.elTinh=e},expression:"elTinh"}}):t._e()],1),t._v(" "),n("v-flex",[t.suadiachi?n("v-select",{staticClass:"custom-textfield",attrs:{label:"Quận/Huyện",items:t.dsHuyen,"item-text":"tenhuyen","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",rules:[function(t){return!!t||"Bạn chưa chọn huyện"}],required:""},model:{value:t.elHuyen,callback:function(e){t.elHuyen=e},expression:"elHuyen"}}):t._e()],1)],1),t._v(" "),n("v-layout",[n("v-flex",[t.suadiachi?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.diachi,"pt-0":""},model:{value:t.diachi_done,callback:function(e){t.diachi_done=e},expression:"diachi_done"}}):t._e()],1),t._v(" "),t.suaAll?t._e():n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suadiachi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suadiachi=!1,t.diachi=t.diachi_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suadiachi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suadiachi=!1,t.diachi_done=t.diachi}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e()],1)],1)],1),t._v(" "),0==t.suaAll&&0==t.suadiachi?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[0==t.suadiachi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suadiachi=!0,t.suaDsHuyen()}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suasdt},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số điện thoại")]),t._v(" "),0==t.suasdt&&0==t.suaAll?n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.sdt,callback:function(e){t.sdt=e},expression:"sdt"}},[t._v(t._s(t.sdt))]):t._e(),t._v(" "),n("v-flex",[t.suasdt?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.sdt,"pt-0":"",rules:t.msgSdt},model:{value:t.sdt_done,callback:function(e){t.sdt_done=e},expression:"sdt_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suasdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suasdt=!1,t.sdt=t.sdt_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suasdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suasdt=!1,t.sdt_done=t.sdt}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suasdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suasdt=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaemail},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Email")]),t._v(" "),0==t.suaemail&&0==t.suaAll?n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[t._v(t._s(t.email))]):t._e(),t._v(" "),n("v-flex",[t.suaemail?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.email,"pt-0":"",rules:t.msgEmail},model:{value:t.email_done,callback:function(e){t.email_done=e},expression:"email_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaemail&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaemail=!1,t.email=t.email_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaemail&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaemail=!1,t.email_done=t.email}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaemail&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaemail=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suawebsite},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Website")]),t._v(" "),0==t.suawebsite&&0==t.suaAll?n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}},[t._v(t._s(t.website))]):t._e(),t._v(" "),n("v-flex",[t.suawebsite?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.website,"pt-0":""},model:{value:t.website_done,callback:function(e){t.website_done=e},expression:"website_done"}}):t._e()],1),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suawebsite&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suawebsite=!1,t.website=t.website_done}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suawebsite&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suawebsite=!1,t.website_done=t.website}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suawebsite&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suawebsite=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số lượng xe")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[n("a",{attrs:{href:"#"}},[t._v("15")])])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số lượng tuyến")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""}},[n("a",{attrs:{href:"#"}},[t._v("15")])])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Trạng thái")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":""},model:{value:t.trangthai,callback:function(e){t.trangthai=e},expression:"trangthai"}},[t._v(t._s(t.trangthai))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[1==t.solansua?n("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Thông tin GPKD cấp lần đầu")]):t._e(),t._v(" "),1!=t.solansua?n("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Thông tin GPKD")]):t._e(),t._v(" "),1!=t.solansua?n("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Cấp lần đầu")]):t._e(),t._v(" "),1!=t.solansua?n("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Lần cấp hiện tại")]):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{"pr-0":"","mt-1":""}},[1==t.suaAllGPKD&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaAllGPKD=!1,t.suaGPKD()}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaAllGPKD&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaAllGPKD=!1,t.huySuaGPKD()}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaAllGPKD=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số giấy phép")]),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll||1!=t.solansua?n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""},model:{value:t.sogiayphep,callback:function(e){t.sogiayphep=e},expression:"sogiayphep"}},[t._v(t._s(t.sogiayphep))]):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll&&1!=t.solansua?n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":"",value:t.sogiayphep_edit},model:{value:t.sogiayphep_done,callback:function(e){t.sogiayphep_done=e},expression:"sogiayphep_done"}},[t._v(t._s(t.sogiayphep_edit))]):t._e(),t._v(" "),n("v-flex",[t.suaAllGPKD?n("v-text-field",{staticClass:"custom-textfield",attrs:{value:t.sogiayphep_edit,"pt-0":""},model:{value:t.sogiayphep_edit,callback:function(e){t.sogiayphep_edit=e},expression:"sogiayphep_edit"}}):t._e()],1)],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Nơi cấp")]),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll||1!=t.solansua?n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""},model:{value:t.noicap,callback:function(e){t.noicap=e},expression:"noicap"}},[t._v(t._s(t.noicap))]):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll&&1!=t.solansua?n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":"",value:t.noicap_edit},model:{value:t.noicap_done,callback:function(e){t.noicap_done=e},expression:"noicap_done"}},[t._v(t._s(t.noicap_edit))]):t._e(),t._v(" "),n("v-flex",[t.suaAllGPKD?n("v-select",{staticClass:"custom-textfield",attrs:{label:"Nơi cấp",items:t.tinh,"item-text":"tentinh","item-value":"tentinh","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},model:{value:t.noicap_edit,callback:function(e){t.noicap_edit=e},expression:"noicap_edit"}}):t._e()],1)],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Ngày cấp")]),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll||1!=t.solansua?n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""},model:{value:t.ngaycap,callback:function(e){t.ngaycap=e},expression:"ngaycap"}},[t._v(t._s(t.ngaycap))]):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll&&1!=t.solansua?n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":"",value:t.ngaycap_edit},model:{value:t.ngaycap_done,callback:function(e){t.ngaycap_done=e},expression:"ngaycap_done"}},[t._v(t._s(t.ngaycap_edit))]):t._e(),t._v(" "),n("v-flex",[t.suaAllGPKD?n("v-menu",{ref:"menuDate",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-text-field",t._g({staticClass:"custom-textfield",attrs:{"append-icon":"event",readonly:""},model:{value:t.ngaycap_edit,callback:function(e){t.ngaycap_edit=e},expression:"ngaycap_edit"}},l))]}}],null,!1,3423490858),model:{value:t.menuDate,callback:function(e){t.menuDate=e},expression:"menuDate"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"vi-vn"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menuDate=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.menuDate.save(t.date),t.ngaycap_edit=t.formatDate()}}},[t._v("OK")])],1)],1):t._e()],1)],1),t._v(" "),1!=t.solansua?n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[n("v-flex",{staticClass:"font16",attrs:{"pb-2":"","pt-3":"","pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Lần cấp")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("1")]),t._v(" "),n("v-flex",{attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""},model:{value:t.solansua,callback:function(e){t.solansua=e},expression:"solansua"}},[t._v(t._s(t.solansua))])],1):t._e()],1)])],1)},[],!1,null,"e1f6cabc",null);e.default=component.exports;m()(component,{VApp:y.a,VBtn:x.a,VContainer:D.a,VDatePicker:A.a,VFlex:w.a,VIcon:k.a,VLayout:C.a,VMenu:P.a,VSelect:S.a,VSpacer:K.a,VTextField:H.a,VToolbar:G.a})}}]);