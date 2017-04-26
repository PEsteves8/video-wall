"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var login_recover_component_1 = require("./login-recover.component");
var npLoginRoutes = [
    {
        path: '',
        component: login_component_1.npLoginComponent
    },
    {
        path: 'recover',
        component: login_recover_component_1.npLoginRecoverComponent
    }
];
exports.npLoginRouting = router_1.RouterModule.forChild(npLoginRoutes);
//# sourceMappingURL=login.routing.js.map