import { Component } from '@angular/core';
import { IInitiative } from '../interfaces/initiative.interface';
import { InitiativeCardComponent } from '../initiative-card/initiative-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initiative-gallery',
  standalone: true,
  imports: [InitiativeCardComponent, CommonModule],
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
      imageUrl: '/assets/img/odara.webp',
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
      imageUrl: '/assets/img/assufrgs.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6erNylu-WT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 3,
      name: 'MTST',
      description:
        'Campanha do Movimento dos Trabalhadores Sem Teto arrecadando recursos para a Cozinha Solidária da Azenha.',
      imageUrl: '/assets/img/mtst.webp',
      types: ['PIX'],
      campaignURL: 'https://twitter.com/mtst/status/1786493868487151735',
    },
    {
      id: 4,
      name: 'Instituto Vakinha',
      description:
        'Campanha do Instituto Vakinha juntamente ao Pretinho Básico e Badin O Colono arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/vakinha.webp',
      types: ['Plataforma de doações'],
      campaignURL:
        'https://www.instagram.com/p/C6eN5wuR0W3/?utm_source=ig_web_copy_link',
    },
    {
      id: 5,
      name: 'MST',
      description:
        'Campanha do Movimento Sem Terra arrecadando recursos para atuar na crise.',
      imageUrl: '/assets/img/mst.webp',
      campaignURL:
        'https://www.instagram.com/p/C6jX-njOLiD/?utm_source=ig_web_copy_link',
      types: ['PIX'],
    },
    {
      id: 6,
      name: 'Hemocentro',
      description: 'Campanha do Hemocentro para doação de sangue.',
      imageUrl: '/assets/img/hemocentro.webp',
      types: ['Doação de sangue'],
      campaignURL:
        'https://www.instagram.com/p/C6errRSuuXy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 7,
      name: '101 Vira Latas',
      description:
        'Campanha da ONG 101 Vira Latas para atuar no amparo aos animais desabrigados.',
      imageUrl: '/assets/img/101viralatas.webp',
      types: ['Doações físicas', 'Voluntariado'],
      campaignURL:
        'https://www.instagram.com/p/C6fAnqvsQhu/?utm_source=ig_web_copy_link',
    },
    {
      id: 8,
      name: 'GRAD - Grupo de Resposta a Animais em Desastres',
      description:
        'Campanha de arrecadação do GRAD, que está atuando no resgate de animais.',
      imageUrl: '/assets/img/grad.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6eyJkaRaWN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 9,
      name: 'Defesa Civil',
      description: 'Campanha de Voluntariado para atuar junto à Defesa Civil.',
      imageUrl: '/assets/img/defesa-civil.webp',
      types: ['Voluntariado'],
      campaignURL:
        'https://www.instagram.com/p/CzcXHM6uu-L/?utm_source=ig_web_copy_link',
    },
    {
      id: 10,
      name: 'SindBancarios',
      description:
        'Campanha do Sindicato dos Bancários de POA arrecando doações físicas e financeiras para auxílio aos atingidos.',
      imageUrl: '/assets/img/sindbancarios.webp',
      types: ['Doações físicas', 'PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6eqHLBt4dj/?utm_source=ig_web_copy_link',
    },
    {
      id: 11,
      name: 'Movimento Brasil Popular',
      description:
        'Campanha do Movimento Brasil Popular arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/brasilpopular.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6hV-lkP0t8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 12,
      name: 'Diversos',
      description:
        'Post da Vila Flores reunindo diversas ações para participar.',
      imageUrl: '/assets/img/vilaflores.webp',
      types: ['Diversos'],
      campaignURL:
        'https://www.instagram.com/p/C6fBoeoOjoU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 13,
      name: 'Ateneu Libertário',
      description:
        'Campanha do Ateneu Libertário arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/ateneu.webp',
      types: ['Doações físicas', 'PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6jlFtlOFIR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 14,
      name: 'Grupo do Bem',
      description:
        'Organização de Santa Cruz do Sul arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/grupodobem.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6fGNGktMRL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 15,
      name: 'Mato do Julio',
      description:
        'Organização de Cachoeirinha arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/mato-do-julio.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/reel/C6kBR75u764/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 16,
      name: 'Frente Quilombola',
      description:
        'Campanha arrecadando recursos para auxiliar os atingidos do Quilombo dos Machados em Porto Alegre.',
      imageUrl: '/assets/img/frente-quilombola.webp',
      types: ['Doações físicas'],
      campaignURL:
        'https://www.instagram.com/p/C6hZWooOIlU/?utm_source=ig_web_copy_link',
    },
    {
      id: 17,
      name: 'CUFA',
      description:
        'Campanha da Central Única das Favelas arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/cufa.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6hNWBzpbRK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
      id: 18,
      name: 'MAB Região Sul',
      description:
        'Campanha do Movimento dos Atingidos por Barragens arrecadando recursos para auxiliar os atingidos.',
      imageUrl: '/assets/img/mabsul.webp',
      types: ['PIX'],
      campaignURL:
        'https://www.instagram.com/p/C6d5ZOJr7ts/?utm_source=ig_web_copy_link',
    },
    {
      id: 19,
      name: 'Ajuda RS',
      description: 'Site reunindo diversas campanhas atuando na crise.',
      imageUrl: '/assets/img/ajudars.webp',
      types: ['Diversos'],
      campaignURL: 'https://bento.me/ajudars',
    },
  ];

  public selectedType = '';
  public uniqueTypes: string[] = [];

  ngOnInit() {
    this.uniqueTypes = this.getUniqueTypes();
  }

  public getFilteredInitiatives() {
    if (!this.selectedType) {
      return this.initiatives;
    }

    return this.initiatives.filter((initiative) =>
      initiative.types.includes(this.selectedType)
    );
  }

  public getUniqueTypes(): string[] {
    return this.initiatives.reduce((acc: string[], initiative) => {
      const types = initiative.types;

      types.forEach((type) => {
        if (!acc.includes(type)) {
          acc.push(type);
        }
      });

      return acc;
    }, []);
  }

  public onTypeClick(type: string) {
    if (this.selectedType === type) {
      this.selectedType = '';

      return;
    }

    this.selectedType = type;
  }
}
