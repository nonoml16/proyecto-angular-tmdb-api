import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-movie-popular',
  templateUrl: './page-movie-popular.component.html',
  styleUrls: ['./page-movie-popular.component.css']
})
export class PageMoviePopularComponent implements OnInit {

  movieList: Movie[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadNewPage();

  }
  loadNewPage(): void {
    this.movieService.getPopularList(this.actualPage).subscribe(resp => {
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
