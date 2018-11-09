import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAlbumsPage } from './user-albums';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    UserAlbumsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(UserAlbumsPage),
  ],
})
export class UserAlbumsPageModule {}
