(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{435:function(t,n,e){"use strict";e.r(n);e(84);var c={mounted:function(){var t;t&&clearInterval(t);var n=6e4,e=60*n,c=24*e,o=new Date("Jun 30, 2022").getTime(),r=document.getElementById("days"),l=document.getElementById("hours"),d=document.getElementById("minutes"),v=document.getElementById("seconds");t=setInterval((function(){var t=(new Date).getTime(),f=o-t,m=Math.floor(f/c),_=Math.floor(f%c/e),h=Math.floor(f%e/n),y=Math.floor(f%n/1e3);r&&l&&d&&v&&(r.innerText=m>9?m:"0".concat(m),l.innerText=_>9?_:"0".concat(_),d.innerText=h>9?h:"0".concat(h),v.innerText=y>9?y:"0".concat(y))}),1e3)}},o=e(15),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"deal-area pt-100 pb-100",style:{backgroundImage:"url(/img/bg/bg-1.jpg)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"col-lg-6 ms-auto"},[n("div",{staticClass:"funfact-content funfact-res text-center"},[n("h2",[t._v("Deal of the day")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"funfact-btn btn-only-round funfact-btn-red-2 btn-hover"},[n("n-link",{attrs:{to:"/shop"}},[t._v("SHOP NOW")])],1)])])])])])}),[function(){var t=this,n=t._self._c;return n("ul",{staticClass:"timer"},[n("li",[n("span",{attrs:{id:"days"}}),t._v("\n                            Days\n                        ")]),t._v(" "),n("li",[n("span",{attrs:{id:"hours"}}),t._v("\n                            Hours\n                        ")]),t._v(" "),n("li",[n("span",{attrs:{id:"minutes"}}),t._v("\n                            Mins\n                        ")]),t._v(" "),n("li",[n("span",{attrs:{id:"seconds"}}),t._v("\n                            Secs\n                        ")])])}],!1,null,null,null);n.default=component.exports}}]);