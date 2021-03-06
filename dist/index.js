(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-ui-fast-click", ["react"], factory);
	else if(typeof exports === 'object')
		exports["dyna-ui-fast-click"] = factory(require("react"));
	else
		root["dyna-ui-fast-click"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaFastClick_1 = __webpack_require__(2);
exports.DynaFastClick = DynaFastClick_1.DynaFastClick;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var DynaFastClick = /** @class */ (function (_super) {
    __extends(DynaFastClick, _super);
    function DynaFastClick(props) {
        var _this = _super.call(this, props) || this;
        _this.touchApplied = false;
        _this.touchCanceled = false;
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchCancel = _this.handleTouchCancel.bind(_this);
        return _this;
    }
    DynaFastClick.prototype.triggerClick = function (event) {
        this.props.onClick(event);
    };
    DynaFastClick.prototype.handleClick = function (event) {
        if (this.touchApplied) {
            this.touchApplied = false;
            return;
        }
        this.touchApplied = false;
        this.triggerClick(event);
    };
    DynaFastClick.prototype.handleTouchStart = function () {
        this.touchCanceled = false;
        this.touchApplied = true;
    };
    DynaFastClick.prototype.handleTouchEnd = function (event) {
        if (!this.touchCanceled) {
            event.preventDefault();
            this.triggerClick(event);
        }
    };
    DynaFastClick.prototype.handleTouchMove = function () {
        this.touchCanceled = true;
    };
    DynaFastClick.prototype.handleTouchCancel = function () {
        this.touchCanceled = true;
    };
    DynaFastClick.prototype.render = function () {
        var _a = this.props, className = _a.className, NodeType = _a.nodeType, children = _a.children;
        return (React.createElement(NodeType, { className: className, onClick: this.handleClick, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onTouchMove: this.handleTouchMove, onTouchCancel: this.handleTouchCancel }, children));
    };
    DynaFastClick.defaultProps = {
        className: "",
        nodeType: "span",
        children: null,
        onClick: function (event) { return undefined; },
    };
    return DynaFastClick;
}(React.Component));
exports.DynaFastClick = DynaFastClick;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});