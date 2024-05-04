import { Component, Input } from '@angular/core';
import { IInitiative } from '../interfaces/initiative.interface';

@Component({
  selector: 'app-initiative-card',
  standalone: true,
  imports: [],
  templateUrl: './initiative-card.component.html',
  styleUrl: './initiative-card.component.scss',
})
export class InitiativeCardComponent {
  @Input() initiative!: IInitiative;
}
