import { Tools } from "./Tools"
import tools from "../assets/tools.json"

interface ToolsIUseProps {
  id?: number;
  icon: string;
  title: string;
  items: string[];
}

export const ToolsIUse = () => {

  return (
    <div className="text-white mx-4 grid grid-cols-1 sm:gap-12 md:grid-cols-3 md:ml-36">
      {tools.map((tool: ToolsIUseProps) => (
        <Tools
          key={tool.id}
          icon={tool.icon}
          title={tool.title}
          items={tool.items}
        />
      ))}
    </div>
  )
}
