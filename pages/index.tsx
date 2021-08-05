import Projects from '../components/Projects'
import Intro from '../components/Intro'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = (): JSX.Element => {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
