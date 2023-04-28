import { Comfort } from "./Comfort"
import comfortables from "../assets/comfortables.json"

interface ComportableProps {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const ComfortableArea = () => {

  return (
    <div className="text-white mx-4 grid grid-cols-1 sm:gap-12 md:grid-cols-3 md:ml-36">
      {comfortables && comfortables.map((comfortable: ComportableProps) => (
        <Comfort
          key={comfortable.id}
          title={comfortable.title}
          description={comfortable.description}
          icon={comfortable.icon}
        />
      ))}
    </div>
  )
}
