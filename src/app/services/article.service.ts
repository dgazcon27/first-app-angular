import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url: string = 'http://localhost:8989/api/v1/article';
  urlImage: string = 'https://api.api-ninjas.com/v1/randomimage?category=food'
  constructor(private http: HttpClient) { }

  async getArticles(): Promise<Observable<Article[]>> {
    return this.http.get<Article[]>(this.url);
    // let articlesList: Article[] = []
    //  response.subscribe(articles => {
    //   console.log(articles);
      
    //   articlesList = articles.map(item => ({...item, image: this.urlImage}))
    // })
    // console.log(articlesList);
    
    // return articlesList;
  }
}
