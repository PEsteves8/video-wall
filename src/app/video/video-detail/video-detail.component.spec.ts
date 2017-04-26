import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';

import { NgModule, DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { VideoListingComponent } from '../video-listing/video-listing.component';
import { VideoDetailComponent } from './video-detail.component';
import { VideoService } from '../video.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LimitToPipe } from '../../helpers/limit-to.pipe';
import { LoginService } from '../../login/login.service';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

describe('VideoDetailComponent', () => {
   let comp: VideoDetailComponent;
  let fixture: ComponentFixture<VideoDetailComponent>;

  let spy: jasmine.Spy;
  let de: DebugElement;
  var el: HTMLElement;
  let videoService: VideoService; // the actually injected service

 beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [CommonModule, NgbModule, InfiniteScrollModule, RouterTestingModule, HttpModule, ToastModule],
      declarations: [VideoListingComponent, VideoDetailComponent, LimitToPipe],
      providers: [ VideoService, LoginService, ToastsManager, ToastOptions]
    });

    fixture = TestBed.createComponent(VideoDetailComponent);
    comp = fixture.componentInstance;
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
 
});
