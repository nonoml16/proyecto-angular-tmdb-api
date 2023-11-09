import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  
  urlImage():string {
    return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
  }
}
