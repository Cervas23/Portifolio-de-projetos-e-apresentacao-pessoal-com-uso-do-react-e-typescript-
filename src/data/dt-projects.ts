import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
      id: 1,
      title: 'Sistema de Gestão',
      description: 'Plataforma web para gerenciamento de processos empresariais com dashboard analytics.',
      techs: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
      imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      id: 2,
      title: 'App Mobile',
      description: 'Aplicativo de produtividade com sincronização em tempo real e interface intuitiva.',
      techs: ['React Native', 'Firebase', 'TypeScript'],
      link: '#',
      imagem: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop'
    },
    {
      id: 3,
      title: 'API REST',
      description: 'API escalável para integração de sistemas com documentação completa e testes automatizados.',
      techs: ['Python', 'FastAPI', 'Docker'],
      link: '#',
      imagem: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop'
    }
]