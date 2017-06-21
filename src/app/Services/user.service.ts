import {Injectable} from '@angular/core';
import {User} from '../CustomClass/User';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  apiUrl: string = "http://localhost:3000/";
  private headers = new Headers({'Content-Type': 'application/json'});
  currentUser: User;

  constructor(private http: Http) {
    if (typeof window !== 'undefined') {
      if (localStorage && localStorage.getItem('currentUser')) {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        // User exists, set it to the current user var
        this.currentUser = new User(user.firstname, user.lastname, user.email, user.password);
      }
    }
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  doLogin(user: User) : Promise<any> {
    return new Promise((resolve, reject) => {
       this.http
      .post(this.apiUrl + 'Users/Login', JSON.stringify({email : user.email,password : user.password}), {headers : this.headers})
      .toPromise()
      .then((response) => {
        var user = response.json().user;
        // Creates instance of current user
        this.currentUser = new User(user.firstname, user.lastname, user.email, user.password);
        resolve(response.json());
      })
      .catch(this.handleError);
    });
  }

  signup(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
       this.http
      .post(this.apiUrl + 'Users', JSON.stringify({user : user}), {headers : this.headers})
      .toPromise()
      .then((response) => {
        var user = response.json().user;
        this.currentUser = new User(user.firstname, user.lastname, user.email, user.password);
        resolve(response.json());
      })
      .catch(this.handleError);
    });
  }

  doLogout() {
    this.currentUser = null;
    if (typeof window !== 'undefined') {
      (localStorage) && localStorage.removeItem('currentUser');
    }
  }
}
