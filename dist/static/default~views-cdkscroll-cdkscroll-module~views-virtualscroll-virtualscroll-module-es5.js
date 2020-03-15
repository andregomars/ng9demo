function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-cdkscroll-cdkscroll-module~views-virtualscroll-virtualscroll-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @abstract
     * @template T
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };

    if (false) {}
    /**
     * Checks whether an object is a data source.
     * @param {?} value
     * @return {?}
     */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/array-data-source.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * DataSource wrapper for a native array.
     * @template T
     */


    var ArrayDataSource = /*#__PURE__*/function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      /**
       * @param {?} _data
       */
      function ArrayDataSource(_data) {
        var _this2;

        _classCallCheck(this, ArrayDataSource);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ArrayDataSource).call(this));
        _this2._data = _data;
        return _this2;
      }
      /**
       * @return {?}
       */


      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
        /**
         * @return {?}
         */

      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/collection-viewer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface for any component that provides a view of some data collection and wants to provide
     * information regarding the view and any changes made.
     * @record
     */


    function CollectionViewer() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/selection-model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     * @template T
     */


    var SelectionModel = /*#__PURE__*/function () {
      /**
       * @param {?=} _multiple
       * @param {?=} initiallySelectedValues
       * @param {?=} _emitChanges
       */
      function SelectionModel() {
        var _this3 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */

        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */

        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */

        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this3._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selected values.
       * @return {?}
       */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */
        value: function select() {
          var _this4 = this;

          for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this4._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         * @param {...?} values
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this5 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this5._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         * @return {?}
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         * @param {?=} predicate
         * @return {?}
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            /** @type {?} */
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         * @return {?}
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /**
         * Emits a change event and clears the records of selected and deselected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /**
         * Selects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /**
         * Deselects a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /**
         * Clears out the selected values.
         * @private
         * @return {?}
         */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this6 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return _this6._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         * @private
         * @param {?} values
         * @return {?}
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();

    if (false) {}
    /**
     * Event emitted when the value of a MatSelectionModel has changed.
     * \@docs-private
     * @record
     * @template T
     */


    function SelectionChange() {}

    if (false) {}
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * \@docs-private
     * @return {?}
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher = /*#__PURE__*/function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param {?} id ID of the item.
       * @param {?} name Name of the item.
       * @return {?}
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var listener = _step.value;
              listener(id, name);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        /**
         * Listen for future changes to item selection.
         * @param {?} listener
         * @return {?} Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this7 = this;

          this._listeners.push(listener);

          return (
            /**
            * @return {?}
            */
            function () {
              _this7._listeners = _this7._listeners.filter(
              /**
              * @param {?} registered
              * @return {?}
              */
              function (registered) {
                return listener !== registered;
              });
            }
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };
    /** @nocollapse */


    UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/tree-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
     * data back into its original structure. Should be used in conjunction with the cdk-tree.
     * @record
     * @template T
     */


    function TreeDataNodeFlattener() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/collections/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-strategy.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The injection token used to specify the virtual scrolling strategy.
     * @type {?}
     */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * A strategy that dictates which items should be rendered in the viewport.
     * @record
     */

    function VirtualScrollStrategy() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/fixed-size-virtual-scroll.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Virtual scrolling strategy for lists with items of known fixed size.
     */


    var FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
      /**
       * @param {?} itemSize The size of the items in the virtually scrolling list.
       * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param {?} viewport The viewport to attach this strategy to.
       * @return {?}
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * Detaches this scroll strategy from the currently attached viewport.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param {?} itemSize The size of the items in the virtually scrolling list.
         * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         * @return {?}
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         * @return {?}
         */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?} behavior The ScrollBehavior to use when scrolling.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /**
         * Update the viewport's total content size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /**
         * Update the viewport's rendered range.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }
          /** @type {?} */


          var scrollOffset = this._viewport.measureScrollOffset();
          /** @type {?} */


          var firstVisibleIndex = scrollOffset / this._itemSize;
          /** @type {?} */

          var renderedRange = this._viewport.getRenderedRange();
          /** @type {?} */


          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };
          /** @type {?} */

          var viewportSize = this._viewport.getViewportSize();
          /** @type {?} */


          var dataLength = this._viewport.getDataLength();
          /** @type {?} */


          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              /** @type {?} */
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();

    if (false) {}
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     * @return {?}
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /**
     * A virtual scroll strategy that supports fixed-size items.
     */


    var CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /**
       * The size of the items in the list (in pixels).
       * @return {?}
       */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",

        /**
         * @return {?}
         */
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scroll-dispatcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the scrolling events by default.
     * @type {?}
     */


    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _ngZone
       * @param {?} _platform
       */
      function ScrollDispatcher(_ngZone, _platform) {
        _classCallCheck(this, ScrollDispatcher);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */

        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param {?} scrollable Scrollable instance to be registered.
       * @return {?}
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this8 = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this8._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param {?} scrollable Scrollable instance to be deregistered.
         * @return {?}
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          /** @type {?} */
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         * @param {?=} auditTimeInMs
         * @return {?}
         */

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this9 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            if (!_this9._globalSubscription) {
              _this9._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.

            /** @type {?} */


            var subscription = auditTimeInMs > 0 ? _this9._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this9._scrolled.subscribe(observer);
            _this9._scrolledCount++;
            return (
              /**
              * @return {?}
              */
              function () {
                subscription.unsubscribe();
                _this9._scrolledCount--;

                if (!_this9._scrolledCount) {
                  _this9._removeGlobalListener();
                }
              }
            );
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this10 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(
          /**
          * @param {?} _
          * @param {?} container
          * @return {?}
          */
          function (_, container) {
            return _this10.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param {?} elementRef Element whose ancestors to listen for.
         * @param {?=} auditTimeInMs Time to throttle the scroll events.
         * @return {?}
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          /** @type {?} */
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} target
          * @return {?}
          */
          function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /**
         * Returns all registered Scrollables that contain the provided element.
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this11 = this;

          /** @type {?} */
          var scrollingContainers = [];
          this.scrollContainers.forEach(
          /**
          * @param {?} _subscription
          * @param {?} scrollable
          * @return {?}
          */
          function (_subscription, scrollable) {
            if (_this11._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /**
         * Returns true if the element is contained within the provided Scrollable.
         * @private
         * @param {?} scrollable
         * @param {?} elementRef
         * @return {?}
         */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          /** @type {?} */
          var element = elementRef.nativeElement;
          /** @type {?} */

          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element =
          /** @type {?} */
          element.parentElement);

          return false;
        }
        /**
         * Sets up the global scroll listeners.
         * @private
         * @return {?}
         */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this12 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this12._scrolled.next();
            });
          });
        }
        /**
         * Cleans up the global scroll listener.
         * @private
         * @return {?}
         */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
    };
    /** @nocollapse */


    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };
    /** @nocollapse */


    ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrollable.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} scrollDispatcher
       * @param {?} ngZone
       * @param {?=} dir
       */
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this13 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this13.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this13.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this13._destroyed)).subscribe(observer);
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Returns observable that emits when a scroll event is fired on the host element.
         * @return {?}
         */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /**
         * Gets the ElementRef for the viewport.
         * @return {?}
         */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} options specified the offsets to scroll to.
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;
          /** @type {?} */

          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
          }

          if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
          } // Rewrite the bottom offset as a top offset.


          if (options.bottom != null) {
            /** @type {?} */
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                /** @type {?} */
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              /** @type {?} */
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
        /**
         * @private
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          /** @type {?} */
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param {?} from The edge to measure from.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          /** @type {?} */
          var LEFT = 'left';
          /** @type {?} */

          var RIGHT = 'right';
          /** @type {?} */

          var el = this.elementRef.nativeElement;

          if (from == 'top') {
            return el.scrollTop;
          }

          if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          } // Rewrite start & end as left or right offsets.

          /** @type {?} */


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });
    /** @nocollapse */

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/viewport-ruler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle the resize events by default.
     * @type {?}
     */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Object that holds the scroll position of the viewport in each direction.
     * @record
     */

    function ViewportScrollPosition() {}

    if (false) {}
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * \@docs-private
     */


    var ViewportRuler = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} ngZone
       */
      function ViewportRuler(_platform, ngZone) {
        var _this14 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _this14._change = _platform.isBrowser ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(); // Note that we need to do the subscription inside `runOutsideAngular`
          // since subscribing is what causes the event listener to be added.

          _this14._invalidateCache = _this14.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this14._updateViewportSize();
          });
        });
      }
      /**
       * @return {?}
       */


      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._invalidateCache.unsubscribe();
        }
        /**
         * Returns the viewport's width and height.
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }
          /** @type {?} */


          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize =
            /** @type {?} */
            null;
          }

          return output;
        }
        /**
         * Gets a ClientRect for the viewport's bounds.
         * @return {?}
         */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
          // Use the document element's bounding rect rather than the window scroll properties
          // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
          // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
          // conceptual viewports. Under most circumstances these viewports are equivalent, but they
          // can disagree when the page is pinch-zoomed (on devices that support touch).
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
          // We use the documentElement instead of the body because, by default (without a css reset)
          // browsers typically give the document body an 8px margin, which is not included in
          // getBoundingClientRect().

          /** @type {?} */
          var scrollPosition = this.getViewportScrollPosition();

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /**
         * Gets the (top, left) scroll position of the viewport.
         * @return {?}
         */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.

          /** @type {?} */


          var documentElement =
          /** @type {?} */
          document.documentElement;
          /** @type {?} */

          var documentRect = documentElement.getBoundingClientRect();
          /** @type {?} */

          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          /** @type {?} */

          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param {?=} throttleTime Time in milliseconds to throttle the stream.
         * @return {?}
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /**
         * Updates the cached viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };
    /** @nocollapse */


    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /** @nocollapse */


    ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: ViewportRuler,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-scroll-viewport.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if the given ranges are equal.
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     * @type {?}
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /**
     * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
     */

    var CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?} ngZone
       * @param {?} _scrollStrategy
       * @param {?} dir
       * @param {?} scrollDispatcher
       * @param {?=} viewportRuler
       */
      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
      /**
       * @deprecated `viewportRuler` parameter to become required.
       * @breaking-change 11.0.0
       */
      viewportRuler) {
        var _this15;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(CdkVirtualScrollViewport).call(this, elementRef, scrollDispatcher, ngZone, dir));
        _this15.elementRef = elementRef;
        _this15._changeDetectorRef = _changeDetectorRef;
        _this15._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */

        _this15._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */

        _this15._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this15._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /**
         * Emits when the index of the first element visible in the viewport changes.
         */

        _this15.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
        /**
        * @param {?} observer
        * @return {?}
        */
        function (observer) {
          return _this15._scrollStrategy.scrolledIndexChange.subscribe(
          /**
          * @param {?} index
          * @return {?}
          */
          function (index) {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this15.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(index);
              });
            });
          });
        });
        /**
         * A stream that emits whenever the rendered range changes.
         */

        _this15.renderedRangeStream = _this15._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this15._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */

        _this15._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */

        _this15._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */

        _this15._renderedRange = {
          start: 0,
          end: 0
        };
        /**
         * The length of the data bound to this viewport (in number of items).
         */

        _this15._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */

        _this15._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */

        _this15._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this15._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */

        _this15._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */

        _this15._runAfterChangeDetection = [];
        /**
         * Subscription to changes in the viewport size.
         */

        _this15._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

        if (!_scrollStrategy) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


        if (viewportRuler) {
          _this15._viewportChanges = viewportRuler.change().subscribe(
          /**
          * @return {?}
          */
          function () {
            _this15.checkViewportSize();
          });
        }

        return _this15;
      }
      /**
       * The direction the viewport scrolls.
       * @return {?}
       */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this16 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this16._measureViewportSize();

              _this16._scrollStrategy.attach(_this16);

              _this16.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
              /** @type {?} */
              null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this16._scrollStrategy.onContentScrolled();
              });

              _this16._markChangeDetectionNeeded();
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          this._viewportChanges.unsubscribe();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /**
         * Attaches a `CdkVirtualForOf` to this viewport.
         * @param {?} forOf
         * @return {?}
         */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this17 = this;

          if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this17._forOf = forOf;

            _this17._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this17._detachedSubject)).subscribe(
            /**
            * @param {?} data
            * @return {?}
            */
            function (data) {
              /** @type {?} */
              var newLength = data.length;

              if (newLength !== _this17._dataLength) {
                _this17._dataLength = newLength;

                _this17._scrollStrategy.onDataLengthChanged();
              }

              _this17._doChangeDetection();
            });
          });
        }
        /**
         * Detaches the current `CdkVirtualForOf`.
         * @return {?}
         */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /**
         * Gets the length of the data bound to this viewport (in number of items).
         * @return {?}
         */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /**
         * Gets the size of the viewport (in pixels).
         * @return {?}
         */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /**
         * Get the current rendered range of items.
         * @return {?}
         */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /**
         * Sets the currently rendered range of indices.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this18 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              return _this18._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         * @return {?}
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         * @param {?} offset
         * @param {?=} to
         * @return {?}
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this19 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
          // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
          // in the negative direction.

          /** @type {?} */
          var isRtl = this.dir && this.dir.value == 'rtl';
          /** @type {?} */

          var isHorizontal = this.orientation == 'horizontal';
          /** @type {?} */

          var axis = isHorizontal ? 'X' : 'Y';
          /** @type {?} */

          var axisDirection = isHorizontal && isRtl ? -1 : 1;
          /** @type {?} */

          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(
            /**
            * @return {?}
            */
            function () {
              if (_this19._renderedContentOffsetNeedsRewrite) {
                _this19._renderedContentOffset -= _this19.measureRenderedContentSize();
                _this19._renderedContentOffsetNeedsRewrite = false;

                _this19.setRenderedContentOffset(_this19._renderedContentOffset);
              } else {
                _this19._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param {?} offset The offset to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          /** @type {?} */
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param {?} index The index of the element to scroll to.
         * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         * @return {?}
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         * @return {?}
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /**
         * Measure the combined size of all of the rendered items.
         * @return {?}
         */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          /** @type {?} */
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /**
         * Update the viewport dimensions and re-render.
         * @return {?}
         */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /**
         * Measure the viewport size.
         * @private
         * @return {?}
         */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          /** @type {?} */
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /**
         * Queue up change detection to run.
         * @private
         * @param {?=} runAfter
         * @return {?}
         */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this20 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              return Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this20._doChangeDetection();
              });
            });
          }
        }
        /**
         * Run change detection.
         * @private
         * @return {?}
         */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this21 = this;

          this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this21._changeDetectorRef.markForCheck();
          });
          /** @type {?} */

          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = runAfterChangeDetection[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var fn = _step2.value;
              fn();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
        /**
         * Calculates the `style.width` and `style.height` for the spacer element.
         * @private
         * @return {?}
         */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        }
        /**
         * @param {?} orientation
         * @return {?}
         */
        ,
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler, 8));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }, {
        type: ViewportRuler,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/virtual-for-of.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Helper to extract size from a DOM Node.
     * @param {?} orientation
     * @param {?} node
     * @return {?}
     */


    function getSize(orientation, node) {
      /** @type {?} */
      var el =
      /** @type {?} */
      node;

      if (!el.getBoundingClientRect) {
        return 0;
      }
      /** @type {?} */


      var rect = el.getBoundingClientRect();
      return orientation == 'horizontal' ? rect.width : rect.height;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     * @template T
     */


    var CdkVirtualForOf = /*#__PURE__*/function () {
      /**
       * @param {?} _viewContainerRef
       * @param {?} _template
       * @param {?} _differs
       * @param {?} _viewport
       * @param {?} ngZone
       */
      function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this22 = this;

        _classCallCheck(this, CdkVirtualForOf);

        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(
        /** @type {?} */
        null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this22._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */

        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */

        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(
        /**
        * @param {?} data
        * @return {?}
        */
        function (data) {
          _this22._data = data;

          _this22._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} range
        * @return {?}
        */
        function (range) {
          _this22._renderedRange = range;
          ngZone.run(
          /**
          * @return {?}
          */
          function () {
            return _this22.viewChange.next(_this22._renderedRange);
          });

          _this22._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /**
       * The DataSource to display.
       * @return {?}
       */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         * @param {?} range
         * @param {?} orientation
         * @return {?}
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.

          /** @type {?} */


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          /** @type {?} */

          var rangeLen = range.end - range.start; // Loop over all root nodes for all items in the range and sum up their size.

          /** @type {?} */

          var totalSize = 0;
          /** @type {?} */

          var i = rangeLen;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i + renderedStartIndex);
            /** @type {?} */


            var j = view ? view.rootNodes.length : 0;

            while (j--) {
              totalSize += getSize(orientation,
              /** @type {?} */
              view.rootNodes[j]);
            }
          }

          return totalSize;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).

            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next();

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this._templateCache[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var view = _step3.value;
              view.destroy();
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
        /**
         * React to scroll state changes in the viewport.
         * @private
         * @return {?}
         */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /**
         * Swap out one `DataSource` for another.
         * @private
         * @param {?} oldDs
         * @param {?} newDs
         * @return {?}
         */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /**
         * Update the `CdkVirtualForOfContext` for all views.
         * @private
         * @return {?}
         */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          /** @type {?} */
          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /**
         * Apply changes to the DOM.
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this23 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(
          /**
          * @param {?} record
          * @param {?} adjustedPreviousIndex
          * @param {?} currentIndex
          * @return {?}
          */
          function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) {
              // Item added.
              // Item added.

              /** @type {?} */
              var view = _this23._insertViewForNewItem(
              /** @type {?} */
              currentIndex);

              view.context.$implicit = record.item;
            } else if (currentIndex == null) {
              // Item removed.
              _this23._cacheView(_this23._detachView(
              /** @type {?} */
              adjustedPreviousIndex));
            } else {
              // Item moved.
              // Item moved.

              /** @type {?} */
              var _view =
              /** @type {?} */
              _this23._viewContainerRef.get(
              /** @type {?} */
              adjustedPreviousIndex);

              _this23._viewContainerRef.move(_view, currentIndex);

              _view.context.$implicit = record.item;
            }
          }); // Update $implicit for any items that had an identity change.

          changes.forEachIdentityChange(
          /**
          * @param {?} record
          * @return {?}
          */
          function (record) {
            /** @type {?} */
            var view =
            /** @type {?} */
            _this23._viewContainerRef.get(
            /** @type {?} */
            record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          /** @type {?} */

          var count = this._data.length;
          /** @type {?} */

          var i = this._viewContainerRef.length;

          while (i--) {
            /** @type {?} */
            var view =
            /** @type {?} */
            this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /**
         * Cache the given detached view.
         * @private
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_cacheView",
        value: function _cacheView(view) {
          if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
          } else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view); // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.


            if (index === -1) {
              view.destroy();
            } else {
              this._viewContainerRef.remove(index);
            }
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new one.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewForNewItem",
        value: function _insertViewForNewItem(index) {
          return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
        }
        /**
         * Update the computed properties on the `CdkVirtualForOfContext`.
         * @private
         * @param {?} context
         * @return {?}
         */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
        /**
         * Creates a new embedded view and moves it to the given index
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createEmbeddedViewAt",
        value: function _createEmbeddedViewAt(index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit:
            /** @type {?} */
            null,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf:
            /** @type {?} */
            this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          }, index);
        }
        /**
         * Inserts a recycled view from the cache at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index) {
          /** @type {?} */
          var cachedView = this._templateCache.pop();

          if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /**
         * Detaches the embedded view at the given index.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_detachView",
        value: function _detachView(index) {
          return (
            /** @type {?} */
            this._viewContainerRef.detach(index)
          );
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cdkVirtualForOf = value;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
          } else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
          }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          var _this24 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ?
          /**
          * @param {?} index
          * @param {?} item
          * @return {?}
          */
          function (index, item) {
            return fn(index + (_this24._renderedRange ? _this24._renderedRange.start : 0), item);
          } : undefined;
        }
        /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize",
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate"
      }
    });
    /** @nocollapse */

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/scrolling-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkScrollable, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/scrolling/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  },

  /***/
  "./node_modules/@tweenjs/tween.js/src/Tween.js":
  /*!*****************************************************!*\
    !*** ./node_modules/@tweenjs/tween.js/src/Tween.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesTweenjsTweenJsSrcTweenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * Tween.js - Licensed under the MIT license
    * https://github.com/tweenjs/tween.js
    * ----------------------------------------------
    *
    * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
    * Thank you all, you're awesome!
    */


    var _Group = function _Group() {
      this._tweens = {};
      this._tweensAddedDuringUpdate = {};
    };

    _Group.prototype = {
      getAll: function getAll() {
        return Object.keys(this._tweens).map(function (tweenId) {
          return this._tweens[tweenId];
        }.bind(this));
      },
      removeAll: function removeAll() {
        this._tweens = {};
      },
      add: function add(tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
      },
      remove: function remove(tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
      },
      update: function update(time, preserve) {
        var tweenIds = Object.keys(this._tweens);

        if (tweenIds.length === 0) {
          return false;
        }

        time = time !== undefined ? time : TWEEN.now(); // Tweens are updated in "batches". If you add a new tween during an update, then the
        // new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated. However,
        // if the removed tween was added during the current batch, then it will not be updated.

        while (tweenIds.length > 0) {
          this._tweensAddedDuringUpdate = {};

          for (var i = 0; i < tweenIds.length; i++) {
            var tween = this._tweens[tweenIds[i]];

            if (tween && tween.update(time) === false) {
              tween._isPlaying = false;

              if (!preserve) {
                delete this._tweens[tweenIds[i]];
              }
            }
          }

          tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }

        return true;
      }
    };
    var TWEEN = new _Group();
    TWEEN.Group = _Group;
    TWEEN._nextId = 0;

    TWEEN.nextId = function () {
      return TWEEN._nextId++;
    }; // Include a performance.now polyfill.
    // In node.js, use process.hrtime.


    if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
      TWEEN.now = function () {
        var time = process.hrtime(); // Convert [seconds, nanoseconds] to milliseconds.

        return time[0] * 1000 + time[1] / 1000000;
      };
    } // In a browser, use self.performance.now if it is available.
    else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
        // This must be bound, because directly assigning this function
        // leads to an invocation exception in Chrome.
        TWEEN.now = self.performance.now.bind(self.performance);
      } // Use Date.now if it is available.
      else if (Date.now !== undefined) {
          TWEEN.now = Date.now;
        } // Otherwise, use 'new Date().getTime()'.
        else {
            TWEEN.now = function () {
              return new Date().getTime();
            };
          }

    TWEEN.Tween = function (object, group) {
      this._object = object;
      this._valuesStart = {};
      this._valuesEnd = {};
      this._valuesStartRepeat = {};
      this._duration = 1000;
      this._repeat = 0;
      this._repeatDelayTime = undefined;
      this._yoyo = false;
      this._isPlaying = false;
      this._reversed = false;
      this._delayTime = 0;
      this._startTime = null;
      this._easingFunction = TWEEN.Easing.Linear.None;
      this._interpolationFunction = TWEEN.Interpolation.Linear;
      this._chainedTweens = [];
      this._onStartCallback = null;
      this._onStartCallbackFired = false;
      this._onUpdateCallback = null;
      this._onRepeatCallback = null;
      this._onCompleteCallback = null;
      this._onStopCallback = null;
      this._group = group || TWEEN;
      this._id = TWEEN.nextId();
    };

    TWEEN.Tween.prototype = {
      getId: function getId() {
        return this._id;
      },
      isPlaying: function isPlaying() {
        return this._isPlaying;
      },
      to: function to(properties, duration) {
        this._valuesEnd = Object.create(properties);

        if (duration !== undefined) {
          this._duration = duration;
        }

        return this;
      },
      duration: function duration(d) {
        this._duration = d;
        return this;
      },
      start: function start(time) {
        this._group.add(this);

        this._isPlaying = true;
        this._onStartCallbackFired = false;
        this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
        this._startTime += this._delayTime;

        for (var property in this._valuesEnd) {
          // Check if an Array was provided as property value
          if (this._valuesEnd[property] instanceof Array) {
            if (this._valuesEnd[property].length === 0) {
              continue;
            } // Create a local copy of the Array with the start value at the front


            this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
          } // If `to()` specifies a property that doesn't exist in the source object,
          // we should not set that property in the object


          if (this._object[property] === undefined) {
            continue;
          } // Save the starting value.


          this._valuesStart[property] = this._object[property];

          if (this._valuesStart[property] instanceof Array === false) {
            this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
          }

          this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
        }

        return this;
      },
      stop: function stop() {
        if (!this._isPlaying) {
          return this;
        }

        this._group.remove(this);

        this._isPlaying = false;

        if (this._onStopCallback !== null) {
          this._onStopCallback(this._object);
        }

        this.stopChainedTweens();
        return this;
      },
      end: function end() {
        this.update(Infinity);
        return this;
      },
      stopChainedTweens: function stopChainedTweens() {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
          this._chainedTweens[i].stop();
        }
      },
      group: function group(_group) {
        this._group = _group;
        return this;
      },
      delay: function delay(amount) {
        this._delayTime = amount;
        return this;
      },
      repeat: function repeat(times) {
        this._repeat = times;
        return this;
      },
      repeatDelay: function repeatDelay(amount) {
        this._repeatDelayTime = amount;
        return this;
      },
      yoyo: function yoyo(_yoyo) {
        this._yoyo = _yoyo;
        return this;
      },
      easing: function easing(easingFunction) {
        this._easingFunction = easingFunction;
        return this;
      },
      interpolation: function interpolation(interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
      },
      chain: function chain() {
        this._chainedTweens = arguments;
        return this;
      },
      onStart: function onStart(callback) {
        this._onStartCallback = callback;
        return this;
      },
      onUpdate: function onUpdate(callback) {
        this._onUpdateCallback = callback;
        return this;
      },
      onRepeat: function onRepeat(callback) {
        this._onRepeatCallback = callback;
        return this;
      },
      onComplete: function onComplete(callback) {
        this._onCompleteCallback = callback;
        return this;
      },
      onStop: function onStop(callback) {
        this._onStopCallback = callback;
        return this;
      },
      update: function update(time) {
        var property;
        var elapsed;
        var value;

        if (time < this._startTime) {
          return true;
        }

        if (this._onStartCallbackFired === false) {
          if (this._onStartCallback !== null) {
            this._onStartCallback(this._object);
          }

          this._onStartCallbackFired = true;
        }

        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        value = this._easingFunction(elapsed);

        for (property in this._valuesEnd) {
          // Don't update properties that do not exist in the source object
          if (this._valuesStart[property] === undefined) {
            continue;
          }

          var start = this._valuesStart[property] || 0;
          var end = this._valuesEnd[property];

          if (end instanceof Array) {
            this._object[property] = this._interpolationFunction(end, value);
          } else {
            // Parses relative end values with start as base (e.g.: +10, -3)
            if (typeof end === 'string') {
              if (end.charAt(0) === '+' || end.charAt(0) === '-') {
                end = start + parseFloat(end);
              } else {
                end = parseFloat(end);
              }
            } // Protect against non numeric properties.


            if (typeof end === 'number') {
              this._object[property] = start + (end - start) * value;
            }
          }
        }

        if (this._onUpdateCallback !== null) {
          this._onUpdateCallback(this._object, elapsed);
        }

        if (elapsed === 1) {
          if (this._repeat > 0) {
            if (isFinite(this._repeat)) {
              this._repeat--;
            } // Reassign starting values, restart by making startTime = now


            for (property in this._valuesStartRepeat) {
              if (typeof this._valuesEnd[property] === 'string') {
                this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
              }

              if (this._yoyo) {
                var tmp = this._valuesStartRepeat[property];
                this._valuesStartRepeat[property] = this._valuesEnd[property];
                this._valuesEnd[property] = tmp;
              }

              this._valuesStart[property] = this._valuesStartRepeat[property];
            }

            if (this._yoyo) {
              this._reversed = !this._reversed;
            }

            if (this._repeatDelayTime !== undefined) {
              this._startTime = time + this._repeatDelayTime;
            } else {
              this._startTime = time + this._delayTime;
            }

            if (this._onRepeatCallback !== null) {
              this._onRepeatCallback(this._object);
            }

            return true;
          } else {
            if (this._onCompleteCallback !== null) {
              this._onCompleteCallback(this._object);
            }

            for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
              // Make the chained tweens start exactly at the time they should,
              // even if the `update()` method was called way past the duration of the tween
              this._chainedTweens[i].start(this._startTime + this._duration);
            }

            return false;
          }
        }

        return true;
      }
    };
    TWEEN.Easing = {
      Linear: {
        None: function None(k) {
          return k;
        }
      },
      Quadratic: {
        In: function In(k) {
          return k * k;
        },
        Out: function Out(k) {
          return k * (2 - k);
        },
        InOut: function InOut(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k;
          }

          return -0.5 * (--k * (k - 2) - 1);
        }
      },
      Cubic: {
        In: function In(k) {
          return k * k * k;
        },
        Out: function Out(k) {
          return --k * k * k + 1;
        },
        InOut: function InOut(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
          }

          return 0.5 * ((k -= 2) * k * k + 2);
        }
      },
      Quartic: {
        In: function In(k) {
          return k * k * k * k;
        },
        Out: function Out(k) {
          return 1 - --k * k * k * k;
        },
        InOut: function InOut(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
          }

          return -0.5 * ((k -= 2) * k * k * k - 2);
        }
      },
      Quintic: {
        In: function In(k) {
          return k * k * k * k * k;
        },
        Out: function Out(k) {
          return --k * k * k * k * k + 1;
        },
        InOut: function InOut(k) {
          if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
          }

          return 0.5 * ((k -= 2) * k * k * k * k + 2);
        }
      },
      Sinusoidal: {
        In: function In(k) {
          return 1 - Math.cos(k * Math.PI / 2);
        },
        Out: function Out(k) {
          return Math.sin(k * Math.PI / 2);
        },
        InOut: function InOut(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      },
      Exponential: {
        In: function In(k) {
          return k === 0 ? 0 : Math.pow(1024, k - 1);
        },
        Out: function Out(k) {
          return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        },
        InOut: function InOut(k) {
          if (k === 0) {
            return 0;
          }

          if (k === 1) {
            return 1;
          }

          if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
          }

          return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
        }
      },
      Circular: {
        In: function In(k) {
          return 1 - Math.sqrt(1 - k * k);
        },
        Out: function Out(k) {
          return Math.sqrt(1 - --k * k);
        },
        InOut: function InOut(k) {
          if ((k *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - k * k) - 1);
          }

          return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
        }
      },
      Elastic: {
        In: function In(k) {
          if (k === 0) {
            return 0;
          }

          if (k === 1) {
            return 1;
          }

          return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        },
        Out: function Out(k) {
          if (k === 0) {
            return 0;
          }

          if (k === 1) {
            return 1;
          }

          return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function InOut(k) {
          if (k === 0) {
            return 0;
          }

          if (k === 1) {
            return 1;
          }

          k *= 2;

          if (k < 1) {
            return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
          }

          return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
        }
      },
      Back: {
        In: function In(k) {
          var s = 1.70158;
          return k * k * ((s + 1) * k - s);
        },
        Out: function Out(k) {
          var s = 1.70158;
          return --k * k * ((s + 1) * k + s) + 1;
        },
        InOut: function InOut(k) {
          var s = 1.70158 * 1.525;

          if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
          }

          return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
        }
      },
      Bounce: {
        In: function In(k) {
          return 1 - TWEEN.Easing.Bounce.Out(1 - k);
        },
        Out: function Out(k) {
          if (k < 1 / 2.75) {
            return 7.5625 * k * k;
          } else if (k < 2 / 2.75) {
            return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
          } else if (k < 2.5 / 2.75) {
            return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
          } else {
            return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
          }
        },
        InOut: function InOut(k) {
          if (k < 0.5) {
            return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
          }

          return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
        }
      }
    };
    TWEEN.Interpolation = {
      Linear: function Linear(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = TWEEN.Interpolation.Utils.Linear;

        if (k < 0) {
          return fn(v[0], v[1], f);
        }

        if (k > 1) {
          return fn(v[m], v[m - 1], m - f);
        }

        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
      },
      Bezier: function Bezier(v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = TWEEN.Interpolation.Utils.Bernstein;

        for (var i = 0; i <= n; i++) {
          b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }

        return b;
      },
      CatmullRom: function CatmullRom(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = TWEEN.Interpolation.Utils.CatmullRom;

        if (v[0] === v[m]) {
          if (k < 0) {
            i = Math.floor(f = m * (1 + k));
          }

          return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        } else {
          if (k < 0) {
            return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
          }

          if (k > 1) {
            return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
          }

          return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
      },
      Utils: {
        Linear: function Linear(p0, p1, t) {
          return (p1 - p0) * t + p0;
        },
        Bernstein: function Bernstein(n, i) {
          var fc = TWEEN.Interpolation.Utils.Factorial;
          return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: function () {
          var a = [1];
          return function (n) {
            var s = 1;

            if (a[n]) {
              return a[n];
            }

            for (var i = n; i > 1; i--) {
              s *= i;
            }

            a[n] = s;
            return s;
          };
        }(),
        CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
          var v0 = (p2 - p0) * 0.5;
          var v1 = (p3 - p1) * 0.5;
          var t2 = t * t;
          var t3 = t * t2;
          return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
      }
    }; // UMD (Universal Module Definition)

    (function (root) {
      if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return TWEEN;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(this);
    /***/

  },

  /***/
  "./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js ***!
    \*****************************************************************************************/

  /*! exports provided: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY, VirtualScrollerComponent, VirtualScrollerModule */

  /***/
  function node_modulesNgxVirtualScroller__ivy_ngcc__Fesm2015NgxVirtualScrollerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY", function () {
      return VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollerComponent", function () {
      return VirtualScrollerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollerModule", function () {
      return VirtualScrollerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @tweenjs/tween.js */
    "./node_modules/@tweenjs/tween.js/src/Tween.js");
    /* harmony import */


    var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__);

    var _c0 = ["header"];
    var _c1 = ["container"];
    var _c2 = ["content"];
    var _c3 = ["invisiblePadding"];
    var _c4 = ["*"];

    function VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY() {
      return {
        scrollThrottlingTime: 0,
        scrollDebounceTime: 0,
        scrollAnimationTime: 750,
        checkResizeInterval: 1000,
        resizeBypassRefreshThreshold: 5,
        modifyOverflowStyleOfParentScroll: true,
        stripedTable: false
      };
    }

    var VirtualScrollerComponent = /*#__PURE__*/function () {
      function VirtualScrollerComponent(element, renderer, zone, changeDetectorRef, platformId, options) {
        _classCallCheck(this, VirtualScrollerComponent);

        this.element = element;
        this.renderer = renderer;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.window = window;
        this.executeRefreshOutsideAngularZone = false;
        this._enableUnequalChildrenSizes = false;
        this.useMarginInsteadOfTranslate = false;
        this.ssrViewportWidth = 1920;
        this.ssrViewportHeight = 1080;
        this._bufferAmount = 0;
        this._items = [];

        this.compareItems = function (item1, item2) {
          return item1 === item2;
        };

        this.vsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vsStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vsEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.calculatedScrollbarWidth = 0;
        this.calculatedScrollbarHeight = 0;
        this.padding = 0;
        this.previousViewPort = {};
        this.cachedPageSize = 0;
        this.previousScrollNumberElements = 0;
        this.isAngularUniversalSSR = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(platformId);
        this.scrollThrottlingTime = options.scrollThrottlingTime;
        this.scrollDebounceTime = options.scrollDebounceTime;
        this.scrollAnimationTime = options.scrollAnimationTime;
        this.scrollbarWidth = options.scrollbarWidth;
        this.scrollbarHeight = options.scrollbarHeight;
        this.checkResizeInterval = options.checkResizeInterval;
        this.resizeBypassRefreshThreshold = options.resizeBypassRefreshThreshold;
        this.modifyOverflowStyleOfParentScroll = options.modifyOverflowStyleOfParentScroll;
        this.stripedTable = options.stripedTable;
        this.horizontal = false;
        this.resetWrapGroupDimensions();
      }

      _createClass(VirtualScrollerComponent, [{
        key: "updateOnScrollFunction",
        value: function updateOnScrollFunction() {
          var _this25 = this;

          if (this.scrollDebounceTime) {
            this.onScroll = this.debounce(function () {
              _this25.refresh_internal(false);
            }, this.scrollDebounceTime);
          } else if (this.scrollThrottlingTime) {
            this.onScroll = this.throttleTrailing(function () {
              _this25.refresh_internal(false);
            }, this.scrollThrottlingTime);
          } else {
            this.onScroll = function () {
              _this25.refresh_internal(false);
            };
          }
        }
      }, {
        key: "revertParentOverscroll",
        value: function revertParentOverscroll() {
          var scrollElement = this.getScrollElement();

          if (scrollElement && this.oldParentScrollOverflow) {
            scrollElement.style['overflow-y'] = this.oldParentScrollOverflow.y;
            scrollElement.style['overflow-x'] = this.oldParentScrollOverflow.x;
          }

          this.oldParentScrollOverflow = undefined;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addScrollEventHandlers();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.removeScrollEventHandlers();
          this.revertParentOverscroll();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var indexLengthChanged = this.cachedItemsLength !== this.items.length;
          this.cachedItemsLength = this.items.length;
          var firstRun = !changes.items || !changes.items.previousValue || changes.items.previousValue.length === 0;
          this.refresh_internal(indexLengthChanged || firstRun);
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.cachedItemsLength !== this.items.length) {
            this.cachedItemsLength = this.items.length;
            this.refresh_internal(true);
            return;
          }

          if (this.previousViewPort && this.viewPortItems && this.viewPortItems.length > 0) {
            var itemsArrayChanged = false;

            for (var i = 0; i < this.viewPortItems.length; ++i) {
              if (!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer + i], this.viewPortItems[i])) {
                itemsArrayChanged = true;
                break;
              }
            }

            if (itemsArrayChanged) {
              this.refresh_internal(true);
            }
          }
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.refresh_internal(true);
        }
      }, {
        key: "invalidateAllCachedMeasurements",
        value: function invalidateAllCachedMeasurements() {
          this.wrapGroupDimensions = {
            maxChildSizePerWrapGroup: [],
            numberOfKnownWrapGroupChildSizes: 0,
            sumOfKnownWrapGroupChildWidths: 0,
            sumOfKnownWrapGroupChildHeights: 0
          };
          this.minMeasuredChildWidth = undefined;
          this.minMeasuredChildHeight = undefined;
          this.refresh_internal(false);
        }
      }, {
        key: "invalidateCachedMeasurementForItem",
        value: function invalidateCachedMeasurementForItem(item) {
          if (this.enableUnequalChildrenSizes) {
            var index = this.items && this.items.indexOf(item);

            if (index >= 0) {
              this.invalidateCachedMeasurementAtIndex(index);
            }
          } else {
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
          }

          this.refresh_internal(false);
        }
      }, {
        key: "invalidateCachedMeasurementAtIndex",
        value: function invalidateCachedMeasurementAtIndex(index) {
          if (this.enableUnequalChildrenSizes) {
            var cachedMeasurement = this.wrapGroupDimensions.maxChildSizePerWrapGroup[index];

            if (cachedMeasurement) {
              this.wrapGroupDimensions.maxChildSizePerWrapGroup[index] = undefined;
              --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= cachedMeasurement.childWidth || 0;
              this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= cachedMeasurement.childHeight || 0;
            }
          } else {
            this.minMeasuredChildWidth = undefined;
            this.minMeasuredChildHeight = undefined;
          }

          this.refresh_internal(false);
        }
      }, {
        key: "scrollInto",
        value: function scrollInto(item) {
          var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
          var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
          var index = this.items.indexOf(item);

          if (index === -1) {
            return;
          }

          this.scrollToIndex(index, alignToBeginning, additionalOffset, animationMilliseconds, animationCompletedCallback);
        }
      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var _this26 = this;

          var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
          var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
          var maxRetries = 5;

          var retryIfNeeded = function retryIfNeeded() {
            --maxRetries;

            if (maxRetries <= 0) {
              if (animationCompletedCallback) {
                animationCompletedCallback();
              }

              return;
            }

            var dimensions = _this26.calculateDimensions();

            var desiredStartIndex = Math.min(Math.max(index, 0), dimensions.itemCount - 1);

            if (_this26.previousViewPort.startIndex === desiredStartIndex) {
              if (animationCompletedCallback) {
                animationCompletedCallback();
              }

              return;
            }

            _this26.scrollToIndex_internal(index, alignToBeginning, additionalOffset, 0, retryIfNeeded);
          };

          this.scrollToIndex_internal(index, alignToBeginning, additionalOffset, animationMilliseconds, retryIfNeeded);
        }
      }, {
        key: "scrollToIndex_internal",
        value: function scrollToIndex_internal(index) {
          var alignToBeginning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var additionalOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var animationMilliseconds = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
          var animationCompletedCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
          animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
          var dimensions = this.calculateDimensions();
          var scroll = this.calculatePadding(index, dimensions) + additionalOffset;

          if (!alignToBeginning) {
            scroll -= dimensions.wrapGroupsPerPage * dimensions[this._childScrollDim];
          }

          this.scrollToPosition(scroll, animationMilliseconds, animationCompletedCallback);
        }
      }, {
        key: "scrollToPosition",
        value: function scrollToPosition(scrollPosition) {
          var _this27 = this;

          var animationMilliseconds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          var animationCompletedCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
          scrollPosition += this.getElementsOffset();
          animationMilliseconds = animationMilliseconds === undefined ? this.scrollAnimationTime : animationMilliseconds;
          var scrollElement = this.getScrollElement();
          var animationRequest;

          if (this.currentTween) {
            this.currentTween.stop();
            this.currentTween = undefined;
          }

          if (!animationMilliseconds) {
            this.renderer.setProperty(scrollElement, this._scrollType, scrollPosition);
            this.refresh_internal(false, animationCompletedCallback);
            return;
          }

          var tweenConfigObj = {
            scrollPosition: scrollElement[this._scrollType]
          };
          var newTween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__["Tween"](tweenConfigObj).to({
            scrollPosition: scrollPosition
          }, animationMilliseconds).easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_3__["Easing"].Quadratic.Out).onUpdate(function (data) {
            if (isNaN(data.scrollPosition)) {
              return;
            }

            _this27.renderer.setProperty(scrollElement, _this27._scrollType, data.scrollPosition);

            _this27.refresh_internal(false);
          }).onStop(function () {
            cancelAnimationFrame(animationRequest);
          }).start();

          var animate = function animate(time) {
            if (!newTween["isPlaying"]()) {
              return;
            }

            newTween.update(time);

            if (tweenConfigObj.scrollPosition === scrollPosition) {
              _this27.refresh_internal(false, animationCompletedCallback);

              return;
            }

            _this27.zone.runOutsideAngular(function () {
              animationRequest = requestAnimationFrame(animate);
            });
          };

          animate();
          this.currentTween = newTween;
        }
      }, {
        key: "getElementSize",
        value: function getElementSize(element) {
          var result = element.getBoundingClientRect();
          var styles = getComputedStyle(element);
          var marginTop = parseInt(styles['margin-top'], 10) || 0;
          var marginBottom = parseInt(styles['margin-bottom'], 10) || 0;
          var marginLeft = parseInt(styles['margin-left'], 10) || 0;
          var marginRight = parseInt(styles['margin-right'], 10) || 0;
          return {
            top: result.top + marginTop,
            bottom: result.bottom + marginBottom,
            left: result.left + marginLeft,
            right: result.right + marginRight,
            width: result.width + marginLeft + marginRight,
            height: result.height + marginTop + marginBottom
          };
        }
      }, {
        key: "checkScrollElementResized",
        value: function checkScrollElementResized() {
          var boundingRect = this.getElementSize(this.getScrollElement());
          var sizeChanged;

          if (!this.previousScrollBoundingRect) {
            sizeChanged = true;
          } else {
            var widthChange = Math.abs(boundingRect.width - this.previousScrollBoundingRect.width);
            var heightChange = Math.abs(boundingRect.height - this.previousScrollBoundingRect.height);
            sizeChanged = widthChange > this.resizeBypassRefreshThreshold || heightChange > this.resizeBypassRefreshThreshold;
          }

          if (sizeChanged) {
            this.previousScrollBoundingRect = boundingRect;

            if (boundingRect.width > 0 && boundingRect.height > 0) {
              this.refresh_internal(false);
            }
          }
        }
      }, {
        key: "updateDirection",
        value: function updateDirection() {
          if (this.horizontal) {
            this._invisiblePaddingProperty = 'width';
            this._offsetType = 'offsetLeft';
            this._pageOffsetType = 'pageXOffset';
            this._childScrollDim = 'childWidth';
            this._marginDir = 'margin-left';
            this._translateDir = 'translateX';
            this._scrollType = 'scrollLeft';
          } else {
            this._invisiblePaddingProperty = 'height';
            this._offsetType = 'offsetTop';
            this._pageOffsetType = 'pageYOffset';
            this._childScrollDim = 'childHeight';
            this._marginDir = 'margin-top';
            this._translateDir = 'translateY';
            this._scrollType = 'scrollTop';
          }
        }
      }, {
        key: "debounce",
        value: function debounce(func, wait) {
          var throttled = this.throttleTrailing(func, wait);

          var result = function result() {
            throttled['cancel']();
            throttled.apply(this, arguments);
          };

          result['cancel'] = function () {
            throttled['cancel']();
          };

          return result;
        }
      }, {
        key: "throttleTrailing",
        value: function throttleTrailing(func, wait) {
          var timeout = undefined;
          var _arguments = arguments;

          var result = function result() {
            var _this = this;

            _arguments = arguments;

            if (timeout) {
              return;
            }

            if (wait <= 0) {
              func.apply(_this, _arguments);
            } else {
              timeout = setTimeout(function () {
                timeout = undefined;
                func.apply(_this, _arguments);
              }, wait);
            }
          };

          result['cancel'] = function () {
            if (timeout) {
              clearTimeout(timeout);
              timeout = undefined;
            }
          };

          return result;
        }
      }, {
        key: "refresh_internal",
        value: function refresh_internal(itemsArrayModified) {
          var _this28 = this;

          var refreshCompletedCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          var maxRunTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

          //note: maxRunTimes is to force it to keep recalculating if the previous iteration caused a re-render (different sliced items in viewport or scrollPosition changed).
          //The default of 2x max will probably be accurate enough without causing too large a performance bottleneck
          //The code would typically quit out on the 2nd iteration anyways. The main time it'd think more than 2 runs would be necessary would be for vastly different sized child items or if this is the 1st time the items array was initialized.
          //Without maxRunTimes, If the user is actively scrolling this code would become an infinite loop until they stopped scrolling. This would be okay, except each scroll event would start an additional infinte loop. We want to short-circuit it to prevent this.
          if (itemsArrayModified && this.previousViewPort && this.previousViewPort.scrollStartPosition > 0) {
            //if items were prepended, scroll forward to keep same items visible
            var oldViewPort = this.previousViewPort;
            var oldViewPortItems = this.viewPortItems;
            var oldRefreshCompletedCallback = refreshCompletedCallback;

            refreshCompletedCallback = function refreshCompletedCallback() {
              var scrollLengthDelta = _this28.previousViewPort.scrollLength - oldViewPort.scrollLength;

              if (scrollLengthDelta > 0 && _this28.viewPortItems) {
                var oldStartItem = oldViewPortItems[0];

                var oldStartItemIndex = _this28.items.findIndex(function (x) {
                  return _this28.compareItems(oldStartItem, x);
                });

                if (oldStartItemIndex > _this28.previousViewPort.startIndexWithBuffer) {
                  var itemOrderChanged = false;

                  for (var i = 1; i < _this28.viewPortItems.length; ++i) {
                    if (!_this28.compareItems(_this28.items[oldStartItemIndex + i], oldViewPortItems[i])) {
                      itemOrderChanged = true;
                      break;
                    }
                  }

                  if (!itemOrderChanged) {
                    _this28.scrollToPosition(_this28.previousViewPort.scrollStartPosition + scrollLengthDelta, 0, oldRefreshCompletedCallback);

                    return;
                  }
                }
              }

              if (oldRefreshCompletedCallback) {
                oldRefreshCompletedCallback();
              }
            };
          }

          this.zone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
              if (itemsArrayModified) {
                _this28.resetWrapGroupDimensions();
              }

              var viewport = _this28.calculateViewport();

              var startChanged = itemsArrayModified || viewport.startIndex !== _this28.previousViewPort.startIndex;
              var endChanged = itemsArrayModified || viewport.endIndex !== _this28.previousViewPort.endIndex;
              var scrollLengthChanged = viewport.scrollLength !== _this28.previousViewPort.scrollLength;
              var paddingChanged = viewport.padding !== _this28.previousViewPort.padding;
              var scrollPositionChanged = viewport.scrollStartPosition !== _this28.previousViewPort.scrollStartPosition || viewport.scrollEndPosition !== _this28.previousViewPort.scrollEndPosition || viewport.maxScrollPosition !== _this28.previousViewPort.maxScrollPosition;
              _this28.previousViewPort = viewport;

              if (scrollLengthChanged) {
                _this28.renderer.setStyle(_this28.invisiblePaddingElementRef.nativeElement, _this28._invisiblePaddingProperty, "".concat(viewport.scrollLength, "px"));
              }

              if (paddingChanged) {
                if (_this28.useMarginInsteadOfTranslate) {
                  _this28.renderer.setStyle(_this28.contentElementRef.nativeElement, _this28._marginDir, "".concat(viewport.padding, "px"));
                } else {
                  _this28.renderer.setStyle(_this28.contentElementRef.nativeElement, 'transform', "".concat(_this28._translateDir, "(").concat(viewport.padding, "px)"));

                  _this28.renderer.setStyle(_this28.contentElementRef.nativeElement, 'webkitTransform', "".concat(_this28._translateDir, "(").concat(viewport.padding, "px)"));
                }
              }

              if (_this28.headerElementRef) {
                var scrollPosition = _this28.getScrollElement()[_this28._scrollType];

                var containerOffset = _this28.getElementsOffset();

                var offset = Math.max(scrollPosition - viewport.padding - containerOffset + _this28.headerElementRef.nativeElement.clientHeight, 0);

                _this28.renderer.setStyle(_this28.headerElementRef.nativeElement, 'transform', "".concat(_this28._translateDir, "(").concat(offset, "px)"));

                _this28.renderer.setStyle(_this28.headerElementRef.nativeElement, 'webkitTransform', "".concat(_this28._translateDir, "(").concat(offset, "px)"));
              }

              var changeEventArg = startChanged || endChanged ? {
                startIndex: viewport.startIndex,
                endIndex: viewport.endIndex,
                scrollStartPosition: viewport.scrollStartPosition,
                scrollEndPosition: viewport.scrollEndPosition,
                startIndexWithBuffer: viewport.startIndexWithBuffer,
                endIndexWithBuffer: viewport.endIndexWithBuffer,
                maxScrollPosition: viewport.maxScrollPosition
              } : undefined;

              if (startChanged || endChanged || scrollPositionChanged) {
                var handleChanged = function handleChanged() {
                  // update the scroll list to trigger re-render of components in viewport
                  _this28.viewPortItems = viewport.startIndexWithBuffer >= 0 && viewport.endIndexWithBuffer >= 0 ? _this28.items.slice(viewport.startIndexWithBuffer, viewport.endIndexWithBuffer + 1) : [];

                  _this28.vsUpdate.emit(_this28.viewPortItems);

                  if (startChanged) {
                    _this28.vsStart.emit(changeEventArg);
                  }

                  if (endChanged) {
                    _this28.vsEnd.emit(changeEventArg);
                  }

                  if (startChanged || endChanged) {
                    _this28.changeDetectorRef.markForCheck();

                    _this28.vsChange.emit(changeEventArg);
                  }

                  if (maxRunTimes > 0) {
                    _this28.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                    return;
                  }

                  if (refreshCompletedCallback) {
                    refreshCompletedCallback();
                  }
                };

                if (_this28.executeRefreshOutsideAngularZone) {
                  handleChanged();
                } else {
                  _this28.zone.run(handleChanged);
                }
              } else {
                if (maxRunTimes > 0 && (scrollLengthChanged || paddingChanged)) {
                  _this28.refresh_internal(false, refreshCompletedCallback, maxRunTimes - 1);

                  return;
                }

                if (refreshCompletedCallback) {
                  refreshCompletedCallback();
                }
              }
            });
          });
        }
      }, {
        key: "getScrollElement",
        value: function getScrollElement() {
          return this.parentScroll instanceof Window ? document.scrollingElement || document.documentElement || document.body : this.parentScroll || this.element.nativeElement;
        }
      }, {
        key: "addScrollEventHandlers",
        value: function addScrollEventHandlers() {
          var _this29 = this;

          if (this.isAngularUniversalSSR) {
            return;
          }

          var scrollElement = this.getScrollElement();
          this.removeScrollEventHandlers();
          this.zone.runOutsideAngular(function () {
            if (_this29.parentScroll instanceof Window) {
              _this29.disposeScrollHandler = _this29.renderer.listen('window', 'scroll', _this29.onScroll);
              _this29.disposeResizeHandler = _this29.renderer.listen('window', 'resize', _this29.onScroll);
            } else {
              _this29.disposeScrollHandler = _this29.renderer.listen(scrollElement, 'scroll', _this29.onScroll);

              if (_this29._checkResizeInterval > 0) {
                _this29.checkScrollElementResizedTimer = setInterval(function () {
                  _this29.checkScrollElementResized();
                }, _this29._checkResizeInterval);
              }
            }
          });
        }
      }, {
        key: "removeScrollEventHandlers",
        value: function removeScrollEventHandlers() {
          if (this.checkScrollElementResizedTimer) {
            clearInterval(this.checkScrollElementResizedTimer);
          }

          if (this.disposeScrollHandler) {
            this.disposeScrollHandler();
            this.disposeScrollHandler = undefined;
          }

          if (this.disposeResizeHandler) {
            this.disposeResizeHandler();
            this.disposeResizeHandler = undefined;
          }
        }
      }, {
        key: "getElementsOffset",
        value: function getElementsOffset() {
          if (this.isAngularUniversalSSR) {
            return 0;
          }

          var offset = 0;

          if (this.containerElementRef && this.containerElementRef.nativeElement) {
            offset += this.containerElementRef.nativeElement[this._offsetType];
          }

          if (this.parentScroll) {
            var scrollElement = this.getScrollElement();
            var elementClientRect = this.getElementSize(this.element.nativeElement);
            var scrollClientRect = this.getElementSize(scrollElement);

            if (this.horizontal) {
              offset += elementClientRect.left - scrollClientRect.left;
            } else {
              offset += elementClientRect.top - scrollClientRect.top;
            }

            if (!(this.parentScroll instanceof Window)) {
              offset += scrollElement[this._scrollType];
            }
          }

          return offset;
        }
      }, {
        key: "countItemsPerWrapGroup",
        value: function countItemsPerWrapGroup() {
          if (this.isAngularUniversalSSR) {
            return Math.round(this.horizontal ? this.ssrViewportHeight / this.ssrChildHeight : this.ssrViewportWidth / this.ssrChildWidth);
          }

          var propertyName = this.horizontal ? 'offsetLeft' : 'offsetTop';
          var children = (this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement).children;
          var childrenLength = children ? children.length : 0;

          if (childrenLength === 0) {
            return 1;
          }

          var firstOffset = children[0][propertyName];
          var result = 1;

          while (result < childrenLength && firstOffset === children[result][propertyName]) {
            ++result;
          }

          return result;
        }
      }, {
        key: "getScrollStartPosition",
        value: function getScrollStartPosition() {
          var windowScrollValue = undefined;

          if (this.parentScroll instanceof Window) {
            windowScrollValue = window[this._pageOffsetType];
          }

          return windowScrollValue || this.getScrollElement()[this._scrollType] || 0;
        }
      }, {
        key: "resetWrapGroupDimensions",
        value: function resetWrapGroupDimensions() {
          var oldWrapGroupDimensions = this.wrapGroupDimensions;
          this.invalidateAllCachedMeasurements();

          if (!this.enableUnequalChildrenSizes || !oldWrapGroupDimensions || oldWrapGroupDimensions.numberOfKnownWrapGroupChildSizes === 0) {
            return;
          }

          var itemsPerWrapGroup = this.countItemsPerWrapGroup();

          for (var wrapGroupIndex = 0; wrapGroupIndex < oldWrapGroupDimensions.maxChildSizePerWrapGroup.length; ++wrapGroupIndex) {
            var oldWrapGroupDimension = oldWrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

            if (!oldWrapGroupDimension || !oldWrapGroupDimension.items || !oldWrapGroupDimension.items.length) {
              continue;
            }

            if (oldWrapGroupDimension.items.length !== itemsPerWrapGroup) {
              return;
            }

            var itemsChanged = false;
            var arrayStartIndex = itemsPerWrapGroup * wrapGroupIndex;

            for (var i = 0; i < itemsPerWrapGroup; ++i) {
              if (!this.compareItems(oldWrapGroupDimension.items[i], this.items[arrayStartIndex + i])) {
                itemsChanged = true;
                break;
              }
            }

            if (!itemsChanged) {
              ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
              this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += oldWrapGroupDimension.childWidth || 0;
              this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += oldWrapGroupDimension.childHeight || 0;
              this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = oldWrapGroupDimension;
            }
          }
        }
      }, {
        key: "calculateDimensions",
        value: function calculateDimensions() {
          var scrollElement = this.getScrollElement();
          var maxCalculatedScrollBarSize = 25; // Note: Formula to auto-calculate doesn't work for ParentScroll, so we default to this if not set by consuming application

          this.calculatedScrollbarHeight = Math.max(Math.min(scrollElement.offsetHeight - scrollElement.clientHeight, maxCalculatedScrollBarSize), this.calculatedScrollbarHeight);
          this.calculatedScrollbarWidth = Math.max(Math.min(scrollElement.offsetWidth - scrollElement.clientWidth, maxCalculatedScrollBarSize), this.calculatedScrollbarWidth);
          var viewportWidth = scrollElement.offsetWidth - (this.scrollbarWidth || this.calculatedScrollbarWidth || (this.horizontal ? 0 : maxCalculatedScrollBarSize));
          var viewportHeight = scrollElement.offsetHeight - (this.scrollbarHeight || this.calculatedScrollbarHeight || (this.horizontal ? maxCalculatedScrollBarSize : 0));
          var content = this.containerElementRef && this.containerElementRef.nativeElement || this.contentElementRef.nativeElement;
          var itemsPerWrapGroup = this.countItemsPerWrapGroup();
          var wrapGroupsPerPage;
          var defaultChildWidth;
          var defaultChildHeight;

          if (this.isAngularUniversalSSR) {
            viewportWidth = this.ssrViewportWidth;
            viewportHeight = this.ssrViewportHeight;
            defaultChildWidth = this.ssrChildWidth;
            defaultChildHeight = this.ssrChildHeight;
            var itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);
            var itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);
            wrapGroupsPerPage = this.horizontal ? itemsPerRow : itemsPerCol;
          } else if (!this.enableUnequalChildrenSizes) {
            if (content.children.length > 0) {
              if (!this.childWidth || !this.childHeight) {
                if (!this.minMeasuredChildWidth && viewportWidth > 0) {
                  this.minMeasuredChildWidth = viewportWidth;
                }

                if (!this.minMeasuredChildHeight && viewportHeight > 0) {
                  this.minMeasuredChildHeight = viewportHeight;
                }
              }

              var child = content.children[0];
              var clientRect = this.getElementSize(child);
              this.minMeasuredChildWidth = Math.min(this.minMeasuredChildWidth, clientRect.width);
              this.minMeasuredChildHeight = Math.min(this.minMeasuredChildHeight, clientRect.height);
            }

            defaultChildWidth = this.childWidth || this.minMeasuredChildWidth || viewportWidth;
            defaultChildHeight = this.childHeight || this.minMeasuredChildHeight || viewportHeight;

            var _itemsPerRow = Math.max(Math.ceil(viewportWidth / defaultChildWidth), 1);

            var _itemsPerCol = Math.max(Math.ceil(viewportHeight / defaultChildHeight), 1);

            wrapGroupsPerPage = this.horizontal ? _itemsPerRow : _itemsPerCol;
          } else {
            var scrollOffset = scrollElement[this._scrollType] - (this.previousViewPort ? this.previousViewPort.padding : 0);
            var arrayStartIndex = this.previousViewPort.startIndexWithBuffer || 0;
            var wrapGroupIndex = Math.ceil(arrayStartIndex / itemsPerWrapGroup);
            var maxWidthForWrapGroup = 0;
            var maxHeightForWrapGroup = 0;
            var sumOfVisibleMaxWidths = 0;
            var sumOfVisibleMaxHeights = 0;
            wrapGroupsPerPage = 0;

            for (var i = 0; i < content.children.length; ++i) {
              ++arrayStartIndex;
              var _child = content.children[i];

              var _clientRect = this.getElementSize(_child);

              maxWidthForWrapGroup = Math.max(maxWidthForWrapGroup, _clientRect.width);
              maxHeightForWrapGroup = Math.max(maxHeightForWrapGroup, _clientRect.height);

              if (arrayStartIndex % itemsPerWrapGroup === 0) {
                var oldValue = this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex];

                if (oldValue) {
                  --this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                  this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -= oldValue.childWidth || 0;
                  this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -= oldValue.childHeight || 0;
                }

                ++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
                var items = this.items.slice(arrayStartIndex - itemsPerWrapGroup, arrayStartIndex);
                this.wrapGroupDimensions.maxChildSizePerWrapGroup[wrapGroupIndex] = {
                  childWidth: maxWidthForWrapGroup,
                  childHeight: maxHeightForWrapGroup,
                  items: items
                };
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += maxWidthForWrapGroup;
                this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += maxHeightForWrapGroup;

                if (this.horizontal) {
                  var maxVisibleWidthForWrapGroup = Math.min(maxWidthForWrapGroup, Math.max(viewportWidth - sumOfVisibleMaxWidths, 0));

                  if (scrollOffset > 0) {
                    var scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleWidthForWrapGroup);
                    maxVisibleWidthForWrapGroup -= scrollOffsetToRemove;
                    scrollOffset -= scrollOffsetToRemove;
                  }

                  sumOfVisibleMaxWidths += maxVisibleWidthForWrapGroup;

                  if (maxVisibleWidthForWrapGroup > 0 && viewportWidth >= sumOfVisibleMaxWidths) {
                    ++wrapGroupsPerPage;
                  }
                } else {
                  var maxVisibleHeightForWrapGroup = Math.min(maxHeightForWrapGroup, Math.max(viewportHeight - sumOfVisibleMaxHeights, 0));

                  if (scrollOffset > 0) {
                    var _scrollOffsetToRemove = Math.min(scrollOffset, maxVisibleHeightForWrapGroup);

                    maxVisibleHeightForWrapGroup -= _scrollOffsetToRemove;
                    scrollOffset -= _scrollOffsetToRemove;
                  }

                  sumOfVisibleMaxHeights += maxVisibleHeightForWrapGroup;

                  if (maxVisibleHeightForWrapGroup > 0 && viewportHeight >= sumOfVisibleMaxHeights) {
                    ++wrapGroupsPerPage;
                  }
                }

                ++wrapGroupIndex;
                maxWidthForWrapGroup = 0;
                maxHeightForWrapGroup = 0;
              }
            }

            var averageChildWidth = this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            var averageChildHeight = this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights / this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;
            defaultChildWidth = this.childWidth || averageChildWidth || viewportWidth;
            defaultChildHeight = this.childHeight || averageChildHeight || viewportHeight;

            if (this.horizontal) {
              if (viewportWidth > sumOfVisibleMaxWidths) {
                wrapGroupsPerPage += Math.ceil((viewportWidth - sumOfVisibleMaxWidths) / defaultChildWidth);
              }
            } else {
              if (viewportHeight > sumOfVisibleMaxHeights) {
                wrapGroupsPerPage += Math.ceil((viewportHeight - sumOfVisibleMaxHeights) / defaultChildHeight);
              }
            }
          }

          var itemCount = this.items.length;
          var itemsPerPage = itemsPerWrapGroup * wrapGroupsPerPage;
          var pageCount_fractional = itemCount / itemsPerPage;
          var numberOfWrapGroups = Math.ceil(itemCount / itemsPerWrapGroup);
          var scrollLength = 0;
          var defaultScrollLengthPerWrapGroup = this.horizontal ? defaultChildWidth : defaultChildHeight;

          if (this.enableUnequalChildrenSizes) {
            var numUnknownChildSizes = 0;

            for (var _i2 = 0; _i2 < numberOfWrapGroups; ++_i2) {
              var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i2] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[_i2][this._childScrollDim];

              if (childSize) {
                scrollLength += childSize;
              } else {
                ++numUnknownChildSizes;
              }
            }

            scrollLength += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
          } else {
            scrollLength = numberOfWrapGroups * defaultScrollLengthPerWrapGroup;
          }

          if (this.headerElementRef) {
            scrollLength += this.headerElementRef.nativeElement.clientHeight;
          }

          var viewportLength = this.horizontal ? viewportWidth : viewportHeight;
          var maxScrollPosition = Math.max(scrollLength - viewportLength, 0);
          return {
            itemCount: itemCount,
            itemsPerWrapGroup: itemsPerWrapGroup,
            wrapGroupsPerPage: wrapGroupsPerPage,
            itemsPerPage: itemsPerPage,
            pageCount_fractional: pageCount_fractional,
            childWidth: defaultChildWidth,
            childHeight: defaultChildHeight,
            scrollLength: scrollLength,
            viewportLength: viewportLength,
            maxScrollPosition: maxScrollPosition
          };
        }
      }, {
        key: "calculatePadding",
        value: function calculatePadding(arrayStartIndexWithBuffer, dimensions) {
          if (dimensions.itemCount === 0) {
            return 0;
          }

          var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];
          var startingWrapGroupIndex = Math.floor(arrayStartIndexWithBuffer / dimensions.itemsPerWrapGroup) || 0;

          if (!this.enableUnequalChildrenSizes) {
            return defaultScrollLengthPerWrapGroup * startingWrapGroupIndex;
          }

          var numUnknownChildSizes = 0;
          var result = 0;

          for (var i = 0; i < startingWrapGroupIndex; ++i) {
            var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

            if (childSize) {
              result += childSize;
            } else {
              ++numUnknownChildSizes;
            }
          }

          result += Math.round(numUnknownChildSizes * defaultScrollLengthPerWrapGroup);
          return result;
        }
      }, {
        key: "calculatePageInfo",
        value: function calculatePageInfo(scrollPosition, dimensions) {
          var scrollPercentage = 0;

          if (this.enableUnequalChildrenSizes) {
            var numberOfWrapGroups = Math.ceil(dimensions.itemCount / dimensions.itemsPerWrapGroup);
            var totalScrolledLength = 0;
            var defaultScrollLengthPerWrapGroup = dimensions[this._childScrollDim];

            for (var i = 0; i < numberOfWrapGroups; ++i) {
              var childSize = this.wrapGroupDimensions.maxChildSizePerWrapGroup[i] && this.wrapGroupDimensions.maxChildSizePerWrapGroup[i][this._childScrollDim];

              if (childSize) {
                totalScrolledLength += childSize;
              } else {
                totalScrolledLength += defaultScrollLengthPerWrapGroup;
              }

              if (scrollPosition < totalScrolledLength) {
                scrollPercentage = i / numberOfWrapGroups;
                break;
              }
            }
          } else {
            scrollPercentage = scrollPosition / dimensions.scrollLength;
          }

          var startingArrayIndex_fractional = Math.min(Math.max(scrollPercentage * dimensions.pageCount_fractional, 0), dimensions.pageCount_fractional) * dimensions.itemsPerPage;
          var maxStart = dimensions.itemCount - dimensions.itemsPerPage - 1;
          var arrayStartIndex = Math.min(Math.floor(startingArrayIndex_fractional), maxStart);
          arrayStartIndex -= arrayStartIndex % dimensions.itemsPerWrapGroup; // round down to start of wrapGroup

          if (this.stripedTable) {
            var bufferBoundary = 2 * dimensions.itemsPerWrapGroup;

            if (arrayStartIndex % bufferBoundary !== 0) {
              arrayStartIndex = Math.max(arrayStartIndex - arrayStartIndex % bufferBoundary, 0);
            }
          }

          var arrayEndIndex = Math.ceil(startingArrayIndex_fractional) + dimensions.itemsPerPage - 1;
          var endIndexWithinWrapGroup = (arrayEndIndex + 1) % dimensions.itemsPerWrapGroup;

          if (endIndexWithinWrapGroup > 0) {
            arrayEndIndex += dimensions.itemsPerWrapGroup - endIndexWithinWrapGroup; // round up to end of wrapGroup
          }

          if (isNaN(arrayStartIndex)) {
            arrayStartIndex = 0;
          }

          if (isNaN(arrayEndIndex)) {
            arrayEndIndex = 0;
          }

          arrayStartIndex = Math.min(Math.max(arrayStartIndex, 0), dimensions.itemCount - 1);
          arrayEndIndex = Math.min(Math.max(arrayEndIndex, 0), dimensions.itemCount - 1);
          var bufferSize = this.bufferAmount * dimensions.itemsPerWrapGroup;
          var startIndexWithBuffer = Math.min(Math.max(arrayStartIndex - bufferSize, 0), dimensions.itemCount - 1);
          var endIndexWithBuffer = Math.min(Math.max(arrayEndIndex + bufferSize, 0), dimensions.itemCount - 1);
          return {
            startIndex: arrayStartIndex,
            endIndex: arrayEndIndex,
            startIndexWithBuffer: startIndexWithBuffer,
            endIndexWithBuffer: endIndexWithBuffer,
            scrollStartPosition: scrollPosition,
            scrollEndPosition: scrollPosition + dimensions.viewportLength,
            maxScrollPosition: dimensions.maxScrollPosition
          };
        }
      }, {
        key: "calculateViewport",
        value: function calculateViewport() {
          var dimensions = this.calculateDimensions();
          var offset = this.getElementsOffset();
          var scrollStartPosition = this.getScrollStartPosition();

          if (scrollStartPosition > dimensions.scrollLength + offset && !(this.parentScroll instanceof Window)) {
            scrollStartPosition = dimensions.scrollLength;
          } else {
            scrollStartPosition -= offset;
          }

          scrollStartPosition = Math.max(0, scrollStartPosition);
          var pageInfo = this.calculatePageInfo(scrollStartPosition, dimensions);
          var newPadding = this.calculatePadding(pageInfo.startIndexWithBuffer, dimensions);
          var newScrollLength = dimensions.scrollLength;
          return {
            startIndex: pageInfo.startIndex,
            endIndex: pageInfo.endIndex,
            startIndexWithBuffer: pageInfo.startIndexWithBuffer,
            endIndexWithBuffer: pageInfo.endIndexWithBuffer,
            padding: Math.round(newPadding),
            scrollLength: Math.round(newScrollLength),
            scrollStartPosition: pageInfo.scrollStartPosition,
            scrollEndPosition: pageInfo.scrollEndPosition,
            maxScrollPosition: pageInfo.maxScrollPosition
          };
        }
      }, {
        key: "viewPortInfo",
        get: function get() {
          var pageInfo = this.previousViewPort || {};
          return {
            startIndex: pageInfo.startIndex || 0,
            endIndex: pageInfo.endIndex || 0,
            scrollStartPosition: pageInfo.scrollStartPosition || 0,
            scrollEndPosition: pageInfo.scrollEndPosition || 0,
            maxScrollPosition: pageInfo.maxScrollPosition || 0,
            startIndexWithBuffer: pageInfo.startIndexWithBuffer || 0,
            endIndexWithBuffer: pageInfo.endIndexWithBuffer || 0
          };
        }
      }, {
        key: "enableUnequalChildrenSizes",
        get: function get() {
          return this._enableUnequalChildrenSizes;
        },
        set: function set(value) {
          if (this._enableUnequalChildrenSizes === value) {
            return;
          }

          this._enableUnequalChildrenSizes = value;
          this.minMeasuredChildWidth = undefined;
          this.minMeasuredChildHeight = undefined;
        }
      }, {
        key: "bufferAmount",
        get: function get() {
          if (typeof this._bufferAmount === 'number' && this._bufferAmount >= 0) {
            return this._bufferAmount;
          } else {
            return this.enableUnequalChildrenSizes ? 5 : 0;
          }
        },
        set: function set(value) {
          this._bufferAmount = value;
        }
      }, {
        key: "scrollThrottlingTime",
        get: function get() {
          return this._scrollThrottlingTime;
        },
        set: function set(value) {
          this._scrollThrottlingTime = value;
          this.updateOnScrollFunction();
        }
      }, {
        key: "scrollDebounceTime",
        get: function get() {
          return this._scrollDebounceTime;
        },
        set: function set(value) {
          this._scrollDebounceTime = value;
          this.updateOnScrollFunction();
        }
      }, {
        key: "checkResizeInterval",
        get: function get() {
          return this._checkResizeInterval;
        },
        set: function set(value) {
          if (this._checkResizeInterval === value) {
            return;
          }

          this._checkResizeInterval = value;
          this.addScrollEventHandlers();
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        },
        set: function set(value) {
          if (value === this._items) {
            return;
          }

          this._items = value || [];
          this.refresh_internal(true);
        }
      }, {
        key: "horizontal",
        get: function get() {
          return this._horizontal;
        },
        set: function set(value) {
          this._horizontal = value;
          this.updateDirection();
        }
      }, {
        key: "parentScroll",
        get: function get() {
          return this._parentScroll;
        },
        set: function set(value) {
          if (this._parentScroll === value) {
            return;
          }

          this.revertParentOverscroll();
          this._parentScroll = value;
          this.addScrollEventHandlers();
          var scrollElement = this.getScrollElement();

          if (this.modifyOverflowStyleOfParentScroll && scrollElement !== this.element.nativeElement) {
            this.oldParentScrollOverflow = {
              x: scrollElement.style['overflow-x'],
              y: scrollElement.style['overflow-y']
            };
            scrollElement.style['overflow-y'] = this.horizontal ? 'visible' : 'auto';
            scrollElement.style['overflow-x'] = this.horizontal ? 'auto' : 'visible';
          }
        }
      }]);

      return VirtualScrollerComponent;
    }();

    VirtualScrollerComponent.ɵfac = function VirtualScrollerComponent_Factory(t) {
      return new (t || VirtualScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('virtual-scroller-default-options', 8));
    };

    VirtualScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VirtualScrollerComponent,
      selectors: [["virtual-scroller"], ["", "virtualScroller", ""]],
      contentQueries: function VirtualScrollerComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerElementRef = _t.first);
        }
      },
      viewQuery: function VirtualScrollerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.invisiblePaddingElementRef = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function VirtualScrollerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("horizontal", ctx.horizontal)("vertical", !ctx.horizontal)("selfScroll", !ctx.parentScroll);
        }
      },
      inputs: {
        executeRefreshOutsideAngularZone: "executeRefreshOutsideAngularZone",
        useMarginInsteadOfTranslate: "useMarginInsteadOfTranslate",
        ssrViewportWidth: "ssrViewportWidth",
        ssrViewportHeight: "ssrViewportHeight",
        compareItems: "compareItems",
        scrollThrottlingTime: "scrollThrottlingTime",
        scrollDebounceTime: "scrollDebounceTime",
        scrollAnimationTime: "scrollAnimationTime",
        scrollbarWidth: "scrollbarWidth",
        scrollbarHeight: "scrollbarHeight",
        checkResizeInterval: "checkResizeInterval",
        resizeBypassRefreshThreshold: "resizeBypassRefreshThreshold",
        modifyOverflowStyleOfParentScroll: "modifyOverflowStyleOfParentScroll",
        stripedTable: "stripedTable",
        horizontal: "horizontal",
        enableUnequalChildrenSizes: "enableUnequalChildrenSizes",
        bufferAmount: "bufferAmount",
        items: "items",
        parentScroll: "parentScroll",
        childWidth: "childWidth",
        childHeight: "childHeight",
        ssrChildWidth: "ssrChildWidth",
        ssrChildHeight: "ssrChildHeight"
      },
      outputs: {
        vsUpdate: "vsUpdate",
        vsChange: "vsChange",
        vsStart: "vsStart",
        vsEnd: "vsEnd"
      },
      exportAs: ["virtualScroller"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c4,
      decls: 5,
      vars: 0,
      consts: [[1, "total-padding"], ["invisiblePadding", ""], [1, "scrollable-content"], ["content", ""]],
      template: function VirtualScrollerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%] {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\tdisplay: flex;\n\t}\n\t\n\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding[_ngcontent-%COMP%] {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }"]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], VirtualScrollerComponent.prototype, "executeRefreshOutsideAngularZone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], VirtualScrollerComponent.prototype, "enableUnequalChildrenSizes", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], VirtualScrollerComponent.prototype, "useMarginInsteadOfTranslate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], VirtualScrollerComponent.prototype, "modifyOverflowStyleOfParentScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], VirtualScrollerComponent.prototype, "stripedTable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "scrollbarWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "scrollbarHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "childWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "childHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "ssrChildWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "ssrChildHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "ssrViewportWidth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "ssrViewportHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], VirtualScrollerComponent.prototype, "bufferAmount", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "scrollAnimationTime", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], VirtualScrollerComponent.prototype, "resizeBypassRefreshThreshold", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], VirtualScrollerComponent.prototype, "scrollThrottlingTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], VirtualScrollerComponent.prototype, "scrollDebounceTime", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])], VirtualScrollerComponent.prototype, "checkResizeInterval", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array])], VirtualScrollerComponent.prototype, "items", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], VirtualScrollerComponent.prototype, "compareItems", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Boolean])], VirtualScrollerComponent.prototype, "horizontal", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], VirtualScrollerComponent.prototype, "parentScroll", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VirtualScrollerComponent.prototype, "vsUpdate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VirtualScrollerComponent.prototype, "vsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VirtualScrollerComponent.prototype, "vsStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], VirtualScrollerComponent.prototype, "vsEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VirtualScrollerComponent.prototype, "contentElementRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invisiblePadding', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VirtualScrollerComponent.prototype, "invisiblePaddingElementRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('header', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VirtualScrollerComponent.prototype, "headerElementRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('container', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], VirtualScrollerComponent.prototype, "containerElementRef", void 0);
    VirtualScrollerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('virtual-scroller-default-options')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object, Object])], VirtualScrollerComponent);

    var VirtualScrollerModule = function VirtualScrollerModule() {
      _classCallCheck(this, VirtualScrollerModule);
    };

    VirtualScrollerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VirtualScrollerModule
    });
    VirtualScrollerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function VirtualScrollerModule_Factory(t) {
        return new (t || VirtualScrollerModule)();
      },
      providers: [{
        provide: 'virtual-scroller-default-options',
        useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'virtual-scroller,[virtualScroller]',
          exportAs: 'virtualScroller',
          template: "\n    <div class=\"total-padding\" #invisiblePadding></div>\n    <div class=\"scrollable-content\" #content>\n      <ng-content></ng-content>\n    </div>\n  ",
          host: {
            '[class.horizontal]': "horizontal",
            '[class.vertical]': "!horizontal",
            '[class.selfScroll]': "!parentScroll"
          },
          styles: ["\n    :host {\n      position: relative;\n\t  display: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\t\n\t:host.horizontal.selfScroll {\n      overflow-y: visible;\n      overflow-x: auto;\n\t}\n\t:host.vertical.selfScroll {\n      overflow-y: auto;\n      overflow-x: visible;\n\t}\n\t\n    .scrollable-content {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t.scrollable-content ::ng-deep > * {\n\t\tbox-sizing: border-box;\n\t}\n\t\n\t:host.horizontal {\n\t\twhite-space: nowrap;\n\t}\n\t\n\t:host.horizontal .scrollable-content {\n\t\tdisplay: flex;\n\t}\n\t\n\t:host.horizontal .scrollable-content ::ng-deep > * {\n\t\tflex-shrink: 0;\n\t\tflex-grow: 0;\n\t\twhite-space: initial;\n\t}\n\t\n    .total-padding {\n      width: 1px;\n      opacity: 0;\n    }\n    \n    :host.horizontal .total-padding {\n      height: 100%;\n    }\n  "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['virtual-scroller-default-options']
          }]
        }];
      }, {
        executeRefreshOutsideAngularZone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        useMarginInsteadOfTranslate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ssrViewportWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ssrViewportHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        compareItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        vsUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        vsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        vsStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        vsEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        scrollThrottlingTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollDebounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollAnimationTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scrollbarHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checkResizeInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeBypassRefreshThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modifyOverflowStyleOfParentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stripedTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        enableUnequalChildrenSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        bufferAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        parentScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        childWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        childHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ssrChildWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ssrChildHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        contentElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": false
          }]
        }],
        invisiblePaddingElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['invisiblePadding', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": false
          }]
        }],
        headerElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: ['header', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": false
          }]
        }],
        containerElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: ['container', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            "static": false
          }]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VirtualScrollerModule, {
        declarations: function declarations() {
          return [VirtualScrollerComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [VirtualScrollerComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VirtualScrollerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [VirtualScrollerComponent],
          declarations: [VirtualScrollerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          providers: [{
            provide: 'virtual-scroller-default-options',
            useFactory: VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY
          }]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-virtual-scroller.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~views-cdkscroll-cdkscroll-module~views-virtualscroll-virtualscroll-module-es5.js.map