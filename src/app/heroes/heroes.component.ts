import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent {
  /**
   * Properties
   */
  hero: Hero = {
    id: 1,
    name: "PapureMan"
  };
  heroes: Hero[] = [];
  selectedHero?: Hero;

  /**
   * Constructor
   * @param heroService 
   */
  constructor(private heroService: HeroService) {}
  
  /**
   * Methods
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  resetSelection(): void {
    this.selectedHero = undefined;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
