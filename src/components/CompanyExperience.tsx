import { useCompanyExperience, CompanyExperiencePros } from "./hooks/useCompanyExperience"

export const CompanyExperience = (props: CompanyExperiencePros) => {
  const { companyName, role, duration, descriptionPartOne, descriptionPartTwo } = useCompanyExperience(props)

  return (
    <div className="grid grid-rows-1 h-full place-items-center">
      <div className="mb-8 w-3/4 rounded-2xl p-5" style={{ backgroundColor: "#181818"}}>
        <h1 className="text-3xl font-black tracking-wider mb-4 mx-4 sm:text-4xl sm:mx-4 md:mx-0">{companyName}</h1>
        <p className="text-xs mb-1 mx-4 sm:text-sm sm:mx-4 md:mx-0">{role}</p>
        <p className="opacity-60 text-xs mb-4 mx-4 sm:text-sm sm:mx-4 md:mx-0">{duration}</p>
        <p className="mb-4 leading-6 mx-4 sm:leading-7 sm:mx-4 md:mx-0">{descriptionPartOne}</p>
        <p className="leading-6 mx-4 sm:leading-7 sm:mx-4 md:mx-0">{descriptionPartTwo}</p>
      </div>
    </div>
  )
}
