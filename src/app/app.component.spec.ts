import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { VideoModule } from './video/video.module';

import { CustomToastOptionsProvider } from './global-toast-options';
import { requestOptionsProvider } from './default-request-options.service';



describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let componentLoginService: LoginService;
  let loginService: LoginService; // the TestBed injected service

  let de: DebugElement;  // the DebugElement with the welcome message
  let el: HTMLElement; // the DOM element with the welcome message

  let loginServiceStub: {
    session: { username: string }
  };


  beforeEach(async(() => {
    loginServiceStub = {
      session: {
        username: 'Test Username'
      }
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LoginModule,
        FormsModule,
        VideoModule,
        ToastModule.forRoot(),
        NgbModule.forRoot()
      ],
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      providers: [{ provide: LoginService, useValue: loginServiceStub }]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // UserService actually injected into the component
    loginService = fixture.debugElement.injector.get(LoginService);
    componentLoginService = loginService;
    // UserService from the root injector
    loginService = TestBed.get(LoginService);

    de = fixture.debugElement.query(By.css('.get-signed-in-as'));
    el = de.nativeElement;
  }));

  it('should create the app', async(() => {
    fixture.detectChanges();
    expect(comp).toBeTruthy();
  }));

  it('should indicate the signed in message', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Signed in as', '"Signed in as ..."');
    expect(content).toContain('Test Username', 'expected name');
  });

});
