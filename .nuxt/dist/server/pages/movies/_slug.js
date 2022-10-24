exports.ids = [4,1,2];
exports.modules = {

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/HeaderView.vue?vue&type=template&id=cf8a7aa0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._ssrNode("<button disabled=\"disabled\" class=\"twelve columns button-primary\">\n    Top 500 Movies by Production Budget\n  </button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/HeaderView.vue?vue&type=template&id=cf8a7aa0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/HeaderView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "af6e1168"
  
)

/* harmony default export */ var HeaderView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/FooterView.vue?vue&type=template&id=233accec&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_vm._ssrNode("<button disabled=\"disabled\" class=\"twelve columns button-primary\">\n    Copyright (c) 2022 - Esteban Espinzoa Fallas\n  </button>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/global/FooterView.vue?vue&type=template&id=233accec&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/FooterView.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "20a4474c"
  
)

/* harmony default export */ var FooterView = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/movies/_slug.vue?vue&type=template&id=2c0727ec&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_c('HeaderView'), _vm._ssrNode(" <div class=\"row\"><div class=\"three columns\"></div> <div class=\"six columns\"><h4>" + _vm._ssrEscape(_vm._s(_vm.movie.title)) + "</h4>" + _vm._ssrEscape("\n\t   genre " + _vm._s(_vm.movie.genre)) + "<br>" + _vm._ssrEscape("\n\t   Rank: " + _vm._s(_vm.movie.rank) + "; Year: " + _vm._s(_vm.movie.year) + ";") + "<br>" + _vm._ssrEscape("\n\t   mpaa: " + _vm._s(_vm.movie.mpaa) + "; Production cost: " + _vm._s(_vm.movie.production_cost) + "\n\t ") + "</div> <div class=\"two columns\"></div></div> "), _c('FooterView')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/movies/_slug.vue?vue&type=template&id=2c0727ec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/movies/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const movie = await $content('topmovies', params.slug).fetch();
    return {
      movie
    };
  }
});
// CONCATENATED MODULE: ./pages/movies/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var movies_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/movies/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  movies_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "04bf4d50"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderView: __webpack_require__(23).default,FooterView: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map