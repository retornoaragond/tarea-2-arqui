(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{192:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[t("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[this._v("\n    Top 500 Movies by Production Budget\n  ")])])}],!1,null,null,null);e.default=component.exports},193:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[t("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[this._v("\n    Copyright (c) 2022 - Esteban Espinzoa Fallas\n  ")])])}],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("topmovies").fetch();case 3:return r=e.sent,e.abrupt("return",{movies:r});case 5:case"end":return e.stop()}}),e)})))()}}),l=n(32),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HeaderView"),t._v(" "),e("h3",{staticStyle:{"margin-top":"15px"}},[t._v("Top 500 Movies by Production Budget")]),t._v(" "),e("p",[t._v("These are the top 500 films by production budget, as judged by The Numbers.")]),t._v(" "),e("ul",t._l(t.movies,(function(n){return e("li",{key:n.slug},[e("NuxtLink",{attrs:{to:{name:"movies-slug",params:{slug:n.slug}}}},[t._v(t._s(n.tittle))])],1)})),0),t._v(" "),e("FooterView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderView:n(192).default,FooterView:n(193).default})}}]);