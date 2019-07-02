(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{307:function(t,e,r){"use strict";r(17);var o=r(1),n=r(0);e.a=n.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.c)(this.height),r=Object(o.c)(this.minHeight),n=Object(o.c)(this.minWidth),c=Object(o.c)(this.maxHeight),l=Object(o.c)(this.maxWidth),d=Object(o.c)(this.width);return e&&(t.height=e),r&&(t.minHeight=r),n&&(t.minWidth=n),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},311:function(t,e,r){var content=r(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("74d835da",content,!0,{sourceMap:!1})},312:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}",""])},456:function(t,e,r){var content=r(498);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("be70614c",content,!0,{sourceMap:!1})},458:function(t,e,r){"use strict";r(456),r(311);var o=r(12);r(17);var n=r(0).a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?(t={},e="elevation-"+this.computedElevation,r=!0,e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t):{};var t,e,r}}}),c=r(307),l=r(14),d=r(7),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},f=Object(d.a)(o.a,n,c.a,l.a).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var data={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,data),this.$slots.default)}}),m=r(65),v=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=Object(d.a)(m.a,f).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return v({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},f.options.computed.classes.call(this))},styles:function(){var style=v({},f.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},render:function(t){var e=this.generateRouteLink(this.classes),r=e.tag,data=e.data;return data.style=this.styles,t(r,this.setBackgroundColor(this.color,data),this.$slots.default)}})},471:function(t,e,r){"use strict";var o=r(0);e.a=o.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,o=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,o)}})},485:function(t,e,r){var content=r(486);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("5470a08c",content,!0,{sourceMap:!1})},486:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""])},487:function(t,e,r){var content=r(488);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("27f0eb42",content,!0,{sourceMap:!1})},488:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}",""])},496:function(t,e,r){"use strict";r(17),r(485),r(487);var o=r(307),n=r(7),c=Object(n.a)(o.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=r(9);e.a=c.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(l.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(l.c)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function r(){var o=img.naturalHeight,n=img.naturalWidth;o||n?t.calculatedAspectRatio=n/o:null!=e&&setTimeout(r,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},498:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}",""])},523:function(t,e,r){var content=r(651);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("d543192a",content,!0,{sourceMap:!1})},524:function(t,e,r){var content=r(653);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("e2adeb22",content,!0,{sourceMap:!1})},650:function(t,e,r){"use strict";var o=r(523);r.n(o).a},651:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},652:function(t,e,r){"use strict";var o=r(524);r.n(o).a},653:function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".VuetifyLogo{width:180px;-webkit-transform:rotateY(560deg);transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}@keyframes turn{to{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}}",""])},671:function(t,e,r){"use strict";var o=r(1),n=r(458),c=r(496),l=r(9),d=c.a.extend({name:"v-card-media",mounted:function(){Object(l.d)("v-card-media",this.src?"v-img":"v-responsive",this)}}),h=r(471);r.d(e,"a",function(){return f}),r.d(e,"b",function(){return m});var f=Object(o.f)("v-card__actions"),m=Object(o.f)("v-card__text");n.a,h.a},681:function(t,e,r){"use strict";r.r(e);r(650);var o=r(8),n=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,c=(r(652),{components:{Logo:n,VuetifyLogo:Object(o.a)({},function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"data:image/png;base64,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"}})},[],!1,null,null,null).exports},layout:"custom-layout"}),l=r(20),d=r.n(l),h=r(117),f=r(458),m=r(671),v=r(471),x=r(114),y=r(108),S=r(288),w=Object(o.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("div",{staticClass:"text-xs-center"},[r("logo"),t._v(" "),r("vuetify-logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("Welcome to the Vuetify + Nuxt.js template")]),t._v(" "),r("v-card-text",[r("p",[t._v("Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.")]),t._v(" "),r("p",[t._v("For more information on Vuetify, check out the "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank"}},[t._v("documentation")]),t._v(".")]),t._v(" "),r("p",[t._v("If you have questions, please join the official "),r("a",{attrs:{href:"https://chat.vuetifyjs.com/",target:"_blank",title:"chat"}},[t._v("discord")]),t._v(".")]),t._v(" "),r("p",[t._v("Find a bug? Report it on the github "),r("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",title:"contribute"}},[t._v("issue board")]),t._v(".")]),t._v(" "),r("p",[t._v("Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.")]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("em",[r("small",[t._v("— John Leider")])])]),t._v(" "),r("hr",{staticClass:"my-3"}),t._v(" "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt Documentation")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("Nuxt GitHub")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",flat:"",nuxt:"",to:"/inspire"}},[t._v("Continue")])],1)],1)],1)],1)},[],!1,null,null,null);e.default=w.exports;d()(w,{VBtn:h.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:v.a,VFlex:x.a,VLayout:y.a,VSpacer:S.a})}}]);