import SectionHeading from '../SectionHeading/SectionHeading'
import Timeline from './Timeline'

const AboutSection = () => {
  return (
    <section id="about" className="bg-primary py-14">
      <div className="mx-auto max-w-[1200px] px-4">
        <SectionHeading
          title="// Sobre Mim"
          subtitle="15 anos entendendo negócios. Agora construo soluções."
        />

        <div className="mt-8 md:mt-12">
          {/* Texto e Diferenciais */}
          <div className="flex flex-col gap-6">
            <div className="text-tertiary-content space-y-4 text-base leading-relaxed lg:max-w-[70%]">
              <p>
                <strong className="text-primary-content">
                  Minha trajetória começou no comercial.
                </strong>{' '}
                Em 2010, entrei em uma distribuidora de filtros automotivos —
                leves, pesados e fora de estrada. Comecei no faturamento e, em 3
                anos, conquistei a posição de representante comercial, função
                que exerço há mais de uma década.
              </p>

              <p>
                <strong className="text-primary-content">
                  A tecnologia sempre me fascinou.
                </strong>{' '}
                Em 2015, descobri Análise e Desenvolvimento de Sistemas. Iniciei
                a faculdade, mas a vida pediu pausa. Em 2022, retomei com força
                total e me formei no final de 2024 — conciliando estudos,
                trabalho e família.
              </p>

              <p>
                <strong className="text-primary-content">
                  Hoje, uno o melhor dos dois mundos:
                </strong>{' '}
                a experiência comercial que me ensinou a entender clientes e
                entregar resultados, com a stack moderna que me permite
                construir soluções reais com React, Next.js, Node.js e
                TypeScript.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="border-border mt-4 border-t pt-6">
              <h3 className="text-primary-content mb-4 text-lg font-semibold">
                Diferenciais
              </h3>
              <ul className="text-tertiary-content grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:grid-cols-3">
                <li className="flex items-center gap-2">
                  <span className="text-accent">💼</span>
                  Comunicação clara com stakeholders
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">🎯</span>
                  Visão de produto e resultado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">🤝</span>
                  Negociação e gestão de expectativas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">📚</span>
                  Formação contínua (DevClub + Rocketseat)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">👔</span>
                  Compromisso — visto a camisa do time
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  )
}

export default AboutSection
