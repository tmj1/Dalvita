(window.webpackJsonp=window.webpackJsonp||[]).push([[0,18,26,48,61,64,67],{363:function(t,e,r){"use strict";r.r(e);var o={},c=r(15),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/terms-conditions"}},[t._v("Terms of Conditions")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("© 2023 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Dalvita")]),t._v("."),e("br"),t._v(" All Rights Reserved")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("Get E-mail updates about our latest shop and special offers.")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},364:function(t,e,r){},365:function(t,e,r){"use strict";r.r(e);r(10),r(31),r(32);var o={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,228))},MiniCart:function(){return Promise.resolve().then(r.bind(null,226))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount},compareItemCount:function(){return this.$store.getters.compareItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},c=r(15),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Register")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("my account")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-compare"},[e("n-link",{attrs:{to:"/compare"}},[e("i",{staticClass:"pe-7s-shuffle"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.compareItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Bulgarian")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Greece")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("BGN")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:+35988812345678"}},[t._v("+359 888 123 456 78")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(228).default,MiniCart:r(226).default,OffCanvasMobileMenu:r(227).default})},366:function(t,e,r){"use strict";r.r(e);var o={props:["pageTitle"]},c=r(15),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.r(e);r(224),r(39),r(60),r(48),r(47),r(58),r(35),r(59);var o=r(26);r(225),r(10);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var n={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=l(l({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)}}},d=(r(368),r(15)),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("client-only",[e("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[e("div",{staticClass:"quickview-wrapper row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-slider"},[e("div",{staticClass:"product-details-img"},[e("div",{staticClass:"product-badges"},[t.product.new?e("span",{staticClass:"product-label pink"},[t._v("New")]):t._e(),t._v(" "),t.product.discount?e("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),e("swiper",{attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,r){return e("div",{key:r,staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-prev"},[e("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-next"},[e("i",{staticClass:"pe-7s-angle-right"})])],2)],1)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-content"},[e("div",{attrs:{slot:"top-right"},slot:"top-right"},[e("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("h2",[t._v(t._s(t.product.title))]),t._v(" "),e("div",{staticClass:"product-details-price"},[e("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?e("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),e("div",{staticClass:"pro-details-rating-wrap"},[5==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?e("div",{staticClass:"pro-details-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),e("span",[e("a",{attrs:{href:"#"}},[t._v(t._s(t.product.rating)+" Reviews")])])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?e("div",{staticClass:"pro-details-size-color"},[e("div",{staticClass:"pro-details-color-wrap"},[e("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),e("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(r,o){return e("label",{key:o,staticClass:"radio",class:r},[e("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),e("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),e("div",{staticClass:"pro-details-size-wrap"},[e("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),e("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(r,o){return e("label",{key:o,staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),e("span",{staticClass:"check-mark"},[t._v(t._s(r))])])})),0)])]):t._e(),t._v(" "),e("div",{staticClass:"pro-details-quality"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"pro-details-cart btn-hover"},[e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),e("div",{staticClass:"pro-details-wishlist"},[e("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),e("div",{staticClass:"pro-details-compare"},[e("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"pe-7s-shuffle"})])])]),t._v(" "),e("div",{staticClass:"pro-details-meta"},[e("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),e("ul",t._l(t.product.category,(function(r,o){return e("li",{key:o},[e("n-link",{attrs:{to:"/shop?category=".concat(r)}},[t._v(t._s(r)+",")])],1)})),0)]),t._v(" "),e("div",{staticClass:"pro-details-meta"},[e("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),e("ul",t._l(t.product.tag,(function(r,o){return e("li",{key:o},[e("n-link",{attrs:{to:"/shop?tag=".concat(r)}},[t._v(t._s(r)+",")])],1)})),0)]),t._v(" "),e("div",{staticClass:"pro-details-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin"})])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,r){"use strict";r(364)},370:function(t,e,r){"use strict";var o=r(2),c=r(23),l=r(9),n=r(8),path=r(230),d=r(3),v=r(98),f=r(11),_=r(153),C=r(51),h=r(97),m=r(229),y=r(4),w=r(81).f,k=r(49).f,O=r(17).f,$=r(231),S=r(374).trim,T="Number",A=n[T],I=path[T],j=A.prototype,x=n.TypeError,E=d("".slice),N=d("".charCodeAt),P=function(t){var e=m(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,o,c,l,n,d,code,v=m(t,"number");if(h(v))throw x("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=S(v),43===(e=N(v,0))||45===e){if(88===(r=N(v,2))||120===r)return NaN}else if(48===e){switch(N(v,1)){case 66:case 98:o=2,c=49;break;case 79:case 111:o=8,c=55;break;default:return+v}for(n=(l=E(v,2)).length,d=0;d<n;d++)if((code=N(l,d))<48||code>c)return NaN;return parseInt(l,o)}return+v},F=v(T,!A(" 0o1")||!A("0b1")||A("+0x1")),Q=function(t){return C(j,t)&&y((function(){$(t)}))},M=function(t){var e=arguments.length<1?0:A(P(t));return Q(this)?_(Object(e),this,M):e};M.prototype=j,F&&!c&&(j.constructor=M),o({global:!0,constructor:!0,wrap:!0,forced:F},{Number:M});var z=function(t,source){for(var e,r=l?w(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;r.length>o;o++)f(source,e=r[o])&&!f(t,e)&&O(t,e,k(source,e))};c&&I&&z(path[T],I),(F||c)&&z(path[T],A)},373:function(t,e,r){"use strict";r.r(e);r(224),r(39),r(60),r(48),r(47),r(58),r(35),r(59);var o=r(26);r(225),r(10),r(34),r(77),r(78);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var n={props:["product","layout"],methods:{addToCart:function(t){var e=l(l({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},addToCompare:function(t){this.$store.state.compare.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to compare!"}):this.$notify({title:"Add to compare successfully!"}),this.$store.dispatch("addToCompare",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(15),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-wrap mb-30"},[e("div",{staticClass:"product-img"},[e("n-link",{attrs:{to:"/product/".concat(t.slugify(t.product.title))}},[e("img",{staticClass:"default-img",attrs:{src:t.product.images[0],alt:t.product.title}}),t._v(" "),e("img",{staticClass:"hover-img",attrs:{src:t.product.images[1],alt:t.product.title}})]),t._v(" "),e("div",{staticClass:"product-badges"},[t.product.new?e("span",{staticClass:"product-label pink"},[t._v("НОВО")]):t._e(),t._v(" "),t.product.discount?e("span",{staticClass:"product-label purple"},[t._v("-"+t._s(t.product.discount)+"%")]):t._e()]),t._v(" "),"twoColumn"===t.layout||"threeColumn"===t.layout?e("div",{staticClass:"product-action"},[e("div",{staticClass:"pro-same-action pro-wishlist"},[e("button",{staticClass:"btn",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"pe-7s-like"})])]),t._v(" "),e("div",{staticClass:"pro-same-action pro-cart"},[t.product.variation?e("n-link",{staticClass:"btn",attrs:{to:"/product/".concat(t.slugify(t.product.title))}},[t._v("\n                    select option\n                ")]):e("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"pe-7s-cart"}),t._v("\n                    Добави в количката\n                ")])],1),t._v(" "),e("div",{staticClass:"pro-same-action pro-quickview"},[e("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[e("i",{staticClass:"pe-7s-look"})])])]):t._e()],1),t._v(" "),e("div",{staticClass:"product-content text-center"},[e("h3",[e("n-link",{attrs:{to:"/product/".concat(t.slugify(t.product.title))}},[t._v(t._s(t.product.title))])],1),t._v(" "),5==t.product.rating?e("div",{staticClass:"product-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"})]):t._e(),t._v(" "),4==t.product.rating?e("div",{staticClass:"product-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),3==t.product.rating?e("div",{staticClass:"product-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),2==t.product.rating?e("div",{staticClass:"product-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),1==t.product.rating?e("div",{staticClass:"product-rating"},[e("i",{staticClass:"fa fa-star-o yellow"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"}),t._v(" "),e("i",{staticClass:"fa fa-star-o"})]):t._e(),t._v(" "),e("div",{staticClass:"product-price"},[e("span",[t._v("$"+t._s(t.discountedPrice(t.product).toFixed(2)))]),t._v(" "),t.product.discount>0?e("span",{staticClass:"old"},[t._v("$"+t._s(t.product.price.toFixed(2)))]):t._e()]),t._v(" "),"list"===t.layout?e("div",{staticClass:"product-content__list-view"},[e("p",[t._v(t._s(t.product.description))]),t._v(" "),e("div",{staticClass:"pro-action d-flex align-items-center"},[e("div",{staticClass:"pro-cart btn-hover"},[t.product.variation?e("n-link",{staticClass:"btn",attrs:{to:"/product/".concat(t.slugify(t.product.title))}},[t._v("\n                        Избери опция\n                    ")]):e("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"pe-7s-cart"}),t._v("\n                        Добави в количката\n                    ")])],1),t._v(" "),e("div",{staticClass:"pro-wishlist"},[e("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])]),t._v(" "),e("div",{staticClass:"pro-compare"},[e("button",{on:{click:function(e){return t.addToCompare(t.product)}}},[e("i",{staticClass:"pe-7s-shuffle"})])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,r){var o=r(3),c=r(36),l=r(16),n=r(375),d=o("".replace),v="["+n+"]",f=RegExp("^"+v+v+"*"),_=RegExp(v+v+"*$"),C=function(t){return function(e){var r=l(c(e));return 1&t&&(r=d(r,f,"")),2&t&&(r=d(r,_,"")),r}};t.exports={start:C(1),end:C(2),trim:C(3)}},375:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(t,e,r){"use strict";r.r(e);r(34),r(77),r(10),r(78);var o={props:["classes"],computed:{categoryList:function(){return this.$store.getters.categoryList},sizeList:function(){return this.$store.getters.sizeList},colorList:function(){return this.$store.getters.colorList},tagList:function(){return this.$store.getters.tagList}},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},c=r(15),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-style",class:t.classes},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Categories")]),t._v(" "),e("ul",{staticClass:"sidebar-widget-list mt-20"},t._l(t.categoryList,(function(r,o){return e("li",{key:o,staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"?category=".concat(t.slugify(r))}},[e("span",{staticClass:"check-mark"}),t._v("\n                    "+t._s(r)+"\n                ")])],1)})),0)]),t._v(" "),e("div",{staticClass:"sidebar-widget mt-50"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Colour")]),t._v(" "),e("ul",{staticClass:"sidebar-widget-list mt-20"},t._l(t.colorList,(function(r,o){return e("li",{key:o,staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"?color=".concat(t.slugify(r))}},[e("span",{staticClass:"check-mark"}),t._v("\n                    "+t._s(r)+"\n                ")])],1)})),0)]),t._v(" "),e("div",{staticClass:"sidebar-widget mt-50"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Sizes")]),t._v(" "),e("ul",{staticClass:"sidebar-widget-list mt-20"},t._l(t.sizeList,(function(r,o){return e("li",{key:o,staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"?size=".concat(t.slugify(r))}},[e("span",{staticClass:"check-mark"}),t._v("\n                    "+t._s(r)+"\n                ")])],1)})),0)]),t._v(" "),e("div",{staticClass:"sidebar-widget sidebar-widget__tag mt-60"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Tags")]),t._v(" "),e("div",{staticClass:"sidebar-widget-tag mt-30"},[e("ul",t._l(t.tagList,(function(r,o){return e("li",{key:o},[e("n-link",{attrs:{to:"?tag=".concat(t.slugify(r))}},[t._v("\n                        "+t._s(r)+"\n                    ")])],1)})),0)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-widget"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Search")]),t._v(" "),e("div",{staticClass:"pro-sidebar-search mb-50 mt-25"},[e("form",{staticClass:"pro-sidebar-search-form"},[e("input",{attrs:{type:"text",placeholder:"Search here..."}}),t._v(" "),e("button",[e("i",{staticClass:"pe-7s-search"})])])])])}],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";var o=r(2),c=r(3),l=r(41),n=r(33),d=r(37),v=r(233),f=r(16),_=r(4),C=r(232),h=r(154),m=r(405),y=r(406),w=r(99),k=r(407),O=[],$=c(O.sort),S=c(O.push),T=_((function(){O.sort(void 0)})),A=_((function(){O.sort(null)})),I=h("sort"),j=!_((function(){if(w)return w<70;if(!(m&&m>3)){if(y)return!0;if(k)return k<603;var code,t,e,r,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)O.push({k:t+r,v:e})}for(O.sort((function(a,b){return b.v-a.v})),r=0;r<O.length;r++)t=O[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:T||!A||!I||!j},{sort:function(t){void 0!==t&&l(t);var e=n(this);if(j)return void 0===t?$(e):$(e,t);var r,o,c=[],_=d(e);for(o=0;o<_;o++)o in e&&S(c,e[o]);for(C(c,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:f(e)>f(r)?1:-1}}(t)),r=d(c),o=0;o<r;)e[o]=c[o++];for(;o<_;)v(e,o++);return e}})},405:function(t,e,r){var o=r(82).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},406:function(t,e,r){var o=r(82);t.exports=/MSIE|Trident/.test(o)},407:function(t,e,r){var o=r(82).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]}}]);