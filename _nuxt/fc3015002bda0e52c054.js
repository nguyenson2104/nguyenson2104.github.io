(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{288:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("08d4b84c",content,!0,{sourceMap:!1})},289:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},291:function(t,e,n){"use strict";var l={props:["breadcrumbsItems"]},o=n(8),r=n(20),c=n.n(r),v=n(332),d=n(107),h=n(285),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBreadcrumbs:v.a,VIcon:d.a,VToolbarItems:h.a})},299:function(t,e,n){"use strict";n(122),n(29),n(15),n(168),n(30),n(31),n(288);var l=n(45);e.a={name:"v-form",mixins:[Object(l.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},n={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",function(l){l&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))}):n.valid=e(input),n},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},300:function(t,e,n){var content=n(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("336de78c",content,!0,{sourceMap:!1})},301:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}",""])},327:function(t,e,n){"use strict";var l={data:function(){return{}},props:{trangThaiHD:{type:String,default:"Chờ xác nhận"},suaAll:{type:Boolean,default:!1},trangthai:{type:String,default:"Đang hoạt động"},dsAllFieldsEdit:{type:Boolean,default:!1},btnExcel:{type:Boolean,default:!1},btnLock:{type:Boolean,default:!1},btnEditAll:{type:Boolean,default:!1},btnPrint:{type:Boolean,default:!1},btnDel:{type:Boolean,default:!1},btnDoiMK:{type:Boolean,default:!1},btnCancel:{type:Boolean,default:!1},linkDoiMK:{type:String,default:""}},methods:{suaDsHuyen:function(){this.$emit("suaDsHuyen")},suaAllFunc:function(){this.$emit("suaAllFunc")},huyAllFunc:function(){this.$emit("huyAllFunc")},validate:function(){this.$emit("validate")}}},o=n(8),r=n(20),c=n.n(r),v=n(117),d=n(114),h=n(107),f=n(285),_=n(282),component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDoiMK?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:"",to:t.linkDoiMK}},l),[n("v-icon",[t._v("mdi-key-variant")])],1)]}}],null,!1,25299971)},[t._v(" "),n("span",[t._v("Đổi mật khẩu")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnEditAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAllFunc(),t.suaDsHuyen()}}},l),[n("v-icon",[t._v("edit")])],1)]}}],null,!1,2420839842)},[t._v(" "),n("span",[t._v("Sửa tất cả")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnPrint?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({class:{"v-btn--disabled":t.dsAllFieldsEdit},attrs:{icon:""}},l),[n("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,1897770753)},[t._v(" "),n("span",[t._v("In")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.validate()}}},l),[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,3212056989)},[t._v(" "),n("span",[t._v("Lưu lại")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},l),[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),n("span",[t._v("Hủy bỏ")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"==t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Không hoạt động"}}},l),[n("v-icon",[t._v("lock")])],1)]}}],null,!1,445311523)},[t._v(" "),n("span",[t._v("Khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"!=t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Đang hoạt động"}}},l),[n("v-icon",[t._v("lock_open")])],1)]}}],null,!1,1712601230)},[t._v(" "),n("span",[t._v("Mở khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnExcel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("mdi-file-excel")])],1)]}}],null,!1,512336027)},[t._v(" "),n("span",[t._v("Xuất Excel")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("delete")])],1)]}}],null,!1,2997350483)},[t._v(" "),n("span",[t._v("Xóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnCancel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-btn",t._g({attrs:{icon:""}},l),[n("v-icon",[t._v("cancel")])],1)]}}],null,!1,1769432908)},[t._v(" "),n("span",[t._v("Hủy")])]):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:v.a,VFlex:d.a,VIcon:h.a,VToolbarItems:f.a,VTooltip:_.a})},332:function(t,e,n){"use strict";n(24),n(300);var l=n(65),o=n(7);var r=Object(o.a)(l.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return t={"v-breadcrumbs__item":!0},e=this.activeClass,n=this.disabled,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t;var t,e,n}},render:function(t){var e=this.generateRouteLink(this.classes);return t("li",[t(e.tag,e.data,this.$slots.default)])}}),c=n(1),v=Object(c.f)("v-breadcrumbs__divider","li"),d=n(14),h=n(9),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(o.a)(d.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return f({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(h.d)("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(h.d)("justify-end",'class="justify-end"',this),this.$slots.default&&Object(h.d)("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,i=0;i<this.$slots.default.length;i++){var n=this.$slots.default[i];n.componentOptions&&"v-breadcrumbs-item"===n.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(n),e=!0):t.push(n)}return t}},genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var l=this.items[i];n.push(l.text),e?t.push(this.$scopedSlots.item({item:l})):t.push(this.$createElement(r,{key:n.join("."),props:l},[l.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},348:function(t,e,n){var content=n(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("0a45dc74",content,!0,{sourceMap:!1})},580:function(t,e,n){"use strict";var l=n(348);n.n(l).a},581:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--light.application[data-v-04e0905c]{background:#fff}.container[data-v-04e0905c]{padding-top:0}.menuable__content__active[data-v-04e0905c]{min-width:0!important}",""])},683:function(t,e,n){"use strict";n.r(e);n(32);var l=n(123),o=(n(39),n(291)),r=n(327),c={layout:"def_layout_mini_false",data:function(){var t=this;return{valid:!0,suaAll:!1,DVVT:"Công ty cổ phần vận tải Thái Nguyên",removeDVVT:"",suaDVVT:!1,hoTen:"Nguyễn Văn A",removeHoTen:"",suaHoTen:!1,sdt:"0987456321",suaSdt:!1,tempSdt:"",removeSdt:"",hangGiayPhep:"C1",removeHangGiayPhep:"",suaHangGiayPhep:!1,soGPLX:"360100",removeSoGPLX:"",suaSoGPLX:!1,menuDate_first:!1,menuDate_end:!1,hieuLucGPLX_first:new Date("2019-04-12").toISOString().substr(0,10),removeHieuLucGPLX_first:(new Date).toISOString().substr(0,10),suaHieuLucGPLX_first:!1,hieuLucGPLX_end:new Date("2019-04-15").toISOString().substr(0,10),removeHieuLucGPLX_end:(new Date).toISOString().substr(0,10),suaHieuLucGPLX_end:!1,bksXeHayChay:"20B-1234",soNamKinhNghiem:"20",removeSoNamKinhNghiem:"",suaSoNamKinhNghiem:!1,ngayBatDau:"01/01/2019",ngayKetThuc:"02/05/2019",soTuyen:"20",soTuyenDaChay:"100",soXeDaLai:"20",linkBangLichSu:"/lich-su-hoat-dong",dsHangGiayPhep:[{hang:"B1",maHang:""},{hang:"C1",maHang:""}],breadcrumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Lái xe",disabled:!1,to:"/danh-sach-thong-tin-lai-xe"},{text:"Chi tiết thông tin lái xe",disabled:!0}],msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{2})+([.]{1})+([0-9]{3})+([.]{1})+([0-9]{3}))\b/.test(t)||"Sai định dạng số điện thoại"}],dateRules:[function(e){return t.ngayBatDau&&t.ngayKetThuc?!(t.ngayBatDau>=t.ngayKetThuc)||"Ngày kết thúc phải lớn hơn ngày bắt đầu":!!t.ngayKetThuc||"Ngày kết thúc không được để trống"}]}},methods:{fixSdt:function(){this.tempSdt=this.sdt.replace(/[^0-9\s]/gi,""),this.sdt=this.tempSdt.replace(/(\d{1,4})(\d{1,3})(\d{1,3})/g,"$1.$2.$3")},suaAllFunc:function(){this.suaAll=!0,1!=this.suaDVVT&&(this.removeDVVT=this.DVVT),1!=this.suaHoTen&&(this.removeHoTen=this.hoTen),1!=this.suaSdt&&(this.removeSdt=this.sdt),1!=this.suaHangGiayPhep&&(this.removeHangGiayPhep=this.hangGiayPhep),1!=this.suaSoGPLX&&(this.removeSoGPLX=this.soGPLX),1!=this.suaHieuLucGPLX_first&&(this.removeHieuLucGPLX_first=this.hieuLucGPLX_first),1!=this.suaHieuLucGPLX_end&&(this.removeHieuLucGPLX_end=this.hieuLucGPLX_end),this.suaDVVT=!0,this.suaHoTen=!0,this.suaSdt=!0,this.suaHangGiayPhep=!0,this.suaSoGPLX=!0,this.suaHieuLucGPLX_first=!0,this.suaHieuLucGPLX_end=!0},huyAllFunc:function(){""!=this.removeDVVT&&1==this.suaDVVT&&(this.DVVT=this.removeDVVT),""!=this.removeHoTen&&1==this.suaHoTen&&(this.hoTen=this.removeHoTen),""!=this.removeSdt&&1==this.suaSdt&&(this.sdt=this.removeSdt),""!=this.removeHangGiayPhep&&1==this.suaHangGiayPhep&&(this.hangGiayPhep=this.removeHangGiayPhep),""!=this.removeSoGPLX&&1==this.suaSoGPLX&&(this.soGPLX=this.removeSoGPLX),""!=this.removeHieuLucGPLX_first&&1==this.suaHieuLucGPLX_first&&(this.hieuLucGPLX_first=this.removeHieuLucGPLX_first),""!=this.removeHieuLucGPLX_end&&1==this.suaHieuLucGPLX_end&&(this.hieuLucGPLX_end=this.removeHieuLucGPLX_end),this.suaAll=!1,this.suaDVVT=!1,this.suaHoTen=!1,this.suaSdt=!1,this.suaHangGiayPhep=!1,this.suaSoGPLX=!1,this.suaHieuLucGPLX_first=!1,this.suaHieuLucGPLX_end=!1},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,this.suaAll=!1,this.suaHoTen=!1,this.suaSdt=!1,this.suaHangGiayPhep=!1,this.suaSoGPLX=!1,this.suaHieuLucGPLX_first=!1,this.suaHieuLucGPLX_end=!1,this.suaDVVT=!1)},formatDate:function(t){var e=t.split("-"),n=Object(l.a)(e,3),o=n[0],r=n[1],c=n[2];return"".concat(c,"/").concat(r,"/").concat(o)},openDate_first:function(){this.menuDate_first=!0},openDate_end:function(){this.menuDate_end=!0}},computed:{sdtFormat:function(){return this.fixSdt(),this.sdt},dsAllFieldsEdit:function(){return 1==this.suaDVVT||1==this.suaHoTen||1==this.suaSdt||1==this.suaHangGiayPhep||1==this.suaSoGPLX||1==this.suaHieuLucGPLX_first||1==this.suaHieuLucGPLX_end||1==this.suaSoNamKinhNghiem}},components:{router:o.a,toolbox:r.a}},v=(n(580),n(8)),d=n(20),h=n.n(d),f=n(286),_=n(117),m=n(113),y=n(673),x=n(114),L=n(299),P=n(107),G=n(108),S=n(528),X=n(664),k=n(284),H=n(667),V=n(118),component=Object(v.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[n("router",{attrs:{breadcrumbsItems:t.breadcrumbsItems}}),t._v(" "),n("v-spacer"),t._v(" "),n("toolbox",{attrs:{btnDel:!0,btnEditAll:!0,btnPrint:!0,suaAll:t.suaAll,dsAllFieldsEdit:t.dsAllFieldsEdit},on:{suaAllFunc:t.suaAllFunc,huyAllFunc:t.huyAllFunc,validate:t.validate}})],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticStyle:{width:"900px"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-layout",{staticClass:"custom-layout",staticStyle:{height:"48px"},attrs:{row:""}},[n("v-flex",{staticClass:"title",attrs:{md2:"",lg2:"",grow:"","pt-3":"","pb-2":"","mr-2":""}},[t._v("Thông tin chính")])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaDVVT},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Đơn vị vận tải")]),t._v(" "),t.suaDVVT?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.DVVT))]),t._v(" "),t.suaDVVT?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"DVVT",rules:[function(t){return!!t||"Không được để trống"}],required:"","pt-0":""},model:{value:t.DVVT,callback:function(e){t.DVVT=e},expression:"DVVT"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaDVVT&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaDVVT&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaDVVT=!1,t.DVVT=t.removeDVVT}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaDVVT&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeDVVT=t.DVVT,t.huyAllFunc(),t.suaDVVT=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaHoTen},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Họ tên")]),t._v(" "),t.suaHoTen?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.hoTen))]),t._v(" "),t.suaHoTen?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"hoTen",rules:[function(t){return!!t||"Không được để trống"}],required:"","pt-0":""},model:{value:t.hoTen,callback:function(e){t.hoTen=e},expression:"hoTen"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaHoTen&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaHoTen&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaHoTen=!1,t.hoTen=t.removeHoTen}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaHoTen&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeHoTen=t.hoTen,t.huyAllFunc(),t.suaHoTen=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaSdt},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Số điện thoại")]),t._v(" "),t.suaSdt?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.sdtFormat))]),t._v(" "),t.suaSdt?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"sdt","pt-0":"",rules:t.msgSdt,required:""},on:{keyup:t.fixSdt,blur:t.fixSdt},model:{value:t.sdt,callback:function(e){t.sdt=e},expression:"sdt"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaSdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaSdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaSdt=!1,t.sdt=t.removeSdt}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaSdt&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeSdt=t.sdt,t.huyAllFunc(),t.suaSdt=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaHangGiayPhep},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Hạng giấy phép lái xe")]),t._v(" "),t.suaHangGiayPhep?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.hangGiayPhep))]),t._v(" "),t.suaHangGiayPhep?n("v-flex",[n("v-select",{staticClass:"custom-textfield",attrs:{label:"Nhóm tài khoản",name:"hangGiayPhep",items:t.dsHangGiayPhep,"item-text":"hang","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn hạng giấy phép"}],required:""},model:{value:t.hangGiayPhep,callback:function(e){t.hangGiayPhep=e},expression:"hangGiayPhep"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaHangGiayPhep&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaHangGiayPhep&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaHangGiayPhep=!1,t.hangGiayPhep=t.removeHangGiayPhep}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaHangGiayPhep&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeHangGiayPhep=t.hangGiayPhep,t.huyAllFunc(),t.suaHangGiayPhep=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaSoGPLX},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Số giấy phép lái xe")]),t._v(" "),t.suaSoGPLX?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.soGPLX))]),t._v(" "),t.suaSoGPLX?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"soGPLX","pt-0":"",rules:[function(t){return!!t||"Không được để trống"}],required:""},model:{value:t.soGPLX,callback:function(e){t.soGPLX=e},expression:"soGPLX"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaSoGPLX&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaSoGPLX&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaSoGPLX=!1,t.soGPLX=t.removeSoGPLX}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaSoGPLX&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeSoGPLX=t.soGPLX,t.huyAllFunc(),t.suaSoGPLX=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaHieuLucGPLX_first},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md4:"",lg4:"",grow:"","pr-1":""}},[t._v("Hiệu lực giấy phép lái xe từ ngày")]),t._v(" "),t.suaHieuLucGPLX_first?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.formatDate(t.hieuLucGPLX_first)))]),t._v(" "),t.suaHieuLucGPLX_first?n("v-flex",[n("v-menu",{ref:"menuDate_first",attrs:{"close-on-content-click":!1,"open-on-click":!1,"nudge-right":40,"return-value":t.hieuLucGPLX_first,lazy:"",transition:"scale-transition","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.hieuLucGPLX_first=e},"update:return-value":function(e){t.hieuLucGPLX_first=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-text-field",t._g({staticClass:"custom-textfield",attrs:{"append-icon":"event",type:"date",rules:[function(t){return!!t||"Ngày bắt đầu không được để trống"}],required:""},on:{"click:append":t.openDate_first},model:{value:t.hieuLucGPLX_first,callback:function(e){t.hieuLucGPLX_first=e},expression:"hieuLucGPLX_first"}},l))]}}],null,!1,4225395345),model:{value:t.menuDate_first,callback:function(e){t.menuDate_first=e},expression:"menuDate_first"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"vi-vn"},model:{value:t.hieuLucGPLX_first,callback:function(e){t.hieuLucGPLX_first=e},expression:"hieuLucGPLX_first"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menuDate_first=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menuDate_first.save(t.hieuLucGPLX_first)}}},[t._v("OK")])],1)],1)],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaHieuLucGPLX_first&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaHieuLucGPLX_first&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaHieuLucGPLX_first=!1,t.hieuLucGPLX_first=t.removeHieuLucGPLX_first}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaHieuLucGPLX_first&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeHieuLucGPLX_first=t.hieuLucGPLX_first,t.huyAllFunc(),t.suaHieuLucGPLX_first=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaHieuLucGPLX_end},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md4:"",lg4:"",grow:"","pr-1":""}},[t._v("Hạn hiệu lực giấy phép lái xe")]),t._v(" "),t.suaHieuLucGPLX_end?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.formatDate(t.hieuLucGPLX_end)))]),t._v(" "),t.suaHieuLucGPLX_end?n("v-flex",[n("v-menu",{ref:"menuDate_end",attrs:{"close-on-content-click":!1,"open-on-click":!1,"nudge-right":40,"return-value":t.hieuLucGPLX_end,lazy:"",transition:"scale-transition","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.hieuLucGPLX_end=e},"update:return-value":function(e){t.hieuLucGPLX_end=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[n("v-text-field",t._g({staticClass:"custom-textfield",attrs:{"append-icon":"event",type:"date",required:"",rules:t.dateRules},on:{"click:append":t.openDate_end},model:{value:t.hieuLucGPLX_end,callback:function(e){t.hieuLucGPLX_end=e},expression:"hieuLucGPLX_end"}},l))]}}],null,!1,3410514916),model:{value:t.menuDate_end,callback:function(e){t.menuDate_end=e},expression:"menuDate_end"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"vi-vn"},model:{value:t.hieuLucGPLX_end,callback:function(e){t.hieuLucGPLX_end=e},expression:"hieuLucGPLX_end"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menuDate_end=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menuDate_end.save(t.hieuLucGPLX_end)}}},[t._v("OK")])],1)],1)],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaHieuLucGPLX_end&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaHieuLucGPLX_end&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaHieuLucGPLX_end=!1,t.hieuLucGPLX_end=t.removeHieuLucGPLX_end}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaHieuLucGPLX_end&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeHieuLucGPLX_end=t.hieuLucGPLX_end,t.huyAllFunc(),t.suaHieuLucGPLX_end=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",grow:"","pr-1":""}},[t._v("Biển kiểm soát xe hay chạy")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.bksXeHayChay))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaSoNamKinhNghiem},attrs:{row:""}},[n("v-flex",{staticClass:"font16 text-flex",attrs:{"pl-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Số năm kinh nghiệm:")]),t._v(" "),t.suaSoNamKinhNghiem?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.soNamKinhNghiem))]),t._v(" "),t.suaSoNamKinhNghiem?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"soNamKinhNghiem",type:"number",min:"1","pt-0":"",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>0||"Số nhập vào > 0"}],required:""},model:{value:t.soNamKinhNghiem,callback:function(e){t.soNamKinhNghiem=e},expression:"soNamKinhNghiem"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md2:"",lg2:"","pr-0":""}},[1==t.suaSoNamKinhNghiem&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaSoNamKinhNghiem&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaSoNamKinhNghiem=!1,t.soNamKinhNghiem=t.removeSoNamKinhNghiem}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaSoNamKinhNghiem&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeSoNamKinhNghiem=t.soNamKinhNghiem,t.huyAllFunc(),t.suaSoNamKinhNghiem=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"title",attrs:{"pb-2":"","pt-3":"",md4:"",lg4:"",xs5:"",grow:"","pr-1":""}},[t._v("Lịch sử hoạt động của lái xe")])],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:"",lg6:"",grow:"","pr-4":""}},[n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"text-flex ml-3"},[t._v("Từ ngày: "+t._s(t.ngayBatDau)+" đến ngày: "+t._s(t.ngayKetThuc))]),t._v(" "),n("v-flex",{staticStyle:{"text-align":"right"}},[n("v-icon",{staticClass:"mt-3 mr-1"},[t._v("calendar_today")])],1)],1)],1),t._v(" "),n("v-flex",{attrs:{"ml-4":""}},[n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"text-flex ml-3"},[t._v("Số tuyến")]),t._v(" "),n("v-flex",{staticStyle:{"text-align":"right"}},[n("p",{staticClass:"mt-3 mr-1 mb-0"},[t._v(t._s(t.soTuyen))])])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:"",lg6:"",grow:"","pr-4":""}},[n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"text-flex ml-3"},[t._v("Số tuyến đã chạy")]),t._v(" "),n("v-flex",{staticStyle:{"text-align":"right"}},[n("p",{staticClass:"mt-3 mr-1 mb-0"},[t._v(t._s(t.soTuyenDaChay))])])],1)],1),t._v(" "),n("v-flex",{attrs:{"ml-4":""}},[n("v-layout",{staticClass:"custom-layout",attrs:{row:""}},[n("v-flex",{staticClass:"text-flex ml-3"},[t._v("Số xe đã lái")]),t._v(" "),n("v-flex",{staticStyle:{"text-align":"right"}},[n("p",{staticClass:"mt-3 mr-1 mb-0"},[t._v(t._s(t.soXeDaLai))])])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"mt-4":""}},[n("router-link",{staticStyle:{"text-decoration":"underline",color:"#006FFF"},attrs:{to:t.linkBangLichSu}},[t._v("Bảng lịch sử hoạt động của lái xe")])],1)],1)],1)],1)])],1)},[],!1,null,"04e0905c",null);e.default=component.exports;h()(component,{VApp:f.a,VBtn:_.a,VContainer:m.a,VDatePicker:y.a,VFlex:x.a,VForm:L.a,VIcon:P.a,VLayout:G.a,VMenu:S.a,VSelect:X.a,VSpacer:k.a,VTextField:H.a,VToolbar:V.a})}}]);