import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  {
    path: 'movies',
    component: AppComponent,
    children: [
      { path: 'now-playing', component: AppComponent },
      { path: 'popular', component: AppComponent },
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
