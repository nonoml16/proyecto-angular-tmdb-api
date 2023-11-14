import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from 'src/app/models/movie-detail.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-movie-detail',
  templateUrl: './page-movie-detail.component.html',
  styleUrls: ['./page-movie-detail.component.css']
})
export class PageMovieDetailComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  idMovie: number = 0;
  selectedMovie!: MovieDetailResponse;

  constructor(private movieService: MovieService, private sanitazer: DomSanitizer) {
    this.idMovie = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.idMovie).subscribe(resp => {
      this.selectedMovie = resp;
    });
  }

  getImage(poster_path: String | undefined) {
    return `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

}
