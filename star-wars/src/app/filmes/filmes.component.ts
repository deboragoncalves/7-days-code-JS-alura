import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Movie = {
  title: string,
  director: string,
  producer: string,
  date: string
}

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent {
  movies: Movie[] = [];
  jsonMovies = 'assets/films.json';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>(this.jsonMovies).subscribe(response => {
      let allMovies = response.results;
      for (let movie of allMovies) {
        this.movies.push({
          title: movie.title,
          director: movie.director,
          producer: movie.producer,
          date: movie.release_date
        })
      };
    });
  }
}
