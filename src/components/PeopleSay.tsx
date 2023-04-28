import { usePeopleSay, PeopleSayProps } from "./hooks/usePeopleSay"

export const PeopleSay = (props: PeopleSayProps) => {
  const { descriptionPartOne, descriptionPartTwo, imageUrl, imageAlt, nameOfReviewer, role, socialProfile } = usePeopleSay(props)

  return (
    <div className="flex flex-col w-4/5 mx-auto gap-10 justify-center h-full">
      <figure className="text-white mx-4 px-4 py-6 rounded-xl relative" style={{ backgroundColor: "#181818"}}>
        <blockquote>
          <div className="h-6 text-3xl text-left text-gray-600 sm:text-5xl">“</div>
          <p className="mb-4 mx-4 italic text-sm sm:text-base">{descriptionPartOne}</p>
          <p className="italic mx-4 text-sm sm:text-base">{descriptionPartTwo}</p>
          <div className="h-3 text-3xl text-right text-gray-600 sm:text-5xl">”</div>
          <div style={{ top: "100%", width: 0, height: 0, borderLeft: "0 solid transparent", borderRight: "25px solid transparent", borderTop: "25px solid #181818", margin: 0, position: "absolute", left: "40px" }} />
        </blockquote>
      </figure>
      <div className="flex items-center gap-6 mx-4 mb-8">
        <div className="h-20 w-20">
          <img
            className="block rounded-full"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium sm:text-base">{nameOfReviewer}</p>
          <p className="text-xs font-light sm:font-medium">{role}</p>
          <div className="h-15 w-15">
            <a 
              href={socialProfile}
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
