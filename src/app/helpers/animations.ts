import { trigger, transition, style, animate, keyframes } from '@angular/animations';

/**
 * Simple fading in and out animation
 */
export function fadeInOut100ms() {
    return trigger('fadeInOut100ms', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(100, style({ opacity: 1 })
            )
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate(20, style({ opacity: 0 })
            )
        ])

    ])
}