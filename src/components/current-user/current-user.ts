import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";

/**
 * Generated class for the CurrentUserComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'current-user',
  templateUrl: 'current-user.html'
})
export class CurrentUserComponent implements OnInit{


  @Input('us') user : any;



  constructor(
    public nav : NavController
  ) {
  }

  ngOnInit(){
  }

  showFullData() {
      this.nav.push('UserDataPage', this.user)
  }
}
