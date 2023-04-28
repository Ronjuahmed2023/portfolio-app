export interface CompanyExperiencePros {
  id?: number;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const useCompanyExperience = (props: CompanyExperiencePros) => {
  const descriptionParts = props.description.split('<br />')


  return {
    companyName: props.companyName,
    role: props.role,
    duration: props.duration,
    descriptionPartOne: descriptionParts[0],
    descriptionPartTwo: descriptionParts[1]
  }
}
