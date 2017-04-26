import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const npLoginRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];
export const LoginRouting = RouterModule.forChild(npLoginRoutes);