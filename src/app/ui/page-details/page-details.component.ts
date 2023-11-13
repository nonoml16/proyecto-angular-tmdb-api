import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from 'src/app/models/movie-detail.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit{
  movie: MovieDetailResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId : number = 0;
  selectedMovie !: MovieDetailResponse;

  constructor(private movieService:MovieService){
    this.movieId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe(resp => {this.selectedMovie = resp});

  }

  urlBgImage():string {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${this.movie?.poster_path}`;
  }

  urlImage():string {
    return `https://image.tmdb.org/t/p/original${this.movie?.poster_path}`;
  }


}
