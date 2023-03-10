exports.ids = [48];
exports.modules = {

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridStyleThree.vue?vue&type=template&id=ee78cd6a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-wrap-3 mb-20"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_c('img',{staticClass:"default-img",attrs:{"src":_vm.product.images[0],"alt":_vm.product.title}})]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new?"<span class=\"product-label pink\">New</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_vm._ssrNode("<div class=\"product-content-3-wrap\">","</div>",[_vm._ssrNode("<div class=\"product-content-3\">","</div>",[_vm._ssrNode("<div class=\"product-title\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm._v(_vm._s(_vm.product.title))])],1)]),_vm._ssrNode(" <div class=\"price-3\"><span>"+_vm._ssrEscape("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price.toFixed(2)))+"</span>":"<!---->")+"</div> <div class=\"product-action-3\"><button title=\"Compare\" class=\"btn\"><i class=\"pe-7s-shuffle\"></i></button> <button title=\"Add To Cart\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button> <button title=\"Wishlist\" class=\"btn\"><i class=\"pe-7s-like\"></i></button> <button title=\"Quick View\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2)])],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridStyleThree.vue?vue&type=template&id=ee78cd6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridStyleThree.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridStyleThreevue_type_script_lang_js_ = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);},onClick(product){this.$modal.show('quickview',product);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductGridStyleThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridStyleThreevue_type_script_lang_js_ = (ProductGridStyleThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridStyleThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridStyleThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66ca6fd2"
  
)

/* harmony default export */ var ProductGridStyleThree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-grid-style-three.js.map