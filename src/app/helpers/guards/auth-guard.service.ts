import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import { AngularFire } from 'angularfire2';


/**
 * Verifies that user is loggedIn before activating components for auth'd users
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private af: AngularFire, private router: Router) {}

 canActivate() {
    return this.af.auth.map((auth) => {
      
        if (!auth) {
          this.router.navigateByUrl('login');
          return false;
        }
        return true;
    }).take(1);
  }
}

