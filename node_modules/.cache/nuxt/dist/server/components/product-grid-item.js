exports.ids = [46];
exports.modules = {

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=0e5ea782&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-wrap mb-30"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_c('img',{staticClass:"default-img",attrs:{"src":_vm.product.images[0],"alt":_vm.product.title}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":_vm.product.images[1],"alt":_vm.product.title}})]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new?"<span class=\"product-label pink\">НОВО</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_vm.layout==='twoColumn'||_vm.layout==='threeColumn'?_vm._ssrNode("<div class=\"product-action\">","</div>",[_vm._ssrNode("<div class=\"pro-same-action pro-wishlist\"><button title=\"Wishlist\" class=\"btn\"><i class=\"pe-7s-like\"></i></button></div> "),_vm._ssrNode("<div class=\"pro-same-action pro-cart\">","</div>",[_vm.product.variation?_c('n-link',{staticClass:"btn",attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm._v("\n                    select option\n                ")]):_c('button',{staticClass:"btn",attrs:{"title":"Add To Cart"},on:{"click":function($event){return _vm.addToCart(_vm.product);}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v("\n                    Добави в количката\n                ")])],1),_vm._ssrNode(" <div class=\"pro-same-action pro-quickview\"><button title=\"Quick View\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content text-center\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm._v(_vm._s(_vm.product.title))])],1),_vm._ssrNode(" "+(_vm.product.rating==5?"<div class=\"product-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i></div>":"<!---->")+" "+(_vm.product.rating==4?"<div class=\"product-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==3?"<div class=\"product-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==2?"<div class=\"product-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" "+(_vm.product.rating==1?"<div class=\"product-rating\"><i class=\"fa fa-star-o yellow\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i> <i class=\"fa fa-star-o\"></i></div>":"<!---->")+" <div class=\"product-price\"><span>"+_vm._ssrEscape("$"+_vm._s(_vm.discountedPrice(_vm.product).toFixed(2)))+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape("$"+_vm._s(_vm.product.price.toFixed(2)))+"</span>":"<!---->")+"</div> "),_vm.layout==='list'?_vm._ssrNode("<div class=\"product-content__list-view\">","</div>",[_vm._ssrNode("<p>"+_vm._ssrEscape(_vm._s(_vm.product.description))+"</p> "),_vm._ssrNode("<div class=\"pro-action d-flex align-items-center\">","</div>",[_vm._ssrNode("<div class=\"pro-cart btn-hover\">","</div>",[_vm.product.variation?_c('n-link',{staticClass:"btn",attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm._v("\n                        Избери опция\n                    ")]):_c('button',{staticClass:"btn",attrs:{"title":"Add To Cart"},on:{"click":function($event){return _vm.addToCart(_vm.product);}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v("\n                        Добави в количката\n                    ")])],1),_vm._ssrNode(" <div class=\"pro-wishlist\"><button><i class=\"fa fa-heart-o\"></i></button></div> <div class=\"pro-compare\"><button><i class=\"pe-7s-shuffle\"></i></button></div>")],2)],2):_vm._e()],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=0e5ea782&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemvue_type_script_lang_js_ = ({props:["product","layout"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Add to cart successfully!'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);},onClick(product){this.$modal.show('quickview',product);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemvue_type_script_lang_js_ = (ProductGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "94423190"
  
)

/* harmony default export */ var ProductGridItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-grid-item.js.map