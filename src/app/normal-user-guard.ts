import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class NormalUserGuard implements CanActivate {
  constructor(private route: Router) {
  }

  canActivate() {
  	// No local storage means that it is not ready onto the client
    if (typeof window === 'undefined' || !localStorage || !localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
}
