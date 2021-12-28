import { animate, animation, style } from "@angular/animations";

/**
 * Animation to do fadeIn or fadeOut
 */
export const fadeAnimation = animation([
    style({ opacity: '{{ startOpacity }}' }),
    animate('{{ time }}', style({ opacity: '{{ endOpacity }}'}))
]);
