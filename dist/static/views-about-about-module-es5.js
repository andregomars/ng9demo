function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-about-about-module"], {
  /***/
  "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js ***!
    \**************************************************************************************/

  /*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */

  /***/
  function node_modulesNgxInfiniteScroll__ivy_ngcc__ModulesNgxInfiniteScrollJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function () {
      return InfiniteScrollDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function () {
      return InfiniteScrollModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} selector
     * @param {?} scrollWindow
     * @param {?} defaultElement
     * @param {?} fromRoot
     * @return {?}
     */


    function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
      /** @type {?} */
      var hasWindow = window && !!window.document && window.document.documentElement;
      /** @type {?} */

      var container = hasWindow && scrollWindow ? window : defaultElement;

      if (selector) {
        /** @type {?} */
        var containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;

        if (!container) {
          throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
      }

      return container;
    }
    /**
     * @param {?} selector
     * @param {?} customRoot
     * @param {?} fromRoot
     * @return {?}
     */


    function findElement(selector, customRoot, fromRoot) {
      /** @type {?} */
      var rootEl = fromRoot ? window.document : customRoot;
      return rootEl.querySelector(selector);
    }
    /**
     * @param {?} prop
     * @return {?}
     */


    function inputPropChanged(prop) {
      return prop && !prop.firstChange;
    }
    /**
     * @return {?}
     */


    function hasWindowDefined() {
      return typeof window !== 'undefined';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var VerticalProps = {
      clientHeight: "clientHeight",
      offsetHeight: "offsetHeight",
      scrollHeight: "scrollHeight",
      pageYOffset: "pageYOffset",
      offsetTop: "offsetTop",
      scrollTop: "scrollTop",
      top: "top"
    };
    /** @type {?} */

    var HorizontalProps = {
      clientHeight: "clientWidth",
      offsetHeight: "offsetWidth",
      scrollHeight: "scrollWidth",
      pageYOffset: "pageXOffset",
      offsetTop: "offsetLeft",
      scrollTop: "scrollLeft",
      top: "left"
    };

    var AxisResolver = /*#__PURE__*/function () {
      /**
       * @param {?=} vertical
       */
      function AxisResolver() {
        var vertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _classCallCheck(this, AxisResolver);

        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
      }
      /**
       * @return {?}
       */


      _createClass(AxisResolver, [{
        key: "clientHeightKey",
        value: function clientHeightKey() {
          return this.propsMap.clientHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "offsetHeightKey",
        value: function offsetHeightKey() {
          return this.propsMap.offsetHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollHeightKey",
        value: function scrollHeightKey() {
          return this.propsMap.scrollHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pageYOffsetKey",
        value: function pageYOffsetKey() {
          return this.propsMap.pageYOffset;
        }
        /**
         * @return {?}
         */

      }, {
        key: "offsetTopKey",
        value: function offsetTopKey() {
          return this.propsMap.offsetTop;
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollTopKey",
        value: function scrollTopKey() {
          return this.propsMap.scrollTop;
        }
        /**
         * @return {?}
         */

      }, {
        key: "topKey",
        value: function topKey() {
          return this.propsMap.top;
        }
      }]);

      return AxisResolver;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    /**
     * @record
     */

    /**
     * @record
     */

    /**
     * @record
     */

    /**
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */


    function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
      if (alwaysCallback && shouldFireScrollEvent) {
        return true;
      }

      if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
      }

      return false;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} __0
     * @return {?}
     */


    function createResolver(_ref) {
      var windowElement = _ref.windowElement,
          axis = _ref.axis;
      return createResolverWithContainer({
        axis: axis,
        isWindow: isElementWindow(windowElement)
      }, windowElement);
    }
    /**
     * @param {?} resolver
     * @param {?} windowElement
     * @return {?}
     */


    function createResolverWithContainer(resolver, windowElement) {
      /** @type {?} */
      var container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
      return Object.assign({}, resolver, {
        container: container
      });
    }
    /**
     * @param {?} windowElement
     * @return {?}
     */


    function isElementWindow(windowElement) {
      /** @type {?} */
      var isWindow = ['Window', 'global'].some(function (obj) {
        return Object.prototype.toString.call(windowElement).includes(obj);
      });
      return isWindow;
    }
    /**
     * @param {?} isContainerWindow
     * @param {?} windowElement
     * @return {?}
     */


    function getDocumentElement(isContainerWindow, windowElement) {
      return isContainerWindow ? windowElement.document.documentElement : null;
    }
    /**
     * @param {?} element
     * @param {?} resolver
     * @return {?}
     */


    function calculatePoints(element, resolver) {
      /** @type {?} */
      var height = extractHeightForElement(resolver);
      return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
    }
    /**
     * @param {?} height
     * @param {?} element
     * @param {?} resolver
     * @return {?}
     */


    function calculatePointsForWindow(height, element, resolver) {
      var axis = resolver.axis,
          container = resolver.container,
          isWindow = resolver.isWindow;

      var _extractHeightPropKey = extractHeightPropKeys(axis),
          offsetHeightKey = _extractHeightPropKey.offsetHeightKey,
          clientHeightKey = _extractHeightPropKey.clientHeightKey; // scrolled until now / current y point

      /** @type {?} */


      var scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow); // total height / most bottom y point

      /** @type {?} */

      var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
      /** @type {?} */

      var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
      return {
        height: height,
        scrolled: scrolled,
        totalToScroll: totalToScroll,
        isWindow: isWindow
      };
    }
    /**
     * @param {?} height
     * @param {?} element
     * @param {?} resolver
     * @return {?}
     */


    function calculatePointsForElement(height, element, resolver) {
      var axis = resolver.axis,
          container = resolver.container; // perhaps use container.offsetTop instead of 'scrollTop'

      /** @type {?} */

      var scrolled = container[axis.scrollTopKey()];
      /** @type {?} */

      var totalToScroll = container[axis.scrollHeightKey()];
      return {
        height: height,
        scrolled: scrolled,
        totalToScroll: totalToScroll,
        isWindow: false
      };
    }
    /**
     * @param {?} axis
     * @return {?}
     */


    function extractHeightPropKeys(axis) {
      return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
      };
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function extractHeightForElement(_ref2) {
      var container = _ref2.container,
          isWindow = _ref2.isWindow,
          axis = _ref2.axis;

      var _extractHeightPropKey2 = extractHeightPropKeys(axis),
          offsetHeightKey = _extractHeightPropKey2.offsetHeightKey,
          clientHeightKey = _extractHeightPropKey2.clientHeightKey;

      return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
    }
    /**
     * @param {?} elem
     * @param {?} isWindow
     * @param {?} offsetHeightKey
     * @param {?} clientHeightKey
     * @return {?}
     */


    function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
      if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        var docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
      } else {
        return elem[offsetHeightKey];
      }
    }
    /**
     * @param {?} elem
     * @param {?} axis
     * @param {?} isWindow
     * @return {?}
     */


    function getElementOffsetTop(elem, axis, isWindow) {
      /** @type {?} */
      var topKey = axis.topKey(); // elem = elem.nativeElement;

      if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
      }

      return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
    }
    /**
     * @param {?} elem
     * @param {?} axis
     * @param {?} isWindow
     * @return {?}
     */


    function getElementPageYOffset(elem, axis, isWindow) {
      /** @type {?} */
      var pageYOffset = axis.pageYOffsetKey();
      /** @type {?} */

      var scrollTop = axis.scrollTopKey();
      /** @type {?} */

      var offsetTop = axis.offsetTopKey();

      if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
      } else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
      } else {
        return elem[offsetTop];
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */


    function shouldFireScrollEvent(container, distance, scrollingDown) {
      /** @type {?} */
      var remaining;
      /** @type {?} */

      var containerBreakpoint;

      if (container.totalToScroll <= 0) {
        return false;
      }
      /** @type {?} */


      var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;

      if (scrollingDown) {
        remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
      } else {
        /** @type {?} */
        var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
      }
      /** @type {?} */


      var shouldFireEvent = remaining <= containerBreakpoint;
      return shouldFireEvent;
    }
    /**
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */


    function isScrollingDownwards(lastScrollPosition, container) {
      return lastScrollPosition < container.scrolled;
    }
    /**
     * @param {?} lastScrollPosition
     * @param {?} container
     * @param {?} distance
     * @return {?}
     */


    function getScrollStats(lastScrollPosition, container, distance) {
      /** @type {?} */
      var scrollDown = isScrollingDownwards(lastScrollPosition, container);
      return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
      };
    }
    /**
     * @param {?} position
     * @param {?} scrollState
     * @return {?}
     */

    /**
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @return {?}
     */

    /**
     * @param {?} scrollState
     * @return {?}
     */

    /**
     * @param {?} scroll
     * @param {?} scrollState
     * @param {?} triggered
     * @param {?} isScrollingDown
     * @return {?}
     */

    /**
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */

    /**
     * @param {?} scrollState
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ScrollState = /*#__PURE__*/function () {
      /**
       * @param {?} __0
       */
      function ScrollState(_ref3) {
        var totalToScroll = _ref3.totalToScroll;

        _classCallCheck(this, ScrollState);

        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
          down: 0,
          up: 0
        };
        this.totalToScroll = totalToScroll;
      }
      /**
       * @param {?} position
       * @return {?}
       */


      _createClass(ScrollState, [{
        key: "updateScrollPosition",
        value: function updateScrollPosition(position) {
          return this.lastScrollPosition = position;
        }
        /**
         * @param {?} totalToScroll
         * @return {?}
         */

      }, {
        key: "updateTotalToScroll",
        value: function updateTotalToScroll(totalToScroll) {
          if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
          }
        }
        /**
         * @param {?} scrolledUntilNow
         * @param {?} totalToScroll
         * @return {?}
         */

      }, {
        key: "updateScroll",
        value: function updateScroll(scrolledUntilNow, totalToScroll) {
          this.updateScrollPosition(scrolledUntilNow);
          this.updateTotalToScroll(totalToScroll);
        }
        /**
         * @param {?} scroll
         * @param {?} isScrollingDown
         * @return {?}
         */

      }, {
        key: "updateTriggeredFlag",
        value: function updateTriggeredFlag(scroll, isScrollingDown) {
          if (isScrollingDown) {
            this.triggered.down = scroll;
          } else {
            this.triggered.up = scroll;
          }
        }
        /**
         * @param {?} totalToScroll
         * @param {?} isScrollingDown
         * @return {?}
         */

      }, {
        key: "isTriggeredScroll",
        value: function isTriggeredScroll(totalToScroll, isScrollingDown) {
          return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
        }
      }]);

      return ScrollState;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function createScroller(config) {
      var scrollContainer = config.scrollContainer,
          scrollWindow = config.scrollWindow,
          element = config.element,
          fromRoot = config.fromRoot;
      /** @type {?} */

      var resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
      });
      /** @type {?} */

      var scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver)
      });
      /** @type {?} */

      var options = {
        container: resolver.container,
        throttle: config.throttle
      };
      /** @type {?} */

      var distance = {
        up: config.upDistance,
        down: config.downDistance
      };
      return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) {
        return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref4) {
        var stats = _ref4.stats;
        return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref5) {
        var fire = _ref5.fire,
            scrollDown = _ref5.scrollDown,
            totalToScroll = _ref5.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref6) {
        var scrollDown = _ref6.scrollDown,
            totalToScroll = _ref6.stats.totalToScroll;
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
    }
    /**
     * @param {?} options
     * @return {?}
     */


    function attachScrollEvent(options) {
      /** @type {?} */
      var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll'); // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
      // Let's avoid calling the function unless needed.
      // See https://github.com/orizens/ngx-infinite-scroll/issues/198

      if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
      }

      return obs;
    }
    /**
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */


    function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
      var _getScrollStats = getScrollStats(lastScrollPosition, stats, distance),
          scrollDown = _getScrollStats.scrollDown,
          fire = _getScrollStats.fire;

      return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
      };
    }
    /** @type {?} */


    var InfiniteScrollActions = {
      DOWN: '[NGX_ISE] DOWN',
      UP: '[NGX_ISE] UP'
    };
    /**
     * @param {?} response
     * @return {?}
     */

    function toInfiniteScrollAction(response) {
      var scrollDown = response.scrollDown,
          currentScrollPosition = response.stats.scrolled;
      return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
          currentScrollPosition: currentScrollPosition
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var InfiniteScrollDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} zone
       */
      function InfiniteScrollDirective(element, zone) {
        _classCallCheck(this, InfiniteScrollDirective);

        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
      }
      /**
       * @return {?}
       */


      _createClass(InfiniteScrollDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this.infiniteScrollDisabled) {
            this.setup();
          }
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(_ref7) {
          var infiniteScrollContainer = _ref7.infiniteScrollContainer,
              infiniteScrollDisabled = _ref7.infiniteScrollDisabled,
              infiniteScrollDistance = _ref7.infiniteScrollDistance;

          /** @type {?} */
          var containerChanged = inputPropChanged(infiniteScrollContainer);
          /** @type {?} */

          var disabledChanged = inputPropChanged(infiniteScrollDisabled);
          /** @type {?} */

          var distanceChanged = inputPropChanged(infiniteScrollDistance);
          /** @type {?} */

          var shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;

          if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();

            if (shouldSetup) {
              this.setup();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setup",
        value: function setup() {
          var _this = this;

          if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
              _this.disposeScroller = createScroller({
                fromRoot: _this.fromRoot,
                alwaysCallback: _this.alwaysCallback,
                disable: _this.infiniteScrollDisabled,
                downDistance: _this.infiniteScrollDistance,
                element: _this.element,
                horizontal: _this.horizontal,
                scrollContainer: _this.infiniteScrollContainer,
                scrollWindow: _this.scrollWindow,
                throttle: _this.infiniteScrollThrottle,
                upDistance: _this.infiniteScrollUpDistance
              }).subscribe(function (payload) {
                return _this.zone.run(function () {
                  return _this.handleOnScroll(payload);
                });
              });
            });
          }
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "handleOnScroll",
        value: function handleOnScroll(_ref8) {
          var type = _ref8.type,
              payload = _ref8.payload;

          switch (type) {
            case InfiniteScrollActions.DOWN:
              return this.scrolled.emit(payload);

            case InfiniteScrollActions.UP:
              return this.scrolledUp.emit(payload);

            default:
              return;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyScroller();
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroyScroller",
        value: function destroyScroller() {
          if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
          }
        }
      }]);

      return InfiniteScrollDirective;
    }();

    InfiniteScrollDirective.ɵfac = function InfiniteScrollDirective_Factory(t) {
      return new (t || InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    InfiniteScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InfiniteScrollDirective,
      selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
      inputs: {
        infiniteScrollDistance: "infiniteScrollDistance",
        infiniteScrollUpDistance: "infiniteScrollUpDistance",
        infiniteScrollThrottle: "infiniteScrollThrottle",
        infiniteScrollDisabled: "infiniteScrollDisabled",
        infiniteScrollContainer: "infiniteScrollContainer",
        scrollWindow: "scrollWindow",
        immediateCheck: "immediateCheck",
        horizontal: "horizontal",
        alwaysCallback: "alwaysCallback",
        fromRoot: "fromRoot"
      },
      outputs: {
        scrolled: "scrolled",
        scrolledUp: "scrolledUp"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    InfiniteScrollDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    InfiniteScrollDirective.propDecorators = {
      scrolled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrolledUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      infiniteScrollDistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollUpDistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollThrottle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrollWindow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      immediateCheck: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      horizontal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      alwaysCallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fromRoot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        scrolled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrolledUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        infiniteScrollDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollUpDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollThrottle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        immediateCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alwaysCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fromRoot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var InfiniteScrollModule = function InfiniteScrollModule() {
      _classCallCheck(this, InfiniteScrollModule);
    };

    InfiniteScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InfiniteScrollModule
    });
    InfiniteScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InfiniteScrollModule_Factory(t) {
        return new (t || InfiniteScrollModule)();
      },
      providers: [],
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfiniteScrollModule, {
        declarations: [InfiniteScrollDirective],
        exports: [InfiniteScrollDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [InfiniteScrollDirective],
          exports: [InfiniteScrollDirective],
          imports: [],
          providers: []
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Angular library starter.
     * Build an Angular library compatible with AoT compilation & Tree shaking.
     * Written by Roberto Simonetti.
     * MIT license.
     * https://github.com/robisim74/angular-library-starter
     */

    /**
     * Entry point for all public APIs of the package.
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-infinite-scroll.js.map

    /***/

  },

  /***/
  "./src/app/views/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutRoutingModule */

  /***/
  function srcAppViewsAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function () {
      return AboutRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/views/about/about.component.ts");

    var routes = [{
      path: '',
      component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }];

    var AboutRoutingModule = function AboutRoutingModule() {
      _classCallCheck(this, AboutRoutingModule);
    };

    AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutRoutingModule
    });
    AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutRoutingModule_Factory(t) {
        return new (t || AboutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/views/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppViewsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/utility.service */
    "./src/app/services/utility.service.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function AboutComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-footer", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.name);
      }
    }

    function AboutComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r8.verbose$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx_r8.verbose$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx_r8.verbose$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, ctx_r8.verbose$));
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(utility, dataService) {
        _classCallCheck(this, AboutComponent);

        this.utility = utility;
        this.dataService = dataService;
        this.items = [];
        this.batchStart = 0;
        this.isTeamsScrollFinished = false;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.utility.setHeaderTagsByPath();
          this.teams = this.dataService.getTeams();
          this.verbose$ = this.dataService.getIpsum();
          this.batchSize = this.dataService.isMobile() ? 2 : 4;
          this.onScroll();
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          console.warn('scroll');
          var batch = this.teams.slice(this.batchStart, this.batchStart + this.batchSize);
          this.batchStart += this.batchSize;
          this.items = this.items.concat(batch);

          if (this.batchStart > this.teams.length) {
            this.isTeamsScrollFinished = true;
          }
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 8,
      vars: 4,
      consts: [[1, "container"], [1, "row", "text-center"], [1, "text-center", "mt-2"], ["src", "http://static.nfl.com/static/content/public/static/html/labs/cfb247/jordan-love/static/img/Love-1800x760.jpg", "alt", "banner", "height", "500"], [1, "row", "text-center", "w-100"], ["class", "text-center m-4", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrolled"], [1, "text-center", "m-4"], ["mat-card-lg-image", "", 1, "item", "m-4", 3, "src", "alt"], [1, "px-2"], [1, "row"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AboutComponent_mat_card_5_Template, 5, 3, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutComponent_div_6_Template, 13, 12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function AboutComponent_Template_div_scrolled_7_listener() {
            return ctx.onScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTeamsScrollFinished);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 300);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".main-panel[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-y: scroll;\n}\n\n.list-panel[_ngcontent-%COMP%] {\n  height: 20rem;\n  overflow-y: scroll;\n}\n\n.teams-multi-col-div[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: top;\n  height: 200px;\n  border: 0;\n  margin: 20px;\n}\n\n.item[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n\n@media (min-width: 576px) {\n  .item[_ngcontent-%COMP%] {\n    width: 27vw;\n  }\n}\n\n@media (min-width: 768px) {\n  .item[_ngcontent-%COMP%] {\n    width: 30vw;\n  }\n}\n\n@media (min-width: 992px) {\n  .item[_ngcontent-%COMP%] {\n    width: 30vw;\n  }\n}\n\n@media (min-width: 1200px) {\n  .item[_ngcontent-%COMP%] {\n    width: 30vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZS9wcm9qZWN0cy9uZzlkZW1vL3NyYy9hcHAvdmlld3MvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQUVBLGtCQUFBO0FDQUg7O0FER0E7RUFDRyxhQUFBO0VBQ0Esa0JBQUE7QUNBSDs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRFFDO0VBQ0E7SUFDRyxXQUFBO0VDTEY7QUFDRjs7QURTQztFQUNBO0lBQ0csV0FBQTtFQ1BGO0FBQ0Y7O0FEV0M7RUFDQTtJQUNHLFdBQUE7RUNURjtBQUNGOztBRGFDO0VBQ0E7SUFDRyxXQUFBO0VDWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tcGFuZWwge1xuICAgaGVpZ2h0OiA1MDBweDtcbiAgIC8vIGhlaWdodDogMjByZW07XG4gICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5saXN0LXBhbmVsIHtcbiAgIGhlaWdodDogMjByZW07XG4gICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cblxuLnRlYW1zLW11bHRpLWNvbC1kaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC8vIHdpZHRoOiAyNSU7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiAyMDBweCAyMDBweDtcbn1cblxuLy8gRXh0cmEtU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXG4uaXRlbSB7XG4gICAgd2lkdGg6IDMwdnc7XG4gfVxuIFxuIC8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcbiBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHsgXG4gLml0ZW0ge1xuICAgIHdpZHRoOiAyN3Z3O1xuIH1cbiB9XG4gXG4gLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcbiBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAuaXRlbSB7XG4gICAgd2lkdGg6IDMwdnc7XG4gfVxuIH1cbiBcbiAvLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxuIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuIC5pdGVtIHtcbiAgICB3aWR0aDogMzB2dztcbiB9XG4gfVxuIFxuIC8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxuIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAuaXRlbSB7XG4gICAgd2lkdGg6IDMwdnc7XG4gfVxuIH0iLCIubWFpbi1wYW5lbCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmxpc3QtcGFuZWwge1xuICBoZWlnaHQ6IDIwcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50ZWFtcy1tdWx0aS1jb2wtZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLml0ZW0ge1xuICB3aWR0aDogMzB2dztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pdGVtIHtcbiAgICB3aWR0aDogMjd2dztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pdGVtIHtcbiAgICB3aWR0aDogMzB2dztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pdGVtIHtcbiAgICB3aWR0aDogMzB2dztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaXRlbSB7XG4gICAgd2lkdGg6IDMwdnc7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/views/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppViewsAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/views/about/about-routing.module.ts");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/views/about/about.component.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutModule
    });
    AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutModule_Factory(t) {
        return new (t || AboutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=views-about-about-module-es5.js.map