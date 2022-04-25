import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/'

  }

  getAll() {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: sessionStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + 'nurseries/locations', httpOptions))
  };
}
