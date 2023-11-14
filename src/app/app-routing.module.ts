import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageMoviePopularComponent } from './ui/page-movie-popular/page-movie-popular.component';
import { PageMovieDetailComponent } from './ui/page-movie-detail/page-movie-detail.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  {
    path: 'movies',
    children: [
      { path: 'detail/:id', component: PageMovieDetailComponent },
      { path: 'now-playing', component: AppComponent },
      { path: 'popular', component: PageMoviePopularComponent },
      { path: 'top-rated', component: AppComponent },
      { path: 'upcoming', component: AppComponent },
    ]
  },
  { path: 'actors', component: AppComponent },
  {
    path: 'tv-shows',
    component: AppComponent,
    children: [
      { path: 'airing-today', component: AppComponent },
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
