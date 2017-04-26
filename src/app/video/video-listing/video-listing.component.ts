import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { LoginService } from '../../login/login.service';
import { fadeInOut100ms } from '../../helpers/animations';

import 'rxjs/add/operator/toPromise';
import { Subscription } from 'rxjs/Subscription';
import { Video } from '../video.model';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.scss'],
  animations: [fadeInOut100ms()]
})
export class VideoListingComponent implements OnInit, OnDestroy {

  constructor(
    private videoService: VideoService,
    private toastsManager: ToastsManager,

    private route: ActivatedRoute,
    private loginService: LoginService,
    private sanitizer: DomSanitizer

  ) {  }

  /**
   * The currentStartAt from used to set the interval of the videos to be fetched (if the offset is 10 the list will be between 0 and 10)
   */
  currentStartAt: number = 0;
  videos: Array<Video> = [];

  videoListSubscription: Subscription;

  ngOnInit() {

    this.videoListSubscription = this.videoService.videoListObservable.subscribe(value => {

      // Add extra videos to the current list
      if (!this.videoService.disableUpdates) {
        this.videos = [...this.videos, ...value];
      }
    }, error => this.toastsManager.error(error));

    this.videoService.stepSubject.next(this.currentStartAt);

  }

  ngOnDestroy() {
    this.videoListSubscription.unsubscribe();
  }

  /**
   * Updates the current offset which triggers another fetch
   */
  loadMoreVideos() {
    this.currentStartAt += 10;
    this.videoService.stepSubject.next(this.currentStartAt);
  }
}

