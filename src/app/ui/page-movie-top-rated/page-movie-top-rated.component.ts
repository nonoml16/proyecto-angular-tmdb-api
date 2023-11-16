import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/movie-detail.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-movie-top-rated',
  templateUrl: './page-movie-top-rated.component.html',
  styleUrls: ['./page-movie-top-rated.component.css']
})
export class PageMovieTopRatedComponent implements OnInit {

  movieList: Movie[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];
  movieCount!: number;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();

  }
  loadNewPage(): void {
    this.movieService.getTopRatedList(this.actualPage).subscribe(resp => {
      this.movieList = resp.results;
      this.movieCount = resp.total_results
      this.movieService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      })
    })
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }
}
