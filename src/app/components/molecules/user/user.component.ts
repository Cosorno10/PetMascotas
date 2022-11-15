import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();
  userList: User[] = [];
  columns = [
    { columnDef: 'name', text: 'Nombre' },
    { columnDef: 'lastname', text: 'Apellido' },
    { columnDef: 'username', text: 'Username' },
    { columnDef: 'phone', text: 'Tel. Usuario' },
  ];
  displayedColumns = ['name', 'lastname', 'username', 'phone'];


  constructor(private userSrv: UserService) {
    this.getUserList();
  }

  ngOnInit(): void {
  }

  getUserList() {
    this.userSrv.get().subscribe(res => {
      this.userList = res;
    })
  }

  submit() {
    this.userSrv.add(this.user).subscribe(res => {
      this.user = new User();
      this.getUserList();
    })
  }

  editUser(e: User) {
    this.user = e
  }
  cleanForm(){
    this.user = new User();
  }
}
