!function r(s,l,a){function c(e,t){if(!l[e]){if(!s[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(u)return u(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=l[e]={exports:{}};s[e][0].call(o.exports,function(t){return c(s[e][1][t]||t)},o,o.exports,r,s,l,a)}return l[e].exports}for(var u="function"==typeof require&&require,t=0;t<a.length;t++)c(a[t]);return c}({1:[function(t,e,i){"use strict";document.querySelector("svg defs").innerHTML+='\n    <symbol id="icon-palette-pipette" viewbox="0 0 36 35.99">\n        <path d="M35.41,5.25,30.74.58a2,2,0,0,0-2.83,0L21.66,6.83,17.83,3,15,5.82l2.84,2.84L0,26.49V36H9.5L27.34,18.15,30.17,21,33,18.16l-3.84-3.84,6.25-6.25A2,2,0,0,0,35.41,5.25ZM7.84,32,4,28.15,20.13,12,24,15.87Z"/>\n    </symbol>\n'},{}],2:[function(t,e,i){!function(){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};i.default={data:function(){return{loading:!1,palette:[]}},props:{options:{type:[Object,Array]},display:String,size:String,unset:Boolean,default:{type:[String,Boolean]},extractor:Boolean,limit:Number,uri:String,label:String,disabled:Boolean,help:String,parent:String,value:Array,name:[String,Number],required:Boolean,type:String},computed:{selected:function(){return Array.isArray(this.value)?this.value[0]:this.value},extracted:function(){var t=Array.isArray(this.value)?this.value[1]:"";return this.palette.length?this.palette:t},emptyOptions:function(){return!(this.isObject(this.options)?Object.keys(this.options).length:this.options.length)&&!this.extractor},emptyPalette:function(){return this.extractor&&!this.extracted.length&&!this.loading},loadingPalette:function(){return this.extractor&&this.loading},colors:function(){return this.extractor?!!this.extracted.length&&this.extracted:this.options}},created:function(){var e=this;!this.value&&this.default&&(Array.isArray(this.colors)&&this.colors.find(function(t){return t==e.default})?(this.value=this.default,this.input()):this.isObject(this.colors)&&Object.keys(this.colors).find(function(t){return t==e.default})&&(this.value=this.colors[this.default],this.input()))},methods:{isValue:function(t){return this.isObject(t)?this.selected==t||this.isEquivalent(this.selected,t):this.selected==t},inlineStyle:function(t){return"duo"==this.display&&this.isObject(t)?"background: linear-gradient(to right, "+this.firstColor(t)+" 50%, "+this.secondColor(t)+" 50%);":"background:"+this.firstColor(t)},firstColor:function(t){return this.isString(t)?t:this.isObject(t)?t[Object.keys(t)[0]]:void 0},secondColor:function(t){return!!this.isObject(t)&&t[Object.keys(t)[1]]},isString:function(t){return"string"==typeof t},isObject:function(t){return null!==t&&"object"===(void 0===t?"undefined":e(t))},isEquivalent:function(t,e){var i=Object.keys(t),n=Object.keys(e);if(i.length!=n.length)return!1;for(var o=0;o<i.length;o++){var r=i[o];if(t[r]!==e[r])return!1}return!0},openSelector:function(){this.$refs.selector.open({multiple:!1,parent:this.parent})},processImage:function(t){var e=this;console.log(t),this.loading=!0,this.$api.get("color-palette/extract-image-colors",{filename:t[0].filename,uri:this.uri,limit:this.limit}).then(function(t){e.palette=t.colors,e.value=["",e.palette],e.input(),e.loading=!1}).catch(function(t){e.palette=[],e.loading=!1})},input:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];t&&(this.unset&&this.isValue(t)?this.value=this.extractor?["",this.extracted]:"":this.value=this.extractor?[t,this.extracted]:t),this.$emit("input",this.value)}}}}(),e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options:e.exports;n.render=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("k-field",i._b({staticClass:"k-color-palette-field"},"k-field",i.$props,!1),[n("template",{slot:"options"},[i.extractor?n("k-button",{ref:"extract",attrs:{id:i._uid,icon:"palette-pipette"},on:{click:i.openSelector}},[i._v("\n            "+i._s(i.$t("palette.new.palette"))+"\n        ")]):i._e(),i._v(" "),n("k-files-dialog",{ref:"selector",on:{submit:i.processImage}})],1),i._v(" "),i.emptyOptions?n("k-box",{staticClass:"color-palette_empty-options",attrs:{theme:"info"}},[i._v("\n        "+i._s(i.$t("palette.empty.options"))+"\n    ")]):i.emptyPalette?n("k-empty",{class:["color-palette_empty-palette",i.size],attrs:{icon:"image"},on:{click:i.openSelector}},[i._v(" \n        "+i._s(i.$t("palette.empty.palette"))+"\n    ")]):i.loadingPalette?n("div",{staticClass:"color-palette_empty-loading"},[n("div",{staticClass:"loader-ctn",class:i.size},[n("div",{staticClass:"loader"})])]):n("div",{staticClass:"color-palette_input"},[n("ul",{staticClass:"color-palette_input-list"},i._l(i.colors,function(e,t){return n("li",{class:[i.size,{active:i.isValue(e)},{unset:i.unset}],on:{click:function(t){i.input(e)}}},[n("div",{staticClass:"color-palette_input-color",style:i.inlineStyle(e)})])}))])],2)},n.staticRenderFns=[]},{}],3:[function(t,e,i){"use strict";var n,o=t(2),r=(n=o)&&n.__esModule?n:{default:n};t(1),panel.plugin("sylvainjule/color-palette",{fields:{"color-palette":r.default}})},{1:1,2:2}]},{},[3]);
