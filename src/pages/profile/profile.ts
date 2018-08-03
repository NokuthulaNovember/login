import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { endTimeRange } from '../../../node_modules/@angular/core/src/profile/wtf_impl';
import { EditPage } from '../edit/edit';
import { FormGroup,FormControl, FormBuilder,Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user={

  }
  
  userFG:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.userFG = new FormGroup({
      name: new FormControl(''),
      cellNo: new FormControl(''),
      work: new FormControl('')
    })

    this.userFG = this.fb.group({
      name:['Nokuthula November',[Validators.required,Validators.minLength(5)]],
      cellNo:['0610735245',[Validators.required,Validators.maxLength(10)]],
     work:['CodeTribe',[Validators.required,Validators.maxLength(10)]]
    })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  edit(){
    console.log(this.user);
    this.navCtrl.push(EditPage)
  }
  formSubmit({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log(valid);
   
  }
  }

export interface User{
  username:string;
  age:string;
  work:string;
 
  }
