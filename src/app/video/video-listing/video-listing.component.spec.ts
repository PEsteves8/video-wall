import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
  import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { VideoListingComponent } from './video-listing.component';
import { VideoDetailComponent } from '../video-detail/video-detail.component';
import { VideoService } from '../video.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LimitToPipe } from '../../helpers/limit-to.pipe';
import { LoginService } from '../../login/login.service';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

describe('VideoListingComponent', () => {
  let component: VideoListingComponent;
  let fixture: ComponentFixture<VideoListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, NgbModule, InfiniteScrollModule, RouterTestingModule, HttpModule, ToastModule],
      declarations: [VideoListingComponent, VideoDetailComponent, LimitToPipe],
      providers: [VideoService, LoginService, ToastsManager, ToastOptions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
