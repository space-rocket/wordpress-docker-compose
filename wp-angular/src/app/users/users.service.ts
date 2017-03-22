import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';





@Injectable()
export class UsersService {

	private usersUrl = "http://localhost/wp-json/wp/v2/";

	private extractData(res: Response) {
	  let body = res.json();
	  return body.data || { };
	}

	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}


	constructor(private http: Http) { }

	createAuthorizationHeader(headers: Headers) {
		headers.append('Authorization', 'Basic ' +
			btoa('localhost:localhost')); 
	}



	getUsers(users: User[]): Observable<User[]> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

		return this.http.get(this.usersUrl + 'users', {
	      headers: headers
	    })
		.map((res: Response) => res.json());

	}
	// getUsers(): Observable<User[]> {
	//   return this.http.get(this.usersUrl)
	//                   .map(this.extractData)
	//                   .catch(this.handleError);
	// }
	create(name: string): Observable<User> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.usersUrl, { name }, options)
		.map(this.extractData)
		.catch(this.handleError);
	}

}
