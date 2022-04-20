import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string
  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/'

  };
  getAll() {
    return firstValueFrom(this.httpClient.get<Post[]>(this.baseUrl + 'user/feed'))
  };

  savedPostsByUser(body: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + 'posts/saved', body, httpOptions))
  };

  getBookmarks() {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: localStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + 'posts/bookmark', httpOptions))
  };

  getPostById(body: any) {
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + 'id', body))

  }
}
