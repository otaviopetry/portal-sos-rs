import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IInitiative } from './interfaces/initiative.interface';
import { InitiativeCardComponent } from './initiative-card/initiative-card.component';
import { ReportErrorComponent } from './report-error/report-error.component';

declare let Masonry: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InitiativeCardComponent,
    RouterModule,
    ReportErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //
}
