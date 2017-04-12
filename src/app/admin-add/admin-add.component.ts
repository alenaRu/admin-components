import { Component } from '@angular/core';
import {AdminService} from "../shared/admin.service";

@Component({
  moduleId: module.id,
  selector: 'admin-add',
  templateUrl: 'admin-add.component.html',
  styleUrls: ['admin-add.component.css']
})
export class AdminAddComponent {
  email: string = '';

  constructor(private adminService: AdminService) {
  }

  onSubmit() {
    this.adminService.createUser(this.email);
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
