import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuListItemComponent } from "./menu-list-item/menu-list-item.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavService } from "./_services/nav.service";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { HomeComponent } from './home/home.component';

import {APP_BASE_HREF} from '@angular/common';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
//import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import { LoginComponent } from './login/login.component';


import { AuthGuard } from './_services/auth.guard';
import { AuthService } from './_services/auth.service';

@NgModule({
  imports: [

    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    //ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MenuListItemComponent,
    
    TopNavComponent,
         HomeComponent,
         LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [NavService,{provide: APP_BASE_HREF, useValue: '/'}, AuthGuard, AuthService]
})
export class AppModule {}