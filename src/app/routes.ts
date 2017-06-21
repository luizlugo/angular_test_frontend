import {SliderComponent} from './slider/slider.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LoginGuard} from './login-guard';
import {NormalUserGuard} from './normal-user-guard';
import {SignupComponent} from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';

export class AppRoutes {
  static routes: Routes = [{
    path: '', redirectTo: 'home', pathMatch: 'full',
  }, {
    path: 'login', component: LoginComponent, canActivate: [NormalUserGuard]
  }, {
    path: 'home', component: HomeComponent, canActivate: [LoginGuard]
  },{
    path: 'signup', component: SignupComponent, canActivate: [NormalUserGuard]
  }, {
    path: '**', component: HomeComponent,
  }];
}
