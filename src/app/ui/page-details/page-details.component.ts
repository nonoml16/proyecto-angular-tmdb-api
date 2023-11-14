import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/models/genre.interface';
import { MovieCreditsResponse } from 'src/app/models/movie-credits.interface';
import { MovieDetailResponse } from 'src/app/models/movie-detail.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit{
  movie!: MovieDetailResponse;
  credits: MovieCreditsResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId : number = 0;
  selectedMovie !: MovieDetailResponse;
  selectedMovieCredits !: MovieCreditsResponse;
  genres: Genre[] = [];
  movieList: Movie[] = [];

  constructor(private movieService: MovieService, private sanitazer: DomSanitizer) {
    this.movieId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe(resp => {this.movie = resp});
    this.movieService.getMovieCredits(this.movieId).subscribe(resp => {this.selectedMovieCredits = resp});
  }

  urlBgImage():string {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${this.movie.poster_path}`;
  }

  urlImage():string {
    return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
  }

  getDirectorName() {
    this.movieService.getMovieCredits(this.movieId).subscribe((response: any) => {
      const credits = response.credits;
      const directorCredit = credits.crew.find((credit: any) => credit.job === 'Director');
  
      if (directorCredit) {
        return directorCredit.name;
      }else{
        return null;
      }
    });
  }
}
