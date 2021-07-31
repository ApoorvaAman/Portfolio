import Card from '../components/Card'

const Projects = (): JSX.Element => {
  return (
    <section className='m-5 sm:ml-10 sm:mr-10 md:ml-14 md:mr-14'>
      <h3 className='text-primary font-ubuntu font-bold text-3xl text-center'>
        Projects
      </h3>
      <div className='mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <Card
          title={'Discord Bot'}
          desc={'A bot for server moderation'}
          tags={['NodeJS', 'TypeScript']}
        />
        <Card
          title={'Task Manager'}
          desc={'Web app for managing daily tasks'}
          tags={['HTML', 'CSS', 'React', 'TypeScript', 'Create-React-App']}
        />
        <Card
          title={'Weather App'}
          desc={
            'Display weather using unoffical GraphQL wrapper for OpenWeather API'
          }
          tags={[
            'HTML',
            'CSS',
            'React',
            'Typescript',
            'GraphQL',
            'Apollo Client',
            'Create-React-App',
          ]}
        />
      </div>
    </section>
  )
}

export default Projects
