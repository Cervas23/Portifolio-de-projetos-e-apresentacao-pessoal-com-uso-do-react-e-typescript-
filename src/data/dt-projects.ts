import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
      id: 1,
      title: 'Agência de turismo',
      description: 'Plataforma web de uma agência de turismo, com locais para viajar e com um blog de entretenimento.',
      techs: ['Next.js', 'TypeScript', 'Css Modules'],
      link: 'https://github.com/Cervas23/Ebac_Front-end_ExercicioPratico_Mod22_ViaLuz',
      imagem: '/vialuz.png'
    },
    {
      id: 2,
      title: 'Diário de Bordo',
      description: 'Plataforma web, com possibilidade de baixar o aplicativo, para registro de atividades e relatos de viagem.',
      techs: ['HTML', 'JavaScript', 'PWA'],
      link: 'https://github.com/Cervas23/Ebac_Front-end_ExercicioPratico_Mod31_DiarioBordo',
      imagem: '/DiarioBordo.png'
    },
    {
      id: 3,
      title: 'Catálogo de livros',
      description: 'Porjeto que permite criar sua própria biblioteca virtual, com opções de organização e personalização.',
      techs: ['TypeScript', 'Css Modules', 'API REST'],
      link: 'https://github.com/Cervas23/Ebac_Front-end_ExercicioPratico_Mod21-React-ts',
      imagem: '/CatalogoLivros.png'
    }
]