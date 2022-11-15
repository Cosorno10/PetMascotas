import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserLogin = { username: '', password: '' }

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userSrv.login(this.user).subscribe(res => {
      window.location.href = '/dashboard';
      window.localStorage.setItem('user', JSON.stringify(res));
    });
  }

}
