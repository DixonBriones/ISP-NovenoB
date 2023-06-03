import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = environment.rutaauth;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  singin(user: any) {
    return this.http.post(`${this.URL}/login`, user);
  }
    

  isAuth(): boolean {
    //const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aC5ib21iZXJvc21hbnRhLmdvYi5lYy9hcGkvbG9naW4iLCJpYXQiOjE2NzAzNDk3MTIsImV4cCI6MTcwMTQ1MzcxMiwibmJmIjoxNjcwMzQ5NzEyLCJqdGkiOiJYQzNvclNYdG0wcnI4TFdoIiwic3ViIjoiMTUxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImRhdGEiOiJleUoxYzJWeVgybGtJam94TlRFc0ltRndaV3hzYVdSdlgzQmhkR1Z5Ym04aU9pSkNjbWx2Ym1Weklpd2lZWEJsYkd4cFpHOWZiV0YwWlhKdWJ5STZJa2QxZEdsbGNuSmxlaUlzSW01dmJXSnlaWE1pT2lKRWFYaHZiaUlzSW1WdFlXbHNJam9pWkdsNGIyNHVZbkpwYjI1bGMwQmliMjFpWlhKdmMyMWhiblJoTG1kdllpNWxZeUlzSW5CbGNtMXBjMjlmWlhoMFpYSnVieUk2TUN3aVlXUnRhVzRpT2pBc0ltUmxiR1YwWldSZllYUWlPbTUxYkd3c0ltaGhZbWxzYVhSaFpHOGlPakVzSW5ScGNHOWZkWE4xWVhKcGJ5STZJa0pQVFVKRlVrOGlMQ0oxYzNWaGNtbHZJanB1ZFd4c0xDSnphWE4wWlcxaFgybGtJam80TENKeWIyeGxjeUk2VzExOSJ9.8wkaNfitQj8thaJ5G39fOwWUz7h0deXCUXxuvIcpH4g";
    const token = localStorage.getItem('token');
    //console.log(token);
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      //console.log(token);
      return false;
    }

    return true;
  }
}
