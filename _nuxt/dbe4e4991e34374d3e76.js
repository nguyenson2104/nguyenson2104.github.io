(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{286:function(t,e,n){"use strict";var l={props:["breadcrumbsItems"]},o=n(8),r=n(20),c=n.n(r),v=n(304),h=n(107),d=n(284),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBreadcrumbs:v.a,VIcon:h.a,VToolbarItems:d.a})},287:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("336de78c",content,!0,{sourceMap:!1})},288:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}",""])},296:function(t,e,n){"use strict";var l={data:function(){return{}},props:{trangThaiHD:{type:String,default:"Chờ xác nhận"},suaAll:{type:Boolean,default:!1},trangthai:{type:String,default:"Đang hoạt động"},dsAllFieldsEdit:{type:Boolean,default:!1},btnExcel:{type:Boolean,default:!1},btnLock:{type:Boolean,default:!1},btnEditAll:{type:Boolean,default:!1},btnPrint:{type:Boolean,default:!1},btnDel:{type:Boolean,default:!1},btnDoiMK:{type:Boolean,default:!1},linkDoiMK:{type:String,default:""}},methods:{suaDsHuyen:function(){this.$emit("suaDsHuyen")},suaAllFunc:function(){this.$emit("suaAllFunc")},huyAllFunc:function(){this.$emit("huyAllFunc")},validate:function(){this.$emit("validate")}}},o=n(8),r=n(20),c=n.n(r),v=n(116),h=n(114),d=n(107),m=n(284),f=n(281),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDoiMK?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:"",to:t.linkDoiMK}},l),[n("v-icon",[t._v("mdi-key-variant")])],1)]}}],null,!1,25299971)},[t._v(" "),n("span",[t._v("Đổi mật khẩu")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnEditAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAllFunc(),t.suaDsHuyen()}}},l),[n("v-icon",[t._v("edit")])],1)]}}],null,!1,2420839842)},[t._v(" "),n("span",[t._v("Sửa tất cả")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnPrint?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({class:{"v-btn--disabled":t.dsAllFieldsEdit},attrs:{icon:""}},l),[n("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,1897770753)},[t._v(" "),n("span",[t._v("In")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.validate()}}},l),[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,3212056989)},[t._v(" "),n("span",[t._v("Lưu lại")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},l),[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),n("span",[t._v("Hủy bỏ")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"==t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Không hoạt động"}}},l),[n("v-icon",[t._v("lock")])],1)]}}],null,!1,445311523)},[t._v(" "),n("span",[t._v("Khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"!=t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Đang hoạt động"}}},l),[n("v-icon",[t._v("lock_open")])],1)]}}],null,!1,1712601230)},[t._v(" "),n("span",[t._v("Mở khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnExcel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("mdi-file-excel")])],1)]}}],null,!1,512336027)},[t._v(" "),n("span",[t._v("Xuất Excel")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("delete")])],1)]}}],null,!1,2997350483)},[t._v(" "),n("span",[t._v("Xóa")])]):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:v.a,VFlex:h.a,VIcon:d.a,VToolbarItems:m.a,VTooltip:f.a})},304:function(t,e,n){"use strict";n(26),n(287);var l=n(65),o=n(7);var r=Object(o.a)(l.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return t={"v-breadcrumbs__item":!0},e=this.activeClass,n=this.disabled,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}}),c=n(1),v=Object(c.f)("v-breadcrumbs__divider","li"),h=n(14),d=n(9),m=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(o.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return m({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(d.d)("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(d.d)("justify-end",'class="justify-end"',this),this.$slots.default&&Object(d.d)("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var n=this.$slots.default[i];n.componentOptions&&"v-breadcrumbs-item"===n.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(n),e=!0):t.push(n)}return t}},genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var l=this.items[i];n.push(l.text),e?t.push(this.$scopedSlots.item({item:l})):t.push(this.$createElement(r,{key:n.join("."),props:l},[l.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},310:function(t,e,n){var content=n(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("518f7394",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";var l=n(310);n.n(l).a},407:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".container[data-v-3d69bf17]{background:#e5e5e5}.frame-chitiet[data-v-3d69bf17]{width:570px;background:#fff;padding:24px;box-shadow:0 19px 36px rgba(0,0,0,.26);color:#000;border-radius:4px}",""])},490:function(t,e,n){"use strict";n.r(e);n(39);var l=n(286),o=n(296),r={data:function(){return{valid:!0,suaAll:!1,tenTK:"admin",hoTen:"Nguyễn Văn A",suaHoTen:!1,removeHoTen:"",phongBan:"Hành chính",suaPhongBan:!1,removePhongBan:"",email:"sp@gmail.com",suaEmail:!1,removeEmail:"",chucVu:"Trưởng phòng",suaChucVu:!1,removeChucVu:"",sdt:"0987456321",suaSdt:!1,tempSdt:"",removeSdt:"",nhomTK:"Kế hoạch",suaNhomTK:!1,removeNhomTK:"",trangThaiHD:"Đang hoạt động",linkDoiMK:"/doi-mat-khau",elNhomTK:[{name:"Kế hoạch",maNhom:"kh"},{name:"Tài chính",maNhom:"tc"}],breadcrumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Tài khoản",disabled:!1,to:"/danh-sach-tai-khoan"},{text:"Chi tiết tài khoản",disabled:!0}],msgErrorEmail:[function(t){return!!t||"E-mail không được để trống"},function(t){return/^[A-Za-z0-9]+([.]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/.test(t)||"Sai định dạng E-mail"}],msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{2})+([.]{1})+([0-9]{3})+([.]{1})+([0-9]{3}))\b/.test(t)||"Sai định dạng số điện thoại"}]}},methods:{fixSdt:function(){this.tempSdt=this.sdt.replace(/[^0-9\s]/gi,""),this.sdt=this.tempSdt.replace(/(\d{1,4})(\d{1,3})(\d{1,3})/g,"$1.$2.$3")},suaAllFunc:function(){this.suaAll=!0,this.suaHoTen=!0,this.suaPhongBan=!0,this.suaEmail=!0,this.suaChucVu=!0,this.suaSdt=!0,this.suaNhomTK=!0,this.removeHoTen=this.hoTen,this.removePhongBan=this.phongBan,this.removeEmail=this.email,this.removeChucVu=this.chucVu,this.removeSdt=this.sdt,this.removeNhomTK=this.nhomTK},huyAllFunc:function(){""!=this.removeHoTen&&1==this.suaHoTen&&(this.hoTen=this.removeHoTen),""!=this.removePhongBan&&1==this.suaPhongBan&&(this.phongBan=this.removePhongBan),""!=this.removeEmail&&1==this.suaEmail&&(this.email=this.removeEmail),""!=this.removeChucVu&&1==this.suaChucVu&&(this.chucVu=this.removeChucVu),""!=this.removeSdt&&1==this.suaSdt&&(this.sdt=this.removeSdt),""!=this.removeNhomTK&&1==this.suaNhomTK&&(this.nhomTK=this.removeNhomTK),this.suaAll=!1,this.suaHoTen=!1,this.suaPhongBan=!1,this.suaEmail=!1,this.suaChucVu=!1,this.suaSdt=!1,this.suaNhomTK=!1},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,this.suaAll=!1,this.suaHoTen=!1,this.suaPhongBan=!1,this.suaEmail=!1,this.suaChucVu=!1,this.suaSdt=!1,this.suaNhomTK=!1)}},computed:{dsAllFieldsEdit:function(){return 1==this.suaHoTen||1==this.suaPhongBan||1==this.suaEmail||1==this.suaChucVu||1==this.suaSdt||1==this.suaNhomTK},sdtFormat:function(){return this.fixSdt(),this.sdt}},layout:"def_layout_mini_false",components:{router:l.a,toolbox:o.a}},c=(n(406),n(8)),v=n(20),h=n.n(v),d=n(285),m=n(116),f=n(113),_=n(114),x=n(470),y=n(107),A=n(108),k=n(469),T=n(283),C=n(491),S=n(118),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[n("router",{attrs:{breadcrumbsItems:t.breadcrumbsItems}}),t._v(" "),n("v-spacer"),t._v(" "),n("toolbox",{attrs:{btnEditAll:!0,btnDoiMK:!0,btnLock:!0,btnPrint:!0,linkDoiMK:t.linkDoiMK,suaAll:t.suaAll,trangthai:t.trangThaiHD,dsAllFieldsEdit:t.dsAllFieldsEdit},on:{suaAllFunc:t.suaAllFunc,huyAllFunc:t.huyAllFunc,validate:t.validate}})],1),t._v(" "),n("v-container",{attrs:{fluid:"","align-center":"","justify-center":"",row:"","fill-height":""}},[n("div",{staticClass:"frame-chitiet"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t.suaAll?t._e():n("p",{staticClass:"text-xs-center title mb-0"},[t._v("Chi tiết thông tin tài khoản")]),t._v(" "),t.suaAll?n("p",{staticClass:"text-xs-center title mb-0"},[t._v("Sửa thông tin tài khoản")]):t._e(),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Tên tài khoản")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.tenTK))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaHoTen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Họ tên")]),t._v(" "),t.suaHoTen?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.hoTen))]),t._v(" "),t.suaHoTen?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"hoTen",rules:[function(t){return!!t||"Họ tên không được để trống"}],required:"","pt-0":""},model:{value:t.hoTen,callback:function(e){t.hoTen=e},expression:"hoTen"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaHoTen&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaHoTen&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaHoTen=!1,t.hoTen=t.removeHoTen}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaHoTen&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeHoTen=t.hoTen,t.huyAllFunc(),t.suaHoTen=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaPhongBan},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Phòng ban")]),t._v(" "),t.suaPhongBan?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.phongBan))]),t._v(" "),t.suaPhongBan?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"phongBan",rules:[function(t){return!!t||"Phòng ban không được để trống"}],required:"","pt-0":""},model:{value:t.phongBan,callback:function(e){t.phongBan=e},expression:"phongBan"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaPhongBan&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaPhongBan&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaPhongBan=!1,t.phongBan=t.removePhongBan}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaPhongBan&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removePhongBan=t.phongBan,t.huyAllFunc(),t.suaPhongBan=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaEmail},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Email")]),t._v(" "),t.suaEmail?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.email))]),t._v(" "),t.suaEmail?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"email",rules:t.msgErrorEmail,required:"","pt-0":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaEmail&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaEmail&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaEmail=!1,t.email=t.removeEmail}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaEmail&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeEmail=t.email,t.huyAllFunc(),t.suaEmail=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaChucVu},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Chức vụ")]),t._v(" "),t.suaChucVu?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.chucVu))]),t._v(" "),t.suaChucVu?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"chucVu",rules:[function(t){return!!t||"Chức vụ không được để trống"}],required:"","pt-0":""},model:{value:t.chucVu,callback:function(e){t.chucVu=e},expression:"chucVu"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaChucVu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaChucVu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaChucVu=!1,t.chucVu=t.removeChucVu}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaChucVu&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeChucVu=t.chucVu,t.huyAllFunc(),t.suaChucVu=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaSdt},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Số điện thoại")]),t._v(" "),t.suaSdt?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.sdtFormat))]),t._v(" "),t.suaSdt?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{"pt-0":"",rules:t.msgSdt,required:""},on:{keyup:t.fixSdt,blur:t.fixSdt},model:{value:t.sdt,callback:function(e){t.sdt=e},expression:"sdt"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaSdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaSdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaSdt=!1,t.sdt=t.removeSdt}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaSdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeSdt=t.sdt,t.huyAllFunc(),t.suaSdt=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNhomTK},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Nhóm tài khoản")]),t._v(" "),t.suaNhomTK?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.nhomTK))]),t._v(" "),t.suaNhomTK?n("v-flex",[n("v-select",{staticClass:"custom-textfield",attrs:{label:"Nhóm tài khoản",items:t.elNhomTK,"item-text":"name","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn nhóm"}],required:""},model:{value:t.nhomTK,callback:function(e){t.nhomTK=e},expression:"nhomTK"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaNhomTK&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaNhomTK&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNhomTK=!1,t.nhomTK=t.removeNhomTK}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaNhomTK&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeNhomTK=t.nhomTK,t.huyAllFunc(),t.suaNhomTK=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs6:"",grow:"","pr-1":""}},[t._v("Trạng thái hoạt động")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[n("v-icon",{staticClass:"pr-3",staticStyle:{"margin-bottom":"-4px",color:"#000"}},[t._v("check_circle")]),t._v("\n            "+t._s(t.trangThaiHD)+"\n          ")],1)],1)],1)],1)])],1)},[],!1,null,"3d69bf17",null);e.default=component.exports;h()(component,{VApp:d.a,VBtn:m.a,VContainer:f.a,VFlex:_.a,VForm:x.a,VIcon:y.a,VLayout:A.a,VSelect:k.a,VSpacer:T.a,VTextField:C.a,VToolbar:S.a})}}]);