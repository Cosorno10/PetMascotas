import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile: number = 1;

  constructor() {
    let user = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.profile = user.profile;
   }

  ngOnInit(): void {
  }

  logout() {
    window.location.href = '/';
    window.localStorage.removeItem('user');
  }

}
