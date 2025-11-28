'use client'
import { SkillCategory } from '@/lib/types'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), {
  ssr: false,
})

type SkillsProps = {
  skills: SkillCategory[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="my-16 flex flex-col gap-8">
      <div className="text-center">
        <p className="text-neutral text-lg">
          Foco atual: stack React/Next.js com Node.js e TypeScript, usando IA
          para acelerar entrega com qualidade.
        </p>
      </div>
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
                <span
                  key={idx}
                  className="font-inter text-primary-content flex items-center text-xs lg:text-base"
                >
                  {typeof icon === 'function' ||
                  (typeof icon === 'object' && 'type' in (icon as object)) ? (
                    // @ts-expect-error - Icon component type mismatch
                    <icon.type
                      // @ts-expect-error - Icon props mismatch
                      {...icon.props}
                      className="mx-2 size-11 lg:size-14"
                    />
                  ) : typeof icon === 'function' ? (
                    // For functional components
                    // @ts-expect-error - Icon component type mismatch
                    <icon className="mx-2 size-11 lg:size-14" />
                  ) : (
                    // For StaticImageData or string
                    <Image
                      src={
                        icon as string | import('next/image').StaticImageData
                      }
                      alt={name}
                      className="mx-2 size-11 lg:size-14"
                    />
                  )}
                  {name}
                </span>
              ))}
            </div>
          </MarqueeWrapper>
        </div>
      ))}
    </div>
  )
}

export default Skills
