const timelineItems = [
  {
    year: '2010',
    title: 'Distribuição Automotiva',
    description: 'Início na área comercial — faturamento e vendas',
  },
  {
    year: '2015',
    title: 'Primeiro Contato Tech',
    description: 'Descoberta de Análise e Desenvolvimento de Sistemas',
  },
  {
    year: '2022',
    title: 'Retomada + Cursos',
    description: 'Faculdade + DevClub Pro + Rocketseat',
  },
  {
    year: '2024',
    title: 'Formado em ADS',
    description: 'Conclusão da graduação + projetos freelance',
  },
  {
    year: 'Hoje',
    title: 'Full Stack Developer',
    description: 'React, Next.js, Node.js, TypeScript + IA',
  },
]

const Timeline = () => {
  return (
    <div className="mt-12 md:mt-16">
      <h3 className="text-primary-content mb-8 text-center text-lg font-semibold">
        Minha Jornada
      </h3>

      {/* Timeline Desktop - Horizontal */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Linha horizontal */}
          <div className="bg-border absolute top-4 right-0 left-0 h-0.5" />

          <div className="grid grid-cols-5 gap-4">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Ponto */}
                <div className="bg-accent z-10 size-8 rounded-full border-4 border-[var(--color-primary)]" />

                {/* Conteúdo */}
                <div className="mt-4 text-center">
                  <span className="text-accent text-sm font-bold">
                    {item.year}
                  </span>
                  <h4 className="text-primary-content mt-1 text-sm font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-tertiary-content mt-1 text-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Mobile - Vertical */}
      <div className="block md:hidden">
        <div className="relative ml-4">
          {/* Linha vertical */}
          <div className="bg-border absolute top-0 bottom-0 left-4 w-0.5" />

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Ponto */}
                <div className="bg-accent z-10 size-8 shrink-0 rounded-full border-4 border-[var(--color-primary)]" />

                {/* Conteúdo */}
                <div className="pt-1">
                  <span className="text-accent text-sm font-bold">
                    {item.year}
                  </span>
                  <h4 className="text-primary-content mt-1 font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-tertiary-content mt-1 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
