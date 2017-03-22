import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';





@Injectable()
export class UsersService {

	private usersUrl = "http://localhost/wp-json/wp/v2/";

	constructor(private http: Http) { }

	getUsers(): Observable<User[]> {

		return this.http
		.get(this.usersUrl + 'users')
		.map((res: Response) => res.json());

	}

}
