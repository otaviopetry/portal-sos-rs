import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-error',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './report-error.component.html',
  styleUrl: './report-error.component.scss',
})
export class ReportErrorComponent {
  errorDetails: string = '';
  contactEmail: string = '';

  submitReport(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    form.submit();
  }
}
