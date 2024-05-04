import { Component } from '@angular/core';
import { IInitiative } from '../interfaces/initiative.interface';
import { InitiativeCardComponent } from '../initiative-card/initiative-card.component';

@Component({
  selector: 'app-initiative-gallery',
  standalone: true,
  imports: [InitiativeCardComponent],
  templateUrl: './initiative-gallery.component.html',
  styleUrl: './initiative-gallery.component.scss',
})
export class InitiativeGalleryComponent {
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
    {
      id: 5,
      name: 'MST',
      description:
        'Campanha do Movimento Sem Terra arrecadando recursos para atuar na crise.',
      imageUrl: '/assets/img/mst.jpg',
      campaignURL:
        'https://www.instagram.com/p/C6jX-njOLiD/?utm_source=ig_web_copy_link',
      types: ['PIX'],
    },
    {
      id: 6,
      name: 'Hemocentro',
      description: 'Campanha do Hemocentro para doação de sangue.',
      imageUrl: '/assets/img/hemocentro.jpg',
      types: ['Doação de sangue'],
      campaignURL:
        'https://www.instagram.com/p/C6errRSuuXy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 7,
      name: '101 Vira Latas',
      description:
        'Campanha da ONG 101 Vira Latas para atuar no amparo aos animais desabrigados.',
      imageUrl: '/assets/img/101viralatas.jpg',
      types: ['Doações físicas', 'Voluntariado'],
      campaignURL:
        'https://www.instagram.com/p/C6fAnqvsQhu/?utm_source=ig_web_copy_link',
    },
    {
      id: 8,
      name: 'GRAD - Grupo de Resposta a Animais em Desastres',
      description:
        'Campanha de arrecadação do GRAD, que está atuando no resgate de animais.',
      imageUrl: '/assets/img/grad.jpg',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6eyJkaRaWN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 9,
      name: 'Defesa Civil',
      description: 'Campanha de Voluntariado para atuar junto à Defesa Civil.',
      imageUrl: '/assets/img/defesa-civil.jpg',
      types: ['Voluntariado'],
      campaignURL:
        'https://www.instagram.com/p/CzcXHM6uu-L/?utm_source=ig_web_copy_link',
    },
    {
      id: 10,
      name: 'SindBancarios',
      description:
        'Campanha do Sindicato dos Bancários de POA arrecando doações físicas e financeiras para auxílio aos atingidos.',
      imageUrl: '/assets/img/sindbancarios.jpg',
      types: ['Doações físicas', 'PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6eqHLBt4dj/?utm_source=ig_web_copy_link',
    },
    {
      id: 11,
      name: 'Movimento Brasil Popular',
      description:
        'Campanha do Movimento Brasil Popular arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/brasilpopular.jpg',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6hV-lkP0t8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 12,
      name: 'Diversos',
      description:
        'Post da Vila Flores reunindo diversas ações para participar.',
      imageUrl: '/assets/img/vilaflores.jpg',
      types: ['Diversos'],
      campaignURL:
        'https://www.instagram.com/p/C6fBoeoOjoU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 13,
      name: 'Ateneu Libertário',
      description:
        'Campanha do Ateneu Libertário arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/ateneu.jpg',
      types: ['Doações físicas', 'PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6jlFtlOFIR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ];
}
