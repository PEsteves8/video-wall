import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { VideoModule } from './video/video.module';

import { CustomToastOptionsProvider } from './config/global-toast-options';
import { requestOptionsProvider } from './config/default-request-options.service';
import { firebaseConfig } from './config/firebase-config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    VideoModule,
    ToastModule.forRoot(),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    CustomToastOptionsProvider,
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
