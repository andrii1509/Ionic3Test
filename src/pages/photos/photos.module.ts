import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotosPage } from './photos';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PhotosPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PhotosPage),
  ],
})
export class PhotosPageModule {}
