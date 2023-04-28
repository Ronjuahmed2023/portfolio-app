import { WhoAmIText } from "../components/WhoAmIText"
import { WhoAmIProfile } from "../components/WhoAmIProfile"

export const WhoAmI = () => {
  return (
    <div className="bg-black section">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 justify-between items-center">
        <WhoAmIProfile />
        <WhoAmIText />
      </div>
    </div>
  )
}
