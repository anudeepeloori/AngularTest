import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-regestration',
  templateUrl: './user-regestration.component.html',
  styleUrls: ['./user-regestration.component.css']
})
export class UserRegestrationComponent  {

  userObj:user={username:"",dob:"",email:""};
  addUserData(){
    console.log(this.userObj);
    this.userObj={username:"",dob:"",email:""};

  }

}

interface user{
  username:string;
  dob:string;
  email:string;
}
