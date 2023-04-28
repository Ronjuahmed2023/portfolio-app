import { WhatOtherPeopleSayContent } from "../components/WhatOtherPeopleSayContent"
import { WhatOtherPeopleSaySlide } from "../components/WhatOtherPeopleSaySlide"

export const WhatOtherPeopleSay = () => {

  return (
    <div className="bg-black section">
      <div className="mx-4 grid overflow-x-hidden justify-center grid-cols-1 sm:justify-between sm:grid-cols-2 sm:container sm:items-center sm:gap-11 sm:mx-auto">
        <WhatOtherPeopleSayContent />
        <WhatOtherPeopleSaySlide />
      </div>
    </div>
  )
}
