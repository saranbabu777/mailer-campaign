import { Injectable } from '@angular/core';
import { UserService } from '../core/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  canActivate(id: string, data: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // if the current route is public allow with out authentication.
      if (typeof data !== 'undefined' && data.isPublic) {
        return resolve(true);
      }
      if ((data && data.role && this.userService.userRole === data.role) ||
        (!data && this.userService.loggedIn)) {
        return resolve(true);
      } 
      if(!this.userService.loggedIn){
        this.router.navigate(['/login']);
      }
    });
  }

  canActivateChild(id: string, data: any): Promise<boolean> {
    return this.canActivate(id, data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error);
  }
}
