import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAlbumPhotosPage } from './user-album-photos';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    UserAlbumPhotosPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(UserAlbumPhotosPage),
  ],
})
export class UserAlbumPhotosPageModule {}
