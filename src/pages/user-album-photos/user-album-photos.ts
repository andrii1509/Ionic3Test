import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FulldataProvider} from "../../providers/fulldata/fulldata";

/**
 * Generated class for the UserAlbumPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-album-photos',
  templateUrl: 'user-album-photos.html',
})
export class UserAlbumPhotosPage {
  photos : any;
  album : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService : FulldataProvider
  ) {
  }

  ionViewDidLoad() {
    this.photos =[];
    this.album = this.navParams.data;
    this.dataService.getAllPhotos().subscribe((data) =>{
      data.forEach((doc)=>{
        if(doc.albumId === this.album.id){
          this.photos.push(doc);
        }
      });
    })
  }

}
