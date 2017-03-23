import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Todo } from './todo';



@Injectable()
export class TodosService {

	private todosUrl = "http://localhost/wp-json/wp/v2/";

	constructor(private http: Http) { }

	createAuthorizationHeader(headers: Headers) {
		headers.append('Authorization', 'Basic ' +
			btoa('localhost:localhost')); 
	}

	getTodos(): Observable<Todo[]> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

		return this.http.get(this.todosUrl + 'todos', {
			headers: headers
		})
		.map((res: Response) => res.json());

	}

    create(title: string): Promise<Todo> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

	    return this.http
	        .post(this.todosUrl + 'todos', JSON.stringify({title: title}), {headers: headers})
	        .toPromise()
	        .then(res => res.json())
	        .catch(this.handleError);
    } 

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}