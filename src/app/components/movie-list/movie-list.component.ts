import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movieList: Movie[] = [];
  movieCount !: number;
  actualPage : number = 1;
  genres: Genre[] = [];

  constructor(private movieService: MovieService){}
  
  ngOnInit(): void {
    this.loadNewPage();
    
  }
  loadNewPage(): void{
    this.movieService.getList(this.actualPage).subscribe(resp => {
      this.movieList = resp.results;
      this.movieService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      })
      this.movieCount = resp.total_results;
    })
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }
}
