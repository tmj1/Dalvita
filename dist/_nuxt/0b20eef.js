(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{378:function(t,e,r){"use strict";r.r(e);r(233),r(48),r(39),r(47),r(59),r(35),r(60);var c=r(26);r(234),r(10),r(34),r(78),r(79);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["product"],methods:{addToCart:function(t){var e=n(n({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l=r(15),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-wrap-2 mb-25"},[e("div",{staticClass:"product-img"},[e("n-link",{attrs:{to:"/product/".concat(t.slugify(t.product.title))}},[e("img",{staticClass:"default-img",attrs:{src:t.product.images[0],alt:t.product.title}}),t._v(" "),e("img",{staticClass:"hover-img",attrs:{src:t.product.images[1],alt:t.product.title}})]),t._v(" "),e("div",{staticClass:"product-badges"},[t.product.new?e("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?e("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),e("div",{staticClass:"product-action-2"},[e("button",{staticClass:"btn",attrs:{title:"Compare"},on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),e("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"pe-7s-cart"})]),t._v(" "),e("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[e("i",{staticClass:"pe-7s-look"})])])],1),t._v(" "),e("div",{staticClass:"product-content-2"},[e("div",{staticClass:"title-price-wrap-2"},[e("h3",[e("n-link",{attrs:{to:"/product/".concat(t.slugify(t.product.title))}},[t._v(t._s(t.product.title))])],1),t._v(" "),e("div",{staticClass:"price-2"},[e("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?e("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()])]),t._v(" "),e("div",{staticClass:"pro-wishlist-2"},[e("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"pe-7s-like"})])])])])}),[],!1,null,null,null);e.default=component.exports}}]);