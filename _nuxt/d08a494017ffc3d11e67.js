(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{271:function(t,e,n){var content=n(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("301d3ff1",content,!0,{sourceMap:!1})},272:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("7d709af1",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";var o=n(271);n.n(o).a},286:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".form-dangky,.v-text-field--outline .v-label--active{background-color:#fff}",""])},287:function(t,e,n){"use strict";var o=n(272);n.n(o).a},288:function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".form-dangky[data-v-3154d302]{width:504px;margin:0 auto;padding:32px 20px;border:1px solid #e1e1e1;border-radius:4px}.form-dangky .title[data-v-3154d302]{text-align:center}input[data-v-3154d302]{font-size:20px}.form-msg-succsess[data-v-3154d302]{width:282px;border-radius:2px;background-color:#fff;box-shadow:0 19px 38px rgba(0,0,0,.26);border:1px solid #fff;padding-bottom:16px}.form-msg-succsess h6.title[data-v-3154d302]{margin-bottom:12px}.msg-text[data-v-3154d302]{margin-bottom:28px;padding:24px 24px 28px}p[data-v-3154d302]{margin-bottom:0;color:rgba(0,0,0,.54);font-size:16px;letter-spacing:.25px}.msg-button a[data-v-3154d302]{margin:0;float:right}",""])},339:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{items:[{state:"Thái Nguyên",abbr:"A"},{state:"Hà Giang",abbr:"B"},{state:"Hà nội",abbr:"C"},{state:"TP Hồ Chí Minh, Cần Thơ",abbr:"D"}],error:!1,background:"background-color: red",nguoiDangKy:"",valid:!0,tenBenXe:"",diaChiBen:"",coQuan:"",soDienThoai:"",email:"",link:"",selectPlaces:null,show:!1,vnf_regex:/((09|03|07|08|05)+([0-9]{8})\b)/g,msgErrorEmail:[function(t){return!!t||"E-mail không được để trống"},function(t){return/.+@.+/.test(t)||"Sai định dạng E-mail"}],msgError:[function(t){return!!t||"Mục này không được để trống"}],msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{8})\b)/g.test(t)||"Sai định dạng số điện thoại"}]}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,this.show=!this.show)}},layout:"custom-layout"},r=(n(285),n(287),n(26)),l=n(45),c=n.n(l),d=n(110),v=n(103),f=n(107),h=n(335),m=n(108),x=n(336),k=n(343),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"pa-4":"","align-center":"","justify-center":"",row:"","fill-height":""}},[t.show?t._e():n("div",{staticClass:"form-dangky"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-layout",{attrs:{row:"","mb-4":""}},[n("v-flex",{attrs:{xs12:""}},[n("h6",{staticClass:"title"},[t._v("Đăng ký nhận tư vấn phần mềm")])])],1),t._v(" "),n("v-layout",{attrs:{row:"","pt-2":""}},[n("v-flex",{attrs:{md4:"",lg4:"",xs5:"",grow:"","pr-4":""}},[n("v-select",{attrs:{label:"Tỉnh/TP",items:t.items,"item-text":"state","return-object":"","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",outline:"",flat:"",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},model:{value:t.selectPlaces,callback:function(e){t.selectPlaces=e},expression:"selectPlaces"}})],1),t._v(" "),n("v-flex",[n("v-text-field",{attrs:{label:"Tên bến xe (*)",outline:"",rules:[function(t){return!!t||"Tên bến xe không được để trống"}],required:""},model:{value:t.tenBenXe,callback:function(e){t.tenBenXe=e},expression:"tenBenXe"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"pt-2":"",row:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Địa chỉ bến",error:t.error,outline:"",rules:[function(t){return!!t||"Địa chỉ bến không được để trống"}],required:""},model:{value:t.diaChiBen,callback:function(e){t.diaChiBen=e},expression:"diaChiBen"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"pt-2":"",row:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Cơ quan quản lý",error:t.error,outline:""},model:{value:t.coQuan,callback:function(e){t.coQuan=e},expression:"coQuan"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"pt-2":"",row:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Người đăng ký",name:"nguoiDangKy",rules:[function(t){return!!t||"Người đăng kí không được để trống"}],outline:"",required:""},model:{value:t.nguoiDangKy,callback:function(e){t.nguoiDangKy=e},expression:"nguoiDangKy"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"pt-2":"",row:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Số điện thoại (*)",rules:t.msgSdt,outline:"",required:""},model:{value:t.soDienThoai,callback:function(e){t.soDienThoai=e},expression:"soDienThoai"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"pt-2":"",row:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"Email",rules:t.msgErrorEmail,outline:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[n("v-btn",{staticClass:"body-1",attrs:{color:"button",flat:"",to:"/"}},[t._v("QUAY LẠI")]),t._v(" "),n("v-btn",{staticClass:"body-1",attrs:{color:"button",dark:""},on:{click:t.validate}},[t._v("Đăng ký")])],1)],1)],1),t._v(" "),t.show?n("div",{staticClass:"form-msg-succsess"},[n("div",{staticClass:"msg-text"},[n("h6",{staticClass:"title row"},[t._v("Đăng ký thành công")]),t._v(" "),n("p",[t._v("Bạn đã đăng ký thành công!")]),t._v(" "),n("p",[t._v("Chúng tôi sẽ liên hệ lại theo thông tin đăng ký trong thời gian sớm nhất. Cám ơn các bạn đã quan tâm đến sản phẩm!")])]),t._v(" "),n("div",{staticClass:"msg-button"},[n("v-btn",{staticClass:"body-1",attrs:{color:"success",flat:"",to:"/"}},[t._v("QUAY LẠI TRANG CHỦ")])],1)]):t._e()])},[],!1,null,"3154d302",null);e.default=component.exports;c()(component,{VBtn:d.a,VContainer:v.a,VFlex:f.a,VForm:h.a,VLayout:m.a,VSelect:x.a,VTextField:k.a})}}]);