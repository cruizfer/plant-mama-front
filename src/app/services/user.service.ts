import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../components/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api'
  }
  createUser(formValue: User) {
    return firstValueFrom(this.httpClient.post<any[]>(this.baseUrl + '/signin', formValue))
  }
}


