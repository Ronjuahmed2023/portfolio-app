import { WhatIAmComfortableWithText } from "../components/WhatIAmComfortableWithText"
import { ComfortableArea } from "../components/ComfortableArea"

export const WhatIAmComfortableWith = () => {

  return (
    <div className="bg-black section">
      <div className="container mx-auto">
        <WhatIAmComfortableWithText />
        <ComfortableArea />
      </div>
    </div>
  )
}
