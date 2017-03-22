import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor( private usersService: UsersService ) { }

  getUsers(){
    this.usersService
      .getUsers()
      .subscribe(res => {
        this.users = res;
      });
  }

  ngOnInit() {
    this.getUsers();
  }

}
