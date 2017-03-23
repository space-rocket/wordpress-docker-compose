import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Post } from './post';


@Injectable()
export class PostsService {

  private postsUrl = "http://localhost/wp-json/wp/v2/";

	constructor(private http: Http) { }

	createAuthorizationHeader(headers: Headers) {
		headers.append('Authorization', 'Basic ' +
			btoa('localhost:localhost')); 
	}

	getPosts(): Observable<Post[]> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

	    return this.http
	      .get(this.postsUrl + 'posts', {
		      headers: headers
		   })
	      .map((res: Response) => res.json());

	}

    create(title: string): Promise<Post> {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);

	    return this.http
	        .post(this.postsUrl + 'posts', JSON.stringify({title: title }), {headers: headers})
	        .toPromise()
	        .then(res => res.json().data)
	        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
