import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [LoginRouting, FormsModule, CommonModule],
    declarations: [LoginComponent],
    providers: [LoginService],
    exports: [LoginComponent]
})
export class LoginModule { }