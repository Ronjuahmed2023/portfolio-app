interface ToolsProps {
  title: string;
  icon: string;
  items: string[];
}

export const Tools = (props: ToolsProps) => {
  const { title, items, icon } = props

  return (
    <div className="mt-4 sm:mt-10 rounded-2xl p-5 transition mb-12 sm:mb-0" style={{ backgroundColor: "#181818"}}>
      <div className="mb-2">
        <img className="h-32 w-32 m-auto" src={icon} alt={title}/>
      </div>
      <h2 className="text-lg font-bold mb-4 text-center sm:text-2xl">{title}</h2>
      <ul className="mb-8 sm:mb-0">
        {items.map((item: string, index: number) => (
          <li
            className=" text-sm my-1 font-normal text-center sm:text-base sm:font-medium"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
