import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDataAndCommentsPage } from './post-data-and-comments';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PostDataAndCommentsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PostDataAndCommentsPage),
  ],
})
export class PostDataAndCommentsPageModule {}
