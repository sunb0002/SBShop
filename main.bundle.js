webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<app-header></app-header>\r\n\r\n<!-- Page Content -->\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <router-outlet></router-outlet>\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_module__ = __webpack_require__("../../../../../src/app/services/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_backend_api_sbshop__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_SERVICES__ = __webpack_require__("../../../../../src/app/services/SERVICES.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_SERVICES__["a" /* SERVICES */], __WEBPACK_IMPORTED_MODULE_5_app_shared_backend_api_sbshop__["APIS"],
                { provide: __WEBPACK_IMPORTED_MODULE_5_app_shared_backend_api_sbshop__["BASE_PATH"], useValue: __WEBPACK_IMPORTED_MODULE_6_environments_environment__["a" /* environment */].apiBaseUrl },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <hr>\r\n\r\n    <!-- Footer -->\r\n    <footer>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <p><i>Copyright &copy; sunb0002 Website 2017</i></p>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/\">Start Bootstrap</a>\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                    <a routerLink=\"dashboard\">Dashboard</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"profile\">Profile</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"error\">Error</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container -->\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_layout_mainbody_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/layout/mainbody/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_routes_routes_routing_module__ = __webpack_require__("../../../../../src/app/routes/routes-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mainbody_error_error_component__ = __webpack_require__("../../../../../src/app/layout/mainbody/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mainbody_profile_profile_component__ = __webpack_require__("../../../../../src/app/layout/mainbody/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_app_routes_routes_routing_module__["a" /* RoutesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["SimpleNotificationsModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_5_app_layout_mainbody_carousel_carousel_component__["a" /* CarouselComponent */], __WEBPACK_IMPORTED_MODULE_10__mainbody_profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_9__mainbody_error_error_component__["a" /* ErrorComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6_app_routes_routes_routing_module__["a" /* RoutesRoutingModule */], __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_5_app_layout_mainbody_carousel_carousel_component__["a" /* CarouselComponent */], __WEBPACK_IMPORTED_MODULE_10__mainbody_profile_profile_component__["a" /* ProfileComponent */], __WEBPACK_IMPORTED_MODULE_9__mainbody_error_error_component__["a" /* ErrorComponent */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<div class=\"col-md-9\">\r\n\r\n    <div class=\"row carousel-holder\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators\">\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"item active\">\r\n                        <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\r\n                    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                </a>\r\n                <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\r\n                    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"http://placehold.it/320x150\" alt=\"\">\r\n                <div class=\"caption\">\r\n                    <h4 class=\"pull-right\">$24.99</h4>\r\n                    <h4><a href=\"#\">First Product</a>\r\n                    </h4>\r\n                    <p>See more snippets like this online store item at <a target=\"_blank\" href=\"http://www.bootsnipp.com\">Bootsnipp - http://bootsnipp.com</a>.</p>\r\n                </div>\r\n                <div class=\"ratings\">\r\n                    <p class=\"pull-right\">15 reviews</p>\r\n                    <p>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"http://placehold.it/320x150\" alt=\"\">\r\n                <div class=\"caption\">\r\n                    <h4 class=\"pull-right\">$64.99</h4>\r\n                    <h4><a href=\"#\">Second Product</a>\r\n                    </h4>\r\n                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                </div>\r\n                <div class=\"ratings\">\r\n                    <p class=\"pull-right\">12 reviews</p>\r\n                    <p>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"http://placehold.it/320x150\" alt=\"\">\r\n                <div class=\"caption\">\r\n                    <h4 class=\"pull-right\">$74.99</h4>\r\n                    <h4><a href=\"#\">Third Product</a>\r\n                    </h4>\r\n                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                </div>\r\n                <div class=\"ratings\">\r\n                    <p class=\"pull-right\">31 reviews</p>\r\n                    <p>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"http://placehold.it/320x150\" alt=\"\">\r\n                <div class=\"caption\">\r\n                    <h4 class=\"pull-right\">$84.99</h4>\r\n                    <h4><a href=\"#\">Fourth Product</a>\r\n                    </h4>\r\n                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                </div>\r\n                <div class=\"ratings\">\r\n                    <p class=\"pull-right\">6 reviews</p>\r\n                    <p>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                        <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n            <div class=\"thumbnail\">\r\n                <img src=\"http://placehold.it/320x150\" alt=\"\">\r\n                <div class=\"caption\">\r\n                    <h4 class=\"pull-right\">$94.99</h4>\r\n                    <h4><a href=\"#\">Fifth Product</a>\r\n                    </h4>\r\n                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                </div>\r\n                <div class=\"ratings\">\r\n                    <p class=\"pull-right\">18 reviews</p>\r\n                    <p>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star\"></span>\r\n                        <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-lg-4 col-md-4\">\r\n            <h4><a href=\"#\">Like this template?</a>\r\n            </h4>\r\n            <p>If you like this template, then check out <a target=\"_blank\" href=\"http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/\">this tutorial</a> on how to build a working review system for your online store!</p>\r\n            <a class=\"btn btn-primary\" target=\"_blank\" href=\"http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/\">View Tutorial</a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__("../../../../../src/app/layout/mainbody/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/mainbody/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<img src=\"./assets/images/Konata404.gif\" alt=\"Lucky Star~Konata Izumi\">\n<p>\n    error works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/layout/mainbody/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/mainbody/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Profile Management Page!</h1>\n\n<div class=\"col-md-6\">\n    <div class=\"collapse-box\">\n        <div class=\"collapse-title name\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"displayAllUsers()\">\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Get All Users\n                </button>\n        </div>\n\n        <div class=\"collapse in\">\n            <input type=\"text\" maxlength=\"50\" class=\"form-control\" placeholder=\"Enter user's name\" [formControl]=\"nameSearchCtrl\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"searchByName()\" [disabled]=\"nameSearchCtrl.invalid\">\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Search by Name\n                </button>\n        </div>\n        <div id=\"displaying-users\">\n            <li *ngFor=\"let user of displayUsers\">\n                ID:{{user.userId}}, NAME:{{user.name}}, NRIC:{{user.nric}},\n                <a href=\"javascript:void(0);\" (click)=\"editProfile=user\"><b>Edit</b></a>\n            </li>\n        </div>\n    </div>\n</div>\n<div class=\"col-md-6\">\n    <div class=\"collapse-box\">\n        <div class=\"collapse-title name\">\n            <form [formGroup]=\"FG\">\n                <div>\n                    <b>User ID</b>: {{editProfile.userId}}\n                </div>\n                <div [class.has-error]=\"nameCtrl.dirty && nameCtrl.invalid\">\n                    <b>User Name</b>:\n                    <input [(ngModel)]=\"editProfile.name\" type=\"text\" maxlength=\"50\" class=\"form-control\" placeholder=\"Enter Name\" formControlName=\"nameCtrl\">\n                    <span class=\"help-block\" *ngIf=\"nameCtrl.dirty && nameCtrl.invalid\">Name is mandatory</span>\n                </div>\n                <div [class.has-error]=\"nricCtrl.dirty && nricCtrl.invalid\">\n                    <b>User NRIC</b>:\n                    <input [(ngModel)]=\"editProfile.nric\" type=\"text\" maxlength=\"9\" class=\"form-control\" placeholder=\"Enter NRIC\" formControlName=\"nricCtrl\">\n                    <span class=\"help-block\" *ngIf=\"nricCtrl.dirty && nricCtrl.invalid\">Please enter valid NRIC</span>\n                </div>\n            </form>\n        </div>\n        <button type=\"button\" class=\"btn\" [ngClass]=\"isCreateNewUser()?'btn-success':'btn-info'\" (click)=\"updateEditUser()\" [disabled]=\"FG.invalid || isDataLoading\">\n            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n            {{isCreateNewUser()?'Create New User':'Edit Existing User'}}\n        </button>\n        <button *ngIf=\"!isCreateNewUser()\" type=\"button\" class=\"btn btn-success\" (click)=\"initEditProfile()\">\n                <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Clear\n        </button>\n    </div>\n</div>\n\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>"

/***/ }),

/***/ "../../../../../src/app/layout/mainbody/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_global_constants_Constants__ = __webpack_require__("../../../../../src/app/shared/global-constants/Constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileSvc, notificationSvc) {
        this.profileSvc = profileSvc;
        this.notificationSvc = notificationSvc;
        this.displayUsers = [];
        this.nameSearchCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.nricCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4_app_shared_global_constants_Constants__["a" /* Constants */].NricRegex)]);
        this.FG = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            nameCtrl: this.nameCtrl,
            nricCtrl: this.nricCtrl,
        });
        this.notificationOptions = {
            position: ['middle', 'right'],
            lastOnBottom: false,
            timeOut: 2000
        };
        this.isDataLoading = false;
        this.initEditProfile();
    }
    ProfileComponent.prototype.initEditProfile = function () {
        this.editProfile = {};
        this.FG.markAsPristine();
    };
    ProfileComponent.prototype.isCreateNewUser = function () {
        return this.editProfile.userId == null;
    };
    ProfileComponent.prototype.searchByName = function () {
        var _this = this;
        var nameSearchVal = this.nameSearchCtrl.value;
        this.profileSvc.searchUserByName(nameSearchVal).subscribe(function (data) { return _this.displayUsers = data; }, function (error) { return _this.notifyError(error); });
    };
    ProfileComponent.prototype.displayAllUsers = function () {
        var _this = this;
        this.profileSvc.getAllUsers().subscribe(function (data) { return _this.displayUsers = _this.profileSvc.allUsers; }, function (error) { return _this.notifyError(error); });
    };
    ProfileComponent.prototype.updateEditUser = function () {
        var _this = this;
        this.isDataLoading = true;
        this.profileSvc.updateUser(this.editProfile)
            .finally(function () { return _this.isDataLoading = false; })
            .subscribe(function (data) {
            if (_this.isCreateNewUser()) {
                _this.initEditProfile();
            }
            _this.notificationSvc.success('Profile', 'Profile has been saved successfully.');
        }, function (error) { return _this.notifyError(error); });
    };
    ProfileComponent.prototype.notifyError = function (err) {
        console.error('Error occurred: ', err);
        this.notificationSvc.error('Profile', err.json()['msg'] || __WEBPACK_IMPORTED_MODULE_4_app_shared_global_constants_Constants__["a" /* Constants */].generalErrorMsg);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/layout/mainbody/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/mainbody/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]) === "function" && _b || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\r\n    <p class=\"lead\">Magica Shop</p>\r\n    <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item\">Category 1</a>\r\n        <a href=\"#\" class=\"list-group-item\">Category 2</a>\r\n        <a href=\"#\" class=\"list-group-item\">Category 3</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_layout_mainbody_carousel_carousel_component__ = __webpack_require__("../../../../../src/app/layout/mainbody/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_layout_mainbody_error_error_component__ = __webpack_require__("../../../../../src/app/layout/mainbody/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_layout_mainbody_profile_profile_component__ = __webpack_require__("../../../../../src/app/layout/mainbody/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2_app_layout_mainbody_carousel_carousel_component__["a" /* CarouselComponent */] },
    { path: 'profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4_app_layout_mainbody_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'error', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3_app_layout_mainbody_error_error_component__["a" /* ErrorComponent */] },
    { path: '**', redirectTo: 'error' },
];
var RoutesRoutingModule = /** @class */ (function () {
    function RoutesRoutingModule() {
    }
    RoutesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], RoutesRoutingModule);
    return RoutesRoutingModule;
}());

//# sourceMappingURL=routes-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/SERVICES.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_store_config_service__ = __webpack_require__("../../../../../src/app/services/store-config.service.ts");


var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0_app_services_profile_service__["a" /* ProfileService */],
    __WEBPACK_IMPORTED_MODULE_1_app_services_store_config_service__["a" /* StoreConfigService */]
];
//# sourceMappingURL=SERVICES.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: []
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_backend_api_sbshop__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(profileApi) {
        this.profileApi = profileApi;
        this.allUsers = [];
    }
    /**
     * @param name
     */
    ProfileService.prototype.searchUserByName = function (name) {
        return this.profileApi.searchUsersByNameUsingGET(name)
            .do(function (resp) { return console.log('Searching with name', name); })
            .map(function (resp) { return resp.data; })
            .do(function (result) { return console.log('Search result: ', result); })
            .catch(function (ex) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(ex); });
    };
    ProfileService.prototype.getAllUsers = function () {
        var _this = this;
        return this.profileApi.searchUsersByNameUsingGET(name)
            .do(function (resp) { return _this.allUsers = resp.data; })
            .catch(function (ex) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(ex); });
    };
    ProfileService.prototype.updateUser = function (dto) {
        var _this = this;
        return this.profileApi.saveUserProfileUsingPOST(dto)
            .do(function (resp) { return console.log('This profile has been updated: ', resp.data); })
            .flatMap(function () { return _this.getAllUsers(); });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_backend_api_sbshop__["ProfileApi"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_backend_api_sbshop__["ProfileApi"]) === "function" && _a || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/store-config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreConfigService = /** @class */ (function () {
    function StoreConfigService() {
    }
    StoreConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StoreConfigService);
    return StoreConfigService;
}());

//# sourceMappingURL=store-config.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/api/InternalApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/configuration.ts");
/**
 * SBShop Spring Demo (SpringBoot-DEV1)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0-Madoka-SpringBoot
 * Contact: incubator@dev1.madoka.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var InternalApi = /** @class */ (function () {
    function InternalApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost:8080/springdemo';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     * allHail
     * Get successful message
     */
    InternalApi.prototype.allHailUsingGET = function (extraHttpRequestParams) {
        return this.allHailUsingGETWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * test403
     * Get unsuccessful message
     */
    InternalApi.prototype.test403UsingGET = function (extraHttpRequestParams) {
        return this.test403UsingGETWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * testAnything
     * Test anything
     */
    InternalApi.prototype.testAnythingUsingGET = function (extraHttpRequestParams) {
        return this.testAnythingUsingGETWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * testMQ
     * Test Message Queue
     */
    InternalApi.prototype.testMQUsingGET = function (extraHttpRequestParams) {
        return this.testMQUsingGETWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * testMail
     * Test sending email
     */
    InternalApi.prototype.testMailUsingGET = function (extraHttpRequestParams) {
        return this.testMailUsingGETWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * allHail
     * Get successful message
     */
    InternalApi.prototype.allHailUsingGETWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/home/json200';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * test403
     * Get unsuccessful message
     */
    InternalApi.prototype.test403UsingGETWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/home/json403';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * testAnything
     * Test anything
     */
    InternalApi.prototype.testAnythingUsingGETWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/home/json200MK2';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * testMQ
     * Test Message Queue
     */
    InternalApi.prototype.testMQUsingGETWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/home/json200MQ';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * testMail
     * Test sending email
     */
    InternalApi.prototype.testMailUsingGETWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/home/json200Mail';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    InternalApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
    ], InternalApi);
    return InternalApi;
    var _a, _b;
}());

//# sourceMappingURL=InternalApi.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/api/ProfileApi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__variables__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/configuration.ts");
/**
 * SBShop Spring Demo (SpringBoot-DEV1)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0-Madoka-SpringBoot
 * Contact: incubator@dev1.madoka.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* tslint:disable:no-unused-variable member-ordering */
var ProfileApi = /** @class */ (function () {
    function ProfileApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://localhost:8080/springdemo';
        this.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.configuration = new __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    /**
     * getAllUsers
     * Get all users
     */
    ProfileApi.prototype.getAllUsersUsingGET = function (extraHttpRequestParams) {
        return this.getAllUsersUsingGETWithHttpInfo(extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * getUserById
     * Get User by Id
     * @param id id
     */
    ProfileApi.prototype.getUserByIdUsingGET = function (id, extraHttpRequestParams) {
        return this.getUserByIdUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * saveUserProfile
     * Create or update user profile
     * @param userDto Request body to save user profile.
     */
    ProfileApi.prototype.saveUserProfileUsingPOST = function (userDto, extraHttpRequestParams) {
        return this.saveUserProfileUsingPOSTWithHttpInfo(userDto, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * searchUsersByName
     * Search Users with name
     * @param name name
     */
    ProfileApi.prototype.searchUsersByNameUsingGET = function (name, extraHttpRequestParams) {
        return this.searchUsersByNameUsingGETWithHttpInfo(name, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    /**
     * getAllUsers
     * Get all users
     */
    ProfileApi.prototype.getAllUsersUsingGETWithHttpInfo = function (extraHttpRequestParams) {
        var path = this.basePath + '/profile/allusers';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * getUserById
     * Get User by Id
     * @param id id
     */
    ProfileApi.prototype.getUserByIdUsingGETWithHttpInfo = function (id, extraHttpRequestParams) {
        var path = this.basePath + '/profile/user/${id}'
            .replace('${' + 'id' + '}', String(id));
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUserByIdUsingGET.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * saveUserProfile
     * Create or update user profile
     * @param userDto Request body to save user profile.
     */
    ProfileApi.prototype.saveUserProfileUsingPOSTWithHttpInfo = function (userDto, extraHttpRequestParams) {
        var path = this.basePath + '/profile/user';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userDto' is not null or undefined
        if (userDto === null || userDto === undefined) {
            throw new Error('Required parameter userDto was null or undefined when calling saveUserProfileUsingPOST.');
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: headers,
            body: userDto == null ? '' : JSON.stringify(userDto),
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    /**
     * searchUsersByName
     * Search Users with name
     * @param name name
     */
    ProfileApi.prototype.searchUsersByNameUsingGETWithHttpInfo = function (name, extraHttpRequestParams) {
        var path = this.basePath + '/profile/user';
        var queryParameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling searchUsersByNameUsingGET.');
        }
        if (name !== undefined) {
            queryParameters.set('name', name);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        // to determine the Accept header
        var produces = [
            '*/*'
        ];
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: headers,
            search: queryParameters,
            withCredentials: true
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    ProfileApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__variables__["a" /* BASE_PATH */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, String, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration__["a" /* Configuration */]) === "function" && _b || Object])
    ], ProfileApi);
    return ProfileApi;
    var _a, _b;
}());

//# sourceMappingURL=ProfileApi.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/api/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InternalApi__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/api/InternalApi.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProfileApi__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/api/ProfileApi.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ProfileApi__["a"]; });




var APIS = [__WEBPACK_IMPORTED_MODULE_0__InternalApi__["a" /* InternalApi */], __WEBPACK_IMPORTED_MODULE_1__ProfileApi__["a" /* ProfileApi */]];
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/configuration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    return Configuration;
}());

//# sourceMappingURL=configuration.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/api/api.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ProfileApi", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_models__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/model/models.ts");
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__model_models__, "BASE_PATH")) __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_1__model_models__["BASE_PATH"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/variables.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_2__variables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/configuration.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/model/HomeResponse.ts":
/***/ (function(module, exports) {

/**
 * SBShop Spring Demo (SpringBoot-DEV1)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0-Madoka-SpringBoot
 * Contact: incubator@dev1.madoka.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=HomeResponse.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/model/ProfileResponseUser.ts":
/***/ (function(module, exports) {

/**
 * SBShop Spring Demo (SpringBoot-DEV1)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0-Madoka-SpringBoot
 * Contact: incubator@dev1.madoka.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=ProfileResponseUser.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/model/ProfileResponseUserList.ts":
/***/ (function(module, exports) {

/**
 * SBShop Spring Demo (SpringBoot-DEV1)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0-Madoka-SpringBoot
 * Contact: incubator@dev1.madoka.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=ProfileResponseUserList.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/model/UserDTO.ts":
/***/ (function(module, exports) {

/**
 * SBShop Spring Demo (SpringBoot-DEV1)
 * Kyouko is my waifu
 *
 * OpenAPI spec version: 1.0.0-Madoka-SpringBoot
 * Contact: incubator@dev1.madoka.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=UserDTO.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/model/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomeResponse__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/model/HomeResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomeResponse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HomeResponse__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__HomeResponse__, "BASE_PATH")) __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_0__HomeResponse__["BASE_PATH"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProfileResponseUser__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/model/ProfileResponseUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProfileResponseUser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ProfileResponseUser__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__ProfileResponseUser__, "BASE_PATH")) __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_1__ProfileResponseUser__["BASE_PATH"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProfileResponseUserList__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/model/ProfileResponseUserList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProfileResponseUserList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ProfileResponseUserList__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__ProfileResponseUserList__, "BASE_PATH")) __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_2__ProfileResponseUserList__["BASE_PATH"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserDTO__ = __webpack_require__("../../../../../src/app/shared/backend-api/sbshop/model/UserDTO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserDTO___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UserDTO__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__UserDTO__, "BASE_PATH")) __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return __WEBPACK_IMPORTED_MODULE_3__UserDTO__["BASE_PATH"]; });




//# sourceMappingURL=models.js.map

/***/ }),

/***/ "../../../../../src/app/shared/backend-api/sbshop/variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* unused harmony export COLLECTION_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var BASE_PATH = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global-constants/Constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.generalErrorMsg = 'Unexpected error, please try again later.';
    Constants.NricRegex = /^[stfgSTFG]\d{7}[a-zA-Z]$/;
    return Constants;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var API_BASEURL = 'http://localhost:8080/springdemo';
var environment = {
    production: false,
    apiBaseUrl: API_BASEURL,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map