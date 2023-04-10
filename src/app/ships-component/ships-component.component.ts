import { Component, OnInit } from '@angular/core';
import { ApiServerService } from '../services/api-server.service';
import { InterfaceListadoNaves } from '../interfaces/interface-listado-naves';
import { StarshipDetails } from '../interfaces/StarshipDetails ';

import { Router } from '@angular/router';

@Component({
  selector: 'app-ships-component',
  templateUrl: './ships-component.component.html',
  styleUrls: ['./ships-component.component.css']
})
export class ShipsComponent implements OnInit {
  starships: InterfaceListadoNaves[] = [];
  page = 1;

  constructor(private swapiService: ApiServerService) {}

  ngOnInit() {
    this.swapiService.getStarships().subscribe((starships: InterfaceListadoNaves[]) => {
      this.starships = starships;
    });
    this.loadStarships();
  }

  getStarshipId(url: string): string {
    const id = url.split('/').filter(segment => segment.length > 0).pop();
    return id || '';
  }

  loadStarships() {
    this.swapiService.getStarships(this.page).subscribe((starships: any) => {
      this.starships = [...this.starships, ...starships];
    });
  }

  loadMoreStarships() {
    this.page += 1;
    this.swapiService.getStarships(this.page).subscribe((newStarships: InterfaceListadoNaves[]) => {
      this.starships.push(...newStarships);
    });
  }
}

  //  goToStarshipDetails(starship: InterfaceListadoNaves): void {
  //   this.starshipStorage.setStarshipData(starship); // Almacena la información de la nave espacial
  //   this.router.navigate(['/starship-details']);
  // }

  // goToStarshipDetails(starship: InterfaceListadoNaves): void {
  //   this.router.navigate(['/starship-details'], { queryParams: { starship: JSON.stringify(starship) } });
  // }

  // stringifyStarship(starship: InterfaceListadoNaves): string {
  //   return JSON.stringify(starship);
  // }


