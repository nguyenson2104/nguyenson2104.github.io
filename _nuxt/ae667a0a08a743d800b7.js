(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{287:function(t,e,l){var content=l(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("08d4b84c",content,!0,{sourceMap:!1})},288:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},290:function(t,e,l){"use strict";var n={props:["breadcrumbsItems"]},o=l(8),r=l(20),c=l.n(r),v=l(331),h=l(107),d=l(285),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-toolbar-items",[l("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[l("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBreadcrumbs:v.a,VIcon:h.a,VToolbarItems:d.a})},298:function(t,e,l){"use strict";l(122),l(29),l(15),l(168),l(30),l(31),l(287);var n=l(45);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},l={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?l.shouldValidate=input.$watch("shouldValidate",function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(l.valid=e(input)))}):l.valid=e(input),l},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},299:function(t,e,l){var content=l(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("336de78c",content,!0,{sourceMap:!1})},300:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}",""])},325:function(t,e,l){"use strict";var n={data:function(){return{}},props:{trangThaiHD:{type:String,default:"Chờ xác nhận"},suaAll:{type:Boolean,default:!1},trangthai:{type:String,default:"Đang hoạt động"},dsAllFieldsEdit:{type:Boolean,default:!1},btnExcel:{type:Boolean,default:!1},btnLock:{type:Boolean,default:!1},btnEditAll:{type:Boolean,default:!1},btnPrint:{type:Boolean,default:!1},btnDel:{type:Boolean,default:!1},btnDoiMK:{type:Boolean,default:!1},btnCancel:{type:Boolean,default:!1},linkDoiMK:{type:String,default:""}},methods:{suaDsHuyen:function(){this.$emit("suaDsHuyen")},suaAllFunc:function(){this.$emit("suaAllFunc")},huyAllFunc:function(){this.$emit("huyAllFunc")},validate:function(){this.$emit("validate")}}},o=l(8),r=l(20),c=l.n(r),v=l(117),h=l(114),d=l(107),f=l(285),m=l(282),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-toolbar-items",[l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDoiMK?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:"",to:t.linkDoiMK}},n),[l("v-icon",[t._v("mdi-key-variant")])],1)]}}],null,!1,25299971)},[t._v(" "),l("span",[t._v("Đổi mật khẩu")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnEditAll&&"Chờ xác nhận"==t.trangThaiHD?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAllFunc(),t.suaDsHuyen()}}},n),[l("v-icon",[t._v("edit")])],1)]}}],null,!1,2420839842)},[t._v(" "),l("span",[t._v("Sửa tất cả")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnPrint?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({class:{"v-btn--disabled":t.dsAllFieldsEdit},attrs:{icon:""}},n),[l("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,1897770753)},[t._v(" "),l("span",[t._v("In")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.validate()}}},n),[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,3212056989)},[t._v(" "),l("span",[t._v("Lưu lại")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},n),[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),l("span",[t._v("Hủy bỏ")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"==t.trangthai?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Không hoạt động"}}},n),[l("v-icon",[t._v("lock")])],1)]}}],null,!1,445311523)},[t._v(" "),l("span",[t._v("Khóa")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"!=t.trangthai?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Đang hoạt động"}}},n),[l("v-icon",[t._v("lock_open")])],1)]}}],null,!1,1712601230)},[t._v(" "),l("span",[t._v("Mở khóa")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnExcel?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""}},n),[l("v-icon",[t._v("mdi-file-excel")])],1)]}}],null,!1,512336027)},[t._v(" "),l("span",[t._v("Xuất Excel")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDel?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""}},n),[l("v-icon",[t._v("delete")])],1)]}}],null,!1,2997350483)},[t._v(" "),l("span",[t._v("Xóa")])]):t._e()],1),t._v(" "),l("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnCancel?l("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-btn",t._g({attrs:{icon:""}},n),[l("v-icon",[t._v("cancel")])],1)]}}],null,!1,1769432908)},[t._v(" "),l("span",[t._v("Hủy")])]):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:v.a,VFlex:h.a,VIcon:d.a,VToolbarItems:f.a,VTooltip:m.a})},331:function(t,e,l){"use strict";l(24),l(299);var n=l(65),o=l(7);var r=Object(o.a)(n.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return t={"v-breadcrumbs__item":!0},e=this.activeClass,l=this.disabled,e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t;var t,e,l}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}}),c=l(1),v=Object(c.f)("v-breadcrumbs__divider","li"),h=l(14),d=l(9),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(o.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return f({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(d.d)("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(d.d)("justify-end",'class="justify-end"',this),this.$slots.default&&Object(d.d)("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var l=this.$slots.default[i];l.componentOptions&&"v-breadcrumbs-item"===l.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(l),e=!0):t.push(l)}return t}},genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,l=[],i=0;i<this.items.length;i++){var n=this.items[i];l.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(r,{key:l.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},343:function(t,e,l){var content=l(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(6).default)("1068ade6",content,!0,{sourceMap:!1})},400:function(t,e,l){"use strict";var n=l(343);l.n(n).a},401:function(t,e,l){(t.exports=l(5)(!1)).push([t.i,".theme--light.application[data-v-ddebb9f8]{background:#fff}.blur-icon[data-v-ddebb9f8]{color:rgba(0,0,0,.6)!important}.container[data-v-ddebb9f8]{padding-top:0}",""])},542:function(t,e,l){"use strict";l.r(e);l(32);var n=l(123),o=(l(122),l(39),l(290)),r=l(325),c={layout:"def_layout_mini_false",data:function(){return{valid:!0,menuDate:!1,date:(new Date).toISOString().substr(0,10),suaAll:!1,suaChucVu:!1,chucVu:"Giám đốc",removechucVu:"",ngDaiDien:"Nguyễn Văn A",suaNgDaiDien:!1,removeNgDaiDien:"",suaDiaChi:!1,diachi:"Tổ 10A Phường Tân Lập",removeDiaChi:"",suaSdt:!1,sdt:"0353205411",removeSdt:"",suaEmail:!1,email:"htxthanhcong@gmail.com",removeEmail:"",suaWebsite:!1,website:"www.htxthanhcong.com",removeWebsite:"",suaAllGPKD:!1,soGiayPhep:"37/GPKDVT",soGiayPhep_first:"37/GPKDVT",removeSoGiayPhep:"",soLanSua:1,noiCap:"Hà Nội",noiCap_first:"Hà Nội",removeNoiCap:"",ngayCap:"02/08/2018",ngayCap_first:"02/08/2018",removeNgayCap:"",elTinh:"Thái Nguyên",removeTinh:"",elHuyen:"TP Thái Nguyên",removeHuyen:"",dsHuyen:[],trangthai:"Đang hoạt động",msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{2})+([.]{1})+([0-9]{3})+([.]{1})+([0-9]{3}))\b/.test(t)||"Sai định dạng số điện thoại"}],msgErrorEmail:[function(t){return!!t||"E-mail không được để trống"},function(t){return/^[A-Za-z0-9]+([.]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/.test(t)||"Sai định dạng E-mail"}],tinh:[{tentinh:"Thái Nguyên",matinh:"tn",itemHuyen:[{tenhuyen:"TP Thái Nguyên",mahuyen:"tn-tptn"},{tenhuyen:"Huyện Đồng Hỷ",mahuyen:"tn-dhy"}]},{tentinh:"TP. Hồ Chí Minh",matinh:"hcm",itemHuyen:[{tenhuyen:"Huyện Củ Chi",mahuyen:"hcm-cuchi"},{tenhuyen:"Huyện Bình Chánh",mahuyen:"hcm-binhchanh"}]},{tentinh:"Hà Nội",matinh:"hn",itemHuyen:[{tenhuyen:"Huyện Đông Anh",mahuyen:"hn-donganh"},{tenhuyen:"Huyện Sóc Sơn",mahuyen:"hn-socson"}]}],breadcrumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Danh sách ĐVVT",disabled:!1,to:"/danh-sach-van-tai"},{text:"Chi tiết thông tin đơn vị vận tải",disabled:!0}]}},methods:{fixSdt:function(){this.tempSdt=this.sdt.replace(/[^0-9\s]/gi,""),this.sdt=this.tempSdt.replace(/(\d{1,4})(\d{1,3})(\d{1,3})/g,"$1.$2.$3")},showDsHuyen:function(){var t=this;this.elTinh&&(this.dsHuyen=this.tinh.find(function(e){return e.tentinh==t.elTinh}).itemHuyen,this.elHuyen=this.dsHuyen[0].tenhuyen)},suaDsHuyen:function(){var t=this;this.dsHuyen=this.tinh.find(function(e){return e.tentinh==t.elTinh}).itemHuyen},suaAllFunc:function(){this.suaAll=!0,1!=this.suaChucVu&&(this.removechucVu=this.chucVu),1!=this.suaNgDaiDien&&(this.removeNgDaiDien=this.ngDaiDien),1!=this.suaDiaChi&&(this.removeDiaChi=this.diachi,this.removeTinh=this.elTinh,this.removeHuyen=this.elHuyen),1!=this.suaSdt&&(this.removeSdt=this.sdt),1!=this.suaEmail&&(this.removeEmail=this.email),1!=this.suaWebsite&&(this.removeWebsite=this.website),1!=this.suaAllGPKD&&(this.removeSoGiayPhep=this.soGiayPhep,this.removeNoiCap=this.noiCap,this.removeNgayCap=this.ngayCap),this.suaChucVu=!0,this.suaNgDaiDien=!0,this.suaDiaChi=!0,this.suaSdt=!0,this.suaEmail=!0,this.suaWebsite=!0,this.suaAllGPKD=!0},huyAllFunc:function(){""!=this.removeNgDaiDien&&1==this.suaNgDaiDien&&(this.ngDaiDien=this.removeNgDaiDien),""!=this.removechucVu&&1==this.suaChucVu&&(this.chucVu=this.removechucVu),""!=this.removeDiaChi&&1==this.suaDiaChi&&(this.diachi=this.removeDiaChi),""!=this.removeSdt&&1==this.suaSdt&&(this.sdt=this.removeSdt),""!=this.removeEmail&&1==this.suaEmail&&(this.email=this.removeEmail),""!=this.removeWebsite&&1==this.suaWebsite&&(this.website=this.removeWebsite),""!=this.removeTinh&&1==this.suaDiaChi&&(this.elTinh=this.removeTinh),""!=this.removeHuyen&&1==this.suaDiaChi&&(this.elHuyen=this.removeHuyen),""!=this.removeSoGiayPhep&&1==this.suaGPKD&&(this.soGiayPhep=this.removeSoGiayPhep),""!=this.removeNoiCap&&1==this.suaGPKD&&(this.noiCap=this.removeNoiCap),""!=this.removeNgayCap&&1==this.suaGPKD&&(this.ngayCap=this.removeNgayCap),this.suaAll=!1,this.suaChucVu=!1,this.suaNgDaiDien=!1,this.suaDiaChi=!1,this.suaSdt=!1,this.suaEmail=!1,this.suaWebsite=!1,this.suaAllGPKD=!1},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,1==this.suaAllGPKD&&this.soLanSua++,this.suaAll=!1,this.suaChucVu=!1,this.suaNgDaiDien=!1,this.suaDiaChi=!1,this.suaSdt=!1,this.suaEmail=!1,this.suaWebsite=!1,this.suaAllGPKD=!1)},suaGPKD:function(){this.suaAllGPKD=!0,this.removeSoGiayPhep=this.soGiayPhep,this.removeNoiCap=this.noiCap,this.removeNgayCap=this.ngayCap},huySuaGPKD:function(){this.suaAllGPKD=!1,this.soGiayPhep=this.removeSoGiayPhep,this.noiCap=this.removeNoiCap,this.ngayCap=this.removeNgayCap},formatDate:function(){var t=this.date.split("-"),e=Object(n.a)(t,3),l=e[0],o=e[1],r=e[2];return"".concat(r,"/").concat(o,"/").concat(l)}},computed:{fullDiaChi:function(){return this.diachi+", "+this.elHuyen+", Tỉnh "+this.elTinh},sdtFormat:function(){return this.fixSdt(),this.sdt},dsAllFieldsEdit:function(){return 1==this.suaChucVu||1==this.suaNgDaiDien||1==this.suaDiaChi||1==this.suaSdt||1==this.suaEmail||1==this.suaWebsite||1==this.suaAllGPKD}},watch:{date:function(t){this.dateFormatted=this.formatDate(this.date)}},components:{router:o.a,toolbox:r.a}},v=(l(400),l(8)),h=l(20),d=l.n(h),f=l(286),m=l(117),_=l(113),x=l(529),y=l(114),C=l(298),D=l(107),A=l(108),S=l(395),w=l(521),k=l(284),V=l(524),P=l(118),component=Object(v.a)(c,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",{attrs:{light:""}},[l("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[l("router",{attrs:{breadcrumbsItems:t.breadcrumbsItems}}),t._v(" "),l("v-spacer"),t._v(" "),l("toolbox",{attrs:{btnLock:!0,btnEditAll:!0,btnPrint:!0,suaAll:t.suaAll,trangthai:t.trangthai,dsAllFieldsEdit:t.dsAllFieldsEdit},on:{suaAllFunc:t.suaAllFunc,validate:t.validate,huyAllFunc:t.huyAllFunc,suaDsHuyen:t.suaDsHuyen}})],1),t._v(" "),l("v-container",{attrs:{fluid:""}},[l("div",{staticStyle:{width:"900px",margin:"0 auto"}},[l("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[l("v-layout",{staticClass:"custom-layout",staticStyle:{height:"48px"},attrs:{row:""}},[l("v-flex",{staticClass:"title",attrs:{md2:"",lg2:"",grow:"","pt-3":"","pb-2":"","mr-2":""}},[t._v("Thông tin chính")]),t._v(" "),l("v-flex",{attrs:{"pt-3":"","pb-2":""}},[t._v("(Chỉnh sửa lần cuối ngày 1/6/2019 bởi Lục Bé)")])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[l("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Tên đơn vị vận tải")]),t._v(" "),l("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v("HTX Thành Công")])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số hợp đồng")]),t._v(" "),l("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[l("a",{attrs:{href:"#"}},[t._v("11/2019/HĐ-BXTT")])])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Mã số thuế")]),t._v(" "),l("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v("600003515")])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNgDaiDien},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Người đại diện")]),t._v(" "),t.suaNgDaiDien?t._e():l("v-flex",{staticClass:"text-flex",model:{value:t.ngDaiDien,callback:function(e){t.ngDaiDien=e},expression:"ngDaiDien"}},[t._v(t._s(t.ngDaiDien))]),t._v(" "),t.suaNgDaiDien?l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{name:"ngDaiDien",rules:[function(t){return!!t||"Người đại diện không được để trống"}],required:"","pt-0":""},model:{value:t.ngDaiDien,callback:function(e){t.ngDaiDien=e},expression:"ngDaiDien"}})],1):t._e(),t._v(" "),0==t.suaAll?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaNgDaiDien&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaNgDaiDien&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgDaiDien=!1,t.ngDaiDien=t.removeNgDaiDien}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaNgDaiDien&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeNgDaiDien=t.ngDaiDien,t.huyAllFunc(),t.suaNgDaiDien=!0}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaChucVu},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Chức vụ")]),t._v(" "),0==t.suaChucVu&&0==t.suaAll?l("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.chucVu))]):t._e(),t._v(" "),t.suaChucVu?l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{name:"chucVu",rules:[function(t){return!!t||"Chức vụ không được để trống"}],required:"","pt-0":""},model:{value:t.chucVu,callback:function(e){t.chucVu=e},expression:"chucVu"}})],1):t._e(),t._v(" "),0==t.suaAll?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaChucVu&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaChucVu&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaChucVu=!1,t.chucVu=t.removechucVu}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaChucVu&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.removechucVu=t.chucVu,t.huyAllFunc(),t.suaChucVu=!0}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field edit-double-field":t.suaAll,"edit-field edit-double-field":t.suaDiaChi},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Địa chỉ")]),t._v(" "),0==t.suaDiaChi&&0==t.suaAll?l("v-flex",{staticClass:"text-flex",model:{value:t.fullDiaChi,callback:function(e){t.fullDiaChi=e},expression:"fullDiaChi"}},[t._v(t._s(t.fullDiaChi))]):t._e(),t._v(" "),t.suaDiaChi?l("v-flex",[l("v-layout",[l("v-flex",{attrs:{"pr-4":""}},[l("v-select",{staticClass:"custom-textfield",attrs:{label:"Tỉnh/TP",items:t.tinh,"item-text":"tentinh","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},on:{change:t.showDsHuyen},model:{value:t.elTinh,callback:function(e){t.elTinh=e},expression:"elTinh"}})],1),t._v(" "),l("v-flex",[l("v-select",{staticClass:"custom-textfield",attrs:{label:"Quận/Huyện",items:t.dsHuyen,"item-text":"tenhuyen","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",rules:[function(t){return!!t||"Bạn chưa chọn huyện"}],required:""},model:{value:t.elHuyen,callback:function(e){t.elHuyen=e},expression:"elHuyen"}})],1)],1),t._v(" "),l("v-layout",[l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{name:"diachi",rules:[function(t){return!!t||"Địa chỉ không được để trống"}],required:"","pt-0":""},model:{value:t.diachi,callback:function(e){t.diachi=e},expression:"diachi"}})],1),t._v(" "),t.suaAll?t._e():l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaDiaChi&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaDiaChi&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaDiaChi=!1,t.diachi=t.removeDiaChi,t.elTinh=t.removeTinh,t.elHuyen=t.removeHuyen}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e()],1)],1)],1):t._e(),t._v(" "),0==t.suaAll&&0==t.suaDiaChi?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[0==t.suaDiaChi&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeDiaChi=t.diachi,t.removeTinh=t.elTinh,t.removeHuyen=t.elHuyen,t.huyAllFunc(),t.suaDiaChi=!0,t.suaDsHuyen()}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaSdt},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số điện thoại")]),t._v(" "),0==t.suaSdt&&0==t.suaAll?l("v-flex",{staticClass:"text-flex",model:{value:t.sdt,callback:function(e){t.sdt=e},expression:"sdt"}},[t._v(t._s(t.sdtFormat))]):t._e(),t._v(" "),t.suaSdt?l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{"pt-0":"",rules:t.msgSdt,required:""},on:{keyup:t.fixSdt,blur:t.fixSdt},model:{value:t.sdt,callback:function(e){t.sdt=e},expression:"sdt"}})],1):t._e(),t._v(" "),0==t.suaAll?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaSdt&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaSdt&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaSdt=!1,t.sdt=t.removeSdt}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaSdt&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeSdt=t.sdt,t.huyAllFunc(),t.suaSdt=!0}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaEmail},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Email")]),t._v(" "),t.suaEmail?t._e():l("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.email))]),t._v(" "),t.suaEmail?l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{name:"email",rules:t.msgErrorEmail,required:"","pt-0":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1):t._e(),t._v(" "),0==t.suaAll?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaEmail&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaEmail&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaEmail=!1,t.email=t.removeEmail}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaEmail&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeEmail=t.email,t.huyAllFunc(),t.suaEmail=!0}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaWebsite},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Website")]),t._v(" "),0==t.suaWebsite&&0==t.suaAll?l("v-flex",{staticClass:"text-flex",model:{value:t.website,callback:function(e){t.website=e},expression:"website"}},[t._v(t._s(t.website))]):t._e(),t._v(" "),t.suaWebsite?l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{name:"website",rules:[function(t){return!!t||"Chức vụ không được để trống"}],required:"","pt-0":""},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}})],1):t._e(),t._v(" "),0==t.suaAll?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaWebsite&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaWebsite&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaWebsite=!1,t.website=t.removeWebsite}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaWebsite&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeWebsite=t.website,t.huyAllFunc(),t.suaWebsite=!0}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số lượng xe")]),t._v(" "),l("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[l("a",{attrs:{href:"#"}},[t._v("15")])])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số lượng tuyến")]),t._v(" "),l("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[l("a",{attrs:{href:"#"}},[t._v("15")])])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Trạng thái")]),t._v(" "),l("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll},model:{value:t.trangthai,callback:function(e){t.trangthai=e},expression:"trangthai"}},[t._v(t._s(t.trangthai))])],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[1==t.soLanSua?l("v-flex",{staticClass:"title",attrs:{"pb-2":"","pt-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Thông tin GPKD cấp lần đầu")]):t._e(),t._v(" "),1!=t.soLanSua?l("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Thông tin GPKD")]):t._e(),t._v(" "),1!=t.soLanSua?l("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Cấp lần đầu")]):t._e(),t._v(" "),1!=t.soLanSua?l("v-flex",{staticClass:"font20",attrs:{"pb-2":"","pt-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Lần cấp hiện tại")]):t._e(),t._v(" "),0==t.suaAll?l("v-flex",{staticStyle:{"text-align":"right"},attrs:{"pr-0":"","mt-1":""}},[1==t.suaAllGPKD&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:t.validate}},[l("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaAllGPKD&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaAllGPKD=!1,t.huySuaGPKD()}}},[l("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll?l("v-btn",{attrs:{icon:""},on:{click:function(e){t.huyAllFunc(),t.suaGPKD()}}},[l("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Số giấy phép")]),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll||1!=t.soLanSua?l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v(t._s(t.soGiayPhep_first))]):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll&&1!=t.soLanSua?l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v(t._s(t.soGiayPhep))]):t._e(),t._v(" "),t.suaAllGPKD?l("v-flex",[l("v-text-field",{staticClass:"custom-textfield",attrs:{name:"soGiayPhep",rules:[function(t){return!!t||"Chức vụ không được để trống"}],required:"","pt-0":""},model:{value:t.soGiayPhep,callback:function(e){t.soGiayPhep=e},expression:"soGiayPhep"}})],1):t._e()],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Nơi cấp")]),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll||1!=t.soLanSua?l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v(t._s(t.noiCap_first))]):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll&&1!=t.soLanSua?l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v(t._s(t.noiCap))]):t._e(),t._v(" "),l("v-flex",[t.suaAllGPKD?l("v-select",{staticClass:"custom-textfield",attrs:{label:"Nơi cấp",items:t.tinh,"item-text":"tentinh","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},model:{value:t.noiCap,callback:function(e){t.noiCap=e},expression:"noiCap"}}):t._e()],1)],1),t._v(" "),l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Ngày cấp")]),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll||1!=t.soLanSua?l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v(t._s(t.ngayCap_first))]):t._e(),t._v(" "),0==t.suaAllGPKD&&0==t.suaAll&&1!=t.soLanSua?l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v(t._s(t.ngayCap))]):t._e(),t._v(" "),l("v-flex",[t.suaAllGPKD?l("v-menu",{ref:"menuDate",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[l("v-text-field",t._g({staticClass:"custom-textfield",attrs:{"append-icon":"event",readonly:""},model:{value:t.ngayCap,callback:function(e){t.ngayCap=e},expression:"ngayCap"}},n))]}}],null,!1,937009385),model:{value:t.menuDate,callback:function(e){t.menuDate=e},expression:"menuDate"}},[t._v(" "),l("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"vi-vn"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menuDate=!1}}},[t._v("Cancel")]),t._v(" "),l("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.menuDate.save(t.date),t.ngayCap=t.formatDate()}}},[t._v("OK")])],1)],1):t._e()],1)],1),t._v(" "),1!=t.soLanSua?l("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaAllGPKD},attrs:{row:""}},[l("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("Lần cấp")]),t._v(" "),l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""}},[t._v("1")]),t._v(" "),l("v-flex",{staticClass:"text-flex",attrs:{md3:"",lg3:"",xs5:"",grow:"","pr-1":""},model:{value:t.soLanSua,callback:function(e){t.soLanSua=e},expression:"soLanSua"}},[t._v(t._s(t.soLanSua))])],1):t._e()],1)],1)])],1)},[],!1,null,"ddebb9f8",null);e.default=component.exports;d()(component,{VApp:f.a,VBtn:m.a,VContainer:_.a,VDatePicker:x.a,VFlex:y.a,VForm:C.a,VIcon:D.a,VLayout:A.a,VMenu:S.a,VSelect:w.a,VSpacer:k.a,VTextField:V.a,VToolbar:P.a})}}]);