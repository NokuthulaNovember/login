import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Codetribe } from '../../app/service/service';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

/**
 * Generated class for the TribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tribe',
  templateUrl: 'tribe.html',
})
export class TribePage {
  triber=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private service: Codetribe) {
    this.triber=service.gettribers();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TribePage');
  }
  logout() {
    
     this.navCtrl.push(HomePage);
  }
  info(i:number){
    this.service.addDetails(i);
    this.navCtrl.push(ListPage);
 }
}
