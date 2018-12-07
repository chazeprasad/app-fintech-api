(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seller_signup_seller_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-signup/seller-signup.component */ "./src/app/seller-signup/seller-signup.component.ts");
/* harmony import */ var _seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-login/seller-login.component */ "./src/app/seller-login/seller-login.component.ts");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _util_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/auth.gaurd */ "./src/app/util/auth.gaurd.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _asset_create_asset_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./asset-create/asset-create.component */ "./src/app/asset-create/asset-create.component.ts");
/* harmony import */ var _asset_show_asset_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./asset-show/asset-show.component */ "./src/app/asset-show/asset-show.component.ts");
/* harmony import */ var _asset_update_asset_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./asset-update/asset-update.component */ "./src/app/asset-update/asset-update.component.ts");
/* harmony import */ var _asset_view_asset_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./asset-view/asset-view.component */ "./src/app/asset-view/asset-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'signup', component: _seller_signup_seller_signup_component__WEBPACK_IMPORTED_MODULE_2__["SellerSignupComponent"] },
    { path: 'login', component: _seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_3__["SellerLoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_util_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'asset', component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__["AssetComponent"], canActivate: [_util_auth_gaurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'asset', component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__["AssetComponent"],
        children: [
            { path: 'create', component: _asset_create_asset_create_component__WEBPACK_IMPORTED_MODULE_9__["AssetCreateComponent"] },
            { path: 'show/:id', component: _asset_show_asset_show_component__WEBPACK_IMPORTED_MODULE_10__["AssetShowComponent"] },
            { path: 'update/:id', component: _asset_update_asset_update_component__WEBPACK_IMPORTED_MODULE_11__["AssetUpdateComponent"] }
        ]
    },
    { path: 'image-upload', component: _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_4__["ImageUploadComponent"] },
    { path: 'asset-view/:id', component: _asset_view_asset_view_component__WEBPACK_IMPORTED_MODULE_12__["AssetViewComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', component: ErrorComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-service.ts":
/*!********************************!*\
  !*** ./src/app/app-service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = /** @class */ (function () {
    function AppService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl; // URL to web api
    }
    AppService.prototype.signup = function (data) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var url = this.apiBaseUrl + '/auth/signup';
        return this.http.post(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            _this.log('Signup sucessfull..');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('signup')));
    };
    AppService.prototype.login = function (data) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var url = this.apiBaseUrl + '/auth/login';
        return this.http.post(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            console.log(res.token);
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            _this.log('Login sucessfull..');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')));
    };
    AppService.prototype.getAssetViewDetails = function (data) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var url = this.apiBaseUrl + '/api/asset/' + data.id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.log('Asset details..');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')));
    };
    AppService.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };
    /** Log a AppService message with the MessageService */
    AppService.prototype.log = function (message) {
        this.messageService.add("AppService: " + message);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AppService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (res) {
            var error = res.error;
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<!-- <app-messages></app-messages> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'yesbyowner-web-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload/upload.module */ "./src/app/upload/upload.module.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _seller_signup_seller_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./seller-signup/seller-signup.component */ "./src/app/seller-signup/seller-signup.component.ts");
/* harmony import */ var _paper_google_place_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./paper-google-place.directive */ "./src/app/paper-google-place.directive.ts");
/* harmony import */ var _seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./seller-login/seller-login.component */ "./src/app/seller-login/seller-login.component.ts");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "./src/app/image-upload/image-upload.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _util_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./util/jwt.interceptor */ "./src/app/util/jwt.interceptor.ts");
/* harmony import */ var _util_error_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./util/error.interceptor */ "./src/app/util/error.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _asset_create_asset_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./asset-create/asset-create.component */ "./src/app/asset-create/asset-create.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _asset_update_asset_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./asset-update/asset-update.component */ "./src/app/asset-update/asset-update.component.ts");
/* harmony import */ var _asset_show_asset_show_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./asset-show/asset-show.component */ "./src/app/asset-show/asset-show.component.ts");
/* harmony import */ var _asset_view_asset_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./asset-view/asset-view.component */ "./src/app/asset-view/asset-view.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _carousel_carousel_item_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./carousel/carousel-item.directive */ "./src/app/carousel/carousel-item.directive.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sidenav.service */ "./src/app/sidenav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// --- Material CMP --- //





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                _seller_signup_seller_signup_component__WEBPACK_IMPORTED_MODULE_22__["SellerSignupComponent"],
                _paper_google_place_directive__WEBPACK_IMPORTED_MODULE_23__["PaperGooglePlaceDirective"],
                _seller_login_seller_login_component__WEBPACK_IMPORTED_MODULE_24__["SellerLoginComponent"],
                _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_25__["ImageUploadComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_26__["MessagesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _asset_create_asset_create_component__WEBPACK_IMPORTED_MODULE_31__["AssetCreateComponent"],
                _asset_asset_component__WEBPACK_IMPORTED_MODULE_32__["AssetComponent"],
                _asset_update_asset_update_component__WEBPACK_IMPORTED_MODULE_33__["AssetUpdateComponent"],
                _asset_show_asset_show_component__WEBPACK_IMPORTED_MODULE_34__["AssetShowComponent"],
                _asset_view_asset_view_component__WEBPACK_IMPORTED_MODULE_35__["AssetViewComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__["CarouselComponent"],
                _carousel_carousel_item_directive__WEBPACK_IMPORTED_MODULE_37__["CarouselItemDirective"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_36__["CarouselItemElement"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_40__["SidenavComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"],
                _upload_upload_module__WEBPACK_IMPORTED_MODULE_17__["UploadModule"],
                ngx_image_gallery__WEBPACK_IMPORTED_MODULE_18__["NgxImageGalleryModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _util_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _util_error_interceptor__WEBPACK_IMPORTED_MODULE_28__["ErrorInterceptor"], multi: true },
                _sidenav_service__WEBPACK_IMPORTED_MODULE_41__["SidenavService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset-create/asset-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/asset-create/asset-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-image-gallery #ngxImageGallery \n          [images]=\"images\" \n          [conf]=\"conf\"\n          (onOpen)=\"galleryOpened($event)\"\n          (onClose)=\"galleryClosed()\"\n          (onImageClicked)=\"galleryImageClicked($event)\"\n          (onImageChange)=\"galleryImageChanged($event)\"\n          (onDelete)=\"deleteImage($event)\"\n          ></ngx-image-gallery>\n<div class=\"cmp-wrapper\">\n\n  <div class=\"section-header\">\n    <div class=\"header-text\">Add Asset</div>\n    <hr>\n  </div>\n  \n  <div class=\"asset-create-form-container\" style=\"height:400px;\">\n      <mat-card class=\"group\">\n        <div class=\"image-gallery\">\n          <div class=\"image-wrapper\" (click)=\"openGallery(i)\" *ngFor=\"let img of images; index as i\" >\n            <img src=\"{{img.url}}\" >\n          </div>\n        </div>\n          <app-upload (onUploadComplete)=\"updateImageList($event)\"></app-upload>\n          <!-- <ngx-image-gallery #ngxImageGallery style=\"height:400px;\"\n          [images]=\"images\" \n          [conf]=\"conf\"\n          (onOpen)=\"galleryOpened($event)\"\n          (onClose)=\"galleryClosed()\"\n          (onImageClicked)=\"galleryImageClicked($event)\"\n          (onImageChange)=\"galleryImageChanged($event)\"\n          (onDelete)=\"deleteImage($event)\"\n          ></ngx-image-gallery> -->\n      </mat-card>\n    <form class=\"paper-form\" [formGroup]=\"paperForm\" (ngSubmit)=\"onSubmit()\" >\n        \n      <mat-card class=\"group\">\n\n\n      <mat-form-field class=\"paper-full-width\">\n        <textarea matInput formControlName=\"description\" rows=\"5\" placeholder=\"Overview\" \n        [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error *ngIf=\"paperForm.hasError('required', 'description')\">\n          required\n        </mat-error>\n      </mat-form-field>\n    </mat-card>\n\n      <mat-card class=\"group\">\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"houseNo\" placeholder=\"House No\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'houseNo')\">\n              required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width input-container\">\n              <input matInput  app-paper-google-place\n              class=\"google-place-input\"\n              formControlName=\"address\" placeholder=\"Street Address\" \n              [errorStateMatcher]=\"matcher\" >\n              <!-- Displaying the contents of the address object received from our event emitter -->\n              <mat-hint>eg: 102 B, 21 Street, Sylvaniya Toledo, OH</mat-hint>\n  \n              <mat-error *ngIf=\"paperForm.hasError('required', 'address')\">\n                required\n              </mat-error>\n            </mat-form-field>\n            <ul style=\"list-style-type: none; height: auto;\">\n                <li *ngFor=\"let key of addrKeys\">\n                  <span style=\"font-weight: bold\">{{key}}</span>: <span>{{addr[key]}}</span>\n                </li>\n              </ul>\n  \n\n\n          <div class=\"fx-row\">\n            <mat-form-field class=\"paper-full-width\">\n              \n              <mat-select formControlName=\"numBedrooms\" placeholder=\"Bedrooms\" [errorStateMatcher]=\"matcher\">\n                <mat-option *ngFor=\"let bed of bedCounts\" [value]=\"bed.value\">\n                  {{bed.viewValue}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"paperForm.hasError('required', 'numBedrooms')\">\n                required\n              </mat-error>\n            </mat-form-field>\n\n            <div class=\"spacer\"></div>\n            \n            <mat-form-field class=\"paper-full-width\">\n              <mat-select formControlName=\"numBathrooms\" placeholder=\"Bathrooms\" [errorStateMatcher]=\"matcher\">\n                  <mat-option *ngFor=\"let bath of bathCounts\" [value]=\"bath.value\">\n                    {{bath.viewValue}}\n                  </mat-option>\n                </mat-select>\n              <mat-error *ngIf=\"paperForm.hasError('required', 'numBathrooms')\">\n                required\n              </mat-error>\n            </mat-form-field>\n          </div>\n          \n\n        </mat-card>\n        <mat-card class=\"group\">\n            <mat-form-field class=\"paper-full-width\">\n                <mat-select formControlName=\"yearBuilt\" placeholder=\"Year Built\" [errorStateMatcher]=\"matcher\">\n                    <mat-option *ngFor=\"let item of years\" [value]=\"item.value\">\n                      {{item.viewValue}}\n                    </mat-option>\n                  </mat-select>\n                <mat-error *ngIf=\"paperForm.hasError('required', 'yearBuilt')\">\n                  required\n                </mat-error>\n              </mat-form-field>\n    \n              <mat-form-field class=\"paper-full-width\">\n                <input matInput \n                formControlName=\"squareFootage\" placeholder=\"Square Footage\" \n                [errorStateMatcher]=\"matcher\" >\n                <mat-error *ngIf=\"paperForm.hasError('required', 'squareFootage')\">\n                  required\n                </mat-error>\n              </mat-form-field>\n    \n              <mat-form-field class=\"paper-full-width\">\n                <input matInput \n                formControlName=\"lotSize\" placeholder=\"Lot Size (Acre)\" \n                [errorStateMatcher]=\"matcher\" >\n                <mat-error *ngIf=\"paperForm.hasError('required', 'lotSize')\">\n                  required\n                </mat-error>\n              </mat-form-field>\n        </mat-card>\n\n        <mat-card class=\"group\">\n\n          \n\n\n          <mat-form-field class=\"paper-full-width\">\n            <textarea matInput formControlName=\"exteriorDetails\" placeholder=\"Exterior Details\" \n            [errorStateMatcher]=\"matcher\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <textarea matInput formControlName=\"foundationDetails\" placeholder=\"Foundation Details\" \n            [errorStateMatcher]=\"matcher\"></textarea>\n          </mat-form-field>\n          \n          <mat-form-field class=\"paper-full-width\">\n            <textarea matInput formControlName=\"roofDetails\" placeholder=\"Roof Details\" \n            [errorStateMatcher]=\"matcher\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <textarea matInput formControlName=\"lotDetails\" placeholder=\"Lot Details\" \n            [errorStateMatcher]=\"matcher\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <textarea matInput formControlName=\"garageDetails\" placeholder=\"Garage Details\" \n            [errorStateMatcher]=\"matcher\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <textarea matInput formControlName=\"parkingDetails\" placeholder=\"Parking Details\" \n            [errorStateMatcher]=\"matcher\"></textarea>\n          </mat-form-field>\n\n        </mat-card>\n\n          <button type=\"submit\" [disabled]=\"!paperForm.valid\" mat-flat-button color=\"accent\">Submit</button>\n\n\n\n    </form>\n\n  </div>\n\n    </div>\n    \n    \n    "

/***/ }),

/***/ "./src/app/asset-create/asset-create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/asset-create/asset-create.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asset-create-form-container {\n  width: 100%;\n  min-width: 150px;\n  max-width: 500px;\n  padding: 0px !important; }\n  .asset-create-form-container .paper-form {\n    width: 100%; }\n  .asset-create-form-container .paper-full-width {\n    width: 100%; }\n  .asset-create-form-container .group {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding: 30px !important;\n    background: #fff;\n    margin-bottom: 30px; }\n  .asset-create-form-container .group .fx-row {\n      display: flex;\n      flex-direction: row;\n      width: 100%; }\n  @media (max-width: 400px) {\n        .asset-create-form-container .group .fx-row {\n          flex-direction: column;\n          width: 100%; } }\n  .asset-create-form-container .group .fx-row .spacer {\n        display: flex;\n        width: 30px;\n        min-width: 30px;\n        height: 1px; }\n  .asset-create-form-container .image-gallery {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n    min-height: 100px;\n    padding: 00px; }\n  .asset-create-form-container .image-gallery .image-wrapper {\n      width: 64px;\n      height: 64px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      background: #ddddde;\n      border: 1px solid #999999;\n      margin: 2px;\n      padding: 2px;\n      border-radius: 4px; }\n  .asset-create-form-container .image-gallery .image-wrapper img {\n        width: 100%;\n        height: auto;\n        max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvYXNzZXQtY3JlYXRlL2Fzc2V0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBR2hCLHdCQUF1QixFQXVFeEI7RUEvRUg7SUFZUSxZQUFXLEVBQ1o7RUFiUDtJQWdCSSxZQUFXLEVBQ1Y7RUFqQkw7SUFvQlEsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixZQUFXO0lBQ1gseUJBQXdCO0lBQ3hCLGlCQUFnQjtJQUNoQixvQkFBbUIsRUFvQnRCO0VBN0NMO01BNEJZLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsWUFBVyxFQWNkO0VBWkc7UUFoQ1o7VUFpQ2dCLHVCQUFzQjtVQUN0QixZQUFXLEVBVWxCLEVBQUE7RUE1Q1Q7UUFzQ2dCLGNBQWE7UUFDYixZQUFVO1FBQ1YsZ0JBQWM7UUFDZCxZQUFXLEVBQ2Q7RUExQ2I7SUFnRFEsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixnQkFBZTtJQUNmLFlBQVU7SUFDVixrQkFBZ0I7SUFDaEIsY0FBYSxFQXVCaEI7RUE1RUw7TUF1RFksWUFBVTtNQUNWLGFBQVk7TUFDWixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLHdCQUF1QjtNQUN2QixvQkFBbUI7TUFDbkIsb0JBQW9CO01BQ3BCLDBCQUF5QjtNQUN6QixZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQixFQVNyQjtFQTFFVDtRQXFFZ0IsWUFBVztRQUNYLGFBQVk7UUFDWixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hc3NldC1jcmVhdGUvYXNzZXQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dGluZ3MnIDtcblxuLmFzc2V0LWNyZWF0ZS1mb3JtLWNvbnRhaW5lciB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcblxuICAgIC5wYXBlci1mb3JtIHtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgXG4gICAgLnBhcGVyLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgLmZ4LXJvd3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6JG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgLnNwYWNlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjMwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOjMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbWFnZS1nYWxsZXJ5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OjEwMHB4O1xuICAgICAgICBwYWRkaW5nOiAwMHB4O1xuICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDo2NHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAgI2RkZGRkZTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gIH1cblxuICAiXX0= */"

/***/ }),

/***/ "./src/app/asset-create/asset-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/asset-create/asset-create.component.ts ***!
  \********************************************************/
/*! exports provided: AssetCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetCreateComponent", function() { return AssetCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/paper-form-error-state-matcher */ "./src/app/util/paper-form-error-state-matcher.ts");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssetCreateComponent = /** @class */ (function () {
    function AssetCreateComponent(zone, appService, route, router) {
        this.zone = zone;
        this.appService = appService;
        this.route = route;
        this.router = router;
        // gallery configuration
        this.conf = {
            imageOffset: '0px',
            showDeleteControl: false,
            showImageTitle: false,
            inline: false,
        };
        // gallery images
        this.images = [
            {
                url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260",
                altText: 'woman-in-black-blazer-holding-blue-cup',
                title: 'woman-in-black-blazer-holding-blue-cup',
                thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
            },
            {
                url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260",
                altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
                extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
                thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
            },
        ];
        this.bedCounts = [
            { value: 1, viewValue: '1' },
            { value: 2, viewValue: '2' },
            { value: 3, viewValue: '3' },
            { value: 4, viewValue: '4' },
            { value: 5, viewValue: '5' }
        ];
        this.bathCounts = [
            { value: 1, viewValue: '1' },
            { value: 2, viewValue: '2' },
            { value: 3, viewValue: '3' },
            { value: 4, viewValue: '4' },
            { value: 5, viewValue: '5' }
        ];
        this.years = [];
        for (var i = 1940; i < 2019; i++) {
            this.years.push({ value: i, viewValue: i.toString() });
        }
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        this.matcher = new _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_4__["PaperFormErrorStateMatcher"]();
        this.paperForm = this.formBuilder.group({
            houseNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            numBedrooms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            numBathrooms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            yearBuilt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            squareFootage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            lotSize: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            exteriorDetails: ['', []],
            foundationDetails: ['', []],
            roofDetails: ['', []],
            lotDetails: ['', []],
            garageDetails: ['', []],
            parkingDetails: ['', []]
        });
    }
    // METHODS
    // open gallery
    AssetCreateComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.open(index);
    };
    // close gallery
    AssetCreateComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    AssetCreateComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    AssetCreateComponent.prototype.nextImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.next(index);
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    AssetCreateComponent.prototype.prevImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.prev(index);
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    AssetCreateComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    AssetCreateComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
    };
    // callback on gallery image clicked
    AssetCreateComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
    };
    // callback on gallery image changed
    AssetCreateComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    AssetCreateComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    // =================================================== //
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    AssetCreateComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            console.log(_this.addr);
            console.log(_this.addrKeys);
        });
    };
    AssetCreateComponent.prototype.ngOnInit = function () {
    };
    AssetCreateComponent.prototype.updateImageList = function (data) {
        console.log("data");
        console.log(data);
        this.images = this.images.concat(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxImageGalleryComponent"]),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxImageGalleryComponent"])
    ], AssetCreateComponent.prototype, "ngxImageGallery", void 0);
    AssetCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-create',
            template: __webpack_require__(/*! ./asset-create.component.html */ "./src/app/asset-create/asset-create.component.html"),
            styles: [__webpack_require__(/*! ./asset-create.component.scss */ "./src/app/asset-create/asset-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AssetCreateComponent);
    return AssetCreateComponent;
}());



/***/ }),

/***/ "./src/app/asset-show/asset-show.component.html":
/*!******************************************************!*\
  !*** ./src/app/asset-show/asset-show.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  asset-show works!\n</p>\n"

/***/ }),

/***/ "./src/app/asset-show/asset-show.component.scss":
/*!******************************************************!*\
  !*** ./src/app/asset-show/asset-show.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXNob3cvYXNzZXQtc2hvdy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/asset-show/asset-show.component.ts":
/*!****************************************************!*\
  !*** ./src/app/asset-show/asset-show.component.ts ***!
  \****************************************************/
/*! exports provided: AssetShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetShowComponent", function() { return AssetShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetShowComponent = /** @class */ (function () {
    function AssetShowComponent() {
    }
    AssetShowComponent.prototype.ngOnInit = function () {
    };
    AssetShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-show',
            template: __webpack_require__(/*! ./asset-show.component.html */ "./src/app/asset-show/asset-show.component.html"),
            styles: [__webpack_require__(/*! ./asset-show.component.scss */ "./src/app/asset-show/asset-show.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetShowComponent);
    return AssetShowComponent;
}());



/***/ }),

/***/ "./src/app/asset-update/asset-update.component.html":
/*!**********************************************************!*\
  !*** ./src/app/asset-update/asset-update.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  asset-update works!\n</p>\n"

/***/ }),

/***/ "./src/app/asset-update/asset-update.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/asset-update/asset-update.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LXVwZGF0ZS9hc3NldC11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/asset-update/asset-update.component.ts":
/*!********************************************************!*\
  !*** ./src/app/asset-update/asset-update.component.ts ***!
  \********************************************************/
/*! exports provided: AssetUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetUpdateComponent", function() { return AssetUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetUpdateComponent = /** @class */ (function () {
    function AssetUpdateComponent() {
    }
    AssetUpdateComponent.prototype.ngOnInit = function () {
    };
    AssetUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-update',
            template: __webpack_require__(/*! ./asset-update.component.html */ "./src/app/asset-update/asset-update.component.html"),
            styles: [__webpack_require__(/*! ./asset-update.component.scss */ "./src/app/asset-update/asset-update.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetUpdateComponent);
    return AssetUpdateComponent;
}());



/***/ }),

/***/ "./src/app/asset-view/asset-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/asset-view/asset-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-image-gallery #ngxImageGallery  *ngIf=\"asset\"\n          [images]=\"asset.photos\" \n          [conf]=\"conf\"\n          (onOpen)=\"galleryOpened($event)\"\n          (onClose)=\"galleryClosed()\"\n          (onImageClicked)=\"galleryImageClicked($event)\"\n          (onImageChange)=\"galleryImageChanged($event)\"\n          (onDelete)=\"deleteImage($event)\"\n          ></ngx-image-gallery>\n<div class=\"asset-view-container\" >\n\n<div class=\"asset-view-wrapper\">\n  <div class=\"asset-view-header-nav\">\n    <div class=\"logo-wrapper\">\n      <img src=\"./assets/image/logo.png\" >\n    </div>\n  </div>\n\n  <div class=\"asset-details-wrapper\" *ngIf=\"asset\">\n    <div class=\"asset-details-sammary-wrapper\">\n      <h4 class=\"title\">{{asset.address}}</h4>\n      <h4 class=\"sub-title\">{{asset.city}}, {{asset.state}} {{asset.zip}}</h4>\n      <h4 class=\"sub-title\">{{asset.numBedrooms}} Beds  <span style=\"display:inline-block; width:5px; height:2px;\"></span>   {{asset.numBedrooms}} Baths </h4>\n    \n      <div class=\"price-title\">For Sale</div>\n      <div class=\"price-value\">$ 40,000</div>\n    </div>\n\n    <div class=\"asset-details-image-wrapper\">\n      <div class=\"image-wrapper\" (click)=\"openGallery(0)\" >\n        <img src=\"{{asset.photos[0].url}}\">\n      </div>\n    </div>\n\n    <div class=\"home-details-wrapper\">\n      <h3 class=\"main-title\">Home Details</h3>\n      <div class=\"home-details-heading\">\n        <span class=\"background-basic\">Overview</span>\n        <!-- <span class=\"head-line\"></span> -->\n      </div>\n      <p class=\"home-details-text\">{{asset.description}}</p>\n\n      <div class=\"home-details-heading\">\n        <span class=\"background-basic\">Features</span>\n        <!-- <span class=\"head-line\"></span> -->\n      </div>\n      <p class=\"home-details-text\">Bedrooms: {{asset.numBedrooms}} </p>\n      <p class=\"home-details-text\">Bathrooms: {{asset.numBathrooms}} </p>\n      <p class=\"home-details-text\">Year Built: {{asset.yearBuilt}} </p>\n      <p class=\"home-details-text\">Square Footage: {{asset.squareFootage}} </p>\n      <p class=\"home-details-text\">Lot size: {{asset.lotSize}}</p>\n\n      <div class=\"home-details-heading\">\n        <h3 class=\"background-basic\">Exterior Details</h3>\n      </div>\n      <p class=\"home-details-text\">{{asset.exteriorDetails}} </p>\n      <div class=\"home-details-heading\">\n        <h3 class=\"background-basic\">Foundation Details</h3>\n      </div>\n      <p class=\"home-details-text\">{{asset.foundationDetails}} </p>\n      <div class=\"home-details-heading\">\n        <h3 class=\"background-basic\">Roof Details</h3>\n      </div>\n      <p class=\"home-details-text\">{{asset.roofDetails}} </p>\n      <div class=\"home-details-heading\">\n        <h3 class=\"background-basic\">Lot Details</h3>\n      </div>\n      <p class=\"home-details-text\">{{asset.lotDetails}} </p>\n      <div class=\"home-details-heading\">\n        <h3 class=\"background-basic\">Garage Details</h3>\n      </div>\n      <p class=\"home-details-text\">{{asset.garageDetails}} </p>\n\n    </div>\n      \n    \n\n  </div>\n<div class=\"asset-view-contact-wrapper\" >\n    <mat-card class=\"paper-form-container\">\n  <form class=\"paper-form\" [formGroup]=\"paperForm\" (ngSubmit)=\"onSubmit()\" >\n    <mat-form-field class=\"paper-full-width\">\n      <input matInput \n      formControlName=\"name\" placeholder=\"Name\" \n      [errorStateMatcher]=\"matcher\" >\n      <mat-error *ngIf=\"paperForm.hasError('required', 'name')\">\n        required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"paper-full-width\">\n      <input matInput \n      formControlName=\"email\" placeholder=\"Email\" \n      [errorStateMatcher]=\"matcher\" >\n      <mat-error *ngIf=\"paperForm.hasError('required', 'email')\">\n        required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"paper-full-width\">\n      <input matInput \n      formControlName=\"phone\" placeholder=\"Phone\" \n      [errorStateMatcher]=\"matcher\" >\n      <mat-error *ngIf=\"paperForm.hasError('required', 'phone')\">\n        required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"paper-full-width\">\n      <textarea matInput formControlName=\"query\" rows=\"2\" placeholder=\"\" \n      [errorStateMatcher]=\"matcher\"></textarea>\n      <mat-error *ngIf=\"paperForm.hasError('required', 'query')\">\n        required\n      </mat-error>\n    </mat-form-field>\n    <button type=\"submit\" [disabled]=\"!paperForm.valid\" mat-flat-button color=\"accent\">Request Info</button>\n    <div class=\"declaimer-text\">\n        By pressing request info, you agree that YesByOwner and seller may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. You also agree to our <a href=\"\">Terms of Use</a>.\n    </div>\n\n  </form>\n  </mat-card>\n</div>\n\n\n<div class=\"asset-view-footer\" >\n  <div class=\"link\">\n    <a class=\"\" href=\"#\" > Privacy Policy</a> |  <a class=\"\" href=\"#\" > Term of Service</a>\n  </div>\n  <div class=\"copyright\">Copyright © 2018 YesByOwner, LLC. All Rights Reserved.</div>\n</div>\n\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/asset-view/asset-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/asset-view/asset-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".asset-view-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  background: #E9EEEA;\n  background: #ffffff;\n  background: #DAE1DD;\n  padding: 30px; }\n  @media (max-width: 400px) {\n    .asset-view-container {\n      background: #ffffff;\n      padding: 0px; } }\n  .asset-view-container .asset-view-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1000px;\n    background: #ffffff;\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    border-radius: 2px;\n    overflow: hidden; }\n  @media (max-width: 400px) {\n      .asset-view-container .asset-view-wrapper {\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        box-shadow: none;\n        border-radius: 0px; } }\n  .asset-view-container .asset-view-wrapper .asset-view-header-nav {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      min-height: 120px;\n      background: #E9EEEA;\n      align-items: center; }\n  .asset-view-container .asset-view-wrapper .asset-view-header-nav .logo-wrapper {\n        width: 200px;\n        height: 100%;\n        margin-left: 10%; }\n  .asset-view-container .asset-view-wrapper .asset-view-header-nav .logo-wrapper img {\n          width: 100%;\n          height: auto; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper {\n      width: 100%;\n      color: #3b4144; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-sammary-wrapper {\n        margin-top: 30px;\n        margin-left: 10px; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-sammary-wrapper .title {\n          font-size: 16px;\n          font-weight: 500;\n          margin: 6px; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-sammary-wrapper .sub-title {\n          font-size: 12px;\n          font-weight: 400;\n          margin: 6px; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-sammary-wrapper .price-title {\n          font-size: 13px;\n          font-weight: 500;\n          margin: 6px;\n          margin-top: 15px;\n          margin-bottom: 4px;\n          text-transform: uppercase; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-sammary-wrapper .price-value {\n          font-size: 13px;\n          font-weight: 500;\n          margin: 6px;\n          margin-top: 2px;\n          text-transform: uppercase; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-image-wrapper {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        margin-top: 15px;\n        margin-bottom: 10px; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-image-wrapper .image-wrapper {\n          display: flex;\n          flex-direction: row;\n          width: 100%;\n          justify-content: center;\n          align-items: center; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .asset-details-image-wrapper .image-wrapper img {\n            width: 100%;\n            height: auto; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .home-details-wrapper {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        padding: 10px; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .home-details-wrapper .main-title {\n          font-size: 22px;\n          font-weight: 400;\n          margin: 6px; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .home-details-heading {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        height: 1.05em;\n        border-bottom-width: 1px !important;\n        border-bottom-style: solid;\n        border-bottom-color: #cdd0d2;\n        margin: 6px;\n        margin-top: 20px !important;\n        margin-bottom: 20px !important;\n        align-items: center; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .home-details-heading .background-basic {\n          display: flex;\n          flex-wrap: nowrap;\n          background-color: #fff;\n          font-size: 15px;\n          line-height: 1.4;\n          margin: 5px 0;\n          margin-top: 18px;\n          font-weight: 500;\n          padding-right: 10px !important; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .home-details-heading .head-line {\n          width: 100%;\n          min-height: 1px;\n          background-color: #cdd0d2; }\n  .asset-view-container .asset-view-wrapper .asset-details-wrapper .home-details-text {\n        margin: 3px 6px;\n        font-size: 13px;\n        font-weight: 400;\n        line-height: 1.8; }\n  .asset-view-container .asset-view-wrapper .asset-view-contact-wrapper {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      width: 100%;\n      padding: 10px;\n      padding-top: 30px;\n      margin-top: 30px;\n      background: #E9EEEA;\n      background: #4AA391; }\n  .asset-view-container .asset-view-wrapper .asset-view-contact-wrapper .paper-form {\n        width: 100%; }\n  .asset-view-container .asset-view-wrapper .asset-view-contact-wrapper .paper-full-width {\n        width: 100%; }\n  .asset-view-container .asset-view-wrapper .asset-view-contact-wrapper .declaimer-text {\n        margin-top: 15px;\n        font-size: 11px;\n        font-weight: 400;\n        color: #869099; }\n  .asset-view-container .asset-view-wrapper .asset-view-contact-wrapper .declaimer-text a {\n          text-decoration: underline;\n          color: #4AA391; }\n  .asset-view-container .asset-view-wrapper .asset-view-footer {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 120px;\n      background: #3b4144;\n      justify-content: center;\n      align-items: center;\n      color: #869099;\n      padding: 10px; }\n  .asset-view-container .asset-view-wrapper .asset-view-footer .link a {\n        text-decoration: none;\n        font-size: 13px;\n        font-weight: 400;\n        color: #869099; }\n  .asset-view-container .asset-view-wrapper .asset-view-footer .copyright {\n        display: flex;\n        flex-direction: row;\n        width: 90%;\n        background: #3b4144;\n        justify-content: center;\n        text-decoration: none;\n        font-size: 11px;\n        font-weight: 400;\n        color: #4AA391;\n        padding: 5px;\n        margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvYXNzZXQtdmlldy9hc3NldC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFFdkIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFFbkIsY0FBYSxFQWdQaEI7RUE1T0c7SUFiSjtNQWNRLG9CQUFtQjtNQUNuQixhQUFZLEVBME9uQixFQUFBO0VBelBEO0lBcUJJLGNBQVk7SUFDWix1QkFBc0I7SUFDdEIsb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUNqQixvQkFBbUI7SUFDbkIsMEhBQXlIO0lBQ3pILG1CQUFrQjtJQUNsQixpQkFBZ0IsRUEyTm5CO0VBek5HO01BOUJKO1FBK0JRLFlBQVc7UUFDWCxXQUFVO1FBQ1YsVUFBUTtRQUNSLGlCQUFnQjtRQUNoQixtQkFBa0IsRUFvTnpCLEVBQUE7RUF2UEQ7TUF3Q1EsY0FBYTtNQUNiLG9CQUFtQjtNQUNuQixZQUFXO01BQ1gsa0JBQWlCO01BRWpCLG9CQUFtQjtNQUNuQixvQkFBbUIsRUFZdEI7RUExREw7UUFpRFksYUFBWTtRQUNaLGFBQVk7UUFDWixpQkFBZ0IsRUFLbkI7RUF4RFQ7VUFxRGdCLFlBQVc7VUFDWCxhQUFZLEVBQ2Y7RUF2RGI7TUFnRVEsWUFBVztNQUNYLGVBbkVZLEVBNktmO0VBM0tMO1FBb0VZLGlCQUFlO1FBQ2Ysa0JBQWlCLEVBNEJwQjtFQWpHVDtVQXVFZ0IsZ0JBQWU7VUFDZixpQkFBZ0I7VUFDaEIsWUFBVyxFQUNkO0VBMUViO1VBNEVnQixnQkFBZTtVQUNmLGlCQUFnQjtVQUNoQixZQUFXLEVBQ2Q7RUEvRWI7VUFpRmdCLGdCQUFlO1VBQ2YsaUJBQWdCO1VBQ2hCLFlBQVc7VUFDWCxpQkFBZTtVQUNmLG1CQUFpQjtVQUNqQiwwQkFBeUIsRUFFNUI7RUF4RmI7VUEwRmdCLGdCQUFlO1VBQ2YsaUJBQWdCO1VBQ2hCLFlBQVc7VUFDWCxnQkFBYztVQUNkLDBCQUF5QixFQUU1QjtFQWhHYjtRQW9HWSxjQUFhO1FBQ2Isb0JBQW1CO1FBQ25CLFlBQVU7UUFDVixpQkFBZTtRQUNmLG9CQUFrQixFQWFyQjtFQXJIVDtVQTBHZ0IsY0FBYTtVQUNiLG9CQUFtQjtVQUNuQixZQUFVO1VBQ1Ysd0JBQXVCO1VBQ3ZCLG9CQUFtQixFQU10QjtFQXBIYjtZQWlIb0IsWUFBVTtZQUNWLGFBQVksRUFDZjtFQW5IakI7UUF3SFksY0FBYTtRQUNiLHVCQUFzQjtRQUN0Qix3QkFBdUI7UUFDdkIsY0FBYSxFQU1oQjtFQWpJVDtVQTZIZ0IsZ0JBQWU7VUFDZixpQkFBZ0I7VUFDaEIsWUFBVyxFQUNkO0VBaEliO1FBbUlZLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsNEJBQTJCO1FBQzNCLGVBQWM7UUFDZCxvQ0FBa0M7UUFDbEMsMkJBQTBCO1FBQzFCLDZCQUE0QjtRQUM1QixZQUFXO1FBQ1gsNEJBQTBCO1FBQzFCLCtCQUE2QjtRQUM3QixvQkFBbUIsRUFvQnRCO0VBaktUO1VBK0lnQixjQUFhO1VBQ2Isa0JBQWlCO1VBQ2pCLHVCQUFzQjtVQUN0QixnQkFBZTtVQUNmLGlCQUFnQjtVQUNoQixjQUFhO1VBQ2IsaUJBQWdCO1VBQ2hCLGlCQUFnQjtVQUVoQiwrQkFBNkIsRUFDaEM7RUF6SmI7VUE0SmdCLFlBQVc7VUFDWCxnQkFBZTtVQUNmLDBCQUF5QixFQUU1QjtFQWhLYjtRQW9LWSxnQkFBYztRQUNkLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLGlCQUFnQixFQUVuQjtFQXpLVDtNQThLUSxjQUFhO01BQ2Isb0JBQW1CO01BQ25CLHdCQUF1QjtNQUN2QixZQUFVO01BQ1YsY0FBYTtNQUNiLGtCQUFnQjtNQUNoQixpQkFBZTtNQUVmLG9CQUFtQjtNQUVuQixvQkFBbUIsRUEwQnRCO0VBbE5MO1FBMkxZLFlBQVcsRUFDZDtFQTVMVDtRQStMWSxZQUFXLEVBQ2Q7RUFoTVQ7UUFtTVksaUJBQWU7UUFDZixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixlQUFjLEVBVWpCO0VBaE5UO1VBd01nQiwyQkFBMEI7VUFHMUIsZUFBYyxFQUlqQjtFQS9NYjtNQXFOUSxjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLFlBQVU7TUFDVixjQUFhO01BQ2Isb0JBMU5jO01BMk5kLHdCQUF1QjtNQUN2QixvQkFBbUI7TUFDbkIsZUFBYztNQUNkLGNBQVksRUF5QmY7RUF0UEw7UUFpT2dCLHNCQUFxQjtRQUNyQixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixlQUFjLEVBQ2pCO0VBck9iO1FBd09ZLGNBQWE7UUFDYixvQkFBbUI7UUFDbkIsV0FBUztRQUVULG9CQTdPVTtRQThPVix3QkFBdUI7UUFFdkIsc0JBQXFCO1FBQ3JCLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLGVBQWM7UUFDZCxhQUFZO1FBQ1osWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXNzZXQtdmlldy9hc3NldC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dGluZ3MnO1xuXG4kdGV4dC1jb2xvcjogIzNiNDE0NDtcbiRmb290ZXItY29sb3I6ICMzYjQxNDQ7XG4uYXNzZXQtdmlldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjRTlFRUVBO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogI0RBRTFERDtcblxuICAgIHBhZGRpbmc6IDMwcHg7XG5cbiAgICBcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRtb2JpbGUgKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgICAgIFxuICAgIFxuXG4uYXNzZXQtdmlldy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRtb2JpbGUgKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG4gICAgfVxuXG4gICAgLmFzc2V0LXZpZXctaGVhZGVyLW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2RkZGRkZDtcbiAgICAgICAgYmFja2dyb3VuZDogI0U5RUVFQTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAubG9nby13cmFwcGVye1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgIFxuICAgICAgICBcblxuICAgIC5hc3NldC1kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgICAgIFxuICAgICAgICAuYXNzZXQtZGV0YWlscy1zYW1tYXJ5LXdyYXBwZXJ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWItdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2UtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZS12YWx1ZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYXNzZXQtZGV0YWlscy1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICAgICAgICAgIC5pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhvbWUtZGV0YWlscy13cmFwcGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAubWFpbi10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaG9tZS1kZXRhaWxzLWhlYWRpbmd7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGhlaWdodDogMS4wNWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NkZDBkMjtcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuYmFja2dyb3VuZC1iYXNpY3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkLWxpbmV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZGQwZDI7XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhvbWUtZGV0YWlscy10ZXh0e1xuICAgICAgICAgICAgbWFyZ2luOjNweCA2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuYXNzZXQtdmlldy1jb250YWN0LXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6MzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTozMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTlFRUVBO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjMTY5MkM1O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNEFBMzkxO1xuXG4gICAgICAgIC5wYXBlci1mb3JtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhcGVyLWZ1bGwtd2lkdGgge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVjbGFpbWVyLXRleHR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6ICM4NjkwOTk7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEFBMzkxO1xuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZmY0MDgxO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5hc3NldC12aWV3LWZvb3RlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGZvb3Rlci1jb2xvcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjODY5MDk5O1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG5cbiAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4NjkwOTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNvcHlyaWdodCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZm9vdGVyLWNvbG9yO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNEFBMzkxO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/asset-view/asset-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/asset-view/asset-view.component.ts ***!
  \****************************************************/
/*! exports provided: AssetViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetViewComponent", function() { return AssetViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-gallery */ "./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/paper-form-error-state-matcher */ "./src/app/util/paper-form-error-state-matcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssetViewComponent = /** @class */ (function () {
    // =================================================== //
    function AssetViewComponent(appService, activeRoute) {
        this.appService = appService;
        this.activeRoute = activeRoute;
        // gallery configuration
        this.conf = {
            imageOffset: '0px',
            showDeleteControl: false,
            showImageTitle: false,
            inline: false,
            reactToMouseWheel: false
        };
        // gallery images
        this.images = [
            {
                url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260",
                altText: 'woman-in-black-blazer-holding-blue-cup',
                title: 'woman-in-black-blazer-holding-blue-cup',
                thumbnailUrl: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=60"
            },
            {
                url: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=1260",
                altText: 'two-woman-standing-on-the-ground-and-staring-at-the-mountain',
                extUrl: 'https://www.pexels.com/photo/two-woman-standing-on-the-ground-and-staring-at-the-mountain-669006/',
                thumbnailUrl: "https://images.pexels.com/photos/669006/pexels-photo-669006.jpeg?w=60"
            },
        ];
    }
    // METHODS
    // open gallery
    AssetViewComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.open(index);
    };
    // close gallery
    AssetViewComponent.prototype.closeGallery = function () {
        this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    AssetViewComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    AssetViewComponent.prototype.nextImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.next(index);
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    AssetViewComponent.prototype.prevImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.prev(index);
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    AssetViewComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    AssetViewComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
    };
    // callback on gallery image clicked
    AssetViewComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
    };
    // callback on gallery image changed
    AssetViewComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    AssetViewComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    AssetViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var queryParams = this.activeRoute.snapshot.queryParams;
        var routeParams = this.activeRoute.snapshot.params;
        console.log(routeParams);
        this.assetId = routeParams.id;
        this.appService.getAssetViewDetails({ id: routeParams.id }).subscribe(function (data) {
            console.log(data);
            _this.asset = data.content;
            var query = "I am interested in " + _this.asset.address + ", " + _this.asset.city + ", " + _this.asset.state + " " + _this.asset.zip;
            _this.paperForm.controls['query'].setValue(query);
        });
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]();
        this.matcher = new _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_5__["PaperFormErrorStateMatcher"]();
        this.paperForm = this.formBuilder.group({
            name: ['', []],
            email: ['', []],
            phone: ['', []],
            query: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxImageGalleryComponent"]),
        __metadata("design:type", ngx_image_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxImageGalleryComponent"])
    ], AssetViewComponent.prototype, "ngxImageGallery", void 0);
    AssetViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-view',
            template: __webpack_require__(/*! ./asset-view.component.html */ "./src/app/asset-view/asset-view.component.html"),
            styles: [__webpack_require__(/*! ./asset-view.component.scss */ "./src/app/asset-view/asset-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AssetViewComponent);
    return AssetViewComponent;
}());



/***/ }),

/***/ "./src/app/asset/asset.component.html":
/*!********************************************!*\
  !*** ./src/app/asset/asset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/asset/asset.component.scss":
/*!********************************************!*\
  !*** ./src/app/asset/asset.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/asset/asset.component.ts":
/*!******************************************!*\
  !*** ./src/app/asset/asset.component.ts ***!
  \******************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AssetComponent = /** @class */ (function () {
    function AssetComponent() {
    }
    AssetComponent.prototype.ngOnInit = function () {
    };
    AssetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset',
            template: __webpack_require__(/*! ./asset.component.html */ "./src/app/asset/asset.component.html"),
            styles: [__webpack_require__(/*! ./asset.component.scss */ "./src/app/asset/asset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel-item.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/carousel/carousel-item.directive.ts ***!
  \*****************************************************/
/*! exports provided: CarouselItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemDirective", function() { return CarouselItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselItemDirective = /** @class */ (function () {
    function CarouselItemDirective(tpl) {
        this.tpl = tpl;
    }
    CarouselItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[carouselItem]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], CarouselItemDirective);
    return CarouselItemDirective;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"carousel-wrapper \" [ngStyle]=\"carouselWrapperStyle\" >\n  \n    \n       \n        <div id=\"banner\" >\n            <div class=\"pannel banner-bg\" id=\"panelBg\" #panelBg >\n                <img src=\"../../assets/image/slider-dummy.png\" style=\"visibility: hidden;\" />\n               </div>\n            \n            \n            <div class=\"panel\" id=\"panel1\" [ngStyle]=\"pannelStyle\">\n              <h1 id=\"panel1Title\">YES BY OWNER</h1>\n            </div>\n            \n            <div class=\"panel\" id=\"panel2\" [ngStyle]=\"pannelStyle\">\n              \n            </div>\n            <div class=\"panel\" id=\"panel3\"  >\n              <h1 > There are BUYERS Looking in your Neighborhood RIGHT NOW! </h1>\n            </div>\n\n            <div class=\"panel\" id=\"panel4\"  >\n              <h1 >  Attract them with the For Sale By Owner Digital Sign.  </h1>\n            </div>\n\n            \n            <div class=\"panel\" id=\"panel5\"  >\n              <h1 >   According To The National Association Of Realtors<sup>®</sup>  </h1>\n              <p> 50% of all buyers used the yard sign to find their new home. </p>\n            </div>\n\n            \n            <div class=\"panel\" id=\"panel6\"  >\n              <h1 >    The Yard Sign is 8x MORE EFFECTIVE than Newspaper!   </h1>\n              <p>  Buyers drive neighborhoods; make your house stand out.  </p>\n              <div id=\"orderNow\">ORDER NOW</div>\n            </div>\n            <div class=\"panel\" id=\"panel7\"  >\n              <h1 >  For Sale By Owner Sellers Can Finally Compete And WIN!   </h1>\n            </div>\n            <div class=\"panel\" id=\"panel8\"  >\n              <h1 >   Simply the best way to attract home buyers to your house.    </h1>\n            </div>\n\n            \n          </div>\n      \n    \n</section>\n \n\n<!-- <section class=\"carousel-wrapper carousel-fixed-bg\" [ngStyle]=\"carouselWrapperStyle\">\n  <ul class=\"carousel-inner\" #carousel>\n    <li *ngFor=\"let item of items;\" class=\"carousel-item\" >\n      <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n    </li>\n  </ul>\n</section> -->\n  "

/***/ }),

/***/ "./src/app/carousel/carousel.component.scss":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overflow: hidden; }\n  ul li {\n    width: 100%; }\n  .carousel-wrapper {\n  overflow: hidden;\n  position: relative; }\n  .carousel-inner {\n  display: flex; }\n  .carousel-fixed-bg {\n  width: 100%;\n  position: relative; }\n  .item {\n  padding: 0;\n  width: 100%;\n  height: 300px;\n  background-color: crimson;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center; }\n  #banner {\n  -webkit-backface-visibility: hidden;\n  width: 100%;\n  background: white;\n  overflow: hidden; }\n  .panel {\n  position: absolute;\n  width: 100%;\n  height: auto; }\n  #panel1 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: #1CA1D7; }\n  #panel1 h1 {\n    position: relative;\n    font-size: 72px;\n    font-weight: 300;\n    color: #ffffff;\n    letter-spacing: 1px; }\n  @media (max-width: 767px) {\n      #panel1 h1 {\n        font-size: 32px;\n        font-weight: 300; } }\n  .banner-bg {\n  background: url('slider-bg.jpg') no-repeat;\n  width: 100%;\n  background-size: 100%;\n  position: absolute; }\n  .banner-bg img {\n    width: 100%;\n    height: auto; }\n  #panel2 {\n  top: 0px;\n  background: url('slider-bg.jpg') no-repeat;\n  width: 100%;\n  background-size: 100%; }\n  #panel2 h2 {\n  margin: 0;\n  position: absolute;\n  top: 188px;\n  width: 260px;\n  font-size: 22px;\n  text-align: center;\n  padding: 20px;\n  background: #a02600; }\n  #panel3 {\n  width: auto;\n  top: 30px;\n  left: -30px;\n  background: rgba(255, 255, 255, 0.9);\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 30px;\n  padding-left: 30px; }\n  @media (max-width: 767px) {\n    #panel3 {\n      top: 10px;\n      height: 32px; } }\n  #panel3 h1 {\n    font-size: 22px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    color: #3b4144; }\n  @media (max-width: 767px) {\n      #panel3 h1 {\n        font-size: 11px;\n        font-weight: 400;\n        letter-spacing: normal; } }\n  #panel4 {\n  width: auto;\n  top: 94px;\n  left: -30px;\n  background: rgba(255, 255, 255, 0.9);\n  background: #F50057;\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 30px;\n  padding-left: 30px; }\n  @media (max-width: 767px) {\n    #panel4 {\n      top: 42px;\n      height: 32px; } }\n  #panel4 h1 {\n    font-size: 18px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    color: #ffffff; }\n  @media (max-width: 767px) {\n      #panel4 h1 {\n        font-size: 11px;\n        font-weight: 400;\n        letter-spacing: normal; } }\n  #panel5 {\n  width: 400px;\n  bottom: -30px;\n  left: 30px;\n  background: rgba(255, 255, 255, 0.8);\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 30px;\n  padding-top: 30px;\n  padding-bottom: 60px; }\n  @media (max-width: 767px) {\n    #panel5 {\n      padding-bottom: 30px;\n      width: 320px;\n      height: 120px;\n      left: 10px;\n      padding-top: 10px; } }\n  #panel5 h1 {\n    font-size: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    color: #3b4144;\n    color: #1692C5; }\n  @media (max-width: 767px) {\n      #panel5 h1 {\n        font-size: 14px;\n        font-weight: 400; } }\n  #panel5 p {\n    font-size: 20px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    color: #3b4144;\n    margin: 0px; }\n  @media (max-width: 767px) {\n      #panel5 p {\n        font-size: 14px;\n        font-weight: 400; } }\n  #panel6 {\n  width: 400px;\n  top: 0px;\n  bottom: 0px;\n  left: -400px;\n  background: #8C8;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  overflow: hidden; }\n  @media (max-width: 1023px) {\n    #panel6 {\n      padding: 30px;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      width: 280px; } }\n  #panel6 h1 {\n    font-size: 42px;\n    font-weight: 300;\n    letter-spacing: 1px;\n    color: #3b4144;\n    color: #fff; }\n  @media (max-width: 1023px) {\n      #panel6 h1 {\n        font-size: 14px;\n        font-weight: 300; } }\n  #panel6 p {\n    width: 340px;\n    position: absolute;\n    bottom: 80px;\n    left: 30px;\n    font-size: 24px;\n    font-weight: 400;\n    letter-spacing: 1px;\n    color: #444;\n    margin-top: 0px; }\n  @media (max-width: 1023px) {\n      #panel6 p {\n        font-size: 14px;\n        font-weight: 300;\n        width: 220px;\n        bottom: 40px; } }\n  #panel6 #orderNow {\n    position: absolute;\n    bottom: 30px;\n    right: 80px;\n    background: #ffc600;\n    background: #ffaa00;\n    border: 4px solid #fff;\n    color: #000;\n    font-size: 16px;\n    font-weight: bold;\n    padding: 10px;\n    border-radius: 10px;\n    letter-spacing: 1px; }\n  @media (max-width: 1023px) {\n      #panel6 #orderNow {\n        font-size: 11px;\n        font-weight: 400;\n        border: 2px solid #fff;\n        padding: 6px 10px;\n        border-radius: 4px;\n        bottom: 10px; } }\n  #panel6 #orderNow:hover {\n    background: #ffaa00;\n    border: 4px solid #fff;\n    cursor: pointer; }\n  #panel7 {\n  width: 100%x;\n  left: 0px;\n  right: 0px;\n  bottom: 64px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.8);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: hidden; }\n  @media (max-width: 767px) {\n    #panel7 {\n      height: 32px;\n      padding-left: 10px;\n      padding-right: 10px;\n      bottom: 30px; } }\n  #panel7 h1 {\n    font-size: 24px;\n    font-weight: 500;\n    letter-spacing: 1px;\n    color: #444;\n    color: #444; }\n  @media (max-width: 767px) {\n      #panel7 h1 {\n        font-size: 14px;\n        font-weight: 400; } }\n  #panel8 {\n  width: 100%x;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  height: 64px;\n  background: rgba(255, 255, 255, 0.8);\n  background: #ffaa00;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  overflow: hidden; }\n  @media (max-width: 767px) {\n    #panel8 {\n      height: 32px;\n      padding-left: 10px;\n      padding-right: 10px; } }\n  #panel8 h1 {\n    font-size: 24px;\n    font-weight: 700;\n    letter-spacing: 1px;\n    color: #3b4144;\n    color: #fff; }\n  @media (max-width: 767px) {\n      #panel8 h1 {\n        font-size: 11px;\n        font-weight: 400;\n        letter-spacing: normal; } }\n  #panel3 #info {\n  position: absolute;\n  top: 125px;\n  width: 100%;\n  padding: 10px;\n  height: 125px;\n  background: #a02600; }\n  #panel3 li {\n  position: relative;\n  margin-top: 10px;\n  color: #ffa488; }\n  #panel3 #orderNow {\n  position: absolute;\n  top: 60px;\n  left: 180px;\n  background: #ffc600;\n  color: #000;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 10px;\n  border-radius: 10px;\n  border: 4px solid transparent; }\n  #panel3 #orderNow:hover {\n  background: #ffaa00;\n  border: 4px solid #fff;\n  cursor: pointer; }\n  /* --- stats --- */\n  #stats {\n  font-family: Signika Negative, Asap, sans-serif;\n  font-weight: 300;\n  font-size: 18px;\n  float: left;\n  color: #ddd;\n  margin-left: 20px; }\n  #stats div {\n  margin-bottom: 10px; }\n  #stats div span {\n  font-size: 22px;\n  color: white; }\n  #restart {\n  visibility: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBZ0I7RUFDaEIsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXO0VBRVgsaUJBQWdCLEVBTWpCO0VBWkg7SUFVUSxZQUFXLEVBQ2Q7RUFHSDtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFHbkI7RUFFRDtFQUNFLGNBQWEsRUFDZDtFQUVEO0VBQ0UsWUFBVztFQUVYLG1CQUFrQixFQUtuQjtFQUVEO0VBQ0UsV0FBVTtFQUVWLFlBQVc7RUFDWCxjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLHFDQUFpQztFQUNqQyxZQUFXO0VBQ1gsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25CO0VBSUQ7RUFFRSxvQ0FBa0M7RUFDbEMsWUFBVTtFQUVWLGtCQUFnQjtFQUNoQixpQkFBZSxFQUtoQjtFQUVEO0VBQ0UsbUJBQWlCO0VBQ2pCLFlBQVU7RUFDVixhQUFZLEVBSWI7RUFJSDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixvQkFBbUIsRUFvQnRCO0VBekJEO0lBVVEsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGVBQWM7SUFDZCxvQkFBbUIsRUFTcEI7RUFQQztNQWhCUjtRQWlCWSxnQkFBZTtRQUNmLGlCQUFnQixFQUtyQixFQUFBO0VBSVA7RUFFSSwyQ0FBMkQ7RUFDM0QsWUFBVTtFQUNWLHNCQUFxQjtFQUNyQixtQkFBa0IsRUFLckI7RUFWRDtJQU9RLFlBQVU7SUFDVixhQUFZLEVBQ2Y7RUFJSDtFQUNFLFNBQU87RUFDUCwyQ0FBMkQ7RUFDM0QsWUFBVTtFQUNWLHNCQUFxQixFQUN0QjtFQUlEO0VBQ0UsVUFBUztFQUNULG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixvQkFBbUIsRUFDcEI7RUFFRDtFQUNFLFlBQVc7RUFDWCxVQUFRO0VBQ1IsWUFBVztFQUNYLHFDQUFpQztFQUNqQyxhQUFXO0VBQ1gsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFxQm5CO0VBcEJDO0lBWkY7TUFhTSxVQUFRO01BQ1IsYUFBVyxFQWtCaEIsRUFBQTtFQWhDRDtJQW1CTSxnQkFBYztJQUNkLGlCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGVBQWMsRUFTZjtFQVBDO01BeEJOO1FBeUJVLGdCQUFlO1FBQ2YsaUJBQWU7UUFDZix1QkFBc0IsRUFJM0IsRUFBQTtFQUdMO0VBQ0UsWUFBVztFQUNYLFVBQVE7RUFDUixZQUFXO0VBQ1gscUNBQWlDO0VBQ2pDLG9CQUFtQjtFQUNuQixhQUFXO0VBQ1gsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFvQm5CO0VBbEJDO0lBZEY7TUFlTSxVQUFRO01BQ1IsYUFBVyxFQWdCaEIsRUFBQTtFQWhDRDtJQXFCTSxnQkFBYztJQUNkLGlCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGVBQWMsRUFPZjtFQUxDO01BMUJOO1FBMkJVLGdCQUFlO1FBQ2YsaUJBQWU7UUFDZix1QkFBc0IsRUFFM0IsRUFBQTtFQUdMO0VBQ0UsYUFBWTtFQUNaLGNBQVk7RUFDWixXQUFVO0VBQ1YscUNBQWlDO0VBRWpDLGNBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixxQkFBb0IsRUFxQ3JCO0VBbkNDO0lBZkY7TUFnQk0scUJBQW9CO01BQ3BCLGFBQVk7TUFDWixjQUFZO01BQ1osV0FBVTtNQUNWLGtCQUFpQixFQThCdEIsRUFBQTtFQWxERDtJQTBCTSxnQkFBYztJQUNkLGlCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGVBQWM7SUFDZCxlQUFjLEVBT2Y7RUFMQztNQWhDTjtRQWlDVSxnQkFBZTtRQUNmLGlCQUFlLEVBR3BCLEVBQUE7RUFyQ0w7SUF1Q00sZ0JBQWM7SUFDZCxpQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2QsWUFBVyxFQU1aO0VBTEM7TUE1Q047UUE2Q1UsZ0JBQWU7UUFDZixpQkFBZSxFQUdwQixFQUFBO0VBR0w7RUFDRSxhQUFZO0VBQ1osU0FBTztFQUNQLFlBQVU7RUFDVixhQUFZO0VBRVosaUJBQWdCO0VBRWhCLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFnRmpCO0VBL0VDO0lBaEJGO01BaUJNLGNBQWE7TUFDYixrQkFBaUI7TUFDakIscUJBQW9CO01BQ3BCLGFBQVksRUEyRWpCLEVBQUE7RUEvRkQ7SUEwQk0sZ0JBQWM7SUFDZCxpQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixlQUFjO0lBQ2QsWUFBVyxFQU9aO0VBTEM7TUFoQ047UUFpQ1UsZ0JBQWU7UUFDZixpQkFBZSxFQUdwQixFQUFBO0VBckNMO0lBdUNNLGFBQVk7SUFFWixtQkFBaUI7SUFDakIsYUFBVztJQUNYLFdBQVM7SUFDVCxnQkFBYztJQUNkLGlCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxnQkFBZSxFQVNoQjtFQVJDO01BakROO1FBa0RVLGdCQUFlO1FBQ2YsaUJBQWU7UUFDZixhQUFZO1FBQ1osYUFBVyxFQUloQixFQUFBO0VBekRMO0lBNERNLG1CQUFpQjtJQUNqQixhQUFXO0lBQ1gsWUFBVTtJQUNWLG9CQUFrQjtJQUNsQixvQkFBa0I7SUFDbEIsdUJBQXNCO0lBRXRCLFlBQVU7SUFDVixnQkFBYztJQUNkLGtCQUFnQjtJQUNoQixjQUFZO0lBQ1osb0JBQWtCO0lBQ2xCLG9CQUFtQixFQWdCcEI7RUFkQztNQTFFTjtRQTJFVSxnQkFBZTtRQUNmLGlCQUFlO1FBQ2YsdUJBQXNCO1FBQ3RCLGtCQUFnQjtRQUNoQixtQkFBaUI7UUFDakIsYUFBVyxFQVFoQixFQUFBO0VBeEZMO0lBMkZNLG9CQUFrQjtJQUNsQix1QkFBc0I7SUFDdEIsZ0JBQWUsRUFDaEI7RUFHTDtFQUNFLGFBQVk7RUFDWixVQUFRO0VBQ1IsV0FBUztFQUNULGFBQVc7RUFDWCxhQUFZO0VBQ1oscUNBQWlDO0VBSWpDLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQXVCZjtFQXJCRDtJQWxCRjtNQW1CTSxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixhQUFXLEVBaUJkLEVBQUE7RUF2Q0g7SUE0Qk0sZ0JBQWM7SUFDZCxpQkFBZTtJQUNmLG9CQUFtQjtJQUNuQixZQUFXO0lBQ1gsWUFBVyxFQU1aO0VBTEM7TUFqQ047UUFrQ1UsZ0JBQWU7UUFDZixpQkFBZSxFQUdwQixFQUFBO0VBR0w7RUFDRSxhQUFZO0VBQ1osVUFBUTtFQUNSLFdBQVM7RUFDVCxZQUFVO0VBQ1YsYUFBWTtFQUNaLHFDQUFpQztFQUVqQyxvQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qiw0QkFBMkI7RUFDM0Isb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBb0JmO0VBbkJEO0lBaEJGO01BaUJNLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsb0JBQW1CLEVBZ0J0QixFQUFBO0VBbkNIO0lBd0JNLGdCQUFjO0lBQ2QsaUJBQWU7SUFDZixvQkFBbUI7SUFDbkIsZUFBYztJQUNkLFlBQVcsRUFNWjtFQUxDO01BN0JOO1FBOEJVLGdCQUFlO1FBQ2YsaUJBQWU7UUFDZix1QkFBc0IsRUFFM0IsRUFBQTtFQUdMO0VBQ0UsbUJBQWlCO0VBQ2pCLFdBQVM7RUFDVCxZQUFVO0VBQ1YsY0FBWTtFQUNaLGNBQVk7RUFDWixvQkFBbUIsRUFDcEI7RUFJRDtFQUNFLG1CQUFpQjtFQUNqQixpQkFBZTtFQUNmLGVBQWMsRUFDZjtFQUVEO0VBQ0UsbUJBQWlCO0VBQ2pCLFVBQVE7RUFDUixZQUFVO0VBQ1Ysb0JBQWtCO0VBQ2xCLFlBQVU7RUFDVixnQkFBYztFQUNkLGtCQUFnQjtFQUNoQixjQUFZO0VBQ1osb0JBQWtCO0VBQ2xCLDhCQUE2QixFQUM5QjtFQUVEO0VBQ0Usb0JBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixnQkFBZSxFQUNoQjtFQUVELG1CQUFtQjtFQUNuQjtFQUNFLGdEQUErQztFQUMvQyxpQkFBZTtFQUNmLGdCQUFjO0VBQ2QsWUFBVTtFQUNWLFlBQVU7RUFDVixrQkFBZ0IsRUFFakI7RUFFRDtFQUNFLG9CQUFrQixFQUVuQjtFQUVEO0VBQ0UsZ0JBQWM7RUFDZCxhQUFXLEVBQ1o7RUFFRDtFQUNFLG1CQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dGluZ3MnO1xuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGxpe1xuICAgICAgIFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuY2Fyb3VzZWwtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBcbiAgfVxuXG4gIC5jYXJvdXNlbC1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1maXhlZC1iZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gbWFyZ2luLXRvcDogMTI1cHg7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9zbGlkZXItYmcuanBnKSBuby1yZXBlYXQ7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIFxuICB9XG5cbiAgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy8gd2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBcbiAgI2Jhbm5lciB7XG4gICAgLy8gcG9zaXRpb246YWJzb2x1dGU7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtcbiAgICB3aWR0aDoxMDAlO1xuICAgXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgLy8gZmxvYXQ6bGVmdDtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBcbiAgfVxuICBcbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgIFxuICAgIC8vIG92ZXJmbG93OmhpZGRlbjtcbiAgXG4gIH1cblxuICBcbiAgXG4jcGFuZWwxIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMUNBMUQ3O1xuICAgIC8vIGJhY2tncm91bmQ6ICM4Qzg7XG4gICAgLy8gQGluY2x1ZGUgYmctZ3JhZGllbnQoOTBkZWcsI0Y1MDA1NywgI2ZmYWEwMCwgIzFDQTFENywgIzhDOCk7XG5cbiAgICAgaDEge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICB9XG5cbn1cbiAgXG4uYmFubmVyLWJnIHtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9zbGlkZXItYmcuanBnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbn1cblxuICBcbiAgI3BhbmVsMiB7XG4gICAgdG9wOjBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL3NsaWRlci1iZy5qcGcpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICBcbiAgXG4gIFxuICAjcGFuZWwyIGgye1xuICAgIG1hcmdpbjogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxODhweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNhMDI2MDA7XG4gIH1cbiAgXG4gICNwYW5lbDMge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRvcDozMHB4O1xuICAgIGxlZnQ6IC0zMHB4OyBcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XG4gICAgaGVpZ2h0OjY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgIHRvcDoxMHB4O1xuICAgICAgICBoZWlnaHQ6MzJweDtcbiAgICB9XG4gICAgXG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjM2I0MTQ0O1xuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgIFxuICAgICAgfVxuICB9XG4gIFxuICAjcGFuZWw0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICB0b3A6OTRweDtcbiAgICBsZWZ0OiAtMzBweDsgXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xuICAgIGJhY2tncm91bmQ6ICNGNTAwNTc7XG4gICAgaGVpZ2h0OjY0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcblxuICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgdG9wOjQycHg7XG4gICAgICAgIGhlaWdodDozMnB4O1xuICAgIH1cblxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgXG4gICNwYW5lbDUge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBib3R0b206LTMwcHg7XG4gICAgbGVmdDogMzBweDsgXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIC8vIGJhY2tncm91bmQ6ICM0QUEzOTE7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICBoZWlnaHQ6MTIwcHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgfVxuXG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjM2I0MTQ0O1xuICAgICAgICBjb2xvcjogIzE2OTJDNTtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICAvLyBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICBmb250LXdlaWdodDo1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjM2I0MTQ0O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIFxuICAjcGFuZWw2IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdG9wOjBweDtcbiAgICBib3R0b206MHB4O1xuICAgIGxlZnQ6IC00MDBweDsgXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGJhY2tncm91bmQ6ICM4Qzg7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgQG1lZGlhKG1heC13aWR0aDogJGRlc2t0b3Ape1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyODBweDtcblxuICAgIH1cblxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6NDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogIzNiNDE0NDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGRlc2t0b3Ape1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgICAgICAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIHAge1xuICAgICAgICB3aWR0aDogMzQwcHg7XG5cbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTo4MHB4O1xuICAgICAgICBsZWZ0OjMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xuICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRkZXNrdG9wKXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIGJvdHRvbTo0MHB4O1xuXG4gICAgICAgICAgICAvLyBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNvcmRlck5vdyB7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICBib3R0b206MzBweDtcbiAgICAgICAgcmlnaHQ6ODBweDtcbiAgICAgICAgYmFja2dyb3VuZDojZmZjNjAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiNmZmFhMDA7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG5cbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRkZXNrdG9wKXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOjZweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgICAgICAgICBib3R0b206MTBweDtcblxuXG5cbiAgICAgICAgICAgIC8vIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI29yZGVyTm93OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDojZmZhYTAwO1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gIH1cblxuICAjcGFuZWw3IHtcbiAgICB3aWR0aDogMTAwJXg7XG4gICAgbGVmdDowcHg7XG4gICAgcmlnaHQ6MHB4O1xuICAgIGJvdHRvbTo2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgLy8gYmFja2dyb3VuZDogIzhDODtcbiAgICAvLyBiYWNrZ3JvdW5kOiNmZmFhMDA7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBib3R0b206MzBweDtcblxuICAgIH1cblxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6MjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIC8vIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAjcGFuZWw4IHtcbiAgICB3aWR0aDogMTAwJXg7XG4gICAgbGVmdDowcHg7XG4gICAgcmlnaHQ6MHB4O1xuICAgIGJvdHRvbTowcHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjOEM4O1xuICAgIGJhY2tncm91bmQ6I2ZmYWEwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6MjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6NzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBjb2xvcjogIzNiNDE0NDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAjcGFuZWwzICNpbmZve1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoxMjVweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBoZWlnaHQ6MTI1cHg7XG4gICAgYmFja2dyb3VuZDogI2EwMjYwMDtcbiAgfVxuICBcblxuICBcbiAgI3BhbmVsMyBsaSB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGNvbG9yOiAjZmZhNDg4O1xuICB9XG4gIFxuICAjcGFuZWwzICNvcmRlck5vdyB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjYwcHg7XG4gICAgbGVmdDoxODBweDtcbiAgICBiYWNrZ3JvdW5kOiNmZmM2MDA7XG4gICAgY29sb3I6IzAwMDtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gICNwYW5lbDMgI29yZGVyTm93OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiNmZmFhMDA7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC8qIC0tLSBzdGF0cyAtLS0gKi9cbiAgI3N0YXRzIHtcbiAgICBmb250LWZhbWlseTogU2lnbmlrYSBOZWdhdGl2ZSwgQXNhcCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDozMDA7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBjb2xvcjojZGRkO1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgXG4gIH1cbiAgXG4gICNzdGF0cyBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbiAgICBcbiAgfVxuICBcbiAgI3N0YXRzIGRpdiBzcGFuIHtcbiAgICBmb250LXNpemU6MjJweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICBcbiAgI3Jlc3RhcnQge1xuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselItemElement, CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItemElement", function() { return CarouselItemElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel-item.directive */ "./src/app/carousel/carousel-item.directive.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarouselItemElement = /** @class */ (function () {
    function CarouselItemElement() {
    }
    CarouselItemElement = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.carousel-item'
        })
    ], CarouselItemElement);
    return CarouselItemElement;
}());

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(builder) {
        this.builder = builder;
        this.carouselWidth = 1445;
        this.carouselHeight = 571;
        this.carouselSizeRatio = this.carouselHeight / this.carouselWidth;
        this.width = 0;
        this.height = 0;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
        this.carouselWrapperStyle = {};
        this.pannelStyle = {};
    }
    CarouselComponent.prototype.onResize = function (event) {
        console.log(event.target.innerWidth);
        console.log(event.target.innerHeight);
        // let w:number = this.panelBg.nativeElement.offsetWidth;
        // let h:number = this.panelBg.nativeElement.offsetHeight;
        var w = event.target.innerWidth;
        // let h:number = this.panelBg.nativeElement.offsetHeight;
        this.width = w;
        // this.height = h;
        this.height = this.carouselSizeRatio * w;
        this.setCarouselSize();
        console.log('this.panelBg');
        console.log(this.panelBg);
        console.log('w');
        console.log(w);
    };
    CarouselComponent.prototype.next = function () {
        if (this.currentSlide + 1 === this.items.length)
            return;
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        var offset = this.currentSlide * this.itemWidth;
        var myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    };
    CarouselComponent.prototype.setCarouselSize = function () {
        this.carouselWrapperStyle = {
            width: this.width + "px",
            height: this.height + "px"
            // 'min-height': `${this.height}px`
        };
        this.pannelStyle = {
            width: this.width + "px",
            height: this.height + "px"
            // 'min-height': `${this.height}px`
        };
    };
    CarouselComponent.prototype.buildAnimation = function (offset) {
        return this.builder.build([
            // animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(this.timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: " (-" + offset + "px)" }))
        ]);
    };
    CarouselComponent.prototype.prev = function () {
        if (this.currentSlide === 0)
            return;
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        var offset = this.currentSlide * this.itemWidth;
        var myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    };
    CarouselComponent.prototype.ngOnInit = function () {
        // let w:number = this.panelBg.nativeElement.offsetWidth;
        // let h:number = this.panelBg.nativeElement.offsetHeight;
        // this.width = w;
        // this.height = this.carouselSizeRatio * w;
        // console.log(this.height)
        // this.setCarouselSize();
        // this.doIt();
    };
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var w = this.panelBg.nativeElement.offsetWidth;
        var h = this.panelBg.nativeElement.offsetHeight;
        this.width = w;
        this.height = this.carouselSizeRatio * w;
        console.log(this.height);
        this.setCarouselSize();
        this.doIt();
    };
    CarouselComponent.prototype.doIt = function () {
        var $panelBg = $("#panelBg");
        var $panel1 = $("#panel1");
        var $panel2 = $("#panel2");
        var $panel3 = $("#panel3");
        var $panel4 = $("#panel4");
        var $panel5 = $("#panel5");
        var $panel6 = $("#panel6");
        var $panel7 = $("#panel7");
        var $panel8 = $("#panel8");
        var $orderNow = $("#orderNow");
        var $panel6Text = $("#panel6 p");
        var $panel1Text = $("#panel1 h1");
        this.timeline = new TimelineMax({ delay: 0.5, repeat: 0, repeatDelay: 2, onUpdate: updateStats, onRepeat: updateReps, onComplete: function () {
                this.restart();
            } });
        this.timeline.set($panelBg, { autoAlpha: 0.5, zIndex: 10 })
            .set($panel1, { zIndex: 11 })
            // .from($panel1, 0.5, {autoAlpha:0})
            .from($panel1Text, 0.5, { scale: 0.5, autoAlpha: 0, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Back"].easeOut })
            .set($panel2, { top: 0, zIndex: 12 }, "+=2")
            .set($panel2, { scale: 1, zIndex: 12 })
            .from($panel2, 0.2, { delay: 2.5, autoAlpha: 0, scale: 1.5 })
            .set($panel3, { left: -1000, zIndex: 13, alpha: 1 })
            .to($panel3, 0.5, { delay: 0.5, left: -10 })
            .set($panel4, { left: -$panel4.width(), zIndex: 13, alpha: 1 })
            .to($panel4, 0.5, { delay: 0, left: -10 })
            .to($panel4, 0.5, { delay: 2.5, left: -$panel4.width() - 100 })
            .to($panel3, 0.5, { delay: 0.0, left: -$panel3.width() - 100 })
            .set($panel5, { bottom: -$panel5.width(), zIndex: 14, alpha: 1 })
            .to($panel5, 0.7, { delay: 0.0, bottom: -10 })
            .to($panel5, 0.7, { delay: 2.5, bottom: -$panel5.width() - 100 })
            .set($panel6, { left: -$panel6.width() - 100, zIndex: 14, alpha: 1 })
            .to($panel6, 0.5, { delay: 0.0, left: -10 })
            .set($panel6Text, { left: 30, zIndex: 15, alpha: 1 })
            .from($panel6Text, 0.5, { delay: 0.0, autoAlpha: 0, left: 60 })
            .from($orderNow, 0.5, { scale: 0, autoAlpha: 0, ease: gsap_all__WEBPACK_IMPORTED_MODULE_3__["Back"].easeOut })
            .to($panel6, 0.5, { delay: 4.5, left: -$panel6.width() - 100 })
            .set($panel7, { left: this.width, zIndex: 17, alpha: 1 })
            .to($panel7, 0.5, { delay: 0, left: 0 })
            .set($panel8, { left: -this.width, zIndex: 17, alpha: 1 })
            .to($panel8, 0.5, { delay: 0, left: 0 })
            .to($panel7, 0.5, { delay: 3.0, alpha: 0 })
            .to($panel8, 0.5, { delay: 0, bottom: -70, alpha: 0 });
        //  .from($panel2, 0.5, {delay:-0.2, autoAlpha:0})
        //  .set($panel2, {top:0}, "+=2")
        //  .from($panel2, 0.2, {autoAlpha:0, scale:1.5})
        //  .from($panel2Text, 0.2, {top:250}, "+=0.5")
        //  .to($panel2Text, 0.2, {top:250}, "+=2")
        //  .set($panel3, {top:0}, "final")
        //  .from($info, 0.5, {top:250}, "final")
        //  .to($panel2, 0.5, {top:-60}, "final")
        //  .staggerFrom($list, 0.3, {autoAlpha:0, left:50}, 0.1, "+=0.2")
        //  .from($orderNow, 0.5, {scale:0, autoAlpha:0, ease:Back.easeOut});
        function updateReps() {
        }
        function updateStats() {
        }
        function reset() {
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_carousel_item_directive__WEBPACK_IMPORTED_MODULE_1__["CarouselItemDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(CarouselItemElement, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], CarouselComponent.prototype, "itemsElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselComponent.prototype, "carousel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panelBg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CarouselComponent.prototype, "panelBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "timing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "showControls", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'carousel',
            exportAs: 'carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/carousel/carousel.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer\" >\n    <div class=\"link\">\n      <a class=\"\" href=\"#\" > Privacy Policy</a> |  <a class=\"\" href=\"#\" > Term of Service</a>\n    </div>\n    <div class=\"copyright\">Copyright © 2018 YesByOwner, LLC. All Rights Reserved.</div>\n  </div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 120px;\n  background: #3b4144;\n  justify-content: center;\n  align-items: center;\n  color: #869099;\n  padding: 10px; }\n  .app-footer .link a {\n    text-decoration: none;\n    font-size: 13px;\n    font-weight: 400;\n    color: #869099; }\n  .app-footer .copyright {\n    display: flex;\n    flex-direction: row;\n    width: 90%;\n    background: #3b4144;\n    justify-content: center;\n    text-decoration: none;\n    font-size: 11px;\n    font-weight: 400;\n    color: #4AA391;\n    padding: 5px;\n    margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hc3NldHMvc2Nzcy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsWUFBVTtFQUNWLGNBQWE7RUFDYixvQkNNa0I7RURMbEIsd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2QsY0FBWSxFQXlCZjtFQWxDRDtJQWFZLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixlQUFjLEVBQ2pCO0VBakJUO0lBb0JRLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsV0FBUztJQUVULG9CQ2JjO0lEY2Qsd0JBQXVCO0lBRXZCLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2QsYUFBWTtJQUNaLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3NldHRpbmdzJztcbi5hcHAtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogJGZvb3Rlci1jb2xvcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjODY5MDk5O1xuICAgIHBhZGRpbmc6MTBweDtcblxuICAgIC5saW5rIHtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogIzg2OTA5OTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiAkZm9vdGVyLWNvbG9yO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjNEFBMzkxO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbn0iLCIkYXF1YW1hcmluZS10cmFkZXdpbmQ6ICM2MUJDQUE7XG4kYXF1YW1hcmluZS1vY2Vhbi1ncmVlbjogIzRBQTM5MTtcbiRvcmFuZ2UtdGVycmFjb3RhOiAjRTM3NzRFO1xuJGdyYXktbnVyc2U6ICNFOUVFRUE7XG4kZ3JheS10YXNtYW46ICNEQUUxREQ7XG4kZ3JheS1zaWxkZXItY2hhbGljZTogI0FEQURBRDtcblxuJGJsdWUtY29ybmZsb3dlcjogIzFDQTFENztcbiRibHVlLWVhc3Rlcm46ICMxNjkyQzU7XG5cbiRuaWNlLWdyZXk6ICMzYjQxNDQ7XG5cbiR0ZXh0LWNvbG9yOiAjM2I0MTQ0O1xuJGZvb3Rlci1jb2xvcjogIzNiNDE0NDtcblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbiRkZXNrdG9wOiAxMDIzcHg7XG4kaXBhZDogNzY3cHg7XG4kbW9iaWxlOiA0MDBweDtcbiRsaW5lLXdpdGg6IDJweDtcblxuQG1peGluIGJnLWdyYWRpZW50KCRhbmdsZTogMTgwZGVnLCAkY29sb3IxOiAjMGJkLCAkY29sb3IyOiAjZmZmLCAkY29sb3IzOiAjZmZmLCAkY29sb3I0OiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yMSwgJGNvbG9yMiwgJGNvbG9yMywgJGNvbG9yNCkgZml4ZWQ7XG4gIH1cblxuQG1peGluIGJnLWdyYWRpZW50LXR3bygkYW5nbGU6IDE4MGRlZywgJGNvbG9yMTogIzBiZCwgJGNvbG9yMjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvcjEsICRjb2xvcjIpIGZpeGVkO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-header-nav shadow\">\n            \n    <div class=\"logo-wrapper\">\n        <img src=\"./assets/image/logo.png\" >\n      </div>\n    \n      <div class=\"nav-button-wrapper\">\n        <a  class=\"header-btn\" >How It Works</a>\n        <a class=\"header-btn\"  >Try It</a>\n        <a class=\"header-btn\"  >Order Here</a>\n        <a class=\"header-btn\"  >Login</a>\n\n        <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button sidenav-button\" >\n            <mat-icon aria-label=\"Menu\" class=\"material-icons\">menu</mat-icon>\n        </button>\n\n      </div>\n  \n</nav>\n<div class=\"hor-bar\"></div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hor-bar {\n  display: flex;\n  width: 100%;\n  height: 5px;\n  background: linear-gradient(90deg, #F50057, #ffaa00, #fff, #8C8) fixed; }\n\n.app-header-nav {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 120px;\n  align-items: center;\n  justify-content: center; }\n\n.app-header-nav.shadow {\n    background: #ffffff; }\n\n@media (max-width: 767px) {\n    .app-header-nav {\n      height: 80px; } }\n\n.app-header-nav .nav-button-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    margin-right: 30px; }\n\n.app-header-nav .nav-button-wrapper .header-btn {\n      background: transparent none repeat scroll 0 0;\n      color: #414042;\n      display: inline-block;\n      font-size: 13px;\n      font-weight: 700;\n      padding: 5px 10px;\n      border-bottom: 4px solid transparent;\n      letter-spacing: 1.4px;\n      margin-top: 6px;\n      text-transform: uppercase;\n      cursor: pointer;\n      margin-right: 10px; }\n\n.app-header-nav .nav-button-wrapper .header-btn:hover {\n        border-bottom: 4px solid #414042;\n        color: #414042; }\n\n@media (max-width: 767px) {\n        .app-header-nav .nav-button-wrapper .header-btn {\n          display: none; } }\n\n.app-header-nav .nav-button-wrapper .sidenav-button {\n      display: none; }\n\n@media (max-width: 767px) {\n        .app-header-nav .nav-button-wrapper .sidenav-button {\n          display: block; } }\n\n.app-header-nav .nav-button-wrapper-left {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    margin-right: 30px; }\n\n.app-header-nav .logo-wrapper {\n    width: 200px;\n    margin-left: 2%;\n    display: block; }\n\n.app-header-nav .logo-wrapper img {\n      width: 100%;\n      height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hc3NldHMvc2Nzcy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGNBQWE7RUFDYixZQUFVO0VBQ1YsWUFBVTtFQ2dCVix1RUFBNkUsRURkaEY7O0FBRUQ7RUFNSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLFlBQVU7RUFDVixjQUFZO0VBQ1osb0JBQW1CO0VBQ25CLHdCQUF1QixFQThFMUI7O0FBekZEO0lBZ0JRLG9CQUFtQixFQUd0Qjs7QUFFRDtJQXJCSjtNQXNCUSxhQUFXLEVBbUVsQixFQUFBOztBQXpGRDtJQTZCUSxZQUFXO0lBQ1gsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQiwwQkFBeUI7SUFDekIsbUJBQWtCLEVBaUNyQjs7QUFsRUw7TUFvQ1ksK0NBQThDO01BQzlDLGVBQWM7TUFDZCxzQkFBcUI7TUFDckIsZ0JBQWU7TUFDZixpQkFBZ0I7TUFDaEIsa0JBQWlCO01BQ2pCLHFDQUFvQztNQUNwQyxzQkFBcUI7TUFDckIsZ0JBQWU7TUFDZiwwQkFBeUI7TUFDekIsZ0JBQWU7TUFDZixtQkFBa0IsRUFXckI7O0FBMURUO1FBa0RnQixpQ0FBZ0M7UUFDaEMsZUFBYyxFQUNqQjs7QUFFRDtRQXREWjtVQXVEZ0IsY0FBYSxFQUdwQixFQUFBOztBQTFEVDtNQTZEWSxjQUFhLEVBSWhCOztBQUhHO1FBOURaO1VBK0RnQixlQUFjLEVBRXJCLEVBQUE7O0FBakVUO0lBb0VRLFlBQVc7SUFDWCxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLDBCQUF5QjtJQUN6QixtQkFBa0IsRUFFckI7O0FBMUVMO0lBOEVRLGFBQVk7SUFFWixnQkFBZTtJQUVmLGVBQWMsRUFLckI7O0FBdkZEO01Bb0ZRLFlBQVc7TUFDWCxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Njc3Mvc2V0dGluZ3MnO1xuXG5cbi5ob3ItYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6NXB4O1xuICAgIEBpbmNsdWRlIGJnLWdyYWRpZW50KDkwZGVnLCNGNTAwNTcsICNmZmFhMDAsICNmZmYsICM4QzgpO1xufVxuXG4uYXBwLWhlYWRlci1uYXZ7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIHRvcDowO1xuICAgIC8vIGxlZnQ6MDtcbiAgICAvLyByaWdodDowO1xuICAgIC8vIHotaW5kZXg6IDEwMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQ6ICMxQ0ExRDc7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM0QUEzOTE7XG4gICAgJi5zaGFkb3cge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC40KSAhaW1wb3J0YW50O1xuXG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICBoZWlnaHQ6ODBweDtcbiAgICB9XG5cblxuICAgIFxuXG4gICAgLm5hdi1idXR0b24td3JhcHBlcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcblxuICAgICAgICAuaGVhZGVyLWJ0biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM0MTQwNDI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zaWRlbmF2LWJ1dHRvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm5hdi1idXR0b24td3JhcHBlci1sZWZ0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuXG4gICAgfVxuXG4gICAgXG4gICAgLmxvZ28td3JhcHBlcntcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvOztcbiAgICB9XG59XG5cbn0iLCIkYXF1YW1hcmluZS10cmFkZXdpbmQ6ICM2MUJDQUE7XG4kYXF1YW1hcmluZS1vY2Vhbi1ncmVlbjogIzRBQTM5MTtcbiRvcmFuZ2UtdGVycmFjb3RhOiAjRTM3NzRFO1xuJGdyYXktbnVyc2U6ICNFOUVFRUE7XG4kZ3JheS10YXNtYW46ICNEQUUxREQ7XG4kZ3JheS1zaWxkZXItY2hhbGljZTogI0FEQURBRDtcblxuJGJsdWUtY29ybmZsb3dlcjogIzFDQTFENztcbiRibHVlLWVhc3Rlcm46ICMxNjkyQzU7XG5cbiRuaWNlLWdyZXk6ICMzYjQxNDQ7XG5cbiR0ZXh0LWNvbG9yOiAjM2I0MTQ0O1xuJGZvb3Rlci1jb2xvcjogIzNiNDE0NDtcblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbiRkZXNrdG9wOiAxMDIzcHg7XG4kaXBhZDogNzY3cHg7XG4kbW9iaWxlOiA0MDBweDtcbiRsaW5lLXdpdGg6IDJweDtcblxuQG1peGluIGJnLWdyYWRpZW50KCRhbmdsZTogMTgwZGVnLCAkY29sb3IxOiAjMGJkLCAkY29sb3IyOiAjZmZmLCAkY29sb3IzOiAjZmZmLCAkY29sb3I0OiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRhbmdsZSwgJGNvbG9yMSwgJGNvbG9yMiwgJGNvbG9yMywgJGNvbG9yNCkgZml4ZWQ7XG4gIH1cblxuQG1peGluIGJnLWdyYWRpZW50LXR3bygkYW5nbGU6IDE4MGRlZywgJGNvbG9yMTogIzBiZCwgJGNvbG9yMjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvcjEsICRjb2xvcjIpIGZpeGVkO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidenav.service */ "./src/app/sidenav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidenavService) {
        this.sidenaveService = sidenavService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.sidenav = this.sidenaveService.sidenav;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container >\n    \n    <app-sidenav mode=\"push\"></app-sidenav>\n    \n    <div class=\"home-content-wrapper\">\n      <app-header></app-header>\n      \n      <div style=\"margin: 0; width:100%;\" class=\"container\">\n          <carousel >\n          </carousel>\n      </div>\n      <div class=\"hor-bar\"></div>\n\n\n      <div class=\"how-it-works-wrapper\">\n        <div class=\"center-box\">\n\n            <h3 class=\"head\" >How It Works</h3>\n\n            <div class=\"how-it-works-desc\">\n                <p>If you've ever seen the normal, boring For Sale By Owner yard sign then you know it doesn't attract much attention. And what's worse, it scares some buyers away. Most buyers don't feel comfortable speaking with the home owner, they only want information at this stage.</p>\n                <p>So rather than calling, most times buyers just drive by looking for homes listed for sale with a real estate agent.</p>\n                <p>The Yes By Owner Digital Sign changes all that. Home buyers will stop in front of your house and immediately be able to obtain detailed information about your home including photos, right on their cell phone.  It will put the spotlight on your home and help to qualify buyers to schedule a tour because your house has what they're looking for in their new home. </p>\n            </div>\n\n            <div class=\"video-preview-wrapper\">\n                <div class=\"video-preview\">\n                    <img src=\"./assets/image/video-preview.png\">\n                    <!-- <div class=\"play-button-wrapper\" >\n                        <mat-icon aria-label=\"Menu\" class=\"material-icons\">play_circle_filled</mat-icon>\n                       \n                    </div> -->\n                    <div class=\"control-bar\">\n                        <button mat-icon-button  class=\"mat-icon-button sidenav-toggle-button play-btn\">\n                            <mat-icon aria-label=\"Menu\" class=\"material-icons\">play_arrow</mat-icon>\n                    </button>\n                    <div class=\"track\" ></div>\n                    <button mat-icon-button  class=\"mat-icon-button sidenav-toggle-button play-btn\">\n                        <mat-icon aria-label=\"Volume\" class=\"material-icons\">volume_up</mat-icon>\n                </button>\n                <button mat-icon-button  class=\"mat-icon-button sidenav-toggle-button play-btn\">\n                    <mat-icon aria-label=\"Fullscreen\" class=\"material-icons\">fullscreen</mat-icon>\n            </button>\n                    </div>\n                  </div>\n            </div>\n          \n          \n        </div>\n\n      </div>\n      <div class=\"try-it-wrapper\">\n        <div class=\"center-box\">\n\n            <h3 class=\"head\" >Try It</h3>\n            <div class=\"try-it-desc\">\n                <p>From your cell phone send a text message TO: <span class=\"important\">8777078279</span>  with the MESSAGE: <span class=\"important\">5903</span>.You will shortly receive a link back to view all the details and photos of this property.</p>\n              </div>\n\n            <div class=\"row\">\n                \n                <div class=\"sms-preview-wrapper\" >\n                    <div class=\"img-wrapper\">\n                        <img src=\"./assets/image/sms.jpg\">\n                        \n                      </div>\n                </div>\n      \n                  <div class=\"house-preview-wrapper\">\n                      <div class=\"img-wrapper\">\n                          <img src=\"./assets/image/home1.jpg\">\n                          \n                        </div>\n                  </div>\n            </div>\n        </div>\n\n      </div>\n\n      <div class=\"order-here-wrapper\">\n          <div class=\"center-box\">\n\n              <h4 class=\"head\" >Order Here</h4>\n            \n  \n              <div class=\"order-here-desc\">\n                <ul>\n                <h4>You Get the Complete Yes By Owner System</h4>\n\n                    <li><strong>Text Search: </strong>The For Sale By Owner Yard Sign with Text of Property Details and Photos.</li>\n                    <li><strong>A Customized Website:  </strong>95% of all home buyers start their search online, the customized website is a must have to reach these home buyers.</li>\n                    <li><strong>Social Marketing:  </strong>We provide the tools for you to market your home in email and on social media websites like Facebook, Twitter, LinkedIn, Instagram, Etc.</li>\n                    <li><strong>Flyer & Postcard:  </strong>We've designed a Flyer and a Postcard you can download and print to use for marketing your home in your neighborhood, at work, at the grocery store and on your community bulletin boards.</li>\n                    \n                </ul>\n                <div class=\"btn-wrapper\">\n                  <a href=\"#\" class=\"ybo-btn\">Order Now</a>\n\n                </div>\n                </div>\n  \n             \n          </div>\n  \n        </div>\n\n        <app-footer></app-footer>\n    </div>\n\n    \n\n    \n\n    <router-outlet></router-outlet>\n  </mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-fullscreen {\n  display: none; }\n\n.toolbar-filler {\n  flex: 1 1 auto; }\n\n.ybo-btn {\n  background: #68499d;\n  background: linear-gradient(135deg, #68499d 0%, #ce0058 50%, #ce0058 50%, #ed9b33 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#68499d', endColorstr='#ed9b33',GradientType=1 );\n  display: inline-block;\n  margin: 0;\n  color: #fff;\n  padding: 4px;\n  border: none;\n  border-radius: 2px;\n  text-align: center;\n  transition: .4s;\n  position: relative;\n  z-index: 1;\n  opacity: 1 !important;\n  text-transform: uppercase;\n  line-height: 1.4;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 10px 30px;\n  letter-spacing: 1px;\n  text-decoration: none; }\n\n.ybo-btn:hover {\n    color: #ffffff;\n    background: #ce0058;\n    background: linear-gradient(135deg, #ed9b33 0%, #ce0058 50%, #ce0058 50%, #68499d 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ed9b33', endColorstr='#68499d',GradientType=1 ); }\n\n.home-content-wrapper {\n  display: flex;\n  flex-direction: column; }\n\n.home-content-wrapper .head {\n    color: #414042;\n    display: inline-flex;\n    font-size: 42px;\n    font-weight: 300;\n    padding: 15px 10px;\n    letter-spacing: 1.4px;\n    margin-top: 6px;\n    margin-bottom: 60px;\n    text-transform: uppercase;\n    border-bottom: 2px solid #779900;\n    border-bottom: 2px solid #F50057;\n    color: #414042; }\n\n@media (max-width: 767px) {\n      .home-content-wrapper .head {\n        font-size: 21px;\n        padding: 10px 10px;\n        margin-bottom: 20px; } }\n\n.home-content-wrapper .center-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 1024px;\n    padding: 30px; }\n\n@media (max-width: 767px) {\n      .home-content-wrapper .center-box {\n        padding: 10px; } }\n\n.home-content-wrapper .how-it-works-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background: #E9EEEA;\n    background: #fff;\n    min-height: 400px;\n    padding: 60px 0; }\n\n@media (max-width: 767px) {\n      .home-content-wrapper .how-it-works-wrapper {\n        padding: 20px 0; } }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper {\n      display: flex;\n      width: 100%;\n      border-radius: 6px;\n      overflow: hidden;\n      cursor: pointer; }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .video-preview {\n        position: relative;\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center; }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .video-preview img {\n          width: 100%;\n          height: auto; }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .play-button-wrapper {\n        position: absolute;\n        background: transparent;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        top: 0;\n        left: 0;\n        bottom: 42;\n        right: 0;\n        height: 100%;\n        align-items: center; }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .play-button-wrapper mat-icon {\n          color: #1abc9c !important;\n          font-size: 120px !important;\n          margin-top: -60px;\n          margin-left: -60px; }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .control-bar {\n        position: absolute;\n        background: #2c3e50;\n        height: 42px;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        align-items: center; }\n\n@media (max-width: 767px) {\n          .home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .control-bar {\n            height: 36px; } }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .control-bar .play-btn mat-icon {\n          color: #1abc9c !important; }\n\n.home-content-wrapper .how-it-works-wrapper .video-preview-wrapper .control-bar .track {\n          display: flex;\n          width: 100%;\n          height: 12px;\n          background: #425669;\n          border-radius: 6px; }\n\n.home-content-wrapper .how-it-works-wrapper .how-it-works-desc {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      justify-content: center;\n      align-items: flex-start;\n      margin-bottom: 50px; }\n\n@media (max-width: 767px) {\n        .home-content-wrapper .how-it-works-wrapper .how-it-works-desc {\n          margin-bottom: 20px; } }\n\n.home-content-wrapper .how-it-works-wrapper .how-it-works-desc p {\n        font-size: 18px;\n        font-weight: 300;\n        margin: 15px 0;\n        letter-spacing: 1px;\n        line-height: 24px; }\n\n@media (max-width: 767px) {\n          .home-content-wrapper .how-it-works-wrapper .how-it-works-desc p {\n            font-size: 14px;\n            line-height: 22px;\n            margin: 10px 0;\n            text-align: justify; } }\n\n.home-content-wrapper .try-it-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background: #E9EEEA;\n    min-height: 400px;\n    padding: 60px 0; }\n\n@media (max-width: 767px) {\n      .home-content-wrapper .try-it-wrapper {\n        padding: 30px 0; } }\n\n.home-content-wrapper .try-it-wrapper .row {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 100%; }\n\n.home-content-wrapper .try-it-wrapper .sms-preview-wrapper {\n      display: flex;\n      width: 52%;\n      border-radius: 6px;\n      overflow: hidden;\n      cursor: pointer; }\n\n.home-content-wrapper .try-it-wrapper .sms-preview-wrapper .img-wrapper {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center; }\n\n.home-content-wrapper .try-it-wrapper .sms-preview-wrapper .img-wrapper img {\n          width: 100%;\n          height: auto; }\n\n.home-content-wrapper .try-it-wrapper .house-preview-wrapper {\n      display: flex;\n      width: 100%;\n      border-radius: 6px;\n      overflow: hidden;\n      cursor: pointer;\n      margin-left: 20px; }\n\n.home-content-wrapper .try-it-wrapper .house-preview-wrapper .img-wrapper {\n        position: relative;\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center; }\n\n.home-content-wrapper .try-it-wrapper .house-preview-wrapper .img-wrapper img {\n          width: 100%;\n          height: auto; }\n\n.home-content-wrapper .try-it-wrapper .try-it-desc {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      justify-content: center;\n      align-items: flex-start;\n      margin-bottom: 30px; }\n\n@media (max-width: 767px) {\n        .home-content-wrapper .try-it-wrapper .try-it-desc {\n          margin-bottom: 20px; } }\n\n.home-content-wrapper .try-it-wrapper .try-it-desc p {\n        font-size: 18px;\n        font-weight: 300;\n        margin: 15px 0;\n        letter-spacing: 1px;\n        line-height: 24px; }\n\n@media (max-width: 767px) {\n          .home-content-wrapper .try-it-wrapper .try-it-desc p {\n            font-size: 16px;\n            line-height: 22px;\n            margin: 10px 0;\n            text-align: justify;\n            margin: 5px 0; } }\n\n.home-content-wrapper .try-it-wrapper .try-it-desc p .important {\n          color: #ed9b33;\n          font-weight: 400; }\n\n.home-content-wrapper .order-here-wrapper {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    background: #E9EEEA;\n    background: #fff;\n    padding: 60px 0; }\n\n.home-content-wrapper .order-here-wrapper .btn-wrapper {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: center; }\n\n@media (max-width: 767px) {\n      .home-content-wrapper .order-here-wrapper {\n        padding: 20px 0; } }\n\n.home-content-wrapper .order-here-wrapper .row {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 100%; }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc {\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      height: 100%;\n      justify-content: center;\n      align-items: flex-start;\n      margin-bottom: 50px; }\n\n@media (max-width: 767px) {\n        .home-content-wrapper .order-here-wrapper .order-here-desc {\n          font-size: 16px;\n          line-height: 22px;\n          margin: 10px 0;\n          text-align: justify;\n          margin: 5px 0; } }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul {\n        list-style: none;\n        padding-left: 0; }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul h4 {\n          font-weight: 400;\n          font-size: 24px; }\n\n@media (max-width: 767px) {\n            .home-content-wrapper .order-here-wrapper .order-here-desc ul h4 {\n              margin-top: 5px;\n              font-size: 16px; } }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul li {\n          font-weight: 300;\n          margin: 15px 0;\n          letter-spacing: 1px;\n          padding-left: 1.3em; }\n\n@media (max-width: 767px) {\n            .home-content-wrapper .order-here-wrapper .order-here-desc ul li {\n              font-size: 14px;\n              line-height: 22px;\n              margin: 10px 0;\n              text-align: justify;\n              margin: 5px 0; } }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul li:before {\n            font-family: \"Material Icons\";\n            content: \"\\e5ca\";\n            display: inline-flex;\n            margin-left: -1.3em;\n            /* same as padding-left set on li */\n            width: 1.3em;\n            /* same as padding-left set on li */\n            color: #ce0058;\n            font-size: 24px;\n            margin-top: -3px;\n            position: absolute; }\n\n@media (max-width: 767px) {\n              .home-content-wrapper .order-here-wrapper .order-here-desc ul li:before {\n                font-size: 16px;\n                margin-top: -1px; } }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul li strong {\n            font-weight: 400; }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul p {\n          font-size: 18px;\n          font-weight: 300;\n          margin: 15px 0;\n          letter-spacing: 1px; }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul p i {\n            margin-top: -2px;\n            display: inline-flex;\n            margin-right: 10px;\n            color: #779900; }\n\n.home-content-wrapper .order-here-wrapper .order-here-desc ul p .bold {\n            font-weight: 400; }\n\n.carousel-fixed-bg {\n  width: 100%;\n  height: 512px;\n  position: relative;\n  background: url('slider-bg.jpg') no-repeat;\n  background-size: 100%; }\n\n.item {\n  padding: 0;\n  width: 100%;\n  height: 300px;\n  background-color: crimson;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGVBQ0osRUFBQzs7QUFLRDtFQUNJLG9CQUFtQjtFQUduQix3RkFBb0Y7RUFDcEYsb0hBQW1IO0VBQ25ILHNCQUFxQjtFQUVyQixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBRWxCLG1CQUFrQjtFQUVsQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1Ysc0JBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixzQkFBcUIsRUFXeEI7O0FBckNEO0lBNkJRLGVBQWM7SUFDZCxvQkFBbUI7SUFHdkIsd0ZBQW9GO0lBQ3BGLG9IQUFtSCxFQUVsSDs7QUFJTDtFQUNJLGNBQWE7RUFDYix1QkFBc0IsRUFzWnpCOztBQXhaRDtJQUtRLGVBQWM7SUFDZCxxQkFBb0I7SUFDcEIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBQ2xCLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLG9CQUFtQjtJQUNuQiwwQkFBeUI7SUFFekIsaUNBQWdDO0lBQ2hDLGlDQUFnQztJQUNoQyxlQUFjLEVBUWpCOztBQU5HO01BbkJSO1FBb0JZLGdCQUFlO1FBQ2YsbUJBQWtCO1FBQ2xCLG9CQUFtQixFQUcxQixFQUFBOztBQXpCTDtJQTRCUSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFDbkIsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixjQUFZLEVBTWY7O0FBSkc7TUFwQ1I7UUFxQ1ksY0FBWSxFQUduQixFQUFBOztBQXhDTDtJQTRDUSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFDbkIsWUFBVztJQUNYLG9CQUFtQjtJQUNuQixpQkFBZ0I7SUFDaEIsa0JBQWdCO0lBQ2hCLGdCQUFlLEVBa0hsQjs7QUFoSEc7TUF0RFI7UUF1RFksZ0JBQWUsRUErR3RCLEVBQUE7O0FBdEtMO01BMERnQixjQUFhO01BQ2IsWUFBVztNQUVYLG1CQUFrQjtNQUNsQixpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFxRWxCOztBQXBJYjtRQWlFb0IsbUJBQWtCO1FBQ2xCLGNBQWE7UUFDYixvQkFBbUI7UUFFbkIsWUFBVTtRQUNWLGFBQVk7UUFDWix3QkFBdUI7UUFDdkIsb0JBQW1CLEVBTXRCOztBQTlFakI7VUEyRXdCLFlBQVU7VUFDVixhQUFZLEVBQ2Y7O0FBN0VyQjtRQWdGb0IsbUJBQWtCO1FBQ2xCLHdCQUF1QjtRQUV2QixjQUFhO1FBQ2Isb0JBQW1CO1FBQ25CLHdCQUF1QjtRQUN2QixvQkFBbUI7UUFDbkIsT0FBSztRQUNMLFFBQU07UUFDTixXQUFVO1FBQ1YsU0FBTztRQUNQLGFBQVk7UUFDWixvQkFBbUIsRUFVdEI7O0FBdEdqQjtVQStGd0IsMEJBQXlCO1VBQ3pCLDRCQUEyQjtVQUMzQixrQkFBaUI7VUFDakIsbUJBQWtCLEVBQ3JCOztBQW5HckI7UUF5R29CLG1CQUFrQjtRQUNsQixvQkFBbUI7UUFDbkIsYUFBWTtRQUNaLFlBQVc7UUFDWCxjQUFhO1FBQ2Isb0JBQW1CO1FBQ25CLFFBQU07UUFDTixVQUFTO1FBQ1QsU0FBTztRQUNQLG9CQUFtQixFQWlCdEI7O0FBZkc7VUFwSHBCO1lBcUh3QixhQUFZLEVBY25CLEVBQUE7O0FBbklqQjtVQXlIbUMsMEJBQTBCLEVBQUU7O0FBekgvRDtVQTZId0IsY0FBYTtVQUNiLFlBQVc7VUFDWCxhQUFZO1VBQ1osb0JBQW1CO1VBQ25CLG1CQUFrQixFQUNyQjs7QUFsSXJCO01Bd0lnQixjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLFlBQVU7TUFDVixhQUFZO01BQ1osd0JBQXVCO01BQ3ZCLHdCQUF1QjtNQUN2QixvQkFBbUIsRUFvQnRCOztBQW5CRztRQS9JaEI7VUFnSm9CLG9CQUFtQixFQWtCMUIsRUFBQTs7QUFsS2I7UUFvSm9CLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLGVBQWM7UUFDZCxvQkFBbUI7UUFDbkIsa0JBQWlCLEVBU3BCOztBQVBHO1VBMUpwQjtZQTJKd0IsZ0JBQWU7WUFDZixrQkFBaUI7WUFDakIsZUFBYztZQUNkLG9CQUFtQixFQUcxQixFQUFBOztBQWpLakI7SUF5S1EsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxvQkFBbUI7SUFFbkIsa0JBQWdCO0lBQ2hCLGdCQUFlLEVBcUdsQjs7QUFwR0c7TUFsTFI7UUFtTFksZ0JBQWUsRUFtR3RCLEVBQUE7O0FBdFJMO01BeUxnQixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLHdCQUF1QjtNQUN2QixvQkFBbUI7TUFDbkIsWUFBVyxFQUNkOztBQTlMYjtNQWtNZ0IsY0FBYTtNQUNiLFdBQVU7TUFFVixtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLGdCQUFlLEVBZ0JsQjs7QUF2TmI7UUEwTW9CLGNBQWE7UUFDYixvQkFBbUI7UUFFbkIsWUFBVTtRQUNWLGFBQVk7UUFDWix3QkFBdUI7UUFDdkIsb0JBQW1CLEVBTXRCOztBQXROakI7VUFtTndCLFlBQVU7VUFDVixhQUFZLEVBQ2Y7O0FBck5yQjtNQTBOZ0IsY0FBYTtNQUNiLFlBQVc7TUFFWCxtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLGdCQUFlO01BQ2Ysa0JBQWlCLEVBZ0JwQjs7QUFoUGI7UUFrT29CLG1CQUFrQjtRQUNsQixjQUFhO1FBQ2Isb0JBQW1CO1FBRW5CLFlBQVU7UUFDVixhQUFZO1FBQ1osd0JBQXVCO1FBQ3ZCLG9CQUFtQixFQU10Qjs7QUEvT2pCO1VBNE93QixZQUFVO1VBQ1YsYUFBWSxFQUNmOztBQTlPckI7TUFvUGdCLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsWUFBVTtNQUNWLGFBQVk7TUFDWix3QkFBdUI7TUFDdkIsd0JBQXVCO01BQ3ZCLG9CQUFtQixFQXdCdEI7O0FBdkJHO1FBM1BoQjtVQTRQb0Isb0JBQW1CLEVBc0IxQixFQUFBOztBQWxSYjtRQWdRb0IsZ0JBQWU7UUFDZixpQkFBZ0I7UUFDaEIsZUFBYztRQUNkLG9CQUFtQjtRQUNuQixrQkFBaUIsRUFhcEI7O0FBWkc7VUFyUXBCO1lBc1F3QixnQkFBZTtZQUNmLGtCQUFpQjtZQUNqQixlQUFjO1lBQ2Qsb0JBQW1CO1lBQ25CLGNBQWEsRUFPcEIsRUFBQTs7QUFqUmpCO1VBOFF3QixlQUFjO1VBQ2QsaUJBQWdCLEVBQ25COztBQWhSckI7SUF5UlEsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsaUJBQWdCO0lBRWhCLGdCQUFlLEVBb0hsQjs7QUFyWkw7TUFvU1ksWUFBVTtNQUNWLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsd0JBQXVCLEVBQzFCOztBQUVEO01BMVNSO1FBMlNZLGdCQUFlLEVBMEd0QixFQUFBOztBQXJaTDtNQWlUZ0IsY0FBYTtNQUNiLG9CQUFtQjtNQUNuQix3QkFBdUI7TUFDdkIsb0JBQW1CO01BQ25CLFlBQVcsRUFDZDs7QUF0VGI7TUF5VGdCLGNBQWE7TUFDYix1QkFBc0I7TUFDdEIsWUFBVTtNQUNWLGFBQVk7TUFDWix3QkFBdUI7TUFDdkIsd0JBQXVCO01BQ3ZCLG9CQUFtQixFQW9GMUI7O0FBbkZPO1FBaFVoQjtVQWlVb0IsZ0JBQWU7VUFDZixrQkFBaUI7VUFDakIsZUFBYztVQUNkLG9CQUFtQjtVQUNuQixjQUFhLEVBOEV4QixFQUFBOztBQW5aVDtRQXlVb0IsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBdUV0Qjs7QUFqWmI7VUE0VXdCLGlCQUFnQjtVQUNoQixnQkFBZSxFQUtsQjs7QUFKRztZQTlVeEI7Y0ErVTRCLGdCQUFjO2NBQ2QsZ0JBQWUsRUFFdEIsRUFBQTs7QUFsVnJCO1VBb1Z3QixpQkFBZ0I7VUFDaEIsZUFBYztVQUNkLG9CQUFtQjtVQUduQixvQkFBbUIsRUFpQ3RCOztBQS9CRztZQTNWeEI7Y0E0VjRCLGdCQUFlO2NBQ2Ysa0JBQWlCO2NBQ2pCLGVBQWM7Y0FDZCxvQkFBbUI7Y0FDbkIsY0FBYSxFQTBCcEIsRUFBQTs7QUExWHJCO1lBb1c0Qiw4QkFBNkI7WUFDN0IsaUJBQWdCO1lBRWhCLHFCQUFvQjtZQUNwQixvQkFBbUI7WUFBRSxvQ0FBb0M7WUFDekQsYUFBWTtZQUFFLG9DQUFvQztZQUVsRCxlQUFjO1lBQ2QsZ0JBQWU7WUFDZixpQkFBZ0I7WUFDaEIsbUJBQWtCLEVBT3JCOztBQUxHO2NBaFg1QjtnQkFpWGdDLGdCQUFlO2dCQUNmLGlCQUFnQixFQUd2QixFQUFBOztBQXJYekI7WUF3WDRCLGlCQUFnQixFQUNuQjs7QUF6WHpCO1VBOFhvQixnQkFBZTtVQUNmLGlCQUFnQjtVQUNoQixlQUFjO1VBQ2Qsb0JBQW1CLEVBZXRCOztBQWhaakI7WUFxWXdCLGlCQUFnQjtZQUVoQixxQkFBb0I7WUFDcEIsbUJBQWtCO1lBQ2xCLGVBQWEsRUFDaEI7O0FBMVlyQjtZQThZd0IsaUJBQWdCLEVBQ25COztBQVVyQjtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsbUJBQWtCO0VBRWxCLDJDQUEyRDtFQUMzRCxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxXQUFVO0VBRVYsWUFBVztFQUNYLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIscUNBQWlDO0VBQ2pDLFlBQVc7RUFDWCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9zZXR0aW5ncyc7XG5cbi50b29sYmFyLWZ1bGxzY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b29sYmFyLWZpbGxlciB7XG4gICAgZmxleDogMSAxIGF1dG9cbn1cblxuXG5cblxuLnliby1idG57XG4gICAgYmFja2dyb3VuZDogIzY4NDk5ZDtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM2ODQ5OWQgMCUsICNjZTAwNTggNTAlLCAjY2UwMDU4IDUwJSwgI2VkOWIzMyAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsICM2ODQ5OWQgMCUsI2NlMDA1OCA1MCUsI2NlMDA1OCA1MCUsI2VkOWIzMyAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjg0OTlkIDAlLCNjZTAwNTggNTAlLCNjZTAwNTggNTAlLCNlZDliMzMgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM2ODQ5OWQnLCBlbmRDb2xvcnN0cj0nI2VkOWIzMycsR3JhZGllbnRUeXBlPTEgKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2UwMDU4O1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VkOWIzMyAwJSwgI2NlMDA1OCA1MCUsICNjZTAwNTggNTAlLCAjNjg0OTlkIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2VkOWIzMyAwJSwjY2UwMDU4IDUwJSwjY2UwMDU4IDUwJSwjNjg0OTlkIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZDliMzMgMCUsI2NlMDA1OCA1MCUsI2NlMDA1OCA1MCUsIzY4NDk5ZCAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2VkOWIzMycsIGVuZENvbG9yc3RyPScjNjg0OTlkJyxHcmFkaWVudFR5cGU9MSApO1xuICAgIFxuICAgIH1cbn1cblxuXG4uaG9tZS1jb250ZW50LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5oZWFke1xuICAgICAgICBjb2xvcjogIzQxNDA0MjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MTQwNDI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzc5OTAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0Y1MDA1NztcbiAgICAgICAgY29sb3I6ICM0MTQwNDI7XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNlbnRlci1ib3h7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgIHBhZGRpbmc6MzBweDtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIC5ob3ctaXQtd29ya3Mtd3JhcHBlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTlFRUVBO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBtaW4taGVpZ2h0OjQwMHB4O1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDA7XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgICAgICAudmlkZW8tcHJldmlldy13cmFwcGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAudmlkZW8tcHJldmlld3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGxheS1idXR0b24td3JhcHBlcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDQyO1xuICAgICAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYWJjOWMgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9sLWJhcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAucGxheS1idG57XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7IGNvbG9yOiAjMWFiYzljICFpbXBvcnRhbnQgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWNre1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQyNTY2OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgLmhvdy1pdC13b3Jrcy1kZXNje1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgLnRyeS1pdC13cmFwcGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFOUVFRUE7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIG1pbi1oZWlnaHQ6NDAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yb3d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLnNtcy1wcmV2aWV3LXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTIlO1xuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgLmltZy13cmFwcGVye1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaG91c2UtcHJldmlldy13cmFwcGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAuaW1nLXdyYXBwZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIC50cnktaXQtZGVzY3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW1wb3J0YW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlZDliMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgLm9yZGVyLWhlcmUtd3JhcHBlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTlFRUVBO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAvLyBtaW4taGVpZ2h0OjQwMHB4O1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDA7XG5cbiAgICAgICAgLmJ0bi13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogJGlwYWQpe1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5yb3d7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAub3JkZXItaGVyZS1kZXNje1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6ICRpcGFkKXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGU1Y2FcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50OiBcIlxcZTVjY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4zZW07IC8qIHNhbWUgYXMgcGFkZGluZy1sZWZ0IHNldCBvbiBsaSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjNlbTsgLyogc2FtZSBhcyBwYWRkaW5nLWxlZnQgc2V0IG9uIGxpICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NlMDA1ODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAkaXBhZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojNzc5OTAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJvbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2VkOWIzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbi5jYXJvdXNlbC1maXhlZC1iZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMjVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL3NsaWRlci1iZy5qcGcpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cblxuICAuaXRlbSB7XG4gICAgcGFkZGluZzogMDtcbiAgICAvLyB3aWR0aDogMzAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTs7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // fullscreen$: Observable<boolean>;
        this.title = "YesByOwner";
        this.items = [
            { title: 'Slide 1' },
            { title: 'Slide 2' },
            { title: 'Slide 3' },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.fullscreen$ = this.fullscreenService.fullscreen$;
        console.log(this.sidenav);
    };
    HomeComponent.prototype.addSlide = function () {
        this.items.push({
            title: "Slide 4"
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], HomeComponent.prototype, "sidenav", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-upload/image-upload.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-upload></app-upload>\n"

/***/ }),

/***/ "./src/app/image-upload/image-upload.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-drop-zone {\n  border: dotted 3px lightgray; }\n\n.nv-file-over {\n  border: dotted 3px red; }\n\n/* Default class applied to drop zones on over */\n\n.another-file-over-class {\n  border: dotted 3px green; }\n\nhtml, body {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFnQiw2QkFBNEIsRUFBSTs7QUFDaEQ7RUFBZ0IsdUJBQXNCLEVBQUk7O0FBQUEsaURBQWlEOztBQUMzRjtFQUEyQix5QkFBd0IsRUFBSTs7QUFFdkQ7RUFBYSxhQUFZLEVBQUkiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRyb3Atem9uZSB7IGJvcmRlcjogZG90dGVkIDNweCBsaWdodGdyYXk7IH1cbi5udi1maWxlLW92ZXIgeyBib3JkZXI6IGRvdHRlZCAzcHggcmVkOyB9IC8qIERlZmF1bHQgY2xhc3MgYXBwbGllZCB0byBkcm9wIHpvbmVzIG9uIG92ZXIgKi9cbi5hbm90aGVyLWZpbGUtb3Zlci1jbGFzcyB7IGJvcmRlcjogZG90dGVkIDNweCBncmVlbjsgfVxuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9Il19 */"

/***/ }),

/***/ "./src/app/image-upload/image-upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-upload/image-upload.component.ts ***!
  \********************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var URL = 'http://127.0.0.1:8080/api/upload/files';
// const URL = 'http://127.0.0.1:8080/api/file';
var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: URL, itemAlias: 'file' });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
    };
    ImageUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ImageUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ImageUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-upload',
            template: __webpack_require__(/*! ./image-upload.component.html */ "./src/app/image-upload/image-upload.component.html"),
            styles: [__webpack_require__(/*! ./image-upload.component.scss */ "./src/app/image-upload/image-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter; }\nbody {\n  margin: 2em; }\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia; }\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto; }\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVTtFQUNWLDBDQUF5QztFQUN6QyxxQkFBb0IsRUFDckI7QUFDRDtFQUNFLFlBQVcsRUFDWjtBQUNEO0VBQ0UsZUFBYztFQUNkLDhCQUE2QixFQUM5QjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGFBQVksRUFDYjtBQUNEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGFBQVksRUFDYjtBQUNEO0VBQ0UsWUFBVztFQUNYLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuYm9keSB7XG4gIG1hcmdpbjogMmVtO1xufVxuYm9keSwgaW5wdXRbdGV4dF0sIGJ1dHRvbiB7XG4gIGNvbG9yOiBjcmltc29uO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cblxuYnV0dG9uLmNsZWFyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5idXR0b24uY2xlYXIge1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/paper-google-place.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/paper-google-place.directive.ts ***!
  \*************************************************/
/*! exports provided: PaperGooglePlaceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperGooglePlaceDirective", function() { return PaperGooglePlaceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaperGooglePlaceDirective = /** @class */ (function () {
    function PaperGooglePlaceDirective(elRef) {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //elRef will get a reference to the element where
        //the directive is placed
        this.element = elRef.nativeElement;
    }
    PaperGooglePlaceDirective.prototype.getFormattedAddress = function (place) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    PaperGooglePlaceDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        //Event listener to monitor place changes in the input
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //Emit the new address object for the updated place
            _this.onSelect.emit(_this.getFormattedAddress(autocomplete.getPlace()));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaperGooglePlaceDirective.prototype, "onSelect", void 0);
    PaperGooglePlaceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[app-paper-google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PaperGooglePlaceDirective);
    return PaperGooglePlaceDirective;
}());



/***/ }),

/***/ "./src/app/seller-login/seller-login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/seller-login/seller-login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container >\n    <app-sidenav></app-sidenav>\n    \n    <div class=\"content-wrapper\">\n       <app-header></app-header>\n    </div>  \n\n\n\n<div class=\"cmp-wrapper\">\n\n\n\n  <div class=\"section-header\">\n    <div class=\"header-text\">Login</div>\n    <hr>\n  </div>\n  \n  <mat-card class=\"paper-form-container\">\n\n    <form class=\"paper-form\" [formGroup]=\"paperForm\" (ngSubmit)=\"onSubmit()\" >   \n  \n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"username\" placeholder=\"Email\" \n            [errorStateMatcher]=\"matcher\" >\n            <!-- <mat-hint>Your Email ID will be your USERNAME</mat-hint> -->\n  \n            <mat-error *ngIf=\"paperForm.hasError('email', 'username') && !paperForm.hasError('required', 'username')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"paperForm.hasError('required')\">\n              Email is required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"password\" placeholder=\"Password\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'password')\">\n              Password is required\n            </mat-error>\n          </mat-form-field>\n\n          \n          <button type=\"submit\" [disabled]=\"!paperForm.valid\" mat-flat-button color=\"accent\">Submit</button>\n\n\n\n    </form>\n\n  </mat-card>\n\n  \n    </div>\n\n    <app-footer></app-footer>\n  </mat-sidenav-container>\n\n    \n    \n    "

/***/ }),

/***/ "./src/app/seller-login/seller-login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/seller-login/seller-login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci1sb2dpbi9zZWxsZXItbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/seller-login/seller-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/seller-login/seller-login.component.ts ***!
  \********************************************************/
/*! exports provided: SellerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerLoginComponent", function() { return SellerLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/paper-form-error-state-matcher */ "./src/app/util/paper-form-error-state-matcher.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SellerLoginComponent = /** @class */ (function () {
    function SellerLoginComponent(appService, route, router) {
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]();
        this.matcher = new _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_2__["PaperFormErrorStateMatcher"]();
        this.paperForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    SellerLoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.appService.logout();
    };
    SellerLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // TODO: Use EventEmitter with form value
        console.warn(this.paperForm.value);
        var data = this.paperForm.value;
        this.appService.login(data).subscribe(function (result) {
            console.log(result);
            _this.router.navigate(['dashboard']);
        }, function (error) {
            console.log(error);
        });
    };
    SellerLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-login',
            template: __webpack_require__(/*! ./seller-login.component.html */ "./src/app/seller-login/seller-login.component.html"),
            styles: [__webpack_require__(/*! ./seller-login.component.scss */ "./src/app/seller-login/seller-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SellerLoginComponent);
    return SellerLoginComponent;
}());



/***/ }),

/***/ "./src/app/seller-signup/seller-signup.component.html":
/*!************************************************************!*\
  !*** ./src/app/seller-signup/seller-signup.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container >\n  <app-sidenav></app-sidenav>\n  \n  <div class=\"content-wrapper\">\n     <app-header></app-header>\n  </div>  \n  \n<div class=\"cmp-wrapper\">\n\n  <div class=\"section-header\">\n    <div class=\"header-text\">Signup</div>\n    <hr>\n  </div>\n  \n  <mat-card class=\"paper-form-container\">\n\n    <form class=\"paper-form\" [formGroup]=\"paperForm\" (ngSubmit)=\"onSubmit()\" >\n        <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"firstName\" placeholder=\"First Name\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'firstName')\">\n              First Name is required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"lastName\" placeholder=\"Last Name\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'lastName')\">\n              Last Name is required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width input-container\">\n              <input matInput  app-paper-google-place\n              class=\"google-place-input\"\n              formControlName=\"address\" placeholder=\"Address\" \n              [errorStateMatcher]=\"matcher\" >\n              <!-- Displaying the contents of the address object received from our event emitter -->\n              <mat-hint>eg: 102 B, 21 Street, Sylvaniya Toledo, OH</mat-hint>\n  \n              <mat-error *ngIf=\"paperForm.hasError('required', 'address')\">\n                <!-- Address is required -->\n              </mat-error>\n            </mat-form-field>\n            <ul style=\"list-style-type: none; height: auto;\">\n                <li *ngFor=\"let key of addrKeys\">\n                  <span style=\"font-weight: bold\">{{key}}</span>: <span>{{addr[key]}}</span>\n                </li>\n              </ul>\n  \n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"username\" placeholder=\"Email\" \n            [errorStateMatcher]=\"matcher\" >\n            <!-- <mat-hint>Your Email ID will be your USERNAME</mat-hint> -->\n  \n            <mat-error *ngIf=\"paperForm.hasError('email', 'username') && !paperForm.hasError('required', 'username')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"paperForm.hasError('required')\">\n              Email is required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"password\" placeholder=\"Password\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'password')\">\n              Password is required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"passwordConfirmation\" placeholder=\"Confirm Password\" \n            [errorStateMatcher]=\"matcherForPassword\" >\n            <mat-error *ngIf=\"paperForm.hasError('notSame')\">\n              Passwords do not match\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"phone\" placeholder=\"Phone\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'phone')\">\n              Phone is required\n            </mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"homePhone\" placeholder=\"Home Phone\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.hasError('required', 'homePhone')\">\n                Home Phone is required\n            </mat-error>\n          </mat-form-field>\n\n          \n         \n\n         \n\n          <!-- <mat-form-field class=\"paper-full-width\">\n            <input matInput \n            formControlName=\"zip\" placeholder=\"Zip\" \n            [errorStateMatcher]=\"matcher\" >\n            <mat-error *ngIf=\"paperForm.controls.zip.hasError('required')\">\n              Zip is required\n            </mat-error>\n          </mat-form-field> -->\n\n\n\n\n\n\n          <button type=\"submit\" [disabled]=\"!paperForm.valid\" mat-flat-button color=\"accent\">Submit</button>\n\n\n\n    </form>\n\n  </mat-card>\n\n    </div>\n\n    <app-footer></app-footer>\n  </mat-sidenav-container>\n\n    \n    \n    "

/***/ }),

/***/ "./src/app/seller-signup/seller-signup.component.scss":
/*!************************************************************!*\
  !*** ./src/app/seller-signup/seller-signup.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci1zaWdudXAvc2VsbGVyLXNpZ251cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/seller-signup/seller-signup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/seller-signup/seller-signup.component.ts ***!
  \**********************************************************/
/*! exports provided: SellerSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerSignupComponent", function() { return SellerSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/paper-form-error-state-matcher */ "./src/app/util/paper-form-error-state-matcher.ts");
/* harmony import */ var _util_password_match_error_state_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/password-match-error-state-matcher */ "./src/app/util/password-match-error-state-matcher.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SellerSignupComponent = /** @class */ (function () {
    function SellerSignupComponent(zone, appService, route, router) {
        this.zone = zone;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]();
        this.matcher = new _util_paper_form_error_state_matcher__WEBPACK_IMPORTED_MODULE_2__["PaperFormErrorStateMatcher"]();
        this.matcherForPassword = new _util_password_match_error_state_matcher__WEBPACK_IMPORTED_MODULE_3__["PasswordMatchErrorStateMatcher"]();
        this.paperForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            passwordConfirmation: [''],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            homePhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        }, { validator: this.checkPasswords });
    }
    //Method to be invoked everytime we receive a new instance 
    //of the address object from the onSelect event emitter.
    SellerSignupComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        //We are wrapping this in a NgZone to reflect the changes
        //to the object in the DOM.
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
            console.log(_this.addr);
            console.log(_this.addrKeys);
        });
    };
    SellerSignupComponent.prototype.ngOnInit = function () {
        // reset login status
        this.appService.logout();
    };
    SellerSignupComponent.prototype.onSubmit = function () {
        var _this = this;
        // TODO: Use EventEmitter with form value
        console.warn(this.paperForm.value);
        var data = this.paperForm.value;
        this.appService.signup(data)
            .subscribe(function (result) {
            console.log(result);
            _this.router.navigate(['dashboard']);
        }, function (error) {
            console.log(error);
        });
    };
    SellerSignupComponent.prototype.checkPasswords = function (group) {
        // console.log(group)
        var pass = group.controls.password.value;
        var confirmPass = group.controls.passwordConfirmation.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    SellerSignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-signup',
            template: __webpack_require__(/*! ./seller-signup.component.html */ "./src/app/seller-signup/seller-signup.component.html"),
            styles: [__webpack_require__(/*! ./seller-signup.component.scss */ "./src/app/seller-signup/seller-signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SellerSignupComponent);
    return SellerSignupComponent;
}());



/***/ }),

/***/ "./src/app/sidenav.service.ts":
/*!************************************!*\
  !*** ./src/app/sidenav.service.ts ***!
  \************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavService = /** @class */ (function () {
    function SidenavService() {
    }
    SidenavService.prototype.setSidenav = function (sidenav) {
        this.sidenav = sidenav;
    };
    SidenavService.prototype.open = function () {
        return this.sidenav.open();
    };
    SidenavService.prototype.close = function () {
        return this.sidenav.close();
    };
    SidenavService.prototype.toggle = function () {
        this.sidenav.toggle();
    };
    SidenavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidenavService);
    return SidenavService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav #sidenav mode=\"push\" class=\"app-sidenav\">\n    <mat-toolbar color=\"primary\" style=\"background: transparent;\">\n      <!--future svg to go here-->\n      <span class=\"toolbar-filler\"></span>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" class=\"mat-icon-button sidenav-toggle-button\" [hidden]=\"!sidenav.opened\">\n        <mat-icon aria-label=\"Menu\" class=\"material-icons\">close</mat-icon>\n      </button>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/comp1']\" (click)=\"sidenav.toggle()\">\n        <span class=\"title\" mat-line>How It Works</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/comp1']\" (click)=\"sidenav.toggle()\">\n        <span class=\"title\" mat-line>Try It</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/signup']\" (click)=\"sidenav.toggle()\">\n        <span class=\"title\" mat-line>Order Here</span>\n      </a>\n      <a mat-list-item class=\"sidenav-link\" [routerLink]=\"['/login']\" (click)=\"sidenav.toggle()\">\n        <span class=\"title\" mat-line>Login</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav,\nmat-sidenav.mat-locked-open,\nmat-sidenav.mat-closed.mat-locked-open-add-active {\n  min-width: 200px !important;\n  width: 85vw !important;\n  max-width: 400px !important; }\n\n.app-sidenav {\n  background: #2c3e50;\n  z-index: 100; }\n\n.app-sidenav .sidenav-link {\n    border-bottom: 1px solid #354b60; }\n\n.app-sidenav .sidenav-link .title {\n      font-size: 14px !important;\n      letter-spacing: 1px !important;\n      font-weight: 500 !important;\n      text-transform: uppercase;\n      color: #1abc9c; }\n\n.app-sidenav .sidenav-link:first-child {\n      border-top: 1px solid #354b60; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7RUFHSSw0QkFBMkI7RUFDM0IsdUJBQXNCO0VBQ3RCLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUVJLG9CQUFtQjtFQUNuQixhQUFXLEVBZ0JkOztBQW5CRDtJQWFRLGlDQUE2RCxFQUtoRTs7QUFsQkw7TUFPWSwyQkFBMEI7TUFDMUIsK0JBQThCO01BQzlCLDRCQUEyQjtNQUMzQiwwQkFBeUI7TUFDekIsZUFBYyxFQUNqQjs7QUFaVDtNQWVZLDhCQUEwRCxFQUU3RCIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3NldHRpbmdzJztcblxubWF0LXNpZGVuYXYsIFxubWF0LXNpZGVuYXYubWF0LWxvY2tlZC1vcGVuLCBcbm1hdC1zaWRlbmF2Lm1hdC1jbG9zZWQubWF0LWxvY2tlZC1vcGVuLWFkZC1hY3RpdmUge1xuICAgIG1pbi13aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogODV2dyAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcbn0gXG5cbi5hcHAtc2lkZW5hdntcbiAgICAvLyBAaW5jbHVkZSBiZy1ncmFkaWVudC10d28oMTgwZGVnLCM4QzgsICNlZDliMzMpO1xuICAgIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gICAgei1pbmRleDoxMDA7XG4gICBcbiAgICAuc2lkZW5hdi1saW5re1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogIzFhYmM5YztcbiAgICAgICAgfVxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRlbigkY29sb3I6ICMyYzNlNTAsICRhbW91bnQ6IDUpO1xuICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0ZW4oJGNvbG9yOiAjMmMzZTUwLCAkYW1vdW50OiA1KTtcblxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav.service */ "./src/app/sidenav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(sidenavService) {
        this.sidenavService = sidenavService;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.sidenavService.setSidenav(this.sidenav);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\" #file style=\"display: none\" (change)=\"onFilesAdded()\" multiple />\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\n  <h1 mat-dialog-title>Upload Files</h1>\n  <div>\n    <button [disabled]=\"uploading || uploadSuccessful\" mat-raised-button color=\"primary\" class=\"add-files-btn\" (click)=\"addFiles()\">\n      Add Files\n    </button>\n  </div>\n\n  <!-- This is the content of the dialog, containing a list of the files to upload -->\n  <mat-dialog-content fxFlex>\n    <mat-list>\n      <mat-list-item *ngFor=\"let file of files\">\n        <h4 mat-line>{{file.name}}</h4>\n        <mat-progress-bar *ngIf=\"progress\" mode=\"determinate\" [value]=\"progress[file.name].progress | async\"></mat-progress-bar>\n      </mat-list-item>\n    </mat-list>\n  </mat-dialog-content>\n\n  <!-- This are the actions of the dialog, containing the primary and the cancel button-->\n  <mat-dialog-actions class=\"actions\">\n    <button *ngIf=\"showCancelButton\" mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" [disabled]=\"!canBeClosed\" (click)=\"closeDialog()\">{{primaryButtonText}}</button>\n  </mat-dialog-actions>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-files-btn {\n  float: right; }\n\n:host {\n  height: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n\n.actions {\n  justify-content: flex-end; }\n\n.container {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1dvcmtzcGFjZS9wcm9qZWN0L3llc2J5b3duZXIveWVzYnlvd25lci13ZWItYXBwL3NyYy9hcHAvdXBsb2FkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLFFBQU87RUFDUCx1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtZmlsZXMtYnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, uploadService) {
        this.dialogRef = dialogRef;
        this.uploadService = uploadService;
        this.files = new Set();
        this.canBeClosed = true;
        this.primaryButtonText = 'Upload';
        this.showCancelButton = true;
        this.uploading = false;
        this.uploadSuccessful = false;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    DialogComponent.prototype.onFilesAdded = function () {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    };
    DialogComponent.prototype.closeDialog = function () {
        var _this = this;
        // if everything was uploaded already, just close the dialog
        if (this.uploadSuccessful) {
            return this.dialogRef.close(this.uploadedFileList);
        }
        // set the component state to "uploading"
        this.uploading = true;
        // start the upload and save the progress map
        this.progress = this.uploadService.upload(this.files);
        // convert the progress map into an array
        var allProgressObservables = [];
        var allCompleteObservables = [];
        for (var key in this.progress) {
            allProgressObservables.push(this.progress[key].progress);
            allCompleteObservables.push(this.progress[key].complete);
        }
        // Adjust the state variables
        // The OK-button should have the text "Finish" now
        this.primaryButtonText = 'Finish';
        // The dialog should not be closed while uploading
        this.canBeClosed = false;
        this.dialogRef.disableClose = true;
        // Hide the cancel-button
        this.showCancelButton = false;
        // When all progress-observables are completed...
        Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(allProgressObservables).subscribe(function (end) {
            // ... the dialog can be closed again...
            _this.canBeClosed = true;
            _this.dialogRef.disableClose = false;
            // ... the upload was successful...
            _this.uploadSuccessful = true;
            // ... and the component is no longer uploading
            _this.uploading = false;
        });
        // When all complete-observables are completed...
        Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(allCompleteObservables).subscribe(function (files) {
            _this.uploadedFileList = files;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "file", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/upload/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/upload/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button (click)=\"openUploadDialog()\">Upload</button>"

/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(dialog, uploadService) {
        this.dialog = dialog;
        this.uploadService = uploadService;
        this.onUploadComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadComponent.prototype.openUploadDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], { width: '50%', height: '50%' });
        this.dialogRef.afterClosed().subscribe(function (data) {
            console.log('data');
            console.log(data);
            var list = Array.from(data, function (x) {
                return {
                    url: 'http://127.0.0.1:8080/file/' + x.filename,
                    title: '',
                    altText: '',
                    thumbnailUrl: 'http://127.0.0.1:8080/file/' + x.filename
                };
            });
            _this.onUploadComplete.emit(list);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UploadComponent.prototype, "onUploadComplete", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"]],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [_upload_service__WEBPACK_IMPORTED_MODULE_7__["UploadService"]]
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = 'http://127.0.0.1:8080/api/upload/file';
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (files) {
        var _this = this;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            // create a new multipart-form for every file
            var formData = new FormData();
            formData.append('file', file, file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', url, formData, {
                reportProgress: true
            });
            // create a new progress-subject for every file
            var progress = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            var complete = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            // send the http-request and subscribe for progress-updates
            _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    // calculate the progress percentage
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    complete.next(event.body);
                    complete.complete();
                    progress.complete();
                }
            });
            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable(),
                complete: complete.asObservable()
            };
        });
        // return the map of progress.observables
        return status;
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/util/auth.gaurd.ts":
/*!************************************!*\
  !*** ./src/app/util/auth.gaurd.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/util/error.interceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/util/error.interceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(appService) {
        this.appService = appService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) {
            if (res.status === 401) {
                // auto logout if 401 response returned from api
                _this.appService.logout();
                location.reload(true);
            }
            var error = res.error.message || res.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/util/jwt.interceptor.ts":
/*!*****************************************!*\
  !*** ./src/app/util/jwt.interceptor.ts ***!
  \*****************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            request = request.clone({
                setHeaders: {
                    // Authorization: `Bearer ${token}`
                    Authorization: "" + token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/util/paper-form-error-state-matcher.ts":
/*!********************************************************!*\
  !*** ./src/app/util/paper-form-error-state-matcher.ts ***!
  \********************************************************/
/*! exports provided: PaperFormErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperFormErrorStateMatcher", function() { return PaperFormErrorStateMatcher; });
/** Error when invalid control is dirty, touched, or submitted. */
var PaperFormErrorStateMatcher = /** @class */ (function () {
    function PaperFormErrorStateMatcher() {
    }
    PaperFormErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return PaperFormErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/util/password-match-error-state-matcher.ts":
/*!************************************************************!*\
  !*** ./src/app/util/password-match-error-state-matcher.ts ***!
  \************************************************************/
/*! exports provided: PasswordMatchErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatchErrorStateMatcher", function() { return PasswordMatchErrorStateMatcher; });
var PasswordMatchErrorStateMatcher = /** @class */ (function () {
    function PasswordMatchErrorStateMatcher() {
    }
    PasswordMatchErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.hasError('notSame') && (control.dirty || control.touched || isSubmitted));
        return (invalidParent);
    };
    return PasswordMatchErrorStateMatcher;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // apiUrl: 'http://127.0.0.1:8080'
    apiUrl: 'https://yesbyowner.herokuapp.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Workspace/project/yesbyowner/yesbyowner-web-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map