import { Routes } from '@angular/router';
import { ReportErrorComponent } from './report-error/report-error.component';
import { AppComponent } from './app.component';
import { InitiativeGalleryComponent } from './initiative-gallery/initiative-gallery.component';
import { DivulgeInitiativeComponent } from './divulge-initiative/divulge-initiative.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'iniciativas',
  },
  {
    path: 'iniciativas',
    component: InitiativeGalleryComponent,
  },
  {
    path: 'divulgar-iniciativa',
    component: DivulgeInitiativeComponent,
  },
  {
    path: 'informar-erro',
    component: ReportErrorComponent,
  },
];
