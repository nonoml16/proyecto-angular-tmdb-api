import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/models/genre.interface';
import { Cast, MovieCreditsResponse } from 'src/app/models/movie-credits.interface';
import { MovieDetailResponse } from 'src/app/models/movie-detail.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { RatedMovie } from 'src/app/models/list-ratedmovies.interface';
import { MovieService } from 'src/app/service/movie.service';
import { Trailer } from 'src/app/models/trailer-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  movie!: MovieDetailResponse;
  credits: MovieCreditsResponse | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieId: number = 0;
  selectedMovie !: MovieDetailResponse;
  selectedMovieCredits !: MovieCreditsResponse;
  genres: Genre[] = [];
  movieList: Movie[] = [];
  trailerOfMovie !: Trailer;
  cast!: Cast[];
  crew !: Cast[];
  readonly: boolean = false;
  value: number = 0;

  constructor(private movieService: MovieService, private sanitazer: DomSanitizer, private modalService: NgbModal, private accountService: AccountService) {
    this.movieId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe(resp => {
      this.movie = resp
      this.movieService.getListVideoByIdMovie(this.movieId).subscribe(trailers => {
        this.trailerOfMovie = trailers.results[0];
      });
    });
    this.movieService.getCredits(this.movieId).subscribe(resp => {
      this.cast = resp.cast;
      this.crew = resp.crew;
    });
    this.movieService.getMovieCredits(this.movieId).subscribe(resp => { this.selectedMovieCredits = resp });
    this.movieService.getListP().subscribe(resp => {
      this.movieList = resp.results;
      this.movieService.getGenres().subscribe(respG => {
        this.genres = respG.genres;
      });
    });
    this.accountService.getRatedMovies().subscribe(answ => {
      if (answ.results.find(m => m.id == this.movieId)) {
        this.value = answ.results.find(m => m.id == this.movieId)!.rating;
      }
    });
  }

  urlBgImage(): string {
    return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${this.movie.backdrop_path}`;
  }

  urlImage(): string {
    return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
  }

  getDirectorName(): Cast[] {
    return this.selectedMovieCredits.crew.filter(people => people.known_for_department == 'Directing');
  }

  getReleaseYear(): number {
    return new Date(this.movie.release_date).getFullYear();
  }

  getGenreNames(): string {
    return this.movie.genres.map(genre => genre.name).join(', ');
  }

  open(idmovie: number, content: any) {
    this.movieService.getMovie(idmovie).subscribe(resp => {
      this.movie = resp
    });
    this.movieService.getListVideoByIdMovie(idmovie).subscribe(trailers => {
      this.trailerOfMovie = trailers.results[0];
      this.modalService.open(content);
    });
  }

  getActorsList(): Cast[] {
    return this.cast.filter(people => people.known_for_department == 'Acting')
  }

  getActorImageUrl(actor: Cast): string {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`;
  }

  getVideoUrl(trailer: Trailer): any {
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${trailer.key}`);
  }

  rateAMovie() {
    this.movieService.rateForAMovie(this.movieId, this.value).subscribe();
  }


  testDataDirector(director: String | null) {
    if (director != null)
      return director;
    return "No Data"
  }

  testDataPopularity(number: number | null) {
    if (number != null)
      return number;
    return "No Data"
  }

  testDataBirthDay(date: string | null) {
    if (date != null)
      return date;
    return "No Data"
  }

  testDataPlaceOfBirth(place_of_birth: null) {
    if (place_of_birth != null)
      return place_of_birth;
    return "No Data"
  }

  testDataBiography(biography: string | null) {
    if (biography != null)
      return biography;
    return "This actor has no biography"
  }
}
