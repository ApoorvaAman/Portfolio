import Card from '../components/Card'
const Home = (): JSX.Element => {
  return (
    <>
      <div className='grid place-items-center h-screen'>
        <div className='p-5'>
          <h3 className='text-secondary text-3xl font-bold font-sans'>
            HI! I&apos;M
          </h3>
          <h1 className='text-primary text-6xl font-extrabold font-serif'>
            APOORVA AMAN
          </h1>
          <h2 className='text-secondary text-4xl font-bold font-sans mt-1.5'>
            FRONTEND DEVELOPER
          </h2>
        </div>
      </div>
      <div className='m-5'>
        <h3 className='text-primary font-serif font-bold text-3xl'>Projects</h3>
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
      </div>
    </>
  )
}

export default Home
