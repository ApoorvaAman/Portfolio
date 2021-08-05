import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Contact = (): JSX.Element => {
  return (
    <section className='mt-24 ml-5 mr-5 sm:ml-10 sm:mr-10 md:ml-28 md:mr-28'>
      <h3
        id='contact'
        className='text-primary font-semibold font-ubuntu text-4xl text-center'
      >
        Get in Touch
      </h3>
      <div className='mt-24 text-xl font-geo grid place-items-center grid-cols-1 gap-4 sm:grid-cols-3'>
        <a
          href='https://twitter.com/apoorva_aman'
          target='_blank'
          rel='noreferrer'
          className='pt-1 pb-1 pl-3 pr-3 border-2 rounded-md hover:text-white hover:bg-twitter'
        >
          <FontAwesomeIcon icon={faTwitter} /> Twitter
        </a>
        <a
          href='https://www.linkedin.com/in/apoorva-aman/'
          target='_blank'
          rel='noreferrer'
          className='pt-1 pb-1 pl-3 pr-3 border-2 rounded-md  hover:text-white hover:bg-linkedin'
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href='https://github.com/ApoorvaAman'
          target='_blank'
          rel='noreferrer'
          className='pt-1 pb-1 pl-3 pr-3 border-2 rounded-md hover:text-white hover:bg-github'
        >
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
    </section>
  )
}

export default Contact
