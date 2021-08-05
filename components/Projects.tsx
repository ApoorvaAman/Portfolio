import Card from '../components/Card'

const Projects = (): JSX.Element => {
  return (
    <section className='ml-5 mr-5 sm:ml-10 sm:mr-10 md:ml-28 md:mr-28'>
      <h3 className='text-primary font-ubuntu font-semibold text-4xl text-center'>
        Projects
      </h3>
      <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <Card
          title={'Artemis'}
          desc={'A discord bot for server moderation'}
          tags={['NodeJS', 'TypeScript', 'Discord.JS']}
          github={'https://github.com/ApoorvaAman/Artemis'}
        />
        <Card
          title={'Task Manager'}
          desc={'Simple web app for managing daily tasks'}
          tags={['HTML', 'CSS', 'React', 'TypeScript', 'Create-React-App']}
          github={'https://github.com/ApoorvaAman/Task-Manager'}
          link={'http://royal-seashore.surge.sh/'}
        />
        <Card
          title={'Weather App'}
          desc={
            'Display current weather using unoffical GraphQL wrapper for OpenWeather API'
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
          github={'https://github.com/ApoorvaAman/Weather-App'}
          link={'https://weather-graphql-react.netlify.app/'}
        />
      </div>
    </section>
  )
}

export default Projects
