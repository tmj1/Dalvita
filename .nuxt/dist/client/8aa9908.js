(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{364:function(t,e,r){},367:function(t,e,r){"use strict";r.r(e);r(224),r(39),r(60),r(48),r(47),r(58),r(35),r(59);var o=r(26);r(225),r(10);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var n={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=c(c({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(r(368),r(15)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("client-only",[e("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[e("div",{staticClass:"quickview-wrapper row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-slider"},[e("div",{staticClass:"product-details-img"},[e("div",{staticClass:"product-badges"},[t.product.new?e("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?e("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),e("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,r){return e("div",{key:r,staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-prev"},[e("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-next"},[e("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-content"},[e("div",{attrs:{slot:"top-right"},slot:"top-right"},[e("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("h2",[t._v(t._s(t.product.title))]),t._v(" "),e("div",{staticClass:"product-details-price"},[e("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?e("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),e("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),e("span",[e("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?e("div",{staticClass:"pro-details-size-color"},[e("div",{staticClass:"pro-details-color-wrap"},[e("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),e("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(r,o){return e("label",{key:o,staticClass:"radio",class:r},[e("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),e("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),e("div",{staticClass:"pro-details-size-wrap"},[e("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),e("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(r,o){return e("label",{key:o,staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),e("span",{staticClass:"check-mark"},[t._v(t._s(r))])])})),0)])]):t._e(),t._v(" "),e("div",{staticClass:"pro-details-quality"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"pro-details-cart btn-hover"},[e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),e("div",{staticClass:"pro-details-wishlist"},[e("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),e("div",{staticClass:"pro-details-compare"},[e("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"pe-7s-shuffle"})])])]),t._v(" "),e("div",{staticClass:"pro-details-meta"},[e("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),e("ul",t._l(t.product.category,(function(r,o){return e("li",{key:o},[e("n-link",{attrs:{to:"/shop?category=".concat(r)}},[t._v(t._s(r)+",")])],1)})),0)]),t._v(" "),e("div",{staticClass:"pro-details-meta"},[e("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),e("ul",t._l(t.product.tag,(function(r,o){return e("li",{key:o},[e("n-link",{attrs:{to:"/shop?tag=".concat(r)}},[t._v(t._s(r)+",")])],1)})),0)]),t._v(" "),e("div",{staticClass:"pro-details-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,r){"use strict";r(364)}}]);