import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the UserAlbumComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-album',
  templateUrl: 'user-album.html'
})
export class UserAlbumComponent implements OnInit{
  @Input('alb') album : any;

  constructor(
    public nav : NavController
  ) {

  }
  ngOnInit(){
  }

  showAlbumPhotos() {
    this.nav.push('UserAlbumPhotosPage', this.album)
  }
}
