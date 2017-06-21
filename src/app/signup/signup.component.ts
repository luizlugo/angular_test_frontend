import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../CustomClass/User';
import {UserService} from '../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  signup() {
    this
    .userService
    .signup(this.user)
    .then((response) => {
      if (response.ok && response.user) {
        localStorage.setItem('currentUser', JSON.stringify(response.user));
        this.router.navigate(['home']);
      } else {
        alert(response.error);
      }
    })
    .catch((error) => {
      alert('There was an error while processing your request.');
    })
  }
}
