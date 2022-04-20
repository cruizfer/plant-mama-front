import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/'
  };

  createUser(formValue: User) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + 'user/sign-in', formValue)) // comprobar si es user
  };

  login(formValue: any) {
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + 'user/log-in', formValue))
  };

  getLoggedUser() {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + 'user/profile', httpOptions))
  }
}


