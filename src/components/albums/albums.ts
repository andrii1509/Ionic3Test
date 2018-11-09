import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the AlbumsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'albums',
  templateUrl: 'albums.html'
})
export class AlbumsComponent implements OnInit{

  @Input('alb') album : any;

  constructor(
    public nav : NavController
  ) {
  }
  ngOnInit(){
  }

  showPhotos() {
    this.nav.push('PhotosPage', this.album)
  }
}
