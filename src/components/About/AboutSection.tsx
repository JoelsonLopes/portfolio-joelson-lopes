import { AboutMe } from '@/utils/images'
import Image from 'next/image'
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
          {/* Grid Layout: Text + Photo */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6">
              <div className="text-tertiary-content space-y-4 text-base leading-relaxed">
                <p>
                  <strong className="text-primary-content">
                    Minha trajetória começou no comercial.
                  </strong>{' '}
                  Em 2010, entrei em uma distribuidora de filtros automotivos —
                  leves, pesados e fora de estrada. Comecei no faturamento e, em
                  3 anos, conquistei a posição de representante comercial,
                  função que exerço há mais de uma década.
                </p>

                <p>
                  <strong className="text-primary-content">
                    A tecnologia sempre me fascinou.
                  </strong>{' '}
                  Em 2015, descobri Análise e Desenvolvimento de Sistemas.
                  Iniciei a faculdade, mas a vida pediu pausa. Em 2022, retomei
                  com força total e me formei no final de 2024 — conciliando
                  estudos, trabalho e família.
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
                <ul className="text-tertiary-content grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
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

            {/* Right Column: Photo */}
            <div className="group relative flex justify-center md:justify-end">
              <div className="border-primary/20 bg-primary/5 hover-card-neon relative overflow-hidden rounded-2xl border p-2 backdrop-blur-sm">
                <Image
                  src={AboutMe}
                  alt="Joelson Lopes"
                  width={400}
                  height={500}
                  className="h-auto w-full max-w-[350px] rounded-xl object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Decorative Elements */}
                <div className="bg-accent absolute top-4 right-4 h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="bg-primary absolute bottom-4 left-4 h-2 w-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
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
