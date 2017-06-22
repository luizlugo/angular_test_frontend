import {Component, Input, DoCheck} from '@angular/core';
import {User} from '../customclass/user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements DoCheck{
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {}

  doLogout() {
    this.userService.doLogout();
    this.router.navigate(['login']);
  }

  ngDoCheck() {
    this.currentUser = this.userService.currentUser;
  }
}
