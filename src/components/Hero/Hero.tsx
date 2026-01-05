'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import Image from 'next/image'
import { HeroCodeCard, HeroLaptop } from '../../utils/images'

const Hero = () => {
  const role = useRoleSwitcher({
    roles: [
      'DESENVOLVEDOR FULL-STACK',
      'REACT/NEXT.JS EXPERT',
      'PRODUTO & RESULTADO',
    ],
  })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Olá - Eu sou Joelson Lopes
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">
              {role}
            </span>
          </h1>

          <h2 className="text-neutral mt-3">
            Foco atual em aplicações web com React/Next.js, Node.js e
            TypeScript, utilizando IA para ganhar velocidade sem perder
            qualidade.
          </h2>

          <p className="text-neutral/80 mt-2 text-sm font-medium">
            +15 projetos entregues para empresas de saúde e distribuição
            automotiva
          </p>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#contact"
              aria-label="Entre em contato"
              className="text-neutral bg-secondary hover:bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm transition-colors duration-300 hover:text-[#00071E]"
            >
              Entre em Contato
            </a>
            <a
              href="https://www.linkedin.com/in/joelsonlopes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Perfil no LinkedIn"
              className="text-neutral bg-secondary hover:bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm transition-colors duration-300 hover:text-[#00071E]"
            >
              Perfil LinkedIn
            </a>
            <a
              href="/assets/CV JOELSON LOPES.pdf"
              download="CV-Joelson-Lopes.pdf"
              aria-label="Baixar Currículo"
              className="text-neutral bg-secondary hover:bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm transition-colors duration-300 hover:text-[#00071E]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="group relative flex w-full max-w-[500px] items-center justify-center">
            {/* Laptop Base Image */}
            <div className="relative z-10 w-full transition-transform duration-500 will-change-transform group-hover:scale-105">
              <Image
                src={HeroLaptop}
                alt="Laptop with code"
                width={600}
                height={400}
                priority
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Code Card Overlay */}
            <div className="-bottom-30px absolute -right-4 z-20 w-[80%] transition-transform duration-700 ease-out will-change-transform group-hover:translate-x-4 group-hover:-translate-y-8 group-hover:rotate-3 md:-right-20 md:bottom-[-30px] md:w-[350px]">
              <Image
                src={HeroCodeCard}
                alt="Code Snippet Card"
                width={400}
                height={260}
                className="h-auto w-full rounded-lg object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
