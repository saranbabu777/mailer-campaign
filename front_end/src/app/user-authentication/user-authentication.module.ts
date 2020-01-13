import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthentication } from './user-authentication';
import { UserAuthenticationService } from './user-authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ UserAuthentication, UserAuthenticationService ]
})
export class UserAuthenticationModule { }