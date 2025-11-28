import { StaticImageData } from 'next/image'

export interface Project {
  priority: number
  title: string
  shortDescription: string
  cover: string
  livePreview?: string
  type?: string
  githubLink?: string
  siteAge?: string
  visitors?: number
  numberOfSales?: number
  earned?: string
  ratings?: number
  githubStars?: number
  results?: string[]
  stack?: string[]
}

export interface Service {
  icon: string | StaticImageData
  title: string
  shortDescription: string
  technologies?: string
}

export interface SkillCategory {
  name: string
  skills: {
    name: string
    icon:
      | string
      | StaticImageData
      | React.ComponentType<unknown>
      | React.ReactNode
  }[]
}

export interface Heading {
  id: string
  title: string
  items: Heading[]
}

export interface Testimonial {
  name: string
  title: string
  feedback: string
  image: string
  stars: number
}
