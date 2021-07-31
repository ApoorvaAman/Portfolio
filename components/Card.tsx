type CardInfo = {
  title: string
  desc: string
  tags: string[]
}

const Card = ({ title, desc, tags }: CardInfo): JSX.Element => {
  return (
    <div className='p-3 bg-card shadow-md relative flex flex-col place-content-between gap-2'>
      <div>
        <h5 className='text-lg font-sans font-bold text-primary'>{title}</h5>
        <br />
        <p className='text-base font-geo text-body'>{desc}</p>
      </div>
      <div className='flex gap-2 flex-wrap max-w-max'>
        {tags.map((tag, i) => {
          return (
            <span key={i} className='text-xs text-secondary text-geo'>
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Card
