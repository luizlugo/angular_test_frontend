import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {User} from '../CustomClass/User';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  login() : void {
    this
    .userService
    .doLogin(this.user)
    .then((response) => {
      if (response.ok && response.user) {
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        this.router.navigate(['home']);
      } else {
        alert(response.error);
      }
    })
    .catch((error) => {
      console.log('error:', JSON.stringify(error));
    });
  }
}
