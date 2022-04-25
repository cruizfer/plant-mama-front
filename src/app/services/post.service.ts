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

  getByExpertise() {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: sessionStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + 'posts/by-expertise', httpOptions))
  };

  savedPostsByUser(body: any) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: sessionStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.post<any>(this.baseUrl + 'posts/saved', body, httpOptions))
  };

  getBookmarks() {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: sessionStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.get<any>(this.baseUrl + 'posts/bookmark', httpOptions))
  };

  deletePostById(post_id: number) {
    const httpOptions = {
      headers: new HttpHeaders(
        { authentication: sessionStorage.getItem('token_user') }
      )
    }
    return firstValueFrom(this.httpClient.delete<any>(this.baseUrl + `posts/delete-post/${post_id}`, httpOptions))
  };
}
