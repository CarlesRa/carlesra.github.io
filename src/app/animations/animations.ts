import { animate, animation, style } from "@angular/animations";

export const fadeAnimation = animation([
    style({ opacity: '{{ startOpacity }}' }),
    animate('{{ time }}', style({ opacity: '{{ endOpacity }}'}))
]);