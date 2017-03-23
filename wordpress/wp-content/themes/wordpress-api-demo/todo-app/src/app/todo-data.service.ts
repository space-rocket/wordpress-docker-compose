import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {

  // private postsUrl = "http://localhost/wp-json/wp/v2/";

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  private todos = "http://localhost/wp-json/wp/v2/";

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http
    	.get(this.todos + 'posts')
		.map((res: Response) => res.json());
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  // updateTodoById(id: number, values: Object = {}): Todo {
  //   let todo = this.getTodoById(id);
  //   if (!todo) {
  //     return null;
  //   }
  //   Object.assign(todo, values);
  //   return todo;
  // }



  // Simulate GET /todos/:id
  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }

  // Toggle todo complete
  // toggleTodoComplete(todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

}