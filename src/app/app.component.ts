import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  
  userObj:user={username:"",dob:"",email:""};
  addUserData(){
    console.log(this.userObj);
    this.userObj={username:"",dob:"",email:""};

  }

  // deleteUser(index:any){
  //   this.users.splice(index,1);
  // }
}

interface user{
  username:string;
  dob:string;
  email:string;
}
