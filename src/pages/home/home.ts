import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FulldataProvider} from "../../providers/fulldata/fulldata";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public dataService : FulldataProvider
  ) {

  }

  showUsers() {
    this.dataService.getAllUsers().subscribe((data)=>{
      this.navCtrl.push('UsersListPage', data)
    })
  }

  showAlbums() {
    this.dataService.getAllAlbums().subscribe((data)=>{
      this.navCtrl.push('AllAlbumsPage', data)
    })
  }
}
