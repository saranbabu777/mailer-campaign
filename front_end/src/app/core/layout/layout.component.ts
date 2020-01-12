import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public loggedIn: boolean;
  public username;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    const user = localStorage.getItem('username');
    if(user){
      this.loggedIn = true;
      this.userService.username = user;
      this.username = user;
    }
  }

  onLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('users');
    this.loggedIn = false;
    this.userService.loggedIn = false;
    this.userService.username = '';
    this.router.navigate(['/login']);
  }

}
