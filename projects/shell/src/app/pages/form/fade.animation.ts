import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const FadeAnimation: AnimationTriggerMetadata[] = [
    trigger('fade', [
        state('fadeIn', style({ opacity: 0 })),
        transition(':enter', [
            style({ opacity: 0 }),
            animate(500, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate(500, style({ opacity: 0 }))
        ])
    ])
];
