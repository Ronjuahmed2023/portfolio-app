import { Splide, SplideSlide, Options } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'
import { CompanyExperience } from "./CompanyExperience"
import { CompanyExperiencePros } from "./hooks/useCompanyExperience"
import jobExperiences from "../assets/jobExperiences.json"

export const WhereDidIWorkExperienceSlide = () => {
  const options: Options = {
    rewind: true,
    gap: "1rem",
    perPage: 1,
    autoplay: true,
    type: "loop",
    start: 0,
    interval: 5000
  }

  return (
    <div className="text-white wrapper">
      <Splide
        options={options}
      >
        {jobExperiences.map((jobExperience: CompanyExperiencePros) => (
          <SplideSlide
            key={jobExperience.id}
          >
            <CompanyExperience
              key={jobExperience.id}
              companyName={jobExperience.companyName}
              role={jobExperience.role}
              duration={jobExperience.duration}
              description={jobExperience.description}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
