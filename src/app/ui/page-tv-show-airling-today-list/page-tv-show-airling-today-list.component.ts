import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre.interface';
import { TvShow } from 'src/app/models/tv-show-list.interface';
import { TvShowService } from 'src/app/service/tv-show.service';

@Component({
  selector: 'app-page-tv-show-airling-today-list',
  templateUrl: './page-tv-show-airling-today-list.component.html',
  styleUrls: ['./page-tv-show-airling-today-list.component.css']
})
export class PageTvShowAirlingTodayListComponent implements OnInit {

  tvshowList: TvShow[] = [];
  actualPage: number = 1;
  genres: Genre[] = [];

  constructor(private tvshowService: TvShowService) { }

  ngOnInit(): void {
    this.loadNewPage();

  }
  loadNewPage(): void {
    this.tvshowService.getListAiringTday(this.actualPage).subscribe(resp => {
      this.tvshowList = resp.results;
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
