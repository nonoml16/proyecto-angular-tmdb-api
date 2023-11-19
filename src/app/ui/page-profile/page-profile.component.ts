import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieRated } from 'src/app/models/movie-list-rated.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { TvShowRated } from 'src/app/models/tv-show-list-rated.interface';
import { TvShow } from 'src/app/models/tv-show-list.interface';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  username: string = '';
  avatarPath: string = '';
  tvshowWatchlist: TvShow[] = [];
  movieWatchlist: Movie[] = [];
  movieFavourites: Movie[] = [];
  tvshowFavourites: TvShow[] = [];
  movieRated: MovieRated[] = [];
  tvshowRated: TvShowRated[] = [];

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails().subscribe(resp => {
      if (resp != null) {
        this.avatarPath = resp.avatar.tmdb.avatar_path;
        this.username = resp.username;
      }
    });
    this.accountService.getWatchlistMovies().subscribe(resp => {
      this.movieWatchlist = resp.results;
    });
    this.accountService.getWatchlistTvShows().subscribe(resp => {
      this.tvshowWatchlist = resp.results;
    });
    this.accountService.getFavouritesMovies().subscribe(resp => {
      this.movieFavourites = resp.results;
    });
    this.accountService.getFavouritesTvShows().subscribe(resp => {
      this.tvshowFavourites = resp.results;
    });
    this.accountService.getRatedMovies().subscribe(resp => {
      this.movieRated = resp.results;
    });
    this.accountService.getRatedTvShows().subscribe(resp => {
      this.tvshowRated = resp.results;
    });
  }

  getImgAvatar() {
    if (this.avatarPath != null) {
      return `https://image.tmdb.org/t/p/w500${this.avatarPath}`;
    }else {
      return 'https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg'
    }
  }

  getImageMovie(profile_path: string | null): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`;
  }

}
