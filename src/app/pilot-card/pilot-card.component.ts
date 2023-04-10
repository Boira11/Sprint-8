import { Component, Input } from '@angular/core';
import { Pilot } from '../interfaces/pilot';

@Component({
  selector: 'app-pilot-card',
  templateUrl: './pilot-card.component.html',
  styleUrls: ['./pilot-card.component.css']
})
export class PilotCardComponent {
  @Input() pilot!: Pilot;
}