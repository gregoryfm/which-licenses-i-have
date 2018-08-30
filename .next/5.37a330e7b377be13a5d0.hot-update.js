webpackHotUpdate(5,{

/***/ "./pages/components/Licenses.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Licenses; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("./node_modules/ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader__ = __webpack_require__("./node_modules/react-spinners/ScaleLoader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader__);
var _jsxFileName = "/Users/pedronauck/Desktop/deps-website/pages/components/Licenses.js";




var MARGIN = '50px';
var Loading =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y0"
})("margin-top:", MARGIN, ";text-align:center;font-size:30px;");
var Wrapper =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y1"
})("margin-top:", MARGIN, ";");
var Item =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y2"
})("display:flex;align-items:center;");
var Name =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y3"
})("min-width:300px;border:1px dashed white;padding:20px;");
var Version =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('span', {
  target: "e14vfl5y4"
})("opacity:0.5;");
var License =
/*#__PURE__*/
Object(__WEBPACK_IMPORTED_MODULE_2_react_emotion__["a" /* default */])('div', {
  target: "e14vfl5y5"
})("border:1px dashed white;border-left:0;padding:20px;");
var getLicenses = __WEBPACK_IMPORTED_MODULE_0_ramda__["d" /* pipe */](__WEBPACK_IMPORTED_MODULE_0_ramda__["c" /* path */](['licenseSources', 'package', 'sources']), __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* defaultTo */]([]), __WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* map */](__WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('license')));
var Licenses = function Licenses(_ref) {
  var isLoading = _ref.isLoading,
      error = _ref.error,
      data = _ref.data;

  if (isLoading) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_spinners_ScaleLoader___default.a, {
      size: 120,
      color: "white",
      loading: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }));
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(License, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, licenses.join(', '))), data && data.length > 0 && data.map(function (item) {
    var name = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('name', item);
    var version = __WEBPACK_IMPORTED_MODULE_0_ramda__["e" /* prop */]('version', item);
    var licenses = getLicenses(item);
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Name, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }, name, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Version, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      }
    }, "@", version)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(License, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }, licenses.join(', ')));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Licenses")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.37a330e7b377be13a5d0.hot-update.js.map