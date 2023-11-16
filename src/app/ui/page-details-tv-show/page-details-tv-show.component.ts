import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Genre } from 'src/app/models/genre.interface';
import { Trailer, TrailerListResponse } from 'src/app/models/trailer-list.interface';
import { Cast, TvShowCreditsResponse } from 'src/app/models/tv-show-credits.interface';
import { TvShowDetailResponse } from 'src/app/models/tv-show-detail.interface';
import { TvShow } from 'src/app/models/tv-show-list.interface';
import { TvShowService } from 'src/app/service/tv-show.service';

@Component({
  selector: 'app-page-details-tv-show',
  templateUrl: './page-details-tv-show.component.html',
  styleUrls: ['./page-details-tv-show.component.css']
})
export class PageDetailsTvShowComponent implements OnInit {
  tvshow!: TvShowDetailResponse;
  credits: TvShowCreditsResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  tvshowId: number = 0;
  selectedTvShow !: TvShowDetailResponse;
  selectedTvShowCredits !: TvShowCreditsResponse;
  genres: Genre[] = [];
  tvshowList: TvShow[] = [];
  trailerOfMovie!: Trailer;
  trailerUrl: SafeResourceUrl | undefined;
  cast!: Cast[];
  crew !: Cast[];

  constructor(private tvshowService: TvShowService, private sanitazer: DomSanitizer, private modalService: NgbModal) {
    this.tvshowId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.tvshowService.getTvShow(this.tvshowId).subscribe(resp => { this.tvshow = resp });
    this.tvshowService.getCredits(this.tvshowId).subscribe(resp => {
      this.cast = resp.cast;
      this.crew = resp.crew;
    });
    this.tvshowService.getCredits(this.tvshowId).subscribe(resp => { this.selectedTvShowCredits = resp });
    this.tvshowService.getListNoPage().subscribe(resp => {
      this.tvshowList = resp.results;
      this.tvshowService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      });
    });
  }

  urlBgImage(): string {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${this.tvshow.backdrop_path}`;
  }

  urlImage(): string {
    return `https://image.tmdb.org/t/p/original${this.tvshow.poster_path}`;
  }

  getDirectorName(): Cast[] {
    return this.selectedTvShowCredits.crew.filter(people => people.known_for_department == 'Directing');
  }

  getReleaseYear(): number {
    return new Date(this.tvshow.first_air_date).getFullYear();
  }

  getGenreNames(): string {
    return this.tvshow.genres.map(genre => genre.name).join(', ');
  }

  open(idmovie: number, content: any) {
    this.tvshowService.getListTvShowByIdMovie(idmovie).subscribe((trailers: TrailerListResponse) => {
      this.trailerOfMovie = trailers.results[0];
      this.trailerUrl = this.getTrailerURL(this.trailerOfMovie);
      this.modalService.open(content);
    });
  }

  getActorsList(): Cast[] {
    return this.cast.filter(people => people.known_for_department == 'Acting')
  }

  getActorImageUrl(actor: Cast): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`;
  }

  getTrailerURL(video: Trailer): SafeResourceUrl | undefined {
    if (video?.site === 'YouTube') {
      return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.key}`);
    } else if (video?.site === 'Vimeo') {
      return this.sanitazer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${video.key}`);
    } else {
      return undefined;
    }
  }
}
