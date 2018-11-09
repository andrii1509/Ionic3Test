import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FulldataProvider} from "../../providers/fulldata/fulldata";

/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {
  album : any;
  photos : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService : FulldataProvider
  ) {
  }

  ionViewDidLoad() {
    this.photos = [];
    this.album = this.navParams.data;
    this.dataService.getAllPhotos().subscribe((data) =>{
      data.forEach((doc)=>{
        if (this.album.id === doc.albumId) {
          this.photos.push(doc);
        }
      })
    })
  }

}
