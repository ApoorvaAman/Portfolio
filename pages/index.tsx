import Projects from '../components/Projects'
import Intro from '../components/Intro'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Title from '../components/Title'

const Home = (): JSX.Element => {
  return (
    <>
      <Title />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
