import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private formSubscription: Subscription;
  private apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  }

  public postUser(registerForm) {
    let user;
    this.formSubscription = this.httpClient.post(`${this.apiUrl}auth/login`,
      {
        email: registerForm.value.email,
        password: registerForm.value.password,
      })
      .subscribe((data) => {
        console.log(data);
        user = data;
        console.log('this is - ' + user.token);
        this.setToken(user);
      });
  }

  public setToken(user) {
    localStorage.setItem('token', 'jwt ' + user.token);
    this.router.navigate(['/profile']);
  }

  public deleteToken(key) {
    localStorage.removeItem(key);
  }
}
