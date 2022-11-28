import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  phonenumber=""
  email=""
  username=""
  password=""
  confirmpassword=""

  userreg=()=>
  {
    let data:any = {"name":this.name,"phonenumber":this.phonenumber,"email":this.email,"username":this.username,"password":this.password
  ,"confirmpassword":this.confirmpassword}

  console.log(data)
  }

}
