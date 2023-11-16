import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { AppComponent } from './app.component';
import { PageMoviePopularComponent } from './ui/page-movie-popular/page-movie-popular.component';
import { PageDetailsComponent } from './ui/page-details/page-details.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { PageTvShowAirlingTodayListComponent } from './ui/page-tv-show-airling-today-list/page-tv-show-airling-today-list.component';
import { PageMovieUpcomingComponent } from './ui/page-movie-upcoming/page-movie-upcoming.component';
import { PageMovieTopRatedComponent } from './ui/page-movie-top-rated/page-movie-top-rated.component';
import { PageMovieNowPlayingComponent } from './ui/page-movie-now-playing/page-movie-now-playing.component';
import { PageTvShowTopRatedListComponent } from './ui/page-tv-show-top-rated-list/page-tv-show-top-rated-list.component';
import { PageTvShowOnTheAirListComponent } from './ui/page-tv-show-on-the-air-list/page-tv-show-on-the-air-list.component';
import { PageTvShowPopularListComponent } from './ui/page-tv-show-popular-list/page-tv-show-popular-list.component';
import { PageDetailsTvShowComponent } from './ui/page-details-tv-show/page-details-tv-show.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'movies',
    children: [
      { path: 'detail/:id', component: PageDetailsComponent },
      { path: 'now-playing', component: PageMovieNowPlayingComponent },
      { path: 'popular', component: PageMoviePopularComponent },
      { path: 'top-rated', component: PageMovieTopRatedComponent },
      { path: 'upcoming', component: PageMovieUpcomingComponent },
    ]
  },
  { path: 'actors', component: ActorListComponent },
  {
    path: 'tv-shows',
    children: [
      { path: 'detail/:id', component: PageDetailsTvShowComponent },
      { path: 'airing-today', component: PageTvShowAirlingTodayListComponent },
      { path: 'on-the-air', component: PageTvShowOnTheAirListComponent },
      { path: 'popular', component: PageTvShowPopularListComponent },
      { path: 'top-rated', component: PageTvShowTopRatedListComponent }
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
