export interface PeopleSayProps {
  id?: number;
  reviewDescription: string;
  person: {
    imageUrl: string;
    image_alt: string;
    role: string;
    social_url: {
      linkedin: string;
    }
  }
}

export const usePeopleSay = (props: PeopleSayProps) => {
  const descriptionParts = props.reviewDescription.split('<br />')
  const imageUrl = props.person.imageUrl
  const imageAlt = props.person.image_alt
  const nameOfReviewer = props.person.image_alt
  const role = props.person.role
  const socialProfile = props.person.social_url.linkedin

  return {
    descriptionPartOne: descriptionParts[0],
    descriptionPartTwo: descriptionParts[1],
    imageUrl,
    imageAlt,
    nameOfReviewer,
    role,
    socialProfile
  }
}
