/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'App Entry'
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ "./src/client/reducers.js":
/*!********************************!*\
  !*** ./src/client/reducers.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

function mainReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return state;
}

function subReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return state;
}

exports.default = (0, _redux.combineReducers)({
    main: mainReducer,
    sub: subReducer
});

/***/ }),

/***/ "./src/client/store.js":
/*!*****************************!*\
  !*** ./src/client/store.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var enhancers = [_reduxThunk2.default];
    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, enhancers)));
};

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxLogger = __webpack_require__(/*! redux-logger */ "redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ./reducers */ "./src/client/reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/server/controllers/index.js":
/*!*****************************************!*\
  !*** ./src/server/controllers/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendAppPage = sendAppPage;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _standard = __webpack_require__(/*! ../views/standard */ "./src/server/views/standard/index.js");

var _standard2 = _interopRequireDefault(_standard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendAppPage(Component, store) {
    return function (req, res) {
        var context = {};
        var location = req.url;


        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouterDom.StaticRouter,
                { context: context, location: location },
                _react2.default.createElement(Component, null)
            )
        ));

        var finalState = store.getState();
        var helmet = _reactHelmet.Helmet.renderStatic();

        res.status(200).send((0, _standard2.default)(markup, helmet, finalState));
    };
}

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = __webpack_require__(/*! morgan */ "morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = __webpack_require__(/*! ./routes */ "./src/server/routes/index.js");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('dev'));

app.use('/', _routes2.default);

app.listen("3000", function (err) {
    if (!err) {
        console.log('Web application running on port ' + "3000");
    } else {
        console.log('Oops something went wrong when starting server');
    }
});

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _controllers = __webpack_require__(/*! ../controllers */ "./src/server/controllers/index.js");

var _store = __webpack_require__(/*! ../../client/store */ "./src/client/store.js");

var _store2 = _interopRequireDefault(_store);

var _App = __webpack_require__(/*! ../../client/App */ "./src/client/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', (0, _controllers.sendAppPage)(_App2.default, (0, _store2.default)()));

exports.default = router;

/***/ }),

/***/ "./src/server/views/standard/index.js":
/*!********************************************!*\
  !*** ./src/server/views/standard/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (html, helmet, initialState) {
    return '\n    <!DOCTYPE html>\n    <html ' + helmet.htmlAttributes.toString() + '>\n        <head>\n            ' + helmet.base.toString() + '\n            ' + helmet.title.toString() + '\n            ' + helmet.meta.toString() + '\n            ' + helmet.link.toString() + '\n        </head>\n        <body ' + helmet.bodyAttributes.toString() + '>\n            <div id="react-root">\n                ' + html + '\n            </div>\n            <script>\n                window.__INITIAL_STATE__ = ' + JSON.stringify(initialState).replace(/</g, '\\u003c') + ';\n            </script>\n            <script src="/vendor.bundle.js" type="text/javascript"></script>\n            <script src="/app.bundle.js" type="text/javascript"></script>\n        </body>\n    </html>\n    ';
};

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY29udHJvbGxlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3ZpZXdzL3N0YW5kYXJkL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJtYWluUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic3ViUmVkdWNlciIsIm1haW4iLCJzdWIiLCJpbml0aWFsU3RhdGUiLCJlbmhhbmNlcnMiLCJ0aHVuayIsInJvb3RSZWR1Y2VycyIsImFwcGx5TWlkZGxld2FyZSIsInNlbmRBcHBQYWdlIiwic3RvcmUiLCJyZXEiLCJyZXMiLCJjb250ZXh0IiwibG9jYXRpb24iLCJ1cmwiLCJtYXJrdXAiLCJmaW5hbFN0YXRlIiwiZ2V0U3RhdGUiLCJoZWxtZXQiLCJIZWxtZXQiLCJyZW5kZXJTdGF0aWMiLCJzdGF0dXMiLCJzZW5kIiwiYXBwIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiZ2V0IiwiQXBwIiwiaHRtbCIsImh0bWxBdHRyaWJ1dGVzIiwidG9TdHJpbmciLCJiYXNlIiwidGl0bGUiLCJtZXRhIiwibGluayIsImJvZHlBdHRyaWJ1dGVzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdhO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7Ozs7RUFQd0JBLGdCQUFNQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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T3lCLElBQVAsQ0FBWUosUUFBWixFQVBWLHlDQVNZckIsT0FBTzBCLGNBQVAsQ0FBc0JMLFFBQXRCLEVBVFosOERBV2NGLElBWGQsK0ZBY3lDUSxLQUFLQyxTQUFMLENBQWUzQyxZQUFmLEVBQTZCNEMsT0FBN0IsQ0FBcUMsSUFBckMsRUFBMkMsU0FBM0MsQ0FkekM7QUFxQkgsQzs7Ozs7Ozs7Ozs7QUN2QkQsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zZXJ2ZXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBBcHAgRW50cnlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmZ1bmN0aW9uIG1haW5SZWR1Y2VyKHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gc3ViUmVkdWNlcihzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbWFpbjogbWFpblJlZHVjZXIsXG4gICAgc3ViOiBzdWJSZWR1Y2VyXG59KTsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluaXRpYWxTdGF0ZT17fSkge1xuICAgIGNvbnN0IGVuaGFuY2VycyA9IFt0aHVua107XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgaW5pdGlhbFN0YXRlLCBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5lbmhhbmNlcnMpKSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmltcG9ydCBzdGFuZGFyZFRlbXBsYXRlIGZyb20gJy4uL3ZpZXdzL3N0YW5kYXJkJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRBcHBQYWdlKENvbXBvbmVudCwgc3RvcmUpIHtcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcbiAgICAgICAgY29uc3QgeyB1cmwgOiBsb2NhdGlvbiB9ID0gcmVxO1xuXG4gICAgICAgIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBjb250ZXh0PXtjb250ZXh0fSBsb2NhdGlvbj17bG9jYXRpb259PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50Lz5cbiAgICAgICAgICAgICAgICA8L1N0YXRpY1JvdXRlcj5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZmluYWxTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIGNvbnN0IGhlbG1ldCA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChzdGFuZGFyZFRlbXBsYXRlKG1hcmt1cCwgaGVsbWV0LCBmaW5hbFN0YXRlKSk7XG4gICAgfTtcbn0iLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcbmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XG5cbmFwcC51c2UoJy8nLCByb3V0ZXMpO1xuXG5hcHAubGlzdGVuKHByb2Nlc3MuZW52LlNFUlZFUl9QT1JULCBlcnIgPT4ge1xuICAgIGlmKCFlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFdlYiBhcHBsaWNhdGlvbiBydW5uaW5nIG9uIHBvcnQgJHtwcm9jZXNzLmVudi5TRVJWRVJfUE9SVH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhgT29wcyBzb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIHN0YXJ0aW5nIHNlcnZlcmApO1xuICAgIH1cbn0pOyIsImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgc2VuZEFwcFBhZ2UgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XG5pbXBvcnQgQ29uZmlndXJlU3RvcmUgZnJvbSAnLi4vLi4vY2xpZW50L3N0b3JlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vY2xpZW50L0FwcCc7XG5cblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCBzZW5kQXBwUGFnZShBcHAsIENvbmZpZ3VyZVN0b3JlKCkpKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsIlxuZXhwb3J0IGRlZmF1bHQgKGh0bWwsIGhlbG1ldCwgaW5pdGlhbFN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICA8aHRtbCAke2hlbG1ldC5odG1sQXR0cmlidXRlcy50b1N0cmluZygpfT5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAke2hlbG1ldC5iYXNlLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAke2hlbG1ldC50aXRsZS50b1N0cmluZygpfVxuICAgICAgICAgICAgJHtoZWxtZXQubWV0YS50b1N0cmluZygpfVxuICAgICAgICAgICAgJHtoZWxtZXQubGluay50b1N0cmluZygpfVxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxib2R5ICR7aGVsbWV0LmJvZHlBdHRyaWJ1dGVzLnRvU3RyaW5nKCl9PlxuICAgICAgICAgICAgPGRpdiBpZD1cInJlYWN0LXJvb3RcIj5cbiAgICAgICAgICAgICAgICAke2h0bWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgd2luZG93Ll9fSU5JVElBTF9TVEFURV9fID0gJHtKU09OLnN0cmluZ2lmeShpbml0aWFsU3RhdGUpLnJlcGxhY2UoLzwvZywgJ1xcXFx1MDAzYycpfTtcbiAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvdmVuZG9yLmJ1bmRsZS5qc1wiIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2FwcC5idW5kbGUuanNcIiB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICAgYDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtbG9nZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=