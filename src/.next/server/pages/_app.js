module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/footer/styles.js");
/* harmony import */ var _social_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-media */ "./components/social-media/index.js");

var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\footer\\index.js";



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["FooterContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["FooterWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_social_media__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["WebsiteRights"], {
        children: ["COPYRIGHT \xA9 ", new Date().getFullYear(), " ALL RIGHTS RESERVED."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/footer/styles.js":
/*!*************************************!*\
  !*** ./components/footer/styles.js ***!
  \*************************************/
/*! exports provided: FooterContainer, FooterWrapper, LinksContainer, LinksWrapper, LinkItems, LinkTitle, WebsiteRights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContainer", function() { return FooterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksContainer", function() { return LinksContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksWrapper", function() { return LinksWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkItems", function() { return LinkItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTitle", function() { return LinkTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteRights", function() { return WebsiteRights; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "styles__FooterContainer",
  componentId: "ox9mkn-0"
})(["background-color:#101522;"]);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__FooterWrapper",
  componentId: "ox9mkn-1"
})(["padding:18px 24px;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1100px;margin:0 auto;"]);
const LinksContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__LinksContainer",
  componentId: "ox9mkn-2"
})(["display:flex;justify-content:center;@media screen and (max-width:820px){padding-top:32px;}"]);
const LinksWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__LinksWrapper",
  componentId: "ox9mkn-3"
})(["display:flex;@media screen and (max-width:820px){flex-direction:column;}"]);
const LinkItems = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__LinkItems",
  componentId: "ox9mkn-4"
})(["display:flex;flex-direction:column;align-items:flex-start;margin:16px;text-align:left;width:160px;box-sizing:border-box;color:#fff;@media screen and (max-width:420px){margin:0;padding:10px;width:100%;}"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "styles__LinkTitle",
  componentId: "ox9mkn-5"
})(["font-size:14px;margin-bottom:16px;"]);
const WebsiteRights = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.small.withConfig({
  displayName: "styles__WebsiteRights",
  componentId: "ox9mkn-6"
})(["color:#fff;margin-top:16px;font-family:'Roboto',sans-serif;font-size:medium;"]);

/***/ }),

/***/ "./components/navbar/NavbarItem.js":
/*!*****************************************!*\
  !*** ./components/navbar/NavbarItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/navbar/styles.js");

var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\navbar\\NavbarItem.js";


const NavbarItem = ({
  path,
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["NavItemWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      activeClass: "active",
      to: path,
      spy: true,
      smooth: true,
      offset: -60,
      duration: 800,
      children: !!title && title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarItem);

/***/ }),

/***/ "./components/navbar/index.js":
/*!************************************!*\
  !*** ./components/navbar/index.js ***!
  \************************************/
/*! exports provided: items, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavbarItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarItem */ "./components/navbar/NavbarItem.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/navbar/styles.js");


var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\navbar\\index.js";




const items = [{
  id: 1,
  path: 'home',
  title: 'Home'
}, {
  id: 2,
  path: 'about',
  title: 'About'
}, {
  id: 3,
  path: 'skills',
  title: 'Skills'
}, {
  id: 4,
  path: 'contact',
  title: 'Contact'
}];

const Navbar = ({
  handleToggle
}) => {
  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"].scrollToTop();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["NavbarContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["NavLogo"], {
          onClick: scrollToTop,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: __webpack_require__(/*! ../../public/logo.jpg */ "./public/logo.jpg"),
            width: 80
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["MobileIcon"], {
          onClick: handleToggle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBars"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["NavbarMenu"], {
          children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavbarItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            path: item.path,
            title: item.title
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/navbar/styles.js":
/*!*************************************!*\
  !*** ./components/navbar/styles.js ***!
  \*************************************/
/*! exports provided: Nav, NavbarContainer, NavLogo, MobileIcon, NavbarMenu, NavItemWrapper, NavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarContainer", function() { return NavbarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLogo", function() { return NavLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileIcon", function() { return MobileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarMenu", function() { return NavbarMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemWrapper", function() { return NavItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "styles__Nav",
  componentId: "sc-1phjkzw-0"
})(["background:#000;height:80px;margin-top:-80px;display:flex;justify-content:center;align-items:center;margin-top:-80px;font-size:1rem;position:sticky;top:0;z-index:10;@media screen and (max-width:960px){transition:0.8s all ease;}"]);
const NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styles__NavbarContainer",
  componentId: "sc-1phjkzw-1"
})(["width:100%;max-width:1300px;padding:0 24px;display:flex;justify-content:space-between;height:80px;z-index:1;"]);
const NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styles__NavLogo",
  componentId: "sc-1phjkzw-2"
})(["color:#fff;cursor:pointer;display:flex;justify-self:flex-start;align-items:center;margin-left:24px;font-size:1.5rem;font-weight:bold;text-decoration:none;&:hover{color:#009ddc;transition:0.2s ease-in-out;}"]);
const MobileIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "styles__MobileIcon",
  componentId: "sc-1phjkzw-3"
})(["display:none;&:hover{color:#009ddc;transition:0.2s ease-in-out;}@media screen and (max-width:768px){color:#fff;display:block;position:absolute;top:0;right:0;transform:translate(-100%,60%);font-size:1.8rem;cursor:pointer;}"]);
const NavbarMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "styles__NavbarMenu",
  componentId: "sc-1phjkzw-4"
})(["display:flex;align-items:center;list-style:none;text-align:center;margin-right:-22px;@media screen and (max-width:768px){display:none;}"]);
const NavItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "styles__NavItemWrapper",
  componentId: "sc-1phjkzw-5"
})(["height:80px;color:#ffffff;display:flex;align-items:center;text-decoration:none;padding:0 1rem;height:100%;cursor:pointer;font-size:1.15rem;&:hover{color:#009ddc;transition:0.2s ease-in-out;}"]);
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_scroll__WEBPACK_IMPORTED_MODULE_0__["Link"]).withConfig({
  displayName: "styles__NavItem",
  componentId: "sc-1phjkzw-6"
})(["&.active{border-bottom:3px solid #009ddc;}"]);

/***/ }),

/***/ "./components/scroll/index.js":
/*!************************************!*\
  !*** ./components/scroll/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/scroll/styles.js");

var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\scroll\\index.js";





const Scroll = () => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleScroll = () => {
    if (window.pageYOffset > 350) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_3__["animateScroll"].scrollToTop();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["ScrollWrapper"], {
    onClick: scrollToTop,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowDropupCircle"], {
      style: {
        display: show ? 'inline' : 'none'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Scroll);

/***/ }),

/***/ "./components/scroll/styles.js":
/*!*************************************!*\
  !*** ./components/scroll/styles.js ***!
  \*************************************/
/*! exports provided: ScrollWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollWrapper", function() { return ScrollWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ScrollWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__ScrollWrapper",
  componentId: "xhzlfz-0"
})(["position:fixed;right:10px;bottom:20px;font-size:3.5rem;z-index:1;cursor:pointer;color:#b38867;transition:transform 250ms;@media (hover:hover){&:hover{color:#ddbc95;transition:0.2s ease-in-out;transform:translateY(-5px);}}"]);

/***/ }),

/***/ "./components/sidebar/SidebarItem.js":
/*!*******************************************!*\
  !*** ./components/sidebar/SidebarItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/sidebar/styles.js");

var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\sidebar\\SidebarItem.js";




const SidebarItem = ({
  path,
  title,
  isOpen,
  handleToggle
}) => {
  const handleSetActive = () => {
    if (isOpen) {
      handleToggle();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SidebarItemWrapper"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      activeClass: "active",
      onSetActive: handleSetActive,
      to: path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarItem);

/***/ }),

/***/ "./components/sidebar/index.js":
/*!*************************************!*\
  !*** ./components/sidebar/index.js ***!
  \*************************************/
/*! exports provided: items, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarItem */ "./components/sidebar/SidebarItem.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/sidebar/styles.js");


var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\sidebar\\index.js";



const items = [{
  id: 1,
  path: 'home',
  title: 'Home'
}, {
  id: 2,
  path: 'about',
  title: 'About'
}, {
  id: 3,
  path: 'skills',
  title: 'Skills'
}, {
  id: 4,
  path: 'contact',
  title: 'Contact'
}];

const Sidebar = ({
  isOpen,
  handleToggle
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SidebarContainer"], {
      isOpen: isOpen,
      onClick: handleToggle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        onClick: handleToggle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SidebarWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SidebarMenu"], {
          children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SidebarItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            path: item.path,
            title: item.title,
            isOpen: isOpen,
            handleToggle: handleToggle
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/sidebar/styles.js":
/*!**************************************!*\
  !*** ./components/sidebar/styles.js ***!
  \**************************************/
/*! exports provided: SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarItemWrapper, SideBtnWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainer", function() { return SidebarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarWrapper", function() { return SidebarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenu", function() { return SidebarMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItemWrapper", function() { return SidebarItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBtnWrapper", function() { return SideBtnWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside.withConfig({
  displayName: "styles__SidebarContainer",
  componentId: "sc-3gzoyr-0"
})(["position:fixed;z-index:999;width:100%;height:100%;background:#0d0d0d;display:grid;align-items:center;top:0;left:0;transition:all 0.5s ease-in-out;opacity:", ";top:", ";"], ({
  isOpen
}) => isOpen ? '100%' : '0', ({
  isOpen
}) => isOpen ? '0' : '-100%');
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTimes"]).withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-3gzoyr-1"
})(["color:#fff;&:hover{color:#009ddc;transition:0.2s ease-in-out;}"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Icon",
  componentId: "sc-3gzoyr-2"
})(["position:absolute;top:1.2rem;right:1.5rem;background:transparent;font-size:2rem;cursor:pointer;outline:none;"]);
const SidebarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SidebarWrapper",
  componentId: "sc-3gzoyr-3"
})(["color:#fff;"]);
const SidebarMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "styles__SidebarMenu",
  componentId: "sc-3gzoyr-4"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:repeat(6,80px);text-align:center;@media screen and (max-width:480px){grid-template-rows:repeat(6,60px);}"]);
const SidebarItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "styles__SidebarItemWrapper",
  componentId: "sc-3gzoyr-5"
})(["color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.5rem;text-decoration:none;list-style:none;transition:0.2s ease-in-out;cursor:pointer;&:hover{color:#009ddc;transition:0.2s ease-in-out;}"]);
const SideBtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SideBtnWrapper",
  componentId: "sc-3gzoyr-6"
})(["display:flex;justify-content:center;"]);

/***/ }),

/***/ "./components/social-media/index.js":
/*!******************************************!*\
  !*** ./components/social-media/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/social-media/styles.js");


var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\components\\social-media\\index.js";




const SocialMedia = ({
  style
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SocialContainer"], {
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SocialWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["SocialIcons"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["IconLink"], {
            href: "//github.com/GaboMendez",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["IconLink"], {
            href: "//linkedin.com/in/gabrielmndz",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["IconLink"], {
            href: "//facebook.com/GaboMndzz",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebook"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_3__["IconLink"], {
            href: "//twitter.com/Gabo_Mendz",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./components/social-media/styles.js":
/*!*******************************************!*\
  !*** ./components/social-media/styles.js ***!
  \*******************************************/
/*! exports provided: SocialContainer, SocialWrapper, SocialIcons, IconLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialContainer", function() { return SocialContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialWrapper", function() { return SocialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcons", function() { return SocialIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLink", function() { return IconLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "styles__SocialContainer",
  componentId: "sc-1uork57-0"
})(["max-width:1000px;width:100%;"]);
const SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SocialWrapper",
  componentId: "sc-1uork57-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1100px;margin:20px auto 0 auto;"]);
const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SocialIcons",
  componentId: "sc-1uork57-2"
})(["display:flex;justify-content:space-between;align-items:center;width:240px;"]);
const IconLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "styles__IconLink",
  componentId: "sc-1uork57-3"
})(["color:#fff;font-size:24px;@media (hover:hover){&:hover{color:#009ddc;transition:0.2s ease-in-out;}}"]);

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar/index.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/scroll */ "./components/scroll/index.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar/index.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Gabriel\\Desktop\\gabo-dev\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MyApp({
  Component,
  pageProps
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "gabo-dev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/command.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Averia+Sans+Libre&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital,wght@0,400;0,700;1,700&family=Hammersmith+One&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isOpen: isOpen,
      handleToggle: handleToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      handleToggle: handleToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_scroll__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/logo.jpg":
/*!*************************!*\
  !*** ./public/logo.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-d01f63bd30781a6bd4a73c0d5d48159f.jpg";

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbmF2YmFyL05hdmJhckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2Nyb2xsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2Nyb2xsL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb2NpYWwtbWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb2NpYWwtbWVkaWEvc3R5bGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xvZ28uanBnIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiRm9vdGVyQ29udGFpbmVyIiwic3R5bGVkIiwiZm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsImRpdiIsIkxpbmtzQ29udGFpbmVyIiwiTGlua3NXcmFwcGVyIiwiTGlua0l0ZW1zIiwiTGlua1RpdGxlIiwiaDEiLCJXZWJzaXRlUmlnaHRzIiwic21hbGwiLCJOYXZiYXJJdGVtIiwicGF0aCIsInRpdGxlIiwiaXRlbXMiLCJpZCIsIk5hdmJhciIsImhhbmRsZVRvZ2dsZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsIiwicmVxdWlyZSIsIm1hcCIsIml0ZW0iLCJOYXYiLCJuYXYiLCJOYXZiYXJDb250YWluZXIiLCJOYXZMb2dvIiwiTW9iaWxlSWNvbiIsIk5hdmJhck1lbnUiLCJ1bCIsIk5hdkl0ZW1XcmFwcGVyIiwibGkiLCJOYXZJdGVtIiwiTGluayIsIlNjcm9sbCIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzcGxheSIsIlNjcm9sbFdyYXBwZXIiLCJTaWRlYmFySXRlbSIsImlzT3BlbiIsImhhbmRsZVNldEFjdGl2ZSIsIlNpZGViYXIiLCJTaWRlYmFyQ29udGFpbmVyIiwiYXNpZGUiLCJDbG9zZUljb24iLCJGYVRpbWVzIiwiSWNvbiIsIlNpZGViYXJXcmFwcGVyIiwiU2lkZWJhck1lbnUiLCJTaWRlYmFySXRlbVdyYXBwZXIiLCJTaWRlQnRuV3JhcHBlciIsIlNvY2lhbE1lZGlhIiwic3R5bGUiLCJTb2NpYWxDb250YWluZXIiLCJzZWN0aW9uIiwiU29jaWFsV3JhcHBlciIsIlNvY2lhbEljb25zIiwiSWNvbkxpbmsiLCJhIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXRJc09w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dWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge1xyXG4gIEZvb3RlckNvbnRhaW5lcixcclxuICBGb290ZXJXcmFwcGVyLFxyXG4gIFdlYnNpdGVSaWdodHMsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSAnLi4vc29jaWFsLW1lZGlhJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlckNvbnRhaW5lcj5cclxuICAgICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgICAgPFNvY2lhbE1lZGlhIC8+XHJcbiAgICAgICAgPFdlYnNpdGVSaWdodHM+XHJcbiAgICAgICAgICBDT1BZUklHSFQgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQUxMIFJJR0hUUyBSRVNFUlZFRC5cclxuICAgICAgICA8L1dlYnNpdGVSaWdodHM+XHJcbiAgICAgIDwvRm9vdGVyV3JhcHBlcj5cclxuICAgIDwvRm9vdGVyQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTUyMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxOHB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua3NDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua3NXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0l0ZW1zID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNmZmY7XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBXZWJzaXRlUmlnaHRzID0gc3R5bGVkLnNtYWxsYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBOYXZJdGVtLCBOYXZJdGVtV3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IE5hdmJhckl0ZW0gPSAoeyBwYXRoLCB0aXRsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZJdGVtV3JhcHBlcj5cclxuICAgICAgPE5hdkl0ZW1cclxuICAgICAgICBhY3RpdmVDbGFzcz0nYWN0aXZlJ1xyXG4gICAgICAgIHRvPXtwYXRofVxyXG4gICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgb2Zmc2V0PXstNjB9XHJcbiAgICAgICAgZHVyYXRpb249ezgwMH1cclxuICAgICAgPlxyXG4gICAgICAgIHshIXRpdGxlICYmIHRpdGxlfVxyXG4gICAgICA8L05hdkl0ZW0+XHJcbiAgICA8L05hdkl0ZW1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJJdGVtO1xyXG4iLCJpbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IEZhQmFycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IE5hdmJhckl0ZW0gZnJvbSAnLi9OYXZiYXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBNb2JpbGVJY29uLFxyXG4gIE5hdixcclxuICBOYXZiYXJDb250YWluZXIsXHJcbiAgTmF2YmFyTWVudSxcclxuICBOYXZMb2dvLFxyXG59IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtcyA9IFtcclxuICB7IGlkOiAxLCBwYXRoOiAnaG9tZScsIHRpdGxlOiAnSG9tZScgfSxcclxuICB7IGlkOiAyLCBwYXRoOiAnYWJvdXQnLCB0aXRsZTogJ0Fib3V0JyB9LFxyXG4gIHsgaWQ6IDMsIHBhdGg6ICdza2lsbHMnLCB0aXRsZTogJ1NraWxscycgfSxcclxuICB7IGlkOiA0LCBwYXRoOiAnY29udGFjdCcsIHRpdGxlOiAnQ29udGFjdCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGhhbmRsZVRvZ2dsZSB9KSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdj5cclxuICAgICAgICA8TmF2YmFyQ29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdkxvZ28gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZSgnLi4vLi4vcHVibGljL2xvZ28uanBnJyl9IHdpZHRoPXs4MH0gLz5cclxuICAgICAgICAgIDwvTmF2TG9nbz5cclxuICAgICAgICAgIDxNb2JpbGVJY29uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgICAgIDxGYUJhcnMgLz5cclxuICAgICAgICAgIDwvTW9iaWxlSWNvbj5cclxuICAgICAgICAgIDxOYXZiYXJNZW51PlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE5hdmJhckl0ZW0ga2V5PXtpdGVtLmlkfSBwYXRoPXtpdGVtLnBhdGh9IHRpdGxlPXtpdGVtLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvTmF2YmFyTWVudT5cclxuICAgICAgICA8L05hdmJhckNvbnRhaW5lcj5cclxuICAgICAgPC9OYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW4tdG9wOiAtODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgdHJhbnNpdGlvbjogMC44cyBhbGwgZWFzZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2TG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA5ZGRjO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9iaWxlSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwOWRkYztcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDYwJSk7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyTWVudSA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW1XcmFwcGVyID0gc3R5bGVkLmxpYFxyXG4gIGhlaWdodDogODBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA5ZGRjO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2SXRlbSA9IHN0eWxlZChMaW5rKWBcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwOWRkYztcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93RHJvcHVwQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IFNjcm9sbFdyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5jb25zdCBTY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzUwKSB7XHJcbiAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTY3JvbGxXcmFwcGVyIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cclxuICAgICAgPElvSW9zQXJyb3dEcm9wdXBDaXJjbGUgc3R5bGU9e3sgZGlzcGxheTogc2hvdyA/ICdpbmxpbmUnIDogJ25vbmUnIH19IC8+XHJcbiAgICA8L1Njcm9sbFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvL2NvbG9yOiAjZjI5OTRhOyAvLyBnb29kIG9yYW5nZVxyXG4gIGNvbG9yOiAjYjM4ODY3O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcclxuXHJcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAvL2NvbG9yOiAjMEVEMkY3OyAvLyBnb29kIG9yYW5nZVxyXG4gICAgICBjb2xvcjogI2RkYmM5NTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IFNpZGViYXJJdGVtV3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmNvbnN0IFNpZGViYXJJdGVtID0gKHsgcGF0aCwgdGl0bGUsIGlzT3BlbiwgaGFuZGxlVG9nZ2xlIH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVTZXRBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgIGhhbmRsZVRvZ2dsZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZWJhckl0ZW1XcmFwcGVyPlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzPSdhY3RpdmUnXHJcbiAgICAgICAgb25TZXRBY3RpdmU9e2hhbmRsZVNldEFjdGl2ZX1cclxuICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgID5cclxuICAgICAgICB7dGl0bGV9XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvU2lkZWJhckl0ZW1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFySXRlbTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJJdGVtIGZyb20gJy4vU2lkZWJhckl0ZW0nO1xyXG5pbXBvcnQge1xyXG4gIENsb3NlSWNvbixcclxuICBJY29uLFxyXG4gIFNpZGViYXJDb250YWluZXIsXHJcbiAgU2lkZWJhck1lbnUsXHJcbiAgU2lkZWJhcldyYXBwZXIsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1zID0gW1xyXG4gIHsgaWQ6IDEsIHBhdGg6ICdob21lJywgdGl0bGU6ICdIb21lJyB9LFxyXG4gIHsgaWQ6IDIsIHBhdGg6ICdhYm91dCcsIHRpdGxlOiAnQWJvdXQnIH0sXHJcbiAgeyBpZDogMywgcGF0aDogJ3NraWxscycsIHRpdGxlOiAnU2tpbGxzJyB9LFxyXG4gIHsgaWQ6IDQsIHBhdGg6ICdjb250YWN0JywgdGl0bGU6ICdDb250YWN0JyB9LFxyXG5dO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IGlzT3BlbiwgaGFuZGxlVG9nZ2xlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNpZGViYXJDb250YWluZXIgaXNPcGVuPXtpc09wZW59IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XHJcbiAgICAgICAgPEljb24gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgPFNpZGViYXJXcmFwcGVyPlxyXG4gICAgICAgICAgPFNpZGViYXJNZW51PlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNpZGViYXJJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NpZGViYXJNZW51PlxyXG4gICAgICAgIDwvU2lkZWJhcldyYXBwZXI+XHJcbiAgICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFUaW1lcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMwZDBkMGQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIG9wYWNpdHk6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMTAwJScgOiAnMCcpfTtcclxuICB0b3A6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMCcgOiAnLTEwMCUnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xvc2VJY29uID0gc3R5bGVkKEZhVGltZXMpYFxyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA5ZGRjO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMS4ycmVtO1xyXG4gIHJpZ2h0OiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogI2ZmZjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFyTWVudSA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDgwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDYwcHgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlYmFySXRlbVdyYXBwZXIgPSBzdHlsZWQubGlgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA5ZGRjO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZUJ0bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2ssIEZhR2l0aHViLCBGYUxpbmtlZGluLCBGYVR3aXR0ZXIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7XHJcbiAgSWNvbkxpbmssXHJcbiAgU29jaWFsQ29udGFpbmVyLFxyXG4gIFNvY2lhbEljb25zLFxyXG4gIFNvY2lhbFdyYXBwZXIsXHJcbn0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuY29uc3QgU29jaWFsTWVkaWEgPSAoeyBzdHlsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTb2NpYWxDb250YWluZXIgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8U29jaWFsV3JhcHBlcj5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgPEljb25MaW5rIGhyZWY9Jy8vZ2l0aHViLmNvbS9HYWJvTWVuZGV6JyB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgPEZhR2l0aHViIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkxpbms+XHJcbiAgICAgICAgICAgIDxJY29uTGluayBocmVmPScvL2xpbmtlZGluLmNvbS9pbi9nYWJyaWVsbW5keicgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgIDxGYUxpbmtlZGluIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkxpbms+XHJcbiAgICAgICAgICAgIDxJY29uTGluayBocmVmPScvL2ZhY2Vib29rLmNvbS9HYWJvTW5kenonIHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICA8RmFGYWNlYm9vayAvPlxyXG4gICAgICAgICAgICA8L0ljb25MaW5rPlxyXG4gICAgICAgICAgICA8SWNvbkxpbmsgaHJlZj0nLy90d2l0dGVyLmNvbS9HYWJvX01lbmR6JyB0YXJnZXQ9J19ibGFuayc+XHJcbiAgICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxyXG4gICAgICAgICAgICA8L0ljb25MaW5rPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICA8L1NvY2lhbFdyYXBwZXI+XHJcbiAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbE1lZGlhO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEljb25MaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMDA5ZGRjO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi9jb21wb25lbnRzL3Njcm9sbCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL3NpZGViYXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Z2Fiby1kZXY8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9jb21tYW5kLnBuZycgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdwcmVjb25uZWN0JyBocmVmPSdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QXZlcmlhK1NhbnMrTGlicmUmZGlzcGxheT1zd2FwJ1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUF2ZXJpYStTYW5zK0xpYnJlOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZmYW1pbHk9SGFtbWVyc21pdGgrT25lJmRpc3BsYXk9c3dhcCdcbiAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJ1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTaWRlYmFyIGlzT3Blbj17aXNPcGVufSBoYW5kbGVUb2dnbGU9e2hhbmRsZVRvZ2dsZX0gLz5cbiAgICAgIDxOYXZiYXIgaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9IC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8U2Nyb2xsIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tZDAxZjYzYmQzMDc4MWE2YmQ0YTczYzBkNWQ0ODE1OWYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==