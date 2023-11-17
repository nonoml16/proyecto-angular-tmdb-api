import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/movie-detail.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-movie-now-playing',
  templateUrl: './page-movie-now-playing.component.html',
  styleUrls: ['./page-movie-now-playing.component.css']
})
export class PageMovieNowPlayingComponent implements OnInit {

  movieList: Movie[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];
  movieCount!: number;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }

  loadNewPage(): void {
    this.movieService.getNowPlayingList(this.actualPage).subscribe(resp => {
      this.movieList = resp.results;
      this.movieCount = resp.total_results;
      this.movieService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      });
    });
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }

}
