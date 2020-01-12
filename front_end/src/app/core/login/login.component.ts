import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() userLogin = new EventEmitter();
  public username;
  public password;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogIn() {
    this.userService.username = this.username;
    const request = {
      username: this.username,
      password: this.password
    };
    this.userService.login(request).then(response => {
      this.userLogin.emit();
    }).catch(() => {
      this.userLogin.emit();
    })
    
  }

}
