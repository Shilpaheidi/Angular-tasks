import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {


  users:string[]=['user1','user2','user3','user4','user5'];

  deleteUser(index:number){
   this.users.splice(index,1);
  }
}
