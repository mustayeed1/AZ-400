import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './_services/auth.guard'
import {LoginComponent} from './login/login.component'
// const routes: Routes = [
//   {path: '', component: HomeComponent, pathMatch: 'full'},
//   {path: 'devfestfl', children: [
//     {path: 'sessions', children: [
//       {path: 'my-ally-cli', component: HomeComponent},
//       {path: 'become-angular-tailor', component: HomeComponent},
//       {path: 'material-design', component: HomeComponent},
//       {path: 'what-up-web', component: HomeComponent}
//     ]},
//   ]}
// ];

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
