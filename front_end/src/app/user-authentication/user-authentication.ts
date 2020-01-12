import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

import { UserAuthenticationService } from './user-authentication.service';

@Injectable()
export class UserAuthentication implements CanActivate, CanActivateChild {
  constructor(private userAuthService: UserAuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userAuthService.canActivate(route.params.id, route.data);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userAuthService.canActivateChild(route.params.id, route.data);
  }
}