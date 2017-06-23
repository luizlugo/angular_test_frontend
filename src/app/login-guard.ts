import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private route: Router) {
  }

  canActivate() {
    // No local storage means that it is not on the client
    if (typeof window !== 'undefined' && localStorage && localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.route.navigate(['landing']);
      return false;
    }
  }
}
