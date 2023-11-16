import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.interface';
import { TvShow } from 'src/app/models/tv-show-list.interface';
import { TvShowService } from 'src/app/service/tv-show.service';

@Component({
  selector: 'app-page-tv-show-popular-list',
  templateUrl: './page-tv-show-popular-list.component.html',
  styleUrls: ['./page-tv-show-popular-list.component.css']
})
export class PageTvShowPopularListComponent implements OnInit {

  tvshowList: TvShow[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];
  movieCount!: number;

  constructor(private tvshowService: TvShowService) { }

  ngOnInit(): void {
    this.loadNewPage();

  }
  loadNewPage(): void {
    this.tvshowService.getListPopular(this.actualPage).subscribe(resp => {
      this.tvshowList = resp.results;
      this.movieCount = resp.total_results;
      this.tvshowService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      })
    })
  }

  getGenreNames(genreIds: number[]): string[] {
    const movieGenres = this.genres.filter((genre) => genreIds.includes(genre.id));
    return movieGenres.map((genre) => genre.name);
  }

}
