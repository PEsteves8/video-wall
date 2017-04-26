import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { VideoService } from '../video.service';
import { LoginService } from '../../login/login.service';
import { fadeInOut100ms } from '../../helpers/animations';
import { Video } from '../video.model';
import 'rxjs/add/operator/switchMap';
import { Observable, Subscription } from 'rxjs';
import { FirebaseObjectObservable } from 'angularfire2';



@Component({
  templateUrl: './video-detail.component.html',
  animations: [fadeInOut100ms()]
})
export class VideoDetailComponent implements OnInit, OnDestroy {

  constructor(
    private videoService: VideoService,
    private toastsManager: ToastsManager,
  
    private route: ActivatedRoute,
    private loginService: LoginService,
    private sanitizer: DomSanitizer
  ) { }

  video: Video;

  videoObservable: FirebaseObjectObservable<Video>;
  videoSubscription: Subscription;

  ngOnInit() {

   
    /**
     * Get the query params to access the videoId in the route; use it to fetch the single video
     * Pass in the value to the video property
     * Add the opened video to the array of recently opened videos
     */
    this.route.queryParams
      .subscribe((params: Params) => {
        this.videoObservable = this.videoService.getVideoDetails(params['key']);
      });

    this.videoSubscription = this.videoObservable.subscribe((value: Video) => {
      if (!this.videoService.disableUpdates) {
        this.video = value;
        this.videoService.addLastOpenedVideo(this.video);
      }
    }, error => this.toastsManager.error(error));
  }

  ngOnDestroy() {
    this.videoSubscription.unsubscribe();
  }

}
