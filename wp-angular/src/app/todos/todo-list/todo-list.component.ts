import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodosService]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor( private todosService: TodosService ) { }

  getTodos(){
    this.todosService
      .getTodos()
      .subscribe(res => {
        this.todos = res;
      });
  }

  add(title: string): void {
    title = title;
    if (!title) { return; }
    this.todosService.create(title)
      .then(todo => {
        this.todos.push(todo);
      });
  }

  ngOnInit() {
    this.getTodos();
  }


}
