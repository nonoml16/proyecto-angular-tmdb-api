import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageMoviePopularComponent } from './ui/page-movie-popular/page-movie-popular.component';
import { PageMovieDetailComponent } from './ui/page-movie-detail/page-movie-detail.component';
import { PageDetailsComponent } from './ui/page-details/page-details.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { PageTvShowAirlingTodayListComponent } from './ui/page-tv-show-airling-today-list/page-tv-show-airling-today-list.component';
import { PageMovieUpcomingComponent } from './ui/page-movie-upcoming/page-movie-upcoming.component';
import { PageMovieTopRatedComponent } from './ui/page-movie-top-rated/page-movie-top-rated.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'movies',
    children: [
      { path: 'detail/:id', component: PageDetailsComponent },
      { path: 'now-playing', component: AppComponent },
      { path: 'popular', component: PageMoviePopularComponent },
      { path: 'top-rated', component: PageMovieTopRatedComponent },
      { path: 'upcoming', component: PageMovieUpcomingComponent },
    ]
  },
  { path: 'actors', component: ActorListComponent },
  {
    path: 'tv-shows',
    children: [
      { path: 'airing-today', component: PageTvShowAirlingTodayListComponent },
      { path: 'on-the-air', component: AppComponent },
      { path: 'popular', component: AppComponent },
      { path: 'top-rated', component: AppComponent }
    ]
  },
  {
    path: 'trending',
    component: AppComponent,
    children: [
      { path: 'tv-shows', component: AppComponent },
      { path: 'movies', component: AppComponent },
      { path: 'actors', component: AppComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
