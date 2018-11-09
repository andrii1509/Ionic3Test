import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAlbumsPage } from './all-albums';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    AllAlbumsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AllAlbumsPage),
  ],
})
export class AllAlbumsPageModule {}
