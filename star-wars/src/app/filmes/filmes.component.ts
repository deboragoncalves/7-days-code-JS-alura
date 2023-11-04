import { Component } from '@angular/core';
import { FilmesService, Movie } from '../filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
  
export class FilmesComponent {
  listMovies!: Array<Movie>;

  constructor(public filmesService: FilmesService) {
  }

  ngOnInit(): void {
    this.filmesService.getMovies().subscribe(response => {
      console.log(response)
      this.listMovies = response.results;
    });
  }
}
