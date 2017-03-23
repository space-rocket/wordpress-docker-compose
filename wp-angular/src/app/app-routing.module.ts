import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';


const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent,
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WPAngularRoutingModule { }