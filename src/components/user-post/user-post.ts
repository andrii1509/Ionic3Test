import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the UserPostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-post',
  templateUrl: 'user-post.html'
})
export class UserPostComponent implements OnInit{
  @Input('pos') post : any;

  constructor(
    public nav : NavController
  ) {

  }
  ngOnInit(){
  }

  showPostAndComments() {
    this.nav.push('PostDataAndCommentsPage', this.post)
  }
}
