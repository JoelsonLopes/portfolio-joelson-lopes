// Data for portfolio
import {
  AIIcon,
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'Projeto Estoque',
    shortDescription:
      'O Stock-SP é uma aplicação web moderna desenvolvida em Next.js para gerenciamento de estoque de produtos automotivos, com foco em filtros, palhetas e óleos lubrificantes. O sistema oferece funcionalidades completas de autenticação, gestão de produtos, equivalências e importação de dados via CSV.',
    cover:
      'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656971294/waitlist-template_qr4l9k.png',
    livePreview: 'https://stock-portfolio-demo.vercel.app/',
    type: 'Freelance 🔥',
    githubLink: 'https://github.com/JoelsonLopes/stock-portfolio-demo',
    siteAge: 'Nov 2025',
  },
  {
    priority: 2,
    title: 'Sistema de Gestão do Bloco Cirúrgico',
    shortDescription:
      'Sistema web responsivo desenvolvido para a Clínica Lavinsky para gestão completa do bloco cirúrgico, focado em eficiência, escalabilidade e segurança (LGPD/HIPAA). Inclui módulos para solicitação, acompanhamento e aprovação de reservas, com interfaces diferenciadas para médicos e administradores. Destaques: resposta < 200ms em operações críticas, uptime 99.9%, autenticação segura, controle de acesso granular, logs de auditoria e backup automatizado.',
    cover:
      'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656971294/waitlist-template_qr4l9k.png',
    type: 'Freelance',
    livePreview: '',
    githubLink: 'https://github.com/JoelsonLopes/surgical-scheduler-demo',
    siteAge: '4 meses',
    visitors: '100 Visitantes',
  },
  {
    priority: 3,
    title: 'Projeto Epsilon',
    shortDescription:
      'Uma coleção de desafios de código envolventes projetados para ajudar desenvolvedores a melhorar suas habilidades em ReactJS escrevendo lógica de negócio funcional. Seu objetivo é torná-lo funcional escrevendo lógica de negócio para melhorar suas habilidades frontend.',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    type: 'Grátis 🔥',
    livePreview: 'https://example.com/epsilon',
    githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
    githubStars: '40 Estrelas',
    numberOfSales: '138 Vendas',
  },
  {
    priority: 4,
    title: 'Educação Online',
    shortDescription:
      'Um site de diretório que criei usando Next.js. Nele você pode encontrar cursos online e presenciais gratuitos e pagos. 14 academias e 12 categorias principais, cada uma com subcategorias, foram listadas.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Novo 🔥',
    livePreview: 'https://example.com/Ejucationzz',
    siteAge: '4 meses',
    visitors: '100 Visitantes',
    githubLink: '',
    earned: '',
  },
]

// Service Data
export const serviceData = [
  {
    icon: AIIcon,
    title: 'Desenvolvimento com IA',
    shortDescription:
      'Utilização de ferramentas de IA para otimizar produtividade, qualidade de código e acelerar entregas.',
  },
  {
    icon: JavaScriptIcon,
    title: 'Desenvolvimento JavaScript',
    shortDescription:
      'Criação de aplicações web dinâmicas e interativas usando JavaScript moderno.',
  },
  {
    icon: ReactIcon,
    title: 'Desenvolvimento React.js',
    shortDescription:
      'Construção de interfaces modernas e responsivas com React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Backend Node.js',
    shortDescription:
      'Desenvolvimento de aplicações server-side escaláveis usando Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Desenvolvimento Next.js',
    shortDescription:
      'Criação de aplicações React com renderização server-side usando Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'Desenvolvimento TypeScript',
    shortDescription:
      'Garantia de código robusto e manutenível com TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Estilização Tailwind CSS',
    shortDescription:
      'Design de interfaces bonitas e responsivas com Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'Ferramentas de IA',
    icon: AIIcon,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS,
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
