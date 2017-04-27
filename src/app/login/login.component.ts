import { Component, ViewContainerRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Md5 } from 'ts-md5/dist/md5'; import { AngularFire, FirebaseListObservable, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
    templateUrl: './login.html',
    styleUrls: ['./login.css']
  })
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private loginService: LoginService,
        private toastsManager: ToastsManager,
        private vcr: ViewContainerRef
    ) { }

    //Model for the login form
    data: { email: string, password: string } = {
        email: 'test@videowall3000.com',
        password: 'password'
    }

    ngOnInit() {
        if (this.loginService.isLoggedIn()) { this.router.navigate(['videos/listings']) }

        //Required by the ng2-toastr package
        this.toastsManager.setRootViewContainerRef(this.vcr);
    }

    /**
     * Logs in passing in a username and an hashed password; navigates to the videos route
     */
    doLogin(type: "password" | "google") {
        let loginData;
        if (type === 'password') {
            loginData = { email: this.data.email, password: this.data.password };
        }

        this.loginService.login(type, loginData)
            .then((value) => {

                if (value.uid) {
                    localStorage.setItem('videolistingsprj', JSON.stringify({ email: value.auth.email, uid: value.uid }));
                    this.router.navigate(['/videos']);
                } else {
                    this.toastsManager.error((value as any).message);
                }

            }, (error) => {
                this.toastsManager.error(error.message);
            });
    }


}