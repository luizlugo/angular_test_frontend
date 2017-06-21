import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private route: Router) {
  }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
