const About = (): JSX.Element => {
  return (
    <section className='ml-5 mr-5 mt-24 sm:ml-10 sm:mr-10 md:ml-14 md:mr-14'>
      <h3 className='text-primary font-ubuntu font-bold text-4xl text-center'>
        About Me
      </h3>
      <div className='mt-24 text-xl sm:text-2xl max-w-2xl ml-auto mr-auto'>
        <p className='font-bold'>
          I am Apoorva Aman, a FrontEnd Developer based in Patna, Bihar, India.
        </p>
        <br />
        <p>
          I am a graduate in Computer Science & Engineering. I enjoy building
          websites and web apps. I use React and TypeScript. I am learning web
          design alongside.
        </p>
        <p className='mt-2'>
          I am looking for an oppurtunity to start my career as a FrontEnd
          Developer. I am also open to work as a freelancer, so feel free to
          reach out!
        </p>
      </div>
    </section>
  )
}

export default About
