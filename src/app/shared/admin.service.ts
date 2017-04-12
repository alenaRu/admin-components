import { users } from "./data";
import { User } from "./user";

export class AdminService {
  users: User[] = users;


  getUsers(): User[] {
    return this.users;
  }

  createUser(email: string){
    //console.log(email);
    let user = new User();
    user.email = email;
    console.log(user);

    this.users.push(user);
  }

  deleteUser(user: User){
    let index = this.users.indexOf(user);
    if(index > -1){
      this.users.splice(index,1);
    }
  }

  modifyUser(user: User){

  }

  sendMail(user: User){

  }

}
