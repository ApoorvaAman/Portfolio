import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

type CardInfo = {
  title: string
  desc: string
  tags: string[]
  github: string
  link?: string
}

const Card = ({ title, desc, tags, github, link }: CardInfo): JSX.Element => {
  return (
    <div className='p-3 border-solid border-card border-2 rounded-md flex flex-col place-content-between gap-2'>
      <div>
        <div className='flex justify-between text-lg'>
          <h5 className=' font-sans font-bold text-primary mb-3'>{title}</h5>
          <div className='inline-flex gap-2'>
            {link ? (
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            ) : null}
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon
                className='text-xl hover:text-github'
                icon={faGithub}
              />
            </a>
          </div>
        </div>
        <p className='text-base font-geo text-body'>{desc}</p>
      </div>
      <div className='flex gap-2 flex-wrap max-w-max'>
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className='text-xs text-secondary text-geo bg-card rounded-xl pl-2 pr-2 pt-1 pb-1'
            >
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Card
