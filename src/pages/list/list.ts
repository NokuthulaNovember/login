import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Codetribe } from '../../app/service/service';
import { TribePage } from '../tribe/tribe';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
details=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:Codetribe) {
    this.details=this.service.getDetails();
  }
  ok(){
    this.service.details=[];
    this.navCtrl.push(TribePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
}
