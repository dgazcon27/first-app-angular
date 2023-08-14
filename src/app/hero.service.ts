import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  url: string = 'https://jsonplaceholder.typicode.com/posts/1';
  

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  // getHeroes(): Observable<Hero[]> {
  //   // const heroes = of(HEROES);
  //   // return heroes;
  //   return of(HEROES);
  // }

  getHeroes = (): Observable<Hero[]> => {
    this.messageService.add('HeroService: fetch heroes')
    let response = this.http.get<Hero[]>(this.url);
    response.subscribe(response => console.log(response))
    
    return of(Object.assign([], HEROES))
  };

  getHero = (id: number) :Observable<Hero | undefined> => {
    console.log(Object.assign([], HEROES));

    let heroResponse: Hero | undefined = Object.assign([], HEROES).find(hero => hero['id'] == id)
    return of(heroResponse)
  }
}
