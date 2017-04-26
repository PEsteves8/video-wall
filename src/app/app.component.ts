import { Component, ViewContainerRef } from '@angular/core';

import { LoginService } from './login/login.service';
import {AngularFireAuth} from 'angularfire2';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    private loginService: LoginService,
    private auth: AngularFireAuth,
    private toastsManager: ToastsManager,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
     // Required by the ng2-toastr package
       this.toastsManager.setRootViewContainerRef(this.vcr);
       
    if (!localStorage.getItem('videolistingsprj')) { this.loginService.logout()}
  }
  
  getSignedInAs() {
    let data = this.loginService.getSessionInfo();
    return data ? `Signed in as ${data.email}` : '';
    }
}
