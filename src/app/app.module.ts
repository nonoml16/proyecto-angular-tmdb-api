import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ActorItemComponent } from './components/actor-item/actor-item.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TvShowItemComponent } from './components/tv-show-item/tv-show-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarHorizontalComponent } from './components/nav-bar-horizontal/nav-bar-horizontal.component';
import { PageMovieTopRatedComponent } from './ui/page-movie-top-rated/page-movie-top-rated.component';
import { PageMoviePopularComponent } from './ui/page-movie-popular/page-movie-popular.component';
import { PageMovieNowPlayingComponent } from './ui/page-movie-now-playing/page-movie-now-playing.component';
import { PageMovieUpcomingComponent } from './ui/page-movie-upcoming/page-movie-upcoming.component';
import { PageDetailsComponent } from './ui/page-details/page-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PageTvShowAirlingTodayListComponent } from './ui/page-tv-show-airling-today-list/page-tv-show-airling-today-list.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { PageActorDetailComponent } from './ui/page-actor-detail/page-actor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    ActorItemComponent,
    MovieItemComponent,
    TvShowItemComponent,
    NavBarComponent,
    NavBarHorizontalComponent,
    PageDetailsComponent,
    NavBarHorizontalComponent,
    PageMovieTopRatedComponent,
    PageMoviePopularComponent,
    PageMovieNowPlayingComponent,
    PageMovieUpcomingComponent,
    PageTvShowAirlingTodayListComponent,
    TvShowListComponent,
    PageMovieUpcomingComponent,
    PageActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbRatingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 0,
      outerStrokeColor: "#78C000",
      animationDuration: 300,
      showBackground: true,
      backgroundColor: "#21242D",
      showSubtitle: false,
      responsive: true,
      titleFontSize: "100",
      showUnits: false,
      titleFontWeight: "600",
      titleColor: "#ffffff"

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
