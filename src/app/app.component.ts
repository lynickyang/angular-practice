import { Component } from '@angular/core';
import { HeadComponent } from "./head/head.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadComponent, UserComponent, TasksComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId= 'u1';

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserId)!;
  }

  onSelectUser(id:string){
    this.selectedUserId = id;
  }
}
