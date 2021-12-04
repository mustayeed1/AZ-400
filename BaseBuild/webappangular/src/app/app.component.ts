import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {NavItem} from './_models/nav-item';
import { AuthService } from './_services/auth.service';
import {NavService} from './_services/nav.service';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] ;
  constructor(private navService: NavService, private authService : AuthService) {
    authService.userNavItems.subscribe(userNav => this.navItems = userNav);
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}