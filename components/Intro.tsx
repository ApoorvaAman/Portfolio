const Intro = (): JSX.Element => {
  return (
    <section className='grid place-items-center h-screen'>
      <div className='ml-5'>
        <h3 className='text-secondary text-xl sm:text-3xl font-bold font-geo'>
          HI! I&apos;M
        </h3>
        <h1 className='text-primary text-3xl sm:text-6xl font-extrabold font-ubuntu'>
          APOORVA AMAN
        </h1>
        <h2 className='text-secondary text-xl sm:text-4xl font-bold font-geo mt-1.5'>
          FRONTEND DEVELOPER
        </h2>
        <br />
        <a className='p-2 border-2 text-cta text-lg sm:text-xl' href='#contact'>
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Intro
