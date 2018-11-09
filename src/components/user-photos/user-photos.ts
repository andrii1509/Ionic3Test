import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the UserPhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-photos',
  templateUrl: 'user-photos.html'
})
export class UserPhotosComponent implements OnInit{

  @Input('ph') photo : any;

  constructor() {
  }
  ngOnInit(){
    console.log(this.photo);
  }
}
