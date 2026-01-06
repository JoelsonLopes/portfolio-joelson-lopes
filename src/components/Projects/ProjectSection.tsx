import { Project } from '@/lib/types'
import { FadeIn, SlideIn, StaggerContainer } from '../animations/MotionWrappers'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <SlideIn direction="up">
        <SectionHeading title="// Projetos" />
      </SlideIn>

      <StaggerContainer className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <FadeIn key={project.priority} className="h-full">
            <ProjectCard data={project} />
          </FadeIn>
        ))}
      </StaggerContainer>
    </section>
  )
}

export default ProjectSection
