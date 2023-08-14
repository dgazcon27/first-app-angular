import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: HttpClient) { }

  getPosts() {
    let response = this.http.get<Article>(this.url);
    response.subscribe(response => console.log(response))
  }
}
