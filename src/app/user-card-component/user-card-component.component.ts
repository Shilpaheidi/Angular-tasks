import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card-component',
  templateUrl: './user-card-component.component.html',
  styleUrls: ['./user-card-component.component.scss']
})
export class UserCardComponentComponent {
  @Input()
  user: any = {};
}
