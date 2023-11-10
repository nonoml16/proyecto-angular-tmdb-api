
import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
  styles: [
		`
			i {
				position: relative;
				display: inline-block;
				font-size: 2.5rem;
				padding-right: 0.1rem;
				color: #d3d3d3;
			}

			.filled {
				color: red;
				overflow: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}
		`,
	],
})
export class MovieItemComponent {

  @Input() movie!: Movie;
  
  urlImage():string {
    return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
  }

  raiting():number{
    return this.movie.vote_average / 2;
  }

  constructor(config: NgbRatingConfig) {
		
		config.max = 5;
		config.readonly = true;
	}
  
}