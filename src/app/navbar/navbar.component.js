"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("../../app.component");
var login_service_1 = require("../../login/login.service");
var mkdevNavbarComponent = (function () {
    function mkdevNavbarComponent(_router, _npLoginService) {
        this._router = _router;
        this._npLoginService = _npLoginService;
        this.isCollapsed = true;
    }
    mkdevNavbarComponent.prototype.isLoggedIn = function () {
        return this._npLoginService.isLoggedIn();
    };
    mkdevNavbarComponent.prototype.isInRole = function (roles) {
        return this._npLoginService.isInRole(roles);
    };
    mkdevNavbarComponent.prototype.doLogOut = function () {
        this._npLoginService.doLogout();
    };
    mkdevNavbarComponent.prototype.getVersion = function () {
        return app_component_1.getAppVersion();
    };
    return mkdevNavbarComponent;
}());
mkdevNavbarComponent = __decorate([
    core_1.Component({
        selector: 'np-navbar',
        templateUrl: './navbar.html?appv=' + app_component_1.getAppVersion()
    }),
    __metadata("design:paramtypes", [router_1.Router,
        login_service_1.npLoginService])
], mkdevNavbarComponent);
exports.mkdevNavbarComponent = mkdevNavbarComponent;
//# sourceMappingURL=navbar.component.js.map