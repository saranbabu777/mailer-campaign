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
  public error;

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
    this.userService.login(this.username).then(response => {
      if(response['password'] == this.password){
        this.router.navigate(['/dashboard']);
      }else{
        this.error = true;
      }
    }).catch(() => {
      this.error = true;
    })
    
  }

}
