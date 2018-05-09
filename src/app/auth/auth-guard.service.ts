import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService){}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // We don't specify the type of result because we know it's a boolean
    return this.authService.isAuthenticated();
  }
}