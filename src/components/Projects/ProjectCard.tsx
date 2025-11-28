import { Project } from '@/lib/types'
import Image from 'next/image'
import {
  Earning,
  GithubIcon,
  Likes,
  PreviewIcon,
  Star,
  Timer,
} from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-secondary-content text-lg font-medium md:font-semibold">
              {title}
            </h3>
            {type && (
              <span
                className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${type === 'New 🔥' ? 'animate-blink text-tag' : 'text-accent'} backdrop-blur-[80px]`}
              >
                {type}
              </span>
            )}
          </div>
          <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {(visitors || numberOfSales) && (
              <IconText
                text={(visitors || numberOfSales)?.toString() || ''}
                icon={Likes}
              />
            )}
            {siteAge && <IconText text={siteAge} icon={Timer} />}
            {earned && <IconText text={earned} icon={Earning} />}
            {(ratings || githubStars) && (
              <IconText
                text={(ratings || githubStars)?.toString() || ''}
                icon={Star}
              />
            )}
          </ul>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="bg-primary text-primary-content my-4 h-[250px] overflow-scroll rounded-2xl px-4 py-2">
          <p className="text-[14px] font-normal md:text-base">
            {shortDescription}
          </p>

          {data.results && data.results.length > 0 && (
            <div className="mt-4">
              <h4 className="text-accent mb-2 text-sm font-semibold">
                Resultados:
              </h4>
              <ul className="list-inside list-disc space-y-1">
                {data.results.map((result, idx) => (
                  <li key={idx} className="text-sm font-light">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.stack && data.stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-secondary text-neutral rounded-full px-2 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
            >
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
            >
              <GithubIcon className="w-[18px] md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
