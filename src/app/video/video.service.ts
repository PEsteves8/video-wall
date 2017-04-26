import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Video } from './video.model';

import { LoginService } from '../login/login.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';


@Injectable()
export class VideoService {

    constructor(
        private http: Http,
        private router: Router,
        private loginService: LoginService,
        private af: AngularFire
    ) {
        let data = this.loginService.getSessionInfo();

        this.videoListObservable = this.af.database.list('/videos', {
            query: {
                orderByChild: "id",
                startAt: this.stepSubject,
                limitToFirst: 10
            }
        });
    }

    stepSubject = new Subject();

    // Keeps a reference to the list observable which is shared amongst components for rating logic
    videoListObservable: FirebaseListObservable<Array<Video>>;

    // Prevents unnecessary updates on certain events (pe when changing video rating)
    disableUpdates: boolean = false;

    /**
     * An array that keeps the list of the last opened videos to show at a side bar
     */
    lastOpenedVideos: Array<Video> = [];

    /**
   * When a video detail opens, that video is added to the list of recently opened videos
   * @param video - The video object that was just opened
   */
    addLastOpenedVideo(video: Video) {
        // If there is a repeated video, put it on top of the list
        for (let i = 0; i < this.lastOpenedVideos.length; i++) {
            if (this.lastOpenedVideos[i].id === video.id) {
                let removed = this.lastOpenedVideos.splice(i, 1);
                this.lastOpenedVideos.unshift(removed[0]);
                return;
            }
        }

        // If the list hasn't yet have 3 element, simply include the item, otherwise add the item while removing the last one
        if (this.lastOpenedVideos.length < 3) {
            this.lastOpenedVideos.unshift(video);
        } else if (this.lastOpenedVideos.length === 3) {
            this.lastOpenedVideos.splice(2);
            this.lastOpenedVideos.unshift(video);
        }
    }

    /** 
   * Get firebaseObject of one video
   * @param key - the key of the item that will be retrieved
   */
    getVideoDetails(key: string): FirebaseObjectObservable<Video> {
        return this.af.database.object(`/videos/${key}`);
    }

}