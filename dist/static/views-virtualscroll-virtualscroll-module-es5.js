function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-virtualscroll-virtualscroll-module"], {
  /***/
  "./src/app/views/virtualscroll/virtualscroll-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/virtualscroll/virtualscroll-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: VirtualScrollRoutingModule */

  /***/
  function srcAppViewsVirtualscrollVirtualscrollRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollRoutingModule", function () {
      return VirtualScrollRoutingModule;
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


    var _virtualscroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./virtualscroll.component */
    "./src/app/views/virtualscroll/virtualscroll.component.ts");

    var routes = [{
      path: '',
      component: _virtualscroll_component__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollComponent"]
    }];

    var VirtualScrollRoutingModule = function VirtualScrollRoutingModule() {
      _classCallCheck(this, VirtualScrollRoutingModule);
    };

    VirtualScrollRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VirtualScrollRoutingModule
    });
    VirtualScrollRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VirtualScrollRoutingModule_Factory(t) {
        return new (t || VirtualScrollRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VirtualScrollRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollRoutingModule, [{
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
  "./src/app/views/virtualscroll/virtualscroll.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/views/virtualscroll/virtualscroll.component.ts ***!
    \****************************************************************/

  /*! exports provided: VirtualScrollComponent */

  /***/
  function srcAppViewsVirtualscrollVirtualscrollComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollComponent", function () {
      return VirtualScrollComponent;
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


    var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-virtual-scroller */
    "./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function VirtualScrollComponent_mat_card_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r12.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r12.name);
      }
    }

    var VirtualScrollComponent = /*#__PURE__*/function () {
      function VirtualScrollComponent(utility, dataService) {
        _classCallCheck(this, VirtualScrollComponent);

        this.utility = utility;
        this.dataService = dataService;
      }

      _createClass(VirtualScrollComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.utility.setHeaderTagsByPath();
          this.teams = this.dataService.getTeams();
        }
      }]);

      return VirtualScrollComponent;
    }();

    VirtualScrollComponent.ɵfac = function VirtualScrollComponent_Factory(t) {
      return new (t || VirtualScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    VirtualScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VirtualScrollComponent,
      selectors: [["app-virtualscroll"]],
      decls: 6,
      vars: 2,
      consts: [[1, "container"], [1, "mt-4"], [3, "items"], ["scroll", ""], ["class", "teams-multi-col", 4, "ngFor", "ngForOf"], [1, "teams-multi-col"], ["mat-card-lg-image", "", 1, "item", 3, "src", "alt"]],
      template: function VirtualScrollComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "3rd party virtual scroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "virtual-scroller", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VirtualScrollComponent_mat_card_5_Template, 2, 2, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.teams);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r10.viewPortItems);
        }
      },
      directives: [ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardLgImage"]],
      styles: ["virtual-scroller[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 480px;\n}\n\n.teams-single-col[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 30px;\n}\n\n.teams-multi-col[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: top;\n  height: 200px;\n  border: 0;\n  margin: 20px;\n  width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZS9wcm9qZWN0cy9uZzlkZW1vL3NyYy9hcHAvdmlld3MvdmlydHVhbHNjcm9sbC92aXJ0dWFsc2Nyb2xsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy92aXJ0dWFsc2Nyb2xsL3ZpcnR1YWxzY3JvbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy92aXJ0dWFsc2Nyb2xsL3ZpcnR1YWxzY3JvbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aXJ0dWFsLXNjcm9sbGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuIH1cbiAgXG4udGVhbXMtc2luZ2xlLWNvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udGVhbXMtbXVsdGktY29sIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICB3aWR0aDogMjUlO1xufSIsInZpcnR1YWwtc2Nyb2xsZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0ODBweDtcbn1cblxuLnRlYW1zLXNpbmdsZS1jb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnRlYW1zLW11bHRpLWNvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiAyNSU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-virtualscroll',
          templateUrl: './virtualscroll.component.html',
          styleUrls: ['./virtualscroll.component.scss']
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
  "./src/app/views/virtualscroll/virtualscroll.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/views/virtualscroll/virtualscroll.module.ts ***!
    \*************************************************************/

  /*! exports provided: VirtualScrollModule */

  /***/
  function srcAppViewsVirtualscrollVirtualscrollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VirtualScrollModule", function () {
      return VirtualScrollModule;
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


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-virtual-scroller */
    "./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js");
    /* harmony import */


    var _virtualscroll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./virtualscroll-routing.module */
    "./src/app/views/virtualscroll/virtualscroll-routing.module.ts");
    /* harmony import */


    var _virtualscroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./virtualscroll.component */
    "./src/app/views/virtualscroll/virtualscroll.component.ts");

    var VirtualScrollModule = function VirtualScrollModule() {
      _classCallCheck(this, VirtualScrollModule);
    };

    VirtualScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VirtualScrollModule
    });
    VirtualScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VirtualScrollModule_Factory(t) {
        return new (t || VirtualScrollModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerModule"], _virtualscroll_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VirtualScrollModule, {
        declarations: [_virtualscroll_component__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerModule"], _virtualscroll_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VirtualScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_virtualscroll_component__WEBPACK_IMPORTED_MODULE_6__["VirtualScrollComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollerModule"], _virtualscroll_routing_module__WEBPACK_IMPORTED_MODULE_5__["VirtualScrollRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=views-virtualscroll-virtualscroll-module-es5.js.map