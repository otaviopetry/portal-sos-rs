import { Routes } from '@angular/router';
import { ReportErrorComponent } from './report-error/report-error.component';
import { AppComponent } from './app.component';
import { InitiativeGalleryComponent } from './initiative-gallery/initiative-gallery.component';

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
    path: 'informar-erro',
    component: ReportErrorComponent,
  },
];
