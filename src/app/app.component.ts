import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IInitiative } from './interfaces/initiative.interface';
import { InitiativeCardComponent } from './initiative-card/initiative-card.component';

declare let Masonry: any;

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
        'Empresa da iniciativa privada que está recolhendo doações juntamente ao <strong>Instituto Caldeira</strong> para destinar às populações atingidas do Vale do Taquari e Vale do Rio Pardo.',
      imageUrl: '/assets/img/odara.jpg',
      regions: ['Vale do Taquari', 'Vale do Rio Pardo'],
      types: ['Doações físicas'],
      campaignURL:
        'https://www.instagram.com/p/C6eIxUAsyQ1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 2,
      name: 'Universidades Federais',
      description:
        'Campanha de Associações ligadas à <strong>UFRGS</strong>, <strong>UFCSPA</strong> e <strong>IFRS</strong>.',
      imageUrl: '/assets/img/assufrgs.jpg',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6erNylu-WT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 3,
      name: 'MTST',
      description:
        'Campanha do Movimento dos Trabalhadores Sem Teto arrecadando recursos para a Cozinha Solidária da Azenha.',
      imageUrl: '/assets/img/mtst.jpeg',
      types: ['PIX'],
      campaignURL: 'https://twitter.com/mtst/status/1786493868487151735',
    },
    {
      id: 4,
      name: 'Instituto Vakinha',
      description:
        'Campanha do Instituto Vakinha juntamente ao Pretinho Básico e Badin O Colono arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/vakinha.jpg',
      types: ['Plataforma de doações'],
      campaignURL:
        'https://www.instagram.com/p/C6eN5wuR0W3/?utm_source=ig_web_copy_link',
    },
  ];
}
