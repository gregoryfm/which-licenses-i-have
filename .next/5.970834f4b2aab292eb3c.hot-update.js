webpackHotUpdate(5,{

/***/ "./pages/components/Licences.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Licences; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("./node_modules/ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader__ = __webpack_require__("./node_modules/react-spinners/ScaleLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader__);
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licences.js";




var MARGIN = '50px';
var Loading =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf0"
})("margin-top:", MARGIN, ";text-align:center;font-size:30px;");
var Wrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf1"
})("margin-top:", MARGIN, ";");
var Item =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf2"
})("display:flex;align-items:center;");
var Name =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf3"
})("border:1px dashed white;padding:20px;");
var Licence =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "ek9g6vf4"
})("border:1px dashed white;border-left:0;padding:20px;");
var Licences = function Licences(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      data = _ref.data;

  if (isLoading) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, data && data.length > 0 && data.map(function (item) {
    var id = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* prop */]('id', item);
    var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* prop */]('version', item);
    var licences = __WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* path */](['licenseSources', 'package', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* prop */]('licence')));
    console.log(licences(item));
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }, id, "@", version), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Licence, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, "MIT"));
  }));
};
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Licences")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.970834f4b2aab292eb3c.hot-update.js.map