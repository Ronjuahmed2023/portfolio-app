import { WhatToolIUseText } from "../components/WhatToolIUseText"
import { ToolsIUse } from "../components/ToolsIUse"

export const WhatToolIUse = () => {

  return (
    <div className="bg-black section">
      <div className="container mx-auto">
        <WhatToolIUseText />
        <ToolsIUse />
      </div>
    </div>
  )
}
