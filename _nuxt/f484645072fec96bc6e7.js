(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{283:function(t,n,e){var content=e(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("301d3ff1",content,!0,{sourceMap:!1})},284:function(t,n,e){var content=e(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("7d709af1",content,!0,{sourceMap:!1})},347:function(t,n,e){"use strict";var r=e(283);e.n(r).a},348:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".form-dangky,.v-text-field--outline .v-label--active{background-color:#fff}",""])},349:function(t,n,e){"use strict";var r=e(284);e.n(r).a},350:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".form-dangky[data-v-3154d302]{width:504px;margin:0 auto;padding:32px 20px;border:1px solid #e1e1e1;border-radius:4px}.form-dangky .title[data-v-3154d302]{text-align:center}input[data-v-3154d302]{font-size:20px}.form-msg-succsess[data-v-3154d302]{width:282px;border-radius:2px;background-color:#fff;box-shadow:0 19px 38px rgba(0,0,0,.26);border:1px solid #fff;padding-bottom:16px}.form-msg-succsess h6.title[data-v-3154d302]{margin-bottom:12px}.msg-text[data-v-3154d302]{margin-bottom:28px;padding:24px 24px 28px}p[data-v-3154d302]{margin-bottom:0;color:rgba(0,0,0,.54);font-size:16px;letter-spacing:.25px}.msg-button a[data-v-3154d302]{margin:0;float:right}",""])},351:function(t,n,e){var content=e(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("08d4b84c",content,!0,{sourceMap:!1})},352:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},368:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{items:[{state:"Thái Nguyên",abbr:"A"},{state:"Hà Giang",abbr:"B"},{state:"Hà nội",abbr:"C"},{state:"TP Hồ Chí Minh, Cần Thơ",abbr:"D"}],error:!1,background:"background-color: red",nguoiDangKy:"",valid:!0,tenBenXe:"",diaChiBen:"",coQuan:"",soDienThoai:"",email:"",link:"",selectPlaces:null,show:!1,vnf_regex:/((09|03|07|08|05)+([0-9]{8})\b)/g,msgErrorEmail:[function(t){return!!t||"E-mail không được để trống"},function(t){return/.+@.+/.test(t)||"Sai định dạng E-mail"}],msgError:[function(t){return!!t||"Mục này không được để trống"}],msgSdt:[function(t){return!!t||"Số điện thoại không được để trống"},function(t){return/((09|03|07|08|05)+([0-9]{8})\b)/g.test(t)||"Sai định dạng số điện thoại"}]}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0,this.show=!this.show)}},layout:"custom-layout"},o=(e(347),e(349),e(16)),l=e(44),c=e.n(l),d=e(113),f=e(109),h=e(110),v=(e(120),e(28),e(14),e(170),e(30),e(31),e(351),e(47)),m={name:"v-form",mixins:[Object(v.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,n=function(input){return input.$watch("hasError",function(n){t.$set(t.errorBag,input._uid,n)},{immediate:!0})},e={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=n(input)))}):e.valid=n(input),e},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var n=this.watchers.find(function(i){return i._uid===t._uid});n.valid&&n.valid(),n.shouldValidate&&n.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return n.$emit("submit",t)}}},this.$slots.default)}},x=e(111),y=e(365),w=e(376),component=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{"pa-4":"","align-center":"","justify-center":"",row:"","fill-height":""}},[t.show?t._e():e("div",{staticClass:"form-dangky"},[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(n){t.valid=n},expression:"valid"}},[e("v-layout",{attrs:{row:"","mb-4":""}},[e("v-flex",{attrs:{xs12:""}},[e("h6",{staticClass:"title"},[t._v("Đăng ký nhận tư vấn phần mềm")])])],1),t._v(" "),e("v-layout",{attrs:{row:"","pt-2":""}},[e("v-flex",{attrs:{md4:"",lg4:"",xs5:"",grow:"","pr-4":""}},[e("v-select",{attrs:{label:"Tỉnh/TP",items:t.items,"item-text":"state","return-object":"","single-line":"",autocomplete:"","append-icon":"$vuetify.icons.dropdown",outline:"",flat:"",rules:[function(t){return!!t||"Bạn chưa chọn tỉnh"}],required:""},model:{value:t.selectPlaces,callback:function(n){t.selectPlaces=n},expression:"selectPlaces"}})],1),t._v(" "),e("v-flex",[e("v-text-field",{attrs:{label:"Tên bến xe (*)",outline:"",rules:[function(t){return!!t||"Tên bến xe không được để trống"}],required:""},model:{value:t.tenBenXe,callback:function(n){t.tenBenXe=n},expression:"tenBenXe"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"pt-2":"",row:""}},[e("v-flex",[e("v-text-field",{attrs:{label:"Địa chỉ bến",error:t.error,outline:"",rules:[function(t){return!!t||"Địa chỉ bến không được để trống"}],required:""},model:{value:t.diaChiBen,callback:function(n){t.diaChiBen=n},expression:"diaChiBen"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"pt-2":"",row:""}},[e("v-flex",[e("v-text-field",{attrs:{label:"Cơ quan quản lý",error:t.error,outline:""},model:{value:t.coQuan,callback:function(n){t.coQuan=n},expression:"coQuan"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"pt-2":"",row:""}},[e("v-flex",[e("v-text-field",{attrs:{label:"Người đăng ký",name:"nguoiDangKy",rules:[function(t){return!!t||"Người đăng kí không được để trống"}],outline:"",required:""},model:{value:t.nguoiDangKy,callback:function(n){t.nguoiDangKy=n},expression:"nguoiDangKy"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"pt-2":"",row:""}},[e("v-flex",[e("v-text-field",{attrs:{label:"Số điện thoại (*)",rules:t.msgSdt,outline:"",required:""},model:{value:t.soDienThoai,callback:function(n){t.soDienThoai=n},expression:"soDienThoai"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"pt-2":"",row:""}},[e("v-flex",[e("v-text-field",{attrs:{label:"Email",rules:t.msgErrorEmail,outline:"",required:""},model:{value:t.email,callback:function(n){t.email=n},expression:"email"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[e("v-btn",{staticClass:"body-1",attrs:{color:"button",flat:"",to:"/"}},[t._v("QUAY LẠI")]),t._v(" "),e("v-btn",{staticClass:"body-1",attrs:{color:"button",dark:""},on:{click:t.validate}},[t._v("Đăng ký")])],1)],1)],1),t._v(" "),t.show?e("div",{staticClass:"form-msg-succsess"},[e("div",{staticClass:"msg-text"},[e("h6",{staticClass:"title row"},[t._v("Đăng ký thành công")]),t._v(" "),e("p",[t._v("Bạn đã đăng ký thành công!")]),t._v(" "),e("p",[t._v("Chúng tôi sẽ liên hệ lại theo thông tin đăng ký trong thời gian sớm nhất. Cám ơn các bạn đã quan tâm đến sản phẩm!")])]),t._v(" "),e("div",{staticClass:"msg-button"},[e("v-btn",{staticClass:"body-1",attrs:{color:"success",flat:"",to:"/"}},[t._v("QUAY LẠI TRANG CHỦ")])],1)]):t._e()])},[],!1,null,"3154d302",null);n.default=component.exports;c()(component,{VBtn:d.a,VContainer:f.a,VFlex:h.a,VForm:m,VLayout:x.a,VSelect:y.a,VTextField:w.a})}}]);