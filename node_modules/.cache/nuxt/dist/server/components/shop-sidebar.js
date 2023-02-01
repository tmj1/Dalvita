exports.ids = [62];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=template&id=725c2f7b&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"sidebar-style",class:_vm.classes},[_vm._ssrNode("<div class=\"sidebar-widget\"><h4 class=\"pro-sidebar-title\">Search</h4> <div class=\"pro-sidebar-search mb-50 mt-25\"><form class=\"pro-sidebar-search-form\"><input type=\"text\" placeholder=\"Search here...\"> <button><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Categories</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",_vm._l(_vm.categoryList,function(category,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`?category=${_vm.slugify(category)}`}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    "+_vm._s(category)+"\n                ")])],1);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget mt-50\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Colour</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",_vm._l(_vm.colorList,function(color,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`?color=${_vm.slugify(color)}`}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    "+_vm._s(color)+"\n                ")])],1);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget mt-50\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Sizes</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",_vm._l(_vm.sizeList,function(size,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`?size=${_vm.slugify(size)}`}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    "+_vm._s(size)+"\n                ")])],1);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget sidebar-widget__tag mt-60\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Tags</h4> "),_vm._ssrNode("<div class=\"sidebar-widget-tag mt-30\">","</div>",[_vm._ssrNode("<ul>","</ul>",_vm._l(_vm.tagList,function(tag,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`?tag=${_vm.slugify(tag)}`}},[_vm._v("\n                        "+_vm._s(tag)+"\n                    ")])],1);}),0)])],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=template&id=725c2f7b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var ShopSidebarvue_type_script_lang_js_ = ({props:["classes"],computed:{categoryList(){return this.$store.getters.categoryList;},sizeList(){return this.$store.getters.sizeList;},colorList(){return this.$store.getters.colorList;},tagList(){return this.$store.getters.tagList;}},methods:{slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ShopSidebarvue_type_script_lang_js_ = (ShopSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShopSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b6c9c23"
  
)

/* harmony default export */ var ShopSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shop-sidebar.js.map