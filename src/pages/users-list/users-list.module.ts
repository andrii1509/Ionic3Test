import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersListPage } from './users-list';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    UsersListPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(UsersListPage),
  ],
})
export class UsersListPageModule {}
