import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { MockService } from 'app/services/mock.service';
import { Author } from 'app/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  authors: Author[] = []
  loading$: Observable<boolean>;
  heroes$: Observable<Author[]>;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private mockAPI: MockService,
    private store: Store<Author>
    ) {
      // this.heroes$ = heroService.entities$;
      // this.loading$ = heroService.loading$;
  }

  ngOnInit() {
    this.mockAPI.getAll();
    this.getMockData()
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

  getMockData(){
    this.mockAPI.getAuthors().subscribe(res=>{
      this.authors = res
    })
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
