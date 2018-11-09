import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FulldataProvider} from "../../providers/fulldata/fulldata";

/**
 * Generated class for the UserAlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-albums',
  templateUrl: 'user-albums.html',
})
export class UserAlbumsPage {
  user : any;
  albums : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService : FulldataProvider
  ) {
  }

  ionViewDidLoad() {
    this.albums = [];
    this.user = this.navParams.data;
    this.dataService.getAllAlbums().subscribe((data)=>{
      data.forEach((doc)=>{
        if (doc.userId === this.user.id) {
          this.albums.push(doc)
        }
      });
    })
  }

}
