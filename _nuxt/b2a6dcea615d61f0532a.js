(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{295:function(t,e,n){"use strict";var o={props:["breadcrumbsItems"]},l=n(8),r=n(20),c=n.n(r),v=n(451),h=n(107),d=n(285),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBreadcrumbs:v.a,VIcon:h.a,VToolbarItems:d.a})},468:function(t,e,n){"use strict";var o={data:function(){return{}},props:{trangThaiHD:{type:String,default:"Chờ xác nhận"},suaAll:{type:Boolean,default:!1},trangthai:{type:String,default:"Đang hoạt động"},dsAllFieldsEdit:{type:Boolean,default:!1},btnExcel:{type:Boolean,default:!1},btnLock:{type:Boolean,default:!1},btnEditAll:{type:Boolean,default:!1},btnPrint:{type:Boolean,default:!1},btnDel:{type:Boolean,default:!1},btnDoiMK:{type:Boolean,default:!1},btnCancel:{type:Boolean,default:!1},linkDoiMK:{type:String,default:""}},methods:{suaDsHuyen:function(){this.$emit("suaDsHuyen")},suaAllFunc:function(){this.$emit("suaAllFunc")},huyAllFunc:function(){this.$emit("huyAllFunc")},validate:function(){this.$emit("validate")}}},l=n(8),r=n(20),c=n.n(r),v=n(117),h=n(114),d=n(107),_=n(285),f=n(282),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDoiMK?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:"",to:t.linkDoiMK}},o),[n("v-icon",[t._v("mdi-key-variant")])],1)]}}],null,!1,25299971)},[t._v(" "),n("span",[t._v("Đổi mật khẩu")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnEditAll&&"Chờ xác nhận"==t.trangThaiHD?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.suaAllFunc(),t.suaDsHuyen()}}},o),[n("v-icon",[t._v("edit")])],1)]}}],null,!1,2420839842)},[t._v(" "),n("span",[t._v("Sửa tất cả")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnPrint?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({class:{"v-btn--disabled":t.dsAllFieldsEdit},attrs:{icon:""}},o),[n("v-icon",[t._v("local_printshop")])],1)]}}],null,!1,1897770753)},[t._v(" "),n("span",[t._v("In")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){return t.validate()}}},o),[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1)]}}],null,!1,3212056989)},[t._v(" "),n("span",[t._v("Lưu lại")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[t.suaAll&&t.btnEditAll?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:t.huyAllFunc}},o),[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1)]}}],null,!1,3167023588)},[t._v(" "),n("span",[t._v("Hủy bỏ")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"==t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Không hoạt động"}}},o),[n("v-icon",[t._v("lock")])],1)]}}],null,!1,445311523)},[t._v(" "),n("span",[t._v("Khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnLock&&"Đang hoạt động"!=t.trangthai?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.trangthai="Đang hoạt động"}}},o),[n("v-icon",[t._v("lock_open")])],1)]}}],null,!1,1712601230)},[t._v(" "),n("span",[t._v("Mở khóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnExcel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("mdi-file-excel")])],1)]}}],null,!1,512336027)},[t._v(" "),n("span",[t._v("Xuất Excel")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnDel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("delete")])],1)]}}],null,!1,2997350483)},[t._v(" "),n("span",[t._v("Xóa")])]):t._e()],1),t._v(" "),n("v-flex",{attrs:{"pt-1":""}},[!t.suaAll&&t.btnCancel?n("v-tooltip",{attrs:{bottom:"","nudge-bottom":"-4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{icon:""}},o),[n("v-icon",[t._v("cancel")])],1)]}}],null,!1,1769432908)},[t._v(" "),n("span",[t._v("Hủy")])]):t._e()],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:v.a,VFlex:h.a,VIcon:d.a,VToolbarItems:_.a,VTooltip:f.a})},499:function(t,e,n){var content=n(600);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("0c435b76",content,!0,{sourceMap:!1})},599:function(t,e,n){"use strict";var o=n(499);n.n(o).a},600:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".container[data-v-acfd592e]{background:#e5e5e5}.frame-chitiet-xdkn[data-v-acfd592e]{width:842px;background:#fff;padding:24px;box-shadow:0 19px 36px rgba(0,0,0,.26);color:#000;border-radius:4px}.frame-carousel[data-v-acfd592e]{box-shadow:0 5px 15px rgba(0,0,0,.26)}.input-image-chi-tiet[data-v-acfd592e]{position:relative}.input-image-chi-tiet .btn-done[data-v-acfd592e]{position:absolute;top:-8px;left:20%}.input-image-chi-tiet .btn-clear[data-v-acfd592e]{position:absolute;top:-8px;right:20%}[data-v-acfd592e] .custom-input-date-ctxdkn .v-text-field__slot{width:calc(100% - 28px)}.custom-btn-clear-done button[data-v-acfd592e]{margin-left:0;margin-right:4px}",""])},695:function(t,e,n){"use strict";n.r(e);var o=n(450),l=(n(32),n(123)),r=n(295),c=n(468),v={data:function(){var t=this;return{valid:!0,suaAll:!1,soCongVan:"1234567",removeSoCongVan:"",suaSoCongVan:!1,suaBKS:!1,BKS:"20A-1234",removeBKS:"",tenDVVT:"HTX Thành Công",benDen:"BX Mỹ Đình",soChuyenDky:"30",ngayBatDau_date:new Date("2019-04-12").toISOString().substr(0,10),removeNgayBatDau:(new Date).toISOString().substr(0,10),ngayKetThuc_date:new Date("2019-04-15").toISOString().substr(0,10),removeNgayKetThuc:(new Date).toISOString().substr(0,10),suaNgay:!1,menuDate_first:!1,menuDate_end:!1,nghiMienThu:"0",removeNghiMienThu:"",suaNghiThuPhi:!1,nghiCoThu:"3",removeNghiCoThu:"",soChuyenNghi:"3",tyLeThuPhi:"50",removeTyLeThuPhi:"",suaTyLeThuPhi:!1,lyDo:"Chạy hợp đồng",removeLyDo:"",suaLyDo:!1,addAnh:!1,dsBks:[{bks:"20A-1234",maBks:""},{bks:"22B-6543",maBks:""},{bks:"29L-8627",maBks:""}],breadcrumbsItems:[{text:"Quản lý kế hoạch",disabled:!0},{text:"Xe đăng ký nghỉ",disabled:!1,to:"/danh-sach-dang-ky-nghi"},{text:"Chi tiết thông tin",disabled:!0}],itemsImage:[],dateRules:[function(e){return!t.ngayBatDau_date||!t.ngayKetThuc_date||(!(t.ngayBatDau_date>=t.ngayKetThuc_date)||"Ngày kết thúc phải lớn hơn ngày bắt đầu")}]}},layout:"def_layout_mini_false",components:{router:r.a,toolbox:c.a},methods:{suaAllFunc:function(){this.suaAll=!0,1!=this.suaSoCongVan&&(this.removeSoCongVan=this.soCongVan),1!=this.suaBKS&&(this.removeBKS=this.bks),1!=this.suaNgay&&(this.removeNgayBatDau=this.ngayBatDau_date,this.removeNgayKetThuc=this.ngayKetThuc_date),1!=this.suaNghiThuPhi&&(this.removeNghiMienThu=this.nghiMienThu,this.removeNghiCoThu=this.nghiCoThu),1!=this.suaTyLeThuPhi&&(this.removeTyLeThuPhi=this.tyLeThuPhi),1!=this.suaLyDo&&(this.removeLyDo=this.lyDo),this.suaSoCongVan=!0,this.suaBKS=!0,this.suaNgay=!0,this.suaNghiThuPhi=!0,this.suaTyLeThuPhi=!0,this.suaLyDo=!0},huyAllFunc:function(){""!=this.removeSoCongVan&&1==this.suaSoCongVan&&(this.soCongVan=this.removeSoCongVan),""!=this.removeBKS&&1==this.suaBKS&&(this.bks=this.removeBKS),""!=this.removeNgayKetThuc&&1==this.suaNgay&&(this.ngayKetThuc_date=this.removeNgayKetThuc),""!=this.removeNgayBatDau&&1==this.suaNgay&&(this.ngayBatDau_date=this.removeNgayBatDau),""!=this.removeNghiMienThu&&1==this.suaNghiThuPhi&&(this.nghiMienThu=this.removeNghiMienThu),""!=this.removeNghiCoThu&&1==this.suaNghiThuPhi&&(this.nghiCoThu=this.removeNghiCoThu),""!=this.removeTyLeThuPhi&&1==this.suaTyLeThuPhi&&(this.tyLeThuPhi=this.removeTyLeThuPhi),""!=this.lyDo&&1==this.suaLyDo&&(this.lyDo=this.removeLyDo),this.suaAll=!1,this.suaSoCongVan=!1,this.suaBKS=!1,this.suaNgay=!1,this.suaNghiThuPhi=!1,this.suaTyLeThuPhi=!1,this.suaLyDo=!1},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,this.suaAll=!1,this.suaSoCongVan=!1,this.suaBKS=!1,this.suaNgay=!1,this.suaNghiThuPhi=!1,this.suaTyLeThuPhi=!1,this.suaLyDo=!1)},formatDate:function(t){var e=t.split("-"),n=Object(l.a)(e,3),o=n[0],r=n[1],c=n[2];return"".concat(c,"/").concat(r,"/").concat(o)},removeEnd:function(){this.itemsImage.splice(this.itemsImage.length-1,1),this.itemsImage=Object(o.a)(this.itemsImage)},blobImg:function(t){var e=this,a=document.querySelector("[type=file]");if(!(a.files.length<=0)){var n=new FileReader,o=0;n.onload=function(t){"load"==t.type&&(e.itemsImage.push(n.result),o++,a.files[o]&&n.readAsDataURL(a.files[o]))},n.readAsDataURL(a.files[o]),this.addAnh=!0}},reset:function(){document.querySelector("[type=file]").value=""},openDate_first:function(){this.menuDate_first=!0},openDate_end:function(){this.menuDate_end=!0}},computed:{fixTyLeThuPhi:function(){return this.tyLeThuPhi+"%"},dsAllFieldsEdit:function(){return 1==this.suaSoCongVan||1==this.suaBKS||1==this.suaNgay||1==this.suaNghiThuPhi||1==this.suaTyLeThuPhi}}},h=(n(599),n(8)),d=n(20),_=n.n(d),f=n(286),y=n(117),m=n(692),x=n(696),T=n(113),C=n(674),k=n(114),D=n(304),A=n(107),S=n(108),B=n(542),N=n(480),K=n(284),L=n(669),V=n(590),P=n(118),component=Object(h.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"toolbar-custom",attrs:{height:"56"}},[n("router",{attrs:{breadcrumbsItems:t.breadcrumbsItems}}),t._v(" "),n("v-spacer"),t._v(" "),n("toolbox",{attrs:{btnEditAll:!0,btnPrint:!0,btnCancel:!0,suaAll:t.suaAll,dsAllFieldsEdit:t.dsAllFieldsEdit},on:{suaAllFunc:t.suaAllFunc,huyAllFunc:t.huyAllFunc,validate:t.validate}})],1),t._v(" "),n("v-container",{attrs:{fluid:"","align-center":"","justify-center":"",row:"","fill-height":""}},[n("div",{staticClass:"frame-chitiet-xdkn"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t.suaAll?t._e():n("p",{staticClass:"text-xs-center title mb-0"},[t._v("Chi tiết xe đăng ký nghỉ")]),t._v(" "),t.suaAll?n("p",{staticClass:"text-xs-center title mb-0"},[t._v("Sửa xe đăng ký nghỉ")]):t._e(),t._v(" "),n("p",{staticClass:"text-xs-center caption mt-1"},[t._v("(Chỉnh sửa lần cuối ngày 3/5/2019 bởi Lục Bé)")]),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md8:"",lg8:"",grow:"","pr-4":""}},[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaSoCongVan},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Số công văn đăng ký nghỉ")]),t._v(" "),t.suaSoCongVan?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.soCongVan))]),t._v(" "),t.suaSoCongVan?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"soCongVan",rules:[function(t){return!!t||"Không được để trống"}],required:"","pt-0":""},model:{value:t.soCongVan,callback:function(e){t.soCongVan=e},expression:"soCongVan"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaSoCongVan&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaSoCongVan&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaSoCongVan=!1,t.soCongVan=t.removeSoCongVan}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaSoCongVan&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeSoCongVan=t.soCongVan,t.huyAllFunc(),t.suaSoCongVan=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaBKS},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Biển kiểm soát")]),t._v(" "),t.suaBKS?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.BKS))]),t._v(" "),t.suaBKS?n("v-flex",[n("v-select",{staticClass:"custom-textfield",attrs:{items:t.dsBks,"item-text":"bks","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn biển kiểm soát"}],required:""},model:{value:t.BKS,callback:function(e){t.BKS=e},expression:"BKS"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticStyle:{"text-align":"right"},attrs:{md3:"",lg3:"","pr-0":""}},[1==t.suaBKS&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaBKS&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaBKS=!1,t.BKS=t.removeBKS}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaBKS&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeBKS=t.BKS,t.huyAllFunc(),t.suaBKS=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Tên đơn vị vận tải")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.tenDVVT))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Bến đến")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.benDen))])],1),t._v(" "),n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Số chuyển đăng ký/tháng")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.soChuyenDky))])],1)],1),t._v(" "),n("v-flex",[n("div",{staticClass:"frame-carousel"},[n("v-carousel",{staticStyle:{"box-shadow":"unset",background:"#F5F5F5"},attrs:{"hide-delimiters":"",interval:"10000",height:"220"}},t._l(t.itemsImage,function(t,i){return n("v-carousel-item",{key:i,attrs:{src:t}})}),1),t._v(" "),n("v-flex",{staticClass:"text-xs-center input-image-chi-tiet",attrs:{"pt-1":"","pb-1":""}},[1==t.addAnh?n("v-btn",{staticClass:"btn-done",attrs:{icon:""},on:{click:function(e){t.addAnh=!1}}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),t.addAnh?t._e():n("input",{staticStyle:{position:"absolute",width:"25px",height:"24px",opacity:"0"},attrs:{type:"file","pt-0":"",title:""},on:{input:t.blobImg,click:t.reset}}),t._v(" "),n("v-icon",{attrs:{color:"black"}},[t._v("camera_alt")]),t._v(" "),1==t.addAnh?n("v-btn",{staticClass:"btn-clear",attrs:{icon:""},on:{click:function(e){t.addAnh=!1,t.removeEnd()}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e()],1)],1)])],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:"",lg6:"",grow:"","pr-4":""}},[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNgay},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md6:"",lg6:"",grow:"","pr-1":"","mr-4":""}},[t._v("Ngày bắt đầu")]),t._v(" "),t.suaNgay?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.formatDate(t.ngayBatDau_date)))]),t._v(" "),t.suaNgay?n("v-flex",[n("v-menu",{ref:"menuDate_first",attrs:{"close-on-content-click":!1,"open-on-click":!1,"nudge-right":40,"return-value":t.ngayBatDau_date,lazy:"",transition:"scale-transition","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.ngayBatDau_date=e},"update:return-value":function(e){t.ngayBatDau_date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({staticClass:"custom-textfield",attrs:{"append-icon":"event",type:"date",required:""},on:{"click:append":t.openDate_first},model:{value:t.ngayBatDau_date,callback:function(e){t.ngayBatDau_date=e},expression:"ngayBatDau_date"}},o))]}}],null,!1,3323659126),model:{value:t.menuDate_first,callback:function(e){t.menuDate_first=e},expression:"menuDate_first"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"vi-vn"},model:{value:t.ngayBatDau_date,callback:function(e){t.ngayBatDau_date=e},expression:"ngayBatDau_date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menuDate_first=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menuDate_first.save(t.ngayBatDau_date)}}},[t._v("OK")])],1)],1)],1):t._e()],1)],1),t._v(" "),n("v-flex",[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNgay},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Ngày kết thúc")]),t._v(" "),t.suaNgay?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.formatDate(t.ngayKetThuc_date)))]),t._v(" "),t.suaNgay?n("v-flex",{staticStyle:{width:"145px"}},[n("v-menu",{ref:"menuDate_end",attrs:{"close-on-content-click":!1,"open-on-click":!1,"nudge-right":40,"return-value":t.ngayKetThuc_date,lazy:"",transition:"scale-transition","offset-y":"","full-width":""},on:{"update:returnValue":function(e){t.ngayKetThuc_date=e},"update:return-value":function(e){t.ngayKetThuc_date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-text-field",t._g({staticClass:"custom-textfield custom-input-date-ctxdkn",attrs:{"append-icon":"event",type:"date",required:"",rules:t.dateRules},on:{"click:append":t.openDate_end},model:{value:t.ngayKetThuc_date,callback:function(e){t.ngayKetThuc_date=e},expression:"ngayKetThuc_date"}},o))]}}],null,!1,3334014756),model:{value:t.menuDate_end,callback:function(e){t.menuDate_end=e},expression:"menuDate_end"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"vi-vn"},model:{value:t.ngayKetThuc_date,callback:function(e){t.ngayKetThuc_date=e},expression:"ngayKetThuc_date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menuDate_end=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menuDate_end.save(t.ngayKetThuc_date)}}},[t._v("OK")])],1)],1)],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticClass:"custom-btn-clear-done",staticStyle:{"text-align":"right"},attrs:{md6:"",lg6:"","pr-0":""}},[1==t.suaNgay&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaNgay&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNgay=!1,t.ngayKetThuc_date=t.removeNgayKetThuc,t.ngayBatDau_date=t.removeNgayBatDau}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaNgay&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeNgayKetThuc=t.ngayKetThuc_date,t.removeNgayBatDau=t.ngayBatDau_date,t.huyAllFunc(),t.suaNgay=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:"",lg6:"",grow:"","pr-4":""}},[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNghiThuPhi},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md6:"",lg6:"",grow:"","pr-1":"","mr-4":""}},[t._v("Số chuyến nghỉ miễn thu")]),t._v(" "),t.suaNghiThuPhi?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.nghiMienThu))]),t._v(" "),t.suaNghiThuPhi?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"nghiMienThu",min:"0",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>=0||"Số nhập vào >= 0"}],type:"number",required:"","pt-0":""},model:{value:t.nghiMienThu,callback:function(e){t.nghiMienThu=e},expression:"nghiMienThu"}})],1):t._e()],1)],1),t._v(" "),n("v-flex",[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaNghiThuPhi},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Số chuyến nghỉ có thu")]),t._v(" "),t.suaNghiThuPhi?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.nghiCoThu))]),t._v(" "),t.suaNghiThuPhi?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"nghiCoThu",min:"0",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>=0||"Số nhập vào > 0"}],type:"number",required:"","pt-0":""},model:{value:t.nghiCoThu,callback:function(e){t.nghiCoThu=e},expression:"nghiCoThu"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticClass:"custom-btn-clear-done",staticStyle:{"text-align":"right"},attrs:{md6:"",lg6:"","pr-0":""}},[1==t.suaNghiThuPhi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaNghiThuPhi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaNghiThuPhi=!1,t.nghiCoThu=t.removeNghiCoThu,t.nghiMienThu=t.removeNghiMienThu}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaNghiThuPhi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeNghiMienThu=t.nghiMienThu,t.removeNghiCoThu=t.nghiCoThu,t.huyAllFunc(),t.suaNghiThuPhi=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{md6:"",lg6:"",grow:"","pr-4":""}},[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md6:"",lg6:"",grow:"","pr-1":"","mr-4":""}},[t._v("Tổng số chuyến nghỉ")]),t._v(" "),n("v-flex",{staticClass:"text-flex",class:{"not-edit-custom-border":t.suaAll}},[t._v(t._s(t.soChuyenNghi))])],1)],1),t._v(" "),n("v-flex",[n("v-layout",{staticClass:"custom-layout",class:{"edit-field":t.suaAll,"edit-field":t.suaTyLeThuPhi},attrs:{row:""}},[n("v-flex",{staticClass:"font16 label text-flex",attrs:{"pl-3":"",md5:"",lg5:"",grow:"","pr-1":""}},[t._v("Tỷ lệ thu phí")]),t._v(" "),t.suaTyLeThuPhi?t._e():n("v-flex",{staticClass:"text-flex"},[t._v(t._s(t.fixTyLeThuPhi))]),t._v(" "),t.suaTyLeThuPhi?n("v-flex",[n("v-text-field",{staticClass:"custom-textfield",attrs:{name:"tyLeThuPhi",min:"0",max:"100",rules:[function(t){return!!t||"Không được để trống"},function(t){return t>0||"Số nhập vào > 0"},function(t){return t<=100||"Số nhập vào < 100"}],type:"number",suffix:"%",required:"","pt-0":""},model:{value:t.tyLeThuPhi,callback:function(e){t.tyLeThuPhi=e},expression:"tyLeThuPhi"}})],1):t._e(),t._v(" "),0==t.suaAll?n("v-flex",{staticClass:"custom-btn-clear-done",staticStyle:{"text-align":"right"},attrs:{md6:"",lg6:"","pr-0":""}},[1==t.suaTyLeThuPhi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaTyLeThuPhi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaTyLeThuPhi=!1,t.tyLeThuPhi=t.removeTyLeThuPhi}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e(),t._v(" "),0==t.suaTyLeThuPhi&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.removeTyLeThuPhi=t.tyLeThuPhi,t.huyAllFunc(),t.suaTyLeThuPhi=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1):t._e()],1)],1)],1),t._v(" "),n("v-layout",{attrs:{"mt-2":""}},[n("v-flex",{staticClass:"custom-btn-clear-done",staticStyle:{position:"relative"}},[n("v-textarea",{staticClass:"custom-textfield",attrs:{outline:"",label:"Lý do",name:"lyDo",required:"",rules:[function(t){return!!t||"Không được để trống"}],"no-resize":"",readonly:!t.suaLyDo,rows:"3"},model:{value:t.lyDo,callback:function(e){t.lyDo=e},expression:"lyDo"}}),t._v(" "),0==t.suaLyDo&&0==t.suaAll?n("v-btn",{staticStyle:{position:"absolute",top:"12px",right:"0px"},attrs:{icon:""},on:{click:function(e){t.removeLyDo=t.lyDo,t.huyAllFunc(),t.suaLyDo=!0}}},[n("v-icon",[t._v("edit")])],1):t._e()],1),t._v(" "),0==t.suaAll&&1==t.suaLyDo?n("v-flex",{staticStyle:{"text-align":"right","padding-top":"12px"},attrs:{md2:"",lg2:"",grow:"","pr-0":""}},[1==t.suaLyDo&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:t.validate}},[n("v-icon",{attrs:{color:"success"}},[t._v("done")])],1):t._e(),t._v(" "),1==t.suaLyDo&&0==t.suaAll?n("v-btn",{attrs:{icon:""},on:{click:function(e){t.suaLyDo=!1,t.lyDo=t.removeLyDo}}},[n("v-icon",{attrs:{color:"error"}},[t._v("clear")])],1):t._e()],1):t._e()],1)],1)],1)])],1)},[],!1,null,"acfd592e",null);e.default=component.exports;_()(component,{VApp:f.a,VBtn:y.a,VCarousel:m.a,VCarouselItem:x.a,VContainer:T.a,VDatePicker:C.a,VFlex:k.a,VForm:D.a,VIcon:A.a,VLayout:S.a,VMenu:B.a,VSelect:N.a,VSpacer:K.a,VTextField:L.a,VTextarea:V.a,VToolbar:P.a})}}]);