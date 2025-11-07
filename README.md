# Portfolio - Joelson Lopes

[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

> Portfólio profissional de desenvolvedor full-stack, construído com as tecnologias mais modernas do mercado.

## 🚀 Sobre o Projeto

Este é meu portfólio pessoal, onde demonstro minhas habilidades como desenvolvedor full-stack. O site apresenta meus projetos, serviços oferecidos, tecnologias que domino e formas de entrar em contato.

**Destaque especial:** Integração com ferramentas de IA para otimizar o processo de desenvolvimento.

🔗 **[Ver site ao vivo](https://seu-portfolio.vercel.app)** _(em breve)_

## ✨ Funcionalidades

- 📱 **Totalmente Responsivo** - Funciona perfeitamente em dispositivos móveis, tablets e desktops
- 🎨 **4 Temas Personalizáveis** - Light, Dark, Aqua e Retro
- ⚡ **Performance Otimizada** - Construído com Next.js 15 e Turbopack
- 🔍 **SEO Friendly** - Otimizado para mecanismos de busca
- 📬 **Formulário de Contato Funcional** - Integrado com Formspree
- 🎯 **Animações Suaves** - Experiência de usuário aprimorada
- 🤖 **Desenvolvido com IA** - Utilizando ferramentas modernas de inteligência artificial

## 🛠️ Tecnologias Utilizadas

### Core

- **[Next.js 15.5.6](https://nextjs.org/)** - Framework React com App Router e Turbopack
- **[React 19](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utilitário
- **Tailwind Animate** - Animações CSS com Tailwind

### Integrações

- **[Formspree](https://formspree.io/)** - Serviço para processamento de formulários
- **[Lucide Icons](https://lucide.dev/)** - Biblioteca de ícones moderna

### Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Git** - Controle de versão

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para executar localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/JoelsonLopes/portfolio-joelson-lopes.git
   cd portfolio-joelson-lopes
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env.local` na raiz do projeto:

   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   CONTACT_FORM_ACTION_URL=https://formspree.io/f/seu-form-id
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
portfolio-joelson-lopes/
├── src/
│   ├── app/                  # App Router do Next.js
│   │   ├── layout.tsx        # Layout principal e metadata SEO
│   │   └── page.tsx          # Página inicial
│   ├── components/           # Componentes React
│   │   ├── Hero/            # Seção de apresentação
│   │   ├── Navbar/          # Barra de navegação
│   │   ├── Projects/        # Seção de projetos
│   │   ├── Services/        # Seção de serviços
│   │   ├── Skills/          # Seção de habilidades
│   │   ├── Contact/         # Seção de contato
│   │   ├── Footer/          # Rodapé
│   │   └── Theme/           # Seletor de temas
│   ├── appData/             # Dados do aplicativo (serviços, skills)
│   ├── actions/             # Server Actions
│   ├── assets/              # Imagens e ícones
│   ├── hooks/               # Custom React Hooks
│   ├── services/            # Serviços (leitura de dados)
│   └── utils/               # Funções utilitárias
├── content/                 # Conteúdo JSON
│   ├── projects/           # Dados dos projetos
│   └── testimonials/       # Dados de depoimentos
└── public/                 # Arquivos estáticos
```

## 🎨 Personalização

### Alterar Temas

Os temas são configurados em `src/app/globals.css`. Você pode adicionar novos temas ou modificar os existentes alterando as variáveis CSS em cada seção `[data-theme="..."]`.

### Adicionar Projetos

Adicione arquivos JSON em `content/projects/` seguindo o padrão dos projetos existentes.

### Modificar Serviços/Skills

Edite o arquivo `src/appData/index.ts` para atualizar serviços e habilidades.

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente:
   - `NEXT_PUBLIC_SITE_URL`: URL do seu site
   - `CONTACT_FORM_ACTION_URL`: URL do Formspree
4. Deploy automático!

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📧 Contato

**Joelson Lopes** - Desenvolvedor Full-Stack

- 🌐 Portfolio: [em breve]
- 💼 LinkedIn: [linkedin.com/in/joelson-lopes](https://www.linkedin.com/in/joelson-lopes)
- 📧 Email: seu-email@exemplo.com
- 📍 Localização: Brasil (Disponível para trabalho remoto)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

Template base desenvolvido por [Abdul Basit](https://github.com/AbdulBasit313/nextjs-portfolio-template), personalizado e adaptado com minhas informações e melhorias.

---

**Desenvolvido com ❤️ e ☕ por Joelson Lopes**

_Utilizando ferramentas de IA para otimizar o desenvolvimento_
