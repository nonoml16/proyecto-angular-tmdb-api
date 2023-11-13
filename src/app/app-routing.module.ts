import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'movies',
    component: NavBarComponent,
    children: [
      { path: 'now-playing', component: NavBarComponent },
      { path: 'popular', component: NavBarComponent },
      { path: 'top-rated', component: NavBarComponent },
      { path: 'upcoming', component: NavBarComponent },
    ]
  },
  { path: 'actors', component: NavBarComponent },
  {
    path: 'tv-shows',
    component: NavBarComponent,
    children: [
      { path: 'airing-today', component: NavBarComponent },
      { path: 'on-the-air', component: NavBarComponent },
      { path: 'popular', component: NavBarComponent },
      { path: 'top-rated', component: NavBarComponent }
    ]
  },
  {
    path: 'trending',
    component: NavBarComponent,
    children: [
      { path: 'tv-shows', component: NavBarComponent },
      { path: 'movies', component: NavBarComponent },
      { path: 'actors', component: NavBarComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
