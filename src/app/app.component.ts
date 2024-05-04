import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IInitiative } from './interfaces/initiative.interface';
import { InitiativeCardComponent } from './initiative-card/initiative-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InitiativeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public initiatives: IInitiative[] = [
    {
      id: 1,
      name: 'Odara',
      description:
        'Empresa da iniciativa privada que está recolhendo doações juntamente ao Instituto Caldeira para destinar às populações do Vale do Taquari e Vale do Rio Pardo.',
      imageUrl: 'https://via.placeholder.com/400',
      regions: ['Vale do Taquari', 'Vale do Rio Pardo'],
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/400',
      regions: ['Vale do Taquari'],
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/400',
      regions: ['Vale do Taquari'],
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/400',
      regions: ['Vale do Taquari'],
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/400',
      regions: ['Vale do Taquari'],
    },
    {
      id: 2,
      name: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/400',
      regions: ['Vale do Taquari'],
    },
  ];
}
