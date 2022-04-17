import {
    style,
    animate,
    animation,
    keyframes,
    trigger,
    state,
    transition,
    group,
    useAnimation
  } from "@angular/animations";



export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('300ms ease-in', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
  ])
]);

export const test = trigger('popOverState', [
  transition(':enter', [
    style({opacity: 0,border:"none"}),
    animate('400ms ease-in', style({opacity: 1}))
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({opacity: 0.5,border:"2px solid #161d4b"}))
  ])
])


