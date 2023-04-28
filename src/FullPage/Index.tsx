import ReactFullPage from "@fullpage/react-fullpage"
import { WhoAmI } from "../section/WhoAmI"
import { WhatIAmComfortableWith } from "../section/WhatIAmComfortableWith"
import { WhatToolIUse } from "../section/WhatToolIUse"
import { WhereDidIWork } from "../section/WhereDidIWork"
import { WhatOtherPeopleSay } from "../section/WhatOtherPeopleSay"
import { Contact } from "../section/Contact"

const anchors = ["who-am-i", "what-i-am-comfortable-with", "what-i-use", "where-did-i-work", "what-other-people-say", "contact"]

export const FullPageWrapper = () => {

  return (
    <ReactFullPage
      licenseKey={"P6R362EA-G56369Y4-29437F1S-2J963G7"}
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      credits={{ enabled: true, label: "full page", position: "right" }}
      render={() => {
        return (
          <>
            <WhoAmI />
            <WhatIAmComfortableWith />
            <WhatToolIUse />
            <WhereDidIWork />
            <WhatOtherPeopleSay />
            <Contact />
          </>
        )
      }}
    />
  )
}
