"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var login_routing_1 = require("./login.routing");
var login_component_1 = require("./login.component");
var login_recover_component_1 = require("./login-recover.component");
var forms_1 = require("@angular/forms");
var npLoginModule = (function () {
    function npLoginModule() {
    }
    return npLoginModule;
}());
npLoginModule = __decorate([
    core_1.NgModule({
        imports: [login_routing_1.npLoginRouting, forms_1.FormsModule, common_1.CommonModule],
        declarations: [login_component_1.npLoginComponent, login_recover_component_1.npLoginRecoverComponent],
        exports: [login_component_1.npLoginComponent, login_recover_component_1.npLoginRecoverComponent]
    })
], npLoginModule);
exports.npLoginModule = npLoginModule;
//# sourceMappingURL=login.module.js.map