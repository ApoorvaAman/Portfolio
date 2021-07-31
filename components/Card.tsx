type CardInfo = {
  title: string
  desc: string
  tags: string[]
}

const Card = ({ title, desc, tags }: CardInfo): JSX.Element => {
  return (
    <div className='p-3 border-solid border-card border-2 rounded-md flex flex-col place-content-between gap-2'>
      <div>
        <h5 className='text-lg font-sans font-bold text-primary mb-3'>
          {title}
        </h5>
        <p className='text-base font-geo text-body'>{desc}</p>
      </div>
      <div className='flex gap-2 flex-wrap max-w-max'>
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className='text-xs text-secondary text-geo bg-card rounded-xl pl-2 pr-2 pt-1 pb-1'
            >
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Card
