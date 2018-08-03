import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup,FormControl, FormBuilder,Validators } from '../../../node_modules/@angular/forms';


@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {

  user={

  }
  
  userFG:FormGroup;

//  username:string;
//  password:string;

 constructor(public navCtrl: NavController,private fb:FormBuilder) {

  this.userFG = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')

    })


  this.userFG = this.fb.group({
    username:['',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.maxLength(10)]]

  })

    
 }
 submit() {
  console.log(this.user);
   this.navCtrl.push(ProfilePage);
}

formSubmit({value,valid}:{value:User,valid:boolean}) {
  console.log(value);
  console.log(valid);
 
}

}
export interface User{
  username:string;
  password:string;
 
  }


// login(){
//    console.log("username: "+ this.username);
//    console.log("password: "+ this.password);
//    this.navCtrl.push(ProfilePage);
//  }
