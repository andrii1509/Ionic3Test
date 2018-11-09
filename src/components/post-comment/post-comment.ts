import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the PostCommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-comment',
  templateUrl: 'post-comment.html'
})
export class PostCommentComponent implements OnInit{

  @Input('com') comment : any;

  constructor() {
  }

  ngOnInit(){
    console.log(this.comment);
  }
}
