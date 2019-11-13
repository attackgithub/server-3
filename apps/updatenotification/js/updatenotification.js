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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./apps/updatenotification/src/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue":
/*!***********************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&");
/* harmony import */ var _UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=script&lang=js& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&");
/* harmony import */ var _UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=style&index=1&lang=scss& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82102c34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/updatenotification/src/components/UpdateNotification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./apps/updatenotification/src/init.js":
/*!*********************************************!*\
  !*** ./apps/updatenotification/src/init.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_UpdateNotification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UpdateNotification */ "./apps/updatenotification/src/components/UpdateNotification.vue");
/**
 * @copyright Copyright (c) 2018 Joas Schilling <coding@schilljs.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin({
  methods: {
    t: function t(app, text, vars, count, options) {
      return OC.L10N.translate(app, text, vars, count, options);
    },
    n: function n(app, textSingular, textPlural, count, vars, options) {
      return OC.L10N.translatePlural(app, textSingular, textPlural, count, vars, options);
    }
  }
}); // eslint-disable-next-line no-new

new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#updatenotification',
  render: function render(h) {
    return h(_components_UpdateNotification__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextcloud-vue */ "./node_modules/nextcloud-vue/dist/ncvuecomponents.js");
/* harmony import */ var nextcloud_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);
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
//
//



v_tooltip__WEBPACK_IMPORTED_MODULE_1__["VTooltip"].options.defaultHtml = false;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UpdateNotification',
  components: {
    Multiselect: nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__["Multiselect"],
    PopoverMenu: nextcloud_vue__WEBPACK_IMPORTED_MODULE_0__["PopoverMenu"]
  },
  directives: {
    ClickOutside: vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a,
    tooltip: v_tooltip__WEBPACK_IMPORTED_MODULE_1__["VTooltip"]
  },
  data: function data() {
    return {
      newVersionString: '',
      lastCheckedDate: '',
      isUpdateChecked: false,
      updaterEnabled: true,
      versionIsEol: false,
      downloadLink: '',
      isNewVersionAvailable: false,
      hasValidSubscription: false,
      updateServerURL: '',
      changelogURL: '',
      whatsNewData: [],
      currentChannel: '',
      channels: [],
      notifyGroups: '',
      availableGroups: [],
      isDefaultUpdateServerURL: true,
      enableChangeWatcher: false,
      availableAppUpdates: [],
      missingAppUpdates: [],
      appStoreFailed: false,
      appStoreDisabled: false,
      isListFetched: false,
      hideMissingUpdates: false,
      hideAvailableUpdates: true,
      openedWhatsNew: false,
      openedUpdateChannelMenu: false
    };
  },
  _$el: null,
  _$notifyGroups: null,
  computed: {
    newVersionAvailableString: function newVersionAvailableString() {
      return t('updatenotification', 'A new version is available: <strong>{newVersionString}</strong>', {
        newVersionString: this.newVersionString
      });
    },
    lastCheckedOnString: function lastCheckedOnString() {
      return t('updatenotification', 'Checked on {lastCheckedDate}', {
        lastCheckedDate: this.lastCheckedDate
      });
    },
    statusText: function statusText() {
      if (!this.isListFetched) {
        return t('updatenotification', 'Checking apps for compatible updates');
      }

      if (this.appStoreDisabled) {
        return t('updatenotification', 'Please make sure your config.php does not set <samp>appstoreenabled</samp> to false.');
      }

      if (this.appStoreFailed) {
        return t('updatenotification', 'Could not connect to the appstore or the appstore returned no updates at all. Search manually for updates or make sure your server has access to the internet and can connect to the appstore.');
      }

      return this.missingAppUpdates.length === 0 ? t('updatenotification', '<strong>All</strong> apps have an update for this version available', this) : n('updatenotification', '<strong>%n</strong> app has no update for this version available', '<strong>%n</strong> apps have no update for this version available', this.missingAppUpdates.length);
    },
    whatsNew: function whatsNew() {
      if (this.whatsNewData.length === 0) {
        return null;
      }

      var whatsNew = [];

      for (var i in this.whatsNewData) {
        whatsNew[i] = {
          icon: 'icon-checkmark',
          longtext: this.whatsNewData[i]
        };
      }

      if (this.changelogURL) {
        whatsNew.push({
          href: this.changelogURL,
          text: t('updatenotification', 'View changelog'),
          icon: 'icon-link',
          target: '_blank',
          action: ''
        });
      }

      return whatsNew;
    },
    channelList: function channelList() {
      var channelList = [];
      channelList.push({
        text: t('updatenotification', 'Enterprise'),
        longtext: t('updatenotification', 'For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package.'),
        icon: 'icon-star',
        active: this.currentChannel === 'enterprise',
        disabled: !this.hasValidSubscription,
        action: this.changeReleaseChannelToEnterprise
      });
      channelList.push({
        text: t('updatenotification', 'Stable'),
        longtext: t('updatenotification', 'The most recent stable version. It is suited for regular use and will always update to the latest major version.'),
        icon: 'icon-checkmark',
        active: this.currentChannel === 'stable',
        action: this.changeReleaseChannelToStable
      });
      channelList.push({
        text: t('updatenotification', 'Beta'),
        longtext: t('updatenotification', 'A pre-release version only for testing new features, not for production environments.'),
        icon: 'icon-category-customization',
        active: this.currentChannel === 'beta',
        action: this.changeReleaseChannelToBeta
      });

      if (this.isNonDefaultChannel) {
        channelList.push({
          text: this.currentChannel,
          icon: 'icon-rename',
          active: true
        });
      }

      return channelList;
    },
    isNonDefaultChannel: function isNonDefaultChannel() {
      return this.currentChannel !== 'enterprise' && this.currentChannel !== 'stable' && this.currentChannel !== 'beta';
    },
    localizedChannelName: function localizedChannelName() {
      switch (this.currentChannel) {
        case 'enterprise':
          return t('updatenotification', 'Enterprise');

        case 'stable':
          return t('updatenotification', 'Stable');

        case 'beta':
          return t('updatenotification', 'Beta');

        default:
          return this.currentChannel;
      }
    }
  },
  watch: {
    notifyGroups: function notifyGroups(selectedOptions) {
      if (!this.enableChangeWatcher) {
        return;
      }

      var selectedGroups = [];

      _.each(selectedOptions, function (group) {
        selectedGroups.push(group.value);
      });

      OCP.AppConfig.setValue('updatenotification', 'notify_groups', JSON.stringify(selectedGroups));
    },
    isNewVersionAvailable: function isNewVersionAvailable() {
      if (!this.isNewVersionAvailable) {
        return;
      }

      $.ajax({
        url: OC.linkToOCS('apps/updatenotification/api/v1/applist', 2) + this.newVersion,
        type: 'GET',
        beforeSend: function beforeSend(request) {
          request.setRequestHeader('Accept', 'application/json');
        },
        success: function (response) {
          this.availableAppUpdates = response.ocs.data.available;
          this.missingAppUpdates = response.ocs.data.missing;
          this.isListFetched = true;
          this.appStoreFailed = false;
        }.bind(this),
        error: function (xhr) {
          this.availableAppUpdates = [];
          this.missingAppUpdates = [];
          this.appStoreDisabled = xhr.responseJSON.ocs.data.appstore_disabled;
          this.isListFetched = true;
          this.appStoreFailed = true;
        }.bind(this)
      });
    }
  },
  beforeMount: function beforeMount() {
    // Parse server data
    var data = JSON.parse($('#updatenotification').attr('data-json'));
    this.newVersion = data.newVersion;
    this.newVersionString = data.newVersionString;
    this.lastCheckedDate = data.lastChecked;
    this.isUpdateChecked = data.isUpdateChecked;
    this.updaterEnabled = data.updaterEnabled;
    this.downloadLink = data.downloadLink;
    this.isNewVersionAvailable = data.isNewVersionAvailable;
    this.updateServerURL = data.updateServerURL;
    this.currentChannel = data.currentChannel;
    this.channels = data.channels;
    this.notifyGroups = data.notifyGroups;
    this.isDefaultUpdateServerURL = data.isDefaultUpdateServerURL;
    this.versionIsEol = data.versionIsEol;
    this.hasValidSubscription = data.hasValidSubscription;

    if (data.changes && data.changes.changelogURL) {
      this.changelogURL = data.changes.changelogURL;
    }

    if (data.changes && data.changes.whatsNew) {
      if (data.changes.whatsNew.admin) {
        this.whatsNewData = this.whatsNewData.concat(data.changes.whatsNew.admin);
      }

      this.whatsNewData = this.whatsNewData.concat(data.changes.whatsNew.regular);
    }
  },
  mounted: function mounted() {
    this._$el = $(this.$el);
    this._$notifyGroups = this._$el.find('#oca_updatenotification_groups_list');

    this._$notifyGroups.on('change', function () {
      this.$emit('input');
    }.bind(this));

    $.ajax({
      url: OC.linkToOCS('cloud', 2) + '/groups',
      dataType: 'json',
      success: function (data) {
        var results = [];
        $.each(data.ocs.data.groups, function (i, group) {
          results.push({
            value: group,
            label: group
          });
        });
        this.availableGroups = results;
        this.enableChangeWatcher = true;
      }.bind(this)
    });
  },
  methods: {
    /**
    	 * Creates a new authentication token and loads the updater URL
    	 */
    clickUpdaterButton: function clickUpdaterButton() {
      $.ajax({
        url: OC.generateUrl('/apps/updatenotification/credentials')
      }).success(function (token) {
        // create a form to send a proper post request to the updater
        var form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', OC.getRootPath() + '/updater/');
        var hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', 'updater-secret-input');
        hiddenField.setAttribute('value', token);
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        form.submit();
      });
    },
    changeReleaseChannelToEnterprise: function changeReleaseChannelToEnterprise() {
      this.changeReleaseChannel('enterprise');
    },
    changeReleaseChannelToStable: function changeReleaseChannelToStable() {
      this.changeReleaseChannel('stable');
    },
    changeReleaseChannelToBeta: function changeReleaseChannelToBeta() {
      this.changeReleaseChannel('beta');
    },
    changeReleaseChannel: function changeReleaseChannel(channel) {
      this.currentChannel = channel;
      $.ajax({
        url: OC.generateUrl('/apps/updatenotification/channel'),
        type: 'POST',
        data: {
          'channel': this.currentChannel
        },
        success: function success(data) {
          OC.msg.finishedAction('#channel_save_msg', data);
        }
      });
      this.openedUpdateChannelMenu = false;
    },
    toggleUpdateChannelMenu: function toggleUpdateChannelMenu() {
      this.openedUpdateChannelMenu = !this.openedUpdateChannelMenu;
    },
    toggleHideMissingUpdates: function toggleHideMissingUpdates() {
      this.hideMissingUpdates = !this.hideMissingUpdates;
    },
    toggleHideAvailableUpdates: function toggleHideAvailableUpdates() {
      this.hideAvailableUpdates = !this.hideAvailableUpdates;
    },
    toggleMenu: function toggleMenu() {
      this.openedWhatsNew = !this.openedWhatsNew;
    },
    hideMenu: function hideMenu() {
      this.openedWhatsNew = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#updatenotification[data-v-82102c34] {\n  margin-top: -25px;\n  margin-bottom: 200px;\n}\n#updatenotification div.update[data-v-82102c34],\n  #updatenotification p[data-v-82102c34]:not(.inlineblock) {\n    margin-bottom: 25px;\n}\n#updatenotification h2.inlineblock[data-v-82102c34] {\n    margin-top: 25px;\n}\n#updatenotification h3[data-v-82102c34] {\n    cursor: pointer;\n}\n#updatenotification h3 .icon[data-v-82102c34] {\n      cursor: pointer;\n}\n#updatenotification h3[data-v-82102c34]:first-of-type {\n      margin-top: 0;\n}\n#updatenotification h3.update-channel-selector[data-v-82102c34] {\n      display: inline-block;\n      cursor: inherit;\n}\n#updatenotification .icon[data-v-82102c34] {\n    display: inline-block;\n    margin-bottom: -3px;\n}\n#updatenotification .icon-triangle-s[data-v-82102c34], #updatenotification .icon-triangle-n[data-v-82102c34] {\n    opacity: 0.5;\n}\n#updatenotification .whatsNew[data-v-82102c34] {\n    display: inline-block;\n}\n#updatenotification .toggleWhatsNew[data-v-82102c34] {\n    position: relative;\n}\n#updatenotification .popovermenu[data-v-82102c34] {\n    margin-top: 5px;\n    width: 300px;\n}\n#updatenotification .popovermenu p[data-v-82102c34] {\n      margin-bottom: 0;\n      width: 100%;\n}\n#updatenotification .applist[data-v-82102c34] {\n    margin-bottom: 25px;\n}\n#updatenotification .update-menu[data-v-82102c34] {\n    position: relative;\n    cursor: pointer;\n    margin-left: 3px;\n    display: inline-block;\n}\n#updatenotification .update-menu .icon-update-menu[data-v-82102c34] {\n      cursor: inherit;\n}\n#updatenotification .update-menu .icon-update-menu .icon-triangle-s[data-v-82102c34] {\n        display: inline-block;\n        vertical-align: middle;\n        cursor: inherit;\n        opacity: 1;\n}\n#updatenotification .update-menu .popovermenu[data-v-82102c34] {\n      display: none;\n      top: 28px;\n}\n#updatenotification .update-menu .popovermenu.show-menu[data-v-82102c34] {\n        display: block;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* override needed to make menu wider */\n#updatenotification .popovermenu {\n  margin-top: 5px;\n  width: 300px;\n}\n#updatenotification .popovermenu p {\n    margin-top: 5px;\n    width: 100%;\n}\n\n/* override needed to replace yellow hover state with a dark one */\n#updatenotification .update-menu .icon-star:hover,\n#updatenotification .update-menu .icon-star:focus {\n  background-image: var(--icon-star-000);\n}\n#updatenotification .topMargin {\n  margin-top: 15px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/nextcloud-vue/dist/ncvuecomponents.js":
/*!************************************************************!*\
  !*** ./node_modules/nextcloud-vue/dist/ncvuecomponents.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")):undefined}(window,function(e){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=189)}([function(t,e,n){"use strict";function i(t,e,n,i,a,o,r,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=(r=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=i.sources.map(function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")});return[n].concat(o).concat([a]).join("\n")}var r,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var r=0;r<t.length;r++){var s=t[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],r=o[0],s={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(s):n.push(i[r]={id:r,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,a){l=n,d=a||{};var r=i(t,e);return A(r),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a];(c=o[s.id]).refs--,n.push(c)}e?A(r=i(t,e)):r=[];for(a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}}function A(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(m(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(f){var a=c++;i=s||(s=v()),e=y.bind(null,i,a,!1),n=y.bind(null,i,a,!0)}else i=v(),e=function(t,e){var n=e.css,i=e.media,a=e.sourceMap;i&&t.setAttribute("media",i);d.ssrId&&t.setAttribute(p,e.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function y(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}},function(t,n){t.exports=e},function(t,e,n){"use strict";var i=n(70),a=n(105),o=Object.prototype.toString;function r(t){return"[object Array]"===o.call(t)}function s(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===o.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}t.exports={isArray:r,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:a,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:c,isStream:function(t){return s(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function t(){var e={};function n(n,i){"object"==typeof e[i]&&"object"==typeof n?e[i]=t(e[i],n):e[i]=n}for(var i=0,a=arguments.length;i<a;i++)l(arguments[i],n);return e},deepMerge:function t(){var e={};function n(n,i){"object"==typeof e[i]&&"object"==typeof n?e[i]=t(e[i],n):e[i]="object"==typeof n?t({},n):n}for(var i=0,a=arguments.length;i<a;i++)l(arguments[i],n);return e},extend:function(t,e,n){return l(e,function(e,a){t[a]=n&&"function"==typeof e?i(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,n){"use strict";var i=n(3),a=n.n(i);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a={before:function(){this.$slots.default&&""!==this.text.trim()||(a.a.util.warn("".concat(this.$options.name," cannot be empty and requires a meaningful text content"),this),this.$destroy(),this.$el.remove())},beforeUpdate:function(){this.text=this.getText()},data:function(){return{text:this.getText()}},computed:{isLongText:function(){return this.text&&this.text.trim().length>20}},methods:{getText:function(){return this.$slots.default?this.$slots.default[0].text.trim():""}}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return In});var i=n(17),a=n(21);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}var l=function(){};function u(t){return"string"==typeof t&&(t=t.split(" ")),t}function d(t,e){var n,i=u(e);n=t.className instanceof l?u(t.className.baseVal):u(t.className),i.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),t instanceof SVGElement?t.setAttribute("class",n.join(" ")):t.className=n.join(" ")}function p(t,e){var n,i=u(e);n=t.className instanceof l?u(t.className.baseVal):u(t.className),i.forEach(function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}),t instanceof SVGElement?t.setAttribute("class",n.join(" ")):t.className=n.join(" ")}"undefined"!=typeof window&&(l=window.SVGAnimatedString);var f=!1;if("undefined"!=typeof window){f=!1;try{var h=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,h)}catch(t){}}var A={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0},v=[],m=function(){function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_events",[]),s(this,"_setTooltipNodeEvent",function(t,e,n,a){var o=t.relatedreference||t.toElement||t.relatedTarget;return!!i._tooltipNode.contains(o)&&(i._tooltipNode.addEventListener(t.type,function n(o){var r=o.relatedreference||o.toElement||o.relatedTarget;i._tooltipNode.removeEventListener(t.type,n),e.contains(r)||i._scheduleHide(e,a.delay,a,o)}),!0)}),n=c({},A,n),e.jquery&&(e=e[0]),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.reference=e,this.options=n,this._isOpen=!1,this._init()}var e,n,a;return e=t,(n=[{key:"show",value:function(){this._show(this.reference,this.options)}},{key:"hide",value:function(){this._hide()}},{key:"dispose",value:function(){this._dispose()}},{key:"toggle",value:function(){return this._isOpen?this.hide():this.show()}},{key:"setClasses",value:function(t){this._classes=t}},{key:"setContent",value:function(t){this.options.title=t,this._tooltipNode&&this._setContent(t,this.options)}},{key:"setOptions",value:function(t){var e=!1,n=t&&t.classes||C.options.defaultClass;this._classes!==n&&(this.setClasses(n),e=!0),t=x(t);var i=!1,a=!1;for(var o in this.options.offset===t.offset&&this.options.placement===t.placement||(i=!0),(this.options.template!==t.template||this.options.trigger!==t.trigger||this.options.container!==t.container||e)&&(a=!0),t)this.options[o]=t[o];if(this._tooltipNode)if(a){var r=this._isOpen;this.dispose(),this._init(),r&&this.show()}else i&&this.popperInstance.update()}},{key:"_init",value:function(){var t="string"==typeof this.options.trigger?this.options.trigger.split(" "):[];this._isDisposed=!1,this._enableDocumentTouch=-1===t.indexOf("manual"),t=t.filter(function(t){return-1!==["click","hover","focus"].indexOf(t)}),this._setEventListeners(this.reference,t,this.options),this.$_originalTitle=this.reference.getAttribute("title"),this.reference.removeAttribute("title"),this.reference.setAttribute("data-original-title",this.$_originalTitle)}},{key:"_create",value:function(t,e){var n=window.document.createElement("div");n.innerHTML=e.trim();var i=n.childNodes[0];return i.id="tooltip_".concat(Math.random().toString(36).substr(2,10)),i.setAttribute("aria-hidden","true"),this.options.autoHide&&-1!==this.options.trigger.indexOf("hover")&&(i.addEventListener("mouseenter",this.hide),i.addEventListener("click",this.hide)),i}},{key:"_setContent",value:function(t,e){var n=this;this.asyncContent=!1,this._applyContent(t,e).then(function(){n.popperInstance.update()})}},{key:"_applyContent",value:function(t,e){var n=this;return new Promise(function(i,a){var o=e.html,r=n._tooltipNode;if(r){var s=r.querySelector(n.options.innerSelector);if(1===t.nodeType){if(o){for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(t)}}else{if("function"==typeof t){var c=t();return void(c&&"function"==typeof c.then?(n.asyncContent=!0,e.loadingClass&&d(r,e.loadingClass),e.loadingContent&&n._applyContent(e.loadingContent,e),c.then(function(t){return e.loadingClass&&p(r,e.loadingClass),n._applyContent(t,e)}).then(i).catch(a)):n._applyContent(c,e).then(i).catch(a))}o?s.innerHTML=t:s.innerText=t}i()}})}},{key:"_show",value:function(t,e){if(e&&"string"==typeof e.container&&!document.querySelector(e.container))return;clearTimeout(this._disposeTimer),delete(e=Object.assign({},e)).offset;var n=!0;this._tooltipNode&&(d(this._tooltipNode,this._classes),n=!1);var i=this._ensureShown(t,e);return n&&this._tooltipNode&&d(this._tooltipNode,this._classes),d(t,["v-tooltip-open"]),i}},{key:"_ensureShown",value:function(t,e){var n=this;if(this._isOpen)return this;if(this._isOpen=!0,v.push(this),this._tooltipNode)return this._tooltipNode.style.display="",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.enableEventListeners(),this.popperInstance.update(),this.asyncContent&&this._setContent(e.title,e),this;var a=t.getAttribute("title")||e.title;if(!a)return this;var o=this._create(t,e.template);this._tooltipNode=o,t.setAttribute("aria-describedby",o.id);var r=this._findContainer(e.container,t);this._append(o,r);var s=c({},e.popperOptions,{placement:e.placement});return s.modifiers=c({},s.modifiers,{arrow:{element:this.options.arrowSelector}}),e.boundariesElement&&(s.modifiers.preventOverflow={boundariesElement:e.boundariesElement}),this.popperInstance=new i.a(t,o,s),this._setContent(a,e),requestAnimationFrame(function(){!n._isDisposed&&n.popperInstance?(n.popperInstance.update(),requestAnimationFrame(function(){n._isDisposed?n.dispose():n._isOpen&&o.setAttribute("aria-hidden","false")})):n.dispose()}),this}},{key:"_noLongerOpen",value:function(){var t=v.indexOf(this);-1!==t&&v.splice(t,1)}},{key:"_hide",value:function(){var t=this;if(!this._isOpen)return this;this._isOpen=!1,this._noLongerOpen(),this._tooltipNode.style.display="none",this._tooltipNode.setAttribute("aria-hidden","true"),this.popperInstance.disableEventListeners(),clearTimeout(this._disposeTimer);var e=C.options.disposeTimeout;return null!==e&&(this._disposeTimer=setTimeout(function(){t._tooltipNode&&(t._tooltipNode.removeEventListener("mouseenter",t.hide),t._tooltipNode.removeEventListener("click",t.hide),t._removeTooltipNode())},e)),p(this.reference,["v-tooltip-open"]),this}},{key:"_removeTooltipNode",value:function(){if(this._tooltipNode){var t=this._tooltipNode.parentNode;t&&(t.removeChild(this._tooltipNode),this.reference.removeAttribute("aria-describedby")),this._tooltipNode=null}}},{key:"_dispose",value:function(){var t=this;return this._isDisposed=!0,this.reference.removeAttribute("data-original-title"),this.$_originalTitle&&this.reference.setAttribute("title",this.$_originalTitle),this._events.forEach(function(e){var n=e.func,i=e.event;t.reference.removeEventListener(i,n)}),this._events=[],this._tooltipNode?(this._hide(),this._tooltipNode.removeEventListener("mouseenter",this.hide),this._tooltipNode.removeEventListener("click",this.hide),this.popperInstance.destroy(),this.popperInstance.options.removeOnDestroy||this._removeTooltipNode()):this._noLongerOpen(),this}},{key:"_findContainer",value:function(t,e){return"string"==typeof t?t=window.document.querySelector(t):!1===t&&(t=e.parentNode),t}},{key:"_append",value:function(t,e){e.appendChild(t)}},{key:"_setEventListeners",value:function(t,e,n){var i=this,a=[],o=[];e.forEach(function(t){switch(t){case"hover":a.push("mouseenter"),o.push("mouseleave"),i.options.hideOnTargetClick&&o.push("click");break;case"focus":a.push("focus"),o.push("blur"),i.options.hideOnTargetClick&&o.push("click");break;case"click":a.push("click"),o.push("click")}}),a.forEach(function(e){var a=function(e){!0!==i._isOpen&&(e.usedByTooltip=!0,i._scheduleShow(t,n.delay,n,e))};i._events.push({event:e,func:a}),t.addEventListener(e,a)}),o.forEach(function(e){var a=function(e){!0!==e.usedByTooltip&&i._scheduleHide(t,n.delay,n,e)};i._events.push({event:e,func:a}),t.addEventListener(e,a)})}},{key:"_onDocumentTouch",value:function(t){this._enableDocumentTouch&&this._scheduleHide(this.reference,this.options.delay,this.options,t)}},{key:"_scheduleShow",value:function(t,e,n){var i=this,a=e&&e.show||e||0;clearTimeout(this._scheduleTimer),this._scheduleTimer=window.setTimeout(function(){return i._show(t,n)},a)}},{key:"_scheduleHide",value:function(t,e,n,i){var a=this,o=e&&e.hide||e||0;clearTimeout(this._scheduleTimer),this._scheduleTimer=window.setTimeout(function(){if(!1!==a._isOpen&&document.body.contains(a._tooltipNode)){if("mouseleave"===i.type)if(a._setTooltipNodeEvent(i,t,e,n))return;a._hide(t,n)}},o)}}])&&r(e.prototype,n),a&&r(e,a),t}();"undefined"!=typeof document&&document.addEventListener("touchstart",function(t){for(var e=0;e<v.length;e++)v[e]._onDocumentTouch(t)},!f||{passive:!0,capture:!0});var b={enabled:!0},g=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],y={defaultPlacement:"top",defaultClass:"vue-tooltip-theme",defaultTargetClass:"has-tooltip",defaultHtml:!0,defaultTemplate:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',defaultArrowSelector:".tooltip-arrow, .tooltip__arrow",defaultInnerSelector:".tooltip-inner, .tooltip__inner",defaultDelay:0,defaultTrigger:"hover focus",defaultOffset:0,defaultContainer:"body",defaultBoundariesElement:void 0,defaultPopperOptions:{},defaultLoadingClass:"tooltip-loading",defaultLoadingContent:"...",autoHide:!0,defaultHideOnTargetClick:!0,disposeTimeout:5e3,popover:{defaultPlacement:"bottom",defaultClass:"vue-popover-theme",defaultBaseClass:"tooltip popover",defaultWrapperClass:"wrapper",defaultInnerClass:"tooltip-inner popover-inner",defaultArrowClass:"tooltip-arrow popover-arrow",defaultOpenClass:"open",defaultDelay:0,defaultTrigger:"click",defaultOffset:0,defaultContainer:"body",defaultBoundariesElement:void 0,defaultPopperOptions:{},defaultAutoHide:!0,defaultHandleResize:!0}};function x(t){var e={placement:void 0!==t.placement?t.placement:C.options.defaultPlacement,delay:void 0!==t.delay?t.delay:C.options.defaultDelay,html:void 0!==t.html?t.html:C.options.defaultHtml,template:void 0!==t.template?t.template:C.options.defaultTemplate,arrowSelector:void 0!==t.arrowSelector?t.arrowSelector:C.options.defaultArrowSelector,innerSelector:void 0!==t.innerSelector?t.innerSelector:C.options.defaultInnerSelector,trigger:void 0!==t.trigger?t.trigger:C.options.defaultTrigger,offset:void 0!==t.offset?t.offset:C.options.defaultOffset,container:void 0!==t.container?t.container:C.options.defaultContainer,boundariesElement:void 0!==t.boundariesElement?t.boundariesElement:C.options.defaultBoundariesElement,autoHide:void 0!==t.autoHide?t.autoHide:C.options.autoHide,hideOnTargetClick:void 0!==t.hideOnTargetClick?t.hideOnTargetClick:C.options.defaultHideOnTargetClick,loadingClass:void 0!==t.loadingClass?t.loadingClass:C.options.defaultLoadingClass,loadingContent:void 0!==t.loadingContent?t.loadingContent:C.options.defaultLoadingContent,popperOptions:c({},void 0!==t.popperOptions?t.popperOptions:C.options.defaultPopperOptions)};if(e.offset){var n=o(e.offset),i=e.offset;("number"===n||"string"===n&&-1===i.indexOf(","))&&(i="0, ".concat(i)),e.popperOptions.modifiers||(e.popperOptions.modifiers={}),e.popperOptions.modifiers.offset={offset:i}}return e.trigger&&-1!==e.trigger.indexOf("click")&&(e.hideOnTargetClick=!1),e}function w(t,e){for(var n=t.placement,i=0;i<g.length;i++){var a=g[i];e[a]&&(n=a)}return n}function _(t){var e=o(t);return"string"===e?t:!(!t||"object"!==e)&&t.content}function T(t){t._tooltip&&(t._tooltip.dispose(),delete t._tooltip,delete t._tooltipOldShow),t._tooltipTargetClasses&&(p(t,t._tooltipTargetClasses),delete t._tooltipTargetClasses)}function k(t,e){var n,i=e.value,a=(e.oldValue,e.modifiers),o=_(i);o&&b.enabled?(t._tooltip?((n=t._tooltip).setContent(o),n.setOptions(c({},i,{placement:w(i,a)}))):n=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=_(e),a=void 0!==e.classes?e.classes:C.options.defaultClass,o=c({title:i},x(c({},e,{placement:w(e,n)}))),r=t._tooltip=new m(t,o);r.setClasses(a),r._vueEl=t;var s=void 0!==e.targetClasses?e.targetClasses:C.options.defaultTargetClass;return t._tooltipTargetClasses=s,d(t,s),r}(t,i,a),void 0!==i.show&&i.show!==t._tooltipOldShow&&(t._tooltipOldShow=i.show,i.show?n.show():n.hide())):T(t)}var C={options:y,bind:k,update:k,unbind:function(t){T(t)}};function E(t){t.addEventListener("click",S),t.addEventListener("touchstart",D,!!f&&{passive:!0})}function M(t){t.removeEventListener("click",S),t.removeEventListener("touchstart",D),t.removeEventListener("touchend",O),t.removeEventListener("touchcancel",B)}function S(t){var e=t.currentTarget;t.closePopover=!e.$_vclosepopover_touch,t.closeAllPopover=e.$_closePopoverModifiers&&!!e.$_closePopoverModifiers.all}function D(t){if(1===t.changedTouches.length){var e=t.currentTarget;e.$_vclosepopover_touch=!0;var n=t.changedTouches[0];e.$_vclosepopover_touchPoint=n,e.addEventListener("touchend",O),e.addEventListener("touchcancel",B)}}function O(t){var e=t.currentTarget;if(e.$_vclosepopover_touch=!1,1===t.changedTouches.length){var n=t.changedTouches[0],i=e.$_vclosepopover_touchPoint;t.closePopover=Math.abs(n.screenY-i.screenY)<20&&Math.abs(n.screenX-i.screenX)<20,t.closeAllPopover=e.$_closePopoverModifiers&&!!e.$_closePopoverModifiers.all}}function B(t){t.currentTarget.$_vclosepopover_touch=!1}var I={bind:function(t,e){var n=e.value,i=e.modifiers;t.$_closePopoverModifiers=i,(void 0===n||n)&&E(t)},update:function(t,e){var n=e.value,i=e.oldValue,a=e.modifiers;t.$_closePopoverModifiers=a,n!==i&&(void 0===n||n?E(t):M(t))},unbind:function(t){M(t)}};function N(t){var e=C.options.popover[t];return void 0===e?C.options[t]:e}var L=!1;"undefined"!=typeof window&&"undefined"!=typeof navigator&&(L=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream);var P=[],j=function(){};"undefined"!=typeof window&&(j=window.Element);var $={name:"VPopover",components:{ResizeObserver:a.a},props:{open:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placement:{type:String,default:function(){return N("defaultPlacement")}},delay:{type:[String,Number,Object],default:function(){return N("defaultDelay")}},offset:{type:[String,Number],default:function(){return N("defaultOffset")}},trigger:{type:String,default:function(){return N("defaultTrigger")}},container:{type:[String,Object,j,Boolean],default:function(){return N("defaultContainer")}},boundariesElement:{type:[String,j],default:function(){return N("defaultBoundariesElement")}},popperOptions:{type:Object,default:function(){return N("defaultPopperOptions")}},popoverClass:{type:[String,Array],default:function(){return N("defaultClass")}},popoverBaseClass:{type:[String,Array],default:function(){return C.options.popover.defaultBaseClass}},popoverInnerClass:{type:[String,Array],default:function(){return C.options.popover.defaultInnerClass}},popoverWrapperClass:{type:[String,Array],default:function(){return C.options.popover.defaultWrapperClass}},popoverArrowClass:{type:[String,Array],default:function(){return C.options.popover.defaultArrowClass}},autoHide:{type:Boolean,default:function(){return C.options.popover.defaultAutoHide}},handleResize:{type:Boolean,default:function(){return C.options.popover.defaultHandleResize}},openGroup:{type:String,default:null},openClass:{type:[String,Array],default:function(){return C.options.popover.defaultOpenClass}}},data:function(){return{isOpen:!1,id:Math.random().toString(36).substr(2,10)}},computed:{cssClass:function(){return s({},this.openClass,this.isOpen)},popoverId:function(){return"popover_".concat(this.id)}},watch:{open:function(t){t?this.show():this.hide()},disabled:function(t,e){t!==e&&(t?this.hide():this.open&&this.show())},container:function(t){if(this.isOpen&&this.popperInstance){var e=this.$refs.popover,n=this.$refs.trigger,i=this.$_findContainer(this.container,n);if(!i)return void console.warn("No container for popover",this);i.appendChild(e),this.popperInstance.scheduleUpdate()}},trigger:function(t){this.$_removeEventListeners(),this.$_addEventListeners()},placement:function(t){var e=this;this.$_updatePopper(function(){e.popperInstance.options.placement=t})},offset:"$_restartPopper",boundariesElement:"$_restartPopper",popperOptions:{handler:"$_restartPopper",deep:!0}},created:function(){this.$_isDisposed=!1,this.$_mounted=!1,this.$_events=[],this.$_preventOpen=!1},mounted:function(){var t=this.$refs.popover;t.parentNode&&t.parentNode.removeChild(t),this.$_init(),this.open&&this.show()},deactivated:function(){this.hide()},beforeDestroy:function(){this.dispose()},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.event,i=(e.skipDelay,e.force),a=void 0!==i&&i;!a&&this.disabled||(this.$_scheduleShow(n),this.$emit("show")),this.$emit("update:open",!0),this.$_beingShowed=!0,requestAnimationFrame(function(){t.$_beingShowed=!1})},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.event;t.skipDelay;this.$_scheduleHide(e),this.$emit("hide"),this.$emit("update:open",!1)},dispose:function(){if(this.$_isDisposed=!0,this.$_removeEventListeners(),this.hide({skipDelay:!0}),this.popperInstance&&(this.popperInstance.destroy(),!this.popperInstance.options.removeOnDestroy)){var t=this.$refs.popover;t.parentNode&&t.parentNode.removeChild(t)}this.$_mounted=!1,this.popperInstance=null,this.isOpen=!1,this.$emit("dispose")},$_init:function(){-1===this.trigger.indexOf("manual")&&this.$_addEventListeners()},$_show:function(){var t=this,e=this.$refs.trigger,n=this.$refs.popover;if(clearTimeout(this.$_disposeTimer),!this.isOpen){if(this.popperInstance&&(this.isOpen=!0,this.popperInstance.enableEventListeners(),this.popperInstance.scheduleUpdate()),!this.$_mounted){var a=this.$_findContainer(this.container,e);if(!a)return void console.warn("No container for popover",this);a.appendChild(n),this.$_mounted=!0}if(!this.popperInstance){var o=c({},this.popperOptions,{placement:this.placement});if(o.modifiers=c({},o.modifiers,{arrow:c({},o.modifiers&&o.modifiers.arrow,{element:this.$refs.arrow})}),this.offset){var r=this.$_getOffset();o.modifiers.offset=c({},o.modifiers&&o.modifiers.offset,{offset:r})}this.boundariesElement&&(o.modifiers.preventOverflow=c({},o.modifiers&&o.modifiers.preventOverflow,{boundariesElement:this.boundariesElement})),this.popperInstance=new i.a(e,n,o),requestAnimationFrame(function(){if(t.hidden)return t.hidden=!1,void t.$_hide();!t.$_isDisposed&&t.popperInstance?(t.popperInstance.scheduleUpdate(),requestAnimationFrame(function(){if(t.hidden)return t.hidden=!1,void t.$_hide();t.$_isDisposed?t.dispose():t.isOpen=!0})):t.dispose()})}var s=this.openGroup;if(s)for(var l,u=0;u<P.length;u++)(l=P[u]).openGroup!==s&&(l.hide(),l.$emit("close-group"));P.push(this),this.$emit("apply-show")}},$_hide:function(){var t=this;if(this.isOpen){var e=P.indexOf(this);-1!==e&&P.splice(e,1),this.isOpen=!1,this.popperInstance&&this.popperInstance.disableEventListeners(),clearTimeout(this.$_disposeTimer);var n=C.options.popover.disposeTimeout||C.options.disposeTimeout;null!==n&&(this.$_disposeTimer=setTimeout(function(){var e=t.$refs.popover;e&&(e.parentNode&&e.parentNode.removeChild(e),t.$_mounted=!1)},n)),this.$emit("apply-hide")}},$_findContainer:function(t,e){return"string"==typeof t?t=window.document.querySelector(t):!1===t&&(t=e.parentNode),t},$_getOffset:function(){var t=o(this.offset),e=this.offset;return("number"===t||"string"===t&&-1===e.indexOf(","))&&(e="0, ".concat(e)),e},$_addEventListeners:function(){var t=this,e=this.$refs.trigger,n=[],i=[];("string"==typeof this.trigger?this.trigger.split(" ").filter(function(t){return-1!==["click","hover","focus"].indexOf(t)}):[]).forEach(function(t){switch(t){case"hover":n.push("mouseenter"),i.push("mouseleave");break;case"focus":n.push("focus"),i.push("blur");break;case"click":n.push("click"),i.push("click")}}),n.forEach(function(n){var i=function(e){t.isOpen||(e.usedByTooltip=!0,!t.$_preventOpen&&t.show({event:e}),t.hidden=!1)};t.$_events.push({event:n,func:i}),e.addEventListener(n,i)}),i.forEach(function(n){var i=function(e){e.usedByTooltip||(t.hide({event:e}),t.hidden=!0)};t.$_events.push({event:n,func:i}),e.addEventListener(n,i)})},$_scheduleShow:function(){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(clearTimeout(this.$_scheduleTimer),t)this.$_show();else{var e=parseInt(this.delay&&this.delay.show||this.delay||0);this.$_scheduleTimer=setTimeout(this.$_show.bind(this),e)}},$_scheduleHide:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(clearTimeout(this.$_scheduleTimer),n)this.$_hide();else{var i=parseInt(this.delay&&this.delay.hide||this.delay||0);this.$_scheduleTimer=setTimeout(function(){if(t.isOpen){if(e&&"mouseleave"===e.type)if(t.$_setTooltipNodeEvent(e))return;t.$_hide()}},i)}},$_setTooltipNodeEvent:function(t){var e=this,n=this.$refs.trigger,i=this.$refs.popover,a=t.relatedreference||t.toElement||t.relatedTarget;return!!i.contains(a)&&(i.addEventListener(t.type,function a(o){var r=o.relatedreference||o.toElement||o.relatedTarget;i.removeEventListener(t.type,a),n.contains(r)||e.hide({event:o})}),!0)},$_removeEventListeners:function(){var t=this.$refs.trigger;this.$_events.forEach(function(e){var n=e.func,i=e.event;t.removeEventListener(i,n)}),this.$_events=[]},$_updatePopper:function(t){this.popperInstance&&(t(),this.isOpen&&this.popperInstance.scheduleUpdate())},$_restartPopper:function(){if(this.popperInstance){var t=this.isOpen;this.dispose(),this.$_isDisposed=!1,this.$_init(),t&&this.show({skipDelay:!0,force:!0})}},$_handleGlobalClose:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.$_beingShowed||(this.hide({event:t}),t.closePopover?this.$emit("close-directive"):this.$emit("auto-hide"),n&&(this.$_preventOpen=!0,setTimeout(function(){e.$_preventOpen=!1},300)))},$_handleResize:function(){this.isOpen&&this.popperInstance&&(this.popperInstance.scheduleUpdate(),this.$emit("resize"))}}};function F(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(n){var i=P[n];if(i.$refs.popover){var a=i.$refs.popover.contains(t.target);requestAnimationFrame(function(){(t.closeAllPopover||t.closePopover&&a||i.autoHide&&!a)&&i.$_handleGlobalClose(t,e)})}},i=0;i<P.length;i++)n(i)}"undefined"!=typeof document&&"undefined"!=typeof window&&(L?document.addEventListener("touchend",function(t){F(t,!0)},!f||{passive:!0,capture:!0}):window.addEventListener("click",function(t){F(t)},!0));var Y=function(t,e,n,i,a,o,r,s,c,l){"boolean"!=typeof r&&(c=s,s=r,r=!1);var u,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,a&&(d.functional=!0)),i&&(d._scopeId=i),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=u):e&&(u=r?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),u)if(d.functional){var p=d.render;d.render=function(t,e){return u.call(e),p(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return n},R=$,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-popover",class:t.cssClass},[n("div",{ref:"trigger",staticClass:"trigger",staticStyle:{display:"inline-block"},attrs:{"aria-describedby":t.popoverId,tabindex:-1!==t.trigger.indexOf("focus")?0:void 0}},[t._t("default")],2),t._v(" "),n("div",{ref:"popover",class:[t.popoverBaseClass,t.popoverClass,t.cssClass],style:{visibility:t.isOpen?"visible":"hidden"},attrs:{id:t.popoverId,"aria-hidden":t.isOpen?"false":"true",tabindex:t.autoHide?0:void 0},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.autoHide&&t.hide()}}},[n("div",{class:t.popoverWrapperClass},[n("div",{ref:"inner",class:t.popoverInnerClass,staticStyle:{position:"relative"}},[n("div",[t._t("popover")],2),t._v(" "),t.handleResize?n("ResizeObserver",{on:{notify:t.$_handleResize}}):t._e()],1),t._v(" "),n("div",{ref:"arrow",class:t.popoverArrowClass})])])])};z._withStripped=!0;var H=Y({render:z,staticRenderFns:[]},void 0,R,void 0,!1,void 0,void 0,void 0);var Q=function(){this.__data__=[],this.size=0};var V=function(t,e){return t===e||t!=t&&e!=e};var U=function(t,e){for(var n=t.length;n--;)if(V(t[n][0],e))return n;return-1},G=Array.prototype.splice;var W=function(t){var e=this.__data__,n=U(e,t);return!(n<0||(n==e.length-1?e.pop():G.call(e,n,1),--this.size,0))};var Z=function(t){var e=this.__data__,n=U(e,t);return n<0?void 0:e[n][1]};var X=function(t){return U(this.__data__,t)>-1};var q=function(t,e){var n=this.__data__,i=U(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function K(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}K.prototype.clear=Q,K.prototype.delete=W,K.prototype.get=Z,K.prototype.has=X,K.prototype.set=q;var J=K;var tt=function(){this.__data__=new J,this.size=0};var et=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var nt=function(t){return this.__data__.get(t)};var it=function(t){return this.__data__.has(t)},at="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function ot(t,e){return t(e={exports:{}},e.exports),e.exports}var rt="object"==typeof at&&at&&at.Object===Object&&at,st="object"==typeof self&&self&&self.Object===Object&&self,ct=rt||st||Function("return this")(),lt=ct.Symbol,ut=Object.prototype,dt=ut.hasOwnProperty,pt=ut.toString,ft=lt?lt.toStringTag:void 0;var ht=function(t){var e=dt.call(t,ft),n=t[ft];try{t[ft]=void 0;var i=!0}catch(t){}var a=pt.call(t);return i&&(e?t[ft]=n:delete t[ft]),a},At=Object.prototype.toString;var vt=function(t){return At.call(t)},mt="[object Null]",bt="[object Undefined]",gt=lt?lt.toStringTag:void 0;var yt=function(t){return null==t?void 0===t?bt:mt:gt&&gt in Object(t)?ht(t):vt(t)};var xt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},wt="[object AsyncFunction]",_t="[object Function]",Tt="[object GeneratorFunction]",kt="[object Proxy]";var Ct,Et=function(t){if(!xt(t))return!1;var e=yt(t);return e==_t||e==Tt||e==wt||e==kt},Mt=ct["__core-js_shared__"],St=(Ct=/[^.]+$/.exec(Mt&&Mt.keys&&Mt.keys.IE_PROTO||""))?"Symbol(src)_1."+Ct:"";var Dt=function(t){return!!St&&St in t},Ot=Function.prototype.toString;var Bt=function(t){if(null!=t){try{return Ot.call(t)}catch(t){}try{return t+""}catch(t){}}return""},It=/^\[object .+?Constructor\]$/,Nt=Function.prototype,Lt=Object.prototype,Pt=Nt.toString,jt=Lt.hasOwnProperty,$t=RegExp("^"+Pt.call(jt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ft=function(t){return!(!xt(t)||Dt(t))&&(Et(t)?$t:It).test(Bt(t))};var Yt=function(t,e){return null==t?void 0:t[e]};var Rt=function(t,e){var n=Yt(t,e);return Ft(n)?n:void 0},zt=Rt(ct,"Map"),Ht=Rt(Object,"create");var Qt=function(){this.__data__=Ht?Ht(null):{},this.size=0};var Vt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ut="__lodash_hash_undefined__",Gt=Object.prototype.hasOwnProperty;var Wt=function(t){var e=this.__data__;if(Ht){var n=e[t];return n===Ut?void 0:n}return Gt.call(e,t)?e[t]:void 0},Zt=Object.prototype.hasOwnProperty;var Xt=function(t){var e=this.__data__;return Ht?void 0!==e[t]:Zt.call(e,t)},qt="__lodash_hash_undefined__";var Kt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ht&&void 0===e?qt:e,this};function Jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Jt.prototype.clear=Qt,Jt.prototype.delete=Vt,Jt.prototype.get=Wt,Jt.prototype.has=Xt,Jt.prototype.set=Kt;var te=Jt;var ee=function(){this.size=0,this.__data__={hash:new te,map:new(zt||J),string:new te}};var ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ie=function(t,e){var n=t.__data__;return ne(e)?n["string"==typeof e?"string":"hash"]:n.map};var ae=function(t){var e=ie(this,t).delete(t);return this.size-=e?1:0,e};var oe=function(t){return ie(this,t).get(t)};var re=function(t){return ie(this,t).has(t)};var se=function(t,e){var n=ie(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function ce(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ce.prototype.clear=ee,ce.prototype.delete=ae,ce.prototype.get=oe,ce.prototype.has=re,ce.prototype.set=se;var le=ce,ue=200;var de=function(t,e){var n=this.__data__;if(n instanceof J){var i=n.__data__;if(!zt||i.length<ue-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new le(i)}return n.set(t,e),this.size=n.size,this};function pe(t){var e=this.__data__=new J(t);this.size=e.size}pe.prototype.clear=tt,pe.prototype.delete=et,pe.prototype.get=nt,pe.prototype.has=it,pe.prototype.set=de;var fe=pe,he=function(){try{var t=Rt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Ae=function(t,e,n){"__proto__"==e&&he?he(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n};var ve=function(t,e,n){(void 0===n||V(t[e],n))&&(void 0!==n||e in t)||Ae(t,e,n)};var me=function(t){return function(e,n,i){for(var a=-1,o=Object(e),r=i(e),s=r.length;s--;){var c=r[t?s:++a];if(!1===n(o[c],c,o))break}return e}}(),be=ot(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,a=i&&i.exports===n?ct.Buffer:void 0,o=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,i=o?o(n):new t.constructor(n);return t.copy(i),i}}),ge=ct.Uint8Array;var ye=function(t){var e=new t.constructor(t.byteLength);return new ge(e).set(new ge(t)),e};var xe=function(t,e){var n=e?ye(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var we=function(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e},_e=Object.create,Te=function(){function t(){}return function(e){if(!xt(e))return{};if(_e)return _e(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var ke=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object),Ce=Object.prototype;var Ee=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ce)};var Me=function(t){return"function"!=typeof t.constructor||Ee(t)?{}:Te(ke(t))};var Se=function(t){return null!=t&&"object"==typeof t},De="[object Arguments]";var Oe=function(t){return Se(t)&&yt(t)==De},Be=Object.prototype,Ie=Be.hasOwnProperty,Ne=Be.propertyIsEnumerable,Le=Oe(function(){return arguments}())?Oe:function(t){return Se(t)&&Ie.call(t,"callee")&&!Ne.call(t,"callee")},Pe=Array.isArray,je=9007199254740991;var $e=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=je};var Fe=function(t){return null!=t&&$e(t.length)&&!Et(t)};var Ye=function(t){return Se(t)&&Fe(t)};var Re=function(){return!1},ze=ot(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,a=i&&i.exports===n?ct.Buffer:void 0,o=(a?a.isBuffer:void 0)||Re;t.exports=o}),He="[object Object]",Qe=Function.prototype,Ve=Object.prototype,Ue=Qe.toString,Ge=Ve.hasOwnProperty,We=Ue.call(Object);var Ze=function(t){if(!Se(t)||yt(t)!=He)return!1;var e=ke(t);if(null===e)return!0;var n=Ge.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Ue.call(n)==We},Xe={};Xe["[object Float32Array]"]=Xe["[object Float64Array]"]=Xe["[object Int8Array]"]=Xe["[object Int16Array]"]=Xe["[object Int32Array]"]=Xe["[object Uint8Array]"]=Xe["[object Uint8ClampedArray]"]=Xe["[object Uint16Array]"]=Xe["[object Uint32Array]"]=!0,Xe["[object Arguments]"]=Xe["[object Array]"]=Xe["[object ArrayBuffer]"]=Xe["[object Boolean]"]=Xe["[object DataView]"]=Xe["[object Date]"]=Xe["[object Error]"]=Xe["[object Function]"]=Xe["[object Map]"]=Xe["[object Number]"]=Xe["[object Object]"]=Xe["[object RegExp]"]=Xe["[object Set]"]=Xe["[object String]"]=Xe["[object WeakMap]"]=!1;var qe=function(t){return Se(t)&&$e(t.length)&&!!Xe[yt(t)]};var Ke=function(t){return function(e){return t(e)}},Je=ot(function(t,e){var n=e&&!e.nodeType&&e,i=n&&t&&!t.nodeType&&t,a=i&&i.exports===n&&rt.process,o=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=o}),tn=Je&&Je.isTypedArray,en=tn?Ke(tn):qe;var nn=function(t,e){if("__proto__"!=e)return t[e]},an=Object.prototype.hasOwnProperty;var on=function(t,e,n){var i=t[e];an.call(t,e)&&V(i,n)&&(void 0!==n||e in t)||Ae(t,e,n)};var rn=function(t,e,n,i){var a=!n;n||(n={});for(var o=-1,r=e.length;++o<r;){var s=e[o],c=i?i(n[s],t[s],s,n,t):void 0;void 0===c&&(c=t[s]),a?Ae(n,s,c):on(n,s,c)}return n};var sn=function(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i},cn=9007199254740991,ln=/^(?:0|[1-9]\d*)$/;var un=function(t,e){var n=typeof t;return!!(e=null==e?cn:e)&&("number"==n||"symbol"!=n&&ln.test(t))&&t>-1&&t%1==0&&t<e},dn=Object.prototype.hasOwnProperty;var pn=function(t,e){var n=Pe(t),i=!n&&Le(t),a=!n&&!i&&ze(t),o=!n&&!i&&!a&&en(t),r=n||i||a||o,s=r?sn(t.length,String):[],c=s.length;for(var l in t)!e&&!dn.call(t,l)||r&&("length"==l||a&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||un(l,c))||s.push(l);return s};var fn=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},hn=Object.prototype.hasOwnProperty;var An=function(t){if(!xt(t))return fn(t);var e=Ee(t),n=[];for(var i in t)("constructor"!=i||!e&&hn.call(t,i))&&n.push(i);return n};var vn=function(t){return Fe(t)?pn(t,!0):An(t)};var mn=function(t){return rn(t,vn(t))};var bn=function(t,e,n,i,a,o,r){var s=nn(t,n),c=nn(e,n),l=r.get(c);if(l)ve(t,n,l);else{var u=o?o(s,c,n+"",t,e,r):void 0,d=void 0===u;if(d){var p=Pe(c),f=!p&&ze(c),h=!p&&!f&&en(c);u=c,p||f||h?Pe(s)?u=s:Ye(s)?u=we(s):f?(d=!1,u=be(c,!0)):h?(d=!1,u=xe(c,!0)):u=[]:Ze(c)||Le(c)?(u=s,Le(s)?u=mn(s):xt(s)&&!Et(s)||(u=Me(c))):d=!1}d&&(r.set(c,u),a(u,c,i,o,r),r.delete(c)),ve(t,n,u)}};var gn=function t(e,n,i,a,o){e!==n&&me(n,function(r,s){if(xt(r))o||(o=new fe),bn(e,n,s,i,t,a,o);else{var c=a?a(nn(e,s),r,s+"",e,n,o):void 0;void 0===c&&(c=r),ve(e,s,c)}},vn)};var yn=function(t){return t};var xn=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},wn=Math.max;var _n=function(t,e,n){return e=wn(void 0===e?t.length-1:e,0),function(){for(var i=arguments,a=-1,o=wn(i.length-e,0),r=Array(o);++a<o;)r[a]=i[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=i[a];return s[e]=n(r),xn(t,this,s)}};var Tn=function(t){return function(){return t}},kn=he?function(t,e){return he(t,"toString",{configurable:!0,enumerable:!1,value:Tn(e),writable:!0})}:yn,Cn=800,En=16,Mn=Date.now;var Sn=function(t){var e=0,n=0;return function(){var i=Mn(),a=En-(i-n);if(n=i,a>0){if(++e>=Cn)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(kn);var Dn=function(t,e){return Sn(_n(t,e,yn),t+"")};var On=function(t,e,n){if(!xt(n))return!1;var i=typeof e;return!!("number"==i?Fe(n)&&un(e,n.length):"string"==i&&e in n)&&V(n[e],t)};var Bn=function(t){return Dn(function(e,n){var i=-1,a=n.length,o=a>1?n[a-1]:void 0,r=a>2?n[2]:void 0;for(o=t.length>3&&"function"==typeof o?(a--,o):void 0,r&&On(n[0],n[1],r)&&(o=a<3?void 0:o,a=1),e=Object(e);++i<a;){var s=n[i];s&&t(e,s,i,o)}return e})}(function(t,e,n){gn(t,e,n)});!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}(".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}");var In=C,Nn={install:function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.installed){t.installed=!0;var i={};Bn(i,y,n),Nn.options=i,C.options=i,e.directive("tooltip",C),e.directive("close-popover",I),e.component("v-popover",H)}},get enabled(){return b.enabled},set enabled(t){b.enabled=t}},Ln=null;"undefined"!=typeof window?Ln=window.Vue:void 0!==t&&(Ln=t.Vue),Ln&&Ln.use(Nn)}).call(this,n(16))},function(t,e,n){"use strict";n.r(e);var i=n(6);n(32);
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
i.a.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("6506c7f",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),i.a.options.defaultHtml=!1,e.default=i.a},function(t,e,n){"use strict";
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a=function(t){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,t||5)}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e){t.exports="data:application/vnd.ms-fontobject;base64,0gkAACgJAAABAAIAAAAAAAIABQMAAAAAAAABQJABAAAAAExQAAAAABAAAAAAAAAAAAAAAAAAAAEAAAAA7QDlIgAAAAAAAAAAAAAAAAAAAAAAABgAAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAAAAAAAAFgAAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAYAABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQAAAAAAAQAAAAoAgAADACBPUy8ydOOQiAAAAKwAAABgY21hcOok67wAAAEMAAABSmdseWZ0BZ9ZAAACWAAAAzxoZWFkJgsnMgAABZQAAAA2aGhlYSccE4AAAAXMAAAAJGhtdHgThwAAAAAF8AAAABpsb2NhA5oEoAAABgwAAAAYbWF4cAEYAFcAAAYkAAAAIG5hbWUNIFD5AAAGRAAAAkZwb3N0+8sNdgAACIwAAACcAAQTiAGQAAUAAAxlDawAAAK8DGUNrAAACWAA9QUKAAACAAUDAAAAAAAAAAAAABAAAAAAAAAAAAAAAFBmRWQAQOoB6gsTiAAAAcITiAAAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQAC6gbqC///AADqAeoH//8WABX/AAEAAAAAAAAAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAOpg9DAAUACwAACQIRCQQRCQEOpvqCBX77ugRG+oL6ggV++7oERg9C+oL6ggE4BEYERgE4+oL6ggE4BEYERgABAAAAAA1uElAABQAACQERCQERBhsHU/d0CIwJxPit/sgIiwiM/scAAgAAAAAP3w9DAAUACwAACQIRCQQRCQEE4gV++oIERvu6BX4Ff/qBBEb7ugRGBX4Ffv7I+7r7uv7IBX4Ffv7I+7r7ugABAAAAAA6mElAABQAACQERCQERDW74rQiL93UJxAdTATn3dPd1ATgAAQAAAAARFxEXAAsAAAkLERf97frA+sD97QVA+sACEwVABUACE/rABIT97QVA+sACEwVABUACE/rABUD97frAAAH//wAAE5MS7AAzAAABIgcOARcWFwEhJgcGBwYHBhQXFhcWFxY3IQEGBwYXFhceARcWFxY3NjcBNjc2JyYnAS4BCmBlT0pGEBJIBdfx4E0+OiknFBQUFCcpOj5NDiD6KTcaGAMDGxlWNTc7Pjo/NQftOxUVFBU8+BMsdBLsOTSsWWBH+ioBGxguLDk4eDg5LC4YGwL6KTU/Oz46NzZWGRoDAxgZOAfsPFFQT1I8B+wtMgAAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAElAMNQAYADEASgAAASIHDgEHBhYXHgEXFjI3PgE3NjQnLgEnJiEiBw4BBwYUFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmA6qAdHCtLzIBMS+tcHT/dHCtLzIyL61wdAWbf3RwrTAxMTCtcHT+dHCtMDExMK1wdAWcgHRwrS8xMS+tcHT/dHCtLzIyL61wdAw1MTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAEAACLlAO1fDzz1AAsTiAAAAADZ1c/gAAAAANmE8+H//wAAE5MS7AAAAAgAAgAAAAAAAAABAAATiAAAAAATiP////UTkwABAAAAAAAAAAAAAAAAAAAAAgAAAAATiAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAACIANgBYAGwAjADmAQQBegGQAZ4AAQAAAAsASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABAAwAAAABAAAAAAACAAcADAABAAAAAAADAAwAEwABAAAAAAAEAAwAHwABAAAAAAAFAAsAKwABAAAAAAAGAAwANgABAAAAAAAKACsAQgABAAAAAAALABMAbQADAAEECQABABgAgAADAAEECQACAA4AmAADAAEECQADABgApgADAAEECQAEABgAvgADAAEECQAFABYA1gADAAEECQAGABgA7AADAAEECQAKAFYBBAADAAEECQALACYBWmljb25mb250LXZ1ZVJlZ3VsYXJpY29uZm9udC12dWVpY29uZm9udC12dWVWZXJzaW9uIDEuMGljb25mb250LXZ1ZUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAsACwAAAQIBAwEEAQUBBgEHAQgBCQEKAQsRYXJyb3ctbGVmdC1kb3VibGUKYXJyb3ctbGVmdBJhcnJvdy1yaWdodC1kb3VibGULYXJyb3ctcmlnaHQFY2xvc2UMY29uZmlybS1mYWRlBG1lbnUEbW9yZQVwYXVzZQRwbGF5"},function(t,e){t.exports="data:font/woff;base64,d09GRgABAAAAAAlwAAoAAAAACSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOQiGNtYXAAAAFUAAABSgAAAUrqJOu8Z2x5ZgAAAqAAAAM8AAADPHQFn1loZWFkAAAF3AAAADYAAAA2JgsnMmhoZWEAAAYUAAAAJAAAACQnHBOAaG10eAAABjgAAAAaAAAAGhOHAABsb2NhAAAGVAAAABgAAAAYA5oEoG1heHAAAAZsAAAAIAAAACABGABXbmFtZQAABowAAAJGAAACRg0gUPlwb3N0AAAI1AAAAJwAAACc+8sNdgAEE4gBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoLE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAABEAAMAAQAAABwABAAoAAAABgAEAAEAAuoG6gv//wAA6gHqB///FgAV/wABAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAADqYPQwAFAAsAAAkCEQkEEQkBDqb6ggV++7oERvqC+oIFfvu6BEYPQvqC+oIBOARGBEYBOPqC+oIBOARGBEYAAQAAAAANbhJQAAUAAAkBEQkBEQYbB1P3dAiMCcT4rf7ICIsIjP7HAAIAAAAAD98PQwAFAAsAAAkCEQkEEQkBBOIFfvqCBEb7ugV+BX/6gQRG+7oERgV+BX7+yPu6+7r+yAV+BX7+yPu6+7oAAQAAAAAOphJQAAUAAAkBEQkBEQ1u+K0Ii/d1CcQHUwE593T3dQE4AAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAADAAAAABEXERcAAwAHAAsAAAERIREBESERAREhEQJxDqbxWg6m8VoOphEX/Y8Ccfnm/Y8Ccfnl/Y8CcQADAAAAABJQDDUAGAAxAEoAAAEiBw4BBwYWFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmISIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgOqgHRwrS8yATEvrXB0/3RwrS8yMi+tcHQFm390cK0wMTEwrXB0/nRwrTAxMTCtcHQFnIB0cK0vMTEvrXB0/3RwrS8yMi+tcHQMNTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMQAAAAIAAAAAD98P3wADAAcAAAERIREhESERA6oE4gJxBOIP3/PLDDXzyww1AAAAAQAAAAARFxEXAAIAAAkCAnEOpvFaERf4rfitAAEAAAABAAAi5QDtXw889QALE4gAAAAA2dXP4AAAAADZhPPh//8AABOTEuwAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAIAAAAAE4gAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAiADYAWABsAIwA5gEEAXoBkAGeAAEAAAALAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAMAAAAAQAAAAAAAgAHAAwAAQAAAAAAAwAMABMAAQAAAAAABAAMAB8AAQAAAAAABQALACsAAQAAAAAABgAMADYAAQAAAAAACgArAEIAAQAAAAAACwATAG0AAwABBAkAAQAYAIAAAwABBAkAAgAOAJgAAwABBAkAAwAYAKYAAwABBAkABAAYAL4AAwABBAkABQAWANYAAwABBAkABgAYAOwAAwABBAkACgBWAQQAAwABBAkACwAmAVppY29uZm9udC12dWVSZWd1bGFyaWNvbmZvbnQtdnVlaWNvbmZvbnQtdnVlVmVyc2lvbiAxLjBpY29uZm9udC12dWVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAsAAAECAQMBBAEFAQYBBwEIAQkBCgELEWFycm93LWxlZnQtZG91YmxlCmFycm93LWxlZnQSYXJyb3ctcmlnaHQtZG91YmxlC2Fycm93LXJpZ2h0BWNsb3NlDGNvbmZpcm0tZmFkZQRtZW51BG1vcmUFcGF1c2UEcGxheQ=="},function(t,e){t.exports="data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjkIgAAACsAAAAYGNtYXDqJOu8AAABDAAAAUpnbHlmdAWfWQAAAlgAAAM8aGVhZCYLJzIAAAWUAAAANmhoZWEnHBOAAAAFzAAAACRobXR4E4cAAAAABfAAAAAabG9jYQOaBKAAAAYMAAAAGG1heHABGABXAAAGJAAAACBuYW1lDSBQ+QAABkQAAAJGcG9zdPvLDXYAAAiMAAAAnAAEE4gBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoLE4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAABEAAMAAQAAABwABAAoAAAABgAEAAEAAuoG6gv//wAA6gHqB///FgAV/wABAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAADqYPQwAFAAsAAAkCEQkEEQkBDqb6ggV++7oERvqC+oIFfvu6BEYPQvqC+oIBOARGBEYBOPqC+oIBOARGBEYAAQAAAAANbhJQAAUAAAkBEQkBEQYbB1P3dAiMCcT4rf7ICIsIjP7HAAIAAAAAD98PQwAFAAsAAAkCEQkEEQkBBOIFfvqCBEb7ugV+BX/6gQRG+7oERgV+BX7+yPu6+7r+yAV+BX7+yPu6+7oAAQAAAAAOphJQAAUAAAkBEQkBEQ1u+K0Ii/d1CcQHUwE593T3dQE4AAEAAAAAERcRFwALAAAJCxEX/e36wPrA/e0FQPrAAhMFQAVAAhP6wASE/e0FQPrAAhMFQAVAAhP6wAVA/e36wAAB//8AABOTEuwAMwAAASIHDgEXFhcBISYHBgcGBwYUFxYXFhcWNyEBBgcGFxYXHgEXFhcWNzY3ATY3NicmJwEuAQpgZU9KRhASSAXX8eBNPjopJxQUFBQnKTo+TQ4g+ik3GhgDAxsZVjU3Oz46PzUH7TsVFRQVPPgTLHQS7Dk0rFlgR/oqARsYLiw5OHg4OSwuGBsC+ik1Pzs+Ojc2VhkaAwMYGTgH7DxRUE9SPAfsLTIAAAADAAAAABEXERcAAwAHAAsAAAERIREBESERAREhEQJxDqbxWg6m8VoOphEX/Y8Ccfnm/Y8Ccfnl/Y8CcQADAAAAABJQDDUAGAAxAEoAAAEiBw4BBwYWFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmISIHDgEHBhQXHgEXFjI3PgE3NjQnLgEnJgOqgHRwrS8yATEvrXB0/3RwrS8yMi+tcHQFm390cK0wMTEwrXB0/nRwrTAxMTCtcHQFnIB0cK0vMTEvrXB0/3RwrS8yMi+tcHQMNTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMQAAAAIAAAAAD98P3wADAAcAAAERIREhESERA6oE4gJxBOIP3/PLDDXzyww1AAAAAQAAAAARFxEXAAIAAAkCAnEOpvFaERf4rfitAAEAAAABAAAi5QDtXw889QALE4gAAAAA2dXP4AAAAADZhPPh//8AABOTEuwAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAIAAAAAE4gAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAiADYAWABsAIwA5gEEAXoBkAGeAAEAAAALAEsAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAAAQAMYAAQAAAAAAAQAMAAAAAQAAAAAAAgAHAAwAAQAAAAAAAwAMABMAAQAAAAAABAAMAB8AAQAAAAAABQALACsAAQAAAAAABgAMADYAAQAAAAAACgArAEIAAQAAAAAACwATAG0AAwABBAkAAQAYAIAAAwABBAkAAgAOAJgAAwABBAkAAwAYAKYAAwABBAkABAAYAL4AAwABBAkABQAWANYAAwABBAkABgAYAOwAAwABBAkACgBWAQQAAwABBAkACwAmAVppY29uZm9udC12dWVSZWd1bGFyaWNvbmZvbnQtdnVlaWNvbmZvbnQtdnVlVmVyc2lvbiAxLjBpY29uZm9udC12dWVHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQALQB2AHUAZQBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAACAAAAAAAAADIAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAsAAAECAQMBBAEFAQYBBwEIAQkBCgELEWFycm93LWxlZnQtZG91YmxlCmFycm93LWxlZnQSYXJyb3ctcmlnaHQtZG91YmxlC2Fycm93LXJpZ2h0BWNsb3NlDGNvbmZpcm0tZmFkZQRtZW51BG1vcmUFcGF1c2UEcGxheQ=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlIiBob3Jpei1hZHYteD0iNTAwMCI+PGZvbnQtZmFjZSBmb250LWZhbWlseT0iaWNvbmZvbnQtdnVlIiBmb250LXdlaWdodD0iNDAwIiBmb250LXN0cmV0Y2g9Im5vcm1hbCIgdW5pdHMtcGVyLWVtPSI1MDAwIiBwYW5vc2UtMT0iMiAwIDUgMyAwIDAgMCAwIDAgMCIgYXNjZW50PSI1MDAwIiBkZXNjZW50PSIwIiB4LWhlaWdodD0iMCIgYmJveD0iLTEgMCA1MDExIDQ4NDQiIHVuZGVybGluZS10aGlja25lc3M9IjAiIHVuZGVybGluZS1wb3NpdGlvbj0iNTAiIHVuaWNvZGUtcmFuZ2U9IlUrZWEwMS1lYTBiIiAvPjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIwIiAgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdC1kb3VibGUiIHVuaWNvZGU9IiYjeGVhMDE7IiBkPSJNMzc1MCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWk0yMzQ0IDM5MDYgbC0xNDA2IC0xNDA2IGwxNDA2IC0xNDA2IGwwIDMxMiBsLTEwOTQgMTA5NCBsMTA5NCAxMDk0IGwwIDMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1sZWZ0IiB1bmljb2RlPSImI3hlYTAyOyIgZD0iTTE1NjMgMjUwMCBsMTg3NSAtMTg3NSBsMCAtMzEyIGwtMjE4OCAyMTg3IGwyMTg4IDIxODggbDAgLTMxMyBsLTE4NzUgLTE4NzUgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcmlnaHQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAzOyIgZD0iTTEyNTAgMTA5NCBsMTQwNiAxNDA2IGwtMTQwNiAxNDA2IGwwIC0zMTIgbDEwOTQgLTEwOTQgbC0xMDk0IC0xMDk0IGwwIC0zMTIgWk0yNjU2IDEwOTQgbDE0MDcgMTQwNiBsLTE0MDcgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0IiB1bmljb2RlPSImI3hlYTA0OyIgZD0iTTM0MzggMjUwMCBsLTE4NzUgMTg3NSBsMCAzMTMgbDIxODcgLTIxODggbC0yMTg3IC0yMTg3IGwwIDMxMiBsMTg3NSAxODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA1OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybS1mYWRlIiB1bmljb2RlPSImI3hlYTA2OyYjeGVhMDc7IiBkPSJNMjY1NiA0ODQ0IHEtMTAxIDAgLTE4MCAtNTcgcS03NCAtNTIgLTEwOSAtMTM4IHEtMzUgLTg2IC0xOSAtMTc1IHExOCAtOTYgOTAgLTE2NyBsMTQ5NSAtMTQ5NCBsLTM2MTYgMCBxLTc3IDEgLTEzOSAtMjYgcS01OCAtMjQgLTk5IC03MCBxLTM5IC00NCAtNTkgLTEwMSBxLTIwIC01NiAtMjAgLTExNiBxMCAtNjAgMjAgLTExNiBxMjAgLTU3IDU5IC0xMDEgcTQxIC00NiA5OSAtNzAgcTYyIC0yNyAxMzkgLTI1IGwzNjE2IDAgbC0xNDk1IC0xNDk1IHEtNTUgLTUzIC04MSAtMTE2IHEtMjQgLTU5IC0yMSAtMTIxIHEzIC01OCAzMCAtMTEzIHEyNSAtNTQgNjggLTk3IHE0MyAtNDMgOTYgLTY4IHE1NSAtMjYgMTE0IC0yOSBxNjIgLTMgMTIwIDIxIHE2MyAyNSAxMTYgODEgbDIwMjkgMjAyOCBxNTkgNjAgODAgMTQxIHEyMSA4MCAxIDE1OSBxLTIxIDgyIC04MSAxNDIgbC0yMDI5IDIwMjggcS00NCA0NSAtMTAyIDcwIHEtNTggMjUgLTEyMiAyNSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtZW51IiB1bmljb2RlPSImI3hlYTA4OyIgZD0iTTYyNSA0Mzc1IGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMjgxMyBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFpNNjI1IDEyNTAgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJtb3JlIiB1bmljb2RlPSImI3hlYTA5OyIgZD0iTTkzOCAzMTI1IHEtMTI4IDAgLTI0NCAtNDkgcS0xMTIgLTQ4IC0xOTguNSAtMTM0LjUgcS04Ni41IC04Ni41IC0xMzMuNSAtMTk4LjUgcS01MCAtMTE2IC00OS41IC0yNDMgcTAuNSAtMTI3IDQ5LjUgLTI0MyBxNDcgLTExMiAxMzMuNSAtMTk4LjUgcTg2LjUgLTg2LjUgMTk4LjUgLTEzNC41IHExMTYgLTQ5IDI0My41IC00OSBxMTI3LjUgMCAyNDMuNSA0OSBxMTEyIDQ4IDE5OC41IDEzNC41IHE4Ni41IDg2LjUgMTMzLjUgMTk4LjUgcTUwIDExNiA1MCAyNDMgcTAgMTI3IC01MCAyNDMgcS00NyAxMTIgLTEzMy41IDE5OC41IHEtODYuNSA4Ni41IC0xOTguNSAxMzQuNSBxLTExNiA0OSAtMjQzIDQ5IFpNMjUwMCAzMTI1IHEtMTI3IDAgLTI0MyAtNDkgcS0xMTIgLTQ4IC0xOTguNSAtMTM0LjUgcS04Ni41IC04Ni41IC0xMzQuNSAtMTk4LjUgcS00OSAtMTE2IC00OSAtMjQzIHEwIC0xMjcgNDkgLTI0MyBxNDggLTExMiAxMzQuNSAtMTk4LjUgcTg2LjUgLTg2LjUgMTk4LjUgLTEzNC41IHExMTYgLTQ5IDI0MyAtNDkgcTEyNyAwIDI0MyA0OSBxMTEyIDQ4IDE5OC41IDEzNC41IHE4Ni41IDg2LjUgMTM0LjUgMTk4LjUgcTQ5IDExNiA0OSAyNDMgcTAgMTI3IC00OSAyNDMgcS00OCAxMTIgLTEzNC41IDE5OC41IHEtODYuNSA4Ni41IC0xOTguNSAxMzQuNSBxLTExNiA0OSAtMjQzIDQ5IFpNNDA2MyAzMTI1IHEtMTI4IDAgLTI0NCAtNDkgcS0xMTIgLTQ4IC0xOTguNSAtMTM0LjUgcS04Ni41IC04Ni41IC0xMzMuNSAtMTk4LjUgcS00OSAtMTE2IC00OSAtMjQzIHEwIC0xMjcgNDkgLTI0MyBxNDcgLTExMiAxMzMuNSAtMTk4LjUgcTg2LjUgLTg2LjUgMTk4LjUgLTEzNC41IHExMTYgLTQ5IDI0My41IC00OSBxMTI3LjUgMCAyNDMuNSA0OSBxMTEyIDQ4IDE5OC41IDEzNC41IHE4Ni41IDg2LjUgMTMzLjUgMTk4LjUgcTUwIDExNiA1MCAyNDMgcTAgMTI3IC01MCAyNDMgcS00NyAxMTIgLTEzMy41IDE5OC41IHEtODYuNSA4Ni41IC0xOTguNSAxMzQuNSBxLTExNiA0OSAtMjQzIDQ5IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImI3hlYTBhOyIgZD0iTTkzOCA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaTTI4MTMgNDA2MyBsMCAtMzEyNSBsMTI1MCAwIGwwIDMxMjUgbC0xMjUwIDAgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiN4ZWEwYjsiIGQ9Ik02MjUgNDM3NSBsMzc1MCAtMTg3NSBsLTM3NTAgLTE4NzUgbDAgMzc1MCBaIiAvPjwvZm9udD48L2RlZnM+PC9zdmc+"},function(t,e,n){t.exports=function(){var t="undefined"!=typeof window,e="undefined"!=typeof navigator,n=t&&("ontouchstart"in window||e&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],i=function(t){return t},a={instances:[]};function o(t){var e="function"==typeof t;if(!e&&"object"!=typeof t)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:e?t:t.handler,middleware:t.middleware||i,events:t.events||n,isActive:!(!1===t.isActive)}}function r(t){var e=t.el,n=t.event,i=t.handler,a=t.middleware;n.target!==e&&!e.contains(n.target)&&a(n,e)&&i(n,e)}function s(t){var e=t.el,n=t.handler,i=t.middleware;return{el:e,eventHandlers:t.events.map(function(t){return{event:t,handler:function(t){return r({event:t,el:e,handler:n,middleware:i})}}})}}function c(t){var e=a.instances.findIndex(function(e){return e.el===t});-1!==e&&(a.instances[e].eventHandlers.forEach(function(t){return document.removeEventListener(t.event,t.handler)}),a.instances.splice(e,1))}return a.bind=function(t,e){var n=o(e.value);if(n.isActive){var i=s({el:t,events:n.events,handler:n.handler,middleware:n.middleware});i.eventHandlers.forEach(function(t){var e=t.event,n=t.handler;return setTimeout(function(){return document.addEventListener(e,n)},0)}),a.instances.push(i)}},a.update=function(t,e){var n=e.value,i=e.oldValue;if(JSON.stringify(n)!==JSON.stringify(i)){var l=o(n),u=l.events,d=l.handler,p=l.middleware;if(l.isActive){var f=a.instances.find(function(e){return e.el===t});f?(f.eventHandlers.forEach(function(t){return document.removeEventListener(t.event,t.handler)}),f.eventHandlers=u.map(function(e){return{event:e,handler:function(e){return r({event:e,el:t,handler:d,middleware:p})}}})):(f=s({el:t,events:u,handler:d,middleware:p}),a.instances.push(f)),f.eventHandlers.forEach(function(t){var e=t.event,n=t.handler;return setTimeout(function(){return document.addEventListener(e,n)},0)})}else c(t)}},a.unbind=c,{install:function(t){t.directive("click-outside",a)},directive:a}}()},function(t,e,n){"use strict";var i=n(5);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a={mixins:[i.a],props:{icon:{type:String,default:"",required:!0},title:{type:String,default:""}},computed:{isIconUrl:function(){try{return new URL(this.icon)}catch(t){return!1}}},methods:{onClick:function(t){this.$emit("click",t)}}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){for(
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!=typeof window&&"undefined"!=typeof document,i=["Edge","Trident","Firefox"],a=0,o=0;o<i.length;o+=1)if(n&&navigator.userAgent.indexOf(i[o])>=0){a=1;break}var r=n&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},a))}};function s(t){return t&&"[object Function]"==={}.toString.call(t)}function c(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function l(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function u(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=c(t),n=e.overflow,i=e.overflowX,a=e.overflowY;return/(auto|scroll|overlay)/.test(n+a+i)?t:u(l(t))}var d=n&&!(!window.MSInputMethodContext||!document.documentMode),p=n&&/MSIE 10/.test(navigator.userAgent);function f(t){return 11===t?d:10===t?p:d||p}function h(t){if(!t)return document.documentElement;for(var e=f(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===c(n,"position")?h(n):n:t?t.ownerDocument.documentElement:document.documentElement}function A(t){return null!==t.parentNode?A(t.parentNode):t}function v(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,a=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(a,0);var r,s,c=o.commonAncestorContainer;if(t!==c&&e!==c||i.contains(a))return"BODY"===(s=(r=c).nodeName)||"HTML"!==s&&h(r.firstElementChild)!==r?h(c):c;var l=A(t);return l.host?v(l.host,e):v(t,A(e).host)}function m(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function b(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function g(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],f(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function y(t){var e=t.body,n=t.documentElement,i=f(10)&&getComputedStyle(n);return{height:g("Height",e,n,i),width:g("Width",e,n,i)}}var x=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function k(t){return T({},t,{right:t.left+t.width,bottom:t.top+t.height})}function C(t){var e={};try{if(f(10)){e=t.getBoundingClientRect();var n=m(t,"top"),i=m(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var a={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?y(t.ownerDocument):{},r=o.width||t.clientWidth||a.right-a.left,s=o.height||t.clientHeight||a.bottom-a.top,l=t.offsetWidth-r,u=t.offsetHeight-s;if(l||u){var d=c(t);l-=b(d,"x"),u-=b(d,"y"),a.width-=l,a.height-=u}return k(a)}function E(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=f(10),a="HTML"===e.nodeName,o=C(t),r=C(e),s=u(t),l=c(e),d=parseFloat(l.borderTopWidth,10),p=parseFloat(l.borderLeftWidth,10);n&&a&&(r.top=Math.max(r.top,0),r.left=Math.max(r.left,0));var h=k({top:o.top-r.top-d,left:o.left-r.left-p,width:o.width,height:o.height});if(h.marginTop=0,h.marginLeft=0,!i&&a){var A=parseFloat(l.marginTop,10),v=parseFloat(l.marginLeft,10);h.top-=d-A,h.bottom-=d-A,h.left-=p-v,h.right-=p-v,h.marginTop=A,h.marginLeft=v}return(i&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=m(e,"top"),a=m(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=a*o,t.right+=a*o,t}(h,e)),h}function M(t){if(!t||!t.parentElement||f())return document.documentElement;for(var e=t.parentElement;e&&"none"===c(e,"transform");)e=e.parentElement;return e||document.documentElement}function S(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},r=a?M(t):v(t,e);if("viewport"===i)o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=E(t,n),a=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),r=e?0:m(n),s=e?0:m(n,"left");return k({top:r-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:a,height:o})}(r,a);else{var s=void 0;"scrollParent"===i?"BODY"===(s=u(l(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===i?t.ownerDocument.documentElement:i;var d=E(s,r,a);if("HTML"!==s.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===c(e,"position"))return!0;var i=l(e);return!!i&&t(i)}(r))o=d;else{var p=y(t.ownerDocument),f=p.height,h=p.width;o.top+=d.top-d.marginTop,o.bottom=f+d.top,o.left+=d.left-d.marginLeft,o.right=h+d.left}}var A="number"==typeof(n=n||0);return o.left+=A?n:n.left||0,o.top+=A?n:n.top||0,o.right-=A?n:n.right||0,o.bottom-=A?n:n.bottom||0,o}function D(t,e,n,i,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var r=S(n,i,o,a),s={top:{width:r.width,height:e.top-r.top},right:{width:r.right-e.right,height:r.height},bottom:{width:r.width,height:r.bottom-e.bottom},left:{width:e.left-r.left,height:r.height}},c=Object.keys(s).map(function(t){return T({key:t},s[t],{area:(e=s[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),l=c.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),u=l.length>0?l[0].key:c[0].key,d=t.split("-")[1];return u+(d?"-"+d:"")}function O(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return E(n,i?M(e):v(e,n),i)}function B(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function I(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function N(t,e,n){n=n.split("-")[0];var i=B(t),a={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),r=o?"top":"left",s=o?"left":"top",c=o?"height":"width",l=o?"width":"height";return a[r]=e[r]+e[c]/2-i[c]/2,a[s]=n===s?e[s]-i[l]:e[I(s)],a}function L(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function P(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=L(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&s(n)&&(e.offsets.popper=k(e.offsets.popper),e.offsets.reference=k(e.offsets.reference),e=n(e,t))}),e}function j(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function $(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var a=e[i],o=a?""+a+n:t;if(void 0!==document.body.style[o])return o}return null}function F(t){var e=t.ownerDocument;return e?e.defaultView:window}function Y(t,e,n,i){n.updateBound=i,F(t).addEventListener("resize",n.updateBound,{passive:!0});var a=u(t);return function t(e,n,i,a){var o="BODY"===e.nodeName,r=o?e.ownerDocument.defaultView:e;r.addEventListener(n,i,{passive:!0}),o||t(u(r.parentNode),n,i,a),a.push(r)}(a,"scroll",n.updateBound,n.scrollParents),n.scrollElement=a,n.eventsEnabled=!0,n}function R(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,F(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function z(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function H(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&z(e[n])&&(i="px"),t.style[n]=e[n]+i})}var Q=n&&/Firefox/i.test(navigator.userAgent);function V(t,e,n){var i=L(t,function(t){return t.name===e}),a=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!a){var o="`"+e+"`",r="`"+n+"`";console.warn(r+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return a}var U=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],G=U.slice(3);function W(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=G.indexOf(t),i=G.slice(n+1).concat(G.slice(0,n));return e?i.reverse():i}var Z={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function X(t,e,n,i){var a=[0,0],o=-1!==["right","left"].indexOf(i),r=t.split(/(\+|\-)/).map(function(t){return t.trim()}),s=r.indexOf(L(r,function(t){return-1!==t.search(/,|\s/)}));r[s]&&-1===r[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,l=-1!==s?[r.slice(0,s).concat([r[s].split(c)[0]]),[r[s].split(c)[1]].concat(r.slice(s+1))]:[r];return(l=l.map(function(t,i){var a=(1===i?!o:o)?"height":"width",r=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,r=!0,t):r?(t[t.length-1]+=e,r=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var a=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+a[1],r=a[2];if(!o)return t;if(0===r.indexOf("%")){var s=void 0;switch(r){case"%p":s=n;break;case"%":case"%r":default:s=i}return k(s)[e]/100*o}if("vh"===r||"vw"===r)return("vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,a,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){z(n)&&(a[e]+=n*("-"===t[i-1]?-1:1))})}),a}var q={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var a=t.offsets,o=a.reference,r=a.popper,s=-1!==["bottom","top"].indexOf(n),c=s?"left":"top",l=s?"width":"height",u={start:_({},c,o[c]),end:_({},c,o[c]+o[l]-r[l])};t.offsets.popper=T({},r,u[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,a=t.offsets,o=a.popper,r=a.reference,s=i.split("-")[0],c=void 0;return c=z(+n)?[+n,0]:X(n,o,r,s),"left"===s?(o.top+=c[0],o.left-=c[1]):"right"===s?(o.top+=c[0],o.left+=c[1]):"top"===s?(o.left+=c[0],o.top-=c[1]):"bottom"===s&&(o.left+=c[0],o.top+=c[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||h(t.instance.popper);t.instance.reference===n&&(n=h(n));var i=$("transform"),a=t.instance.popper.style,o=a.top,r=a.left,s=a[i];a.top="",a.left="",a[i]="";var c=S(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);a.top=o,a.left=r,a[i]=s,e.boundaries=c;var l=e.priority,u=t.offsets.popper,d={primary:function(t){var n=u[t];return u[t]<c[t]&&!e.escapeWithReference&&(n=Math.max(u[t],c[t])),_({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=u[n];return u[t]>c[t]&&!e.escapeWithReference&&(i=Math.min(u[n],c[t]-("right"===t?u.width:u.height))),_({},n,i)}};return l.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";u=T({},u,d[e](t))}),t.offsets.popper=u,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,a=t.placement.split("-")[0],o=Math.floor,r=-1!==["top","bottom"].indexOf(a),s=r?"right":"bottom",c=r?"left":"top",l=r?"width":"height";return n[s]<o(i[c])&&(t.offsets.popper[c]=o(i[c])-n[l]),n[c]>o(i[s])&&(t.offsets.popper[c]=o(i[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!V(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var a=t.placement.split("-")[0],o=t.offsets,r=o.popper,s=o.reference,l=-1!==["left","right"].indexOf(a),u=l?"height":"width",d=l?"Top":"Left",p=d.toLowerCase(),f=l?"left":"top",h=l?"bottom":"right",A=B(i)[u];s[h]-A<r[p]&&(t.offsets.popper[p]-=r[p]-(s[h]-A)),s[p]+A>r[h]&&(t.offsets.popper[p]+=s[p]+A-r[h]),t.offsets.popper=k(t.offsets.popper);var v=s[p]+s[u]/2-A/2,m=c(t.instance.popper),b=parseFloat(m["margin"+d],10),g=parseFloat(m["border"+d+"Width"],10),y=v-t.offsets.popper[p]-b-g;return y=Math.max(Math.min(r[u]-A,y),0),t.arrowElement=i,t.offsets.arrow=(_(n={},p,Math.round(y)),_(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(j(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=S(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],a=I(i),o=t.placement.split("-")[1]||"",r=[];switch(e.behavior){case Z.FLIP:r=[i,a];break;case Z.CLOCKWISE:r=W(i);break;case Z.COUNTERCLOCKWISE:r=W(i,!0);break;default:r=e.behavior}return r.forEach(function(s,c){if(i!==s||r.length===c+1)return t;i=t.placement.split("-")[0],a=I(i);var l=t.offsets.popper,u=t.offsets.reference,d=Math.floor,p="left"===i&&d(l.right)>d(u.left)||"right"===i&&d(l.left)<d(u.right)||"top"===i&&d(l.bottom)>d(u.top)||"bottom"===i&&d(l.top)<d(u.bottom),f=d(l.left)<d(n.left),h=d(l.right)>d(n.right),A=d(l.top)<d(n.top),v=d(l.bottom)>d(n.bottom),m="left"===i&&f||"right"===i&&h||"top"===i&&A||"bottom"===i&&v,b=-1!==["top","bottom"].indexOf(i),g=!!e.flipVariations&&(b&&"start"===o&&f||b&&"end"===o&&h||!b&&"start"===o&&A||!b&&"end"===o&&v),y=!!e.flipVariationsByContent&&(b&&"start"===o&&h||b&&"end"===o&&f||!b&&"start"===o&&v||!b&&"end"===o&&A),x=g||y;(p||m||x)&&(t.flipped=!0,(p||m)&&(i=r[c+1]),x&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=i+(o?"-"+o:""),t.offsets.popper=T({},t.offsets.popper,N(t.instance.popper,t.offsets.reference,t.placement)),t=P(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,a=i.popper,o=i.reference,r=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return a[r?"left":"top"]=o[n]-(s?a[r?"width":"height"]:0),t.placement=I(e),t.offsets.popper=k(a),t}},hide:{order:800,enabled:!0,fn:function(t){if(!V(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=L(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,a=t.offsets.popper,o=L(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var r=void 0!==o?o:e.gpuAcceleration,s=h(t.instance.popper),c=C(s),l={position:a.position},u=function(t,e){var n=t.offsets,i=n.popper,a=n.reference,o=Math.round,r=Math.floor,s=function(t){return t},c=o(a.width),l=o(i.width),u=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),p=e?u||d||c%2==l%2?o:r:s,f=e?o:s;return{left:p(c%2==1&&l%2==1&&!d&&e?i.left-1:i.left),top:f(i.top),bottom:f(i.bottom),right:p(i.right)}}(t,window.devicePixelRatio<2||!Q),d="bottom"===n?"top":"bottom",p="right"===i?"left":"right",f=$("transform"),A=void 0,v=void 0;if(v="bottom"===d?"HTML"===s.nodeName?-s.clientHeight+u.bottom:-c.height+u.bottom:u.top,A="right"===p?"HTML"===s.nodeName?-s.clientWidth+u.right:-c.width+u.right:u.left,r&&f)l[f]="translate3d("+A+"px, "+v+"px, 0)",l[d]=0,l[p]=0,l.willChange="transform";else{var m="bottom"===d?-1:1,b="right"===p?-1:1;l[d]=v*m,l[p]=A*b,l.willChange=d+", "+p}var g={"x-placement":t.placement};return t.attributes=T({},g,t.attributes),t.styles=T({},l,t.styles),t.arrowStyles=T({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return H(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&H(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,a){var o=O(a,e,t,n.positionFixed),r=D(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",r),H(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},K=function(){function t(e,n){var i=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};x(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=r(this.update.bind(this)),this.options=T({},t.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(T({},t.Defaults.modifiers,a.modifiers)).forEach(function(e){i.options.modifiers[e]=T({},t.Defaults.modifiers[e]||{},a.modifiers?a.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return T({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&s(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return w(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=D(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=N(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=P(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,j(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[$("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=Y(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return R.call(this)}}]),t}();K.Utils=("undefined"!=typeof window?window:t).PopperUtils,K.placements=U,K.Defaults=q,e.a=K}).call(this,n(16))},function(t,e,n){var i=n(42);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("6d914181",i,!0,{})},function(t,e,n){var i=n(44);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("2fc216d3",i,!0,{})},function(t,e,n){var i=n(46);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("95523852",i,!0,{})},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var i=void 0;function a(){a.init||(a.init=!0,i=-1!==function(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var n=t.indexOf("rv:");return parseInt(t.substring(n+3,t.indexOf(".",n)),10)}var i=t.indexOf("Edge/");return i>0?parseInt(t.substring(i+5,t.indexOf(".",i)),10):-1}())}var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[],_scopeId:"data-v-b329ee4c",name:"resize-observer",methods:{compareAndNotify:function(){this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.$emit("notify"))},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(!i&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),delete this._resizeObject.onload)}},mounted:function(){var t=this;a(),this.$nextTick(function(){t._w=t.$el.offsetWidth,t._h=t.$el.offsetHeight});var e=document.createElement("object");this._resizeObject=e,e.setAttribute("aria-hidden","true"),e.setAttribute("tabindex",-1),e.onload=this.addResizeHandlers,e.type="text/html",i&&this.$el.appendChild(e),e.data="about:blank",i||this.$el.appendChild(e)},beforeDestroy:function(){this.removeResizeHandlers()}};var r={version:"0.4.5",install:function(t){t.component("resize-observer",o),t.component("ResizeObserver",o)}},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(r)}).call(this,n(16))},function(t,e,n){var i=n(83);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("74831c08",i,!0,{})},function(t,e,n){"use strict";
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a=function(t){t.mounted?Array.isArray(t.mounted)||(t.mounted=[t.mounted]):t.mounted=[],t.mounted.push(function(){this.$el.setAttribute("data-v-".concat("6506c7f"),"")})}},function(t,e,n){"use strict";n.r(e);var i={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(t){return!t.input||-1!==["text","checkbox"].indexOf(t.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(t){return!1}}},methods:{action:function(t){this.item.action&&this.item.action(t)}}},a=(n(41),n(43),n(0)),o={name:"PopoverMenu",components:{PopoverMenuItem:Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.item.href?n("a",{staticClass:"focusable",attrs:{href:t.item.href?t.item.href:"#",target:t.item.target?t.item.target:"",download:t.item.download,rel:"noreferrer noopener"},on:{click:t.action}},[t.iconIsUrl?n("img",{attrs:{src:t.item.icon}}):n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):t.item.input?n("span",{staticClass:"menuitem",class:{active:t.item.active}},["checkbox"!==t.item.input?n("span",{class:t.item.icon}):t._e(),t._v(" "),"text"===t.item.input?n("form",{class:t.item.input,on:{submit:function(e){return e.preventDefault(),t.item.action(e)}}},[n("input",{attrs:{type:t.item.input,placeholder:t.item.text,required:""},domProps:{value:t.item.value}}),t._v(" "),n("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"checkbox"},domProps:{checked:Array.isArray(t.item.model)?t._i(t.item.model,null)>-1:t.item.model},on:{change:[function(e){var n=t.item.model,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&t.$set(t.item,"model",n.concat([null])):o>-1&&t.$set(t.item,"model",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.item,"model",a)},t.item.action]}}):"radio"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"radio"},domProps:{checked:t._q(t.item.model,null)},on:{change:[function(e){return t.$set(t.item,"model",null)},t.item.action]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:t.item.input},domProps:{value:t.item.model},on:{change:t.item.action,input:function(e){e.target.composing||t.$set(t.item,"model",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:t.key},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")])]],2):t.item.action?n("button",{staticClass:"menuitem focusable",class:{active:t.item.active},attrs:{disabled:t.item.disabled},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):n("span",{staticClass:"menuitem",class:{active:t.item.active}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()])])},[],!1,null,"8dc4efb0",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},r=(n(45),Object(a.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("ul",this._l(this.menu,function(t,n){return e("PopoverMenuItem",{key:n,attrs:{item:t}})}),1)},[],!1,null,"2f982451",null).exports);n.d(e,"PopoverMenu",function(){return r});
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=r},function(t,e){},function(t,e,n){var i=n(95);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("2601b667",i,!0,{})},function(t,e,n){var i=n(99);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("a39cae00",i,!0,{})},function(t,e,n){var i=n(101);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("30f6e694",i,!0,{})},function(t,e,n){var i=n(124);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("65c1e942",i,!0,{})},function(t,e,n){"use strict";n.r(e);var i=n(14),a=n(7),o=n(8),r=function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientHeight,i=document.documentElement.clientWidth,a=Object.assign({});return a.top=e.top<0,a.left=e.left<0,a.bottom=e.bottom>n,a.right=e.right>i,a.any=a.top||a.left||a.bottom||a.right,a.all=a.top&&a.left&&a.bottom&&a.right,a.offsetY=a.top?e.top:a.bottom?e.bottom-n:0,a.offsetX=a.left?e.left:a.right?e.right-i:0,a},s=n(3),c=n.n(s),l=function(t,e,n){void 0!==t&&t.forEach(function(i,a){var o=!i.componentOptions&&i.tag,r=i.componentOptions&&"string"==typeof i.componentOptions.tag&&-1===e.indexOf(i.componentOptions.tag);(o||r)&&(c.a.util.warn("".concat(o?i.tag:i.componentOptions.tag," is not allowed inside the ").concat(n.$options.name," component"),n),t.splice(a,1))})},u=["ActionButton","ActionCheckbox","ActionInput","ActionLink","ActionRadio","ActionRouter","ActionText","ActionTextEditable"],d={name:"Actions",directives:{ClickOutside:i.directive,tooltip:a.default},props:{open:{type:Boolean,default:!1},menuAlign:{type:String,default:"center",validator:function(t){return["left","center","right"].indexOf(t)>-1}}},data:function(){return{actions:[],opened:this.open,focusIndex:0,randomId:"menu-"+Object(o.a)(),offsetX:0,children:this.$children}},computed:{hasMultipleActions:function(){return this.actions.length>1},isValidSingleAction:function(){return 1===this.actions.length&&null!==this.firstActionElement},firstActionVNode:function(){return this.actions[0]},firstAction:function(){return this.children[0]?this.children[0]:{}},firstActionBinding:function(){if(this.firstActionVNode&&this.firstActionVNode.componentOptions){var t=this.firstActionVNode.componentOptions.tag;if("ActionLink"===t)return{is:"a",href:this.firstAction.href,target:this.firstAction.target};if("ActionRouter"===t)return{is:"router-link",to:this.firstAction.to,exact:this.firstAction.exact};if("ActionButton"===t)return{is:"button"}}return null},firstActionEvent:function(){return this.firstActionVNode&&this.firstActionVNode.componentOptions&&this.firstActionVNode.componentOptions.listeners&&this.firstActionVNode.componentOptions.listeners.click},firstActionEventBinding:function(){return this.firstActionEvent?"click":null},firstActionClass:function(){var t=this.firstActionVNode&&this.firstActionVNode.data.staticClass,e=this.firstActionVNode&&this.firstActionVNode.data.class;return"".concat(t," ").concat(e)}},watch:{open:function(t){var e=this;this.opened=t,this.opened&&this.$nextTick(function(){e.onOpen()})}},beforeMount:function(){this.initActions(),l(this.$slots.default,u,this)},beforeUpdate:function(){this.initActions(),l(this.$slots.default,u,this)},methods:{toggleMenu:function(){var t=this;this.opened=!this.opened,this.opened?(this.$nextTick(function(){t.onOpen(),t.focusFirstAction()}),this.$emit("open")):this.offsetX=0,this.$emit("update:open",this.opened)},closeMenu:function(){this.opened&&(this.$emit("update:open",!1),this.$emit("close")),this.opened=!1,this.offsetX=0},onOpen:function(){this.offsetX=0;var t=r(this.$refs.menu);t.any&&(this.offsetX=t.offsetX>0?Math.round(t.offsetX)+5:Math.round(t.offsetX)-5)},onMouseFocusAction:function(t){if(document.activeElement!==t.target){var e=t.target.closest("li");if(e){var n=e.querySelector(".focusable");if(n){var i=this.$refs.menu.querySelectorAll(".focusable"),a=Array.prototype.indexOf.call(i,n);a>-1&&(this.focusIndex=a,this.focusAction())}}}},removeCurrentActive:function(){var t=this.$refs.menu.querySelector("li.active");t&&t.classList.remove("active")},focusAction:function(){var t=this.$refs.menu.querySelectorAll(".focusable")[this.focusIndex];if(t){var e=t.closest("li");t.focus(),e&&(this.removeCurrentActive(),e.classList.add("active"))}},focusPreviousAction:function(){this.focusIndex=Math.max(this.focusIndex-1,0),this.focusAction()},focusNextAction:function(){this.focusIndex=Math.min(this.focusIndex+1,this.$refs.menu.querySelectorAll(".focusable").length-1),this.focusAction()},focusFirstAction:function(){this.focusIndex=0,this.focusAction()},focusLastAction:function(){this.focusIndex=this.$el.querySelectorAll(".focusable").length-1,this.focusAction()},execFirstAction:function(t){this.firstActionEvent&&this.firstActionEvent(t)},initActions:function(){this.actions=(this.$slots.default||[]).filter(function(t){return!!t&&!!t.componentOptions})}}},p=(n(82),n(0)),f=n(25),h=n.n(f),A=Object(p.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isValidSingleAction?n("element",t._b({directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.firstAction.text,expression:"firstAction.text",modifiers:{auto:!0}}],staticClass:"action-item action-item--single",class:[t.firstAction.icon,t.firstActionClass],attrs:{"aria-label":t.firstAction.text,rel:"noreferrer noopener"},on:t._d({},[t.firstActionEventBinding,t.execFirstAction])},"element",t.firstActionBinding,!1),[n("span",{attrs:{"aria-hidden":!0,hidden:""}},[t._t("default")],2)]):n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasMultipleActions,expression:"hasMultipleActions"}],staticClass:"action-item",class:{"action-item--open":t.opened},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusPreviousAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusNextAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:e.shiftKey?(e.preventDefault(),t.focusPreviousAction(e)):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"page-up",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusFirstAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"page-down",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusLastAction(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.closeMenu(e))}]}},[n("a",{staticClass:"icon action-item__menutoggle",attrs:{href:"#","aria-haspopup":"true","aria-controls":t.randomId,"aria-expanded":t.opened},on:{click:function(e){return e.preventDefault(),t.toggleMenu(e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.toggleMenu(e))}}}),t._v(" "),t.opened?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],ref:"menu",staticClass:"action-item__menu",class:["menu-"+t.menuAlign,{open:t.opened}],style:{marginRight:t.offsetX+"px"},attrs:{tabindex:"-1"},on:{mousemove:t.onMouseFocusAction}},[n("div",{staticClass:"action-item__menu_arrow",style:{transform:"translateX("+t.offsetX+"px)"}}),t._v(" "),n("ul",{attrs:{id:t.randomId,tabindex:"-1"}},[t._t("default")],2)]):t._e()])},[],!1,null,"1b35df2f",null);"function"==typeof h.a&&h()(A);var v=A.exports;n.d(e,"Actions",function(){return v});
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=v},function(t,e,n){window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var i;!function(a){"use strict";var o={},r=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,s=/\d\d?/,c=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,l=/\[([^]*?)\]/gm,u=function(){};function d(t,e){for(var n=[],i=0,a=t.length;i<a;i++)n.push(t[i].substr(0,e));return n}function p(t){return function(e,n,i){var a=i[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~a&&(e.month=a)}}function f(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],A=["January","February","March","April","May","June","July","August","September","October","November","December"],v=d(A,3),m=d(h,3);o.i18n={dayNamesShort:m,dayNames:h,monthNamesShort:v,monthNames:A,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var b={D:function(t){return t.getDate()},DD:function(t){return f(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return f(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return f(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return String(t.getFullYear()).substr(2)},YYYY:function(t){return f(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return f(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return f(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return f(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return f(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return f(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return f(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+f(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},g={D:[s,function(t,e){t.day=e}],Do:[new RegExp(s.source+c.source),function(t,e){t.day=parseInt(e,10)}],M:[s,function(t,e){t.month=e-1}],YY:[s,function(t,e){var n=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?n-1:n)+e}],h:[s,function(t,e){t.hour=e}],m:[s,function(t,e){t.minute=e}],s:[s,function(t,e){t.second=e}],YYYY:[/\d{4}/,function(t,e){t.year=e}],S:[/\d/,function(t,e){t.millisecond=100*e}],SS:[/\d{2}/,function(t,e){t.millisecond=10*e}],SSS:[/\d{3}/,function(t,e){t.millisecond=e}],d:[s,u],ddd:[c,u],MMM:[c,p("monthNamesShort")],MMMM:[c,p("monthNames")],a:[c,function(t,e,n){var i=e.toLowerCase();i===n.amPm[0]?t.isPm=!1:i===n.amPm[1]&&(t.isPm=!0)}],ZZ:[/([\+\-]\d\d:?\d\d|Z)/,function(t,e){"Z"===e&&(e="+00:00");var n,i=(e+"").match(/([\+\-]|\d\d)/gi);i&&(n=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?n:-n)}]};g.dd=g.d,g.dddd=g.ddd,g.DD=g.D,g.mm=g.m,g.hh=g.H=g.HH=g.h,g.MM=g.M,g.ss=g.s,g.A=g.a,o.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},o.format=function(t,e,n){var i=n||o.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");var a=[];return(e=(e=(e=o.masks[e]||e||o.masks.default).replace(l,function(t,e){return a.push(e),"??"})).replace(r,function(e){return e in b?b[e](t,i):e.slice(1,e.length-1)})).replace(/\?\?/g,function(){return a.shift()})},o.parse=function(t,e,n){var i=n||o.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=o.masks[e]||e,t.length>1e3)return!1;var a=!0,s={};if(e.replace(r,function(e){if(g[e]){var n=g[e],o=t.search(n[0]);~o?t.replace(n[0],function(e){return n[1](s,e,i),t=t.substr(o+e.length),e}):a=!1}return g[e]?"":e.slice(1,e.length-1)}),!a)return!1;var c,l=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,c=new Date(Date.UTC(s.year||l.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):c=new Date(s.year||l.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),c},void 0!==t&&t.exports?t.exports=o:void 0===(i=function(){return o}.call(e,n,e,t))||(t.exports=i)}()},function(t,e){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function i(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce(function(t,e){var a,o,r,s,c;for(r in e)if(a=t[r],o=e[r],a&&n.test(r))if("class"===r&&("string"==typeof a&&(c=a,t[r]=a={},a[c]=!0),"string"==typeof o&&(c=o,e[r]=o={},o[c]=!0)),"on"===r||"nativeOn"===r||"hook"===r)for(s in o)a[s]=i(a[s],o[s]);else if(Array.isArray(a))t[r]=a.concat(o);else if(Array.isArray(o))t[r]=[a].concat(o);else for(s in o)a[s]=o[s];else t[r]=e[r];return t},{})}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],r=o[0],s={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(s):n.push(i[r]={id:r,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,a){l=n,d=a||{};var r=i(t,e);return A(r),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a];(c=o[s.id]).refs--,n.push(c)}for(e?A(r=i(t,e)):r=[],a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete o[c.id]}}}}function A(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(m(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var r=[];for(a=0;a<n.parts.length;a++)r.push(m(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(f){var a=c++;i=s||(s=v()),e=y.bind(null,i,a,!1),n=y.bind(null,i,a,!0)}else i=v(),e=function(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),d.ssrId&&t.setAttribute(p,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function y(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i);function o(t){return"[object Object]"===Object.prototype.toString.call(t)}function r(t){return t instanceof Date}function s(t){return null!=t&&!isNaN(new Date(t).getTime())}function c(t){var e=(t||"").split(":");return e.length>=2?{hours:parseInt(e[0],10),minutes:parseInt(e[1],10)}:null}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"24",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"a",i=t.hours,a=(i=(i="24"===e?i:i%12||12)<10?"0"+i:i)+":"+(t.minutes<10?"0"+t.minutes:t.minutes);if("12"===e){var o=t.hours>=12?"pm":"am";"A"===n&&(o=o.toUpperCase()),a=a+" "+o}return a}function u(t,e){if(!t)return"";try{return a.a.format(new Date(t),e)}catch(t){return""}}var d={date:{value2date:function(t){return s(t)?new Date(t):null},date2value:function(t){return t}},timestamp:{value2date:function(t){return s(t)?new Date(t):null},date2value:function(t){return t&&new Date(t).getTime()}}},p={zh:{days:["日","一","二","三","四","五","六"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],pickers:["未来7天","未来30天","最近7天","最近30天"],placeholder:{date:"请选择日期",dateRange:"请选择日期范围"}},en:{days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pickers:["next 7 days","next 30 days","previous 7 days","previous 30 days"],placeholder:{date:"Select Date",dateRange:"Select Date Range"}},ro:{days:["Lun","Mar","Mie","Joi","Vin","Sâm","Dum"],months:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec"],pickers:["urmatoarele 7 zile","urmatoarele 30 zile","ultimele 7 zile","ultimele 30 zile"],placeholder:{date:"Selectați Data",dateRange:"Selectați Intervalul De Date"}},fr:{days:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],months:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sep","Oct","Nov","Dec"],pickers:["7 jours suivants","30 jours suivants","7 jours précédents","30 jours précédents"],placeholder:{date:"Sélectionnez une date",dateRange:"Sélectionnez une période"}},es:{days:["Dom","Lun","mar","Mie","Jue","Vie","Sab"],months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],pickers:["próximos 7 días","próximos 30 días","7 días anteriores","30 días anteriores"],placeholder:{date:"Seleccionar fecha",dateRange:"Seleccionar un rango de fechas"}},"pt-br":{days:["Dom","Seg","Ter","Qua","Quin","Sex","Sáb"],months:["Jan","Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"],pickers:["próximos 7 dias","próximos 30 dias","7 dias anteriores"," 30 dias anteriores"],placeholder:{date:"Selecione uma data",dateRange:"Selecione um período"}},ru:{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],pickers:["след. 7 дней","след. 30 дней","прош. 7 дней","прош. 30 дней"],placeholder:{date:"Выберите дату",dateRange:"Выберите период"}},de:{days:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],pickers:["nächsten 7 Tage","nächsten 30 Tage","vorigen 7 Tage","vorigen 30 Tage"],placeholder:{date:"Datum auswählen",dateRange:"Zeitraum auswählen"}},it:{days:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],pickers:["successivi 7 giorni","successivi 30 giorni","precedenti 7 giorni","precedenti 30 giorni"],placeholder:{date:"Seleziona una data",dateRange:"Seleziona un intervallo date"}},cs:{days:["Ned","Pon","Úte","Stř","Čtv","Pát","Sob"],months:["Led","Úno","Bře","Dub","Kvě","Čer","Čerc","Srp","Zář","Říj","Lis","Pro"],pickers:["příštích 7 dní","příštích 30 dní","předchozích 7 dní","předchozích 30 dní"],placeholder:{date:"Vyberte datum",dateRange:"Vyberte časové rozmezí"}},sl:{days:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],pickers:["naslednjih 7 dni","naslednjih 30 dni","prejšnjih 7 dni","prejšnjih 30 dni"],placeholder:{date:"Izberite datum",dateRange:"Izberite razpon med 2 datumoma"}}},f=p.zh,h={methods:{t:function(t){for(var e=this,n=e.$options.name;e&&(!n||"DatePicker"!==n);)(e=e.$parent)&&(n=e.$options.name);for(var i=e&&e.language||f,a=t.split("."),o=i,r=void 0,s=0,c=a.length;s<c;s++){if(r=o[a[s]],s===c-1)return r;if(!r)return"";o=r}return""}}};function A(t,e){if(e){for(var n=[],i=e.offsetParent;i&&t!==i&&t.contains(i);)n.push(i),i=i.offsetParent;var a=e.offsetTop+n.reduce(function(t,e){return t+e.offsetTop},0),o=a+e.offsetHeight,r=t.scrollTop,s=r+t.clientHeight;a<r?t.scrollTop=a:o>s&&(t.scrollTop=o-t.clientHeight)}else t.scrollTop=0}var v=n(1),m=n.n(v),b={name:"panelDate",mixins:[h],props:{value:null,startAt:null,endAt:null,dateFormat:{type:String,default:"YYYY-MM-DD"},calendarMonth:{default:(new Date).getMonth()},calendarYear:{default:(new Date).getFullYear()},firstDayOfWeek:{default:7,type:Number,validator:function(t){return t>=1&&t<=7}},disabledDate:{type:Function,default:function(){return!1}}},methods:{selectDate:function(t){var e=t.year,n=t.month,i=t.day,a=new Date(e,n,i);this.disabledDate(a)||this.$emit("select",a)},getDays:function(t){var e=this.t("days"),n=parseInt(t,10);return e.concat(e).slice(n,n+7)},getDates:function(t,e,n){var i=[],a=new Date(t,e);a.setDate(0);for(var o=(a.getDay()+7-n)%7+1,r=a.getDate()-(o-1),s=0;s<o;s++)i.push({year:t,month:e-1,day:r+s});a.setMonth(a.getMonth()+2,0);for(var c=a.getDate(),l=0;l<c;l++)i.push({year:t,month:e,day:1+l});a.setMonth(a.getMonth()+1,1);for(var u=42-(o+c),d=0;d<u;d++)i.push({year:t,month:e+1,day:1+d});return i},getCellClasses:function(t){var e=t.year,n=t.month,i=t.day,a=[],o=new Date(e,n,i).getTime(),r=(new Date).setHours(0,0,0,0),s=this.value&&new Date(this.value).setHours(0,0,0,0),c=this.startAt&&new Date(this.startAt).setHours(0,0,0,0),l=this.endAt&&new Date(this.endAt).setHours(0,0,0,0);return n<this.calendarMonth?a.push("last-month"):n>this.calendarMonth?a.push("next-month"):a.push("cur-month"),o===r&&a.push("today"),this.disabledDate(o)&&a.push("disabled"),s&&(o===s?a.push("actived"):c&&o<=s?a.push("inrange"):l&&o>=s&&a.push("inrange")),a},getCellTitle:function(t){var e=t.year,n=t.month,i=t.day;return u(new Date(e,n,i),this.dateFormat)}},render:function(t){var e=this,n=this.getDays(this.firstDayOfWeek).map(function(e){return t("th",[e])}),i=this.getDates(this.calendarYear,this.calendarMonth,this.firstDayOfWeek),a=Array.apply(null,{length:6}).map(function(n,a){var o=i.slice(7*a,7*a+7).map(function(n){var i={class:e.getCellClasses(n)};return t("td",m()([{class:"cell"},i,{attrs:{"data-year":n.year,"data-month":n.month,title:e.getCellTitle(n)},on:{click:e.selectDate.bind(e,n)}}]),[n.day])});return t("tr",[o])});return t("table",{class:"mx-panel mx-panel-date"},[t("thead",[t("tr",[n])]),t("tbody",[a])])}},g={name:"panelYear",props:{value:null,firstYear:Number,disabledYear:Function},methods:{isDisabled:function(t){return!("function"!=typeof this.disabledYear||!this.disabledYear(t))},selectYear:function(t){this.isDisabled(t)||this.$emit("select",t)}},render:function(t){var e=this,n=10*Math.floor(this.firstYear/10),i=this.value&&new Date(this.value).getFullYear(),a=Array.apply(null,{length:10}).map(function(a,o){var r=n+o;return t("span",{class:{cell:!0,actived:i===r,disabled:e.isDisabled(r)},on:{click:e.selectYear.bind(e,r)}},[r])});return t("div",{class:"mx-panel mx-panel-year"},[a])}},y={name:"panelMonth",mixins:[h],props:{value:null,calendarYear:{default:(new Date).getFullYear()},disabledMonth:Function},methods:{isDisabled:function(t){return!("function"!=typeof this.disabledMonth||!this.disabledMonth(t))},selectMonth:function(t){this.isDisabled(t)||this.$emit("select",t)}},render:function(t){var e=this,n=this.t("months"),i=this.value&&new Date(this.value).getFullYear(),a=this.value&&new Date(this.value).getMonth();return n=n.map(function(n,o){return t("span",{class:{cell:!0,actived:i===e.calendarYear&&a===o,disabled:e.isDisabled(o)},on:{click:e.selectMonth.bind(e,o)}},[n])}),t("div",{class:"mx-panel mx-panel-month"},[n])}},x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function _(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function T(t,e,n,i,a,o,r,s){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}var k=T({name:"CalendarPanel",components:{PanelDate:b,PanelYear:g,PanelMonth:y,PanelTime:{name:"panelTime",props:{timePickerOptions:{type:[Object,Function],default:function(){return null}},timeSelectOptions:{type:Object,default:function(){return null}},minuteStep:{type:Number,default:0,validator:function(t){return t>=0&&t<=60}},value:null,timeType:{type:Array,default:function(){return["24","a"]}},disabledTime:Function},computed:{currentHours:function(){return this.value?new Date(this.value).getHours():0},currentMinutes:function(){return this.value?new Date(this.value).getMinutes():0},currentSeconds:function(){return this.value?new Date(this.value).getSeconds():0}},methods:{stringifyText:function(t){return("00"+t).slice(String(t).length)},selectTime:function(t){"function"==typeof this.disabledTime&&this.disabledTime(t)||this.$emit("select",new Date(t))},pickTime:function(t){"function"==typeof this.disabledTime&&this.disabledTime(t)||this.$emit("pick",new Date(t))},getTimePickerOptions:function(){var t=[],e=this.timePickerOptions;if(!e)return[];if("function"==typeof e)return e()||[];var n=c(e.start),i=c(e.end),a=c(e.step);if(n&&i&&a)for(var o=n.minutes+60*n.hours,r=i.minutes+60*i.hours,s=a.minutes+60*a.hours,u=Math.floor((r-o)/s),d=0;d<=u;d++){var p=o+d*s,f={hours:Math.floor(p/60),minutes:p%60};t.push({value:f,label:l.apply(void 0,[f].concat(_(this.timeType)))})}return t}},render:function(t){var e=this,n=this.value?new Date(this.value):(new Date).setHours(0,0,0,0),i="function"==typeof this.disabledTime&&this.disabledTime,a=this.getTimePickerOptions();if(Array.isArray(a)&&a.length)return a=a.map(function(a){var o=a.value.hours,r=a.value.minutes,s=new Date(n).setHours(o,r,0);return t("li",{class:{"mx-time-picker-item":!0,cell:!0,actived:o===e.currentHours&&r===e.currentMinutes,disabled:i&&i(s)},on:{click:e.pickTime.bind(e,s)}},[a.label])}),t("div",{class:"mx-panel mx-panel-time"},[t("ul",{class:"mx-time-list"},[a])]);var o=this.minuteStep||1,r=parseInt(60/o),s={hours:Array.apply(null,{length:24}).map(function(t,e){return e}),minutes:Array.apply(null,{length:r}).map(function(t,e){return e*o}),seconds:0===this.minuteStep?Array.apply(null,{length:60}).map(function(t,e){return e}):[]};this.timeSelectOptions&&"object"===w(this.timeSelectOptions)&&(s=x({},s,this.timeSelectOptions));var c=[s.hours.map(function(a){var o=new Date(n).setHours(a);return t("li",{class:{cell:!0,actived:a===e.currentHours,disabled:i&&i(o)},on:{click:e.selectTime.bind(e,o)}},[e.stringifyText(a)])}),s.minutes.map(function(a){var o=new Date(n).setMinutes(a);return t("li",{class:{cell:!0,actived:a===e.currentMinutes,disabled:i&&i(o)},on:{click:e.selectTime.bind(e,o)}},[e.stringifyText(a)])}),s.seconds.map(function(a){var o=new Date(n).setSeconds(a);return t("li",{class:{cell:!0,actived:a===e.currentSeconds,disabled:i&&i(o)},on:{click:e.selectTime.bind(e,o)}},[e.stringifyText(a)])})].filter(function(t){return t.length>0});return c=c.map(function(e){return t("ul",{class:"mx-time-list",style:{width:100/c.length+"%"}},[e])}),t("div",{class:"mx-panel mx-panel-time"},[c])}}},mixins:[h,{methods:{dispatch:function(t,e,n){for(var i=this.$parent||this.$root,a=i.$options.name;i&&(!a||a!==t);)(i=i.$parent)&&(a=i.$options.name);a&&a===t&&(i=i||this).$emit.apply(i,[e].concat(n))}}}],props:{value:{default:null,validator:function(t){return null===t||s(t)}},startAt:null,endAt:null,visible:{type:Boolean,default:!1},type:{type:String,default:"date"},dateFormat:{type:String,default:"YYYY-MM-DD"},index:Number,defaultValue:{validator:function(t){return s(t)}},firstDayOfWeek:{default:7,type:Number,validator:function(t){return t>=1&&t<=7}},notBefore:{default:null,validator:function(t){return!t||s(t)}},notAfter:{default:null,validator:function(t){return!t||s(t)}},disabledDays:{type:[Array,Function],default:function(){return[]}},minuteStep:{type:Number,default:0,validator:function(t){return t>=0&&t<=60}},timeSelectOptions:{type:Object,default:function(){return null}},timePickerOptions:{type:[Object,Function],default:function(){return null}}},data:function(){var t=this.getNow(this.value),e=t.getFullYear();return{panel:"NONE",dates:[],calendarMonth:t.getMonth(),calendarYear:e,firstYear:10*Math.floor(e/10)}},computed:{now:{get:function(){return new Date(this.calendarYear,this.calendarMonth).getTime()},set:function(t){var e=new Date(t);this.calendarYear=e.getFullYear(),this.calendarMonth=e.getMonth()}},timeType:function(){return[/h+/.test(this.$parent.format)?"12":"24",/A/.test(this.$parent.format)?"A":"a"]},timeHeader:function(){return"time"===this.type?this.$parent.format:this.value&&u(this.value,this.dateFormat)},yearHeader:function(){return this.firstYear+" ~ "+(this.firstYear+9)},months:function(){return this.t("months")},notBeforeTime:function(){return this.getCriticalTime(this.notBefore)},notAfterTime:function(){return this.getCriticalTime(this.notAfter)}},watch:{value:{immediate:!0,handler:"updateNow"},visible:{immediate:!0,handler:"init"},panel:{handler:"handelPanelChange"}},methods:{handelPanelChange:function(t,e){var n=this;this.dispatch("DatePicker","panel-change",[t,e]),"YEAR"===t?this.firstYear=10*Math.floor(this.calendarYear/10):"TIME"===t&&this.$nextTick(function(){for(var t=n.$el.querySelectorAll(".mx-panel-time .mx-time-list"),e=0,i=t.length;e<i;e++){var a=t[e];A(a,a.querySelector(".actived"))}})},init:function(t){if(t){var e=this.type;"month"===e?this.showPanelMonth():"year"===e?this.showPanelYear():"time"===e?this.showPanelTime():this.showPanelDate()}else this.showPanelNone(),this.updateNow(this.value)},getNow:function(t){return t?new Date(t):this.defaultValue&&s(this.defaultValue)?new Date(this.defaultValue):new Date},updateNow:function(t){var e=this.now;this.now=this.getNow(t),this.visible&&this.now!==e&&this.dispatch("DatePicker","calendar-change",[new Date(this.now),new Date(e)])},getCriticalTime:function(t){if(!t)return null;var e=new Date(t);return"year"===this.type?new Date(e.getFullYear(),0).getTime():"month"===this.type?new Date(e.getFullYear(),e.getMonth()).getTime():"date"===this.type?e.setHours(0,0,0,0):e.getTime()},inBefore:function(t,e){return void 0===e&&(e=this.startAt),this.notBeforeTime&&t<this.notBeforeTime||e&&t<this.getCriticalTime(e)},inAfter:function(t,e){return void 0===e&&(e=this.endAt),this.notAfterTime&&t>this.notAfterTime||e&&t>this.getCriticalTime(e)},inDisabledDays:function(t){var e=this;return Array.isArray(this.disabledDays)?this.disabledDays.some(function(n){return e.getCriticalTime(n)===t}):"function"==typeof this.disabledDays&&this.disabledDays(new Date(t))},isDisabledYear:function(t){var e=new Date(t,0).getTime(),n=new Date(t+1,0).getTime()-1;return this.inBefore(n)||this.inAfter(e)||"year"===this.type&&this.inDisabledDays(e)},isDisabledMonth:function(t){var e=new Date(this.calendarYear,t).getTime(),n=new Date(this.calendarYear,t+1).getTime()-1;return this.inBefore(n)||this.inAfter(e)||"month"===this.type&&this.inDisabledDays(e)},isDisabledDate:function(t){var e=new Date(t).getTime(),n=new Date(t).setHours(23,59,59,999);return this.inBefore(n)||this.inAfter(e)||this.inDisabledDays(e)},isDisabledTime:function(t,e,n){var i=new Date(t).getTime();return this.inBefore(i,e)||this.inAfter(i,n)||this.inDisabledDays(i)},selectDate:function(t){if("datetime"===this.type){var e=new Date(t);return r(this.value)&&e.setHours(this.value.getHours(),this.value.getMinutes(),this.value.getSeconds()),this.isDisabledTime(e)&&(e.setHours(0,0,0,0),this.notBefore&&e.getTime()<new Date(this.notBefore).getTime()&&(e=new Date(this.notBefore)),this.startAt&&e.getTime()<new Date(this.startAt).getTime()&&(e=new Date(this.startAt))),this.selectTime(e),void this.showPanelTime()}this.$emit("select-date",t)},selectYear:function(t){if(this.changeCalendarYear(t),"year"===this.type.toLowerCase())return this.selectDate(new Date(this.now));this.dispatch("DatePicker","select-year",[t,this.index]),this.showPanelMonth()},selectMonth:function(t){if(this.changeCalendarMonth(t),"month"===this.type.toLowerCase())return this.selectDate(new Date(this.now));this.dispatch("DatePicker","select-month",[t,this.index]),this.showPanelDate()},selectTime:function(t){this.$emit("select-time",t,!1)},pickTime:function(t){this.$emit("select-time",t,!0)},changeCalendarYear:function(t){this.updateNow(new Date(t,this.calendarMonth))},changeCalendarMonth:function(t){this.updateNow(new Date(this.calendarYear,t))},getSibling:function(){var t=this,e=this.$parent.$children.filter(function(e){return e.$options.name===t.$options.name});return e[1^e.indexOf(this)]},handleIconMonth:function(t){var e=this.calendarMonth;this.changeCalendarMonth(e+t),this.$parent.$emit("change-calendar-month",{month:e,flag:t,vm:this,sibling:this.getSibling()})},handleIconYear:function(t){if("YEAR"===this.panel)this.changePanelYears(t);else{var e=this.calendarYear;this.changeCalendarYear(e+t),this.$parent.$emit("change-calendar-year",{year:e,flag:t,vm:this,sibling:this.getSibling()})}},handleBtnYear:function(){this.showPanelYear()},handleBtnMonth:function(){this.showPanelMonth()},handleTimeHeader:function(){"time"!==this.type&&this.showPanelDate()},changePanelYears:function(t){this.firstYear=this.firstYear+10*t},showPanelNone:function(){this.panel="NONE"},showPanelTime:function(){this.panel="TIME"},showPanelDate:function(){this.panel="DATE"},showPanelYear:function(){this.panel="YEAR"},showPanelMonth:function(){this.panel="MONTH"}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-calendar",class:"mx-calendar-panel-"+t.panel.toLowerCase()},[n("div",{staticClass:"mx-calendar-header"},[n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"!==t.panel,expression:"panel !== 'TIME'"}],staticClass:"mx-icon-last-year",on:{click:function(e){t.handleIconYear(-1)}}},[t._v("«")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"DATE"===t.panel,expression:"panel === 'DATE'"}],staticClass:"mx-icon-last-month",on:{click:function(e){t.handleIconMonth(-1)}}},[t._v("‹")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"!==t.panel,expression:"panel !== 'TIME'"}],staticClass:"mx-icon-next-year",on:{click:function(e){t.handleIconYear(1)}}},[t._v("»")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"DATE"===t.panel,expression:"panel === 'DATE'"}],staticClass:"mx-icon-next-month",on:{click:function(e){t.handleIconMonth(1)}}},[t._v("›")]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"DATE"===t.panel,expression:"panel === 'DATE'"}],staticClass:"mx-current-month",on:{click:t.handleBtnMonth}},[t._v(t._s(t.months[t.calendarMonth]))]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"DATE"===t.panel||"MONTH"===t.panel,expression:"panel === 'DATE' || panel === 'MONTH'"}],staticClass:"mx-current-year",on:{click:t.handleBtnYear}},[t._v(t._s(t.calendarYear))]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"YEAR"===t.panel,expression:"panel === 'YEAR'"}],staticClass:"mx-current-year"},[t._v(t._s(t.yearHeader))]),t._v(" "),n("a",{directives:[{name:"show",rawName:"v-show",value:"TIME"===t.panel,expression:"panel === 'TIME'"}],staticClass:"mx-time-header",on:{click:t.handleTimeHeader}},[t._v(t._s(t.timeHeader))])]),t._v(" "),n("div",{staticClass:"mx-calendar-content"},[n("panel-date",{directives:[{name:"show",rawName:"v-show",value:"DATE"===t.panel,expression:"panel === 'DATE'"}],attrs:{value:t.value,"date-format":t.dateFormat,"calendar-month":t.calendarMonth,"calendar-year":t.calendarYear,"start-at":t.startAt,"end-at":t.endAt,"first-day-of-week":t.firstDayOfWeek,"disabled-date":t.isDisabledDate},on:{select:t.selectDate}}),t._v(" "),n("panel-year",{directives:[{name:"show",rawName:"v-show",value:"YEAR"===t.panel,expression:"panel === 'YEAR'"}],attrs:{value:t.value,"disabled-year":t.isDisabledYear,"first-year":t.firstYear},on:{select:t.selectYear}}),t._v(" "),n("panel-month",{directives:[{name:"show",rawName:"v-show",value:"MONTH"===t.panel,expression:"panel === 'MONTH'"}],attrs:{value:t.value,"disabled-month":t.isDisabledMonth,"calendar-year":t.calendarYear},on:{select:t.selectMonth}}),t._v(" "),n("panel-time",{directives:[{name:"show",rawName:"v-show",value:"TIME"===t.panel,expression:"panel === 'TIME'"}],attrs:{"minute-step":t.minuteStep,"time-picker-options":t.timePickerOptions,"time-select-options":t.timeSelectOptions,value:t.value,"disabled-time":t.isDisabledTime,"time-type":t.timeType},on:{select:t.selectTime,pick:t.pickTime}})],1)])},[],!1,null,null,null).exports,C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},E=T({fecha:a.a,name:"DatePicker",components:{CalendarPanel:k},mixins:[h],props:{value:null,valueType:{default:"date",validator:function(t){return-1!==["timestamp","format","date"].indexOf(t)||o(t)}},placeholder:{type:String,default:null},lang:{type:[String,Object],default:"zh"},format:{type:[String,Object],default:"YYYY-MM-DD"},dateFormat:{type:String},type:{type:String,default:"date"},range:{type:Boolean,default:!1},rangeSeparator:{type:String,default:"~"},width:{type:[String,Number],default:null},confirmText:{type:String,default:"OK"},confirm:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},shortcuts:{type:[Boolean,Array],default:!0},inputName:{type:String,default:"date"},inputClass:{type:[String,Array],default:"mx-input"},inputAttr:Object,appendToBody:{type:Boolean,default:!1},popupStyle:{type:Object},iconDay:{type:[Number,String]}},data:function(){return{currentValue:this.range?[null,null]:null,userInput:null,popupVisible:!1,position:{}}},watch:{value:{immediate:!0,handler:"handleValueChange"},popupVisible:function(t){t?this.initCalendar():(this.userInput=null,this.blur())}},computed:{transform:function(){var t=this.valueType;return o(t)?C({},d.date,t):"format"===t?{value2date:this.parse.bind(this),date2value:this.stringify.bind(this)}:d[t]||d.date},language:function(){return o(this.lang)?C({},p.en,this.lang):p[this.lang]||p.en},innerPlaceholder:function(){return"string"==typeof this.placeholder?this.placeholder:this.range?this.t("placeholder.dateRange"):this.t("placeholder.date")},text:function(){if(null!==this.userInput)return this.userInput;var t=this.transform.value2date;return this.range?this.isValidRangeValue(this.value)?this.stringify(t(this.value[0]))+" "+this.rangeSeparator+" "+this.stringify(t(this.value[1])):"":this.isValidValue(this.value)?this.stringify(t(this.value)):""},computedWidth:function(){return"number"==typeof this.width||"string"==typeof this.width&&/^\d+$/.test(this.width)?this.width+"px":this.width},showClearIcon:function(){return!this.disabled&&this.clearable&&(this.range?this.isValidRangeValue(this.value):this.isValidValue(this.value))},innerType:function(){return String(this.type).toLowerCase()},innerShortcuts:function(){if(Array.isArray(this.shortcuts))return this.shortcuts;if(!1===this.shortcuts)return[];var t=this.t("pickers");return[{text:t[0],onClick:function(t){t.currentValue=[new Date,new Date(Date.now()+6048e5)],t.updateDate(!0)}},{text:t[1],onClick:function(t){t.currentValue=[new Date,new Date(Date.now()+2592e6)],t.updateDate(!0)}},{text:t[2],onClick:function(t){t.currentValue=[new Date(Date.now()-6048e5),new Date],t.updateDate(!0)}},{text:t[3],onClick:function(t){t.currentValue=[new Date(Date.now()-2592e6),new Date],t.updateDate(!0)}}]},innerDateFormat:function(){return this.dateFormat?this.dateFormat:"string"!=typeof this.format?"YYYY-MM-DD":"date"===this.innerType?this.format:this.format.replace(/[Hh]+.*[msSaAZ]|\[.*?\]/g,"").trim()||"YYYY-MM-DD"},innerPopupStyle:function(){return C({},this.position,this.popupStyle)}},mounted:function(){var t=this;this.appendToBody&&(this.popupElm=this.$refs.calendar,document.body.appendChild(this.popupElm));var e,n,i,a,o=void 0;this._bindDocmentMousedown=function(t){o=t.target},this._bindDocumentMouseup=function(e){var n=e.target,i=t.$el,a=t.popupElm;!o||!n||i.contains(o)||i.contains(n)||a&&(a.contains(o)||a.contains(n))||(t.closePopup(),o=null)},document.addEventListener("mousedown",this._bindDocmentMousedown),document.addEventListener("mouseup",this._bindDocumentMouseup),this._displayPopup=(e=function(){t.popupVisible&&t.displayPopup()},n=200,i=0,a=null,function(){var t=this;if(!a){var o=arguments,r=function(){i=Date.now(),a=null,e.apply(t,o)};Date.now()-i>=n?r():a=setTimeout(r,n)}}),window.addEventListener("resize",this._displayPopup),window.addEventListener("scroll",this._displayPopup)},beforeDestroy:function(){this.popupElm&&this.popupElm.parentNode===document.body&&document.body.removeChild(this.popupElm),document.removeEventListener("mousedown",this._bindDocmentMousedown),document.removeEventListener("mouseup",this._bindDocumentMouseup),window.removeEventListener("resize",this._displayPopup),window.removeEventListener("scroll",this._displayPopup)},methods:{initCalendar:function(){this.handleValueChange(this.value),this.displayPopup()},stringify:function(t){return o(this.format)&&"function"==typeof this.format.stringify?this.format.stringify(t):u(t,this.format)},parse:function(t){return o(this.format)&&"function"==typeof this.format.parse?this.format.parse(t):function(t,e){try{return a.a.parse(t,e)||null}catch(t){return null}}(t,this.format)},isValidValue:function(t){return s((0,this.transform.value2date)(t))},isValidRangeValue:function(t){var e=this.transform.value2date;return Array.isArray(t)&&2===t.length&&this.isValidValue(t[0])&&this.isValidValue(t[1])&&e(t[1]).getTime()>=e(t[0]).getTime()},dateEqual:function(t,e){return r(t)&&r(e)&&t.getTime()===e.getTime()},rangeEqual:function(t,e){var n=this;return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every(function(t,i){return n.dateEqual(t,e[i])})},selectRange:function(t){"function"==typeof t.onClick?!1!==t.onClick(this)&&this.closePopup():(this.currentValue=[new Date(t.start),new Date(t.end)],this.updateDate(!0),this.closePopup())},clearDate:function(){var t=this.range?[null,null]:null;this.currentValue=t,this.updateDate(!0),this.$emit("clear")},confirmDate:function(){var t;(this.range?(t=this.currentValue,Array.isArray(t)&&2===t.length&&s(t[0])&&s(t[1])&&new Date(t[1]).getTime()>=new Date(t[0]).getTime()):s(this.currentValue))&&this.updateDate(!0),this.emitDate("confirm"),this.closePopup()},updateDate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!(this.confirm&&!t||this.disabled||(this.range?this.rangeEqual(this.value,this.currentValue):this.dateEqual(this.value,this.currentValue))||(this.emitDate("input"),this.emitDate("change"),0))},emitDate:function(t){var e=this.transform.date2value,n=this.range?this.currentValue.map(e):e(this.currentValue);this.$emit(t,n)},handleValueChange:function(t){var e=this.transform.value2date;this.range?this.currentValue=this.isValidRangeValue(t)?t.map(e):[null,null]:this.currentValue=this.isValidValue(t)?e(t):null},selectDate:function(t){this.currentValue=t,this.updateDate()&&this.closePopup()},selectStartDate:function(t){this.$set(this.currentValue,0,t),this.currentValue[1]&&this.updateDate()},selectEndDate:function(t){this.$set(this.currentValue,1,t),this.currentValue[0]&&this.updateDate()},selectTime:function(t,e){this.currentValue=t,this.updateDate()&&e&&this.closePopup()},selectStartTime:function(t){this.selectStartDate(t)},selectEndTime:function(t){this.selectEndDate(t)},showPopup:function(){this.disabled||(this.popupVisible=!0)},closePopup:function(){this.popupVisible=!1},getPopupSize:function(t){var e=t.style.display,n=t.style.visibility;t.style.display="block",t.style.visibility="hidden";var i=window.getComputedStyle(t),a={width:t.offsetWidth+parseInt(i.marginLeft)+parseInt(i.marginRight),height:t.offsetHeight+parseInt(i.marginTop)+parseInt(i.marginBottom)};return t.style.display=e,t.style.visibility=n,a},displayPopup:function(){var t=document.documentElement.clientWidth,e=document.documentElement.clientHeight,n=this.$el.getBoundingClientRect(),i=this._popupRect||(this._popupRect=this.getPopupSize(this.$refs.calendar)),a={},o=0,r=0;this.appendToBody&&(o=window.pageXOffset+n.left,r=window.pageYOffset+n.top),t-n.left<i.width&&n.right<i.width?a.left=o-n.left+1+"px":n.left+n.width/2<=t/2?a.left=o+"px":a.left=o+n.width-i.width+"px",n.top<=i.height&&e-n.bottom<=i.height?a.top=r+e-n.top-i.height+"px":n.top+n.height/2<=e/2?a.top=r+n.height+"px":a.top=r-i.height+"px",a.top===this.position.top&&a.left===this.position.left||(this.position=a)},blur:function(){this.$refs.input.blur()},handleBlur:function(t){this.$emit("blur",t)},handleFocus:function(t){this.popupVisible||this.showPopup(),this.$emit("focus",t)},handleKeydown:function(t){var e=t.keyCode;9!==e&&13!==e||(this.handleChange(),this.userInput=null,this.closePopup())},handleInput:function(t){this.userInput=t.target.value},handleChange:function(){if(this.editable&&null!==this.userInput){var t=this.text,e=this.$refs.calendarPanel.isDisabledTime;if(!t)return void this.clearDate();if(this.range){var n=t.split(" "+this.rangeSeparator+" ");if(2===n.length){var i=this.parse(n[0]),a=this.parse(n[1]);if(i&&a&&!e(i,null,a)&&!e(a,i,null))return this.currentValue=[i,a],this.updateDate(!0),void this.closePopup()}}else{var o=this.parse(t);if(o&&!e(o,null,null))return this.currentValue=o,this.updateDate(!0),void this.closePopup()}this.$emit("input-error",t)}}}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-datepicker",class:{"mx-datepicker-range":t.range,disabled:t.disabled},style:{width:t.computedWidth}},[n("div",{staticClass:"mx-input-wrapper",on:{click:function(e){return e.stopPropagation(),t.showPopup(e)}}},[n("input",t._b({ref:"input",class:t.inputClass,attrs:{name:t.inputName,type:"text",autocomplete:"off",disabled:t.disabled,readonly:!t.editable,placeholder:t.innerPlaceholder},domProps:{value:t.text},on:{keydown:t.handleKeydown,focus:t.handleFocus,blur:t.handleBlur,input:t.handleInput,change:t.handleChange}},"input",t.inputAttr,!1)),t._v(" "),t.showClearIcon?n("span",{staticClass:"mx-input-append mx-clear-wrapper",on:{click:function(e){return e.stopPropagation(),t.clearDate(e)}}},[t._t("mx-clear-icon",[n("i",{staticClass:"mx-input-icon mx-clear-icon"})])],2):t._e(),t._v(" "),n("span",{staticClass:"mx-input-append"},[t._t("calendar-icon",[n("svg",{staticClass:"mx-calendar-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 200 200"}},[n("rect",{attrs:{x:"13",y:"29",rx:"14",ry:"14",width:"174",height:"158",fill:"transparent"}}),t._v(" "),n("line",{attrs:{x1:"46",x2:"46",y1:"8",y2:"50"}}),t._v(" "),n("line",{attrs:{x1:"154",x2:"154",y1:"8",y2:"50"}}),t._v(" "),n("line",{attrs:{x1:"13",x2:"187",y1:"70",y2:"70"}}),t._v(" "),n("text",{attrs:{x:"50%",y:"135","font-size":"90","stroke-width":"1","text-anchor":"middle","dominant-baseline":"middle"}},[t._v(t._s(t.iconDay))])])])],2)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.popupVisible,expression:"popupVisible"}],ref:"calendar",staticClass:"mx-datepicker-popup",style:t.innerPopupStyle,on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},[t._t("header",[t.range&&t.innerShortcuts.length?n("div",{staticClass:"mx-shortcuts-wrapper"},t._l(t.innerShortcuts,function(e,i){return n("button",{key:i,staticClass:"mx-shortcuts",attrs:{type:"button"},on:{click:function(n){t.selectRange(e)}}},[t._v(t._s(e.text))])})):t._e()]),t._v(" "),t.range?n("div",{staticClass:"mx-range-wrapper"},[n("calendar-panel",t._b({ref:"calendarPanel",staticStyle:{"box-shadow":"1px 0 rgba(0, 0, 0, .1)"},attrs:{index:0,type:t.innerType,"date-format":t.innerDateFormat,value:t.currentValue[0],"end-at":t.currentValue[1],"start-at":null,visible:t.popupVisible},on:{"select-date":t.selectStartDate,"select-time":t.selectStartTime}},"calendar-panel",t.$attrs,!1)),t._v(" "),n("calendar-panel",t._b({attrs:{index:1,type:t.innerType,"date-format":t.innerDateFormat,value:t.currentValue[1],"start-at":t.currentValue[0],"end-at":null,visible:t.popupVisible},on:{"select-date":t.selectEndDate,"select-time":t.selectEndTime}},"calendar-panel",t.$attrs,!1))],1):n("calendar-panel",t._b({ref:"calendarPanel",attrs:{index:-1,type:t.innerType,"date-format":t.innerDateFormat,value:t.currentValue,visible:t.popupVisible},on:{"select-date":t.selectDate,"select-time":t.selectTime}},"calendar-panel",t.$attrs,!1)),t._v(" "),t._t("footer",[t.confirm?n("div",{staticClass:"mx-datepicker-footer"},[n("button",{staticClass:"mx-datepicker-btn mx-datepicker-btn-confirm",attrs:{type:"button"},on:{click:t.confirmDate}},[t._v(t._s(t.confirmText))])]):t._e()],{confirm:t.confirmDate})],2)])},[],!1,null,null,null).exports;n(7),E.install=function(t){t.component(E.name,E)},"undefined"!=typeof window&&window.Vue&&E.install(window.Vue),e.default=E},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(i[o]=!0)}for(a=0;a<e.length;a++){var r=e[a];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},,function(t,e,n){(t.exports=n(4)()).push([t.i,"",""])},function(t,e,n){var i=n(6);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(2).default)("529d5378",i,!0,{})}])},function(t,e,n){var i=n(33);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("941c791e",i,!0,{})},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".vue-tooltip[data-v-6506c7f]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-6506c7f][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-6506c7f][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-6506c7f][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-6506c7f][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-6506c7f][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-6506c7f][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-6506c7f] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-6506c7f] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n",""])},function(t,e,n){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var i=/["'&<>]/;t.exports=function(t){var e,n=""+t,a=i.exec(n);if(!a)return n;var o="",r=0,s=0;for(r=a.index;r<n.length;r++){switch(n.charCodeAt(r)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}s!==r&&(o+=n.substring(s,r)),s=r+1,o+=e}return s!==r?o+n.substring(s,r):o}},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){t.exports=n(102)},function(t,e){},function(t,e,n){var i;
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,o,r,s){"use strict";var c,l=["","webkit","Moz","MS","ms","o"],u=o.createElement("div"),d="function",p=Math.round,f=Math.abs,h=Date.now;function A(t,e,n){return setTimeout(w(t,n),e)}function v(t,e,n){return!!Array.isArray(t)&&(m(t,n[e],n),!0)}function m(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==s)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function b(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=a.console&&(a.console.warn||a.console.log);return o&&o.call(a.console,i,n),t.apply(this,arguments)}}c="function"!=typeof Object.assign?function(t){if(t===s||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==s&&null!==i)for(var a in i)i.hasOwnProperty(a)&&(e[a]=i[a])}return e}:Object.assign;var g=b(function(t,e,n){for(var i=Object.keys(e),a=0;a<i.length;)(!n||n&&t[i[a]]===s)&&(t[i[a]]=e[i[a]]),a++;return t},"extend","Use `assign`."),y=b(function(t,e){return g(t,e,!0)},"merge","Use `assign`.");function x(t,e,n){var i,a=e.prototype;(i=t.prototype=Object.create(a)).constructor=t,i._super=a,n&&c(i,n)}function w(t,e){return function(){return t.apply(e,arguments)}}function _(t,e){return typeof t==d?t.apply(e&&e[0]||s,e):t}function T(t,e){return t===s?e:t}function k(t,e,n){m(S(e),function(e){t.addEventListener(e,n,!1)})}function C(t,e,n){m(S(e),function(e){t.removeEventListener(e,n,!1)})}function E(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function M(t,e){return t.indexOf(e)>-1}function S(t){return t.trim().split(/\s+/g)}function D(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function O(t){return Array.prototype.slice.call(t,0)}function B(t,e,n){for(var i=[],a=[],o=0;o<t.length;){var r=e?t[o][e]:t[o];D(a,r)<0&&i.push(t[o]),a[o]=r,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function I(t,e){for(var n,i,a=e[0].toUpperCase()+e.slice(1),o=0;o<l.length;){if((i=(n=l[o])?n+a:e)in t)return i;o++}return s}var N=1;function L(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||a}var P="ontouchstart"in a,j=I(a,"PointerEvent")!==s,$=P&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),F=25,Y=1,R=2,z=4,H=8,Q=1,V=2,U=4,G=8,W=16,Z=V|U,X=G|W,q=Z|X,K=["x","y"],J=["clientX","clientY"];function tt(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){_(t.options.enable,[t])&&n.handler(e)},this.init()}function et(t,e,n){var i=n.pointers.length,a=n.changedPointers.length,o=e&Y&&i-a==0,r=e&(z|H)&&i-a==0;n.isFirst=!!o,n.isFinal=!!r,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,a=i.length;n.firstInput||(n.firstInput=nt(e));a>1&&!n.firstMultiple?n.firstMultiple=nt(e):1===a&&(n.firstMultiple=!1);var o=n.firstInput,r=n.firstMultiple,c=r?r.center:o.center,l=e.center=it(i);e.timeStamp=h(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=st(c,l),e.distance=rt(c,l),function(t,e){var n=e.center,i=t.offsetDelta||{},a=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Y&&o.eventType!==z||(a=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=a.x+(n.x-i.x),e.deltaY=a.y+(n.y-i.y)}(n,e),e.offsetDirection=ot(e.deltaX,e.deltaY);var u=at(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=f(u.x)>f(u.y)?u.x:u.y,e.scale=r?(d=r.pointers,p=i,rt(p[0],p[1],J)/rt(d[0],d[1],J)):1,e.rotation=r?function(t,e){return st(e[1],e[0],J)+st(t[1],t[0],J)}(r.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,a,o,r=t.lastInterval||e,c=e.timeStamp-r.timeStamp;if(e.eventType!=H&&(c>F||r.velocity===s)){var l=e.deltaX-r.deltaX,u=e.deltaY-r.deltaY,d=at(c,l,u);i=d.x,a=d.y,n=f(d.x)>f(d.y)?d.x:d.y,o=ot(l,u),t.lastInterval=e}else n=r.velocity,i=r.velocityX,a=r.velocityY,o=r.direction;e.velocity=n,e.velocityX=i,e.velocityY=a,e.direction=o}(n,e);var d,p;var A=t.element;E(e.srcEvent.target,A)&&(A=e.srcEvent.target);e.target=A}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function nt(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:h(),pointers:e,center:it(e),deltaX:t.deltaX,deltaY:t.deltaY}}function it(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var n=0,i=0,a=0;a<e;)n+=t[a].clientX,i+=t[a].clientY,a++;return{x:p(n/e),y:p(i/e)}}function at(t,e,n){return{x:e/t||0,y:n/t||0}}function ot(t,e){return t===e?Q:f(t)>=f(e)?t<0?V:U:e<0?G:W}function rt(t,e,n){n||(n=K);var i=e[n[0]]-t[n[0]],a=e[n[1]]-t[n[1]];return Math.sqrt(i*i+a*a)}function st(t,e,n){n||(n=K);var i=e[n[0]]-t[n[0]],a=e[n[1]]-t[n[1]];return 180*Math.atan2(a,i)/Math.PI}tt.prototype={handler:function(){},init:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(L(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&C(this.element,this.evEl,this.domHandler),this.evTarget&&C(this.target,this.evTarget,this.domHandler),this.evWin&&C(L(this.element),this.evWin,this.domHandler)}};var ct={mousedown:Y,mousemove:R,mouseup:z},lt="mousedown",ut="mousemove mouseup";function dt(){this.evEl=lt,this.evWin=ut,this.pressed=!1,tt.apply(this,arguments)}x(dt,tt,{handler:function(t){var e=ct[t.type];e&Y&&0===t.button&&(this.pressed=!0),e&R&&1!==t.which&&(e=z),this.pressed&&(e&z&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var pt={pointerdown:Y,pointermove:R,pointerup:z,pointercancel:H,pointerout:H},ft={2:"touch",3:"pen",4:"mouse",5:"kinect"},ht="pointerdown",At="pointermove pointerup pointercancel";function vt(){this.evEl=ht,this.evWin=At,tt.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}a.MSPointerEvent&&!a.PointerEvent&&(ht="MSPointerDown",At="MSPointerMove MSPointerUp MSPointerCancel"),x(vt,tt,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),a=pt[i],o=ft[t.pointerType]||t.pointerType,r="touch"==o,s=D(e,t.pointerId,"pointerId");a&Y&&(0===t.button||r)?s<0&&(e.push(t),s=e.length-1):a&(z|H)&&(n=!0),s<0||(e[s]=t,this.callback(this.manager,a,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(s,1))}});var mt={touchstart:Y,touchmove:R,touchend:z,touchcancel:H},bt="touchstart",gt="touchstart touchmove touchend touchcancel";function yt(){this.evTarget=bt,this.evWin=gt,this.started=!1,tt.apply(this,arguments)}x(yt,tt,{handler:function(t){var e=mt[t.type];if(e===Y&&(this.started=!0),this.started){var n=function(t,e){var n=O(t.touches),i=O(t.changedTouches);e&(z|H)&&(n=B(n.concat(i),"identifier",!0));return[n,i]}.call(this,t,e);e&(z|H)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var xt={touchstart:Y,touchmove:R,touchend:z,touchcancel:H},wt="touchstart touchmove touchend touchcancel";function _t(){this.evTarget=wt,this.targetIds={},tt.apply(this,arguments)}x(_t,tt,{handler:function(t){var e=xt[t.type],n=function(t,e){var n=O(t.touches),i=this.targetIds;if(e&(Y|R)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var a,o,r=O(t.changedTouches),s=[],c=this.target;if(o=n.filter(function(t){return E(t.target,c)}),e===Y)for(a=0;a<o.length;)i[o[a].identifier]=!0,a++;a=0;for(;a<r.length;)i[r[a].identifier]&&s.push(r[a]),e&(z|H)&&delete i[r[a].identifier],a++;if(!s.length)return;return[B(o.concat(s),"identifier",!0),s]}.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var Tt=2500,kt=25;function Ct(){tt.apply(this,arguments);var t=w(this.handler,this);this.touch=new _t(this.manager,t),this.mouse=new dt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Et(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)},Tt)}}x(Ct,tt,{handler:function(t,e,n){var i="touch"==n.pointerType,a="mouse"==n.pointerType;if(!(a&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)(function(t,e){t&Y?(this.primaryTouch=e.changedPointers[0].identifier,Et.call(this,e)):t&(z|H)&&Et.call(this,e)}).call(this,e,n);else if(a&&function(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var a=this.lastTouches[i],o=Math.abs(e-a.x),r=Math.abs(n-a.y);if(o<=kt&&r<=kt)return!0}return!1}.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Mt=I(u.style,"touchAction"),St=Mt!==s,Dt="auto",Ot="manipulation",Bt="none",It="pan-x",Nt="pan-y",Lt=function(){if(!St)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||a.CSS.supports("touch-action",n)}),t}();function Pt(t,e){this.manager=t,this.set(e)}Pt.prototype={set:function(t){"compute"==t&&(t=this.compute()),St&&this.manager.element.style&&Lt[t]&&(this.manager.element.style[Mt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,function(e){_(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(M(t,Bt))return Bt;var e=M(t,It),n=M(t,Nt);if(e&&n)return Bt;if(e||n)return e?It:Nt;if(M(t,Ot))return Ot;return Dt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,a=M(i,Bt)&&!Lt[Bt],o=M(i,Nt)&&!Lt[Nt],r=M(i,It)&&!Lt[It];if(a){var s=1===t.pointers.length,c=t.distance<2,l=t.deltaTime<250;if(s&&c&&l)return}if(!r||!o)return a||o&&n&Z||r&&n&X?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var jt=1,$t=2,Ft=4,Yt=8,Rt=Yt,zt=16;function Ht(t){this.options=c({},this.defaults,t||{}),this.id=N++,this.manager=null,this.options.enable=T(this.options.enable,!0),this.state=jt,this.simultaneous={},this.requireFail=[]}function Qt(t){return t&zt?"cancel":t&Yt?"end":t&Ft?"move":t&$t?"start":""}function Vt(t){return t==W?"down":t==G?"up":t==V?"left":t==U?"right":""}function Ut(t,e){var n=e.manager;return n?n.get(t):t}function Gt(){Ht.apply(this,arguments)}function Wt(){Gt.apply(this,arguments),this.pX=null,this.pY=null}function Zt(){Gt.apply(this,arguments)}function Xt(){Ht.apply(this,arguments),this._timer=null,this._input=null}function qt(){Gt.apply(this,arguments)}function Kt(){Gt.apply(this,arguments)}function Jt(){Ht.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function te(t,e){return(e=e||{}).recognizers=T(e.recognizers,te.defaults.preset),new ee(t,e)}Ht.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Ut(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)?this:(t=Ut(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var e=this.requireFail;return-1===D(e,t=Ut(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=Ut(t,this);var e=D(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<Yt&&i(e.options.event+Qt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=Yt&&i(e.options.event+Qt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|jt)))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!_(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Rt|zt|32)&&(this.state=jt),this.state=this.process(e),this.state&($t|Ft|Yt|zt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},x(Gt,Ht,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&($t|Ft),a=this.attrTest(t);return i&&(n&H||!a)?e|zt:i||a?n&z?e|Yt:e&$t?e|Ft:$t:32}}),x(Wt,Gt,{defaults:{event:"pan",threshold:10,pointers:1,direction:q},getTouchAction:function(){var t=this.options.direction,e=[];return t&Z&&e.push(Nt),t&X&&e.push(It),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,a=t.direction,o=t.deltaX,r=t.deltaY;return a&e.direction||(e.direction&Z?(a=0===o?Q:o<0?V:U,n=o!=this.pX,i=Math.abs(t.deltaX)):(a=0===r?Q:r<0?G:W,n=r!=this.pY,i=Math.abs(t.deltaY))),t.direction=a,n&&i>e.threshold&&a&e.direction},attrTest:function(t){return Gt.prototype.attrTest.call(this,t)&&(this.state&$t||!(this.state&$t)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Vt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),x(Zt,Gt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Bt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&$t)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),x(Xt,Ht,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Dt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,a=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(z|H)&&!a)this.reset();else if(t.eventType&Y)this.reset(),this._timer=A(function(){this.state=Rt,this.tryEmit()},e.time,this);else if(t.eventType&z)return Rt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Rt&&(t&&t.eventType&z?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=h(),this.manager.emit(this.options.event,this._input)))}}),x(qt,Gt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Bt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&$t)}}),x(Kt,Gt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Z|X,pointers:1},getTouchAction:function(){return Wt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Z|X)?e=t.overallVelocity:n&Z?e=t.overallVelocityX:n&X&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&t.eventType&z},emit:function(t){var e=Vt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),x(Jt,Ht,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Ot]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,a=t.deltaTime<e.time;if(this.reset(),t.eventType&Y&&0===this.count)return this.failTimeout();if(i&&a&&n){if(t.eventType!=z)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||rt(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=A(function(){this.state=Rt,this.tryEmit()},e.interval,this),$t):Rt}return 32},failTimeout:function(){return this._timer=A(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Rt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),te.VERSION="2.0.7",te.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[qt,{enable:!1}],[Zt,{enable:!1},["rotate"]],[Kt,{direction:Z}],[Wt,{direction:Z},["swipe"]],[Jt],[Jt,{event:"doubletap",taps:2},["tap"]],[Xt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function ee(t,e){var n;this.options=c({},te.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(j?vt:$?_t:P?Ct:dt))(n,et),this.touchAction=new Pt(this,this.options.touchAction),ne(this,!0),m(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ne(t,e){var n,i=t.element;i.style&&(m(t.options.cssProps,function(a,o){n=I(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=a):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}ee.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,a=e.curRecognizer;(!a||a&&a.state&Rt)&&(a=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||a&&n!=a&&!n.canRecognizeWith(a)?n.reset():n.recognize(t),!a&&n.state&($t|Ft|Yt)&&(a=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Ht)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(v(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=D(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==s&&e!==s){var n=this.handlers;return m(S(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==s){var n=this.handlers;return m(S(t),function(t){e?n[t]&&n[t].splice(D(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ne(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(te,{INPUT_START:Y,INPUT_MOVE:R,INPUT_END:z,INPUT_CANCEL:H,STATE_POSSIBLE:jt,STATE_BEGAN:$t,STATE_CHANGED:Ft,STATE_ENDED:Yt,STATE_RECOGNIZED:Rt,STATE_CANCELLED:zt,STATE_FAILED:32,DIRECTION_NONE:Q,DIRECTION_LEFT:V,DIRECTION_RIGHT:U,DIRECTION_UP:G,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:Z,DIRECTION_VERTICAL:X,DIRECTION_ALL:q,Manager:ee,Input:tt,TouchAction:Pt,TouchInput:_t,MouseInput:dt,PointerEventInput:vt,TouchMouseInput:Ct,SingleTouchInput:yt,Recognizer:Ht,AttrRecognizer:Gt,Tap:Jt,Pan:Wt,Swipe:Kt,Pinch:Zt,Rotate:qt,Press:Xt,on:k,off:C,each:m,merge:y,extend:g,assign:c,inherit:x,bindFn:w,prefixed:I}),(void 0!==a?a:"undefined"!=typeof self?self:{}).Hammer=te,(i=function(){return te}.call(e,n,e,t))===s||(t.exports=i)}(window,document)},function(t,e,n){"use strict";var i=n(18);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\nbutton.menuitem[data-v-8dc4efb0] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-8dc4efb0] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-8dc4efb0]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-8dc4efb0] {\n\tcursor: default;\n}\n.menuitem.active[data-v-8dc4efb0] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n",""])},function(t,e,n){"use strict";var i=n(19);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li[data-v-8dc4efb0]{display:flex;flex:0 0 auto}li.hidden[data-v-8dc4efb0]{display:none}li>button[data-v-8dc4efb0],li>a[data-v-8dc4efb0],li>.menuitem[data-v-8dc4efb0]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-8dc4efb0],li>button span[class*=' icon-'][data-v-8dc4efb0],li>button[class^='icon-'][data-v-8dc4efb0],li>button[class*=' icon-'][data-v-8dc4efb0],li>a span[class^='icon-'][data-v-8dc4efb0],li>a span[class*=' icon-'][data-v-8dc4efb0],li>a[class^='icon-'][data-v-8dc4efb0],li>a[class*=' icon-'][data-v-8dc4efb0],li>.menuitem span[class^='icon-'][data-v-8dc4efb0],li>.menuitem span[class*=' icon-'][data-v-8dc4efb0],li>.menuitem[class^='icon-'][data-v-8dc4efb0],li>.menuitem[class*=' icon-'][data-v-8dc4efb0]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-8dc4efb0],li>button span[class*=' icon-'][data-v-8dc4efb0],li>a span[class^='icon-'][data-v-8dc4efb0],li>a span[class*=' icon-'][data-v-8dc4efb0],li>.menuitem span[class^='icon-'][data-v-8dc4efb0],li>.menuitem span[class*=' icon-'][data-v-8dc4efb0]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-8dc4efb0],li>button[class*=' icon-'][data-v-8dc4efb0],li>a[class^='icon-'][data-v-8dc4efb0],li>a[class*=' icon-'][data-v-8dc4efb0],li>.menuitem[class^='icon-'][data-v-8dc4efb0],li>.menuitem[class*=' icon-'][data-v-8dc4efb0]{padding:0 14px 0 44px}li>button[data-v-8dc4efb0]:not(:disabled):hover,li>button[data-v-8dc4efb0]:not(:disabled):focus,li>button:not(:disabled).active[data-v-8dc4efb0],li>a[data-v-8dc4efb0]:not(:disabled):hover,li>a[data-v-8dc4efb0]:not(:disabled):focus,li>a:not(:disabled).active[data-v-8dc4efb0],li>.menuitem[data-v-8dc4efb0]:not(:disabled):hover,li>.menuitem[data-v-8dc4efb0]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-8dc4efb0]{opacity:1 !important}li>button.action[data-v-8dc4efb0],li>a.action[data-v-8dc4efb0],li>.menuitem.action[data-v-8dc4efb0]{padding:inherit !important}li>button>span[data-v-8dc4efb0],li>a>span[data-v-8dc4efb0],li>.menuitem>span[data-v-8dc4efb0]{cursor:pointer;white-space:nowrap}li>button>p[data-v-8dc4efb0],li>a>p[data-v-8dc4efb0],li>.menuitem>p[data-v-8dc4efb0]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal}li>button>select[data-v-8dc4efb0],li>a>select[data-v-8dc4efb0],li>.menuitem>select[data-v-8dc4efb0]{margin:0;margin-left:6px}li>button[data-v-8dc4efb0]:not(:empty),li>a[data-v-8dc4efb0]:not(:empty),li>.menuitem[data-v-8dc4efb0]:not(:empty){padding-right:14px !important}li>button>img[data-v-8dc4efb0],li>a>img[data-v-8dc4efb0],li>.menuitem>img[data-v-8dc4efb0]{width:16px;padding:14px}li>button>input.radio+label[data-v-8dc4efb0],li>button>input.checkbox+label[data-v-8dc4efb0],li>a>input.radio+label[data-v-8dc4efb0],li>a>input.checkbox+label[data-v-8dc4efb0],li>.menuitem>input.radio+label[data-v-8dc4efb0],li>.menuitem>input.checkbox+label[data-v-8dc4efb0]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-8dc4efb0]::before,li>a>input.checkbox+label[data-v-8dc4efb0]::before,li>.menuitem>input.checkbox+label[data-v-8dc4efb0]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-8dc4efb0]::before,li>a>input.radio+label[data-v-8dc4efb0]::before,li>.menuitem>input.radio+label[data-v-8dc4efb0]::before{margin:-2px 12px 0}li>button>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-8dc4efb0],li>a form[data-v-8dc4efb0],li>.menuitem form[data-v-8dc4efb0]{display:flex;flex:1 1 auto}li>button form[data-v-8dc4efb0]:not(:first-child),li>a form[data-v-8dc4efb0]:not(:first-child),li>.menuitem form[data-v-8dc4efb0]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-8dc4efb0],li>button>span[style*='display:none']+form[data-v-8dc4efb0],li>a>span.hidden+form[data-v-8dc4efb0],li>a>span[style*='display:none']+form[data-v-8dc4efb0],li>.menuitem>span.hidden+form[data-v-8dc4efb0],li>.menuitem>span[style*='display:none']+form[data-v-8dc4efb0]{margin-left:0}li>button input[data-v-8dc4efb0],li>a input[data-v-8dc4efb0],li>.menuitem input[data-v-8dc4efb0]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-8dc4efb0]:not(:first-child),li>a input[data-v-8dc4efb0]:not(:first-child),li>.menuitem input[data-v-8dc4efb0]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-8dc4efb0]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-8dc4efb0]{margin-bottom:12px}li>button[data-v-8dc4efb0]{padding:0}li>button span[data-v-8dc4efb0]{opacity:1}\n",""])},function(t,e,n){"use strict";var i=n(20);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"ul[data-v-2f982451]{display:flex;flex-direction:column}\n",""])},function(t,e,n){var i=n(151);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("1369e34b",i,!0,{})},function(t,e,n){var i=n(153);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("8b8428ba",i,!0,{})},function(t,e,n){var i=n(155);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("d0fb4520",i,!0,{})},function(t,e,n){var i=n(157);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("30f5de4e",i,!0,{})},function(t,e,n){var i=n(159);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("766647a2",i,!0,{})},function(t,e,n){var i=n(161);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("55805cbd",i,!0,{})},function(t,e,n){var i=n(163);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("19f30fef",i,!0,{})},function(t,e,n){var i=n(165);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("55b308c7",i,!0,{})},function(t,e,n){var i=n(167);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("0c820946",i,!0,{})},function(t,e,n){var i=n(169);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("7d41231a",i,!0,{})},function(t,e,n){var i=n(171);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("56fb5cfa",i,!0,{})},function(t,e,n){var i=n(173);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("2eb234c2",i,!0,{})},function(t,e,n){"use strict";n.r(e),n.d(e,"directive",function(){return i});
/**
 * @copyright Copyright (c) 2019 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var i={inserted:function(t){t.focus()}};e.default=i},function(t,e,n){var i=n(175);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("d8e60126",i,!0,{})},function(t,e,n){var i=n(177);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("4dd3631b",i,!0,{})},function(t,e,n){var i=n(179);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("0a4af55c",i,!0,{})},function(t,e,n){var i=n(181);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("acfb770c",i,!0,{})},function(t,e,n){var i=n(183);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("05387ef8",i,!0,{})},function(t,e,n){var i=n(185);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("a375d0ac",i,!0,{})},function(t,e,n){"use strict";n.r(e);var i,a=n(38),o=n.n(a),r=n(79),s=n.n(r),c=n(14),l=n(24),u=n(80),d=n.n(u),p=n(7),f=n(81),h=n.n(f),A=function(t){var e=t.toLowerCase();function n(t,e,n){this.r=t,this.g=e,this.b=n}function i(t,e,i){var a=[];a.push(e);for(var o=function(t,e){var n=new Array(3);return n[0]=(e[1].r-e[0].r)/t,n[1]=(e[1].g-e[0].g)/t,n[2]=(e[1].b-e[0].b)/t,n}(t,[e,i]),r=1;r<t;r++){var s=parseInt(e.r+o[0]*r),c=parseInt(e.g+o[1]*r),l=parseInt(e.b+o[2]*r);a.push(new n(s,c,l))}return a}null===e.match(/^([0-9a-f]{4}-?){8}$/)&&(e=h()(e)),e=e.replace(/[^0-9a-f]/g,"");var a=new n(182,70,157),o=new n(221,203,85),r=new n(0,130,201),s=i(6,a,o),c=i(6,o,r),l=i(6,r,a);return s.concat(c).concat(l)[function(t,e){for(var n=0,i=[],a=0;a<t.length;a++)i.push(parseInt(t.charAt(a),16)%16);for(var o in i)n+=i[o];return parseInt(parseInt(n)%e)}(e,18)]},v={name:"Avatar",directives:{tooltip:p.default,ClickOutside:c.directive},components:{PopoverMenu:l.PopoverMenu},props:{url:{type:String,default:void 0},user:{type:String,default:void 0},isGuest:{type:Boolean,default:!1},displayName:{type:String,default:void 0},size:{type:Number,default:32},allowPlaceholder:{type:Boolean,default:!0},disableTooltip:{type:Boolean,default:!1},disableMenu:{type:Boolean,default:!1},tooltipMessage:{type:String,default:null},isNoUser:{type:Boolean,default:!1},status:{type:String,default:null,validator:function(t){switch(t){case"positive":case"negative":case"neutral":return!0}return!1}},statusColor:{type:[Number,String],default:null,validator:function(t){return/^([a-f0-9]{3}){1,2}$/i.test(t)}}},data:function(){return{avatarUrlLoaded:null,avatarSrcSetLoaded:null,userDoesNotExist:!1,isAvatarLoaded:!1,isMenuLoaded:!1,contactsMenuActions:[],contactsMenuOpenState:!1}},computed:{getUserIdentifier:function(){return this.isDisplayNameDefined?this.displayName:this.isUserDefined?this.user:""},isUserDefined:function(){return void 0!==this.user},isDisplayNameDefined:function(){return void 0!==this.displayName},isUrlDefined:function(){return void 0!==this.url},hasMenu:function(){return!this.disableMenu&&(this.isMenuLoaded?this.menu.length>0:!(this.user===OC.getCurrentUser().uid||this.userDoesNotExist||this.url))},shouldShowPlaceholder:function(){return this.allowPlaceholder&&this.userDoesNotExist},avatarStyle:function(){var t={width:this.size+"px",height:this.size+"px",lineHeight:this.size+"px",fontSize:Math.round(.55*this.size)+"px"},e=A(this.getUserIdentifier);return t.backgroundColor="rgb("+e.r+", "+e.g+", "+e.b+")",t},tooltip:function(){return!this.disableTooltip&&(this.tooltipMessage?this.tooltipMessage:this.displayName)},initials:function(){return this.shouldShowPlaceholder?this.getUserIdentifier.charAt(0).toUpperCase():"?"},menu:function(){return this.contactsMenuActions.map(function(t){return{href:t.hyperlink,icon:t.icon,text:t.title}})}},watch:{url:function(){this.userDoesNotExist=!1,this.loadAvatarUrl()},user:function(){this.userDoesNotExist=!1,this.isMenuLoaded=!1,this.loadAvatarUrl()}},mounted:function(){this.loadAvatarUrl()},methods:{toggleMenu:function(){this.hasMenu&&(this.contactsMenuOpenState=!this.contactsMenuOpenState,this.contactsMenuOpenState&&this.fetchContactsMenu())},closeMenu:function(){this.contactsMenuOpenState=!1},fetchContactsMenu:(i=s()(o.a.mark(function t(){var e,n,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=encodeURIComponent(this.user),t.next=4,d.a.post(OC.generateUrl("contactsmenu/findOne"),"shareType=0&shareWith=".concat(e));case 4:n=t.sent,i=n.data,this.contactsMenuActions=[i.topAction].concat(i.actions),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.contactsMenuOpenState=!1;case 12:this.isMenuLoaded=!0;case 13:case"end":return t.stop()}},t,this,[[0,9]])})),function(){return i.apply(this,arguments)}),loadAvatarUrl:function(){var t=this;if(this.isAvatarLoaded=!1,!this.isUrlDefined&&(!this.isUserDefined||this.isNoUser))return this.isAvatarLoaded=!0,void(this.userDoesNotExist=!0);var e=function(e,n){var i="/avatar/{user}/{size}";t.isGuest&&(i="/avatar/guest/{user}/{size}");var a=OC.generateUrl(i,{user:e,size:n});return e===OC.getCurrentUser().uid&&"undefined"!=typeof oc_userconfig&&(a+="?v="+oc_userconfig.avatar.version),a},n=e(this.user,this.size);this.isUrlDefined&&(n=this.url);var i=[n+" 1x",e(this.user,2*this.size)+" 2x",e(this.user,4*this.size)+" 4x"].join(", "),a=new Image;a.onload=function(){t.avatarUrlLoaded=n,t.isUrlDefined||(t.avatarSrcSetLoaded=i),t.isAvatarLoaded=!0},a.onerror=function(){t.userDoesNotExist=!0,t.isAvatarLoaded=!0},this.isUrlDefined||(a.srcset=i),a.src=n}}},m=(n(123),n(0)),b=n(39),g=n.n(b),y=Object(m.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"},{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],staticClass:"avatardiv popovermenu-wrapper",class:{"icon-loading":!t.isAvatarLoaded,"avatardiv--unknown":t.userDoesNotExist,"avatardiv--with-menu":t.hasMenu},style:t.avatarStyle,on:{click:t.toggleMenu}},[t.isAvatarLoaded&&!t.userDoesNotExist?n("img",{attrs:{src:t.avatarUrlLoaded,srcset:t.avatarSrcSetLoaded}}):t._e(),t._v(" "),t.hasMenu?n("div",{staticClass:"icon-more"}):t._e(),t._v(" "),t.status?n("div",{staticClass:"avatardiv__status",class:"avatardiv__status--"+t.status,style:{backgroundColor:"#"+t.statusColor}},["neutral"===t.status?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 3.175 2.91"}},[n("path",{style:{fill:"#"+t.statusColor},attrs:{d:"M3.21 3.043H.494l.679-1.177.68-1.176.678 1.176z",stroke:"#fff","stroke-width":".265","stroke-linecap":"square"}})]):t._e()]):t._e(),t._v(" "),t.userDoesNotExist?n("div",{staticClass:"unknown"},[t._v("\n\t\t"+t._s(t.initials)+"\n\t")]):t._e(),t._v(" "),t.hasMenu?n("div",{directives:[{name:"show",rawName:"v-show",value:t.contactsMenuOpenState,expression:"contactsMenuOpenState"}],staticClass:"popovermenu menu-center"},[n("PopoverMenu",{attrs:{"is-open":t.contactsMenuOpenState,menu:t.menu}})],1):t._e()])},[],!1,null,"affbc700",null);"function"==typeof g.a&&g()(y);var x=y.exports;n.d(e,"Avatar",function(){return x});
/**
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=x},function(t,e,n){"use strict";n.r(e);var i={name:"ActionButton",mixins:[n(15).a],props:{disabled:{type:Boolean,default:!1}},computed:{isFocusable:function(){return!this.disabled}}},a=(n(94),n(0)),o=n(35),r=n.n(o),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("button",{staticClass:"action-button",class:{focusable:t.isFocusable},on:{click:t.onClick}},[n("span",{staticClass:"action-button__icon",class:[t.isIconUrl?"action-button__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),t.title?n("p",[n("strong",{staticClass:"action-button__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?n("p",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}}):n("span",{staticClass:"action-button__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"37538719",null);"function"==typeof r.a&&r()(s);var c=s.exports;n.d(e,"ActionButton",function(){return c});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=c},function(t,e,n){"use strict";n.r(e);var i=n(23),a=n(31),o=n.n(a);o.a.components.CalendarPanel.components.PanelTime.methods.stringifyText=function(t){return t},o.a.methods.displayPopup=function(){var t=this.$el.querySelector(".mx-datepicker-popup");t&&!t.classList.contains("popovermenu")&&(t.className+=" popovermenu menu-center open")};var r={name:"DatetimePicker",components:{DatePicker:o.a},inheritAttrs:!1,props:{value:{default:function(){return new Date}}},methods:{handleSelectYear:function(t){var e=this.$refs.datepicker.currentValue;if(e)try{var n=new Date(new Date(e).setFullYear(t));this.$refs.datepicker.selectDate(n)}catch(n){console.error("Invalid value",e,t)}},handleSelectMonth:function(t){var e=this.$refs.datepicker.currentValue;if(e)try{var n=new Date(new Date(e).setMonth(t));this.$refs.datepicker.selectDate(n)}catch(n){console.error("Invalid value",e,t)}}}},s=n(0),c=n(36),l=n.n(c),u=Object(s.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("DatePicker",t._g(t._b({ref:"datepicker",attrs:{clearable:!1,"minute-step":10,value:t.value},on:{"select-year":t.handleSelectYear,"select-month":t.handleSelectMonth,"update:value":function(e){return t.$emit("update:value",t.value)}}},"DatePicker",t.$attrs,!1),t.$listeners))},[],!1,null,null,null);"function"==typeof l.a&&l()(u);var d=u.exports;n(96);n.d(e,"DatetimePicker",function(){return d}),
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
Object(i.a)(d);e.default=d},function(t,e,n){"use strict";n.r(e);var i={name:"AppNavigationCounter",props:{highlighted:{type:Boolean,default:!1}}},a=(n(100),n(0)),o=n(37),r=n.n(o),s=Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"app-navigation-entry-utils-counter",class:{highlighted:this.highlighted}},[e("span",[this._t("default")],2)])},[],!1,null,"7ed17014",null);"function"==typeof r.a&&r()(s);var c=s.exports;n.d(e,"AppNavigationCounter",function(){return c});
/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <ma12co@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=c},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(e,n)}}},function(t,e,n){"use strict";var i=n(4);function a(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(i.isURLSearchParams(e))o=e.toString();else{var r=[];i.forEach(e,function(t,e){null!=t&&(i.isArray(t)?e+="[]":t=[t],i.forEach(t,function(t){i.isDate(t)?t=t.toISOString():i.isObject(t)&&(t=JSON.stringify(t)),r.push(a(e)+"="+a(t))}))}),o=r.join("&")}if(o){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";(function(e){var i=n(4),a=n(111),o={"Content-Type":"application/x-www-form-urlencoded"};function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,c={adapter:(void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?s=n(74):"undefined"!=typeof XMLHttpRequest&&(s=n(74)),s),transformRequest:[function(t,e){return a(e,"Accept"),a(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(o)}),t.exports=c}).call(this,n(110))},function(t,e,n){"use strict";var i=n(4),a=n(112),o=n(71),r=n(114),s=n(115),c=n(75);t.exports=function(t){return new Promise(function(e,l){var u=t.data,d=t.headers;i.isFormData(u)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var f=t.auth.username||"",h=t.auth.password||"";d.Authorization="Basic "+btoa(f+":"+h)}if(p.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?r(p.getAllResponseHeaders()):null,i={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:t,request:p};a(e,l,i),p=null}},p.onabort=function(){p&&(l(c("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},i.isStandardBrowserEnv()){var A=n(116),v=(t.withCredentials||s(t.url))&&t.xsrfCookieName?A.read(t.xsrfCookieName):void 0;v&&(d[t.xsrfHeaderName]=v)}if("setRequestHeader"in p&&i.forEach(d,function(t,e){void 0===u&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),l(t),p=null)}),void 0===u&&(u=null),p.send(u)})}},function(t,e,n){"use strict";var i=n(113);t.exports=function(t,e,n,a,o){var r=new Error(t);return i(r,e,n,a,o)}},function(t,e,n){"use strict";var i=n(4);t.exports=function(t,e){e=e||{};var n={};return i.forEach(["url","method","params","data"],function(t){void 0!==e[t]&&(n[t]=e[t])}),i.forEach(["headers","auth","proxy"],function(a){i.isObject(e[a])?n[a]=i.deepMerge(t[a],e[a]):void 0!==e[a]?n[a]=e[a]:i.isObject(t[a])?n[a]=i.deepMerge(t[a]):void 0!==t[a]&&(n[a]=t[a])}),i.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(i){void 0!==e[i]?n[i]=e[i]:void 0!==t[i]&&(n[i]=t[i])}),n}},function(t,e,n){"use strict";function i(t){this.message=t}i.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},i.prototype.__CANCEL__=!0,t.exports=i},function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},function(t,e){function n(t,e,n,i,a,o,r){try{var s=t[o](r),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,a)}t.exports=function(t){return function(){var e=this,i=arguments;return new Promise(function(a,o){var r=t.apply(e,i);function s(t){n(r,a,o,s,c,"next",t)}function c(t){n(r,a,o,s,c,"throw",t)}s(void 0)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(103).default.create({headers:{requesttoken:OC.requestToken}});e.default=i},function(t,e,n){var i,a,o,r,s;i=n(121),a=n(78).utf8,o=n(122),r=n(78).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?r.stringToBytes(t):a.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var n=i.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,d=-1732584194,p=271733878,f=0;f<n.length;f++)n[f]=16711935&(n[f]<<8|n[f]>>>24)|4278255360&(n[f]<<24|n[f]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var h=s._ff,A=s._gg,v=s._hh,m=s._ii;for(f=0;f<n.length;f+=16){var b=l,g=u,y=d,x=p;l=h(l,u,d,p,n[f+0],7,-680876936),p=h(p,l,u,d,n[f+1],12,-389564586),d=h(d,p,l,u,n[f+2],17,606105819),u=h(u,d,p,l,n[f+3],22,-1044525330),l=h(l,u,d,p,n[f+4],7,-176418897),p=h(p,l,u,d,n[f+5],12,1200080426),d=h(d,p,l,u,n[f+6],17,-1473231341),u=h(u,d,p,l,n[f+7],22,-45705983),l=h(l,u,d,p,n[f+8],7,1770035416),p=h(p,l,u,d,n[f+9],12,-1958414417),d=h(d,p,l,u,n[f+10],17,-42063),u=h(u,d,p,l,n[f+11],22,-1990404162),l=h(l,u,d,p,n[f+12],7,1804603682),p=h(p,l,u,d,n[f+13],12,-40341101),d=h(d,p,l,u,n[f+14],17,-1502002290),l=A(l,u=h(u,d,p,l,n[f+15],22,1236535329),d,p,n[f+1],5,-165796510),p=A(p,l,u,d,n[f+6],9,-1069501632),d=A(d,p,l,u,n[f+11],14,643717713),u=A(u,d,p,l,n[f+0],20,-373897302),l=A(l,u,d,p,n[f+5],5,-701558691),p=A(p,l,u,d,n[f+10],9,38016083),d=A(d,p,l,u,n[f+15],14,-660478335),u=A(u,d,p,l,n[f+4],20,-405537848),l=A(l,u,d,p,n[f+9],5,568446438),p=A(p,l,u,d,n[f+14],9,-1019803690),d=A(d,p,l,u,n[f+3],14,-187363961),u=A(u,d,p,l,n[f+8],20,1163531501),l=A(l,u,d,p,n[f+13],5,-1444681467),p=A(p,l,u,d,n[f+2],9,-51403784),d=A(d,p,l,u,n[f+7],14,1735328473),l=v(l,u=A(u,d,p,l,n[f+12],20,-1926607734),d,p,n[f+5],4,-378558),p=v(p,l,u,d,n[f+8],11,-2022574463),d=v(d,p,l,u,n[f+11],16,1839030562),u=v(u,d,p,l,n[f+14],23,-35309556),l=v(l,u,d,p,n[f+1],4,-1530992060),p=v(p,l,u,d,n[f+4],11,1272893353),d=v(d,p,l,u,n[f+7],16,-155497632),u=v(u,d,p,l,n[f+10],23,-1094730640),l=v(l,u,d,p,n[f+13],4,681279174),p=v(p,l,u,d,n[f+0],11,-358537222),d=v(d,p,l,u,n[f+3],16,-722521979),u=v(u,d,p,l,n[f+6],23,76029189),l=v(l,u,d,p,n[f+9],4,-640364487),p=v(p,l,u,d,n[f+12],11,-421815835),d=v(d,p,l,u,n[f+15],16,530742520),l=m(l,u=v(u,d,p,l,n[f+2],23,-995338651),d,p,n[f+0],6,-198630844),p=m(p,l,u,d,n[f+7],10,1126891415),d=m(d,p,l,u,n[f+14],15,-1416354905),u=m(u,d,p,l,n[f+5],21,-57434055),l=m(l,u,d,p,n[f+12],6,1700485571),p=m(p,l,u,d,n[f+3],10,-1894986606),d=m(d,p,l,u,n[f+10],15,-1051523),u=m(u,d,p,l,n[f+1],21,-2054922799),l=m(l,u,d,p,n[f+8],6,1873313359),p=m(p,l,u,d,n[f+15],10,-30611744),d=m(d,p,l,u,n[f+6],15,-1560198380),u=m(u,d,p,l,n[f+13],21,1309151649),l=m(l,u,d,p,n[f+4],6,-145523070),p=m(p,l,u,d,n[f+11],10,-1120210379),d=m(d,p,l,u,n[f+2],15,718787259),u=m(u,d,p,l,n[f+9],21,-343485551),l=l+b>>>0,u=u+g>>>0,d=d+y>>>0,p=p+x>>>0}return i.endian([l,u,d,p])})._ff=function(t,e,n,i,a,o,r){var s=t+(e&n|~e&i)+(a>>>0)+r;return(s<<o|s>>>32-o)+e},s._gg=function(t,e,n,i,a,o,r){var s=t+(e&i|n&~i)+(a>>>0)+r;return(s<<o|s>>>32-o)+e},s._hh=function(t,e,n,i,a,o,r){var s=t+(e^n^i)+(a>>>0)+r;return(s<<o|s>>>32-o)+e},s._ii=function(t,e,n,i,a,o,r){var s=t+(n^(e|~i))+(a>>>0)+r;return(s<<o|s>>>32-o)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=i.wordsToBytes(s(t,e));return e&&e.asBytes?n:e&&e.asString?r.bytesToString(n):i.bytesToHex(n)}},function(t,e,n){"use strict";var i=n(22);n.n(i).a},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-1b35df2f]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-1b35df2f]:before{font-family:"iconfont-vue";content:""}.action-item[data-v-1b35df2f]{position:relative;display:inline-block}.action-item--single[data-v-1b35df2f]:hover,.action-item--single[data-v-1b35df2f]:focus,.action-item--single[data-v-1b35df2f]:active,.action-item__menutoggle[data-v-1b35df2f]:hover,.action-item__menutoggle[data-v-1b35df2f]:focus,.action-item__menutoggle[data-v-1b35df2f]:active{border-radius:22px;background-color:rgba(127,127,127,0.25) !important;opacity:1}.action-item.action-item--open .action-item__menutoggle[data-v-1b35df2f]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-1b35df2f],.action-item__menutoggle[data-v-1b35df2f]{box-sizing:border-box;width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;background-color:transparent}.action-item__menutoggle[data-v-1b35df2f]{display:flex;align-items:center;justify-content:center;opacity:.7;font-size:16px}.action-item__menutoggle[data-v-1b35df2f]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.action-item--single[data-v-1b35df2f]{opacity:.7}.action-item--single[data-v-1b35df2f]:hover,.action-item--single[data-v-1b35df2f]:focus,.action-item--single[data-v-1b35df2f]:active{opacity:1}.action-item--single>[hidden][data-v-1b35df2f]{display:none}.action-item--multiple[data-v-1b35df2f]{position:relative}.action-item__menu[data-v-1b35df2f]{position:absolute;z-index:110;right:50%;display:none;margin:10px;margin-top:-5px;transform:translateX(50%);color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 3px var(--color-box-shadow))}.action-item__menu ul[data-v-1b35df2f]>:not(li){display:none}.action-item__menu.open[data-v-1b35df2f]{display:block}.action-item__menu .action-item__menu_arrow[data-v-1b35df2f]{position:absolute;right:50%;bottom:100%;width:0;height:0;margin-right:-9px;content:\' \';pointer-events:none;border:solid transparent;border-width:9px;border-bottom-color:var(--color-main-background)}.action-item__menu.menu-right[data-v-1b35df2f]{right:0;left:auto;transform:none}.action-item__menu.menu-right .action-item__menu_arrow[data-v-1b35df2f]{right:13px;margin-right:0}.action-item__menu.menu-left[data-v-1b35df2f]{right:auto;left:0;transform:none}.action-item__menu.menu-left .action-item__menu_arrow[data-v-1b35df2f]{right:auto;left:13px;margin-right:0}.ie .action-item__menu[data-v-1b35df2f],.ie .action-item__menu .action-item__menu_arrow[data-v-1b35df2f],.edge .action-item__menu[data-v-1b35df2f],.edge .action-item__menu .action-item__menu_arrow[data-v-1b35df2f]{border:1px solid var(--color-border)}\n',""])},function(t,e,n){"use strict";n.r(e);var i={name:"AppNavigationToggle",methods:{emitClick:function(){this.$emit("click")}}},a=(n(98),n(0)),o=Object(a.a)(i,function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{id:"app-navigation-toggle",tabindex:"0",href:"#"},on:{click:function(e){return e.preventDefault(),t.emitClick(e)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.emitClick(e))}}})},[],!1,null,"d9538ec8",null).exports;n.d(e,"AppNavigationSpacer",function(){return o});
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";var i=n(26);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-37538719]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-37538719]{pointer-events:none;opacity:.5}.action--disabled[data-v-37538719]:hover,.action--disabled[data-v-37538719]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-37538719]{opacity:1 !important}.action-button[data-v-37538719]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-37538719]:hover,.action-button[data-v-37538719]:focus{opacity:1}.action-button>span[data-v-37538719]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-37538719]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-37538719]{width:150px;padding:7px 0;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-37538719]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-37538719]{font-weight:bold}\n",""])},function(t,e,n){var i=n(97);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("600615ea",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon{font-style:normal;font-weight:400}.icon.arrow-left-double:before{font-family:"iconfont-vue";content:""}.icon.arrow-left:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double:before{font-family:"iconfont-vue";content:""}.icon.arrow-right:before{font-family:"iconfont-vue";content:""}.icon.close:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade:before{font-family:"iconfont-vue";content:""}.icon.confirm:before{font-family:"iconfont-vue";content:""}.icon.menu:before{font-family:"iconfont-vue";content:""}.icon.more:before{font-family:"iconfont-vue";content:""}.icon.pause:before{font-family:"iconfont-vue";content:""}.icon.play:before{font-family:"iconfont-vue";content:""}.mx-datepicker[data-v-6506c7f]{width:210px;color:inherit;user-select:none;position:relative;display:inline-block}.mx-datepicker[data-v-6506c7f].disabled{opacity:.7;cursor:not-allowed}.mx-datepicker[data-v-6506c7f] .mx-input-wrapper .mx-input{width:100%}.mx-datepicker[data-v-6506c7f] .mx-input-wrapper .mx-input-append{position:absolute;top:0;right:0;width:30px;height:100%;padding:6px;background-color:var(--color-main-background);background-clip:content-box}.mx-datepicker[data-v-6506c7f] .mx-input-wrapper .mx-input-append .mx-input-icon{display:inline-block;font-style:normal;text-align:center;cursor:pointer}.mx-datepicker[data-v-6506c7f] .mx-input-wrapper .mx-input-append .mx-clear-wrapper{display:none}.mx-datepicker[data-v-6506c7f] .mx-input-wrapper .mx-input-append .mx-calendar-icon{stroke-width:8px;stroke:currentColor;fill:currentColor;width:100%;height:100%;color:var(--color-text-lighter)}.mx-datepicker[data-v-6506c7f] .mx-datepicker-popup{box-shadow:none;background-color:var(--color-main-background);position:absolute;margin-top:1px;margin-bottom:1px;z-index:1000}.mx-datepicker[data-v-6506c7f] .mx-range-wrapper{display:flex;overflow:hidden}.mx-datepicker[data-v-6506c7f] .mx-range-wrapper .mx-calendar:first-child{box-shadow:var(--color-border) 1px 0px !important}.mx-datepicker[data-v-6506c7f] .mx-range-wrapper .mx-calendar-content .mx-panel .cell.actived{border-radius:var(--border-radius) 0 0 var(--border-radius)}.mx-datepicker[data-v-6506c7f] .mx-range-wrapper .mx-calendar-content .mx-panel .cell.inrange+.cell.actived{border-radius:0 var(--border-radius) var(--border-radius) 0}.mx-datepicker[data-v-6506c7f] .mx-shortcuts-wrapper{display:flex;justify-content:space-evenly;padding:5px;border-bottom:1px solid var(--color-border)}.mx-datepicker[data-v-6506c7f] .mx-shortcuts-wrapper .mx-shortcuts{font-weight:normal}.mx-datepicker[data-v-6506c7f] .mx-calendar{font:inherit;color:var(--color-main-text);padding:5px;width:234px}.mx-datepicker[data-v-6506c7f] .mx-calendar-header{padding:0 4px;margin-bottom:4px;text-align:center;overflow:hidden;display:flex;align-items:center;justify-content:space-between}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a{text-decoration:none;cursor:pointer;color:var(--color-text-lighter);padding:7px 10px;margin:0 auto;border-radius:32px;height:32px;line-height:20px;min-width:32px}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a:hover,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a:focus{opacity:1;color:var(--color-main-text);background-color:var(--color-background-darker)}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-last-year,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-last-month,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-month,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-year{background-position:center;background-repeat:no-repeat;font-size:0;opacity:.5;display:flex;align-items:center;justify-content:center;padding:0}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-last-year:before,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-last-month:before,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-month:before,.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-year:before{display:block;font-size:16px}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-last-year:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-last-month:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-month{order:3}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-month:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-year{order:4}.mx-datepicker[data-v-6506c7f] .mx-calendar-header>a.mx-icon-next-year:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel{width:100%;height:100%;text-align:center}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell{opacity:.7;border-radius:50px;transition:all 100ms ease-in-out;cursor:pointer}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell:hover,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell:focus,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell.actived,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell.inrange{font-weight:bold;opacity:1;color:var(--color-primary-text);background-color:var(--color-primary-element)}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell.inrange,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell.disabled{border-radius:0;font-weight:normal}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell.inrange{opacity:.7}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel .cell.disabled{color:var(--color-text-lighter);opacity:.5;background-color:var(--color-background-darker)}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel span.cell,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel li.cell{min-height:32px}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date{table-layout:fixed;border-collapse:collapse;border-spacing:0}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date td,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date th{font-size:12px;width:32px;height:32px;line-height:30px;border:0;padding:0;padding-top:2px;overflow:hidden;text-align:center}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date th{color:var(--color-text-lighter);opacity:.5}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date td.today{color:var(--color-primary);opacity:1;font-weight:bold}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date td.last-month,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date td.next-month{color:var(--color-text-lighter);opacity:.5}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date tr:hover,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date tr:focus,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-date tr:active{background:none}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-year,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-month{display:flex;flex-wrap:wrap;justify-content:space-around}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-year span.cell,.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-month span.cell{display:block;padding:5px;height:44px;line-height:36px;margin-bottom:1%}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-year .cell{width:45%}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-month .cell{width:30%}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-time{display:flex}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-time .mx-time-list{position:relative;width:100%;height:100%;padding:5px;margin:0;list-style:none;overflow-y:auto;max-height:220px}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-time .mx-time-list .mx-time-picker-item{display:block;text-align:left;padding-left:10px}.mx-datepicker[data-v-6506c7f] .mx-calendar-content .mx-panel-time .mx-time-list .cell{display:flex;justify-content:center;margin-bottom:1px;width:100%;font-size:12px;height:32px;line-height:32px}.mx-datepicker[data-v-6506c7f] .mx-datepicker-footer{padding:4px;clear:both;text-align:right;border-top:1px solid var(--color-border)}\n',""])},function(t,e,n){"use strict";var i=n(27);n.n(i).a},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-d9538ec8]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-d9538ec8]:before{font-family:"iconfont-vue";content:""}#app-navigation-toggle[data-v-d9538ec8]{display:none;position:fixed;z-index:1050;left:0;width:44px;height:44px;padding:14px;cursor:pointer;opacity:0.6;font-size:16px;line-height:17px}#app-navigation-toggle[data-v-d9538ec8]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}#app-navigation-toggle[data-v-d9538ec8]:hover,#app-navigation-toggle[data-v-d9538ec8]:focus{opacity:1}@media only screen and (max-width: 768px){#app-navigation-toggle[data-v-d9538ec8]{display:inline-block !important}}\n',""])},function(t,e,n){"use strict";var i=n(28);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".app-navigation-entry-utils-counter[data-v-7ed17014]{overflow:hidden;text-align:right;font-size:9px;line-height:44px;padding:0 12px}.highlighted[data-v-7ed17014]{padding:0;text-align:center}.highlighted span[data-v-7ed17014]{padding:2px 5px;border-radius:10px;background-color:var(--color-primary);color:var(--color-primary-text)}\n",""])},function(t,e,n){var i=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,n,i){var a=e&&e.prototype instanceof A?e:A,o=Object.create(a.prototype),r=new E(i||[]);return o._invoke=function(t,e,n){var i=u;return function(a,o){if(i===p)throw new Error("Generator is already running");if(i===f){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var r=n.delegate;if(r){var s=T(r,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===u)throw i=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?f:d,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=f,n.method="throw",n.arg=c.arg)}}}(t,n,r),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",f="completed",h={};function A(){}function v(){}function m(){}var b={};b[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(M([])));y&&y!==n&&i.call(y,o)&&(b=y);var x=m.prototype=A.prototype=Object.create(b);function w(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){var e;this._invoke=function(n,a){function o(){return new Promise(function(e,o){!function e(n,a,o,r){var s=l(t[n],t,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,r)},function(t){e("throw",t,o,r)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,r)})}r(s.arg)}(n,a,e,o)})}return e=e?e.then(o,o):o()}}function T(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=l(i,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function M(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function n(){for(;++a<t.length;)if(i.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return r.next=r}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=x.constructor=m,m.constructor=v,m[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(_.prototype),_.prototype[r]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,i,a){var o=new _(c(e,n,i,a));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},w(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=M,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(i,a){return s.type="throw",s.arg=t,n.next=i,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],s=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),l=i.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var a=i.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:M(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=i}catch(t){Function("r","regeneratorRuntime = r")(i)}},function(t,e,n){t.exports=n(104)},function(t,e,n){"use strict";var i=n(4),a=n(70),o=n(106),r=n(76);function s(t){var e=new o(t),n=a(o.prototype.request,e);return i.extend(n,o.prototype,e),i.extend(n,e),n}var c=s(n(73));c.Axios=o,c.create=function(t){return s(r(c.defaults,t))},c.Cancel=n(77),c.CancelToken=n(119),c.isCancel=n(72),c.all=function(t){return Promise.all(t)},c.spread=n(120),t.exports=c,t.exports.default=c},function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},function(t,e,n){"use strict";var i=n(4),a=n(71),o=n(107),r=n(108),s=n(76);function c(t){this.defaults=t,this.interceptors={request:new o,response:new o}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[r,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=s(this.defaults,t),a(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,n,a){return this.request(i.merge(a||{},{method:t,url:e,data:n}))}}),t.exports=c},function(t,e,n){"use strict";var i=n(4);function a(){this.handlers=[]}a.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},a.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},a.prototype.forEach=function(t){i.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=a},function(t,e,n){"use strict";var i=n(4),a=n(109),o=n(72),r=n(73),s=n(117),c=n(118);function l(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return l(t),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=i.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),i.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||r.adapter)(t).then(function(e){return l(t),e.data=a(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(l(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var i=n(4);t.exports=function(t,e,n){return i.forEach(n,function(n){t=n(t,e)}),t}},function(t,e){var n,i,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"==typeof clearTimeout?clearTimeout:r}catch(t){i=r}}();var c,l=[],u=!1,d=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&f())}function f(){if(!u){var t=s(p);u=!0;for(var e=l.length;e;){for(c=l,l=[];++d<e;)c&&c[d].run();d=-1,e=l.length}c=null,u=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===r||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function A(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new h(t,e)),1!==l.length||u||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=A,a.addListener=A,a.once=A,a.off=A,a.removeListener=A,a.removeAllListeners=A,a.emit=A,a.prependListener=A,a.prependOnceListener=A,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){"use strict";var i=n(4);t.exports=function(t,e){i.forEach(t,function(n,i){i!==e&&i.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[i])})}},function(t,e,n){"use strict";var i=n(75);t.exports=function(t,e,n){var a=n.config.validateStatus;!a||a(n.status)?t(n):e(i("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(t,e,n){"use strict";t.exports=function(t,e,n,i,a){return t.config=e,n&&(t.code=n),t.request=i,t.response=a,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,n){"use strict";var i=n(4),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,r={};return t?(i.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=i.trim(t.substr(0,o)).toLowerCase(),n=i.trim(t.substr(o+1)),e){if(r[e]&&a.indexOf(e)>=0)return;r[e]="set-cookie"===e?(r[e]?r[e]:[]).concat([n]):r[e]?r[e]+", "+n:n}}),r):r}},function(t,e,n){"use strict";var i=n(4);t.exports=i.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(t){var i=t;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=a(window.location.href),function(e){var n=i.isString(e)?a(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var i=n(4);t.exports=i.isStandardBrowserEnv()?{write:function(t,e,n,a,o,r){var s=[];s.push(t+"="+encodeURIComponent(e)),i.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),i.isString(a)&&s.push("path="+a),i.isString(o)&&s.push("domain="+o),!0===r&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var i=n(77);function a(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new i(t),e(n.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var t;return{token:new a(function(e){t=e}),cancel:t}},t.exports=a},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e){var n,i;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&i.rotl(t,8)|4278255360&i.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=i.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,i=0;n<t.length;n++,i+=8)e[i>>>5]|=t[n]<<24-i%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],i=0;i<t.length;i+=3)for(var a=t[i]<<16|t[i+1]<<8|t[i+2],o=0;o<4;o++)8*i+6*o<=8*t.length?e.push(n.charAt(a>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],i=0,a=0;i<t.length;a=++i%4)0!=a&&e.push((n.indexOf(t.charAt(i-1))&Math.pow(2,-2*a+8)-1)<<2*a|n.indexOf(t.charAt(i))>>>6-2*a);return e}},t.exports=i},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,n){"use strict";var i=n(29);n.n(i).a},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-affbc700]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-affbc700]:before{font-family:"iconfont-vue";content:""}.avatardiv[data-v-affbc700]{position:relative;display:inline-block}.avatardiv--unknown[data-v-affbc700]{position:relative;background-color:var(--color-text-maxcontrast)}.avatardiv--with-menu[data-v-affbc700]{cursor:pointer}.avatardiv--with-menu .icon-more[data-v-affbc700]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:inherit;height:inherit;cursor:pointer;opacity:0;background:none;font-size:18px}.avatardiv--with-menu .icon-more[data-v-affbc700]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.avatardiv--with-menu .icon-more[data-v-affbc700]::before{display:block}.avatardiv--with-menu:focus .icon-more[data-v-affbc700],.avatardiv--with-menu:hover .icon-more[data-v-affbc700]{opacity:1}.avatardiv--with-menu:focus img[data-v-affbc700],.avatardiv--with-menu:hover img[data-v-affbc700]{opacity:0}.avatardiv--with-menu .icon-more[data-v-affbc700],.avatardiv--with-menu img[data-v-affbc700]{transition:opacity var(--animation-quick)}.avatardiv>.unknown[data-v-affbc700]{position:absolute;top:0;left:0;display:block;width:100%;text-align:center;color:var(--color-main-background)}.avatardiv img[data-v-affbc700]{width:100%;height:100%}.avatardiv .avatardiv__status[data-v-affbc700]{position:absolute;top:22px;left:22px;width:10px;height:10px;border:1px solid rgba(255,255,255,0.5);background-clip:content-box}.avatardiv .avatardiv__status--positive[data-v-affbc700]{border-radius:50%;background-color:var(--color-success)}.avatardiv .avatardiv__status--negative[data-v-affbc700]{background-color:var(--color-error)}.avatardiv .avatardiv__status--neutral[data-v-affbc700]{border:none;background-color:transparent !important}.avatardiv .avatardiv__status--neutral svg[data-v-affbc700]{position:absolute;top:-3px;left:-2px}.avatardiv .avatardiv__status--neutral svg path[data-v-affbc700]{fill:#aaa}.avatardiv .popovermenu-wrapper[data-v-affbc700]{position:relative;display:inline-block}.avatardiv .popovermenu[data-v-affbc700]{display:block;margin:0;font-size:initial}\n',""])},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},function(t,e,n){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(49)("wks"),a=n(30),o=n(0).Symbol,r="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=r&&o[t]||(r?o:a)("Symbol."+t))}).store=i},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(0),a=n(10),o=n(8),r=n(6),s=n(11),c=function(t,e,n){var l,u,d,p,f=t&c.F,h=t&c.G,A=t&c.S,v=t&c.P,m=t&c.B,b=h?i:A?i[e]||(i[e]={}):(i[e]||{}).prototype,g=h?a:a[e]||(a[e]={}),y=g.prototype||(g.prototype={});for(l in h&&(n=e),n)u=!f&&b&&void 0!==b[l],d=(u?b:n)[l],p=m&&u?s(d,i):v&&"function"==typeof d?s(Function.call,d):d,b&&r(b,l,d,t&c.U),g[l]!=d&&o(g,l,p),v&&y[l]!=d&&(y[l]=d)};i.core=a,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(0),a=n(8),o=n(12),r=n(30)("src"),s=Function.toString,c=(""+s).split("toString");n(10).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(o(n,"name")||a(n,"name",e)),t[e]!==n&&(l&&(o(n,r)||a(n,r,t[e]?""+t[e]:c.join(String(e)))),t===i?t[e]=n:s?t[e]?t[e]=n:a(t,e,n):(delete t[e],a(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[r]||s.call(this)})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var i=n(13),a=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,a){return t.call(e,n,i,a)}}return function(){return t.apply(e,arguments)}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(2),a=n(41),o=n(29),r=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),a)try{return r(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var i=n(7);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},function(t,e,n){var i=n(23),a=n(16);t.exports=function(t){return i(a(t))}},function(t,e,n){var i=n(53),a=Math.min;t.exports=function(t){return t>0?a(i(t),9007199254740991):0}},function(t,e,n){var i=n(11),a=n(23),o=n(28),r=n(19),s=n(64);t.exports=function(t,e){var n=1==t,c=2==t,l=3==t,u=4==t,d=6==t,p=5==t||d,f=e||s;return function(e,s,h){for(var A,v,m=o(e),b=a(m),g=i(s,h,3),y=r(b.length),x=0,w=n?f(e,y):c?f(e,0):void 0;y>x;x++)if((p||x in b)&&(A=b[x],v=g(A,x,m),t))if(n)w[x]=v;else if(v)switch(t){case 3:return!0;case 5:return A;case 6:return x;case 2:w.push(A)}else if(u)return!1;return d?-1:l||u?u:w}}},function(t,e,n){var i=n(5),a=n(0).document,o=i(a)&&i(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(13).f,a=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(49)("keys"),a=n(30);t.exports=function(t){return i[t]||(i[t]=a(t))}},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!i(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";var i=n(0),a=n(12),o=n(9),r=n(67),s=n(29),c=n(7),l=n(77).f,u=n(45).f,d=n(13).f,p=n(51).trim,f=i.Number,h=f,A=f.prototype,v="Number"==o(n(44)(A)),m="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,i,a,o=(e=m?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var r,c=e.slice(2),l=0,u=c.length;l<u;l++)if((r=c.charCodeAt(l))<48||r>a)return NaN;return parseInt(c,i)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(v?c(function(){A.valueOf.call(n)}):"Number"!=o(n))?r(new h(b(e)),n,f):b(e)};for(var g,y=n(4)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)a(h,g=y[x])&&!a(f,g)&&d(f,g,u(h,g));f.prototype=A,A.constructor=f,n(6)(i,"Number",f)}},function(t,e,n){"use strict";function i(t){return!(0===t||(!Array.isArray(t)||0!==t.length)&&t)}function a(t,e,n,i){return t.filter(function(t){return function(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}(i(t,n),e)})}function o(t){return t.filter(function(t){return!t.$isLabel})}function r(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function s(t,e,i,o,r){return function(s){return s.map(function(s){var c;if(!s[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=a(s[i],t,e,r);return l.length?(c={},n.i(p.a)(c,o,s[o]),n.i(p.a)(c,i,l),c):[]})}}var c=n(59),l=n(54),u=(n.n(l),n(95)),d=(n.n(u),n(31)),p=(n.n(d),n(58)),f=n(91),h=(n.n(f),n(98)),A=(n.n(h),n(92)),v=(n.n(A),n(88)),m=(n.n(v),n(97)),b=(n.n(m),n(89)),g=(n.n(b),n(96)),y=(n.n(g),n(93)),x=(n.n(y),n(90)),w=(n.n(x),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return{search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0])},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):a(n,e,this.label,this.customLabel):this.groupValues?r(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(function(t){return function(){return!t.apply(void 0,arguments)}}(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null))},search:function(){this.$emit("search-change",this.search,this.id)}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return w(s(e,n,this.groupValues,this.groupLabel,this.customLabel),r(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return w(r(this.groupValues,this.groupLabel),o)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return!!t.$isDisabled},getOptionLabel:function(t){if(i(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)this.selectGroup(t);else if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return-1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id)}else{var a=n[this.groupValues].filter(function(t){return!(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",a,this.id),this.$emit("input",this.internalValue.concat(a),this.id)}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var a=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",a,this.id)}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}}}}},function(t,e,n){"use strict";var i=n(54),a=(n.n(i),n(31));n.n(a),e.a={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,n){"use strict";var i=n(36),a=n(74),o=n(15),r=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=r(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,a(1)):a(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){"use strict";var i=n(31),a=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[a.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return(this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return!(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}}},function(t,e,n){var i=n(1)("unscopables"),a=Array.prototype;null==a[i]&&n(8)(a,i,{}),t.exports=function(t){a[i][t]=!0}},function(t,e,n){var i=n(18),a=n(19),o=n(85);t.exports=function(t){return function(e,n,r){var s,c=i(e),l=a(c.length),u=o(r,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e,n){var i=n(9),a=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),a))?n:o?i(e):"Object"==(r=i(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){"use strict";function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i}),this.resolve=a(e),this.reject=a(n)}var a=n(14);t.exports.f=function(t){return new i(t)}},function(t,e,n){var i=n(2),a=n(76),o=n(22),r=n(27)("IE_PROTO"),s=function(){},c=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;i--;)delete c.prototype[o[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=i(t),n=new s,s.prototype=null,n[r]=t):n=c(),void 0===e?n:a(n,e)}},function(t,e,n){var i=n(79),a=n(25),o=n(18),r=n(29),s=n(12),c=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=r(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return a(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(12),a=n(18),o=n(37)(!1),r=n(27)("IE_PROTO");t.exports=function(t,e){var n,s=a(t),c=0,l=[];for(n in s)n!=r&&i(s,n)&&l.push(n);for(;e.length>c;)i(s,n=e[c++])&&(~o(l,n)||l.push(n));return l}},function(t,e,n){var i=n(46),a=n(22);t.exports=Object.keys||function(t){return i(t,a)}},function(t,e,n){var i=n(2),a=n(5),o=n(43);t.exports=function(t,e){if(i(t),a(e)&&e.constructor===t)return e;var n=o.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var i=n(10),a=n(0),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var i=n(2),a=n(14),o=n(1)("species");t.exports=function(t,e){var n,r=i(t).constructor;return void 0===r||null==(n=i(r)[o])?e:a(n)}},function(t,e,n){var i=n(3),a=n(16),o=n(7),r=n(84),s="["+r+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(t,e,n){var a={},s=o(function(){return!!r[t]()||"​"!="​"[t]()}),c=a[t]=s?e(d):r[t];n&&(a[n]=c),i(i.P+i.F*s,"String",a)},d=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},function(t,e,n){var i,a,o,r=n(11),s=n(68),c=n(40),l=n(21),u=n(0),d=u.process,p=u.setImmediate,f=u.clearImmediate,h=u.MessageChannel,A=u.Dispatch,v=0,m={},b=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){b.call(t.data)};p&&f||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++v]=function(){s("function"==typeof t?t:Function(t),e)},i(v),v},f=function(t){delete m[t]},"process"==n(9)(d)?i=function(t){d.nextTick(r(b,t,1))}:A&&A.now?i=function(t){A.now(r(b,t,1))}:h?(a=new h,o=a.port2,a.port1.onmessage=g,i=r(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(i=function(t){u.postMessage(t+"","*")},u.addEventListener("message",g,!1)):i="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(r(b,t,1),0)}),t.exports={set:p,clear:f}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){"use strict";var i=n(3),a=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),i(i.P+i.F*o,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find")},function(t,e,n){"use strict";var i,a,o,r,s=n(24),c=n(0),l=n(11),u=n(38),d=n(3),p=n(5),f=n(14),h=n(61),A=n(66),v=n(50),m=n(52).set,b=n(75)(),g=n(43),y=n(80),x=n(86),w=n(48),_=c.TypeError,T=c.process,k=T&&T.versions,C=k&&k.v8||"",E=c.Promise,M="process"==u(T),S=function(){},D=a=g.f,O=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(S,S)};return(M||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e&&0!==C.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),B=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},I=function(t,e){if(!t._n){t._n=!0;var n=t._c;b(function(){for(var i=t._v,a=1==t._s,o=0;n.length>o;)!function(e){var n,o,r,s=a?e.ok:e.fail,c=e.resolve,l=e.reject,u=e.domain;try{s?(a||(2==t._h&&P(t),t._h=1),!0===s?n=i:(u&&u.enter(),n=s(i),u&&(u.exit(),r=!0)),n===e.promise?l(_("Promise-chain cycle")):(o=B(n))?o.call(n,c,l):c(n)):l(i)}catch(t){u&&!r&&u.exit(),l(t)}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){m.call(c,function(){var e,n,i,a=t._v,o=L(t);if(o&&(e=y(function(){M?T.emit("unhandledRejection",a,t):(n=c.onunhandledrejection)?n({promise:t,reason:a}):(i=c.console)&&i.error&&i.error("Unhandled promise rejection",a)}),t._h=M||L(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},P=function(t){m.call(c,function(){var e;M?T.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},j=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),I(e,!0))},$=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw _("Promise can't be resolved itself");(e=B(t))?b(function(){var i={_w:n,_d:!1};try{e.call(t,l($,i,1),l(j,i,1))}catch(t){j.call(i,t)}}):(n._v=t,n._s=1,I(n,!1))}catch(t){j.call({_w:n,_d:!1},t)}}};O||(E=function(t){h(this,E,"Promise","_h"),f(t),i.call(this);try{t(l($,this,1),l(j,this,1))}catch(t){j.call(this,t)}},(i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(81)(E.prototype,{then:function(t,e){var n=D(v(this,E));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=M?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&I(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l($,t,1),this.reject=l(j,t,1)},g.f=D=function(t){return t===E||t===r?new o(t):a(t)}),d(d.G+d.W+d.F*!O,{Promise:E}),n(26)(E,"Promise"),n(83)("Promise"),r=n(10).Promise,d(d.S+d.F*!O,"Promise",{reject:function(t){var e=D(this);return(0,e.reject)(t),e.promise}}),d(d.S+d.F*(s||!O),"Promise",{resolve:function(t){return w(s&&this===r?E:this,t)}}),d(d.S+d.F*!(O&&n(73)(function(t){E.all(t).catch(S)})),"Promise",{all:function(t){var e=this,n=D(e),i=n.resolve,a=n.reject,o=y(function(){var n=[],o=0,r=1;A(t,!1,function(t){var s=o++,c=!1;n.push(void 0),r++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--r||i(n))},a)}),--r||i(n)});return o.e&&a(o.v),n.promise},race:function(t){var e=this,n=D(e),i=n.reject,a=y(function(){A(t,!1,function(t){e.resolve(t).then(n.resolve,i)})});return a.e&&i(a.v),n.promise}})},function(t,e,n){"use strict";var i=n(3),a=n(10),o=n(0),r=n(50),s=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=r(this,a.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var i=n(35),a=n(101),o=n(100),r=function(t){n(99)},s=o(i.a,a.a,!1,r,null,null);e.a=s.exports},function(t,e,n){"use strict";e.a=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),a=(n.n(i),n(55)),o=(n.n(a),n(56)),r=(n.n(o),n(57)),s=n(32),c=n(33);n.d(e,"Multiselect",function(){return r.a}),n.d(e,"multiselectMixin",function(){return s.a}),n.d(e,"pointerMixin",function(){return c.a}),e.default=r.a},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var i=n(14),a=n(28),o=n(23),r=n(19);t.exports=function(t,e,n,s,c){i(e);var l=a(t),u=o(l),d=r(l.length),p=c?d-1:0,f=c?-1:1;if(n<2)for(;;){if(p in u){s=u[p],p+=f;break}if(p+=f,c?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;c?p>=0:d>p;p+=f)p in u&&(s=e(s,u[p],p,l));return s}},function(t,e,n){var i=n(5),a=n(42),o=n(1)("species");t.exports=function(t){var e;return a(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!a(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)}},function(t,e,n){"use strict";var i=n(8),a=n(6),o=n(7),r=n(16),s=n(1);t.exports=function(t,e,n){var c=s(t),l=n(r,c,""[t]),u=l[0],d=l[1];o(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(a(String.prototype,t,u),i(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},function(t,e,n){var i=n(11),a=n(70),o=n(69),r=n(2),s=n(19),c=n(87),l={},u={},e=t.exports=function(t,e,n,d,p){var f,h,A,v,m=p?function(){return t}:c(t),b=i(n,d,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(f=s(t.length);f>g;g++)if((v=e?b(r(h=t[g])[0],h[1]):b(t[g]))===l||v===u)return v}else for(A=m.call(t);!(h=A.next()).done;)if((v=a(A,b,h.value,e))===l||v===u)return v};e.BREAK=l,e.RETURN=u},function(t,e,n){var i=n(5),a=n(82).set;t.exports=function(t,e,n){var o,r=e.constructor;return r!==n&&"function"==typeof r&&(o=r.prototype)!==n.prototype&&i(o)&&a&&a(t,o),t}},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var i=n(15),a=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[a]===t)}},function(t,e,n){var i=n(2);t.exports=function(t,e,n,a){try{return a?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(44),a=n(25),o=n(26),r={};n(8)(r,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(r,{next:a(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var i=n(24),a=n(3),o=n(6),r=n(8),s=n(15),c=n(71),l=n(26),u=n(78),d=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,n,h,A,v,m){c(n,e,h);var b,g,y,x=function(t){if(!p&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",_="values"==A,T=!1,k=t.prototype,C=k[d]||k["@@iterator"]||A&&k[A],E=C||x(A),M=A?_?x("entries"):E:void 0,S="Array"==e&&k.entries||C;if(S&&(y=u(S.call(new t)))!==Object.prototype&&y.next&&(l(y,w,!0),i||"function"==typeof y[d]||r(y,d,f)),_&&C&&"values"!==C.name&&(T=!0,E=function(){return C.call(this)}),i&&!m||!p&&!T&&k[d]||r(k,d,E),s[e]=E,s[w]=f,A)if(b={values:_?E:x("values"),keys:v?E:x("keys"),entries:M},m)for(g in b)g in k||o(k,g,b[g]);else a(a.P+a.F*(p||T),e,b);return b}},function(t,e,n){var i=n(1)("iterator"),a=!1;try{var o=[7][i]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var o=[7],r=o[i]();r.next=function(){return{done:n=!0}},o[i]=function(){return r},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(0),a=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,r=i.process,s=i.Promise,c="process"==n(9)(r);t.exports=function(){var t,e,n,l=function(){var i,a;for(c&&(i=r.domain)&&i.exit();t;){a=t.fn,t=t.next;try{a()}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter()};if(c)n=function(){r.nextTick(l)};else if(!o||i.navigator&&i.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);n=function(){u.then(l)}}else n=function(){a.call(i,l)};else{var d=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=d=!d}}return function(i){var a={fn:i,next:void 0};e&&(e.next=a),t||(t=a,n()),e=a}}},function(t,e,n){var i=n(13),a=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){a(t);for(var n,r=o(e),s=r.length,c=0;s>c;)i.f(t,n=r[c++],e[n]);return t}},function(t,e,n){var i=n(46),a=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},function(t,e,n){var i=n(12),a=n(28),o=n(27)("IE_PROTO"),r=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?r:null}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var a in e)i(t,a,e[a],n);return t}},function(t,e,n){var i=n(5),a=n(2),o=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},function(t,e,n){"use strict";var i=n(0),a=n(13),o=n(4),r=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[r]&&a.f(e,r,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){var i=n(53),a=Math.max,o=Math.min;t.exports=function(t,e){return(t=i(t))<0?a(t+e,0):o(t,e)}},function(t,e,n){var i=n(0),a=i.navigator;t.exports=a&&a.userAgent||""},function(t,e,n){var i=n(38),a=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(null!=t)return t[a]||t["@@iterator"]||o[i(t)]}},function(t,e,n){"use strict";var i=n(3),a=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return a(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),a=n(37)(!1),o=[].indexOf,r=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(r||!n(17)(o)),"Array",{indexOf:function(t){return r?o.apply(this,arguments)||0:a(this,t,arguments[1])}})},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)})},function(t,e,n){"use strict";var i=n(3),a=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return a(this,t,arguments[1])}})},function(t,e,n){"use strict";var i=n(3),a=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return a(this,t,arguments.length,arguments[1],!1)}})},function(t,e,n){var i=Date.prototype,a=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t==t?a.call(this):"Invalid Date"})},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)})},function(t,e,n){n(65)("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},n]})},function(t,e,n){"use strict";n(94);var i=n(2),a=n(39),o=n(4),r=/./.toString,s=function(t){n(6)(RegExp.prototype,"toString",t,!0)};n(7)(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?s(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?a.call(t):void 0)}):"toString"!=r.name&&s(function(){return r.call(this)})},function(t,e,n){"use strict";n(51)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){for(var i=n(34),a=n(47),o=n(6),r=n(0),s=n(8),c=n(15),l=n(1),u=l("iterator"),d=l("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(f),A=0;A<h.length;A++){var v,m=h[A],b=f[m],g=r[m],y=g&&g.prototype;if(y&&(y[u]||s(y,u,p),y[d]||s(y,d,m),c[m]=p,b))for(v in i)y[v]||o(y,v,i[v],!0)}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,a,o){var r,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,s=t.default);var l,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=i),l){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),p(t,e)}):u.beforeCreate=p?[].concat(p,l):[l]}return{esModule:r,exports:s,options:u}}},function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return[t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e)},mousedown:function(n){n.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement()}],keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i)},mousedown:function(n){n.preventDefault(),t.selectGroup(e)}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},staticRenderFns:[]};e.a=i}])},function(t,e,n){"use strict";n.r(e),
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default={data:function(){return{isFullscreen:this._isFullscreen()}},beforeMount:function(){window.addEventListener("resize",this._onResize)},beforeDestroy:function(){window.removeEventListener("resize",this._onResize)},methods:{_onResize:function(){this.isFullscreen=this._isFullscreen()},_isFullscreen:function(){return window.outerHeight===screen.height}}}},function(t,e,n){"use strict";n.r(e),
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default={data:function(){return{isMobile:this._isMobile()}},beforeMount:function(){window.addEventListener("resize",this._onResize)},beforeDestroy:function(){window.removeEventListener("resize",this._onResize)},methods:{_onResize:function(){this.isMobile=this._isMobile()},_isMobile:function(){return document.documentElement.clientWidth<768}}}},function(t,e,n){"use strict";n.r(e);var i=n(23),a=n(125),o=n.n(a),r=n(34),s=n.n(r),c={methods:{highlightText:function(t,e){return e.length?t.replace(new RegExp(e,"gi"),"<strong>".concat(e,"</strong>")):t}}},l={name:"AvatarSelectOption",components:{Avatar:n(66).default},mixins:[c],props:{desc:{type:String,default:""},displayName:{type:String,required:!0},icon:{type:String,default:""},user:{type:String,default:""},isNoUser:{type:Boolean,default:!1},search:{type:String,default:""}},computed:{highlightedDisplayName:function(){return this.highlightText(s()(this.displayName),this.search)},highlightedDesc:function(){return this.highlightText(s()(this.desc),this.search)}}},u=(n(182),n(0)),d=n(92),p=n.n(d),f=Object(u.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"option"},[n("Avatar",{staticClass:"option__avatar",attrs:{"display-name":t.displayName,user:t.user,"is-no-user":t.isNoUser,"disable-menu":!0,"disable-tooltip":!0}}),t._v(" "),n("div",{staticClass:"option__desc"},[n("span",{staticClass:"option__desc--lineone",domProps:{innerHTML:t._s(t.highlightedDisplayName)}}),t._v(" "),""!==t.desc?n("span",{staticClass:"option__desc--linetwo",domProps:{innerHTML:t._s(t.highlightedDesc)}}):t._e()]),t._v(" "),""!==t.icon?n("span",{staticClass:"icon option__icon",class:t.icon}):t._e()],1)},[],!1,null,"30d8da34",null);"function"==typeof p.a&&p()(f);var h=f.exports,A={name:"EllipsisedOption",mixins:[c],props:{option:{type:[String,Object],required:!0,default:""},label:{type:String,default:""},search:{type:String,default:""}},computed:{name:function(){return this.$parent.getOptionLabel(this.option)},needsTruncate:function(){return this.name&&this.name.length>=10},part1:function(){if(this.needsTruncate){var t=Math.min(Math.floor(this.name.length/2),10);return this.name.substr(0,this.name.length-t)}return this.name},part2:function(){if(this.needsTruncate){var t=Math.min(Math.floor(this.name.length/2),10);return this.name.substr(this.name.length-t)}return""},highlightedPart1:function(){return this.highlightText(s()(this.part1),this.search)},highlightedPart2:function(){return this.highlightText(s()(this.part2),this.search)}}},v=(n(184),Object(u.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"name-parts",attrs:{title:t.name}},[n("span",{staticClass:"name-parts__first",domProps:{innerHTML:t._s(t.highlightedPart1)}}),t._v(" "),t.part2?n("span",{staticClass:"name-parts__last",domProps:{innerHTML:t._s(t.highlightedPart2)}}):t._e()])},[],!1,null,"c4325954",null).exports),m=n(7),b=n(126),g={name:"Multiselect",components:{AvatarSelectOption:h,EllipsisedOption:v,VueMultiselect:n.n(b).a},directives:{tooltip:m.default},inheritAttrs:!1,props:{value:{default:function(){return[]}},multiple:{type:Boolean,default:!1},limit:{type:Number,default:99999},label:{type:String,default:""},trackBy:{type:String,default:""},userSelect:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoLimit:{type:Boolean,default:!0},tagWidth:{type:Number,default:150,validator:function(t){return t>0}}},data:function(){return{elWidth:0}},computed:{maxOptions:function(){if(this.autoLimit&&this.elWidth>0&&0!==this.tagWidth){var t=Math.floor(this.elWidth/this.tagWidth);return t>0?t:1}return this.limit?this.limit:9999},limitString:function(){return"+".concat(this.value.length-this.maxOptions)}},watch:{value:function(){this.updateWidth()}},mounted:function(){this.updateWidth(),window.addEventListener("resize",this.updateWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.updateWidth)},methods:{formatLimitTitle:function(t){var e=this;if(Array.isArray(t)&&t.length>0){var n=t;return"object"===o()(t[0])&&(n=t.map(function(t){return t[e.label]})),n.slice(this.maxOptions).join(", ")}return""},updateWidth:function(){this.$el&&this.$el.querySelector(".multiselect__tags-wrap")&&(this.elWidth=this.$el.querySelector(".multiselect__tags-wrap").offsetWidth-10)}}},y=n(93),x=n.n(y),w=Object(u.a)(g,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueMultiselect",t._g(t._b({class:[{"icon-loading-small":t.loading},t.multiple?"multiselect--multiple":"multiselect--single"],attrs:{value:t.value,limit:t.maxOptions,"close-on-select":!t.multiple,multiple:t.multiple,label:t.label,"track-by":t.trackBy,"tag-placeholder":"create"},on:{"update:value":function(e){return t.$emit("update:value",t.value)}},scopedSlots:t._u([{key:"option",fn:function(e){return[t.userSelect&&!t.$scopedSlots.option?n("AvatarSelectOption",t._b({attrs:{search:e.search}},"AvatarSelectOption",e.option,!1)):t.$scopedSlots.option?t._t("option",null,null,e):n("EllipsisedOption",{attrs:{option:e.option,search:e.search,label:t.label}})]}},t.multiple?{key:"limit",fn:function(){return[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.formatLimitTitle(t.value),expression:"formatLimitTitle(value)",modifiers:{auto:!0}}],staticClass:"multiselect__limit"},[t._v("\n\t\t\t"+t._s(t.limitString)+"\n\t\t")])]},proxy:!0}:null,t._l(t.$scopedSlots,function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}})],null,!0)},"VueMultiselect",t.$attrs,!1),t.$listeners))},[],!1,null,null,null);"function"==typeof x.a&&x()(w);var _=w.exports;n(186);n.d(e,"Multiselect",function(){return _}),
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
Object(i.a)(_);e.default=_},function(e,n,i){"use strict";i.r(n);var a=i(23),o=i(40),r=i.n(o),s=i(30),c=i(67),l=i(7);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
function u(t,e){var n,i,a,o=e;this.start=function(){a=!0,i=new Date,n=setTimeout(t,o)},this.pause=function(){a=!1,clearTimeout(n),o-=new Date-i},this.clear=function(){a=!1,clearTimeout(n),o=0},this.getTimeLeft=function(){return a&&(this.pause(),this.start()),o},this.getStateRunning=function(){return a},this.start()}var d={name:"Modal",components:{Actions:s.default,ActionButton:c.default},directives:{tooltip:l.default},props:{title:{type:String,default:""},hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1},outTransition:{type:Boolean,default:!1},enableSlideshow:{type:Boolean,default:!1},clearViewDelay:{type:Number,default:5e3},slideshowDelay:{type:Number,default:3e3},slideshowPaused:{type:Boolean,default:!1},enableSwipe:{type:Boolean,default:!0},spreadNavigation:{type:Boolean,default:!1},size:{type:String,default:"normal",validator:function(t){return-1!==["normal","large","full"].indexOf(t)}},canClose:{type:Boolean,default:!0}},data:function(){return{mc:null,showModal:!1,clearView:!1,clearViewTimeout:null,playing:!1,slideshowTimeout:null}},computed:{modalTransitionName:function(){return"modal-".concat(this.outTransition?"out":"in")},playPauseTitle:function(){return this.playing?t("core","Pause slideshow"):t("core","Start slideshow")}},watch:{slideshowPaused:function(t){this.slideshowTimeout&&(t?this.slideshowTimeout.pause():this.slideshowTimeout.start())}},beforeMount:function(){window.addEventListener("keydown",this.handleKeydown)},beforeDestroy:function(){window.removeEventListener("keydown",this.handleKeydown)},mounted:function(){var t=this;this.showModal=!0,this.handleMouseMove(),this.mc=new r.a(this.$refs.mask),this.mc.on("swipeleft swiperight",function(e){t.handleSwipe(e)}),document.body.insertBefore(this.$el,document.body.lastChild)},unmounted:function(){this.mc.off("swipeleft swiperight"),this.mc.destroy()},methods:{previous:function(t){this.hasPrevious&&(t&&this.resetSlideshow(),this.$emit("previous",t))},next:function(t){this.hasNext&&(t&&this.resetSlideshow(),this.$emit("next",t))},close:function(t){var e=this;this.canClose&&(this.showModal=!1,setTimeout(function(){e.$emit("close",t)},300))},handleKeydown:function(t){switch(t.keyCode){case 37:this.previous(t);break;case 13:case 39:this.next(t);break;case 27:this.close(t)}},handleSwipe:function(t){this.enableSwipe&&("swipeleft"===t.type?this.next(t):"swiperight"===t.type&&this.previous(t))},handleMouseMove:function(){var t=this;this.clearViewDelay>0&&(this.clearView=!1,clearTimeout(this.clearViewTimeout),this.clearViewTimeout=setTimeout(function(){t.clearView=!0},this.clearViewDelay))},togglePlayPause:function(){this.playing=!this.playing,this.playing?this.handleSlideshow():this.clearSlideshowTimeout()},resetSlideshow:function(){this.playing=!this.playing,this.clearSlideshowTimeout(),this.$nextTick(function(){this.togglePlayPause()})},handleSlideshow:function(){var t=this;this.playing=!0,this.hasNext?this.slideshowTimeout=new u(function(){t.next(),t.handleSlideshow()},this.slideshowDelay):(this.playing=!1,this.clearSlideshowTimeout())},clearSlideshowTimeout:function(){this.slideshowTimeout&&this.slideshowTimeout.clear()}}},p=(i(180),i(0)),f=i(91),h=i.n(f),A=Object(p.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{ref:"mask",staticClass:"modal-mask",on:{click:t.handleMouseMove,mousemove:t.handleMouseMove,touchmove:t.handleMouseMove}},[n("transition",{attrs:{name:"fade-visibility"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.clearView,expression:"!clearView"}],staticClass:"modal-header",class:{invisible:t.clearView}},[""!==t.title.trim()?n("div",{staticClass:"modal-title"},[t._v("\n\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t")]):t._e(),t._v(" "),n("div",{staticClass:"icons-menu"},[n("Actions",{staticClass:"header-actions"},[t._t("actions")],2),t._v(" "),t.hasNext&&t.enableSlideshow?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.playPauseTitle,expression:"playPauseTitle",modifiers:{auto:!0}}],staticClass:"play-pause",class:{"play-pause--paused":t.slideshowPaused},on:{click:t.togglePlayPause}},[n("div",{class:[t.playing?"icon-pause":"icon-play"]},[n("span",{staticClass:"hidden-visually"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.playPauseTitle)+"\n\t\t\t\t\t\t\t")])]),t._v(" "),t.playing?n("svg",{staticClass:"progress-ring",attrs:{height:"50",width:"50"}},[n("circle",{staticClass:"progress-ring__circle",attrs:{stroke:"white","stroke-width":"2",fill:"transparent",r:"15",cx:"25",cy:"25"}})]):t._e()]):t._e(),t._v(" "),t.canClose?n("Actions",{staticClass:"header-close"},[n("ActionButton",{attrs:{icon:"icon-close"},on:{click:t.close}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("core","Close"))+"\n\t\t\t\t\t\t")])],1):t._e()],1)])]),t._v(" "),n("transition",{attrs:{name:t.modalTransitionName}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-wrapper",class:["modal-wrapper--"+t.size,t.spreadNavigation?"modal-wrapper--spread-navigation":""],on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("transition",{attrs:{name:"fade-visibility"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.hasPrevious&&!t.clearView,expression:"hasPrevious && !clearView"}],staticClass:"prev",class:{invisible:t.clearView||!t.hasPrevious},on:{click:t.previous}},[n("div",{staticClass:"icon icon-previous"},[n("span",{staticClass:"hidden-visually"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("core","Previous"))+"\n\t\t\t\t\t\t\t")])])])]),t._v(" "),n("div",{staticClass:"modal-container"},[t._t("default")],2),t._v(" "),n("transition",{attrs:{name:"fade-visibility"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.hasNext&&!t.clearView,expression:"hasNext && !clearView"}],staticClass:"next",class:{invisible:t.clearView||!t.hasNext},on:{click:t.next}},[n("div",{staticClass:"icon icon-next"},[n("span",{staticClass:"hidden-visually"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("core","Next"))+"\n\t\t\t\t\t\t\t")])])])])],1)])],1)])},[],!1,null,"9c792ef2",null);"function"==typeof h.a&&h()(A);var v=A.exports;i.d(n,"Modal",function(){return v}),
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
Object(a.a)(v);n.default=v},function(t,e,n){"use strict";n.r(e);var i=n(5),a=n(8),o={name:"ActionCheckbox",mixins:[i.a],props:{id:{type:String,default:function(){return"action-"+Object(a.a)()},validator:function(t){return""!==t.trim()}},checked:{type:Boolean,default:!1},value:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1}},computed:{isFocusable:function(){return!this.disabled}},methods:{checkInput:function(t){this.$refs.label.click()},onChange:function(t){this.$emit("update:checked",this.$refs.checkbox.checked),this.$emit("change",t),this.$refs.checkbox.checked?this.$emit("check"):this.$emit("uncheck")}}},r=(n(150),n(0)),s=n(85),c=n.n(s),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("span",{staticClass:"action-checkbox"},[n("input",{ref:"checkbox",staticClass:"checkbox action-checkbox__checkbox",class:{focusable:t.isFocusable},attrs:{id:t.id,disabled:t.disabled,type:"checkbox"},domProps:{checked:t.checked,value:t.value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.checkInput(e))},change:t.onChange}}),t._v(" "),n("label",{ref:"label",staticClass:"action-checkbox__label",attrs:{for:t.id}},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"e8e451cc",null);"function"==typeof c.a&&c()(l);var u=l.exports;n.d(e,"ActionCheckbox",function(){return u});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=u},function(t,e,n){"use strict";n.r(e);var i=n(5),a=n(8),o={name:"ActionInput",components:{DatetimePicker:n(68).default},mixins:[i.a],props:{id:{type:String,default:function(){return"action-"+Object(a.a)()},validator:function(t){return""!==t.trim()}},icon:{type:String,default:"",required:!0},type:{type:String,default:"text",validator:function(t){return["date","datetime-local","month","number","password","search","tel","text","time","url","week"].indexOf(t)>-1}},value:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{isIconUrl:function(){try{return new URL(this.icon)}catch(t){return!1}},isDatePickerType:function(){switch(this.type){case"date":case"month":case"time":return this.type;case"datetime-local":return"datetime"}return!1},isFocusable:function(){return!this.disabled}},methods:{onLeave:function(){this.$refs.datetimepicker&&this.$refs.datetimepicker.$refs.datepicker&&this.$refs.datetimepicker.$refs.datepicker.closePopup()},onInput:function(t){this.$emit("input",t),this.$emit("update:value",t.target?t.target.value:t)},onSubmit:function(t){if(t.preventDefault(),t.stopPropagation(),this.disabled)return!1;this.$emit("submit",t)},onChange:function(t){this.$emit("change",t)}}},r=(n(152),n(0)),s=n(86),c=n.n(s),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("span",{staticClass:"action-input",class:{"action-input--picker":t.isDatePickerType,"action-input-picker--disabled":t.disabled},on:{mouseleave:t.onLeave}},[n("span",{staticClass:"action-input__icon",class:[t.isIconUrl?"action-input__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),n("form",{ref:"form",staticClass:"action-input__form",attrs:{disabled:t.disabled},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.isDatePickerType?n("DatetimePicker",t._b({ref:"datetimepicker",staticClass:"action-input__picker",attrs:{value:t.value,placeholder:t.text,disabled:t.disabled,type:t.isDatePickerType,"input-class":["mx-input",{focusable:t.isFocusable}]},on:{input:t.onInput,change:t.onChange}},"DatetimePicker",t.$attrs,!1)):[n("input",{staticClass:"action-input__submit",attrs:{id:t.id,type:"submit"}}),t._v(" "),n("input",t._b({staticClass:"action-input__input",class:{focusable:t.isFocusable},attrs:{type:t.type,placeholder:t.text,disabled:t.disabled},domProps:{value:t.value},on:{input:t.onInput,change:t.onChange}},"input",t.$attrs,!1)),t._v(" "),n("label",{directives:[{name:"show",rawName:"v-show",value:!t.disabled,expression:"!disabled"}],staticClass:"action-input__label",attrs:{for:t.id}})]],2)])])},[],!1,null,"e093ae26",null);"function"==typeof c.a&&c()(l);var u=l.exports;n.d(e,"ActionInput",function(){return u});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=u},function(t,e,n){"use strict";n.r(e);var i={name:"ActionLink",mixins:[n(15).a],props:{href:{type:String,default:"#",required:!0,validator:function(t){try{return new URL(t)}catch(e){return t.startsWith("#")||t.startsWith("/")}}},download:{type:String,default:null},target:{type:String,default:"_self",validator:function(t){return["_blank","_self","_parent","_top"].indexOf(t)>-1}}}},a=(n(154),n(0)),o=n(87),r=n.n(o),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"action-link focusable",attrs:{download:t.download,href:t.href,target:t.target,rel:"noreferrer noopener"},on:{click:t.onClick}},[n("span",{staticClass:"action-link__icon",class:[t.isIconUrl?"action-link__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),t.title?n("p",[n("strong",{staticClass:"action-link__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"action-link__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?n("p",{staticClass:"action-link__longtext",domProps:{textContent:t._s(t.text)}}):n("span",{staticClass:"action-link__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"d9a2010c",null);"function"==typeof r.a&&r()(s);var c=s.exports;n.d(e,"ActionLink",function(){return c});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=c},function(t,e,n){"use strict";n.r(e);var i=n(5),a=n(8),o={name:"ActionRadio",mixins:[i.a],props:{id:{type:String,default:function(){return"action-"+Object(a.a)()},validator:function(t){return""!==t.trim()}},checked:{type:Boolean,default:!1},name:{type:String,required:!0},value:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1}},computed:{isFocusable:function(){return!this.disabled}},methods:{toggleInput:function(t){this.$refs.label.click()},onChange:function(t){this.$emit("update:checked",this.$refs.radio.checked),this.$emit("change",t)}}},r=(n(156),n(0)),s=n(88),c=n.n(s),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("span",{staticClass:"action-radio"},[n("input",{ref:"radio",staticClass:"radio action-radio__radio",class:{focusable:t.isFocusable},attrs:{id:t.id,disabled:t.disabled,name:t.name,type:"radio"},domProps:{checked:t.checked,value:t.value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.toggleInput(e))},change:t.onChange}}),t._v(" "),n("label",{ref:"label",staticClass:"action-radio__label",attrs:{for:t.id}},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"2f82ba38",null);"function"==typeof c.a&&c()(l);var u=l.exports;n.d(e,"ActionRadio",function(){return u});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=u},function(t,e,n){"use strict";n.r(e);var i={name:"ActionRouter",mixins:[n(15).a],props:{to:{type:[String,Object],default:"",required:!0},exact:{type:Boolean,default:!1}}},a=(n(158),n(0)),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("router-link",{staticClass:"action-router focusable",attrs:{to:t.to,exact:t.exact,rel:"noreferrer noopener"}},[n("span",{staticClass:"action-router__icon",class:[t.isIconUrl?"action-router__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),t.title?n("p",[n("strong",{staticClass:"action-router__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"action-router__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?n("p",{staticClass:"action-router__longtext",domProps:{textContent:t._s(t.text)}}):n("span",{staticClass:"action-router__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)],1)},[],!1,null,"3bf6846c",null).exports;n.d(e,"ActionRouter",function(){return o});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i={name:"ActionText",mixins:[n(15).a]},a=(n(160),n(0)),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"action-text"},[n("span",{staticClass:"action-text__icon",class:[t.isIconUrl?"action-text__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),t.title?n("p",[n("strong",{staticClass:"action-text__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"action-text__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?n("p",{staticClass:"action-text__longtext",domProps:{textContent:t._s(t.text)}}):n("span",{staticClass:"action-text__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"b4603aaa",null).exports;n.d(e,"ActionText",function(){return o});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i=n(15),a=n(8),o={name:"ActionTextEditable",mixins:[i.a],props:{id:{type:String,default:function(){return"action-"+Object(a.a)()},validator:function(t){return""!==t.trim()}},disabled:{type:Boolean,default:!1},value:{type:String,default:""}},computed:{isFocusable:function(){return!this.disabled}},methods:{onInput:function(t){this.$emit("input",t),this.$emit("update:value",t.target.value)},onSubmit:function(t){if(t.preventDefault(),t.stopPropagation(),this.disabled)return!1;this.$emit("submit",t)}}},r=(n(162),n(0)),s=n(89),c=n.n(s),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("span",{staticClass:"action-text-editable"},[n("span",{staticClass:"action-text-editable__icon",class:[t.isIconUrl?"action-text-editable__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),n("form",{ref:"form",staticClass:"action-text-editable__form",attrs:{disabled:t.disabled},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{staticClass:"action-text-editable__submit",attrs:{id:t.id,type:"submit"}}),t._v(" "),t.title?n("strong",{staticClass:"action-text__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]):t._e(),t._v(" "),n("textarea",t._b({class:["action-text-editable__textarea",{focusable:t.isFocusable}],attrs:{disabled:t.disabled},domProps:{value:t.value},on:{input:t.onInput}},"textarea",t.$attrs,!1)),t._v(" "),n("label",{directives:[{name:"show",rawName:"v-show",value:!t.disabled,expression:"!disabled"}],staticClass:"action-text-editable__label",attrs:{for:t.id}})])])])},[],!1,null,"43b509b7",null);"function"==typeof c.a&&c()(l);var u=l.exports;n.d(e,"ActionTextEditable",function(){return u});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=u},function(t,e,n){"use strict";n.r(e);var i=n(40),a=n.n(i),o={name:"AppContent",components:{AppNavigationToggle:n(84).default},data:function(){return{opened:!1}},mounted:function(){var t=this;this.mc=new a.a(this.$el,{cssProps:{userSelect:"text"}}),this.mc.on("swipeleft swiperight",function(e){t.handleSwipe(e)})},unmounted:function(){this.mc.off("swipeleft swiperight"),this.mc.destroy()},methods:{toggleNavigation:function(t){this.opened=t||!this.opened,this.opened?document.body.classList.add("nav-open"):document.body.classList.remove("nav-open")},handleSwipe:function(t){var e=t.srcEvent.pageX-t.deltaX,n=Math.abs(t.deltaX)>70;n&&e<40?this.toggleNavigation(!0):this.opened&&n&&e<340&&this.toggleNavigation(!1)}}},r=(n(164),n(0)),s=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-snapper",style:this.opened?"transform: translateX(300px)":"",attrs:{id:"app-content"}},[e("AppNavigationToggle",{attrs:{"aria-expanded":this.opened,"aria-controls":"app-navigation"},on:{click:this.toggleNavigation}}),this._v(" "),this._t("default")],2)},[],!1,null,"0fe2f738",null).exports;n.d(e,"AppContent",function(){return s});
/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=s},function(t,e,n){"use strict";n.r(e);var i={name:"AppContentDetails"},a=n(0),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"app-content-details"},[this._t("default")],2)},[],!1,null,null,null).exports;n.d(e,"AppContentDetails",function(){return o});
/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i={name:"AppContentList",props:{selection:{type:Boolean,default:!1},showDetails:{type:Boolean,default:!1}}},a=n(0),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"app-content-list",class:{selection:this.selection,showdetails:this.showDetails}},[this._t("default")],2)},[],!1,null,null,null).exports;n.d(e,"AppContentList",function(){return o});
/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i={name:"AppNavigation"},a=(n(166),n(0)),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"app-navigation"}},[this._t("default")],2)},[],!1,null,null,null).exports;n.d(e,"AppNavigation",function(){return o});
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i={name:"AppNavigationCaption",props:{text:{type:String,required:!0}}},a=(n(168),n(0)),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("li",{staticClass:"app-navigation-caption--item"},[this._v("\n\t"+this._s(this.text)+"\n")])},[],!1,null,"9639e4a4",null).exports;n.d(e,"AppNavigationCaption",function(){return o});e.default=o},function(t,e,n){"use strict";n.r(e);var i=n(69),a=n(14),o={name:"AppNavigationItem",components:{PopoverMenu:n(24).PopoverMenu,AppNavigationCounter:i.AppNavigationCounter},directives:{ClickOutside:a.directive},props:{item:{type:Object,required:!0},open:{type:Boolean,default:!1},menuOpen:{type:Boolean,default:!1}},data:function(){return{opened:this.open,openedMenu:this.menuOpen}},computed:{collapsible:function(){return this.item.collapsible&&this.item.children&&this.item.children.length>0},simpleAction:function(){return this.collapsible&&!this.item.action?this.toggleCollapse:this.item.action}},watch:{open:function(t){this.opened=t},menuOpen:function(t){this.openedMenu=t}},methods:{hideMenu:function(){this.openedMenu=!1,this.$emit("update:menuOpen",this.openedMenu)},toggleMenu:function(){this.openedMenu=!this.openedMenu,this.$emit("update:menuOpen",this.openedMenu)},toggleCollapse:function(){this.opened=!this.opened,this.$emit("update:open",this.opened)},callPreventStop:function(t,e){t&&(e.preventDefault(),e.stopPropagation(),t())},cancelEdit:function(t){Array.isArray(this.item.classes)&&(this.item.classes=this.item.classes.filter(function(t){return"editing"!==t})),this.item.edit.reset(t)},navElement:function(t){if(t.router){var e=t.router.exact;return void 0===t.router.exact&&(e=!0),{is:"router-link",tag:"li",to:t.router,exact:e}}return{is:"li"}}}},r=n(0),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav-element",t._b({class:[{"icon-loading-small":t.item.loading,open:t.opened,collapsible:t.collapsible},t.item.classes],attrs:{id:t.item.id,title:t.item.title}},"nav-element",t.navElement(t.item),!1),[t.item.bullet?n("div",{staticClass:"app-navigation-entry-bullet",style:{backgroundColor:t.item.bullet}}):t._e(),t._v(" "),t.collapsible?n("button",{staticClass:"collapse",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.toggleCollapse(e)}}}):t._e(),t._v(" "),n("a",{class:t.item.icon,attrs:{href:t.item.href?t.item.href:"#"},on:{click:function(e){return t.callPreventStop(t.simpleAction,e)}}},[t.item.iconUrl?n("img",{attrs:{alt:t.item.text,src:t.item.iconUrl}}):t._e(),t._v("\n\t\t"+t._s(t.item.text)+"\n\t")]),t._v(" "),t.item.utils?n("div",{staticClass:"app-navigation-entry-utils"},[n("ul",[t.item.utils.counter?n("AppNavigationCounter",{attrs:{highlighted:!0===t.item.utils.counter_highlighted}},[t._v("\n\t\t\t\t"+t._s(t.item.utils.counter)+"\n\t\t\t")]):t._e(),t._v(" "),t.item.utils.actions&&1===t.item.utils.actions.length?n("li",{staticClass:"app-navigation-entry-utils-menu-button"},[n("button",{class:t.item.utils.actions[0].icon,attrs:{title:t.item.utils.actions[0].text},on:{click:t.item.utils.actions[0].action}})]):t.item.utils.actions&&t.item.utils.actions.length>1?n("li",{staticClass:"app-navigation-entry-utils-menu-button"},[n("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMenu,expression:"hideMenu"}],on:{click:t.toggleMenu}})]):t._e()],1)]):t._e(),t._v(" "),t.item.utils&&t.item.utils.actions&&t.item.utils.actions.length>1?n("div",{staticClass:"app-navigation-entry-menu",class:{open:t.openedMenu}},[n("PopoverMenu",{attrs:{menu:t.item.utils.actions}})],1):t._e(),t._v(" "),t.item.undo?n("div",{staticClass:"app-navigation-entry-deleted"},[n("div",{staticClass:"app-navigation-entry-deleted-description"},[t._v("\n\t\t\t"+t._s(t.item.undo.text)+"\n\t\t")]),t._v(" "),n("button",{staticClass:"app-navigation-entry-deleted-button icon-history",attrs:{title:t.t("settings","Undo")}})]):t._e(),t._v(" "),t.item.edit?n("div",{staticClass:"app-navigation-entry-edit"},[n("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.item.edit.action(e)}}},[n("input",{attrs:{placeholder:t.item.edit.text,type:"text"}}),t._v(" "),n("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}}),t._v(" "),n("input",{staticClass:"icon-close",attrs:{type:"submit",value:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.cancelEdit(e)}}})])]):t._e(),t._v(" "),t.item.children?n("ul",t._l(t.item.children,function(t,e){return n("app-navigation-item",{key:e,attrs:{item:t}})}),1):t._e()])},[],!1,null,null,null).exports;n.d(e,"AppNavigationItem",function(){return s});
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=s},function(t,e,n){"use strict";n.r(e);var i={props:{buttonId:{type:String,required:!1,default:""},buttonClass:{type:[String,Array,Object],required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},text:{type:String,required:!0}}},a=n(0),o=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-navigation-new"},[n("button",{class:t.buttonClass,attrs:{id:t.buttonId,type:"button",disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t._v("\n\t\t"+t._s(t.text)+"\n\t")])])},[],!1,null,null,null).exports;n.d(e,"AppNavigationNew",function(){return o});
/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(e,n,i){"use strict";i.r(n);var a={directives:{ClickOutside:i(14).directive},props:{title:{type:String,required:!1,default:t("core","Settings")}},data:function(){return{open:!1}},methods:{toggleMenu:function(){this.open=!this.open},closeMenu:function(){this.open=!1}}},o=(i(170),i(0)),r=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeMenu,expression:"closeMenu"}],class:{open:t.open},attrs:{id:"app-settings"}},[n("div",{attrs:{id:"app-settings-header"}},[n("button",{staticClass:"settings-button",on:{click:t.toggleMenu}},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")])]),t._v(" "),n("transition",{attrs:{name:"slide-up"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],attrs:{id:"app-settings-content"}},[t._t("default")],2)])],1)},[],!1,null,"7dc165a0",null).exports;i.d(n,"AppNavigationSettings",function(){return r});
/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */n.default=r},function(t,e,n){"use strict";n.r(e);var i={name:"AppNavigationSpacer"},a=(n(172),n(0)),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("li",{staticClass:"app-navigation-spacer"})},[],!1,null,"18241e10",null).exports;n.d(e,"AppNavigationSpacer",function(){return o});
/**
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),o=n(30),r=n(59),s=function(t){return t&&"string"==typeof t&&""!==t.trim()&&-1===t.indexOf(" ")},c={name:"AppSidebar",components:{Actions:o.default},directives:{focus:r.default},props:{active:{type:String,default:""},title:{type:String,default:"",required:!0},titleEditable:{type:Boolean,default:!1},titlePlaceholder:{type:String,default:""},subtitle:{type:String,default:""},background:{type:String,default:""},starred:{type:Boolean,default:null},starLoading:{type:Boolean,default:!1},compact:{type:Boolean,default:!1}},data:function(){return{tabs:[],activeTab:"",isStarred:this.starred}},computed:{canStar:function(){return null!==this.isStarred},hasFigure:function(){return this.$slots.header||this.background},hasMultipleTabs:function(){return this.tabs.length>1},hasFigureClickListener:function(){return this.$listeners["figure-click"]},currentTabIndex:function(){var t=this;return this.tabs.findIndex(function(e){return e.id===t.activeTab})}},watch:{active:function(t){t!==this.activeTab&&this.updateActive()},starred:function(){this.isStarred=this.starred}},mounted:function(){this.updateTabs()},methods:{closeSidebar:function(t){this.$emit("close",t)},onFigureClick:function(t){this.$emit("figure-click",t)},setActive:function(t){var e=t.target.closest("a").dataset.id;this.activeTab=e,this.$emit("update:active",e)},focusPreviousTab:function(){this.currentTabIndex>0&&(this.activeTab=this.tabs[this.currentTabIndex-1].id,this.$emit("update:active",this.activeTab)),this.focusActiveTab()},focusNextTab:function(){this.currentTabIndex<this.tabs.length-1&&(this.activeTab=this.tabs[this.currentTabIndex+1].id,this.$emit("update:active",this.activeTab)),this.focusActiveTab()},focusFirstTab:function(){this.activeTab=this.tabs[0].id,this.$emit("update:active",this.activeTab),this.focusActiveTab()},focusLastTab:function(){this.activeTab=this.tabs[this.tabs.length-1].id,this.$emit("update:active",this.activeTab),this.focusActiveTab()},focusActiveTab:function(){this.$el.querySelector("#"+this.activeTab).focus()},focusActiveTabContent:function(){this.$el.querySelector("#tab-"+this.activeTab).focus()},updateActive:function(){var t=this;this.activeTab=this.active&&-1!==this.tabs.findIndex(function(e){return e.id===t.active})?this.active:this.tabs.length>0?this.tabs[0].id:""},toggleStarred:function(){this.isStarred=!this.isStarred,this.$emit("update:starred",this.isStarred)},updateTabs:function(){var t=this.$children.filter(function(t){return t.name&&"string"==typeof t.name&&s(t.id)&&s(t.icon)});0!==t.length&&t.length!==this.$children.length&&a.a.util.warn("Mixing tabs and non-tab-content is not possible."),this.tabs=t.sort(function(t,e){var n=t.order||0,i=e.order||0;return n===i?OC.Util.naturalSortCompare(t.name,e.name):n-i}),this.tabs.length>0&&this.updateActive()},onTitleInput:function(t){this.$emit("input:title",t),this.$emit("update:title",t.target.value)}}},l=(n(174),n(176),n(0)),u=n(90),d=n.n(u),p=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-right"}},[n("aside",{attrs:{id:"app-sidebar"}},[n("header",{staticClass:"app-sidebar-header",class:{"app-sidebar-header--with-figure":t.hasFigure,"app-sidebar-header--compact":t.compact}},[n("a",{staticClass:"app-sidebar__close icon-close",attrs:{href:"#",title:t.t("core","close")},on:{click:t.closeSidebar}}),t._v(" "),t.hasFigure?n("div",{staticClass:"app-sidebar-header__figure",class:{"app-sidebar-header__figure--with-action":t.hasFigureClickListener},style:{backgroundImage:"url("+t.background+")"},on:{click:t.onFigureClick}},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"app-sidebar-header__desc",class:{"app-sidebar-header__desc--with-star":t.canStar,"app-sidebar-header__desc--with-subtitle":t.subtitle&&!t.titleEditable,"app-sidebar-header__desc--editable":t.titleEditable&&!t.subtitle,"app-sidebar-header__desc--with-subtitle--editable":t.titleEditable&&t.subtitle}},[t.canStar?n("a",{staticClass:"app-sidebar-header__star",class:{"icon-starred":t.isStarred&&!t.starLoading,"icon-star":!t.isStarred&&!t.starLoading,"icon-loading-small":t.starLoading},on:{click:function(e){return e.preventDefault(),t.toggleStarred(e)}}}):t._e(),t._v(" "),t.titleEditable?t._e():n("h3",{staticClass:"app-sidebar-header__title"},[t._v("\n\t\t\t\t\t"+t._s(t.title)+"\n\t\t\t\t")]),t._v(" "),t.titleEditable?n("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"app-sidebar-header__title-input",attrs:{type:"text",placeholder:t.titlePlaceholder},domProps:{value:t.title},on:{input:t.onTitleInput}}):t._e(),t._v(" "),""!==t.subtitle.trim()?n("h4",{staticClass:"app-sidebar-header__subtitle"},[t._v("\n\t\t\t\t\t"+t._s(t.subtitle)+"\n\t\t\t\t")]):t._e(),t._v(" "),t.$slots["secondary-actions"]?n("Actions",{staticClass:"app-sidebar-header__menu"},[t._t("secondary-actions")],2):t._e()],1),t._v(" "),t.$slots["primary-actions"]?n("div",{staticClass:"app-sidebar-header__action"},[t._t("primary-actions")],2):t._e()]),t._v(" "),t.hasMultipleTabs?n("nav",{staticClass:"app-sidebar-tabs__nav",on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusPreviousTab(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?null:"button"in e&&2!==e.button?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusNextTab(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusActiveTabContent(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"page-up",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusFirstTab(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"page-down",void 0,e.key,void 0)?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.focusLastTab(e))}]}},[n("ul",t._l(t.tabs,function(e){return n("li",{key:e.id,staticClass:"app-sidebar-tabs__tab"},[n("a",{class:{active:t.activeTab===e.id},attrs:{id:e.id,"aria-controls":"tab-"+e.id,"aria-selected":t.activeTab===e.id,"data-id":e.id,href:"#tab-"+e.id,tabindex:t.activeTab===e.id?null:-1,role:"tab"},on:{click:function(e){return e.preventDefault(),t.setActive(e)}}},[n("span",{staticClass:"app-sidebar-tabs__tab-icon",class:e.icon}),t._v("\n\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t")])])}),0)]):t._e(),t._v(" "),n("div",{staticClass:"app-sidebar-tabs__content",class:{"app-sidebar-tabs__content--multiple":t.hasMultipleTabs}},[t._t("default",null,{activeTab:t.activeTab})],2)])])},[],!1,null,"5dafabf3",null);"function"==typeof d.a&&d()(p);var f=p.exports;n.d(e,"AppSidebar",function(){return f});
/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=f},function(t,e,n){"use strict";n.r(e);var i={name:"AppSidebarTab",props:{name:{type:String,default:"",required:!0},icon:{type:String,default:"",required:!0},order:{type:Number,default:0,required:!1}},computed:{id:function(){return this.name.toLowerCase().replace(/ /g,"-")},isActive:function(){return this.$parent.activeTab===this.id}}},a=(n(178),n(0)),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("section",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],attrs:{id:"tab-"+this.id,"aria-hidden":!this.isActive,"aria-labelledby":this.name,tabindex:"0",role:"tabpanel"}},[this._t("default")],2)},[],!1,null,"3f1c0b76",null).exports;n.d(e,"AppSidebarTab",function(){return o});
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e,n){"use strict";n.r(e);var i={props:{appName:{type:String,required:!0}}},a=n(0),o=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:"app-"+this.appName,attrs:{id:"content"}},[this._t("default")],2)},[],!1,null,null,null).exports;n.d(e,"Content",function(){return o});
/*
 * @copyright 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2018 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */e.default=o},function(t,e,n){"use strict";var i=n(47);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-e8e451cc]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-e8e451cc]{pointer-events:none;opacity:.5}.action--disabled[data-v-e8e451cc]:hover,.action--disabled[data-v-e8e451cc]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-e8e451cc]{opacity:1 !important}.action-checkbox[data-v-e8e451cc]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;cursor:pointer;white-space:nowrap;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-checkbox__checkbox[data-v-e8e451cc]{position:absolute;top:auto;left:-10000px;overflow:hidden;width:1px;height:1px}.action-checkbox__checkbox:focus+.action-checkbox__label[data-v-e8e451cc]{opacity:1}.action-checkbox__label[data-v-e8e451cc]{display:flex;align-items:center;width:100%;padding:0 !important;padding-right:14px !important;opacity:.7}.action-checkbox__label[data-v-e8e451cc]::before{margin:0 14px 0 !important}.action-checkbox--disabled[data-v-e8e451cc],.action-checkbox--disabled .action-checkbox__label[data-v-e8e451cc]{cursor:pointer}.action-checkbox:not(.action-checkbox--disabled):hover .action-checkbox__label[data-v-e8e451cc],.action-checkbox:not(.action-checkbox--disabled):focus .action-checkbox__label[data-v-e8e451cc]{opacity:1}\n",""])},function(t,e,n){"use strict";var i=n(48);n.n(i).a},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-e093ae26]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-e093ae26]:before{font-family:"iconfont-vue";content:""}button[data-v-e093ae26],input[data-v-e093ae26]:not([type=\'range\']),textarea[data-v-e093ae26]{margin:0;padding:7px 6px;cursor:text;color:var(--color-text-lighter);border:1px solid var(--color-border-dark);border-radius:var(--border-radius);outline:none;background-color:var(--color-main-background);font-size:13px}button[data-v-e093ae26]:not(:disabled):not(.primary):hover,button[data-v-e093ae26]:not(:disabled):not(.primary):focus,button:not(:disabled):not(.primary).active[data-v-e093ae26],input[data-v-e093ae26]:not([type=\'range\']):not(:disabled):not(.primary):hover,input[data-v-e093ae26]:not([type=\'range\']):not(:disabled):not(.primary):focus,input:not([type=\'range\']):not(:disabled):not(.primary).active[data-v-e093ae26],textarea[data-v-e093ae26]:not(:disabled):not(.primary):hover,textarea[data-v-e093ae26]:not(:disabled):not(.primary):focus,textarea:not(:disabled):not(.primary).active[data-v-e093ae26]{border-color:var(--color-primary-element);outline:none}button[data-v-e093ae26]:not(:disabled):not(.primary):active,input[data-v-e093ae26]:not([type=\'range\']):not(:disabled):not(.primary):active,textarea[data-v-e093ae26]:not(:disabled):not(.primary):active{color:var(--color-text-light);outline:none;background-color:var(--color-main-background)}button[data-v-e093ae26]:disabled,input[data-v-e093ae26]:not([type=\'range\']):disabled,textarea[data-v-e093ae26]:disabled{cursor:default;opacity:.5;color:var(--color-text-maxcontrast);background-color:var(--color-background-dark)}button[data-v-e093ae26]:required,input[data-v-e093ae26]:not([type=\'range\']):required,textarea[data-v-e093ae26]:required{box-shadow:none}button[data-v-e093ae26]:invalid,input[data-v-e093ae26]:not([type=\'range\']):invalid,textarea[data-v-e093ae26]:invalid{border-color:var(--color-error);box-shadow:none !important}button.primary[data-v-e093ae26],input:not([type=\'range\']).primary[data-v-e093ae26],textarea.primary[data-v-e093ae26]{cursor:pointer;color:var(--color-primary-text);border-color:var(--color-primary-element);background-color:var(--color-primary-element)}button.primary[data-v-e093ae26]:not(:disabled):hover,button.primary[data-v-e093ae26]:not(:disabled):focus,button.primary[data-v-e093ae26]:not(:disabled):active,input:not([type=\'range\']).primary[data-v-e093ae26]:not(:disabled):hover,input:not([type=\'range\']).primary[data-v-e093ae26]:not(:disabled):focus,input:not([type=\'range\']).primary[data-v-e093ae26]:not(:disabled):active,textarea.primary[data-v-e093ae26]:not(:disabled):hover,textarea.primary[data-v-e093ae26]:not(:disabled):focus,textarea.primary[data-v-e093ae26]:not(:disabled):active{border-color:var(--color-primary-element-light);background-color:var(--color-primary-element-light)}button.primary[data-v-e093ae26]:not(:disabled):active,input:not([type=\'range\']).primary[data-v-e093ae26]:not(:disabled):active,textarea.primary[data-v-e093ae26]:not(:disabled):active{color:var(--color-primary-text-dark)}button.primary[data-v-e093ae26]:disabled,input:not([type=\'range\']).primary[data-v-e093ae26]:disabled,textarea.primary[data-v-e093ae26]:disabled{cursor:default;color:var(--color-primary-text-dark);background-color:var(--color-primary-element)}li.active[data-v-e093ae26]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-e093ae26]{pointer-events:none;opacity:.5}.action--disabled[data-v-e093ae26]:hover,.action--disabled[data-v-e093ae26]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-e093ae26]{opacity:1 !important}.action-input[data-v-e093ae26]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;cursor:pointer;white-space:nowrap;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal}.action-input[data-v-e093ae26]:not(.action-input--picker){opacity:.7}.action-input[data-v-e093ae26]:not(.action-input--picker):hover,.action-input[data-v-e093ae26]:not(.action-input--picker):focus{opacity:1}.action-input--picker .action-input__icon[data-v-e093ae26]{opacity:.7}.action-input--picker:hover .action-input__icon[data-v-e093ae26],.action-input--picker:focus .action-input__icon[data-v-e093ae26]{opacity:1}.action-input>span[data-v-e093ae26]{cursor:pointer;white-space:nowrap}.action-input__icon[data-v-e093ae26]{min-width:0;min-height:0;padding:22px 0 22px 44px;background-position:14px center;background-size:16px}.action-input__form[data-v-e093ae26]{display:flex;align-items:center;flex:1 1 auto;margin:4px 0;padding-right:14px}.action-input__submit[data-v-e093ae26]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.action-input__label[data-v-e093ae26]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;margin:0 0 0 -8px;padding:7px 6px;cursor:pointer;opacity:1;color:var(--color-text-lighter);border:1px solid var(--color-border-dark);border-left-color:transparent;border-radius:0 var(--border-radius) var(--border-radius) 0;background-color:var(--color-main-background);background-clip:padding-box;font-size:16px}.action-input__label[data-v-e093ae26]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.action-input__input[data-v-e093ae26]{flex:1 1 auto;min-width:132px;min-height:36px;max-height:36px;margin:0}.action-input__input[data-v-e093ae26]:disabled{cursor:default}.action-input__input:not(:active):not(:hover):not(:focus):invalid+.action-input__label[data-v-e093ae26]{border-color:var(--color-error);border-left-color:transparent}.action-input__input:not(:active):not(:hover):not(:focus):not(:disabled)+.action-input__label[data-v-e093ae26]:active,.action-input__input:not(:active):not(:hover):not(:focus):not(:disabled)+.action-input__label[data-v-e093ae26]:hover,.action-input__input:not(:active):not(:hover):not(:focus):not(:disabled)+.action-input__label[data-v-e093ae26]:focus{border-color:var(--color-primary-element);border-radius:var(--border-radius)}.action-input__input:active:not(:disabled)+.action-input__label[data-v-e093ae26],.action-input__input:hover:not(:disabled)+.action-input__label[data-v-e093ae26],.action-input__input:focus:not(:disabled)+.action-input__label[data-v-e093ae26]{z-index:2;border-color:var(--color-primary-element);border-left-color:transparent}.action-input__picker[data-v-e093ae26] .mx-input{margin:0}li:last-child>.action-input[data-v-e093ae26]{margin-bottom:10px}li:first-child>.action-input[data-v-e093ae26]{margin-top:10px}\n',""])},function(t,e,n){"use strict";var i=n(49);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-d9a2010c]{box-shadow:inset 4px 0 var(--color-primary)}.action-link[data-v-d9a2010c]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-link[data-v-d9a2010c]:hover,.action-link[data-v-d9a2010c]:focus{opacity:1}.action-link>span[data-v-d9a2010c]{cursor:pointer;white-space:nowrap}.action-link__icon[data-v-d9a2010c]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-link p[data-v-d9a2010c]{width:150px;padding:7px 0;cursor:pointer;text-align:left;line-height:1.6em}.action-link__longtext[data-v-d9a2010c]{cursor:pointer;white-space:pre-wrap}.action-link__title[data-v-d9a2010c]{font-weight:bold}.action--disabled[data-v-d9a2010c]{pointer-events:none;opacity:.5}.action--disabled[data-v-d9a2010c]:hover,.action--disabled[data-v-d9a2010c]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-d9a2010c]{opacity:1 !important}\n",""])},function(t,e,n){"use strict";var i=n(50);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-2f82ba38]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-2f82ba38]{pointer-events:none;opacity:.5}.action--disabled[data-v-2f82ba38]:hover,.action--disabled[data-v-2f82ba38]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-2f82ba38]{opacity:1 !important}.action-radio[data-v-2f82ba38]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;cursor:pointer;white-space:nowrap;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-radio__radio[data-v-2f82ba38]{position:absolute;top:auto;left:-10000px;overflow:hidden;width:1px;height:1px}.action-radio__radio:focus+.action-radio__label[data-v-2f82ba38]{opacity:1}.action-radio__label[data-v-2f82ba38]{display:flex;align-items:center;width:100%;padding:0 !important;padding-right:14px !important;opacity:.7}.action-radio__label[data-v-2f82ba38]::before{margin:0 14px 0 !important}.action-radio--disabled[data-v-2f82ba38],.action-radio--disabled .action-radio__label[data-v-2f82ba38]{cursor:pointer}.action-radio:not(.action-radio--disabled):hover .action-radio__label[data-v-2f82ba38],.action-radio:not(.action-radio--disabled):focus .action-radio__label[data-v-2f82ba38]{opacity:1}\n",""])},function(t,e,n){"use strict";var i=n(51);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-3bf6846c]{box-shadow:inset 4px 0 var(--color-primary)}.action-router[data-v-3bf6846c]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-router[data-v-3bf6846c]:hover,.action-router[data-v-3bf6846c]:focus{opacity:1}.action-router>span[data-v-3bf6846c]{cursor:pointer;white-space:nowrap}.action-router__icon[data-v-3bf6846c]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-router p[data-v-3bf6846c]{width:150px;padding:7px 0;cursor:pointer;text-align:left;line-height:1.6em}.action-router__longtext[data-v-3bf6846c]{cursor:pointer;white-space:pre-wrap}.action-router__title[data-v-3bf6846c]{font-weight:bold}.action--disabled[data-v-3bf6846c]{pointer-events:none;opacity:.5}.action--disabled[data-v-3bf6846c]:hover,.action--disabled[data-v-3bf6846c]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-3bf6846c]{opacity:1 !important}\n",""])},function(t,e,n){"use strict";var i=n(52);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li.active[data-v-b4603aaa]{box-shadow:inset 4px 0 var(--color-primary)}.action-text[data-v-b4603aaa]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-text[data-v-b4603aaa]:hover,.action-text[data-v-b4603aaa]:focus{opacity:1}.action-text>span[data-v-b4603aaa]{cursor:pointer;white-space:nowrap}.action-text__icon[data-v-b4603aaa]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-text p[data-v-b4603aaa]{width:150px;padding:7px 0;cursor:pointer;text-align:left;line-height:1.6em}.action-text__longtext[data-v-b4603aaa]{cursor:pointer;white-space:pre-wrap}.action-text__title[data-v-b4603aaa]{font-weight:bold}.action--disabled[data-v-b4603aaa]{pointer-events:none;opacity:.5}.action--disabled[data-v-b4603aaa]:hover,.action--disabled[data-v-b4603aaa]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-b4603aaa]{opacity:1 !important}.action-text[data-v-b4603aaa],.action-text span[data-v-b4603aaa]{cursor:default}\n",""])},function(t,e,n){"use strict";var i=n(53);n.n(i).a},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-43b509b7]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-43b509b7]:before{font-family:"iconfont-vue";content:""}button[data-v-43b509b7],input[data-v-43b509b7]:not([type=\'range\']),textarea[data-v-43b509b7]{margin:0;padding:7px 6px;cursor:text;color:var(--color-text-lighter);border:1px solid var(--color-border-dark);border-radius:var(--border-radius);outline:none;background-color:var(--color-main-background);font-size:13px}button[data-v-43b509b7]:not(:disabled):not(.primary):hover,button[data-v-43b509b7]:not(:disabled):not(.primary):focus,button:not(:disabled):not(.primary).active[data-v-43b509b7],input[data-v-43b509b7]:not([type=\'range\']):not(:disabled):not(.primary):hover,input[data-v-43b509b7]:not([type=\'range\']):not(:disabled):not(.primary):focus,input:not([type=\'range\']):not(:disabled):not(.primary).active[data-v-43b509b7],textarea[data-v-43b509b7]:not(:disabled):not(.primary):hover,textarea[data-v-43b509b7]:not(:disabled):not(.primary):focus,textarea:not(:disabled):not(.primary).active[data-v-43b509b7]{border-color:var(--color-primary-element);outline:none}button[data-v-43b509b7]:not(:disabled):not(.primary):active,input[data-v-43b509b7]:not([type=\'range\']):not(:disabled):not(.primary):active,textarea[data-v-43b509b7]:not(:disabled):not(.primary):active{color:var(--color-text-light);outline:none;background-color:var(--color-main-background)}button[data-v-43b509b7]:disabled,input[data-v-43b509b7]:not([type=\'range\']):disabled,textarea[data-v-43b509b7]:disabled{cursor:default;opacity:.5;color:var(--color-text-maxcontrast);background-color:var(--color-background-dark)}button[data-v-43b509b7]:required,input[data-v-43b509b7]:not([type=\'range\']):required,textarea[data-v-43b509b7]:required{box-shadow:none}button[data-v-43b509b7]:invalid,input[data-v-43b509b7]:not([type=\'range\']):invalid,textarea[data-v-43b509b7]:invalid{border-color:var(--color-error);box-shadow:none !important}button.primary[data-v-43b509b7],input:not([type=\'range\']).primary[data-v-43b509b7],textarea.primary[data-v-43b509b7]{cursor:pointer;color:var(--color-primary-text);border-color:var(--color-primary-element);background-color:var(--color-primary-element)}button.primary[data-v-43b509b7]:not(:disabled):hover,button.primary[data-v-43b509b7]:not(:disabled):focus,button.primary[data-v-43b509b7]:not(:disabled):active,input:not([type=\'range\']).primary[data-v-43b509b7]:not(:disabled):hover,input:not([type=\'range\']).primary[data-v-43b509b7]:not(:disabled):focus,input:not([type=\'range\']).primary[data-v-43b509b7]:not(:disabled):active,textarea.primary[data-v-43b509b7]:not(:disabled):hover,textarea.primary[data-v-43b509b7]:not(:disabled):focus,textarea.primary[data-v-43b509b7]:not(:disabled):active{border-color:var(--color-primary-element-light);background-color:var(--color-primary-element-light)}button.primary[data-v-43b509b7]:not(:disabled):active,input:not([type=\'range\']).primary[data-v-43b509b7]:not(:disabled):active,textarea.primary[data-v-43b509b7]:not(:disabled):active{color:var(--color-primary-text-dark)}button.primary[data-v-43b509b7]:disabled,input:not([type=\'range\']).primary[data-v-43b509b7]:disabled,textarea.primary[data-v-43b509b7]:disabled{cursor:default;color:var(--color-primary-text-dark);background-color:var(--color-primary-element)}li.active[data-v-43b509b7]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-43b509b7]{pointer-events:none;opacity:.5}.action--disabled[data-v-43b509b7]:hover,.action--disabled[data-v-43b509b7]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-43b509b7]{opacity:1 !important}.action-text-editable[data-v-43b509b7]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-text-editable[data-v-43b509b7]:hover,.action-text-editable[data-v-43b509b7]:focus{opacity:1}.action-text-editable>span[data-v-43b509b7]{cursor:pointer;white-space:nowrap}.action-text-editable__icon[data-v-43b509b7]{min-width:0;min-height:0;padding:22px 0 22px 44px;background-position:14px center;background-size:16px}.action-text-editable__form[data-v-43b509b7]{display:flex;flex:1 1 auto;flex-direction:column;position:relative;margin:4px 0;padding-right:14px}.action-text-editable__submit[data-v-43b509b7]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden}.action-text-editable__label[data-v-43b509b7]{display:flex;align-items:center;justify-content:center;position:absolute;right:15px;bottom:1px;width:36px;height:36px;margin:0;padding:7px 6px;cursor:pointer;opacity:1;color:var(--color-text-lighter);border:0;border-radius:50%;background-color:var(--color-main-background);background-clip:padding-box;font-size:16px}.action-text-editable__label[data-v-43b509b7]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.action-text-editable__textarea[data-v-43b509b7]{flex:1 1 auto;min-height:80px;max-height:124px;min-width:176px;width:100% !important;margin:0}.action-text-editable__textarea[data-v-43b509b7]:disabled{cursor:default}.action-text-editable__textarea:not(:active):not(:hover):not(:focus):invalid+.action-text-editable__label[data-v-43b509b7]{background-color:var(--color-error)}.action-text-editable__textarea:not(:active):not(:hover):not(:focus):not(:disabled)+.action-text-editable__label[data-v-43b509b7]:active,.action-text-editable__textarea:not(:active):not(:hover):not(:focus):not(:disabled)+.action-text-editable__label[data-v-43b509b7]:hover,.action-text-editable__textarea:not(:active):not(:hover):not(:focus):not(:disabled)+.action-text-editable__label[data-v-43b509b7]:focus{background-color:var(--color-primary-element);color:var(--color-primary-text)}.action-text-editable__textarea:active:not(:disabled)+.action-text-editable__label[data-v-43b509b7],.action-text-editable__textarea:hover:not(:disabled)+.action-text-editable__label[data-v-43b509b7],.action-text-editable__textarea:focus:not(:disabled)+.action-text-editable__label[data-v-43b509b7]{z-index:2;border-color:var(--color-primary-element);border-left-color:transparent}li:last-child>.action-text-editable[data-v-43b509b7]{margin-bottom:10px}li:first-child>.action-text-editable[data-v-43b509b7]{margin-top:10px}\n',""])},function(t,e,n){"use strict";var i=n(54);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#app-content[data-v-0fe2f738]{z-index:1000;background-color:var(--color-main-background);position:relative;flex-basis:100vw;min-height:100%;transition:transform var(--animation-quick)}\n",""])},function(t,e,n){"use strict";var i=n(55);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#app-navigation{will-change:transform;transition:transform var(--animation-quick)}@media only screen and (max-width: 768px){.nav-open #app-navigation{transform:translateX(0)}}\n",""])},function(t,e,n){"use strict";var i=n(56);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".app-navigation-caption--item[data-v-9639e4a4]{font-weight:bold;color:var(--color-text-maxcontrast);line-height:44px;padding-left:44px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0.7;box-shadow:none !important;pointer-events:none}.app-navigation-caption--item[data-v-9639e4a4]:not(:first-child){margin-top:22px}\n",""])},function(t,e,n){"use strict";var i=n(57);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#app-settings-content[data-v-7dc165a0]{display:block;padding:10px;background-color:var(--color-main-background);max-height:300px;overflow-y:auto;box-sizing:border-box}.slide-up-leave-active[data-v-7dc165a0],.slide-up-enter-active[data-v-7dc165a0]{transition-duration:var(--animation-slow);transition-property:max-height, padding;overflow-y:hidden !important}.slide-up-enter[data-v-7dc165a0],.slide-up-leave-to[data-v-7dc165a0]{max-height:0 !important;padding:0 10px !important}\n",""])},function(t,e,n){"use strict";var i=n(58);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\n.app-navigation-spacer[data-v-18241e10] {\n\theight: 22px;\n}\n",""])},function(t,e,n){"use strict";var i=n(60);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"#app-sidebar[data-v-5dafabf3]{z-index:1500;height:calc(100vh - 50px);width:27vw;min-width:300px;max-width:500px;top:50px;right:0;display:flex;flex-shrink:0;flex-direction:column;position:-webkit-sticky;position:sticky;overflow-y:auto;overflow-x:hidden;background:var(--color-main-background);border-left:1px solid var(--color-border)}#app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-5dafabf3]{position:absolute;width:44px;height:44px;top:0;right:0;z-index:100;opacity:.7;border-radius:22px}#app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-5dafabf3]:hover,#app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-5dafabf3]:active,#app-sidebar .app-sidebar-header>.app-sidebar__close[data-v-5dafabf3]:focus{opacity:1;background-color:rgba(127,127,127,0.25)}#app-sidebar .app-sidebar-header__figure[data-v-5dafabf3]{max-height:250px;height:250px;width:100%;background-size:contain;background-position:center;background-repeat:no-repeat}#app-sidebar .app-sidebar-header__figure--with-action[data-v-5dafabf3]{cursor:pointer}#app-sidebar .app-sidebar-header__desc[data-v-5dafabf3]{position:relative;padding:18px 88px 18px 9px;display:flex;height:23px;flex-direction:column;justify-content:center;box-sizing:content-box}#app-sidebar .app-sidebar-header__desc--with-star[data-v-5dafabf3]{padding-left:44px}#app-sidebar .app-sidebar-header__desc--with-subtitle[data-v-5dafabf3]{justify-content:space-between;height:46px}#app-sidebar .app-sidebar-header__desc--editable[data-v-5dafabf3]{height:34.5px}#app-sidebar .app-sidebar-header__desc--with-subtitle--editable[data-v-5dafabf3]{height:69px}#app-sidebar .app-sidebar-header__desc--with-subtitle--editable .app-sidebar-header__subtitle[data-v-5dafabf3]{margin-left:7px}#app-sidebar .app-sidebar-header__desc--with-subtitle--editable .app-sidebar-header__subtitle input.app-sidebar-header__title-input[data-v-5dafabf3]{margin-top:-9px}#app-sidebar .app-sidebar-header__desc h3[data-v-5dafabf3],#app-sidebar .app-sidebar-header__desc h4[data-v-5dafabf3]{width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0}#app-sidebar .app-sidebar-header__desc h3[data-v-5dafabf3]{font-size:16px;padding:0}#app-sidebar .app-sidebar-header__desc input.app-sidebar-header__title-input[data-v-5dafabf3]{font-size:16px;width:100%}#app-sidebar .app-sidebar-header__desc h4[data-v-5dafabf3]{font-size:14px;padding:0;opacity:.7}#app-sidebar .app-sidebar-header__desc .app-sidebar-header__star[data-v-5dafabf3]{display:block;width:44px;height:44px;padding:14px;position:absolute;top:6px;left:0}#app-sidebar .app-sidebar-header__desc .app-sidebar-header__menu[data-v-5dafabf3]{position:absolute;right:22px;top:50%;margin-top:-22px;background-color:rgba(127,127,127,0.25);border-radius:22px}#app-sidebar .app-sidebar-header__action[data-v-5dafabf3]{display:flex;margin:0 10px;max-height:50px;align-items:center}#app-sidebar .app-sidebar-header--compact .app-sidebar-header__figure[data-v-5dafabf3]{height:64px;width:64px;margin:9px;border-radius:3px;position:absolute;left:0;top:0;z-index:2}#app-sidebar .app-sidebar-header--compact .app-sidebar-header__desc[data-v-5dafabf3]{padding-left:44px;margin-left:40px;height:46px}#app-sidebar .app-sidebar-header--compact .app-sidebar-header__desc .app-sidebar-header__star[data-v-5dafabf3]{margin-top:-9px;z-index:3}#app-sidebar .app-sidebar-header--compact .app-sidebar-header__desc .app-sidebar-header__menu[data-v-5dafabf3]{right:44px;top:0;margin:0;background-color:transparent}#app-sidebar .app-sidebar-header--compact .app-sidebar-header__desc--editable[data-v-5dafabf3]{padding-top:0}#app-sidebar .app-sidebar-header--compact .app-sidebar-header__desc--editable input.app-sidebar-header__title-input[data-v-5dafabf3]{margin-top:0}#app-sidebar .app-sidebar-tabs__nav[data-v-5dafabf3]{margin-top:10px}#app-sidebar .app-sidebar-tabs__nav ul[data-v-5dafabf3]{display:flex;justify-content:stretch}#app-sidebar .app-sidebar-tabs__tab[data-v-5dafabf3]{display:block;text-align:center;flex:1 1}#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]{display:block;padding-top:25px;padding-bottom:5px;position:relative;border-bottom:1px solid var(--color-border);text-align:center;opacity:.7;color:var(--color-main-text);transition:color var(--animation-quick),opacity var(--animation-quick),border-color var(--animation-quick)}#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]:hover,#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]:focus,#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]:active,#app-sidebar .app-sidebar-tabs__tab a.active[data-v-5dafabf3]{opacity:1}#app-sidebar .app-sidebar-tabs__tab a:hover .app-sidebar-tabs__tab-icon[data-v-5dafabf3],#app-sidebar .app-sidebar-tabs__tab a:focus .app-sidebar-tabs__tab-icon[data-v-5dafabf3],#app-sidebar .app-sidebar-tabs__tab a:active .app-sidebar-tabs__tab-icon[data-v-5dafabf3],#app-sidebar .app-sidebar-tabs__tab a.active .app-sidebar-tabs__tab-icon[data-v-5dafabf3]{opacity:1}#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]:not(.active):hover,#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]:not(.active):focus{box-shadow:inset 0 -1px 0 var(--color-background-darker);border-bottom-color:var(--color-background-darker)}#app-sidebar .app-sidebar-tabs__tab a.active[data-v-5dafabf3]{font-weight:bold;color:var(--color-text-light);border-bottom-color:var(--color-text-light);box-shadow:inset 0 -1px 0 var(--color-text-light)}#app-sidebar .app-sidebar-tabs__tab a[data-v-5dafabf3]:focus{border-bottom-color:var(--color-primary-element);box-shadow:inset 0 -1px 0 var(--color-primary-element)}#app-sidebar .app-sidebar-tabs__tab-icon[data-v-5dafabf3]{height:25px;width:100%;position:absolute;top:0;left:0;opacity:.7;background-position:center 8px;background-size:16px;transition:opacity var(--animation-quick)}#app-sidebar .app-sidebar-tabs__content[data-v-5dafabf3]{position:relative;flex:1 1 100%}#app-sidebar .app-sidebar-tabs__content--multiple[data-v-5dafabf3]>:not(section){display:none}.slide-right-leave-active[data-v-5dafabf3],.slide-right-enter-active[data-v-5dafabf3]{transition-duration:var(--animation-quick);transition-property:max-width, min-width}.slide-right-enter-to[data-v-5dafabf3],.slide-right-leave[data-v-5dafabf3]{min-width:300px;max-width:500px}.slide-right-enter[data-v-5dafabf3],.slide-right-leave-to[data-v-5dafabf3]{min-width:0 !important;max-width:0 !important}.fade-leave-active[data-v-5dafabf3],.fade-enter-active[data-v-5dafabf3]{transition-duration:var(--animation-quick);transition-property:opacity;position:absolute;top:0;left:0;width:100%;opacity:1}.fade-enter[data-v-5dafabf3],.fade-leave-to[data-v-5dafabf3]{opacity:0}\n",""])},function(t,e,n){"use strict";var i=n(61);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".app-sidebar-header__action button,.app-sidebar-header__action .button,.app-sidebar-header__action input[type='button'],.app-sidebar-header__action input[type='submit'],.app-sidebar-header__action input[type='reset']{padding:6px 22px}\n",""])},function(t,e,n){"use strict";var i=n(62);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"section[data-v-3f1c0b76]{padding:10px;min-height:100%}section[data-v-3f1c0b76]:focus{border-color:var(--color-primary);box-shadow:0 0 0.2em var(--color-primary);outline:0}\n",""])},function(t,e,n){"use strict";var i=n(63);n.n(i).a},function(t,e,n){e=t.exports=n(1)(!1);var i=n(9),a=i(n(10)),o=i(n(11)),r=i(n(12)),s=i(n(13));e.push([t.i,'@font-face{font-family:"iconfont-vue";src:url('+a+");src:url("+a+') format("embedded-opentype"),url('+o+') format("woff"),url('+r+') format("truetype"),url('+s+') format("svg")}.icon[data-v-9c792ef2]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.arrow-left[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right-double[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.arrow-right[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.close[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.confirm-fade[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.confirm[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.menu[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.more[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.pause[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.icon.play[data-v-9c792ef2]:before{font-family:"iconfont-vue";content:""}.modal-mask[data-v-9c792ef2]{position:fixed;z-index:9998;top:0;left:0;display:block;width:100%;height:100%;background-color:rgba(0,0,0,0.92)}.modal-header[data-v-9c792ef2]{position:absolute;z-index:10001;top:0;right:0;left:0;display:flex !important;align-items:center;justify-content:center;width:100%;height:50px;transition:opacity 250ms, visibility 250ms}.modal-header.invisible[style*=\'display:none\'][data-v-9c792ef2],.modal-header.invisible[style*=\'display: none\'][data-v-9c792ef2]{visibility:hidden}.modal-header .modal-title[data-v-9c792ef2]{overflow-x:hidden;box-sizing:border-box;max-width:100%;padding:0 88px;transition:padding ease 100ms;white-space:nowrap;text-overflow:ellipsis;color:#fff;font-size:14px}.modal-header .icons-menu[data-v-9c792ef2]{position:absolute;right:0;display:flex;align-items:center;justify-content:flex-end}.modal-header .icons-menu .icon-close[data-v-9c792ef2]{box-sizing:border-box;margin:3px;padding:10px 11px;color:#fff;background-image:none;font-size:23px}.modal-header .icons-menu .icon-close[data-v-9c792ef2]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.modal-header .icons-menu .play-pause[data-v-9c792ef2]{position:relative;width:50px;height:50px;margin:0;padding:0;cursor:pointer;color:white;border:none;background-color:transparent;font-size:22px}.modal-header .icons-menu .play-pause:hover .icon-play[data-v-9c792ef2],.modal-header .icons-menu .play-pause:hover .icon-pause[data-v-9c792ef2],.modal-header .icons-menu .play-pause:focus .icon-play[data-v-9c792ef2],.modal-header .icons-menu .play-pause:focus .icon-pause[data-v-9c792ef2]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.modal-header .icons-menu .play-pause .icon-play[data-v-9c792ef2],.modal-header .icons-menu .play-pause .icon-pause[data-v-9c792ef2]{box-sizing:border-box;width:44px;height:44px;margin:3px;opacity:.7;background-image:none;cursor:pointer}.modal-header .icons-menu .play-pause .icon-play[data-v-9c792ef2]{padding:11px 13px}.modal-header .icons-menu .play-pause .icon-play[data-v-9c792ef2]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.modal-header .icons-menu .play-pause .icon-pause[data-v-9c792ef2]{padding:12px;font-size:19.5px}.modal-header .icons-menu .play-pause .icon-pause[data-v-9c792ef2]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.modal-header .icons-menu .header-actions[data-v-9c792ef2]{margin:3px;color:white}.modal-header .icons-menu .action-item--single[data-v-9c792ef2]{box-sizing:border-box;width:44px;height:44px;cursor:pointer;background-position:center;background-size:22px}.modal-header .icons-menu[data-v-9c792ef2] .action-item__menutoggle{padding:13px 11px;color:#fff;font-size:22px}.modal-wrapper[data-v-9c792ef2]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.modal-wrapper .prev[data-v-9c792ef2],.modal-wrapper .next[data-v-9c792ef2]{z-index:10000;display:flex !important;align-items:center;justify-content:center;width:15%;min-width:60px;height:100%;transition:opacity 250ms, visibility 250ms}.modal-wrapper .prev.invisible[style*=\'display:none\'][data-v-9c792ef2],.modal-wrapper .prev.invisible[style*=\'display: none\'][data-v-9c792ef2],.modal-wrapper .next.invisible[style*=\'display:none\'][data-v-9c792ef2],.modal-wrapper .next.invisible[style*=\'display: none\'][data-v-9c792ef2]{visibility:hidden}.modal-wrapper .icon-next[data-v-9c792ef2],.modal-wrapper .icon-previous[data-v-9c792ef2]{box-sizing:border-box;width:44px;height:44px;padding:12px 11px;color:white;border-radius:22px;background-image:none;font-size:24px}.modal-wrapper .icon-previous[data-v-9c792ef2]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.modal-wrapper .icon-next[data-v-9c792ef2]:before{font-family:"iconfont-vue";font-style:normal;font-weight:400;content:""}.modal-wrapper .modal-container[data-v-9c792ef2]{display:block;overflow:hidden;padding:0;transition:transform 300ms ease;border-radius:var(--border-radius-large);background-color:var(--color-main-background);box-shadow:0 2px 8px rgba(0,0,0,0.33)}.modal-wrapper:not(.modal-wrapper--large):not(.modal-wrapper--full) .modal-container[data-v-9c792ef2]{max-width:900px;max-height:80%}.modal-wrapper--full .modal-container[data-v-9c792ef2]{max-width:100%;max-height:100%;border-radius:0}.modal-wrapper--full .prev[data-v-9c792ef2],.modal-wrapper--full .next[data-v-9c792ef2],.modal-wrapper--spread-navigation .prev[data-v-9c792ef2],.modal-wrapper--spread-navigation .next[data-v-9c792ef2]{position:absolute;width:10%}.modal-wrapper--full .prev[data-v-9c792ef2],.modal-wrapper--spread-navigation .prev[data-v-9c792ef2]{left:0}.modal-wrapper--full .next[data-v-9c792ef2],.modal-wrapper--spread-navigation .next[data-v-9c792ef2]{right:0}.modal-wrapper--large .modal-container[data-v-9c792ef2]{max-width:70%;max-height:90%}.modal-wrapper--large .prev[data-v-9c792ef2],.modal-wrapper--large .next[data-v-9c792ef2]{width:10%}.fade-enter-active[data-v-9c792ef2],.fade-leave-active[data-v-9c792ef2]{transition:opacity 250ms}.fade-enter[data-v-9c792ef2],.fade-leave-to[data-v-9c792ef2]{opacity:0}.fade-visibility-enter[data-v-9c792ef2],.fade-visibility-leave-to[data-v-9c792ef2]{visibility:hidden;opacity:0}.modal-in-enter-active[data-v-9c792ef2],.modal-in-leave-active[data-v-9c792ef2],.modal-out-enter-active[data-v-9c792ef2],.modal-out-leave-active[data-v-9c792ef2]{transition:opacity 250ms}.modal-in-enter[data-v-9c792ef2],.modal-in-leave-to[data-v-9c792ef2],.modal-out-enter[data-v-9c792ef2],.modal-out-leave-to[data-v-9c792ef2]{opacity:0}.modal-in-enter .modal-container[data-v-9c792ef2],.modal-in-leave-to .modal-container[data-v-9c792ef2]{transform:scale(0.9)}.modal-out-enter .modal-container[data-v-9c792ef2],.modal-out-leave-to .modal-container[data-v-9c792ef2]{transform:scale(1.1)}.modal-mask .play-pause .progress-ring[data-v-9c792ef2]{position:absolute;top:0;left:0;transform:rotate(-90deg)}.modal-mask .play-pause .progress-ring .progress-ring__circle[data-v-9c792ef2]{transition:100ms stroke-dashoffset;transform-origin:50% 50%;animation:progressring-data-v-9c792ef2 linear 3s infinite;stroke-linecap:round;stroke-dashoffset:94.24778;stroke-dasharray:94.24778}.modal-mask .play-pause--paused .icon-pause[data-v-9c792ef2]{animation:breath-data-v-9c792ef2 2s cubic-bezier(0.4, 0, 0.2, 1) infinite}.modal-mask .play-pause--paused .progress-ring__circle[data-v-9c792ef2]{animation-play-state:paused !important}@keyframes progressring-data-v-9c792ef2{from{stroke-dashoffset:94.24778}to{stroke-dashoffset:0}}@keyframes breath-data-v-9c792ef2{0%{opacity:1}50%{opacity:0}100%{opacity:1}}\n',""])},function(t,e,n){"use strict";var i=n(64);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".option[data-v-30d8da34]{display:flex;align-items:center;width:100%;height:32px}.option__avatar[data-v-30d8da34]{flex:0 0 32px;width:32px;height:32px;margin-right:6px}.option__desc[data-v-30d8da34]{display:flex;flex:1 1;flex-direction:column;justify-content:center;min-width:0}.option__desc--lineone[data-v-30d8da34]{color:var(--color-text-light)}.option__desc--linetwo[data-v-30d8da34]{opacity:.7}.option__desc--lineone[data-v-30d8da34],.option__desc--linetwo[data-v-30d8da34]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.option__desc--lineone strong[data-v-30d8da34],.option__desc--linetwo strong[data-v-30d8da34]{font-weight:bold}.option__icon[data-v-30d8da34]{flex:0 0 44px;width:44px;height:44px;margin:-6px;opacity:.5;background-position:center;background-size:16px}\n",""])},function(t,e,n){"use strict";var i=n(65);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".name-parts[data-v-c4325954]{display:flex;max-width:100%}.name-parts__first[data-v-c4325954]{overflow:hidden;text-overflow:ellipsis}.name-parts__first[data-v-c4325954],.name-parts__last[data-v-c4325954]{white-space:pre}.name-parts__first strong[data-v-c4325954],.name-parts__last strong[data-v-c4325954]{font-weight:bold}\n",""])},function(t,e,n){var i=n(187);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(2).default)("b5985a26",i,!0,{})},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".multiselect[data-v-6506c7f]{margin:0;padding:0 !important;display:inline-block;min-width:160px;position:relative;background-color:var(--color-main-background)}.multiselect[data-v-6506c7f].multiselect--active input.multiselect__input{opacity:1 !important;cursor:text !important;border-radius:var(--border-radius) var(--border-radius) 0 0}.multiselect[data-v-6506c7f].multiselect--active .multiselect__limit{display:none}.multiselect[data-v-6506c7f].multiselect--active.multiselect--above input.multiselect__input{border-radius:0 0 var(--border-radius) var(--border-radius)}.multiselect[data-v-6506c7f].multiselect--disabled,.multiselect[data-v-6506c7f].multiselect--disabled .multiselect__single{background-color:var(--color-background-dark) !important}.multiselect[data-v-6506c7f].icon-loading-small::after{left:100%;margin-left:-24px}.multiselect[data-v-6506c7f] .multiselect__tags{display:flex;flex-wrap:nowrap;overflow:hidden;border:1px solid var(--color-border-dark);cursor:pointer;position:relative;border-radius:3px;height:34px}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap{align-items:center;display:inline-flex;overflow:hidden;max-width:100%;position:relative;padding:3px 5px;flex-grow:1}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap:empty ~ input.multiselect__input{opacity:1 !important}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap:empty ~ input.multiselect__input+span:not(.multiselect__single){display:none}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap .multiselect__tag{flex:1 0 0;line-height:20px;padding:1px 5px;background-image:none;color:var(--color-text-lighter);border:1px solid var(--color-border-dark);display:inline-flex;align-items:center;border-radius:3px;min-width:0;max-width:50%;max-width:fit-content;max-width:-moz-fit-content}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap .multiselect__tag:only-child{flex:0 1 auto}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap .multiselect__tag:not(:last-child){margin-right:5px}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__tags-wrap .multiselect__tag>span{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__single,.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__placeholder{padding:7px 6px;flex:0 0 100%;z-index:1;background-color:var(--color-main-background);cursor:pointer;line-height:18px;color:var(--color-text-lighter)}.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__strong,.multiselect[data-v-6506c7f] .multiselect__tags .multiselect__limit{flex:0 0 auto;line-height:20px;color:var(--color-text-lighter);display:inline-flex;align-items:center;opacity:.7;margin-right:5px;z-index:5}.multiselect[data-v-6506c7f] .multiselect__tags input.multiselect__input{width:100% !important;position:absolute !important;top:0;left:0;margin:0;opacity:0;height:100%;border:none;display:block !important;cursor:pointer;padding:7px 6px !important}.multiselect[data-v-6506c7f] .multiselect__content-wrapper{position:absolute;width:100%;margin-top:-1px;border:1px solid var(--color-border-dark);background:var(--color-main-background);z-index:50;max-height:250px;overflow-y:auto;border-radius:0 0 var(--border-radius) var(--border-radius)}.multiselect[data-v-6506c7f] .multiselect__content-wrapper .multiselect__content{width:100%;padding:0}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li{position:relative;display:flex;align-items:center;background-color:transparent}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li,.multiselect[data-v-6506c7f] .multiselect__content-wrapper li span{cursor:pointer}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span{padding:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;height:auto;min-height:1em;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-flex;align-items:center;background-color:transparent;color:var(--color-text-lighter);width:100%}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span::before{content:' ';background-repeat:no-repeat;background-position:center;min-width:16px;min-height:16px;display:block;opacity:.5;margin-right:5px;visibility:hidden}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span.multiselect__option--disabled{background-color:var(--color-background-dark);opacity:.5}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span.multiselect__option--highlight{color:var(--color-main-text);background-color:var(--color-background-dark)}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span:not(.multiselect__option--disabled):hover::before{opacity:.3}.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span.multiselect__option--selected::before,.multiselect[data-v-6506c7f] .multiselect__content-wrapper li>span:not(.multiselect__option--disabled):hover::before{visibility:visible}.multiselect[data-v-6506c7f].multiselect--above .multiselect__content-wrapper{bottom:100%;margin-bottom:-1px}.multiselect[data-v-6506c7f].multiselect--multiple .multiselect__content-wrapper li>span::before{background-image:var(--icon-checkmark-000)}.multiselect[data-v-6506c7f].multiselect--multiple .multiselect__content-wrapper li>span[data-select='create']::before{background-image:var(--icon-add-000);visibility:visible}.multiselect[data-v-6506c7f].multiselect--single .multiselect__content-wrapper li>span::before{display:none}.multiselect[data-v-6506c7f]:hover .multiselect__placeholder,.multiselect[data-v-6506c7f] input.multiselect__input .multiselect__placeholder{color:var(--color-main-text)}\n",""])},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"ActionButton",function(){return r.default}),n.d(i,"ActionCheckbox",function(){return s.default}),n.d(i,"ActionInput",function(){return c.default}),n.d(i,"ActionLink",function(){return l.default}),n.d(i,"ActionRadio",function(){return u.default}),n.d(i,"ActionRouter",function(){return d.default}),n.d(i,"ActionText",function(){return p.default}),n.d(i,"ActionTextEditable",function(){return f.default}),n.d(i,"Actions",function(){return h.default}),n.d(i,"AppContent",function(){return A.default}),n.d(i,"AppContentDetails",function(){return v.default}),n.d(i,"AppContentList",function(){return m.default}),n.d(i,"AppNavigation",function(){return b.default}),n.d(i,"AppNavigationCaption",function(){return g.default}),n.d(i,"AppNavigationCounter",function(){return y.default}),n.d(i,"AppNavigationItem",function(){return x.default}),n.d(i,"AppNavigationNew",function(){return w.default}),n.d(i,"AppNavigationSettings",function(){return _.default}),n.d(i,"AppNavigationSpacer",function(){return T.default}),n.d(i,"AppSidebar",function(){return k.default}),n.d(i,"AppSidebarTab",function(){return C.default}),n.d(i,"Avatar",function(){return E.default}),n.d(i,"Content",function(){return M.default}),n.d(i,"DatetimePicker",function(){return S.default}),n.d(i,"Modal",function(){return D.default}),n.d(i,"Multiselect",function(){return O.default}),n.d(i,"PopoverMenu",function(){return B.default});var a=n(188),o=n.n(a),r=n(67),s=n(131),c=n(132),l=n(133),u=n(134),d=n(135),p=n(136),f=n(137),h=n(30),A=n(138),v=n(139),m=n(140),b=n(141),g=n(142),y=n(69),x=n(143),w=n(144),_=n(145),T=n(146),k=n(147),C=n(148),E=n(66),M=n(149),S=n(68),D=n(130),O=n(129),B=n(24),I=n(59),N=n(7),L=n(127),P=n(128);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
function $(t){Object.values(i).forEach(function(e){t.component(e.name,e)})}
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */n.d(e,"ActionButton",function(){return r.default}),n.d(e,"ActionCheckbox",function(){return s.default}),n.d(e,"ActionInput",function(){return c.default}),n.d(e,"ActionLink",function(){return l.default}),n.d(e,"ActionRadio",function(){return u.default}),n.d(e,"ActionRouter",function(){return d.default}),n.d(e,"ActionText",function(){return p.default}),n.d(e,"ActionTextEditable",function(){return f.default}),n.d(e,"Actions",function(){return h.default}),n.d(e,"AppContent",function(){return A.default}),n.d(e,"AppContentDetails",function(){return v.default}),n.d(e,"AppContentList",function(){return m.default}),n.d(e,"AppNavigation",function(){return b.default}),n.d(e,"AppNavigationCaption",function(){return g.default}),n.d(e,"AppNavigationCounter",function(){return y.default}),n.d(e,"AppNavigationItem",function(){return x.default}),n.d(e,"AppNavigationNew",function(){return w.default}),n.d(e,"AppNavigationSettings",function(){return _.default}),n.d(e,"AppNavigationSpacer",function(){return T.default}),n.d(e,"AppSidebar",function(){return k.default}),n.d(e,"AppSidebarTab",function(){return C.default}),n.d(e,"Avatar",function(){return E.default}),n.d(e,"Content",function(){return M.default}),n.d(e,"DatetimePicker",function(){return S.default}),n.d(e,"Modal",function(){return D.default}),n.d(e,"Multiselect",function(){return O.default}),n.d(e,"PopoverMenu",function(){return B.default}),n.d(e,"Focus",function(){return I.default}),n.d(e,"Tooltip",function(){return N.default}),n.d(e,"isFullscreen",function(){return L.default}),n.d(e,"isMobile",function(){return P.default}),"undefined"!=typeof window&&window.Vue&&$(window.Vue);e.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(n,!0).forEach(function(e){o()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({install:$},i)}])});
//# sourceMappingURL=ncvuecomponents.js.map

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/v-tooltip/dist/v-tooltip.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/v-tooltip/dist/v-tooltip.esm.js ***!
  \******************************************************/
/*! exports provided: default, VClosePopover, VPopover, VTooltip, createTooltip, destroyTooltip, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VClosePopover", function() { return VClosePopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VPopover", function() { return VPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTooltip", function() { return VTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTooltip", function() { return createTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyTooltip", function() { return destroyTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var vue_resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-resize */ "./node_modules/vue-resize/dist/vue-resize.esm.js");



function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var SVGAnimatedString = function SVGAnimatedString() {};

if (typeof window !== 'undefined') {
  SVGAnimatedString = window.SVGAnimatedString;
}

function convertToArray(value) {
  if (typeof value === 'string') {
    value = value.split(' ');
  }

  return value;
}
/**
 * Add classes to an element.
 * This method checks to ensure that the classes don't already exist before adding them.
 * It uses el.className rather than classList in order to be IE friendly.
 * @param {object} el - The element to add the classes to.
 * @param {classes} string - List of space separated classes to be added to the element.
 */

function addClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList;

  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }

  newClasses.forEach(function (newClass) {
    if (classList.indexOf(newClass) === -1) {
      classList.push(newClass);
    }
  });

  if (el instanceof SVGElement) {
    el.setAttribute('class', classList.join(' '));
  } else {
    el.className = classList.join(' ');
  }
}
/**
 * Remove classes from an element.
 * It uses el.className rather than classList in order to be IE friendly.
 * @export
 * @param {any} el The element to remove the classes from.
 * @param {any} classes List of space separated classes to be removed from the element.
 */

function removeClasses(el, classes) {
  var newClasses = convertToArray(classes);
  var classList;

  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }

  newClasses.forEach(function (newClass) {
    var index = classList.indexOf(newClass);

    if (index !== -1) {
      classList.splice(index, 1);
    }
  });

  if (el instanceof SVGElement) {
    el.setAttribute('class', classList.join(' '));
  } else {
    el.className = classList.join(' ');
  }
}
var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
};
var openTooltips = [];

var Tooltip =
/*#__PURE__*/
function () {
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param {HTMLElement} reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param {Object} options
   * @param {String} options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param {HTMLElement|String|false} options.container=false - Append the tooltip to a specific element.
   * @param {Number|Object} options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `{ show: 500, hide: 100 }`
   * @param {Boolean} options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param {String} [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param {String|HTMLElement|TitleFunction} options.title='' - Default title value if `title` attribute isn't present.
   * @param {String} [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param {HTMLElement} options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param {Number|String} options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param {Object} options.popperOptions={} - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return {Object} instance - The generated tooltip instance
   */
  function Tooltip(_reference, _options) {
    var _this = this;

    _classCallCheck(this, Tooltip);

    _defineProperty(this, "_events", []);

    _defineProperty(this, "_setTooltipNodeEvent", function (evt, reference, delay, options) {
      var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;

      var callback = function callback(evt2) {
        var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget; // Remove event listener after call

        _this._tooltipNode.removeEventListener(evt.type, callback); // If the new reference is not the reference element


        if (!reference.contains(relatedreference2)) {
          // Schedule to hide tooltip
          _this._scheduleHide(reference, options.delay, options, evt2);
        }
      };

      if (_this._tooltipNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        _this._tooltipNode.addEventListener(evt.type, callback);

        return true;
      }

      return false;
    });

    // apply user options over default ones
    _options = _objectSpread({}, DEFAULT_OPTIONS, _options);
    _reference.jquery && (_reference = _reference[0]);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this); // cache reference and options

    this.reference = _reference;
    this.options = _options; // set initial state

    this._isOpen = false;

    this._init();
  } //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  _createClass(Tooltip, [{
    key: "show",
    value: function show() {
      this._show(this.reference, this.options);
    }
    /**
     * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#hide
     * @memberof Tooltip
     */

  }, {
    key: "hide",
    value: function hide() {
      this._hide();
    }
    /**
     * Hides and destroys an element’s tooltip.
     * @method Tooltip#dispose
     * @memberof Tooltip
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this._dispose();
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#toggle
     * @memberof Tooltip
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._isOpen) {
        return this.hide();
      } else {
        return this.show();
      }
    }
  }, {
    key: "setClasses",
    value: function setClasses(classes) {
      this._classes = classes;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.options.title = content;

      if (this._tooltipNode) {
        this._setContent(content, this.options);
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var classesUpdated = false;
      var classes = options && options.classes || directive.options.defaultClass;

      if (this._classes !== classes) {
        this.setClasses(classes);
        classesUpdated = true;
      }

      options = getOptions(options);
      var needPopperUpdate = false;
      var needRestart = false;

      if (this.options.offset !== options.offset || this.options.placement !== options.placement) {
        needPopperUpdate = true;
      }

      if (this.options.template !== options.template || this.options.trigger !== options.trigger || this.options.container !== options.container || classesUpdated) {
        needRestart = true;
      }

      for (var key in options) {
        this.options[key] = options[key];
      }

      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen;
          this.dispose();

          this._init();

          if (isOpen) {
            this.show();
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update();
        }
      }
    } //
    // Private methods
    //

  }, {
    key: "_init",
    value: function _init() {
      // get events list
      var events = typeof this.options.trigger === 'string' ? this.options.trigger.split(' ') : [];
      this._isDisposed = false;
      this._enableDocumentTouch = events.indexOf('manual') === -1;
      events = events.filter(function (trigger) {
        return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
      }); // set event listeners

      this._setEventListeners(this.reference, events, this.options); // title attribute


      this.$_originalTitle = this.reference.getAttribute('title');
      this.reference.removeAttribute('title');
      this.reference.setAttribute('data-original-title', this.$_originalTitle);
    }
    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */

  }, {
    key: "_create",
    value: function _create(reference, template) {
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0]; // add unique ID to our tooltip (needed for accessibility reasons)

      tooltipNode.id = "tooltip_".concat(Math.random().toString(36).substr(2, 10)); // Initially hide the tooltip
      // The attribute will be switched in a next frame so
      // CSS transitions can play

      tooltipNode.setAttribute('aria-hidden', 'true');

      if (this.options.autoHide && this.options.trigger.indexOf('hover') !== -1) {
        tooltipNode.addEventListener('mouseenter', this.hide);
        tooltipNode.addEventListener('click', this.hide);
      } // return the generated tooltip node


      return tooltipNode;
    }
  }, {
    key: "_setContent",
    value: function _setContent(content, options) {
      var _this2 = this;

      this.asyncContent = false;

      this._applyContent(content, options).then(function () {
        _this2.popperInstance.update();
      });
    }
  }, {
    key: "_applyContent",
    value: function _applyContent(title, options) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var allowHtml = options.html;
        var rootNode = _this3._tooltipNode;
        if (!rootNode) return;
        var titleNode = rootNode.querySelector(_this3.options.innerSelector);

        if (title.nodeType === 1) {
          // if title is a node, append it only if allowHtml is true
          if (allowHtml) {
            while (titleNode.firstChild) {
              titleNode.removeChild(titleNode.firstChild);
            }

            titleNode.appendChild(title);
          }
        } else if (typeof title === 'function') {
          // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
          var result = title();

          if (result && typeof result.then === 'function') {
            _this3.asyncContent = true;
            options.loadingClass && addClasses(rootNode, options.loadingClass);

            if (options.loadingContent) {
              _this3._applyContent(options.loadingContent, options);
            }

            result.then(function (asyncResult) {
              options.loadingClass && removeClasses(rootNode, options.loadingClass);
              return _this3._applyContent(asyncResult, options);
            }).then(resolve).catch(reject);
          } else {
            _this3._applyContent(result, options).then(resolve).catch(reject);
          }

          return;
        } else {
          // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
          allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
        }

        resolve();
      });
    }
  }, {
    key: "_show",
    value: function _show(reference, options) {
      if (options && typeof options.container === 'string') {
        var container = document.querySelector(options.container);
        if (!container) return;
      }

      clearTimeout(this._disposeTimer);
      options = Object.assign({}, options);
      delete options.offset;
      var updateClasses = true;

      if (this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
        updateClasses = false;
      }

      var result = this._ensureShown(reference, options);

      if (updateClasses && this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
      }

      addClasses(reference, ['v-tooltip-open']);
      return result;
    }
  }, {
    key: "_ensureShown",
    value: function _ensureShown(reference, options) {
      var _this4 = this;

      // don't show if it's already visible
      if (this._isOpen) {
        return this;
      }

      this._isOpen = true;
      openTooltips.push(this); // if the tooltipNode already exists, just show it

      if (this._tooltipNode) {
        this._tooltipNode.style.display = '';

        this._tooltipNode.setAttribute('aria-hidden', 'false');

        this.popperInstance.enableEventListeners();
        this.popperInstance.update();

        if (this.asyncContent) {
          this._setContent(options.title, options);
        }

        return this;
      } // get title


      var title = reference.getAttribute('title') || options.title; // don't show tooltip if no title is defined

      if (!title) {
        return this;
      } // create tooltip node


      var tooltipNode = this._create(reference, options.template);

      this._tooltipNode = tooltipNode; // Add `aria-describedby` to our reference element for accessibility reasons

      reference.setAttribute('aria-describedby', tooltipNode.id); // append tooltip to container

      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      var popperOptions = _objectSpread({}, options.popperOptions, {
        placement: options.placement
      });

      popperOptions.modifiers = _objectSpread({}, popperOptions.modifiers, {
        arrow: {
          element: this.options.arrowSelector
        }
      });

      if (options.boundariesElement) {
        popperOptions.modifiers.preventOverflow = {
          boundariesElement: options.boundariesElement
        };
      }

      this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, tooltipNode, popperOptions);

      this._setContent(title, options); // Fix position


      requestAnimationFrame(function () {
        if (!_this4._isDisposed && _this4.popperInstance) {
          _this4.popperInstance.update(); // Show the tooltip


          requestAnimationFrame(function () {
            if (!_this4._isDisposed) {
              _this4._isOpen && tooltipNode.setAttribute('aria-hidden', 'false');
            } else {
              _this4.dispose();
            }
          });
        } else {
          _this4.dispose();
        }
      });
      return this;
    }
  }, {
    key: "_noLongerOpen",
    value: function _noLongerOpen() {
      var index = openTooltips.indexOf(this);

      if (index !== -1) {
        openTooltips.splice(index, 1);
      }
    }
  }, {
    key: "_hide",
    value: function _hide()
    /* reference, options */
    {
      var _this5 = this;

      // don't hide if it's already hidden
      if (!this._isOpen) {
        return this;
      }

      this._isOpen = false;

      this._noLongerOpen(); // hide tooltipNode


      this._tooltipNode.style.display = 'none';

      this._tooltipNode.setAttribute('aria-hidden', 'true');

      this.popperInstance.disableEventListeners();
      clearTimeout(this._disposeTimer);
      var disposeTime = directive.options.disposeTimeout;

      if (disposeTime !== null) {
        this._disposeTimer = setTimeout(function () {
          if (_this5._tooltipNode) {
            _this5._tooltipNode.removeEventListener('mouseenter', _this5.hide);

            _this5._tooltipNode.removeEventListener('click', _this5.hide); // Don't remove popper instance, just the HTML element


            _this5._removeTooltipNode();
          }
        }, disposeTime);
      }

      removeClasses(this.reference, ['v-tooltip-open']);
      return this;
    }
  }, {
    key: "_removeTooltipNode",
    value: function _removeTooltipNode() {
      if (!this._tooltipNode) return;
      var parentNode = this._tooltipNode.parentNode;

      if (parentNode) {
        parentNode.removeChild(this._tooltipNode);
        this.reference.removeAttribute('aria-describedby');
      }

      this._tooltipNode = null;
    }
  }, {
    key: "_dispose",
    value: function _dispose() {
      var _this6 = this;

      this._isDisposed = true;
      this.reference.removeAttribute('data-original-title');

      if (this.$_originalTitle) {
        this.reference.setAttribute('title', this.$_originalTitle);
      } // remove event listeners first to prevent any unexpected behaviour


      this._events.forEach(function (_ref) {
        var func = _ref.func,
            event = _ref.event;

        _this6.reference.removeEventListener(event, func);
      });

      this._events = [];

      if (this._tooltipNode) {
        this._hide();

        this._tooltipNode.removeEventListener('mouseenter', this.hide);

        this._tooltipNode.removeEventListener('click', this.hide); // destroy instance


        this.popperInstance.destroy(); // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

        if (!this.popperInstance.options.removeOnDestroy) {
          this._removeTooltipNode();
        }
      } else {
        this._noLongerOpen();
      }

      return this;
    }
  }, {
    key: "_findContainer",
    value: function _findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }

      return container;
    }
    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */

  }, {
    key: "_append",
    value: function _append(tooltipNode, container) {
      container.appendChild(tooltipNode);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(reference, events, options) {
      var _this7 = this;

      var directEvents = [];
      var oppositeEvents = [];
      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            if (_this7.options.hideOnTargetClick) oppositeEvents.push('click');
            break;

          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            if (_this7.options.hideOnTargetClick) oppositeEvents.push('click');
            break;

          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      }); // schedule show tooltip

      directEvents.forEach(function (event) {
        var func = function func(evt) {
          if (_this7._isOpen === true) {
            return;
          }

          evt.usedByTooltip = true;

          _this7._scheduleShow(reference, options.delay, options, evt);
        };

        _this7._events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      }); // schedule hide tooltip

      oppositeEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }

          _this7._scheduleHide(reference, options.delay, options, evt);
        };

        _this7._events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      });
    }
  }, {
    key: "_onDocumentTouch",
    value: function _onDocumentTouch(event) {
      if (this._enableDocumentTouch) {
        this._scheduleHide(this.reference, this.options.delay, this.options, event);
      }
    }
  }, {
    key: "_scheduleShow",
    value: function _scheduleShow(reference, delay, options
    /*, evt */
    ) {
      var _this8 = this;

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function () {
        return _this8._show(reference, options);
      }, computedDelay);
    }
  }, {
    key: "_scheduleHide",
    value: function _scheduleHide(reference, delay, options, evt) {
      var _this9 = this;

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function () {
        if (_this9._isOpen === false) {
          return;
        }

        if (!document.body.contains(_this9._tooltipNode)) {
          return;
        } // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it


        if (evt.type === 'mouseleave') {
          var isSet = _this9._setTooltipNodeEvent(evt, reference, delay, options); // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary


          if (isSet) {
            return;
          }
        }

        _this9._hide(reference, options);
      }, computedDelay);
    }
  }]);

  return Tooltip;
}(); // Hide tooltips on touch devices

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', function (event) {
    for (var i = 0; i < openTooltips.length; i++) {
      openTooltips[i]._onDocumentTouch(event);
    }
  }, supportsPassive ? {
    passive: true,
    capture: true
  } : true);
}
/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param {HTMLElement} tooltip - tooltip DOM node.
 * @param {HTMLElement} reference - reference DOM node.
 * @return {String} placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return {String} placement - The desired title.
 */

var state = {
  enabled: true
};
var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];
var defaultOptions = {
  // Default tooltip placement relative to target element
  defaultPlacement: 'top',
  // Default CSS classes applied to the tooltip element
  defaultClass: 'vue-tooltip-theme',
  // Default CSS classes applied to the target element of the tooltip
  defaultTargetClass: 'has-tooltip',
  // Is the content HTML by default?
  defaultHtml: true,
  // Default HTML template of the tooltip element
  // It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
  // Change if the classes conflict with other libraries (for example bootstrap)
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  // Selector used to get the arrow element in the tooltip template
  defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
  // Selector used to get the inner content element in the tooltip template
  defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
  // Delay (ms)
  defaultDelay: 0,
  // Default events that trigger the tooltip
  defaultTrigger: 'hover focus',
  // Default position offset (px)
  defaultOffset: 0,
  // Default container where the tooltip will be appended
  defaultContainer: 'body',
  defaultBoundariesElement: undefined,
  defaultPopperOptions: {},
  // Class added when content is loading
  defaultLoadingClass: 'tooltip-loading',
  // Displayed when tooltip content is loading
  defaultLoadingContent: '...',
  // Hide on mouseover tooltip
  autoHide: true,
  // Close tooltip on click on tooltip target?
  defaultHideOnTargetClick: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Options for popover
  popover: {
    defaultPlacement: 'bottom',
    // Use the `popoverClass` prop for theming
    defaultClass: 'vue-popover-theme',
    // Base class (change if conflicts with other libraries)
    defaultBaseClass: 'tooltip popover',
    // Wrapper class (contains arrow and inner)
    defaultWrapperClass: 'wrapper',
    // Inner content class
    defaultInnerClass: 'tooltip-inner popover-inner',
    // Arrow class
    defaultArrowClass: 'tooltip-arrow popover-arrow',
    // Class added when popover is open
    defaultOpenClass: 'open',
    defaultDelay: 0,
    defaultTrigger: 'click',
    defaultOffset: 0,
    defaultContainer: 'body',
    defaultBoundariesElement: undefined,
    defaultPopperOptions: {},
    // Hides if clicked outside of popover
    defaultAutoHide: true,
    // Update popper on content resize
    defaultHandleResize: true
  }
};
function getOptions(options) {
  var result = {
    placement: typeof options.placement !== 'undefined' ? options.placement : directive.options.defaultPlacement,
    delay: typeof options.delay !== 'undefined' ? options.delay : directive.options.defaultDelay,
    html: typeof options.html !== 'undefined' ? options.html : directive.options.defaultHtml,
    template: typeof options.template !== 'undefined' ? options.template : directive.options.defaultTemplate,
    arrowSelector: typeof options.arrowSelector !== 'undefined' ? options.arrowSelector : directive.options.defaultArrowSelector,
    innerSelector: typeof options.innerSelector !== 'undefined' ? options.innerSelector : directive.options.defaultInnerSelector,
    trigger: typeof options.trigger !== 'undefined' ? options.trigger : directive.options.defaultTrigger,
    offset: typeof options.offset !== 'undefined' ? options.offset : directive.options.defaultOffset,
    container: typeof options.container !== 'undefined' ? options.container : directive.options.defaultContainer,
    boundariesElement: typeof options.boundariesElement !== 'undefined' ? options.boundariesElement : directive.options.defaultBoundariesElement,
    autoHide: typeof options.autoHide !== 'undefined' ? options.autoHide : directive.options.autoHide,
    hideOnTargetClick: typeof options.hideOnTargetClick !== 'undefined' ? options.hideOnTargetClick : directive.options.defaultHideOnTargetClick,
    loadingClass: typeof options.loadingClass !== 'undefined' ? options.loadingClass : directive.options.defaultLoadingClass,
    loadingContent: typeof options.loadingContent !== 'undefined' ? options.loadingContent : directive.options.defaultLoadingContent,
    popperOptions: _objectSpread({}, typeof options.popperOptions !== 'undefined' ? options.popperOptions : directive.options.defaultPopperOptions)
  };

  if (result.offset) {
    var typeofOffset = _typeof(result.offset);

    var offset = result.offset; // One value -> switch

    if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
      offset = "0, ".concat(offset);
    }

    if (!result.popperOptions.modifiers) {
      result.popperOptions.modifiers = {};
    }

    result.popperOptions.modifiers.offset = {
      offset: offset
    };
  }

  if (result.trigger && result.trigger.indexOf('click') !== -1) {
    result.hideOnTargetClick = false;
  }

  return result;
}
function getPlacement(value, modifiers) {
  var placement = value.placement;

  for (var i = 0; i < positions.length; i++) {
    var pos = positions[i];

    if (modifiers[pos]) {
      placement = pos;
    }
  }

  return placement;
}
function getContent(value) {
  var type = _typeof(value);

  if (type === 'string') {
    return value;
  } else if (value && type === 'object') {
    return value.content;
  } else {
    return false;
  }
}
function createTooltip(el, value) {
  var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var content = getContent(value);
  var classes = typeof value.classes !== 'undefined' ? value.classes : directive.options.defaultClass;

  var opts = _objectSpread({
    title: content
  }, getOptions(_objectSpread({}, value, {
    placement: getPlacement(value, modifiers)
  })));

  var tooltip = el._tooltip = new Tooltip(el, opts);
  tooltip.setClasses(classes);
  tooltip._vueEl = el; // Class on target

  var targetClasses = typeof value.targetClasses !== 'undefined' ? value.targetClasses : directive.options.defaultTargetClass;
  el._tooltipTargetClasses = targetClasses;
  addClasses(el, targetClasses);
  return tooltip;
}
function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();

    delete el._tooltip;
    delete el._tooltipOldShow;
  }

  if (el._tooltipTargetClasses) {
    removeClasses(el, el._tooltipTargetClasses);
    delete el._tooltipTargetClasses;
  }
}
function bind(el, _ref) {
  var value = _ref.value,
      oldValue = _ref.oldValue,
      modifiers = _ref.modifiers;
  var content = getContent(value);

  if (!content || !state.enabled) {
    destroyTooltip(el);
  } else {
    var tooltip;

    if (el._tooltip) {
      tooltip = el._tooltip; // Content

      tooltip.setContent(content); // Options

      tooltip.setOptions(_objectSpread({}, value, {
        placement: getPlacement(value, modifiers)
      }));
    } else {
      tooltip = createTooltip(el, value, modifiers);
    } // Manual show


    if (typeof value.show !== 'undefined' && value.show !== el._tooltipOldShow) {
      el._tooltipOldShow = value.show;
      value.show ? tooltip.show() : tooltip.hide();
    }
  }
}
var directive = {
  options: defaultOptions,
  bind: bind,
  update: bind,
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};

function addListeners(el) {
  el.addEventListener('click', onClick);
  el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}

function removeListeners(el) {
  el.removeEventListener('click', onClick);
  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchend', onTouchEnd);
  el.removeEventListener('touchcancel', onTouchCancel);
}

function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}

function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchCancel);
  }
}

function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;

  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}

function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}

var vclosepopover = {
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (typeof value === 'undefined' || value) {
      addListeners(el);
    }
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind: function unbind(el) {
    removeListeners(el);
  }
};

function getDefault(key) {
  var value = directive.options.popover[key];

  if (typeof value === 'undefined') {
    return directive.options[key];
  }

  return value;
}

var isIOS = false;

if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

var openPopovers = [];

var Element = function Element() {};

if (typeof window !== 'undefined') {
  Element = window.Element;
}

var script = {
  name: 'VPopover',
  components: {
    ResizeObserver: vue_resize__WEBPACK_IMPORTED_MODULE_1__["ResizeObserver"]
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: function _default() {
        return getDefault('defaultPlacement');
      }
    },
    delay: {
      type: [String, Number, Object],
      default: function _default() {
        return getDefault('defaultDelay');
      }
    },
    offset: {
      type: [String, Number],
      default: function _default() {
        return getDefault('defaultOffset');
      }
    },
    trigger: {
      type: String,
      default: function _default() {
        return getDefault('defaultTrigger');
      }
    },
    container: {
      type: [String, Object, Element, Boolean],
      default: function _default() {
        return getDefault('defaultContainer');
      }
    },
    boundariesElement: {
      type: [String, Element],
      default: function _default() {
        return getDefault('defaultBoundariesElement');
      }
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return getDefault('defaultPopperOptions');
      }
    },
    popoverClass: {
      type: [String, Array],
      default: function _default() {
        return getDefault('defaultClass');
      }
    },
    popoverBaseClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultBaseClass;
      }
    },
    popoverInnerClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultInnerClass;
      }
    },
    popoverWrapperClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultWrapperClass;
      }
    },
    popoverArrowClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultArrowClass;
      }
    },
    autoHide: {
      type: Boolean,
      default: function _default() {
        return directive.options.popover.defaultAutoHide;
      }
    },
    handleResize: {
      type: Boolean,
      default: function _default() {
        return directive.options.popover.defaultHandleResize;
      }
    },
    openGroup: {
      type: String,
      default: null
    },
    openClass: {
      type: [String, Array],
      default: function _default() {
        return directive.options.popover.defaultOpenClass;
      }
    }
  },
  data: function data() {
    return {
      isOpen: false,
      id: Math.random().toString(36).substr(2, 10)
    };
  },
  computed: {
    cssClass: function cssClass() {
      return _defineProperty({}, this.openClass, this.isOpen);
    },
    popoverId: function popoverId() {
      return "popover_".concat(this.id);
    }
  },
  watch: {
    open: function open(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        if (val) {
          this.hide();
        } else if (this.open) {
          this.show();
        }
      }
    },
    container: function container(val) {
      if (this.isOpen && this.popperInstance) {
        var popoverNode = this.$refs.popover;
        var reference = this.$refs.trigger;
        var container = this.$_findContainer(this.container, reference);

        if (!container) {
          console.warn('No container for popover', this);
          return;
        }

        container.appendChild(popoverNode);
        this.popperInstance.scheduleUpdate();
      }
    },
    trigger: function trigger(val) {
      this.$_removeEventListeners();
      this.$_addEventListeners();
    },
    placement: function placement(val) {
      var _this = this;

      this.$_updatePopper(function () {
        _this.popperInstance.options.placement = val;
      });
    },
    offset: '$_restartPopper',
    boundariesElement: '$_restartPopper',
    popperOptions: {
      handler: '$_restartPopper',
      deep: true
    }
  },
  created: function created() {
    this.$_isDisposed = false;
    this.$_mounted = false;
    this.$_events = [];
    this.$_preventOpen = false;
  },
  mounted: function mounted() {
    var popoverNode = this.$refs.popover;
    popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
    this.$_init();

    if (this.open) {
      this.show();
    }
  },
  deactivated: function deactivated() {
    this.hide();
  },
  beforeDestroy: function beforeDestroy() {
    this.dispose();
  },
  methods: {
    show: function show() {
      var _this2 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          event = _ref2.event,
          _ref2$skipDelay = _ref2.skipDelay,
          _ref2$force = _ref2.force,
          force = _ref2$force === void 0 ? false : _ref2$force;

      if (force || !this.disabled) {
        this.$_scheduleShow(event);
        this.$emit('show');
      }

      this.$emit('update:open', true);
      this.$_beingShowed = true;
      requestAnimationFrame(function () {
        _this2.$_beingShowed = false;
      });
    },
    hide: function hide() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          event = _ref3.event,
          _ref3$skipDelay = _ref3.skipDelay;

      this.$_scheduleHide(event);
      this.$emit('hide');
      this.$emit('update:open', false);
    },
    dispose: function dispose() {
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({
        skipDelay: true
      });

      if (this.popperInstance) {
        this.popperInstance.destroy(); // destroy tooltipNode if removeOnDestroy is not set, as popperInstance.destroy() already removes the element

        if (!this.popperInstance.options.removeOnDestroy) {
          var popoverNode = this.$refs.popover;
          popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
        }
      }

      this.$_mounted = false;
      this.popperInstance = null;
      this.isOpen = false;
      this.$emit('dispose');
    },
    $_init: function $_init() {
      if (this.trigger.indexOf('manual') === -1) {
        this.$_addEventListeners();
      }
    },
    $_show: function $_show() {
      var _this3 = this;

      var reference = this.$refs.trigger;
      var popoverNode = this.$refs.popover;
      clearTimeout(this.$_disposeTimer); // Already open

      if (this.isOpen) {
        return;
      } // Popper is already initialized


      if (this.popperInstance) {
        this.isOpen = true;
        this.popperInstance.enableEventListeners();
        this.popperInstance.scheduleUpdate();
      }

      if (!this.$_mounted) {
        var container = this.$_findContainer(this.container, reference);

        if (!container) {
          console.warn('No container for popover', this);
          return;
        }

        container.appendChild(popoverNode);
        this.$_mounted = true;
      }

      if (!this.popperInstance) {
        var popperOptions = _objectSpread({}, this.popperOptions, {
          placement: this.placement
        });

        popperOptions.modifiers = _objectSpread({}, popperOptions.modifiers, {
          arrow: _objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.arrow, {
            element: this.$refs.arrow
          })
        });

        if (this.offset) {
          var offset = this.$_getOffset();
          popperOptions.modifiers.offset = _objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.offset, {
            offset: offset
          });
        }

        if (this.boundariesElement) {
          popperOptions.modifiers.preventOverflow = _objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.preventOverflow, {
            boundariesElement: this.boundariesElement
          });
        }

        this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, popoverNode, popperOptions); // Fix position

        requestAnimationFrame(function () {
          if (_this3.hidden) {
            _this3.hidden = false;

            _this3.$_hide();

            return;
          }

          if (!_this3.$_isDisposed && _this3.popperInstance) {
            _this3.popperInstance.scheduleUpdate(); // Show the tooltip


            requestAnimationFrame(function () {
              if (_this3.hidden) {
                _this3.hidden = false;

                _this3.$_hide();

                return;
              }

              if (!_this3.$_isDisposed) {
                _this3.isOpen = true;
              } else {
                _this3.dispose();
              }
            });
          } else {
            _this3.dispose();
          }
        });
      }

      var openGroup = this.openGroup;

      if (openGroup) {
        var popover;

        for (var i = 0; i < openPopovers.length; i++) {
          popover = openPopovers[i];

          if (popover.openGroup !== openGroup) {
            popover.hide();
            popover.$emit('close-group');
          }
        }
      }

      openPopovers.push(this);
      this.$emit('apply-show');
    },
    $_hide: function $_hide() {
      var _this4 = this;

      // Already hidden
      if (!this.isOpen) {
        return;
      }

      var index = openPopovers.indexOf(this);

      if (index !== -1) {
        openPopovers.splice(index, 1);
      }

      this.isOpen = false;

      if (this.popperInstance) {
        this.popperInstance.disableEventListeners();
      }

      clearTimeout(this.$_disposeTimer);
      var disposeTime = directive.options.popover.disposeTimeout || directive.options.disposeTimeout;

      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(function () {
          var popoverNode = _this4.$refs.popover;

          if (popoverNode) {
            // Don't remove popper instance, just the HTML element
            popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
            _this4.$_mounted = false;
          }
        }, disposeTime);
      }

      this.$emit('apply-hide');
    },
    $_findContainer: function $_findContainer(container, reference) {
      // if container is a query, get the relative element
      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (container === false) {
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      }

      return container;
    },
    $_getOffset: function $_getOffset() {
      var typeofOffset = _typeof(this.offset);

      var offset = this.offset; // One value -> switch

      if (typeofOffset === 'number' || typeofOffset === 'string' && offset.indexOf(',') === -1) {
        offset = "0, ".concat(offset);
      }

      return offset;
    },
    $_addEventListeners: function $_addEventListeners() {
      var _this5 = this;

      var reference = this.$refs.trigger;
      var directEvents = [];
      var oppositeEvents = [];
      var events = typeof this.trigger === 'string' ? this.trigger.split(' ').filter(function (trigger) {
        return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
      }) : [];
      events.forEach(function (event) {
        switch (event) {
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;

          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;

          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        }
      }); // schedule show tooltip

      directEvents.forEach(function (event) {
        var func = function func(event) {
          if (_this5.isOpen) {
            return;
          }

          event.usedByTooltip = true;
          !_this5.$_preventOpen && _this5.show({
            event: event
          });
          _this5.hidden = false;
        };

        _this5.$_events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      }); // schedule hide tooltip

      oppositeEvents.forEach(function (event) {
        var func = function func(event) {
          if (event.usedByTooltip) {
            return;
          }

          _this5.hide({
            event: event
          });

          _this5.hidden = true;
        };

        _this5.$_events.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func);
      });
    },
    $_scheduleShow: function $_scheduleShow() {
      var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      clearTimeout(this.$_scheduleTimer);

      if (skipDelay) {
        this.$_show();
      } else {
        // defaults to 0
        var computedDelay = parseInt(this.delay && this.delay.show || this.delay || 0);
        this.$_scheduleTimer = setTimeout(this.$_show.bind(this), computedDelay);
      }
    },
    $_scheduleHide: function $_scheduleHide() {
      var _this6 = this;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      clearTimeout(this.$_scheduleTimer);

      if (skipDelay) {
        this.$_hide();
      } else {
        // defaults to 0
        var computedDelay = parseInt(this.delay && this.delay.hide || this.delay || 0);
        this.$_scheduleTimer = setTimeout(function () {
          if (!_this6.isOpen) {
            return;
          } // if we are hiding because of a mouseleave, we must check that the new
          // reference isn't the tooltip, because in this case we don't want to hide it


          if (event && event.type === 'mouseleave') {
            var isSet = _this6.$_setTooltipNodeEvent(event); // if we set the new event, don't hide the tooltip yet
            // the new event will take care to hide it if necessary


            if (isSet) {
              return;
            }
          }

          _this6.$_hide();
        }, computedDelay);
      }
    },
    $_setTooltipNodeEvent: function $_setTooltipNodeEvent(event) {
      var _this7 = this;

      var reference = this.$refs.trigger;
      var popoverNode = this.$refs.popover;
      var relatedreference = event.relatedreference || event.toElement || event.relatedTarget;

      var callback = function callback(event2) {
        var relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget; // Remove event listener after call

        popoverNode.removeEventListener(event.type, callback); // If the new reference is not the reference element

        if (!reference.contains(relatedreference2)) {
          // Schedule to hide tooltip
          _this7.hide({
            event: event2
          });
        }
      };

      if (popoverNode.contains(relatedreference)) {
        // listen to mouseleave on the tooltip element to be able to hide the tooltip
        popoverNode.addEventListener(event.type, callback);
        return true;
      }

      return false;
    },
    $_removeEventListeners: function $_removeEventListeners() {
      var reference = this.$refs.trigger;
      this.$_events.forEach(function (_ref4) {
        var func = _ref4.func,
            event = _ref4.event;
        reference.removeEventListener(event, func);
      });
      this.$_events = [];
    },
    $_updatePopper: function $_updatePopper(cb) {
      if (this.popperInstance) {
        cb();
        if (this.isOpen) this.popperInstance.scheduleUpdate();
      }
    },
    $_restartPopper: function $_restartPopper() {
      if (this.popperInstance) {
        var isOpen = this.isOpen;
        this.dispose();
        this.$_isDisposed = false;
        this.$_init();

        if (isOpen) {
          this.show({
            skipDelay: true,
            force: true
          });
        }
      }
    },
    $_handleGlobalClose: function $_handleGlobalClose(event) {
      var _this8 = this;

      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.$_beingShowed) return;
      this.hide({
        event: event
      });

      if (event.closePopover) {
        this.$emit('close-directive');
      } else {
        this.$emit('auto-hide');
      }

      if (touch) {
        this.$_preventOpen = true;
        setTimeout(function () {
          _this8.$_preventOpen = false;
        }, 300);
      }
    },
    $_handleResize: function $_handleResize() {
      if (this.isOpen && this.popperInstance) {
        this.popperInstance.scheduleUpdate();
        this.$emit('resize');
      }
    }
  }
};

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener('click', handleGlobalClick, true);
  }
}

function handleGlobalClick(event) {
  handleGlobalClose(event);
}

function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}

function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _loop = function _loop(i) {
    var popover = openPopovers[i];

    if (popover.$refs.popover) {
      var contains = popover.$refs.popover.contains(event.target);
      requestAnimationFrame(function () {
        if (event.closeAllPopover || event.closePopover && contains || popover.autoHide && !contains) {
          popover.$_handleGlobalClose(event, touch);
        }
      });
    }
  };

  // Delay so that close directive has time to set values
  for (var i = 0; i < openPopovers.length; i++) {
    _loop(i);
  }
}

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "v-popover",
    class: _vm.cssClass
  }, [_c("div", {
    ref: "trigger",
    staticClass: "trigger",
    staticStyle: {
      display: "inline-block"
    },
    attrs: {
      "aria-describedby": _vm.popoverId,
      tabindex: _vm.trigger.indexOf("focus") !== -1 ? 0 : undefined
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c("div", {
    ref: "popover",
    class: [_vm.popoverBaseClass, _vm.popoverClass, _vm.cssClass],
    style: {
      visibility: _vm.isOpen ? "visible" : "hidden"
    },
    attrs: {
      id: _vm.popoverId,
      "aria-hidden": _vm.isOpen ? "false" : "true",
      tabindex: _vm.autoHide ? 0 : undefined
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        _vm.autoHide && _vm.hide();
      }
    }
  }, [_c("div", {
    class: _vm.popoverWrapperClass
  }, [_c("div", {
    ref: "inner",
    class: _vm.popoverInnerClass,
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", [_vm._t("popover")], 2), _vm._v(" "), _vm.handleResize ? _c("ResizeObserver", {
    on: {
      notify: _vm.$_handleResize
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    ref: "arrow",
    class: _vm.popoverArrowClass
  })])])]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var Popover = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    if (isObject_1(srcValue)) {
      stack || (stack = new _Stack);
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
  return _defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}";
styleInject(css);

function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;
  install.installed = true;
  var finalOptions = {};
  merge_1(finalOptions, defaultOptions, options);
  plugin.options = finalOptions;
  directive.options = finalOptions;
  Vue.directive('tooltip', directive);
  Vue.directive('close-popover', vclosepopover);
  Vue.component('v-popover', Popover);
}
var VTooltip = directive;
var VClosePopover = vclosepopover;
var VPopover = Popover;
var plugin = {
  install: install,

  get enabled() {
    return state.enabled;
  },

  set enabled(value) {
    state.enabled = value;
  }

}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "followupsection", attrs: { id: "updatenotification" } },
    [
      _c(
        "div",
        { staticClass: "update" },
        [
          _vm.isNewVersionAvailable
            ? [
                _vm.versionIsEol
                  ? _c("p", [
                      _c("span", { staticClass: "warning" }, [
                        _c("span", { staticClass: "icon icon-error-white" }),
                        _vm._v(
                          "\n\t\t\t\t\t" +
                            _vm._s(
                              _vm.t(
                                "updatenotification",
                                "The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible."
                              )
                            ) +
                            "\n\t\t\t\t"
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("p", [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(_vm.newVersionAvailableString)
                    }
                  }),
                  _c("br"),
                  _vm._v(" "),
                  !_vm.isListFetched
                    ? _c("span", { staticClass: "icon icon-loading-small" })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", {
                    domProps: { innerHTML: _vm._s(_vm.statusText) }
                  })
                ]),
                _vm._v(" "),
                _vm.missingAppUpdates.length
                  ? [
                      _c(
                        "h3",
                        { on: { click: _vm.toggleHideMissingUpdates } },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(
                                _vm.t(
                                  "updatenotification",
                                  "Apps missing updates"
                                )
                              ) +
                              "\n\t\t\t\t\t"
                          ),
                          !_vm.hideMissingUpdates
                            ? _c("span", {
                                staticClass: "icon icon-triangle-n"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hideMissingUpdates
                            ? _c("span", {
                                staticClass: "icon icon-triangle-s"
                              })
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.hideMissingUpdates
                        ? _c(
                            "ul",
                            { staticClass: "applist" },
                            _vm._l(_vm.missingAppUpdates, function(app, index) {
                              return _c("li", { key: index }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "https://apps.nextcloud.com/apps/" +
                                        app.appId,
                                      title: _vm.t("settings", "View in store")
                                    }
                                  },
                                  [_vm._v(_vm._s(app.appName) + " ↗")]
                                )
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.availableAppUpdates.length
                  ? [
                      _c(
                        "h3",
                        { on: { click: _vm.toggleHideAvailableUpdates } },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(
                                _vm.t(
                                  "updatenotification",
                                  "Apps with available updates"
                                )
                              ) +
                              "\n\t\t\t\t\t"
                          ),
                          !_vm.hideAvailableUpdates
                            ? _c("span", {
                                staticClass: "icon icon-triangle-n"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.hideAvailableUpdates
                            ? _c("span", {
                                staticClass: "icon icon-triangle-s"
                              })
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.hideAvailableUpdates
                        ? _c(
                            "ul",
                            { staticClass: "applist" },
                            _vm._l(_vm.availableAppUpdates, function(
                              app,
                              index
                            ) {
                              return _c("li", { key: index }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href:
                                        "https://apps.nextcloud.com/apps/" +
                                        app.appId,
                                      title: _vm.t("settings", "View in store")
                                    }
                                  },
                                  [_vm._v(_vm._s(app.appName) + " ↗")]
                                )
                              ])
                            }),
                            0
                          )
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", [
                  _vm.updaterEnabled
                    ? _c(
                        "a",
                        {
                          staticClass: "button primary",
                          attrs: { href: "#" },
                          on: { click: _vm.clickUpdaterButton }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.t("updatenotification", "Open updater"))
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.downloadLink
                    ? _c(
                        "a",
                        {
                          staticClass: "button",
                          class: { hidden: !_vm.updaterEnabled },
                          attrs: { href: _vm.downloadLink }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.t("updatenotification", "Download now"))
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.whatsNew
                    ? _c("div", { staticClass: "whatsNew" }, [
                        _c("div", { staticClass: "toggleWhatsNew" }, [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "click-outside",
                                  rawName: "v-click-outside",
                                  value: _vm.hideMenu,
                                  expression: "hideMenu"
                                }
                              ],
                              staticClass: "button",
                              on: { click: _vm.toggleMenu }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.t("updatenotification", "What's new?")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "popovermenu",
                              class: {
                                "menu-center": true,
                                open: _vm.openedWhatsNew
                              }
                            },
                            [
                              _c("PopoverMenu", {
                                attrs: { menu: _vm.whatsNew }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    : _vm._e()
                ])
              ]
            : !_vm.isUpdateChecked
            ? [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(
                      _vm.t(
                        "updatenotification",
                        "The update check is not yet finished. Please refresh the page."
                      )
                    ) +
                    "\n\t\t"
                )
              ]
            : [
                _vm._v(
                  "\n\t\t\t" +
                    _vm._s(
                      _vm.t("updatenotification", "Your version is up to date.")
                    ) +
                    "\n\t\t\t"
                ),
                _c("span", {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip.auto",
                      value: _vm.lastCheckedOnString,
                      expression: "lastCheckedOnString",
                      modifiers: { auto: true }
                    }
                  ],
                  staticClass: "icon-info svg"
                })
              ],
          _vm._v(" "),
          !_vm.isDefaultUpdateServerURL
            ? [
                _c("p", { staticClass: "topMargin" }, [
                  _c("em", [
                    _vm._v(
                      _vm._s(
                        _vm.t(
                          "updatenotification",
                          "A non-default update server is in use to be checked for updates:"
                        )
                      ) + " "
                    ),
                    _c("code", [_vm._v(_vm._s(_vm.updateServerURL))])
                  ])
                ])
              ]
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("h3", { staticClass: "update-channel-selector" }, [
        _vm._v(
          "\n\t\t" +
            _vm._s(_vm.t("updatenotification", "Update channel:")) +
            "\n\t\t"
        ),
        _c("div", { staticClass: "update-menu" }, [
          _c(
            "span",
            {
              staticClass: "icon-update-menu",
              on: { click: _vm.toggleUpdateChannelMenu }
            },
            [
              _vm._v(
                "\n\t\t\t\t" + _vm._s(_vm.localizedChannelName) + "\n\t\t\t\t"
              ),
              _c("span", { staticClass: "icon-triangle-s" })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "popovermenu menu menu-center",
              class: { "show-menu": _vm.openedUpdateChannelMenu }
            },
            [_c("PopoverMenu", { attrs: { menu: _vm.channelList } })],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "msg", attrs: { id: "channel_save_msg" } }),
      _c("br"),
      _vm._v(" "),
      _c("p", [
        _c("em", [
          _vm._v(
            _vm._s(
              _vm.t(
                "updatenotification",
                "You can always update to a newer version. But you can never downgrade to a more stable version."
              )
            )
          )
        ]),
        _c("br"),
        _vm._v(" "),
        _c("em", [
          _vm._v(
            _vm._s(
              _vm.t(
                "updatenotification",
                "Note that after a new release it can take some time before it shows up here. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found."
              )
            )
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "p",
        { attrs: { id: "oca_updatenotification_groups" } },
        [
          _vm._v(
            "\n\t\t" +
              _vm._s(
                _vm.t(
                  "updatenotification",
                  "Notify members of the following groups about available updates:"
                )
              ) +
              "\n\t\t"
          ),
          _c("Multiselect", {
            attrs: {
              options: _vm.availableGroups,
              multiple: true,
              label: "label",
              "track-by": "value",
              "tag-width": 75
            },
            model: {
              value: _vm.notifyGroups,
              callback: function($$v) {
                _vm.notifyGroups = $$v
              },
              expression: "notifyGroups"
            }
          }),
          _c("br"),
          _vm._v(" "),
          _vm.currentChannel === "daily" || _vm.currentChannel === "git"
            ? _c("em", [
                _vm._v(
                  _vm._s(
                    _vm.t(
                      "updatenotification",
                      "Only notification for app updates are available."
                    )
                  )
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.currentChannel === "daily"
            ? _c("em", [
                _vm._v(
                  _vm._s(
                    _vm.t(
                      "updatenotification",
                      "The selected update channel makes dedicated notifications for the server obsolete."
                    )
                  )
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.currentChannel === "git"
            ? _c("em", [
                _vm._v(
                  _vm._s(
                    _vm.t(
                      "updatenotification",
                      "The selected update channel does not support updates of the server."
                    )
                  )
                )
              ])
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-resize/dist/vue-resize.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-resize/dist/vue-resize.esm.js ***!
  \********************************************************/
/*! exports provided: install, ResizeObserver, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeObserver", function() { return ResizeObserver; });
function getInternetExplorerVersion() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return -1;
}

var isIE = void 0;

function initCompat() {
	if (!initCompat.init) {
		initCompat.init = true;
		isIE = getInternetExplorerVersion() !== -1;
	}
}

var ResizeObserver = { render: function render() {
		var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "resize-observer", attrs: { "tabindex": "-1" } });
	}, staticRenderFns: [], _scopeId: 'data-v-b329ee4c',
	name: 'resize-observer',

	methods: {
		compareAndNotify: function compareAndNotify() {
			if (this._w !== this.$el.offsetWidth || this._h !== this.$el.offsetHeight) {
				this._w = this.$el.offsetWidth;
				this._h = this.$el.offsetHeight;
				this.$emit('notify');
			}
		},
		addResizeHandlers: function addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);
			this.compareAndNotify();
		},
		removeResizeHandlers: function removeResizeHandlers() {
			if (this._resizeObject && this._resizeObject.onload) {
				if (!isIE && this._resizeObject.contentDocument) {
					this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
				}
				delete this._resizeObject.onload;
			}
		}
	},

	mounted: function mounted() {
		var _this = this;

		initCompat();
		this.$nextTick(function () {
			_this._w = _this.$el.offsetWidth;
			_this._h = _this.$el.offsetHeight;
		});
		var object = document.createElement('object');
		this._resizeObject = object;
		object.setAttribute('aria-hidden', 'true');
		object.setAttribute('tabindex', -1);
		object.onload = this.addResizeHandlers;
		object.type = 'text/html';
		if (isIE) {
			this.$el.appendChild(object);
		}
		object.data = 'about:blank';
		if (!isIE) {
			this.$el.appendChild(object);
		}
	},
	beforeDestroy: function beforeDestroy() {
		this.removeResizeHandlers();
	}
};

// Install the components
function install(Vue) {
	Vue.component('resize-observer', ResizeObserver);
	Vue.component('ResizeObserver', ResizeObserver);
}

// Plugin
var plugin = {
	// eslint-disable-next-line no-undef
	version: "0.4.5",
	install: install
};

// Auto-install
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}


/* harmony default export */ __webpack_exports__["default"] = (plugin);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("51bb1153", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4bef0de4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=updatenotification.js.map