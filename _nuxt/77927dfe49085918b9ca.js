(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{741:function(t,e,n){"use strict";n.r(e);var r={name:"GoogleMap",data:function(){return{center:{lat:45.508,lng:-73.587},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var marker={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:marker}),this.places.push(this.currentPlace),this.center=marker,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})}}},c=n(7),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("Search and add a pin")]),t._v(" "),n("label",[n("gmap-autocomplete",{on:{place_changed:t.setPlace}}),t._v(" "),n("button",{on:{click:t.addMarker}},[t._v("Add")])],1),t._v(" "),n("br")]),t._v(" "),n("br"),t._v(" "),n("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,function(e,r){return n("gmap-marker",{key:r,attrs:{position:e.position},on:{click:function(n){t.center=e.position}}})}),1)],1)},[],!1,null,null,null);e.default=component.exports}}]);