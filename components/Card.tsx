type Card = {
  title: string
  desc: string
  tags: string[]
}

const Card = ({ title, desc, tags }: Card): JSX.Element => {
  return (
    <div className='p-3 bg-card shadow-md relative'>
      <h5 className='text-lg font-sans font-bold text-primary'>{title}</h5>
      <br />
      <p className='text-base font-sans text-body'>{desc}</p>
      <br />
      <div className='flex gap-2 flex-wrap max-w-max absolute bottom-2'>
        {tags.map((tag, i) => {
          return (
            <span key={i} className='text-sm text-secondary'>
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Card
