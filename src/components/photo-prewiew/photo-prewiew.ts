import {Component, Input, OnInit} from '@angular/core';

/**
 * Generated class for the PhotoPrewiewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'photo-prewiew',
  templateUrl: 'photo-prewiew.html'
})
export class PhotoPrewiewComponent implements OnInit{

  @Input('ph') photo : any;

  constructor() {
  }
  ngOnInit(){
    console.log(this.photo);
  }
}
