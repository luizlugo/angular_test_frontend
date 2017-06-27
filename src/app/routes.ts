import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginGuard } from './login-guard';
import { NormalUserGuard } from './normal-user-guard';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [{
  path: '', component: LandingComponent, pathMatch: 'full',
},{
  path: 'login', component: LoginComponent, canActivate: [NormalUserGuard]
},{
  path: 'home', component: HomeComponent, canActivate: [LoginGuard]
},{
  path: 'signup', component: SignupComponent, canActivate: [NormalUserGuard]
},{
  path: 'landing', component: LandingComponent
}];
