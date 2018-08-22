
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Codetribe } from '../../app/service/service';
import { TribePage } from '../tribe/tribe';
import { HomePage } from '../home/home';


/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
  
name:string;
cellNo:string;
work:string;
tribe=[];



  constructor(public navCtrl: NavController, public navParams: NavParams,private service:Codetribe){
  this.tribe=service.gettribers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');

  }

Save(index:number){

}
get(){
  this.navCtrl.push(TribePage)
 }
 save(){
  this.navCtrl.push(HomePage)
 }
}
