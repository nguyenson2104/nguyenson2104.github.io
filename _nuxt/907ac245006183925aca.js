(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{286:function(t,e,n){"use strict";var o={props:["breadcrumbsItems"]},r=n(10),l=n(27),c=n.n(l),d=n(299),v=n(107),h=n(284),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar-items",[n("v-breadcrumbs",{staticClass:"pl-0 pr-0",attrs:{items:t.breadcrumbsItems,large:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBreadcrumbs:d.a,VIcon:v.a,VToolbarItems:h.a})},311:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("4bc1f18f",content,!0,{sourceMap:!1})},312:function(t,e,n){var content=n(413);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("81a04bf2",content,!0,{sourceMap:!1})},313:function(t,e,n){var content=n(415);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("920eb168",content,!0,{sourceMap:!1})},314:function(t,e,n){var content=n(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("f8b4856a",content,!0,{sourceMap:!1})},315:function(t,e,n){var content=n(419);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("d8779714",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(17);var o={data:function(){return{islock:!1}},props:{isactive:Boolean,nameicon:String,namespan:String,to:String,dialog:Boolean,islock:Boolean,index:Number},methods:{isDialog:function(){this.$emit("isDialog")},editItem:function(){this.$emit("actionLock",this.islock=!this.islock,this.index)}}},r=(n(410),n(10)),l=n(27),c=n.n(l),d=n(116),v=n(107),h=n(281),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({class:{"v-btn--disabled":t.isactive},attrs:{icon:"",flat:"",id:"btn",color:"primary",dark:"",to:t.to},on:{click:function(e){t.isDialog(),t.editItem()}}},o),[n("v-icon",[t._v(t._s(t.nameicon))])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.namespan))])])},[],!1,null,null,null),m=component.exports;c()(component,{VBtn:d.a,VIcon:v.a,VTooltip:h.a});var x={props:{str_active:String,str_title:String,status:[]}},f=(n(412),n(114)),_=n(460),k=Object(r.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticStyle:{display:"inherit"},attrs:{xs4:""}},[n("div",{staticClass:"body-1",staticStyle:{"white-space":"nowrap","padding-right":"20px",color:"black"}},[t._v(t._s(t.str_title))]),t._v(" "),n("v-select",{attrs:{items:t.status},model:{value:t.str_active,callback:function(e){t.str_active=e},expression:"str_active"}})],1)},[],!1,null,"4bc3b7d4",null),w=k.exports;c()(k,{VFlex:f.a,VSelect:_.a});n(39);var y={data:function(){return{valid:!0,showPass:!1,showRePass:!1,tenTK:"",hoTen:"",password:"",rePassword:"",chucVu:"",sdt:"",tempSdt:"",phongBan:"",nhomTK:"",elNhomTK:[{name:"Kế hoạch",maNhom:"kh"},{name:"Tài chính",maNhom:"tc"}],msgTenTK:[function(t){return!!t||"Tên tài khoản không được để trống"},function(t){return/^[a-zA-Z0-9]+[a-zA-Z0-9._-]*$/.test(t)||"Sai định dạng tên tài khoản"}],msgErrorEmail:[function(t){return!!t||"E-mail không được để trống"},function(t){return/^[A-Za-z0-9]+([.]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/.test(t)||"Sai định dạng E-mail"}],msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{2})+([.]{1})+([0-9]{3})+([.]{1})+([0-9]{3}))\b/.test(t)||"Sai định dạng số điện thoại"}]}},methods:{fixSdt:function(){this.tempSdt=this.sdt.replace(/[^0-9\s]/gi,""),this.sdt=this.tempSdt.replace(/(\d{1,4})(\d{1,3})(\d{1,3})/g,"$1.$2.$3")},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},hiddenDialog:function(){this.$emit("hiddenDialog")}}},C=(n(414),n(461)),S=n(108),T=n(481),V=Object(r.a)(y,function(){var t=this,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"form-taotk"},[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-layout",{attrs:{row:"","mb-4":""}},[o("v-flex",{attrs:{xs12:""}},[o("h6",{staticClass:"title text-xs-center"},[e._v("Tạo mới thông tin tài khoản")])])],1),e._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{md6:"",lg6:"",xs6:"",grow:"","pr-3":""}},[o("v-text-field",{attrs:{label:"Tên tài khoản (*)",outline:"",name:"tenTK",rules:e.msgTenTK,required:""},model:{value:e.tenTK,callback:function(t){e.tenTK=t},expression:"tenTK"}})],1),e._v(" "),o("v-flex",[o("v-text-field",{attrs:{label:"Họ tên (*)",outline:"",name:"hoTen",rules:[function(t){return!!t||"Họ tên không được để trống"}],required:""},model:{value:e.hoTen,callback:function(t){e.hoTen=t},expression:"hoTen"}})],1)],1),e._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{md6:"",lg6:"",xs6:"",grow:"","pr-3":""}},[o("v-text-field",{attrs:{label:"Mật khẩu (*)",outline:"",name:"password",rules:[function(t){return!!t||"Mật khẩu không được để trống"},function(t){return t.length>=8||"Mật khẩu dài tối thiểu 8 ký tự"}],required:"","append-icon":e.showPass?"visibility":"visibility_off",type:e.showPass?"text":"password"},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),o("v-flex",[o("v-text-field",{attrs:{label:"Chức vụ (*)",outline:"",name:"chucVu",rules:[function(t){return!!t||"Chức vụ không được để trống"}],required:""},model:{value:e.chucVu,callback:function(t){e.chucVu=t},expression:"chucVu"}})],1)],1),e._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{md6:"",lg6:"",xs6:"",grow:"","pr-3":""}},[o("v-text-field",{attrs:{label:"Nhập lại mật khẩu (*)",outline:"",name:"rePassword",rules:[function(t){return!!t||"Nhập lại mật khẩu không được để trống"},function(e){return t.rePassword==t.password||"Mật khẩu không khớp"}],required:"","append-icon":e.showRePass?"visibility":"visibility_off",type:e.showRePass?"text":"password"},on:{"click:append":function(t){e.showRePass=!e.showRePass}},model:{value:e.rePassword,callback:function(t){e.rePassword=t},expression:"rePassword"}})],1),e._v(" "),o("v-flex",[o("v-text-field",{attrs:{label:"Số điện thoại (*)",outline:"",name:"sdt",rules:e.msgSdt,required:""},on:{keyup:e.fixSdt,blur:e.fixSdt},model:{value:e.sdt,callback:function(t){e.sdt=t},expression:"sdt"}})],1)],1),e._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{md6:"",lg6:"",xs6:"",grow:"","pr-3":""}},[o("v-text-field",{attrs:{label:"Phòng ban (*)",outline:"",name:"phongBan",rules:[function(t){return!!t||"Phòng ban không được để trống"}],required:""},model:{value:e.phongBan,callback:function(t){e.phongBan=t},expression:"phongBan"}})],1),e._v(" "),o("v-flex",[o("v-select",{attrs:{label:"Nhóm tài khoản (*)",value:e.nhomTK,items:e.elNhomTK,"item-text":"name","item-value":"name",name:"nhomTK",autocomplete:"",outline:"","append-icon":"$vuetify.icons.dropdown",flat:"",height:"32",rules:[function(t){return!!t||"Bạn chưa chọn nhóm"}],required:""}})],1)],1),e._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{md12:"",lg12:"",xs12:"",grow:""}},[o("v-text-field",{attrs:{label:"Email (*)",outline:"",name:"email",rules:e.msgErrorEmail,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),o("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[o("v-btn",{staticClass:"body-1 ma-0",staticStyle:{"margin-left":"-24px !important"},attrs:{color:"primary",flat:""},on:{click:e.hiddenDialog}},[e._v("HỦY")]),e._v(" "),o("v-btn",{staticClass:"body-1 ma-0",attrs:{color:"primary",disabled:e.valid},on:{click:e.validate}},[e._v("LƯU")])],1)],1)],1)},[],!1,null,"2640db39",null),K=V.exports;c()(V,{VBtn:d.a,VFlex:f.a,VForm:C.a,VLayout:S.a,VSelect:_.a,VTextField:T.a});var P={props:{headers:[],desserts:[],status:[],dataselect:[],selected:[],check:String},data:function(){return{islock:!1,dialog:!1,pagination:{sortBy:"name"},isactive:!0}},components:{tableButtonHeaderVue:m,tableSelectHeaderVue:w,popupTaoTK:K},methods:{activee:function(){console.log(this.selected),null!=this.selected&&this.selected.length>0?this.isactive=!1:(this.selected=[],this.isactive=!0)},toggleAll:function(){this.selected.length?(this.selected=[],this.isactive=!0,console.log(this.selected)):(this.isactive=!1,this.selected=this.desserts.slice(),console.log(this.selected))},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)},isDialog:function(){this.dialog=!0},hiddenDialog:function(){this.dialog=!1},actionLock:function(t,e){console.log(e+"/"+t)}}},B=(n(416),n(418),n(482)),$=n(351),D=n(472),E=n(427),M=Object(r.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,pagination:t.pagination,"select-all":"","item-key":"key",loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",{staticStyle:{height:"48px !important"}},[n("th",{staticClass:"title-checkbox fixed-true"},[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll(e)}}})],1),t._v(" "),t._l(e.headers,function(header){return n("th",{key:header.text,staticClass:"title-title-name",class:[header.fixed,"column sortable",t.pagination.descending?"desc":"asc",header.value===t.pagination.sortBy?"active":""],on:{click:function(e){return t.changeSort(header.value)}}},[n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n        "+t._s(header.text)+"\n      ")],1)})],2)]}},"ttdvvt"===t.check?{key:"items",fn:function(e){return[n("tr",{staticClass:"hover_item"},[n("td",{staticClass:"checkbox fixed-true"},[n("v-checkbox",{attrs:{primary:"","hide-details":""},on:{change:t.activee},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"props.selected"}})],1),t._v(" "),n("td",{staticClass:"title-name fixed-true"},[n("div",{staticClass:"over"},[t._v(t._s(e.item.islock))])]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("div",{staticClass:"over2"},[t._v(t._s(e.item.numbercontract))])]),t._v(" "),n("td",{staticClass:"text-xs-center over2"},[t._v(t._s(e.item.gpkd))]),t._v(" "),n("td",{staticClass:"text-xs-center over2",attrs:{width:"10%"}},[t._v(t._s(e.item.numberphone))]),t._v(" "),n("td",{staticClass:"text-xs-center over2"},[t._v(t._s(e.item.numbercar))]),t._v(" "),n("td",{staticClass:"text-xs-center over2"},[t._v(t._s(e.item.numberrouter))]),t._v(" "),n("td",{staticClass:"text-xs-left",attrs:{id:"adress"}},[n("div",{staticClass:"over1"},[n("div",{staticClass:"over1-child"},[t._v(t._s(e.item.address))])])]),t._v(" "),n("td",{staticClass:"not-transition"},[n("v-layout",{attrs:{"pt-1":""}},[n("table-button-header-vue",{attrs:{nameicon:"remove_red_eye",to:"/chi-tiet-don-vi-van-tai",namespan:"Xem chi tiết"}}),t._v(" "),!1===e.item.islock?n("table-button-header-vue",{attrs:{nameicon:"lock",namespan:"Khóa",islock:e.item.islock,index:e.index},on:{actionLock:t.actionLock}}):n("table-button-header-vue",{attrs:{nameicon:"lock_open",namespan:"Mở khóa",islock:e.item.islock}}),t._v(">>>>>>> 89ab18a8dad7d9c193406c41205bb1a4023d756f\n        ")],1)],1)])]}}:"qltk"===t.check?{key:"items",fn:function(e){return[n("style",[t._v("\n.v-table__overflow {\n  width: calc(100% - 216px) !important;\n  margin-left: 216px;\n}\n.fixed-true.title-title-name,\n.fixed-true.title-name {\n  width: 160px !important;\n}\n.fixed-true.title-name,\n.fixed-true.checkbox {\n  height: 49px !important;\n}\n.hover_item > td:nth-child(3),\n.hover_item > td:nth-child(4),\n.hover_item > td:nth-child(6) {\n  text-align: left !important;\n}\n.hover_item > td:nth-child(7) {\n  padding-right: 0px !important;\n}\n.hover_item:hover .over1-child {\n  width: 72%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n    ")]),t._v(" "),n("tr",{staticClass:"hover_item"},[n("td",{staticClass:"checkbox fixed-true"},[n("v-checkbox",{attrs:{primary:"","hide-details":""},on:{change:t.activee},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"props.selected"}})],1),t._v(" "),n("td",{staticClass:"title-name fixed-true",attrs:{width:"120px !important"}},[n("div",{staticClass:"over"},[t._v(t._s(e.item.id))])]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("div",{staticClass:"over2"},[t._v(t._s(e.item.name))])]),t._v(" "),n("td",{staticClass:"text-xs-center over2"},[t._v(t._s(e.item.user))]),t._v(" "),n("td",{staticClass:"text-xs-center over2",attrs:{width:"10%"}},[t._v(t._s(e.item.numberphone))]),t._v(" "),n("td",{staticClass:"text-xs-left",attrs:{id:"adress",width:"200px"}},[n("div",{staticClass:"over1",staticStyle:{"max-width":"200px"}},[n("div",{staticClass:"over1-child"},[t._v(t._s(e.item.email))])])]),t._v(" "),n("td",{staticClass:"text-xs-center over2",staticStyle:{"padding-right":"0px !important"},attrs:{width:"5%"}},["false"===e.item.status?n("v-btn",{attrs:{color:"success",icon:"",flat:""}},[n("v-icon",[t._v("pause_circle_filled")])],1):t._e(),t._v(" "),"true"===e.item.status?n("v-btn",{attrs:{color:"success",icon:"",flat:""}},[n("v-icon",[t._v("check_circle")])],1):t._e()],1),t._v(" "),n("td",{staticClass:"not-transition"},[n("v-layout",{staticStyle:{"padding-top":"5px !important"}},[n("table-button-header-vue",{attrs:{nameicon:"remove_red_eye",to:"/chi-tiet-tai-khoan",namespan:"Xem chi tiết"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"mdi-key-variant",to:"/doi-mat-khau",namespan:"Đổi mật khẩu"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"lock",namespan:"Khóa"}})],1)],1)])]}}:"qllt"===t.check?{key:"items",fn:function(e){return[n("style",[t._v("\n.v-table__overflow {\n  width: calc(100% - 356px) !important;\n  margin-left: 356px;\n}\n.fixed-true.title-title-name:nth-child(2) {\n  width: 130px !important;\n}\n.fixed-true.title-title-name:nth-child(3) {\n  width: 170px !important;\n}\n.fixed-true.title-title-name:nth-child(3),\n.fixed-true.title-name:nth-child(3) {\n  margin-left: 130px;\n  border-right: 1px solid #ddd !important;\n}\n.over2 {\n  max-width: 130px !important;\n}\n.over3 {\n  max-width: 170px !important;\n}\n.hover_item > td:nth-child(11) {\n  padding-right: 0px !important;\n}\n    ")]),t._v(" "),n("tr",{staticClass:"hover_item"},[n("td",{staticClass:"checkbox fixed-true"},[n("v-checkbox",{attrs:{primary:"","hide-details":""},on:{change:t.activee},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"props.selected"}})],1),t._v(" "),n("td",{staticClass:"title-name fixed-true over2"},[n("div",{staticClass:"over"},[t._v(t._s(e.item.id))])]),t._v(" "),n("td",{staticClass:"title-name fixed-true over3"},[n("div",{staticClass:"over"},[t._v(t._s(e.item.name))])]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.tinhden))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.benden))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.htcc))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.clt))]),t._v(" "),n("td",{staticClass:"text-xs-center over2"},[t._v(t._s(e.item.gctt))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.llqh))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.bdgxb))]),t._v(" "),n("td",{staticClass:"text-xs-right over2",attrs:{width:"5%"}},[!1===e.item.status?n("v-btn",{attrs:{color:"success",icon:"",flat:""}},[n("v-icon",[t._v("pause_circle_filled")])],1):t._e(),t._v(" "),!0===e.item.status?n("v-btn",{attrs:{color:"success",icon:"",flat:""}},[n("v-icon",[t._v("check_circle")])],1):t._e()],1),t._v(" "),n("td",{staticClass:"not-transition"},[n("v-layout",{staticStyle:{"padding-top":"5px !important"}},[n("table-button-header-vue",{attrs:{nameicon:"remove_red_eye",to:"/chi-tiet-tai-khoan",namespan:"Xem chi tiết"}})],1)],1)])]}}:null,{key:"pageText",fn:function(e){return[t._v(t._s(e.pageStart)+" - "+t._s(e.pageStop)+" trong số "+t._s(e.itemsLength))]}},{key:"no-data",fn:function(){return[n("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[t._v("Không có dữ liệu")])]},proxy:!0}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v(" "),t._v(" "),t._v(" "),"ttdvvt"===t.check?n("template",{slot:"actions-prepend"},[n("v-layout",[n("v-flex",{attrs:{xs8:""}},[n("table-button-header-vue",{attrs:{nameicon:"refresh",namespan:"Tải lại"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"add_circle",namespan:"Thêm"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"local_printshop",namespan:"In"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"mdi-file-excel",namespan:"Xuất excel"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"lock",namespan:"Khóa",isactive:t.isactive}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"lock_open",namespan:"Mở khóa",isactive:t.isactive}})],1),t._v(" "),n("table-select-header-vue",{attrs:{str_active:t.dataselect[1],str_title:t.dataselect[0],status:t.status}})],1)],1):n("template",{slot:"actions-prepend"},[n("v-layout",[n("v-flex",{attrs:{xs8:""}},[n("table-button-header-vue",{attrs:{nameicon:"refresh",namespan:"Tải lại"}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"add_circle",namespan:"Thêm",dialog:t.dialog},on:{isDialog:t.isDialog}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"lock",namespan:"Khóa",isactive:t.isactive}}),t._v(" "),n("table-button-header-vue",{attrs:{nameicon:"lock_open",namespan:"Mở khóa",isactive:t.isactive}})],1),t._v(" "),n("v-dialog",{attrs:{persistent:"",width:"640"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("popupTaoTK",{on:{hiddenDialog:t.hiddenDialog}})],1),t._v(" "),n("table-select-header-vue",{attrs:{str_active:t.dataselect[1],str_title:t.dataselect[0],status:t.status}})],1)],1),t._v(" "),n("template",{slot:"actions-append"},[n("v-btn",{attrs:{icon:"",flat:""}},[n("v-icon",[t._v("settings")])],1)],1)],2)},[],!1,null,"10a72138",null);e.a=M.exports;c()(M,{VAlert:B.a,VBtn:d.a,VCheckbox:$.a,VDataTable:D.a,VDialog:E.a,VFlex:f.a,VIcon:v.a,VLayout:S.a})},410:function(t,e,n){"use strict";var o=n(311);n.n(o).a},411:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".theme--dark.v-btn.v-btn--disabled .v-icon{color:#ddd!important}",""])},412:function(t,e,n){"use strict";var o=n(312);n.n(o).a},413:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".v-input[data-v-4bc3b7d4]{padding-top:4px!important;font-size:14px!important}",""])},414:function(t,e,n){"use strict";var o=n(313);n.n(o).a},415:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".form-taotk[data-v-2640db39]{width:640px;padding:24px;background:#fff;border-radius:4px;box-shadow:0 19px 36px rgba(0,0,0,.26)}",""])},416:function(t,e,n){"use strict";var o=n(314);n.n(o).a},417:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".elevation-1{display:flex;flex-direction:column-reverse}.v-datatable__actions{border-bottom:1px solid #ddd;height:100%;line-height:48px}.v-datatable__actions>div:first-child{flex-grow:1;display:flex;justify-content:space-between}.v-datatable__actions__select{visibility:hidden;width:1px;height:48px}.v-datatable__actions{justify-content:space-between;border-top:none!important}i{color:#000!important}#hover{position:absolute;right:-90px;-webkit-animation-name:example;animation-name:example;-webkit-animation-duration:.5s;animation-duration:.5s;display:none;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;height:37px;padding-top:6px;padding-left:10px;padding-right:10px}#hover button{margin:0!important}#btn{margin-top:0!important;margin-bottom:0!important}.elevation-1 td:last-child{display:none;position:absolute;right:0;border:none!important;padding:0!important}.hover_item:hover td:last-child{display:block}.hover_item:hover .over1-child{width:67%;overflow:hidden;text-overflow:ellipsis}.fixed-true.title-checkbox{border-bottom:1px solid #ddd!important}.fixed-true.checkbox,.fixed-true.title-checkbox{height:48px;width:56px;left:0;border-top:none!important;padding-left:15px!important;padding-right:7px!important}.fixed-true.title-name,.fixed-true.title-title-name{left:56px;width:270px;height:48px;border-top:none!important;border-right:none!important}.fixed-true.title-title-name{border-bottom:1px solid #ddd}.fixed-true:nth-child(2){border-right:1px solid #ddd!important}.title-title-name{border-left:none!important;padding-right:16px!important}.hover_item td{border-top:none!important;border-left:none!important}.hover_item td:nth-child(6),.hover_item td:nth-child(7){text-align:right!important}.title-title-name{border-top:none!important}.fixed-true{position:absolute;display:flex;align-items:center;background-color:#fff;border-left:none!important}.v-table__overflow{width:calc(100% - 326px)!important;margin-left:326px}.v-datatable__progress{display:none}table.v-table tbody tr,tbody td{transition:unset}table.v-table{border-collapse:inherit!important}tbody td.not-transition{transition:unset;height:47px!important}@-webkit-keyframes example{to{right:0}}.elevation-1 td{white-space:nowrap;overflow:hidden;padding-left:16px!important;padding-right:16px!important}.elevation-1 td,.elevation-1 th{border:1px solid #ddd}.elevation-1 th:not(:first-child){padding-left:0!important}.v-datatable th{text-align:left!important}.elevation-1>.v-datatable{height:48px}.elevation-1>.v-datatable>.v-datatable__actions>div:first-child{height:100%}.over2{max-width:127px}.over,.over2{overflow:hidden;text-overflow:ellipsis}.over1{max-width:250px}.over1-child{width:100%;overflow:hidden;text-overflow:ellipsis}.checkbox .accent--text,.title-checkbox .accent--text{color:#0620ee!important}",""])},418:function(t,e,n){"use strict";var o=n(315);n.n(o).a},419:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"[data-v-10a72138] .theme--light.v-table tbody tr:hover td{background-color:#cdd2fc!important}td[data-v-10a72138]{font-size:14px!important}",""])}}]);