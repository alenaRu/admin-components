import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../shared/user';
import {AdminService} from "../shared/admin.service";
// import { users } from '../shared/data'

@Component({
  moduleId: module.id,
  selector: 'admin-user',
  templateUrl: 'admin-user.component.html',
  styleUrls: ['admin-user.component.css']
})
export class AdminUserComponent{
  @Input() user: User;
  @Output() delete = new EventEmitter();

  constructor(private adminService: AdminService) {  }

  onDelete(){
    this.delete.emit(this.user);
  }

}


