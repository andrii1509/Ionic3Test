import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPhotosPage } from './user-photos';

@NgModule({
  declarations: [
    UserPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPhotosPage),
  ],
})
export class UserPhotosPageModule {}
