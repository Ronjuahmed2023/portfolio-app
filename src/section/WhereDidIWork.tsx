import { WhereDidIWorkContent } from "../components/WhereDidIWorkContent"
import { WhereDidIWorkSlide } from "../components/WhereDidIWorkSlide"

export const WhereDidIWork = () => {

  return (
    <div className="bg-black section">
      <div className="px-4 grid  justify-center sm:justify-between sm:grid-cols-2 sm:container sm:items-center sm:gap-11 sm:mx-auto">
        <WhereDidIWorkContent />
        <WhereDidIWorkSlide />
      </div>
    </div>
  )
}
