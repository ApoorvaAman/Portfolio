import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (): JSX.Element => {
  return (
    <>
      <footer className='mt-24 mb-5 text-center text-geo'>
        <a
          className='bg-github text-white text-base pt-1 pb-1 pl-2 pr-2 rounded'
          href='https://github.com/ApoorvaAman/Portfolio'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} /> View source code on Github
        </a>
      </footer>
      <footer className='bg-body text-white text-center p-3 text-geo'>
        Copyright &copy; 2021 Apoorva Aman
      </footer>
    </>
  )
}

export default Footer
