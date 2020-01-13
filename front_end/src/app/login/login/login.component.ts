import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() userLogin = new EventEmitter();
  public username;
  public password;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLogIn() {
    this.userService.username = this.username;
    const request = {
      username: this.username,
      password: this.password
    };
    this.userService.login(request).then(response => {
      this.router.navigate(['/dashboard']);
    }).catch(() => {
      this.router.navigate(['/dashboard']);
    })
    
  }

}
