(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{469:function(t,e,r){var content=r(491);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("f772eb22",content,!0,{sourceMap:!1})},490:function(t,e,r){"use strict";var n=r(469);r.n(n).a},491:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".arrow_btn[data-v-8f295982]{margin:0!important;height:10px;width:15px}.arrow_btn[data-v-8f295982]:first-child{margin-top:10px!important}.arrow[data-v-8f295982]{width:3%;position:absolute;top:0;right:11px;margin-right:8px}.arrow_container[data-v-8f295982]{position:relative}.arrow i[data-v-8f295982]{width:16px;height:10px}",""])},493:function(t,e,r){var content=r(536);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("78627112",content,!0,{sourceMap:!1})},494:function(t,e,r){"use strict";r(34);var n={data:function(){var t=this;return{valid:!1,rules:[function(e){if(t.number<0)return"Số khách trên xe không được nhỏ hơn 0"}]}},props:{number:String,outline:Boolean,label:String},methods:{up:function(){this.number++},down:function(){this.number--},formatnumber:function(){this.number=this.number.replace(/[^0-9\s]/gi,"")}}},o=(r(490),r(7)),l=r(20),c=r.n(l),v=r(117),d=r(441),h=r(107),f=r(721),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"arrow_container"},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{name:"name",label:t.label,id:"id",type:"text",outline:t.outline,rules:t.rules},on:{keyup:function(e){return t.formatnumber()}},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),t._v(" "),r("div",{staticClass:"arrow"},[r("v-btn",{staticClass:"arrow_btn",attrs:{icon:"",flat:"",small:""},on:{click:function(e){return t.up()}}},[r("v-icon",[t._v("keyboard_arrow_up")])],1),t._v(" "),r("v-btn",{staticClass:"arrow_btn",attrs:{icon:"",flat:"",small:""},on:{click:function(e){return t.down()}}},[r("v-icon",[t._v("keyboard_arrow_down")])],1)],1)],1)},[],!1,null,"8f295982",null);e.a=component.exports;c()(component,{VBtn:v.a,VForm:d.a,VIcon:h.a,VTextField:f.a})},535:function(t,e,r){"use strict";var n=r(493);r.n(n).a},536:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-card{margin:0 auto!important}.v-stepper__header{display:none!important}.v-stepper__content{padding:0!important}",""])},543:function(t,e,r){var content=r(686);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("074ad96a",content,!0,{sourceMap:!1})},544:function(t,e,r){var content=r(688);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("2a007f7c",content,!0,{sourceMap:!1})},548:function(t,e,r){"use strict";var n={data:function(){return{valid:!1,e1:0,user:"",register:"",nameRules:[function(t){return!!t||"Tên tài khoản không được để trống"},function(t){return t.length>3||"Tên tài khoản quá ngắn"}]}},methods:{validate:function(){this.$refs.form.validate()&&(this.e1=2)},resetForm:function(){this.$refs.form.reset(),this.$refs.form.resetValidation()}}},o=(r(535),r(7)),l=r(20),c=r.n(l),v=r(117),d=r(482),h=r(486),f=r(113),m=r(114),_=r(441),y=r(108),x=r(291),w=r(499),k=r(500),V=r(676),C=r(501),S=r(721),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{width:"448px"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[r("v-stepper-header",{attrs:{disabled:""}},[r("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}}),t._v(" "),r("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}})],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-layout",{staticStyle:{"background-color":"#F2F2F2"},attrs:{column:"",wrap:"","justify-center":"","pt-3":""}},[r("center",[r("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"https://bitly.vn/3qm4",width:"72px",height:"72px","background-color":"primary"}})]),t._v(" "),r("v-layout",{attrs:{"justify-center":""}},[r("v-card-title",{staticClass:"title"},[t._v(t._s(t.$t("stringRouter.nameQMK")))])],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":"","pb-0":""}},[r("v-layout",{attrs:{column:"",wrap:"","pb-2":""}},[r("v-flex",{attrs:{xs1:""}},[r("h1",{staticClass:"subheading"},[t._v("Nhập tên tài khoản")])])],1),t._v(" "),r("v-text-field",{attrs:{name:"name",label:"Tên tài khoản",id:"id",outline:"",rules:t.nameRules,required:""},model:{value:t.register,callback:function(e){t.register=e},expression:"register"}})],1),t._v(" "),r("v-layout",{attrs:{"pr-3":"","pb-3":""}},[r("v-btn",{staticClass:"body-2",attrs:{flat:"",color:"primary",to:"/"}},[t._v(t._s(t.$t("string.back")))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{slot:"activator",color:"primary",disabled:!t.valid},on:{click:function(e){return t.validate()}},slot:"activator"},[t._v(t._s(t.$t("string.continue")))])],1)],1),t._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-layout",{staticStyle:{"background-color":"#F2F2F2"},attrs:{column:"",wrap:"","justify-center":"","pt-3":""}},[r("center",[r("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"https://bitly.vn/3qm4",width:"72px",height:"72px","background-color":"primary"}})]),t._v(" "),r("v-layout",{attrs:{"justify-center":""}},[r("v-card-title",{staticClass:"title"},[t._v(t._s(t.$t("stringRouter.nameQMK")))])],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("h1",{staticClass:"subheading font-weight-thin"},[t._v("Chúng tôi đã gửi link đặt lại mật khẩu cho bạn vào email:")]),t._v(" "),r("center",[r("p",{staticClass:"subheading font-weight-thin primary--text",staticStyle:{"text-decoration":"underline"}},[r("a",{attrs:{href:"#"}},[t._v("lucbe.sonphat@gmail.com")])])]),t._v(" "),r("v-layout",{attrs:{"justify-center":""}},[r("v-btn",{staticClass:"body-2",attrs:{color:"primary"},on:{click:function(e){t.e1=1,t.resetForm()}}},[t._v(t._s(t.$t("string.back")))])],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardTitle:h.a,VContainer:f.a,VFlex:m.a,VForm:_.a,VLayout:y.a,VSpacer:x.a,VStepper:w.a,VStepperContent:k.a,VStepperHeader:V.a,VStepperItems:V.b,VStepperStep:C.a,VTextField:S.a})},685:function(t,e,r){"use strict";var n=r(543);r.n(n).a},686:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-card{margin:0 auto!important}.v-stepper__header{display:none!important}.v-stepper__content{padding:0!important}",""])},687:function(t,e,r){"use strict";var n=r(544);r.n(n).a},688:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,"[data-v-2c649cc0] .v-select__selections{padding-top:0!important;min-height:56px!important}[data-v-2c649cc0] .v-rating>i:last-child{padding-right:0}",""])},731:function(t,e,r){"use strict";r.r(e);var n=r(548),o={data:function(){return{valid:!0,show1:!1,show2:!0,check:!1,password:"12345678",password1:"12345678",e1:0,email:"lucbe.sonphat@gmail.com"}},methods:{validate:function(){this.$refs.form.validate()&&(this.e1=2)},resetForm:function(){this.$refs.form.reset(),this.$refs.form.resetValidation()}},computed:{rulesRepass:function(){var t=this,e=[function(t){return!!t||"Mật khẩu không được để trống"},function(t){return t.length>=8||"Mật khẩu phải chứa ít nhất 8 ký tự"}];return this.password&&e.push(function(e){return(!!e&&e)===t.password||"Nhập lại mật khẩu không giống nhau"}),e}}},l=(r(685),r(7)),c=r(20),v=r.n(c),d=r(117),h=r(482),f=r(486),m=r(113),_=r(114),y=r(441),x=r(107),w=r(108),k=r(499),V=r(500),C=r(676),S=r(501),F=r(721),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{width:"448px"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[r("v-stepper-header",{attrs:{disabled:""}},[r("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}}),t._v(" "),r("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}})],1),t._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-layout",{staticStyle:{"background-color":"#F2F2F2"},attrs:{column:"",wrap:"","justify-center":"","pt-3":""}},[r("center",[r("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"https://bitly.vn/3qm4",width:"72px",height:"72px","background-color":"primary"}})]),t._v(" "),r("v-layout",{attrs:{"justify-center":""}},[r("v-card-title",{staticClass:"title"},[t._v("Đặt lại mật khẩu của bạn")])],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":"","justify-center":""}},[r("v-layout",{attrs:{column:"",wrap:""}},[r("v-flex",{attrs:{xs1:""}},[r("v-text-field",{attrs:{name:"name",label:t.$t("stringAccount.email"),id:"id",outline:"",disabled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-text-field",{attrs:{"append-icon":t.show1?"visibility":"visibility_off",rules:t.rulesRepass,type:t.show1?"text":"password",name:"input-10-1",label:t.$t("stringAccount.newpass"),outline:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-text-field",{attrs:{"append-icon":t.show2?"visibility":"visibility_off",rules:t.rulesRepass,type:t.show2?"text":"password",name:"input-10-1",label:t.$t("stringAccount.renewpass"),outline:"",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.password1,callback:function(e){t.password1=e},expression:"password1"}})],1)],1),t._v(" "),r("v-layout",{attrs:{xs12:""}},[r("v-btn",{attrs:{block:"",color:"primary",disabled:!t.valid,width:"100%"},on:{click:function(e){return t.validate()}}},[t._v(t._s(t.$t("stringAccount.repass")))])],1)],1)],1),t._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-layout",{staticStyle:{"background-color":"#F2F2F2"},attrs:{column:"",wrap:"","justify-center":"","pt-3":""}},[r("center",[r("img",{staticStyle:{"border-radius":"50%"},attrs:{src:"https://bitly.vn/3qm4",width:"72px",height:"72px","background-color":"primary"}})]),t._v(" "),r("v-layout",{attrs:{"justify-center":""}},[r("v-card-title",{staticClass:"title font-weight-thin"},[t._v("Đặt lại mật khẩu của bạn")])],1)],1),t._v(" "),r("v-container",{attrs:{"grid-list-xs":""}},[r("center",[r("v-icon",{attrs:{large:"",color:"primary"}},[t._v("check")])],1),t._v(" "),r("center",[r("h1",{staticClass:"subheading font-weight-thin",staticStyle:{"padding-top":"20px"}},[t._v("Mật khẩu của bạn đã thay đổi thành công")])]),t._v(" "),r("v-layout",{attrs:{"justify-center":"","pt-2":""}},[r("v-btn",{staticClass:"body-2",attrs:{color:"primary"},on:{click:function(e){t.e1=1,t.resetForm()}}},[t._v(t._s(t.$t("stringAccount.login")))])],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null),$=component.exports;v()(component,{VBtn:d.a,VCard:h.a,VCardTitle:f.a,VContainer:m.a,VFlex:_.a,VForm:y.a,VIcon:x.a,VLayout:w.a,VStepper:k.a,VStepperContent:V.a,VStepperHeader:C.a,VStepperItems:C.b,VStepperStep:S.a,VTextField:F.a});var j=r(142),T={data:function(){var t;return t={valid:!0,tendvvt:"HTX Thành Công",tentuyen:"",tansuat:600,tongsochuyen:150,rating:4},Object(j.a)(t,"tentuyen",["Hà Nội - Hải Phòng (3843.1411.A)"]),Object(j.a)(t,"select",["7:00","7:30"]),Object(j.a)(t,"items",["7:00","7:30","12:00","16:00"]),t},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},resetForm:function(){this.$refs.form.reset(),this.$refs.form.resetValidation()}},components:{textfieldNumbericVue:r(494).a}},M=(r(687),r(558)),R=r(723),O=r(487),A=r(291),B=Object(l.a)(T,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{width:"524px"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("div",{staticClass:"close-popup"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("close")])],1)],1),t._v(" "),r("v-container",[r("v-layout",{attrs:{row:"",wrap:"","justify-center":"","py-3":""}},[r("h1",{staticClass:"title"},[t._v("Cấp tuyến cho đơn vị vận tải")])]),t._v(" "),r("v-layout",{attrs:{row:"",wrap:"","py-3":""}},[r("v-flex",{attrs:{xs6:""}},[r("h2",{staticClass:"subheading font-weight-light"},[t._v("Tên đơn vị vận tải:")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("h2",{staticClass:"subheading font-weight-light",staticStyle:{"text-align":"right"}},[t._v(t._s(t.tendvvt))])])],1),t._v(" "),r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-select",{attrs:{outline:"",items:t.tentuyen,autocomplete:"",rules:t.txtRules,required:"",label:"Tên tuyến"},model:{value:t.tentuyen[0],callback:function(e){t.$set(t.tentuyen,0,e)},expression:"tentuyen[0]"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-combobox",{attrs:{items:t.items,label:"Danh sách nốt",multiple:"",chips:"","return-masked-value":"",outline:"","deletable-chips":""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("textfield-numberic-vue",{attrs:{number:t.tansuat}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:"","py-3":""}},[r("v-flex",{attrs:{xs8:""}},[r("h2",{staticClass:"subheading font-weight-light"},[t._v("Tổng số chuyến đăng ký trên tuyến:")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("h2",{staticClass:"subheading font-weight-light",staticStyle:{"text-align":"right"}},[t._v(t._s(t.tongsochuyen))])])],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticStyle:{"padding-top":"7px"},attrs:{xs6:""}},[r("h2",{staticClass:"subheading font-weight-light"},[t._v("Chất lượng dịch vụ trên tuyến:")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-rating",{staticStyle:{"text-align":"right"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1)],1)],1),t._v(" "),r("v-layout",{attrs:{"pb-3":""}},[r("v-btn",{staticClass:"body-2",attrs:{flat:"",color:"primary",to:"/"},on:{click:function(e){return t.resetForm()}}},[t._v(t._s(t.$t("string.cancelpopup")))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mr-3",attrs:{slot:"activator",color:"primary"},on:{click:t.validate},slot:"activator"},[t._v(t._s(t.$t("string.save")))])],1)],1)],1)},[],!1,null,"2c649cc0",null),E=B.exports;v()(B,{VBtn:d.a,VCard:h.a,VCombobox:M.a,VContainer:m.a,VFlex:_.a,VForm:y.a,VIcon:x.a,VLayout:w.a,VRating:R.a,VSelect:O.a,VSpacer:A.a});var H={components:{popupQuenMatKhauVue:n.a,popupDatLaiMatKhauVue:$,popupCapTuyenChoDvvtVue:E},layout:"custom-layout"},I=r(106),K=Object(l.a)(H,function(){var t=this.$createElement,e=this._self._c||t;return e("v-content",[e("v-container",{attrs:{"grid-list-xs":""}},[e("popupQuenMatKhauVue")],1),this._v(" "),e("v-container",{attrs:{"grid-list-xs":""}},[e("popup-dat-lai-mat-khau-vue")],1),this._v(" "),e("v-container",{attrs:{"grid-list-xs":""}},[e("popup-cap-tuyen-cho-dvvt-vue")],1)],1)},[],!1,null,null,null);e.default=K.exports;v()(K,{VContainer:m.a,VContent:I.a})}}]);