import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  movieList: Movie[] = [];

  constructor(private movieService: MovieService){}
  
  ngOnInit(): void {
    this.movieService.getListP().subscribe(resp => {
      this.movieList = resp.results;
    })
  }

  
}
