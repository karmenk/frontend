exports.ids = [3];
exports.modules = {

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("8383740c", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login{background-color:#4682b4;display:flex;height:100vh;justify-content:center;align-items:center}.login-container{background:rgba(58,63,68,.5);border-radius:5px;box-shadow:0 1.5px 0 0 rgba(0,0,0,.1);width:450px;display:flex;flex-direction:column}.logo{font-family:\"museo-slab\";font-size:20px;text-align:center;padding:20px 20px 0;margin:0}.login-item{color:#fff;padding:25px 25px 0;margin:20px 20px 0;border-radius:3px}a,input{border:0;color:inherit;font:inherit;margin:0;outline:0;padding:0;transition:background-color .3s}.user:before{content:\"\\f007\"}.lock:before,.user:before{font:14px fontawesome;color:#5b5b5b}.lock:before{content:\"\\f023\"}.form a,.form input[type=password],.form input[type=text]{width:100%}.form-login a,.form-login input[type=password],.form-login input[type=text],.form-login label{border-radius:.25rem;padding:1rem;color:#3a3f44}.form-login label{background-color:#222;border-bottom-right-radius:0;border-top-right-radius:0;padding-left:1.25rem;padding-right:1.25rem}.form-login input[type=password],.form-login input[type=text]{background-color:#fff;border-bottom-left-radius:0;border-top-left-radius:0}.form-login input[type=password]:focus,.form-login input[type=password]:hover,.form-login input[type=text]:focus,.form-login input[type=text]:hover{background-color:#eee}.form-login a{text-decoration:none;background-color:#00b9bc;color:#eee;font-weight:700;text-transform:uppercase}.form-login a:focus,.form-login a:hover{background-color:#197071}.form-field{display:flex;margin-bottom:2rem;text-align:center}.hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=563a91ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container login"},[_vm._ssrNode("<div class=\"login-container\"><div class=\"logo\">\n      Log In\n    </div> <div class=\"login-item\"><form action method=\"post\" class=\"form form-login\"><div class=\"form-field\"><label for=\"login-username\" class=\"user\"><span class=\"hidden\">Username</span></label> <input id=\"login-username\" type=\"text\" placeholder=\"Username\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"form-input\"></div> <div class=\"form-field\"><label for=\"login-password\" class=\"lock\"><span class=\"hidden\">Password</span></label> <input id=\"login-password\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"form-input\"></div> <div class=\"form-field\"><a href=\"#\" class=\"btn primary\">Log in</a></div></form></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=563a91ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    signIn() {
      console.log('signin');
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password
      }).then(result => {
        // this.alert = { type: 'success', message: result.data.message }
        // this.loading = false
        if (result.data.token) {
          this.$router.push('/');
        } else {
          console.log(result.data);
        }
      }).catch(error => {
        console.log(error); // this.loading = false
        // if (error.response && error.response.data) {
        //   this.alert = { type: 'error', message: error.response.data.message || error.reponse.status }
        // }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0c44a132"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map