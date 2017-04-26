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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var alert_service_1 = require("../core/alert/alert.service");
var npLoginService = (function () {
    function npLoginService(_router, _http, _mkdevAlertService) {
        this._router = _router;
        this._http = _http;
        this._mkdevAlertService = _mkdevAlertService;
    }
    npLoginService.prototype.doLogin = function (message) {
        var _this = this;
        localStorage.removeItem('np.explorer.data');
        this._mkdevAlertService.clearAll();
        this._http.post('api/account/login', JSON.stringify(message))
            .map(function (response) { return response.json(); })
            .subscribe(function (value) {
            var msg = value;
            if (msg.status === true) {
                console.log("login successful");
                localStorage.setItem('np.explorer.data', JSON.stringify({ email: msg.email, roles: msg.roles }));
                _this._router.navigate(['/analysis']);
            }
            else {
                _this._mkdevAlertService.addAlert('danger', msg.message, true, 5000);
            }
        }, function (error) {
            if (typeof (error.status) !== 'undefined') {
                if (error.status === 401) {
                    _this._mkdevAlertService.addAlert('danger', 'Invalid credentials', true, 5000);
                }
                else if (error.status === 403) {
                    _this._mkdevAlertService.addAlert('danger', 'Account is locked', true, 5000);
                }
                else {
                    _this._mkdevAlertService.addAlert('danger', error.status, true, 5000);
                }
            }
            else {
                _this._mkdevAlertService.addAlert('danger', 'Unable to authenticate', true, 5000);
            }
        }, function () {
            console.log('doLogin completed');
        });
    };
    npLoginService.prototype.doLogout = function () {
        this._http.get('api/account/logout').subscribe();
        localStorage.removeItem('np.explorer.data');
        this._router.navigate(['/login']);
        console.log('doLogout completed');
    };
    npLoginService.prototype.doLoggedIn = function () {
        return this._http.get('api/account/loggedIn').toPromise().then(function (response) {
            var msg = response.json();
            if (msg.status === true) {
                return true;
            }
            else {
                localStorage.removeItem('np.explorer.data');
                return false;
            }
        }, function (error) {
            return false;
        });
    };
    npLoginService.prototype.isLoggedIn = function () {
        return (localStorage.getItem('np.explorer.data') !== null);
    };
    npLoginService.prototype.isInRole = function (roles) {
        var data = JSON.parse(localStorage.getItem('np.explorer.data'));
        if (data !== null && typeof (data.roles) === 'object' && Array.isArray(data.roles)) {
            for (var i = 0; i < data.roles.length; i++) {
                for (var j = 0; j < roles.length; j++) {
                    if (data.roles[i] === roles[j]) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    npLoginService.prototype.getEmail = function () {
        var data = JSON.parse(localStorage.getItem('np.explorer.data'));
        if (data !== null && typeof (data.email) === 'string') {
            return data.email;
        }
        return '';
    };
    npLoginService.prototype.doRecover = function (message) {
        return this._http.post('api/account/recover', JSON.stringify(message)).map(function (response) { return response.json(); });
    };
    npLoginService.prototype.doReset = function (message) {
        return this._http.post('api/account/reset', JSON.stringify(message)).map(function (response) { return response.json(); });
    };
    return npLoginService;
}());
npLoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        alert_service_1.mkdevAlertService])
], npLoginService);
exports.npLoginService = npLoginService;
//# sourceMappingURL=login.service.js.map