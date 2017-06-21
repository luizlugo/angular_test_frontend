import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {LoginGuard} from './login-guard';
import {NormalUserGuard} from './normal-user-guard';
import { AppComponent } from './app.component';

// Custom imports
import {AppRoutes} from './routes';
import { SliderComponent } from './slider/slider.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './Services/user.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'test-seo-pre'}),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes.routes)
  ],
  providers: [UserService, LoginGuard, NormalUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
