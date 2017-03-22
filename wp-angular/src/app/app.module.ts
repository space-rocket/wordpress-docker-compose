import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { WPAngularRoutingModule } from './app-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WPAngularRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
