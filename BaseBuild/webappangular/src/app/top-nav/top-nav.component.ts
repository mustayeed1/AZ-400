import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import {NavService} from '../_services/nav.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  isLoggedIn : boolean;
  loggedInUserName : string;
  constructor(public navService: NavService, public authService : AuthService) {
     authService.isLoggedIn.subscribe(loggedin => this.isLoggedIn = loggedin);
     authService.loggedInUserName.subscribe(userName => this.loggedInUserName = userName);
   }

  ngOnInit() {
    
  }

}