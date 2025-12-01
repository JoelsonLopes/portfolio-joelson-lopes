'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { useState } from 'react'
import {
  HeroDev,
  HeroDevCyberpunk,
  HeroDevNext,
  HeroDevTech,
} from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [HeroDev, HeroDevTech, HeroDevNext, HeroDevCyberpunk]

  const ellipseRef = useRotatingAnimation({
    onStep: () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    },
  })
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
            Foco atual: stack React/Next.js com Node.js e TypeScript, usando IA
            para acelerar entrega com qualidade.
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
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={images[currentImageIndex]}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Joelson Lopes - Full Stack Developer"
              className="rounded-full object-contain p-8"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
