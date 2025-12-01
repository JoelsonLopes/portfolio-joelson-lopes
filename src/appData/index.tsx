// Data for portfolio
import {
  AIIcon,
  ExpressjsIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '@/utils/icons'

import * as LobeIcons from '@lobehub/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Projeto Estoque',
    shortDescription:
      'O Stock-SP é uma aplicação web moderna desenvolvida em Next.js para gerenciamento de estoque de produtos automotivos. O sistema oferece funcionalidades completas de autenticação, gestão de produtos, equivalências e importação de dados via CSV.',
    cover:
      'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656971294/waitlist-template_qr4l9k.png',
    livePreview: 'https://stock-portfolio-demo.vercel.app/',
    type: 'Freelance 🔥',
    githubLink: 'https://github.com/JoelsonLopes/stock-portfolio-demo',
    siteAge: 'Nov 2025',
    results: [
      'Redução de 40% no tempo de cadastro de produtos',
      'Gestão eficiente de +1000 itens',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
  },
  {
    priority: 2,
    title: 'Sistema de Gestão do Bloco Cirúrgico',
    shortDescription:
      'Sistema web responsivo para gestão completa do bloco cirúrgico, focado em eficiência, escalabilidade e segurança (LGPD/HIPAA). Inclui módulos para solicitação, acompanhamento e aprovação de reservas.',
    cover:
      'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656971294/waitlist-template_qr4l9k.png',
    type: 'Freelance',
    livePreview: '',
    githubLink: 'https://github.com/JoelsonLopes/surgical-scheduler-demo',
    siteAge: '8 meses',
    results: [
      'Resposta < 200ms em operações críticas',
      'Uptime de 99.9% garantido',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
]

// Service Data
export const serviceData = [
  {
    icon: AIIcon,
    title: 'Desenvolvimento Potencializado por IA',
    shortDescription:
      'Aceleração do desenvolvimento e garantia de qualidade superior utilizando as mais recentes ferramentas de Inteligência Artificial.',
    technologies: 'Copilot, ChatGPT, Claude, Perplexity, Gemini',
  },
  {
    icon: NextjsIcon,
    title: 'Aplicações Web Full-Stack',
    shortDescription:
      'Desenvolvimento de ponta a ponta, desde interfaces responsivas até backends escaláveis e seguros.',
    technologies: 'React, Next.js, Node.js, NestJS',
  },
  {
    icon: TypescriptIcon,
    title: 'Sistemas e Painéis Administrativos',
    shortDescription:
      'Criação de dashboards intuitivos e sistemas internos para otimização de processos de negócio.',
    technologies: 'TypeScript, Tailwind, Shadcn/UI',
  },
]

// Skill List
export const skillList = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', icon: ReactIcon },
      { name: 'Next.js', icon: NextjsIcon },
      { name: 'TypeScript', icon: TypescriptIcon },
      { name: 'Tailwind CSS', icon: TailwindCSS },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: NodejsIcon },
      { name: 'Nest.js', icon: NestjsIcon },
      { name: 'Express.js', icon: ExpressjsIcon },
      { name: 'Socket.io', icon: SocketIcon },
    ],
  },
  {
    name: 'Dev Tools / IA',
    skills: [
      {
        name: 'ChatGPT',
        icon: <LobeIcons.OpenAI color="#ffff" />,
      },
      {
        name: 'Claude',
        icon: LobeIcons.Claude.Color,
      },
      {
        name: 'Perplexity',
        icon: LobeIcons.Perplexity.Color,
      },
      {
        name: 'Gemini',
        icon: LobeIcons.Gemini.Color,
      },
    ],
  },
]

export const footerLinks = [
  { title: 'Início', href: '/' },
  { title: 'Projetos', href: '#projects' },
  {
    title: 'Serviços',
    href: '#services',
  },
  {
    title: 'Contato',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    label: 'Claro',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    label: 'Escuro',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    label: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    label: 'Retrô',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['PT-BR', 'EN']
