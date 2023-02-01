exports.ids = [69,13,16,24,65];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=63903bfe&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-details-page-wrapper"},[_c('HeaderWithTopbar',{attrs:{"containerClass":"container"}}),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"pageTitle":_vm.blog.title}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"Blog-details-inner pt-100 pb-100\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row flex-row-reverse\">","</div>",[_vm._ssrNode("<div class=\"col-lg-9\"><div class=\"blog-details-wrapper ml-20\"><div class=\"blog-details-top\"><div class=\"blog-details-img\"><img"+_vm._ssrAttr("src",_vm.blog.imgSrc)+_vm._ssrAttr("alt",_vm.blog.title)+"></div> <div class=\"blog-details-content\"><div class=\"blog-meta-2\"><ul><li>"+_vm._ssrEscape(_vm._s(_vm.blog.date))+"</li> <li><a href=\"#\"><i class=\"fa fa-comments-o\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.blog.comment))+"</a></li></ul></div> <h3>"+_vm._ssrEscape(_vm._s(_vm.blog.title))+"</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </p> <blockquote>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</blockquote> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div></div> <div class=\"tag-share\"><div class=\"dec-tag\"><ul><li><a href=\"#\">lifestyle ,</a></li> <li><a href=\"#\">interior ,</a></li> <li><a href=\"#\">outdoor</a></li></ul></div> <div class=\"blog-share\"><span>share:</span> <div class=\"share-social\"><ul><li><a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a></li> <li><a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a></li> <li><a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a></li></ul></div></div></div> <div class=\"next-previous-post\"><a href=\"#\"><i class=\"fa fa-angle-left\"></i> prev post</a> <a href=\"#\">next post <i class=\"fa fa-angle-right\"></i></a></div> <div class=\"blog-comment-wrapper mt-55\"><h4 class=\"blog-dec-title\">comments : 02</h4> <div class=\"single-comment-wrapper mt-35\"><div class=\"blog-comment-img\"><img src=\"/img/blog/comment-1.jpg\" alt></div> <div class=\"blog-comment-content\"><h4>Anthony Stephens</h4> <span>October 14, 2018 </span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam</p> <button class=\"reply-btn\">Reply</button></div></div> <div class=\"single-comment-wrapper mt-50 ml-60\"><div class=\"blog-comment-img\"><img src=\"/img/blog/comment-2.jpg\" alt></div> <div class=\"blog-comment-content\"><h4>DX Joxova</h4> <span>October 14, 2018 </span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam</p> <button class=\"reply-btn\">Reply</button></div></div></div> <div class=\"blog-reply-wrapper mt-55\"><h4 class=\"blog-dec-title\">post a comment</h4> <form class=\"blog-form\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"leave-form\"><input type=\"text\" placeholder=\"Full Name\"></div></div> <div class=\"col-md-6\"><div class=\"leave-form\"><input type=\"email\" placeholder=\"Email Address \"></div></div> <div class=\"col-md-12\"><div class=\"text-leave\"><textarea placeholder=\"Message\"></textarea> <button type=\"submit\">SEND MESSAGE</button></div></div></div></form></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-3\">","</div>",[_c('BlogSidebar')],1)],2)])]),_vm._ssrNode(" "),_c('TheFooter')],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=63903bfe&

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({data(){return{blog: blog,slug:this.$route.params.slug};},mounted(){this.blog=blog.find(blog=>this.slugify(blog.title)===this.slug);},methods:{slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}},head(){return{title:this.blog.title};}});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ee3a2aaa"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderWithTopbar: __webpack_require__(53).default,Breadcrumb: __webpack_require__(54).default,BlogSidebar: __webpack_require__(65).default,TheFooter: __webpack_require__(52).default})


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=template&id=e65991ee&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{staticClass:"footer-area bg-gray pt-100 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"copyright mb-30\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"logo"}})])],1),_vm._ssrNode(" <p>© 2023 <a href=\"#\" target=\"_blank\">Dalvita</a>.<br> All Rights Reserved</p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-30\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>ABOUT US</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("Shop")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-sm-4\">","</div>",[_vm._ssrNode("<div class=\"footer-widget mb-30 ml-50\">","</div>",[_vm._ssrNode("<div class=\"footer-title\"><h3>USEFUL LINKS</h3></div> "),_vm._ssrNode("<div class=\"footer-list\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/terms-conditions"}},[_vm._v("Terms of Conditions")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("FAQs")])],1)],2)])],2)]),_vm._ssrNode(" <div class=\"col-lg-2 col-sm-6\"><div class=\"footer-widget mb-30 ml-75\"><div class=\"footer-title\"><h3>FOLLOW US</h3></div> <div class=\"footer-list\"><ul><li><a href=\"https://www.facebook.com/\" target=\"_blank\">Facebook</a></li> <li><a href=\"https://twitter.com/\" target=\"_blank\">Twitter</a></li> <li><a href=\"https://www.instagram.com/\" target=\"_blank\">Instagram</a></li> <li><a href=\"https://www.youtube.com/\" target=\"_blank\">Youtube</a></li></ul></div></div></div> <div class=\"col-lg-4 col-sm-6\"><div class=\"footer-widget mb-30 ml-70\"><div class=\"footer-title\"><h3>SUBSCRIBE</h3></div> <div class=\"subscribe-style\"><p>Get E-mail updates about our latest shop and special offers.</p> <div class=\"subscribe-form\"><form class=\"mc-form\"><input type=\"email\" required=\"required\" placeholder=\"Enter your email here..\" name=\"email\" class=\"email\"> <button name=\"subscribe\" class=\"button\">Subscribe</button></form></div></div></div></div>")],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=template&id=e65991ee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TheFooter.vue?vue&type=script&lang=js&
/* harmony default export */ var TheFootervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/TheFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TheFootervue_type_script_lang_js_ = (TheFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TheFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TheFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ec7ccf6e"
  
)

/* harmony default export */ var TheFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=template&id=1a8ef560&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area\">","</header>",[_vm._ssrNode("<div class=\"header-top-area header-padding-2 d-none d-lg-block\"><div"+_vm._ssrClass(null,_vm.containerClass)+"><div class=\"header-top-inner\"><div class=\"language-currency-wrap\"><div class=\"same-language-currency language-style\"><select name=\"language\"><option value=\"english\">English</option> <option value=\"hindi\">Bulgarian</option> <option value=\"spanish\">Greece</option></select></div> <div class=\"same-language-currency use-style\"><select name=\"currency\"><option value=\"usd\">USD</option> <option value=\"eur\">EUR</option> <option value=\"rup\">BGN</option></select></div> <div class=\"same-language-currency\"><p>Call: <a href=\"callto:+35988812345678\">+359 888 123 456 78</a></p></div></div> <div class=\"header-offer\"><p>Free delivery on order over <span>$200</span></p></div></div></div></div> "),_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix",{'is-sticky':_vm.isSticky})+">","</div>",[_vm._ssrNode("<div"+_vm._ssrClass(null,_vm.containerClass)+">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"flone logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 d-none d-lg-block\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-2 col-md-6 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Register")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/my-account"}},[_vm._v("my account")])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-compare\">","</div>",[_c('n-link',{attrs:{"to":"/compare"}},[_c('i',{staticClass:"pe-7s-shuffle"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.compareItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=template&id=1a8ef560&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
/* harmony default export */ var HeaderWithTopbarvue_type_script_lang_js_ = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19))},props:['containerClass'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;},compareItemCount(){return this.$store.getters.compareItemCount;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderWithTopbarvue_type_script_lang_js_ = (HeaderWithTopbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderWithTopbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3e5b59a4"
  
)

/* harmony default export */ var HeaderWithTopbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(21).default,MiniCart: __webpack_require__(19).default,OffCanvasMobileMenu: __webpack_require__(20).default})


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=930afe44&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"breadcrumb-content text-center\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" <li class=\"active\">"+_vm._ssrEscape(_vm._s(_vm.pageTitle))+"</li>")],2)])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=930afe44&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({props:["pageTitle"]});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ee30114"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"A guide to latest trends product\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-1.jpg\",\"category\":[\"women\",\"lifestyle\"],\"author\":\"Admin\",\"date\":\"15 April, 2021\",\"comment\":12},{\"id\":2,\"title\":\"Five ways to lead a happy life\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-2.jpg\",\"category\":[\"lifestyle\",\"men\"],\"author\":\"admin\",\"date\":\"22 March, 2021\",\"comment\":45},{\"id\":3,\"title\":\"Tips on having a happy life forever\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-3.jpg\",\"category\":[\"women\",\"men\"],\"author\":\"admin\",\"date\":\"10 May, 2021\",\"comment\":30},{\"id\":4,\"title\":\"New winter collection with discount\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-4.jpg\",\"category\":[\"women\",\"lifestyle\"],\"author\":\"Admin\",\"date\":\"15 June, 2021\",\"comment\":52},{\"id\":5,\"title\":\"New collection for this winter\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-5.jpg\",\"category\":[\"lifestyle\",\"men\"],\"author\":\"admin\",\"date\":\"10 July, 2021\",\"comment\":35},{\"id\":6,\"title\":\"Our best collection this winter\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-6.jpg\",\"category\":[\"women\",\"men\"],\"author\":\"admin\",\"date\":\"18 January, 2021\",\"comment\":40},{\"id\":7,\"title\":\"Tempor incididunt labo dolor magna\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-7.jpg\",\"category\":[\"women\",\"lifestyle\"],\"author\":\"Admin\",\"date\":\"15 April, 2021\",\"comment\":12},{\"id\":8,\"title\":\"Lorem ipsum dolor sit amet consectetur\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-8.jpg\",\"category\":[\"lifestyle\",\"men\"],\"author\":\"admin\",\"date\":\"22 March, 2021\",\"comment\":45},{\"id\":9,\"title\":\"Reprehendrit in voluptate velit cillum\",\"desc\":\"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus\",\"imgSrc\":\"/img/blog/blog-9.jpg\",\"category\":[\"women\",\"men\"],\"author\":\"admin\",\"date\":\"10 May, 2021\",\"comment\":30}]");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=template&id=20d200f2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"blog-sidebar"},[_vm._ssrNode("<div class=\"sidebar-widget\"><h4 class=\"pro-sidebar-title\">Search</h4> <div class=\"pro-sidebar-search mb-55 mt-25\"><form class=\"pro-sidebar-search-form\"><input type=\"text\" placeholder=\"Search here...\"> <button><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Recent Projects</h4> "),_vm._ssrNode("<div class=\"sidebar-project-wrap mt-30\">","</div>",[_vm._ssrNode("<div class=\"single-sidebar-blog\">","</div>",[_vm._ssrNode("<div class=\"sidebar-blog-img\">","</div>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_c('img',{attrs:{"src":"/img/blog/sidebar-1.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-blog-content\">","</div>",[_vm._ssrNode("<span>Photography</span> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_vm._v("A guide to latest trends product")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"single-sidebar-blog\">","</div>",[_vm._ssrNode("<div class=\"sidebar-blog-img\">","</div>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_c('img',{attrs:{"src":"/img/blog/sidebar-2.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-blog-content\">","</div>",[_vm._ssrNode("<span>Branding</span> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_vm._v("Five ways to lead a happy life")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"single-sidebar-blog\">","</div>",[_vm._ssrNode("<div class=\"sidebar-blog-img\">","</div>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_c('img',{attrs:{"src":"/img/blog/sidebar-3.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-blog-content\">","</div>",[_vm._ssrNode("<span>Design</span> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_vm._v("Tips on having a happy life")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"single-sidebar-blog\">","</div>",[_vm._ssrNode("<div class=\"sidebar-blog-img\">","</div>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_c('img',{attrs:{"src":"/img/blog/sidebar-1.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-blog-content\">","</div>",[_vm._ssrNode("<span>Photography</span> "),_vm._ssrNode("<h4>","</h4>",[_c('n-link',{attrs:{"to":"/blog/a-guide-to-latest-trends-product"}},[_vm._v("New collection for this winter/blog")])],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget mt-35\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Categories</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",[_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    women\n                    "),_c('span',[_vm._v("8")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    men\n                    "),_c('span',[_vm._v("5")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    lifestyle\n                    "),_c('span',[_vm._v("10")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    fashion\n                    "),_c('span',[_vm._v("15")])])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-widget mt-50\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Tag</h4> "),_vm._ssrNode("<div class=\"sidebar-widget-tag mt-25\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_vm._v("Clothing")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_vm._v("Accessories")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_vm._v("For Men")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_vm._v("Women")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog/blog-without-sidebar"}},[_vm._v("Fashion")])],1)],2)])],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=template&id=20d200f2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogSidebar.vue?vue&type=script&lang=js&
/* harmony default export */ var BlogSidebarvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/BlogSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogSidebarvue_type_script_lang_js_ = (BlogSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6612e3f7"
  
)

/* harmony default export */ var BlogSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map