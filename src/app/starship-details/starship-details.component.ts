
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarshipService } from '../services/starship.service';
import { Pilot } from '../interfaces/pilot';
import { Movie } from '../interfaces/movie';


@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styles: [``]
})
export class StarshipDetailsComponent implements OnInit {
  starship: any;
  pilots: Pilot[] = [];
  movies: Movie[] = [];

  constructor(private route: ActivatedRoute, private starshipService: StarshipService) { }

 ngOnInit(): void {
  
  const id = this.route.snapshot.paramMap.get('id');
  if (id) { // Comprueba si 'id' no es nulo
    this.starshipService.getStarship(id).subscribe(starship => {
      console.log('Starship data:', starship); 
      this.starship = starship;
      this.loadPilots(); 
      this.loadMovies();
    });
  }

 
}
loadPilots(): void {
  for (const pilotUrl of this.starship.pilots) {
    this.starshipService.getPilot(pilotUrl).subscribe((pilot: Pilot) => {
      console.log('Pilot data:', pilot);
      this.pilots.push(pilot);
    });
  }
}


loadMovies(): void {
  for (const movieUrl of this.starship.films) {
    this.starshipService.getMovie(movieUrl).subscribe((movie: Movie) => {
      this.movies.push(movie);
    });
  }
}


}