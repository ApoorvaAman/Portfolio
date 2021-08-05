const Footer = (): JSX.Element => {
  const date = new Date()

  return (
    <footer className='bg-body text-white mt-24 text-center'>
      Copyright &copy; {date.getFullYear()} Apoorva Aman
    </footer>
  )
}

export default Footer
