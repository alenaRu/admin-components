import { Component, OnInit } from '@angular/core';
import {} from ''
import { User } from '../shared/user';
import { users } from '../shared/data';
import { AdminService } from '../shared/admin.service'

@Component({
  moduleId: module.id,
  selector: 'admin-list',
  templateUrl: 'admin-list.component.html',
  styleUrls: ['admin-list.component.css']
})
export class AdminListComponent implements OnInit{
  users: User[];

  constructor(private adminService: AdminService) {
    this.users = this.adminService.getUsers();
  }

  ngOnInit(){
    this.users = this.adminService.getUsers();
  }

  onToggle(){
    var addBtn = document.querySelector('.admin-add-div');
    addBtn.classList.toggle('hidden');

    // $(".admin-add-div").hide("slow");
  }

  delete(user: User){
    console.log("del in AdminList");
    this.adminService.deleteUser(user);
  }


}
