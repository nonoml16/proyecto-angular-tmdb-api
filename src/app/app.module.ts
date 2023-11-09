import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ActorItemComponent } from './components/actor-item/actor-item.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TvShowItemComponent } from './components/tv-show-item/tv-show-item.component';
import { PageListComponent } from './ui/page-list/page-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

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
    PageListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
