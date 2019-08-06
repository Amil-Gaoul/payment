import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const SlideInOutAnimation: AnimationTriggerMetadata[] = [
    trigger('slideInOut', [
        state('in', style({
            opacity: 1,
            overflow: 'visible',
            height: '*'
        })),
        transition('void => *', [
            style({
                opacity: '0',
                overflow: 'hidden',
                height: '0px'
            }),
            animate('400ms ease-in-out')
        ]),
        transition('* => void', [
            animate('400ms ease-in-out'),
            style({
                opacity: '0',
                overflow: 'hidden',
                height: '0px'
            })
        ])
    ])
];
