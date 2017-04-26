import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AngularFire, FirebaseListObservable, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {

    constructor(
        private http: Http,
        private router: Router,
        private toastsManager: ToastsManager,
        private af: AngularFire
    ) { }

    /**
     * Used to clear in memory object with user data
     */
    clearSession() {
        localStorage.removeItem('videolistingsprj');
    }

    getSessionInfo(): { email: string, sessionId: string } {
        let data = JSON.parse(localStorage.getItem('videolistingsprj'));
        return data ? data : '';
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('videolistingsprj') !== null;
    }

    login(type: string, loginData?: { email: string, password: string }): firebase.Promise<FirebaseAuthState> {
        if (type === 'password') {
            return this.af.auth.login(loginData, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            });
        } else if (type === 'google') {
            return this.af.auth.login({
                provider: AuthProviders.Google,
                method: AuthMethods.Popup
            });
        }
    }


    logout(): void {
        let data = JSON.parse(localStorage.getItem('videolistingsprj'));

        this.af.auth.logout().then(() => {
            this.clearSession();
            this.router.navigate(['login']);
        })
            .catch((error) => { this.toastsManager.error(error) });


    }

}