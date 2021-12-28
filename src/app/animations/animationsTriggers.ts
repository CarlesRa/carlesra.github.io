import { transition, trigger, useAnimation } from "@angular/animations";
import { fadeAnimation } from "./animations";

export const largeFadeTrigger = trigger('largeFade', [
    transition('void => *', [
        useAnimation(fadeAnimation, {
          params: {
            startOpacity: 0,
            endOpacity: 1,
            time: '1s'
          }
        })
    ])
]);