import { Component } from '@angular/core';
import { Genre } from 'src/app/models/movie-detail.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-movie-upcoming',
  templateUrl: './page-movie-upcoming.component.html',
  styleUrls: ['./page-movie-upcoming.component.css']
})
export class PageMovieUpcomingComponent {

  movieList: Movie[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();

  }
  loadNewPage(): void {
    this.movieService.getUpcomingList(this.actualPage).subscribe(resp => {
      this.movieList = resp.results;
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
