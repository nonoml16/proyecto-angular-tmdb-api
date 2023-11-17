import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/models/genre.interface';
import { Cast, MovieCreditsResponse } from 'src/app/models/movie-credits.interface';
import { MovieDetailResponse } from 'src/app/models/movie-detail.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/service/movie.service';
import { Trailer, TrailerListResponse } from 'src/app/models/trailer-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  trailerOfMovie!: Trailer;
  trailerUrl: SafeResourceUrl | undefined;
  cast!: Cast[];
  crew !: Cast[];

  constructor(private movieService: MovieService, private sanitazer: DomSanitizer, private modalService: NgbModal) {
    this.movieId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.movieId).subscribe(resp => { this.movie = resp });
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
    this.movieService.getListVideoByIdMovie(idmovie).subscribe((trailers: TrailerListResponse) => {
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
