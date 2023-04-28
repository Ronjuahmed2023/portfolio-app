interface ComfortProps {
  icon: string;
  title: string;
  description: string;
}

export const Comfort = (props: ComfortProps) => {
  const { icon, title, description } = props

  return (
    <div className="mt-4 sm:mt-10 rounded-2xl p-5 transition mb-12 sm:mb-0" style={{ backgroundColor: "#181818"}}>
      <div className="mb-2">
        <img className="h-32 w-32 m-auto sm:m-0" src={icon} alt={title} />
      </div>
      <h2 className="text-lg font-bold mb-4 ml-0 text-center sm:ml-5 sm:text-left  sm:text-2xl">{title}</h2>
      <p className="text-base leading-6 pb-4 ml-0 text-center sm:ml-5 sm:text-left">
        {description}
      </p>
    </div>
  )
}
