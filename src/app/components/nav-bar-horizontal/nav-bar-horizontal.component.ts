import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar-horizontal',
  templateUrl: './nav-bar-horizontal.component.html',
  styleUrls: ['./nav-bar-horizontal.component.css']
})
export class NavBarHorizontalComponent {
  username!: String | null;
  avatarUrl!: String | null;


  constructor(private route: ActivatedRoute, private authService: AuthService) { }

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

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);
      
      
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;
    });
  }

  isLoggedIn(): boolean {
    this.avatarUrl = localStorage.getItem('AVATAR_PATH');
    this.username = localStorage.getItem('USERNAME');
    return (localStorage.getItem("AVATAR_PATH") == null)
  }

}
