(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{192:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[t("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[this._v("\n    Top 500 Movies by Production Budget\n  ")])])}],!1,null,null,null);e.default=component.exports},193:function(t,e,n){"use strict";n.r(e);var r=n(32),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[t("button",{staticClass:"twelve columns button-primary",attrs:{disabled:"disabled"}},[this._v("\n    Copyright (c) 2022 - Esteban Espinzoa Fallas\n  ")])])}],!1,null,null,null);e.default=component.exports},206:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(33),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("topmovies",r.slug).fetch();case 3:return o=e.sent,e.abrupt("return",{movie:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(32),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HeaderView"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"three columns"}),t._v(" "),e("div",{staticClass:"six columns"},[e("h4",[t._v(t._s(t.movie.title))]),t._v("\n\t   genre "+t._s(t.movie.genre)),e("br"),t._v("\n\t   Rank: "+t._s(t.movie.rank)+"; Year: "+t._s(t.movie.year)+";"),e("br"),t._v("\n\t   mpaa: "+t._s(t.movie.mpaa)+"; Production cost: "+t._s(t.movie.production_cost)+"\n\t ")]),t._v(" "),e("div",{staticClass:"two columns"})]),t._v(" "),e("FooterView")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderView:n(192).default,FooterView:n(193).default})}}]);