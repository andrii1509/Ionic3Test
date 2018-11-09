import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FulldataProvider} from "../../providers/fulldata/fulldata";

/**
 * Generated class for the PostDataAndCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-data-and-comments',
  templateUrl: 'post-data-and-comments.html',
})
export class PostDataAndCommentsPage {

  post : any;
  comments : any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataServ : FulldataProvider
  ) {
  }

  ionViewDidLoad() {
    this.comments = [];
    this.post = this.navParams.data;
    this.dataServ.getAllComments().subscribe((data)=>{
      data.forEach((doc)=>{
        if (this.post.id === doc.postId) {
          this.comments.push(doc);
        }
      })
    })
  }

}
