import { NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideoListingComponent } from './video-listing/video-listing.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoService } from './video.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LimitToPipe } from '../helpers/limit-to.pipe';
import { SafePipe } from '../helpers/safe.pipe';
import { MasonryModule } from 'angular2-masonry';


@NgModule({
    imports: [CommonModule, NgbModule, InfiniteScrollModule, RouterModule, MasonryModule],
    declarations: [VideoListingComponent, VideoDetailComponent, VideoCardComponent, LimitToPipe, SafePipe],
    providers: [VideoService],
    exports: [VideoListingComponent, VideoDetailComponent]
})
export class VideoModule {}