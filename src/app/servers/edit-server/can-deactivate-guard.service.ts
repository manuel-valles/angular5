import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

// How the Component should look
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Guard<Interface> ensure the connection Guard-Component
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
  // This will be called when we try to leave the route
  canDeactivate(component: CanComponentDeactivate, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
      // Here is where we need that connection Guard-Component
      return component.canDeactivate();
    }
}
