import { Component, Input } from '@angular/core';
import { Video } from '../video.model';
import { VideoService } from '../video.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'video-card',
    templateUrl: './video-card.component.html'
})
export class VideoCardComponent {

    constructor(
        private videoService: VideoService,
        private toastsManager: ToastsManager
        ) { }

    @Input() video: Video;
    @Input() truncateDescription: boolean = false;

    /**
     * Gets the current average rating from the list of ratings of a given video so that it gets properly displayed
     * @param ratings - List of ratings a given video currently has
     */
    getAverageRating(ratings: Array<number>) {
        var total = 0;
        for (var i = 0; i < ratings.length; i++) {
            total += ratings[i];
        }
        var avg = total / ratings.length;

        return avg;
    }

    /**
     * Rates a video
     * @param newRating - The rating to be added
     * @param currentRatings - The current list of ratings of a video
     * @param ratedVideo - Either the video object or an object with a video list and the rated video key
     */
    rateVideo(
        newRating: number,
        currentRatings: Array<number>,
        videoKey: string
    ) {
        this.videoService.disableUpdates = true;
        let updatedRatings = [...currentRatings, newRating];
    
       this.videoService.videoListObservable.update(videoKey, { ratings: updatedRatings })
        .then(() => {
            this.toastsManager.success("Rating added");
            this.videoService.disableUpdates = false;
        });
        
    }

}

