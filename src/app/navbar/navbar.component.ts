import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html'
})
export class NavbarComponent {
    
    /**
     * Keeps the state of the collapsing navbar
     */
    private isCollapsed = true;

    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }


    isLoggedIn(): boolean {
        return this.loginService.isLoggedIn();
    }

    /**
     * Clear session and redirect to login page
     */
    doLogOut(): void {
        this.loginService.logout();
    }
}