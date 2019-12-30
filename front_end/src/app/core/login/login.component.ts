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
    this.userLogin.emit();
  }

}
