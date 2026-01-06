'use client'
import { SkillCategory } from '@/lib/types'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FadeIn, SlideIn } from '../animations/MotionWrappers'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), {
  ssr: false,
})

type SkillsProps = {
  skills: SkillCategory[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <FadeIn className="my-16 flex flex-col gap-8">
      <SlideIn direction="up">
        <div className="text-center">
          <p className="text-neutral text-lg">
            Foco atual: stack React/Next.js com Node.js e TypeScript, usando IA
            para acelerar entrega com qualidade.
          </p>
        </div>
      </SlideIn>
      {skills.map((category, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h3 className="text-accent text-center text-xl font-semibold">
            {category.name}
          </h3>
          <MarqueeWrapper
            className="from-primary to-primary via-marquee bg-linear-to-r"
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className="flex gap-8 lg:gap-24">
              {category.skills.map(({ name, icon }, idx) => (
                <div
                  key={idx}
                  className="font-inter text-primary-content bg-secondary/10 hover:border-accent/50 hover:shadow-neon flex items-center rounded-full border border-transparent px-4 py-2 text-xs transition-all duration-300 hover:scale-105 lg:text-base"
                >
                  {typeof icon === 'function' ||
                  (typeof icon === 'object' && 'type' in (icon as object)) ? (
                    // @ts-expect-error - Icon component type mismatch
                    <icon.type
                      // @ts-expect-error - Icon props mismatch
                      {...icon.props}
                      className="mr-2 size-6 lg:size-8"
                    />
                  ) : typeof icon === 'function' ? (
                    // For functional components
                    // @ts-expect-error - Icon component type mismatch
                    <icon className="mr-2 size-6 lg:size-8" />
                  ) : (
                    // For StaticImageData or string
                    <Image
                      src={
                        icon as string | import('next/image').StaticImageData
                      }
                      alt={name}
                      width={32}
                      height={32}
                      className="mr-2 size-6 rounded-sm object-contain lg:size-8"
                    />
                  )}
                  {name}
                </div>
              ))}
            </div>
          </MarqueeWrapper>
        </div>
      ))}
    </FadeIn>
  )
}

export default Skills
