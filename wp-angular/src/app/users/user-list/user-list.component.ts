import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { EmitterService } from '../../emitter.service';


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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.usersService.create(name)
      .then(user => {
        this.users.push(user);
      });
  }


  ngOnInit() {
    this.getUsers();
  }

}
