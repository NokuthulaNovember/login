import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TribePage } from './tribe';

@NgModule({
  declarations: [
    TribePage,
  ],
  imports: [
    IonicPageModule.forChild(TribePage),
  ],
})
export class TribePageModule {}
