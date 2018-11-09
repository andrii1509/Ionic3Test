import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FulldataProvider} from "../../providers/fulldata/fulldata";

/**
 * Generated class for the UserDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-data',
  templateUrl: 'user-data.html',
})
export class UserDataPage {

  user : any;
  userPosts : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataService : FulldataProvider
    ) {
  }

  ionViewDidLoad() {
        this.user = this.navParams.data;
  }

  showAllPosts() {
    this.userPosts = [];
    this.dataService.getAllPosts().subscribe((data)=>{
      data.forEach((doc) =>{
        if (doc.userId === this.user.id) {
          this.userPosts.push(doc)
        }
      });
      this.navCtrl.push('PostsPage', this.userPosts)
    })
  }

  showAllAlbums() {
    this.navCtrl.push('UserAlbumsPage', this.user)
  }
}
