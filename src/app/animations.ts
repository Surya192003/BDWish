import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [ // Wildcard for all routes
    style({ opacity: 0, transform: 'translateY(-50%)' }), // Start with fully transparent and shifted position
    animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })) // Final state with opacity fully visible and back to original position
  ])
]);
