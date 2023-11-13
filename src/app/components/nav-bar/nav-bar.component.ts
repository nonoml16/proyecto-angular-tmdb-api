import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private route: ActivatedRoute) { }

  isMoviesRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'movies';
  }

  isActorsRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'actors';
  }

  isTVShowRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'tv-shows';
  }

  isTrendingRouteActive(): boolean {
    return this.route.snapshot.firstChild?.routeConfig?.path === 'trending';

  }

}
